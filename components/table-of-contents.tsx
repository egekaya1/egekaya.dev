"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface Heading {
  id: string
  text: string
  level: number
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "")
    .replace(/-+/g, "-")
    .trim()
}

export function TableOfContents() {
  const [headings, setHeadings] = React.useState<Heading[]>([])
  const [activeId, setActiveId] = React.useState<string>("")
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("article h2, article h3"))
    const items: Heading[] = nodes.map((node) => {
      if (!node.id) {
        node.id = slugify(node.textContent ?? "")
      }
      return {
        id: node.id,
        text: node.textContent ?? "",
        level: parseInt(node.tagName[1], 10),
      }
    })
    setHeadings(items)
  }, [])

  React.useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: "0px 0px -60% 0px", threshold: 0 }
    )

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length < 2) return null

  const tocList = (
    <ul className="space-y-1.5 text-sm">
      {headings.map(({ id, text, level }) => (
        <li key={id} className={cn(level === 3 && "pl-3")}>
          <a
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault()
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
              setMobileOpen(false)
            }}
            className={cn(
              "block leading-snug transition-colors",
              activeId === id
                ? "text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {text}
          </a>
        </li>
      ))}
    </ul>
  )

  return (
    <>
      {/* Desktop: sticky sidebar */}
      <aside className="hidden lg:block sticky top-24 self-start max-h-[calc(100vh-8rem)] overflow-y-auto w-56 shrink-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          On this page
        </p>
        {tocList}
      </aside>

      {/* Mobile: collapsible above article */}
      <div className="lg:hidden mb-6 border border-border rounded-lg overflow-hidden">
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium"
          aria-expanded={mobileOpen}
        >
          On this page
          <span className="text-muted-foreground text-xs">{mobileOpen ? "▲" : "▼"}</span>
        </button>
        {mobileOpen && <div className="px-4 pb-4">{tocList}</div>}
      </div>
    </>
  )
}
