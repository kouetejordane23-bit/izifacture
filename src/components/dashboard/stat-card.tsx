import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import * as Icons from "lucide-react"

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  iconName: keyof typeof Icons;
}

export function StatCard({ title, value, change, iconName }: StatCardProps) {
  const Icon = Icons[iconName] as React.ElementType;

  return (
    <Card className="border border-gray-200 shadow-sm rounded-2xl bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="p-5 sm:p-6">
        <div className="flex flex-row items-center justify-between pb-4">
          <h3 className="text-sm font-semibold text-gray-500">
            {title}
          </h3>
          {Icon && (
            <div className="p-2 bg-gray-50 rounded-xl border border-gray-100 text-gray-500">
              <Icon className="w-4 h-4" />
            </div>
          )}
        </div>
        <div>
          <div className="text-2xl font-bold tracking-tight text-gray-900 truncate pr-2">
            {value}
          </div>
          {change && (
            <p className="text-xs text-gray-400 mt-1.5 font-medium">
              {change}
            </p>
          )}
        </div>
      </div>
    </Card>
  )
}

export function StatCardSkeleton() {
  return (
    <Card className="border border-gray-200 shadow-sm rounded-2xl bg-white">
      <div className="p-6">
        <div className="flex flex-row items-center justify-between pb-4">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-8 w-8 rounded-xl" />
        </div>
        <div>
          <Skeleton className="h-8 w-[140px] mb-2" />
          <Skeleton className="h-3 w-[160px]" />
        </div>
      </div>
    </Card>
  )
}
