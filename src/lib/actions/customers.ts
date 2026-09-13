"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function getCustomers() {
  const supabase = createClient()
  const { data, error } = await supabase
    .from("customers")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching customers:", error)
    return []
  }
  return data
}

export async function createCustomer(formData: FormData) {
  const supabase = createClient()
  
  const newCustomer = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    address: formData.get("address") as string,
  }

  const { error } = await supabase
    .from("customers")
    .insert([newCustomer])

  if (error) {
    console.error("Error creating customer:", error)
    throw new Error("Impossible de créer le client")
  }

  revalidatePath("/customers")
}

export async function deleteCustomer(id: string) {
  const supabase = createClient()
  
  const { error } = await supabase
    .from("customers")
    .delete()
    .eq("id", id)

  if (error) {
    console.error("Error deleting customer:", error)
    throw new Error("Impossible de supprimer le client")
  }

  revalidatePath("/customers")
}
