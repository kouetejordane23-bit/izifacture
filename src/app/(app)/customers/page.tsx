import { getCustomers } from "@/lib/actions/customers"
import { CustomersClient } from "./customers-client"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

export const dynamic = 'force-dynamic'

export default async function CustomersPage() {
  const customers = await getCustomers()

  return (
    <Suspense fallback={
      <div className="space-y-8">
        <div className="flex justify-between">
          <div className="space-y-2">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-4 w-64" />
          </div>
          <Skeleton className="h-10 w-32 rounded-xl" />
        </div>
        <Skeleton className="h-[400px] w-full rounded-2xl" />
      </div>
    }>
      <CustomersClient initialCustomers={customers} />
    </Suspense>
  )
}
