"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar } from "lucide-react"

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
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
              filter === f
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
            }`}
          >
            {f}
            <span className={`ml-2 text-xs ${filter === f ? "opacity-80" : "opacity-60"}`}>
              {counts[f]}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((entry) => (
          <Link key={`${entry.type}-${entry.slug}`} href={getHref(entry)}>
            <Card className="h-full hover-lift transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="mb-2">
                  <Badge
                    variant="secondary"
                    className={
                      entry.type === "case-study"
                        ? "bg-violet-500/10 text-violet-600 dark:text-violet-400"
                        : "bg-primary/10"
                    }
                  >
                    {entry.type === "case-study" ? "Case Study" : "Article"}
                  </Badge>
                </div>
                <CardTitle className="text-xl leading-tight">{entry.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {entry.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {entry.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={entry.publishedAt}>
                    {new Date(entry.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{entry.readingTime}</span>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
