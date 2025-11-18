"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export type MilestoneStatus = "done" | "in-progress" | "pending"

export interface Milestone {
  label: string
  status: MilestoneStatus
}

interface MilestoneBarProps extends React.HTMLAttributes<HTMLDivElement> {
  milestones: Milestone[]
}

export function MilestoneBar({ milestones, className }: MilestoneBarProps) {
  const completed = milestones.filter(m => m.status === "done").length
  const progress = completed / milestones.length

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium tracking-wide text-muted-foreground">
          Roadmap Progress
        </p>
        <span className="text-xs tabular-nums font-semibold">
          {Math.round(progress * 100)}%
        </span>
      </div>
      <div className="flex gap-1" aria-label="Milestone progress">
        {milestones.map((m, i) => {
          const base = "h-4 flex-1 rounded-sm relative group overflow-hidden"
          const styles =
            m.status === "done"
              ? "bg-green-500/80"
              : m.status === "in-progress"
                ? "bg-primary/70 animate-pulse"
                : "bg-muted"
          return (
            <div
              key={m.label + i}
              className={cn(base, styles)}
              title={m.label + " – " + m.status}
            >
              <span className="sr-only">{m.label} {m.status}</span>
            </div>
          )
        })}
      </div>
      <div className="flex flex-wrap gap-2 mt-1">
        {milestones.slice(0, 4).map((m, i) => (
          <span
            key={m.label + i}
            className={cn(
              "px-2 py-0.5 rounded-full text-[10px] font-medium border",
              m.status === "done" && "bg-green-500/10 border-green-500/40 text-green-600 dark:text-green-400",
              m.status === "in-progress" && "bg-primary/10 border-primary/40 text-primary",
              m.status === "pending" && "bg-muted/50 border-border text-muted-foreground"
            )}
          >
            {m.label}
          </span>
        ))}
        {milestones.length > 4 && (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-medium border bg-muted/50 border-border text-muted-foreground">
            +{milestones.length - 4} more
          </span>
        )}
      </div>
    </div>
  )
}
