import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { recentInvoicesData } from "@/lib/mock-data/dashboard"
import { formatCurrency } from "@/lib/utils/format-currency"
import { formatDate } from "@/lib/utils/dates"
import { StatusBadge, InvoiceStatus } from "@/components/ui/status-badge"
import { ArrowUpRight } from "lucide-react"

export function RecentInvoices({ invoices }: { invoices: any[] }) {
  return (
    <Card className="border border-gray-200 shadow-sm rounded-2xl bg-white overflow-hidden flex flex-col transition-all duration-300 hover:shadow-md">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 sm:p-6 pb-4 gap-4">
        <h3 className="text-lg font-bold text-gray-900 tracking-tight">Dernières factures</h3>
        <button className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1 font-medium transition-colors bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm">
          Voir tout <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="px-5 sm:px-6 pb-5 sm:pb-6 w-full overflow-x-auto">
        <div className="rounded-xl border border-gray-200 overflow-hidden min-w-[600px] shadow-sm">
          <Table>
            <TableHeader className="bg-gray-50/80">
              <TableRow className="hover:bg-transparent border-gray-200">
                <TableHead className="w-[120px] font-semibold text-gray-600 h-11 pl-4">Numéro</TableHead>
                <TableHead className="font-semibold text-gray-600 h-11">Client</TableHead>
                <TableHead className="font-semibold text-gray-600 h-11">Montant</TableHead>
                <TableHead className="hidden md:table-cell font-semibold text-gray-600 h-11">Date</TableHead>
                <TableHead className="text-right font-semibold text-gray-600 h-11 pr-4">Statut</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-gray-500">Aucune facture récente.</TableCell>
                </TableRow>
              ) : invoices.map((invoice) => (
                <TableRow key={invoice.id} className="hover:bg-gray-50/50 border-gray-100 transition-colors">
                  <TableCell className="font-medium text-gray-500 py-3.5 pl-4">{invoice.id.substring(0, 8).toUpperCase()}</TableCell>
                  <TableCell className="font-semibold text-gray-900 py-3.5">{invoice.customer?.name || "Client supprimé"}</TableCell>
                  <TableCell className="font-medium text-gray-700 py-3.5">{formatCurrency(invoice.total || 0)}</TableCell>
                  <TableCell className="hidden md:table-cell text-gray-500 py-3.5">
                    {formatDate(invoice.issue_date)}
                  </TableCell>
                  <TableCell className="text-right pr-4 py-3.5">
                    <StatusBadge status={invoice.status as InvoiceStatus} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Card>
  )
}

export function RecentInvoicesSkeleton() {
  return (
    <Card className="border border-gray-200 shadow-sm rounded-2xl bg-white flex flex-col">
      <div className="flex flex-row items-center justify-between p-6 pb-4">
        <Skeleton className="h-6 w-[180px]" />
        <Skeleton className="h-8 w-[100px] rounded-lg" />
      </div>
      
      <div className="px-6 pb-6 w-full">
        <div className="rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <Table>
            <TableHeader className="bg-gray-50/80">
              <TableRow className="hover:bg-transparent border-gray-200">
                <TableHead className="h-11 pl-4"><Skeleton className="h-4 w-16" /></TableHead>
                <TableHead className="h-11"><Skeleton className="h-4 w-24" /></TableHead>
                <TableHead className="h-11"><Skeleton className="h-4 w-20" /></TableHead>
                <TableHead className="hidden md:table-cell h-11"><Skeleton className="h-4 w-24" /></TableHead>
                <TableHead className="text-right pr-4 h-11"><Skeleton className="h-4 w-16 ml-auto" /></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 4 }).map((_, i) => (
                <TableRow key={i} className="border-gray-100">
                  <TableCell className="py-3.5 pl-4"><Skeleton className="h-4 w-20" /></TableCell>
                  <TableCell className="py-3.5"><Skeleton className="h-4 w-32" /></TableCell>
                  <TableCell className="py-3.5"><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell className="hidden md:table-cell py-3.5"><Skeleton className="h-4 w-20" /></TableCell>
                  <TableCell className="pr-4 py-3.5"><Skeleton className="h-6 w-20 rounded-full ml-auto" /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Card>
  )
}
