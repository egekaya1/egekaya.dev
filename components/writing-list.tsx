"use client"

import { useState } from "react"
import Link from "next/link"

export type PostType = "article" | "case-study"

export interface WritingEntry {
  slug: string
  type: PostType
  title: string
  description: string
  publishedAt: string
  readingTime: string
  tags: string[]
}

type Filter = "All" | "Articles" | "Case Studies"
const FILTERS: Filter[] = ["All", "Articles", "Case Studies"]

function getHref(entry: WritingEntry) {
  return entry.type === "case-study"
    ? `/case-studies/${entry.slug}`
    : `/blog/${entry.slug}`
}

export function WritingList({ entries }: { entries: WritingEntry[] }) {
  const [filter, setFilter] = useState<Filter>("All")

  const filtered = entries.filter((e) => {
    if (filter === "Articles") return e.type === "article"
    if (filter === "Case Studies") return e.type === "case-study"
    return true
  })

  const counts: Record<Filter, number> = {
    All: entries.length,
    Articles: entries.filter((e) => e.type === "article").length,
    "Case Studies": entries.filter((e) => e.type === "case-study").length,
  }

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-sm text-sm border transition-colors duration-200 ${
              filter === f
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
            }`}
          >
            {f}
            <span className={`ml-2 font-mono text-xs ${filter === f ? "opacity-70" : "opacity-50"}`}>
              {counts[f]}
            </span>
          </button>
        ))}
      </div>

      {/* List */}
      <div className="border border-border rounded-sm overflow-hidden divide-y divide-border">
        {filtered.map((entry) => (
          <Link key={`${entry.type}-${entry.slug}`} href={getHref(entry)} className="block group">
            <div className="bg-card hover:bg-secondary/40 transition-colors duration-200 px-6 py-5">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1 min-w-0 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="label-mono">
                      {entry.type === "case-study" ? "Case Study" : "Article"}
                    </span>
                  </div>
                  <p className="text-sm font-medium leading-snug group-hover:underline underline-offset-2">
                    {entry.title}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {entry.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {entry.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center rounded-sm bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1.5 shrink-0 sm:text-right">
                  <span className="label-mono">
                    {new Date(entry.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="label-mono">{entry.readingTime}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
