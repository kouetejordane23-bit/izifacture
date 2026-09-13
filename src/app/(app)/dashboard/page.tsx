import { Suspense } from "react"
import { StatCard, StatCardSkeleton } from "@/components/dashboard/stat-card"
import { RecentInvoices, RecentInvoicesSkeleton } from "@/components/dashboard/recent-invoices"
import { formatCurrency } from "@/lib/utils/format-currency"
import * as Icons from "lucide-react"
import { getDashboardStats, getInvoices } from "@/lib/actions/invoices"
import { getCustomers } from "@/lib/actions/customers"
import { createClient } from "@/lib/supabase/server"

export const dynamic = 'force-dynamic'

async function StatCardsList() {
  const stats = await getDashboardStats()
  const customers = await getCustomers()
  
  const statsData = [
    {
      title: "Chiffre d'affaires",
      value: stats.totalRevenue,
      change: "Sur les factures payées",
      icon: "Wallet",
    },
    {
      title: "En attente",
      value: stats.pendingRevenue,
      change: `${stats.pendingCount} factures en attente`,
      icon: "Hourglass",
    },
    {
      title: "En retard",
      value: stats.overdueRevenue,
      change: `${stats.overdueCount} factures en retard`,
      icon: "AlertCircle",
    },
    {
      title: "Total Clients",
      value: customers.length,
      change: "Inscrits",
      icon: "Users",
    },
  ]
  
  return (
    <>
      {statsData.map((stat, index) => (
        <div 
          key={index} 
          className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both duration-500"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <StatCard
            title={stat.title}
            value={
              stat.title === "Chiffre d'affaires" || stat.title === "En attente" || stat.title === "En retard"
                ? formatCurrency(stat.value)
                : stat.value
            }
            change={stat.change}
            iconName={stat.icon as keyof typeof Icons}
          />
        </div>
      ))}
    </>
  )
}

async function InvoicesTableWrapper() {
  const invoices = await getInvoices()
  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both" style={{ animationDelay: "400ms" }}>
      <RecentInvoices invoices={invoices.slice(0, 5)} />
    </div>
  )
}

export default async function DashboardPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  // Extraction du prénom depuis les metadata, ou fallback sur l'email, ou "Utilisateur"
  const firstName = user?.user_metadata?.first_name || user?.email?.split('@')[0] || "Utilisateur"

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      <div className="flex flex-col gap-1.5">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Bienvenue, {firstName}
        </h2>
        <p className="text-muted-foreground text-sm">
          Voici un aperçu de votre activité sur Izi Facture.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={
          <>
            <StatCardSkeleton />
            <StatCardSkeleton />
            <StatCardSkeleton />
            <StatCardSkeleton />
          </>
        }>
          <StatCardsList />
        </Suspense>
      </div>

      <div className="grid gap-5 grid-cols-1">
        <Suspense fallback={<RecentInvoicesSkeleton />}>
          <InvoicesTableWrapper />
        </Suspense>
      </div>
    </div>
  )
}
