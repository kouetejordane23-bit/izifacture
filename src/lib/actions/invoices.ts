/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function getInvoices() {
  const supabase = createClient()
  
  // Fetch invoices with customer data
  const { data, error } = await supabase
    .from("invoices")
    .select(`
      *,
      customer:customers(*),
      items:invoice_items(*)
    `)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching invoices:", error)
    return []
  }

  // Calculate totals
  return data.map(invoice => {
    const subtotal = invoice.items.reduce((sum: number, item: any) => sum + (item.quantity * item.price), 0);
    const afterDiscount = Math.max(0, subtotal - (invoice.discount || 0));
    const taxAmount = afterDiscount * ((invoice.tax_rate || 0) / 100);
    const total = afterDiscount + taxAmount;

    return {
      ...invoice,
      subtotal,
      taxAmount,
      total
    }
  })
}

export async function getInvoiceById(id: string) {
  const supabase = createClient()
  
  const { data: invoice, error } = await supabase
    .from("invoices")
    .select(`
      *,
      customer:customers(*),
      items:invoice_items(*)
    `)
    .eq("id", id)
    .single()

  if (error || !invoice) {
    return null
  }

  const subtotal = invoice.items.reduce((sum: number, item: any) => sum + (item.quantity * item.price), 0);
  const afterDiscount = Math.max(0, subtotal - (invoice.discount || 0));
  const taxAmount = afterDiscount * ((invoice.tax_rate || 0) / 100);
  const total = afterDiscount + taxAmount;

  return {
    ...invoice,
    subtotal,
    taxAmount,
    total
  }
}

export async function createInvoice(invoiceData: any, itemsData: any[]) {
  const supabase = createClient()
  
  // 1. Insert Invoice
  const { data: newInvoice, error: invoiceError } = await supabase
    .from("invoices")
    .insert([invoiceData])
    .select()
    .single()

  if (invoiceError || !newInvoice) {
    console.error("Error creating invoice:", invoiceError)
    throw new Error("Impossible de créer la facture")
  }

  // 2. Insert Items
  if (itemsData.length > 0) {
    const itemsToInsert = itemsData.map(item => ({
      ...item,
      invoice_id: newInvoice.id
    }))

    const { error: itemsError } = await supabase
      .from("invoice_items")
      .insert(itemsToInsert)

    if (itemsError) {
      console.error("Error creating invoice items:", itemsError)
      // Ideally we should rollback here, but for now we throw
      throw new Error("Impossible de créer les lignes de la facture")
    }
  }

  revalidatePath("/invoices")
  revalidatePath("/dashboard")
  
  return newInvoice
}

export async function updateInvoiceStatus(id: string, status: string) {
  const supabase = createClient()
  
  const { error } = await supabase
    .from("invoices")
    .update({ status })
    .eq("id", id)

  if (error) {
    console.error("Error updating invoice:", error)
    throw new Error("Impossible de mettre à jour la facture")
  }

  revalidatePath("/invoices")
  revalidatePath("/dashboard")
}

export async function getDashboardStats() {
  const invoices = await getInvoices()
  
  const totalRevenue = invoices.filter(inv => inv.status === 'paid').reduce((sum, inv) => sum + inv.total, 0)
  const pendingRevenue = invoices.filter(inv => inv.status === 'sent').reduce((sum, inv) => sum + inv.total, 0)
  const overdueRevenue = invoices.filter(inv => inv.status === 'overdue').reduce((sum, inv) => sum + inv.total, 0)
  
  return {
    totalRevenue,
    pendingRevenue,
    overdueRevenue,
    totalInvoices: invoices.length,
    pendingCount: invoices.filter(inv => inv.status === 'sent').length,
    overdueCount: invoices.filter(inv => inv.status === 'overdue').length,
  }
}
