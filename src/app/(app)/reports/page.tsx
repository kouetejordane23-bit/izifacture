import { Card } from "@/components/ui/card"
import { formatCurrency } from "@/lib/utils/format-currency"
import { BarChart3, TrendingUp, Download } from "lucide-react"
import { getInvoices } from "@/lib/actions/invoices"

export const dynamic = 'force-dynamic'

export default async function ReportsPage() {
  const invoices = await getInvoices()
  
  // Calcul du revenu total de l'année en cours (sur les factures payées)
  const currentYear = new Date().getFullYear()
  
  const paidInvoicesThisYear = invoices.filter(inv => 
    inv.status === "paid" && new Date(inv.issue_date).getFullYear() === currentYear
  )
  const totalRevenueYear = paidInvoicesThisYear.reduce((acc, inv) => acc + inv.total, 0)
  
  // Calcul des factures impayées (sent + overdue)
  const unpaidInvoices = invoices.filter(inv => inv.status === "sent" || inv.status === "overdue")
  const unpaidAmount = unpaidInvoices.reduce((acc, inv) => acc + inv.total, 0)
  const unpaidCount = unpaidInvoices.length

  // Calcul du temps moyen de paiement (fictif pour le moment car on n'a pas la date de paiement réelle en DB)
  // On met un placeholder réaliste ou on pourrait calculer basé sur issue_date et due_date moyen
  const avgPaymentDays = 14 

  // Évolution du CA Mensuel (sur les factures payées)
  const monthlyRevenue = new Array(12).fill(0)
  paidInvoicesThisYear.forEach(inv => {
    const month = new Date(inv.issue_date).getMonth()
    monthlyRevenue[month] += inv.total
  })
  
  // Normalisation pour le graphique en pourcentage de hauteur (max 100%)
  const maxMonthlyRevenue = Math.max(...monthlyRevenue, 1) // éviter div par 0
  const monthlyHeights = monthlyRevenue.map(rev => (rev / maxMonthlyRevenue) * 100)

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Rapports & Analyses</h2>
          <p className="text-gray-500 text-sm">
            Visualisez les performances de votre entreprise.
          </p>
        </div>
        <button className="px-4 py-2.5 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm">
          <Download className="w-4 h-4" />
          Exporter PDF
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-5 md:grid-cols-3">
        <Card className="border border-gray-200 shadow-sm rounded-2xl bg-white p-6">
          <div className="flex items-center gap-3 mb-4 text-gray-500">
            <div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
              <BarChart3 className="w-5 h-5 text-gray-700" />
            </div>
            <h3 className="text-sm font-medium">Revenu total (Année)</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-1">{formatCurrency(totalRevenueYear)}</p>
          <p className="text-sm text-green-600 flex items-center gap-1 font-medium">
            <TrendingUp className="w-4 h-4" /> {currentYear}
          </p>
        </Card>

        <Card className="border border-gray-200 shadow-sm rounded-2xl bg-white p-6">
          <div className="flex items-center gap-3 mb-4 text-gray-500">
            <div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
              <BarChart3 className="w-5 h-5 text-gray-700" />
            </div>
            <h3 className="text-sm font-medium">Factures impayées</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-1">{formatCurrency(unpaidAmount)}</p>
          <p className="text-sm text-gray-500 font-medium">
            Sur {unpaidCount} facture{unpaidCount > 1 ? 's' : ''} en attente
          </p>
        </Card>

        <Card className="border border-gray-200 shadow-sm rounded-2xl bg-white p-6">
          <div className="flex items-center gap-3 mb-4 text-gray-500">
            <div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
              <BarChart3 className="w-5 h-5 text-gray-700" />
            </div>
            <h3 className="text-sm font-medium">Temps moyen de paiement</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-1">{avgPaymentDays} jours</p>
          <p className="text-sm text-gray-500 flex items-center gap-1 font-medium">
            Moyenne estimée
          </p>
        </Card>
      </div>

      {/* Chart Placeholder */}
      <Card className="border border-gray-200 shadow-sm rounded-2xl bg-white p-6 sm:p-8">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Évolution du chiffre d'affaires (Mensuel {currentYear})</h3>
        
        <div className="h-64 flex items-end justify-between gap-2 sm:gap-4 pt-4 border-b border-gray-100">
          {monthlyHeights.map((height, i) => (
            <div key={i} className="w-full flex flex-col items-center gap-2 group cursor-pointer">
              <div 
                className={`w-full rounded-t-md transition-colors relative ${height > 0 ? 'bg-gray-900 group-hover:bg-gray-800' : 'bg-gray-100'}`}
                style={{ height: height > 0 ? `${height}%` : '2px' }}
              >
                {/* Tooltip on hover */}
                {height > 0 && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                    {formatCurrency(monthlyRevenue[i])}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4 text-xs font-medium text-gray-400 px-1">
          <span>Jan</span>
          <span>Fév</span>
          <span>Mar</span>
          <span>Avr</span>
          <span>Mai</span>
          <span>Juin</span>
          <span>Juil</span>
          <span>Aoû</span>
          <span>Sep</span>
          <span>Oct</span>
          <span>Nov</span>
          <span>Déc</span>
        </div>
      </Card>
    </div>
  )
}
