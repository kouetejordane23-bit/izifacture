import { notFound } from "next/navigation"
import { ChevronLeft, Download, Edit, Trash2 } from "lucide-react"
import Link from "next/link"
import { formatCurrency } from "@/lib/utils/format-currency"
import { formatDate } from "@/lib/utils/dates"
import { StatusBadge, InvoiceStatus } from "@/components/ui/status-badge"
import { getInvoiceById } from "@/lib/actions/invoices"

export const dynamic = 'force-dynamic'

export default async function InvoiceDetailPage({ params }: { params: { id: string } }) {
  const invoice = await getInvoiceById(params.id)
  
  if (!invoice) {
    notFound();
  }

  const { customer, items, subtotal, discount, tax_rate, taxAmount, total, notes, issue_date, due_date, payment_terms, status } = invoice;

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <Link href="/invoices" className="text-sm font-medium text-gray-500 hover:text-gray-900 flex items-center gap-1 mb-2 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Retour aux factures
          </Link>
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Facture {invoice.id.substring(0,8).toUpperCase()}</h2>
            <StatusBadge status={status as InvoiceStatus} />
          </div>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none p-2.5 bg-white border border-gray-200 text-gray-500 rounded-xl hover:text-gray-900 hover:bg-gray-50 transition-colors shadow-sm" title="Modifier">
            <Edit className="w-4 h-4" />
          </button>
          <button className="flex-1 sm:flex-none p-2.5 bg-white border border-gray-200 text-red-500 rounded-xl hover:bg-red-50 transition-colors shadow-sm" title="Supprimer">
            <Trash2 className="w-4 h-4" />
          </button>
          <button className="flex-1 sm:flex-none px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors shadow-sm flex items-center justify-center gap-2">
            <Download className="w-4 h-4" /> Télécharger PDF
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div className="bg-white shadow-sm border border-gray-200 rounded-xl w-full max-w-[800px] p-8 sm:p-14 flex flex-col relative text-gray-900 text-sm font-sans">
          <div className="mb-12">
            <div className="w-12 h-12 bg-gray-900 rounded-xl text-white flex items-center justify-center mb-8 shadow-sm">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
            </div>
            
            <div className="flex justify-between">
              <div>
                <p className="text-gray-500 mb-1 font-medium">Date d'émission</p>
                <p className="font-semibold text-gray-900">{formatDate(issue_date)}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1 font-medium">Date d'échéance</p>
                <p className="font-semibold text-gray-900">{formatDate(due_date)}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1 font-medium">Conditions</p>
                <p className="font-semibold text-gray-900">{payment_terms}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-gray-500 mb-1 font-medium">Facturé par</p>
              <p className="font-bold text-gray-900 text-base">Studio Arsa Digital</p>
              <p className="text-gray-500 max-w-[250px] mt-2 leading-relaxed">Jl. Jambu No 5, Semanding, Sumbersekar, Kec. Dau, Kabupaten Malang, Jawa Timur 65151</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1 font-medium">Facturé à</p>
              <p className="font-bold text-gray-900 text-base">{customer?.name || "Client supprimé"}</p>
              <p className="text-gray-500 max-w-[250px] mt-2 leading-relaxed">{customer?.address}</p>
            </div>
          </div>

          <div className="mb-12 flex-1">
            <div className="grid grid-cols-12 gap-4 border-b border-gray-200 pb-3 mb-4 font-semibold text-gray-900">
              <div className="col-span-5">Description</div>
              <div className="col-span-2 text-center">Qté</div>
              <div className="col-span-2 text-right">Prix unitaire</div>
              <div className="col-span-3 text-right">Montant</div>
            </div>
            
            <div className="space-y-4">
              {items.map((item: any) => (
                <div key={item.id} className="grid grid-cols-12 gap-4 text-gray-700">
                  <div className="col-span-5 font-medium">{item.description}</div>
                  <div className="col-span-2 text-center">{item.quantity}</div>
                  <div className="col-span-2 text-right">{formatCurrency(item.price)}</div>
                  <div className="col-span-3 text-right font-semibold text-gray-900">{formatCurrency(item.quantity * item.price)}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 grid grid-cols-1 sm:grid-cols-12 mb-12 gap-8">
            <div className="sm:col-span-6">
              <p className="text-gray-500 mb-1 font-medium">Banque</p>
              <p className="font-semibold text-gray-900 mb-4">Bank Central Asia (BCA)</p>
              <p className="text-gray-500 mb-1 font-medium">Titulaire du compte</p>
              <p className="font-semibold text-gray-900 mb-4">Studio Arsa Digital</p>
              <p className="text-gray-500 mb-1 font-medium">IBAN / Numéro de compte</p>
              <p className="font-semibold text-gray-900">123 456 7890</p>
            </div>
            <div className="sm:col-span-6">
              <div className="flex justify-between py-1.5 text-gray-600">
                <span>Sous-total</span>
                <span>{formatCurrency(subtotal || 0)}</span>
              </div>
              <div className="flex justify-between py-1.5 text-gray-600">
                <span>Remise</span>
                <span>{formatCurrency(discount || 0)}</span>
              </div>
              <div className="flex justify-between py-1.5 text-gray-600">
                <span>TVA ({tax_rate || 18}%)</span>
                <span>{formatCurrency(taxAmount || 0)}</span>
              </div>
              <div className="flex justify-between py-3 mt-3 border-t border-gray-200 font-bold text-lg text-gray-900">
                <span>Total TTC</span>
                <span>{formatCurrency(total || 0)}</span>
              </div>
            </div>
          </div>

          {notes && (
            <div className="mt-auto pt-6 border-t border-gray-100">
              <p className="text-gray-500 mb-2 font-medium">Notes</p>
              <p className="text-gray-700 whitespace-pre-wrap">{notes}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
