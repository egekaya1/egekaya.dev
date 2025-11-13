import * as React from "react"
import { cn } from "@/lib/utils"

interface TimelineProps extends React.HTMLAttributes<HTMLOListElement> {
  children: React.ReactNode
}

export function Timeline({ children, className, ...props }: TimelineProps) {
  return (
    <ol className={cn("relative space-y-8", className)} role="list" aria-label="Experience timeline" {...props}>
      {children}
    </ol>
  )
}

interface TimelineItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode
  isLast?: boolean
}

export function TimelineItem({
  children,
  isLast = false,
  className,
  ...props
}: TimelineItemProps) {
  return (
    <li className={cn("relative pb-8", className)} {...props}>
      {/* Connector line */}
      {!isLast && (
        <span
          className="absolute left-4 top-8 -ml-px h-full w-0.5 bg-border"
          aria-hidden="true"
        />
      )}

      <div className="relative flex items-start space-x-4">
        {/* Timeline dot */}
        <div className="relative flex h-8 w-8 items-center justify-center">
          <div className="h-3 w-3 rounded-full border-2 border-primary bg-background ring-4 ring-background" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">{children}</div>
      </div>
    </li>
  )
}

interface TimelineContentProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  period?: string
  description?: string
  tags?: string[]
  achievements?: string[]
}

export function TimelineContent({
  title,
  subtitle,
  period,
  description,
  tags,
  achievements,
  className,
  ...props
}: TimelineContentProps) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div className="flex-1">
          <h3 className="text-lg font-semibold leading-tight">{title}</h3>
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
        {period && (
          <time className="text-sm text-muted-foreground whitespace-nowrap">
            {period}
          </time>
        )}
      </div>

      {description && (
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}

      {achievements && achievements.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {achievements.map((achievement, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-md bg-primary/10 border border-primary/20 px-2.5 py-1 text-xs font-medium text-primary"
            >
              ✓ {achievement}
            </span>
          ))}
        </div>
      )}

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
