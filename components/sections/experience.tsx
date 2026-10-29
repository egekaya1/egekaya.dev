import { Section } from "@/components/section"
import { experience } from "@/lib/data"

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative border-l border-border/70 ml-1.5 space-y-10">
        {experience.map((exp) => (
          <li key={`${exp.org}-${exp.period}`} className="pl-6 relative">
            <span
              aria-hidden
              className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ring-4 ring-background ${
                exp.kind === "Research" ? "bg-primary" : "bg-muted-foreground"
              }`}
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-xl font-medium text-foreground">{exp.role}</h3>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{exp.period}</span>
            </div>
            <p className="font-display italic text-lg text-muted-foreground">
              {exp.org} · {exp.place}
              <span className="ml-2 not-italic font-mono text-[11px] uppercase tracking-wider text-primary/80">
                {exp.kind}
              </span>
            </p>
            <ul className="mt-3 space-y-2 text-muted-foreground font-light leading-relaxed list-disc pl-5 marker:text-border">
              {exp.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
