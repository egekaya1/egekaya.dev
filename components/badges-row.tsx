import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type BadgesRowProps = {
  items: string[]
  className?: string
}

export function BadgesRow({ items, className }: BadgesRowProps) {
  if (!items.length) return null
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <Badge key={item}>{item}</Badge>
      ))}
    </div>
  )
}
