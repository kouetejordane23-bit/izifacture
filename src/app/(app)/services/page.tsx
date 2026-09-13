import { getServices } from "@/lib/actions/services"
import { ServicesClient } from "./services-client"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

export const dynamic = 'force-dynamic'

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <Suspense fallback={
      <div className="space-y-8">
        <div className="flex justify-between">
          <div className="space-y-2">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-64" />
          </div>
          <Skeleton className="h-10 w-40 rounded-xl" />
        </div>
        <Skeleton className="h-[400px] w-full rounded-2xl" />
      </div>
    }>
      <ServicesClient initialServices={services} />
    </Suspense>
  )
}
