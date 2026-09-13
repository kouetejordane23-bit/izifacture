import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export type InvoiceStatus = "paid" | "sent" | "draft" | "overdue";

interface StatusBadgeProps {
  status: InvoiceStatus;
  className?: string;
}

const statusConfig: Record<InvoiceStatus, { label: string; className: string }> = {
  paid: { label: "Payée", className: "bg-green-50 text-green-700 border-green-200/50 hover:bg-green-100" },
  sent: { label: "Envoyée", className: "bg-orange-50 text-orange-700 border-orange-200/50 hover:bg-orange-100" },
  draft: { label: "Brouillon", className: "bg-gray-50 text-gray-700 border-gray-200/50 hover:bg-gray-100" },
  overdue: { label: "En retard", className: "bg-red-50 text-red-700 border-red-200/50 hover:bg-red-100" },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <Badge variant="outline" className={cn("font-medium rounded-full", config.className, className)}>
      {config.label}
    </Badge>
  );
}
