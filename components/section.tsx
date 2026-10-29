import * as React from "react"

export function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 py-12 first:pt-0">
      <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8 border-b border-border/60 pb-3">
        {title}
      </h2>
      {children}
    </section>
  )
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-primary">
      {children}
    </span>
  )
}
