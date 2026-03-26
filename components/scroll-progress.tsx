"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const update = () => {
      const el = document.documentElement
      const scrollable = el.scrollHeight - el.clientHeight
      setWidth(scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0)
    }
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-border/30 pointer-events-none">
      <div
        className="h-full bg-primary"
        style={{ width: `${width}%`, transition: "none" }}
      />
    </div>
  )
}
