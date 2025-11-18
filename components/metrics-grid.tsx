import { ReactNode } from "react"
import { cn } from "@/lib/utils"

type MetricsGridProps = {
  children: ReactNode
  className?: string
  cols?: string
}

export function MetricsGrid({ children, className, cols = "grid sm:grid-cols-2 lg:grid-cols-4" }: MetricsGridProps) {
  return <div className={cn(cols, "gap-4 not-prose", className)}>{children}</div>
}
