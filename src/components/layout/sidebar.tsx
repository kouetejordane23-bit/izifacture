"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, FileText, Settings, CreditCard, Layers } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Clients", href: "/customers", icon: Users },
  { name: "Services", href: "/services", icon: Layers },
  { name: "Factures", href: "/invoices", icon: FileText },
  { name: "Rapports", href: "/reports", icon: FileText },
  { name: "Paramètres", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 bg-white border-r border-border shadow-sm">
      <div className="flex flex-col flex-grow pt-6 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-primary-foreground p-2 rounded-xl shadow-sm">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            </div>
            <span className="text-xl font-bold tracking-tight">izi facture</span>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col px-4">
          <nav className="flex-1 space-y-1.5">
            {navigation.map((item) => {
              const isActive = pathname?.startsWith(item.href) || false
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    "group flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 ease-in-out"
                  )}
                >
                  <item.icon
                    className={cn(
                      isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground",
                      "mr-3 flex-shrink-0 h-[18px] w-[18px]"
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
        
        <div className="flex-shrink-0 flex p-4 m-4 border border-border rounded-2xl bg-muted/50 shadow-sm">
          <button className="flex-shrink-0 w-full group block text-left">
            <div className="flex items-center">
              <div className="w-9 h-9 rounded-full bg-white border border-border flex items-center justify-center text-gray-600 font-semibold shadow-sm">
                JD
              </div>
              <div className="ml-3">
                <p className="text-sm font-semibold text-foreground">
                  John Doe
                </p>
                <p className="text-xs font-medium text-muted-foreground">
                  Studio Arsa Digital
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
