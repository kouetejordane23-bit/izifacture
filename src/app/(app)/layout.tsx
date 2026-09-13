import { Sidebar } from "@/components/layout/sidebar"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Search, Bell } from "lucide-react"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar />
      <div className="lg:pl-64 flex flex-col flex-1 min-h-screen">
        <MobileNav />
        
        {/* Global Top Header (Desktop) */}
        <header className="hidden lg:flex items-center justify-between px-8 py-5 sticky top-0 z-20 bg-background/80 backdrop-blur-md">
          <div className="flex-1"></div>
          <div className="flex items-center gap-5">
            <div className="relative group">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-gray-900 transition-colors" />
              <input 
                type="text" 
                placeholder="Rechercher..." 
                className="w-64 pl-10 pr-12 py-2 bg-white hover:bg-gray-50/80 border border-gray-200 focus:border-gray-300 focus:bg-white rounded-full text-sm outline-none transition-all duration-300 focus:shadow-md focus:w-80"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 font-medium border border-gray-200 rounded px-1.5 py-0.5 bg-gray-50">
                ⌘K
              </div>
            </div>
            
            <button className="relative p-2.5 text-gray-500 hover:text-gray-900 hover:bg-white border border-transparent hover:border-gray-200 rounded-full transition-all shadow-sm hover:shadow-md bg-white">
              <Bell className="w-4 h-4" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
          </div>
        </header>

        <main className="flex-1 px-4 py-8 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  )
}
