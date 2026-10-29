import { Section } from "@/components/section"
import { interests, news } from "@/lib/data"

export function About() {
  return (
    <Section id="about" title="About">
      <div className="space-y-5 text-lg text-muted-foreground font-light leading-relaxed">
        <p>
          I&apos;m an M.Sc. student in Computer Science at UBC, supervised by{" "}
          <span className="text-foreground">Prof. Cristina Conati</span> in the HCI-NLP Lab and working with{" "}
          <span className="text-foreground">Dr. John-Jose Nunez</span> on human-centred AI for cancer care with BC Cancer.
        </p>
        <p>
          My research looks at what language models are doing internally and how their outputs should be explained to
          the people who rely on them: probing hidden states, patching activations, and designing explanations that hold
          up in sensitive settings like oncology.
        </p>
        <p>
          I also enjoy low-level systems work. Most recently I built the global task registry for the Swift Concurrency
          runtime through Google Summer of Code, and before that I wrote flight software for a rocket team and shipped
          production web apps for a professional football club. I did my B.Sc. in Computer Engineering at Politecnico di
          Torino.
        </p>
      </div>

      <div className="mt-8">
        <p className="label-mono mb-3">Research interests</p>
        <ul className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <li
              key={interest}
              className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-sm text-foreground/85"
            >
              {interest}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <p className="label-mono mb-4">News</p>
        <ul className="space-y-3">
          {news.map((item) => (
            <li key={item.text} className="flex flex-col sm:flex-row gap-1 sm:gap-6">
              <span className="font-mono text-sm text-primary shrink-0 sm:w-20">{item.date}</span>
              <span className="text-muted-foreground leading-relaxed">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
