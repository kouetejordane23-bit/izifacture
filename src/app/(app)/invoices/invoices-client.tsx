"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { formatCurrency } from "@/lib/utils/format-currency"
import { formatDate } from "@/lib/utils/dates"
import { StatusBadge, InvoiceStatus } from "@/components/ui/status-badge"
import { Plus, Search } from "lucide-react"
import Link from "next/link"

export function InvoicesClient({ initialInvoices }: { initialInvoices: any[] }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("tous")

  const filteredInvoices = initialInvoices.filter(invoice => {
    const matchesSearch = invoice.customer?.name?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "tous" || invoice.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Factures</h2>
          <p className="text-gray-500 text-sm">
            Gérez vos factures et suivez vos paiements.
          </p>
        </div>
        <Link href="/invoices/new" className="px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-sm">
          <Plus className="w-4 h-4" />
          Nouvelle facture
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Rechercher par client..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-shadow text-sm bg-white shadow-sm"
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {["tous", "draft", "sent", "paid", "overdue"].map((status) => {
            const labels: Record<string, string> = {
              "tous": "Tous",
              "draft": "Brouillon",
              "sent": "Envoyée",
              "paid": "Payée",
              "overdue": "En retard"
            }
            return (
              <button 
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                  statusFilter === status 
                    ? "bg-gray-900 text-white" 
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {labels[status]}
              </button>
            )
          })}
        </div>
      </div>

      <Card className="border border-gray-200 shadow-sm rounded-2xl bg-white overflow-hidden flex flex-col transition-all duration-300">
        <div className="p-0 w-full overflow-x-auto">
          <div className="min-w-[700px]">
            <Table>
              <TableHeader className="bg-gray-50/80">
                <TableRow className="hover:bg-transparent border-gray-200">
                  <TableHead className="h-12 font-semibold text-gray-600 pl-6">Numéro</TableHead>
                  <TableHead className="h-12 font-semibold text-gray-600">Client</TableHead>
                  <TableHead className="h-12 font-semibold text-gray-600">Montant</TableHead>
                  <TableHead className="h-12 font-semibold text-gray-600">Date d'émission</TableHead>
                  <TableHead className="h-12 font-semibold text-gray-600">Échéance</TableHead>
                  <TableHead className="text-right h-12 font-semibold text-gray-600 pr-6">Statut</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredInvoices.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8 text-gray-500">Aucune facture trouvée.</TableCell>
                  </TableRow>
                ) : filteredInvoices.map((invoice) => (
                  <TableRow key={invoice.id} className="hover:bg-gray-50/50 border-gray-100 transition-colors group cursor-pointer relative">
                    <TableCell className="font-medium text-gray-500 py-4 pl-6">
                      <Link href={`/invoices/${invoice.id}`} className="absolute inset-0" aria-label="Voir la facture" />
                      {invoice.id.substring(0, 8).toUpperCase()}
                    </TableCell>
                    <TableCell className="font-semibold text-gray-900 py-4 relative z-10 pointer-events-none">{invoice.customer?.name || "Client supprimé"}</TableCell>
                    <TableCell className="font-semibold text-gray-900 py-4 relative z-10 pointer-events-none">{formatCurrency(invoice.total || 0)}</TableCell>
                    <TableCell className="font-medium text-gray-600 py-4 relative z-10 pointer-events-none">{formatDate(invoice.issue_date)}</TableCell>
                    <TableCell className="font-medium text-gray-600 py-4 relative z-10 pointer-events-none">{formatDate(invoice.due_date)}</TableCell>
                    <TableCell className="text-right pr-6 py-4 relative z-10 pointer-events-none">
                      <StatusBadge status={invoice.status as InvoiceStatus} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </Card>
    </div>
  )
}
