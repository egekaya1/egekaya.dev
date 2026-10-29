import { Section } from "@/components/section"
import { education, honours, skills } from "@/lib/data"

export function Education() {
  return (
    <Section id="education" title="Education & Honours">
      <div className="space-y-8">
        {education.map((edu) => (
          <div key={edu.school}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-xl font-medium text-foreground">{edu.school}</h3>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{edu.period}</span>
            </div>
            <p className="font-display italic text-lg text-muted-foreground">
              {edu.degree} · {edu.place}
            </p>
            <ul className="mt-2 space-y-1.5 text-muted-foreground font-light leading-relaxed list-disc pl-5 marker:text-border">
              {edu.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="label-mono mb-3">Honours</p>
          <ul className="space-y-2 text-muted-foreground font-light leading-relaxed list-disc pl-5 marker:text-border">
            {honours.map((honour) => (
              <li key={honour}>{honour}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label-mono mb-3">Skills</p>
          <dl className="space-y-3">
            {skills.map((group) => (
              <div key={group.label}>
                <dt className="text-sm text-foreground">{group.label}</dt>
                <dd className="text-sm text-muted-foreground font-light leading-relaxed">{group.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}
