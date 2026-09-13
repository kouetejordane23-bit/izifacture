"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, LayoutDashboard, Users, FileText, Settings, CreditCard } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Clients", href: "/customers", icon: Users },
  { name: "Services", href: "/services", icon: CreditCard },
  { name: "Factures", href: "/invoices", icon: FileText },
  { name: "Rapports", href: "/reports", icon: FileText },
  { name: "Paramètres", href: "/settings", icon: Settings },
]

export function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden flex items-center justify-between bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center gap-2">
        <div className="bg-black text-white p-1.5 rounded-md">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
        </div>
        <span className="text-lg font-bold">izi facture</span>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger 
          render={<Button variant="ghost" size="icon" className="-mr-2" />}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Ouvrir le menu</span>
        </SheetTrigger>
        <SheetContent side="left" className="w-[280px] sm:w-[350px] p-0 flex flex-col">
          <SheetHeader className="sr-only">
             <SheetTitle>Navigation Menu</SheetTitle>
          </SheetHeader>
          <div className="flex-1 overflow-y-auto pt-10 pb-4">
            <nav className="px-4 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname?.startsWith(item.href) || false
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      isActive
                        ? "bg-black text-white"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                      "group flex items-center px-3 py-2.5 text-base font-medium rounded-md transition-colors"
                    )}
                  >
                    <item.icon
                      className={cn(
                        isActive ? "text-white" : "text-gray-400",
                        "mr-4 flex-shrink-0 h-5 w-5"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium">
                JD
              </div>
              <div className="ml-3">
                <p className="text-base font-medium text-gray-800">John Doe</p>
                <p className="text-sm font-medium text-gray-500">Studio Arsa Digital</p>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
