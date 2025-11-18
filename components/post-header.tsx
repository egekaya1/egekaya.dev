import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Calendar, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

type ExternalLink = { label: string; href: string; icon?: ReactNode }

type PostHeaderProps = {
  title: string
  badges?: string[]
  date?: { label: string; dateTime: string }
  readingTime?: string
  externalLinks?: ExternalLink[]
  className?: string
}

export function PostHeader({
  title,
  badges = [],
  date,
  readingTime,
  externalLinks = [],
  className,
}: PostHeaderProps) {
  return (
    <div className={cn("not-prose mb-8", className)}>
      {badges.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {badges.map((b) => (
            <Badge key={b}>{b}</Badge>
          ))}
        </div>
      )}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h1>
      {(date || readingTime) && (
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {date && (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={date.dateTime}>{date.label}</time>
            </div>
          )}
          {readingTime && (
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{readingTime}</span>
            </div>
          )}
        </div>
      )}
      {externalLinks.length > 0 && (
        <div className="not-prose mt-6 flex flex-wrap gap-3">
          {externalLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm underline"
            >
              {l.icon}
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
