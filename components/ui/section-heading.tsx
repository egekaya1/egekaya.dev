import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  label?: string
  centered?: boolean
}

export function SectionHeading({
  title,
  subtitle,
  label,
  centered = false,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        centered && "text-center mx-auto max-w-3xl",
        className
      )}
      {...props}
    >
      {label && (
        <p className="label-mono">{label}</p>
      )}
      <h2 className="font-display text-4xl font-normal tracking-tight sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-base text-muted-foreground leading-relaxed sm:text-lg", centered ? "mx-auto max-w-lg" : "max-w-lg")}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
