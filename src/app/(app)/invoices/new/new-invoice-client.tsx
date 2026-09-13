"use client"

import { useState } from "react"
import { Plus, Trash2, ChevronLeft, Loader2 } from "lucide-react"
import Link from "next/link"
import { formatCurrency } from "@/lib/utils/format-currency"
import { formatDate } from "@/lib/utils/dates"
import { createInvoice } from "@/lib/actions/invoices"
import { useRouter } from "next/navigation"

export function NewInvoiceClient({ customers }: { customers: any[] }) {
  const router = useRouter()
  const [isSaving, setIsSaving] = useState(false)
  const [invoice, setInvoice] = useState({
    customerId: customers.length > 0 ? customers[0].id : "",
    issueDate: new Date().toISOString().split('T')[0],
    dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    paymentTerms: "Net 14",
    items: [
      { id: Date.now().toString(), description: "", quantity: 1, price: 0 },
    ],
    discount: 0,
    taxRate: 18,
    notes: "Merci pour votre confiance. Veuillez procéder au paiement avant la date d'échéance. Pour toute question, n'hésitez pas à nous contacter."
  })

  const customer = customers.find(c => c.id === invoice.customerId)

  const subtotal = invoice.items.reduce((acc, item) => acc + (item.quantity * item.price), 0)
  const afterDiscount = Math.max(0, subtotal - invoice.discount)
  const taxAmount = afterDiscount * (invoice.taxRate / 100)
  const total = afterDiscount + taxAmount

  const updateItem = (index: number, field: string, value: string | number) => {
    const newItems = [...invoice.items]
    newItems[index] = { ...newItems[index], [field]: value }
    setInvoice({ ...invoice, items: newItems })
  }

  const addItem = () => {
    setInvoice({
      ...invoice,
      items: [...invoice.items, { id: Date.now().toString(), description: "", quantity: 1, price: 0 }]
    })
  }

  const removeItem = (index: number) => {
    const newItems = [...invoice.items]
    newItems.splice(index, 1)
    setInvoice({ ...invoice, items: newItems })
  }

  const handleSave = async (status: string) => {
    if (!invoice.customerId) return alert("Veuillez sélectionner un client")
    if (invoice.items.some(i => !i.description)) return alert("Toutes les lignes doivent avoir une description")
    
    setIsSaving(true)
    try {
      const invoiceData = {
        customer_id: invoice.customerId,
        issue_date: invoice.issueDate,
        due_date: invoice.dueDate,
        payment_terms: invoice.paymentTerms,
        discount: invoice.discount,
        tax_rate: invoice.taxRate,
        notes: invoice.notes,
        status: status, // "draft" or "sent"
      }
      
      const itemsData = invoice.items.map(item => ({
        description: item.description,
        quantity: item.quantity,
        price: item.price
      }))

      await createInvoice(invoiceData, itemsData)
      router.push("/invoices")
    } catch (error) {
      alert("Erreur lors de la création de la facture")
      setIsSaving(false)
    }
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <Link href="/invoices" className="text-sm font-medium text-gray-500 hover:text-gray-900 flex items-center gap-1 mb-2 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Retour
          </Link>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Créer une facture</h2>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button 
            onClick={() => handleSave("draft")}
            disabled={isSaving}
            className="flex-1 sm:flex-none px-4 py-2.5 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-50 transition-colors shadow-sm disabled:opacity-50"
          >
            Brouillon
          </button>
          <button 
            onClick={() => handleSave("sent")}
            disabled={isSaving}
            className="flex-1 sm:flex-none px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors shadow-sm flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSaving && <Loader2 className="w-4 h-4 animate-spin" />}
            Créer la facture
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Left Column: Form */}
        <div className="space-y-6">
          <h3 className="text-sm font-medium text-gray-500">Détails de facturation</h3>
          
          <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Client <span className="text-red-500">*</span></label>
              <select 
                value={invoice.customerId}
                onChange={(e) => setInvoice({...invoice, customerId: e.target.value})}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 text-sm bg-white"
              >
                {customers.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Adresse de facturation <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                readOnly
                value={customer?.address || ""}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500 text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Date d'émission <span className="text-red-500">*</span></label>
                <input 
                  type="date" 
                  value={invoice.issueDate}
                  onChange={(e) => setInvoice({...invoice, issueDate: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Date d'échéance <span className="text-red-500">*</span></label>
                <input 
                  type="date" 
                  value={invoice.dueDate}
                  onChange={(e) => setInvoice({...invoice, dueDate: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Conditions <span className="text-red-500">*</span></label>
                <select 
                  value={invoice.paymentTerms}
                  onChange={(e) => setInvoice({...invoice, paymentTerms: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 text-sm bg-white"
                >
                  <option value="Net 14">Net 14 jours</option>
                  <option value="Net 30">Net 30 jours</option>
                  <option value="Due on receipt">À réception</option>
                </select>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <label className="block text-sm font-medium text-gray-700 mb-4">Lignes de la facture <span className="text-red-500">*</span></label>
              
              <div className="hidden sm:grid grid-cols-12 gap-2 mb-2 text-xs font-medium text-gray-500">
                <div className="col-span-5">Description</div>
                <div className="col-span-2">Qté</div>
                <div className="col-span-2">Prix Unit.</div>
                <div className="col-span-2 text-right">Montant</div>
                <div className="col-span-1"></div>
              </div>

              <div className="space-y-3">
                {invoice.items.map((item, index) => (
                  <div key={item.id} className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center bg-gray-50/50 p-3 sm:p-0 sm:bg-transparent rounded-lg">
                    <div className="col-span-5">
                      <input 
                        type="text" 
                        value={item.description}
                        placeholder="Description du service"
                        onChange={(e) => updateItem(index, "description", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 text-sm"
                      />
                    </div>
                    <div className="col-span-2 flex items-center gap-2">
                      <span className="sm:hidden text-xs text-gray-500 w-12">Qté</span>
                      <input 
                        type="number" 
                        value={item.quantity}
                        onChange={(e) => updateItem(index, "quantity", parseInt(e.target.value) || 0)}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 text-sm text-center"
                      />
                    </div>
                    <div className="col-span-2 flex items-center gap-2">
                      <span className="sm:hidden text-xs text-gray-500 w-12">Prix</span>
                      <input 
                        type="number" 
                        value={item.price}
                        onChange={(e) => updateItem(index, "price", parseInt(e.target.value) || 0)}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 text-sm text-right"
                      />
                    </div>
                    <div className="col-span-2 text-right">
                      <div className="flex items-center justify-between sm:justify-end gap-2">
                        <span className="sm:hidden text-xs text-gray-500 w-12 text-left">Montant</span>
                        <div className="px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-gray-500 text-sm font-medium">
                           {formatCurrency(item.quantity * item.price)}
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 flex justify-end">
                      <button 
                        onClick={() => removeItem(index)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={addItem}
                className="mt-4 flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                <Plus className="w-4 h-4" /> Ajouter une ligne
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Remise</label>
                <input 
                  type="number" 
                  value={invoice.discount}
                  onChange={(e) => setInvoice({...invoice, discount: parseInt(e.target.value) || 0})}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">TVA ({invoice.taxRate}%)</label>
                <div className="w-full px-3 py-2 border border-gray-100 rounded-lg bg-gray-50 text-gray-500 text-sm">
                  {formatCurrency(taxAmount)}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Total TTC</label>
                <div className="w-full px-3 py-2 border border-gray-100 rounded-lg bg-gray-50 text-gray-900 font-semibold text-sm">
                  {formatCurrency(total)}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Notes au client</label>
              <textarea 
                rows={3}
                value={invoice.notes}
                onChange={(e) => setInvoice({...invoice, notes: e.target.value})}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 text-sm resize-none"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Live Preview */}
        <div className="space-y-6">
          <h3 className="text-sm font-medium text-gray-500">Aperçu en temps réel</h3>
          
          <div className="bg-gray-100 rounded-2xl p-6 sm:p-10 flex items-center justify-center min-h-[800px]">
            {/* Paper Sheet */}
            <div className="bg-white shadow-sm w-full max-w-[500px] aspect-[1/1.414] p-8 flex flex-col relative text-gray-900 text-[10px] sm:text-xs font-sans">
              
              <div className="mb-8">
                <div className="w-10 h-10 bg-gray-900 rounded-lg text-white flex items-center justify-center mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                </div>
                
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-500 mb-1">Date d'émission</p>
                    <p className="font-semibold">{formatDate(invoice.issueDate)}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Date d'échéance</p>
                    <p className="font-semibold">{formatDate(invoice.dueDate)}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Conditions</p>
                    <p className="font-semibold">{invoice.paymentTerms}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 mb-8">
                <div>
                  <p className="text-gray-500 mb-1">Facturé par</p>
                  <p className="font-bold text-sm">Studio Arsa Digital</p>
                  <p className="text-gray-500 max-w-[200px] mt-1">Jl. Jambu No 5, Semanding, Sumbersekar, Kec. Dau, Kabupaten Malang, Jawa Timur 65151</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Facturé à</p>
                  <p className="font-bold text-sm">{customer?.name || "Sélectionnez un client"}</p>
                  <p className="text-gray-500 max-w-[200px] mt-1">{customer?.address}</p>
                </div>
              </div>

              <div className="mb-8 flex-1">
                <div className="grid grid-cols-12 gap-2 border-b border-gray-200 pb-2 mb-3 font-semibold text-gray-900">
                  <div className="col-span-5">Description</div>
                  <div className="col-span-2 text-center">Qté</div>
                  <div className="col-span-2 text-right">Prix</div>
                  <div className="col-span-3 text-right">Montant</div>
                </div>
                
                <div className="space-y-3">
                  {invoice.items.map(item => (
                    <div key={item.id} className="grid grid-cols-12 gap-2 text-gray-700">
                      <div className="col-span-5 font-medium">{item.description || "-"}</div>
                      <div className="col-span-2 text-center">{item.quantity}</div>
                      <div className="col-span-2 text-right">{formatCurrency(item.price)}</div>
                      <div className="col-span-3 text-right font-medium text-gray-900">{formatCurrency(item.quantity * item.price)}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 grid grid-cols-12 mb-8">
                <div className="col-span-6">
                  <p className="text-gray-500 mb-1">Banque</p>
                  <p className="font-semibold mb-3">Bank Central Asia (BCA)</p>
                  <p className="text-gray-500 mb-1">Titulaire du compte</p>
                  <p className="font-semibold mb-3">Studio Arsa Digital</p>
                  <p className="text-gray-500 mb-1">IBAN / Compte</p>
                  <p className="font-semibold">123 456 7890</p>
                </div>
                <div className="col-span-6">
                  <div className="flex justify-between py-1 text-gray-600">
                    <span>Sous-total</span>
                    <span>{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="flex justify-between py-1 text-gray-600">
                    <span>Remise</span>
                    <span>{formatCurrency(invoice.discount)}</span>
                  </div>
                  <div className="flex justify-between py-1 text-gray-600">
                    <span>TVA ({invoice.taxRate}%)</span>
                    <span>{formatCurrency(taxAmount)}</span>
                  </div>
                  <div className="flex justify-between py-2 mt-2 border-t border-gray-200 font-bold text-sm text-gray-900">
                    <span>Total</span>
                    <span>{formatCurrency(total)}</span>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-4">
                <p className="text-gray-500 mb-1">Notes</p>
                <p className="text-gray-700 whitespace-pre-wrap">{invoice.notes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
