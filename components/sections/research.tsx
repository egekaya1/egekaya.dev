import { Badge, Section } from "@/components/section"
import { research } from "@/lib/data"

export function Research() {
  return (
    <Section id="research" title="Research">
      <ol className="space-y-10">
        {research.map((item) => (
          <li key={item.title} className="space-y-2">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <Badge>{item.status}</Badge>
              <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
            </div>
            <h3 className="text-xl font-medium text-foreground leading-snug">{item.title}</h3>
            {item.collaborators && (
              <p className="font-display italic text-lg text-muted-foreground">{item.collaborators}</p>
            )}
            <p className="text-muted-foreground font-light leading-relaxed">{item.summary}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
