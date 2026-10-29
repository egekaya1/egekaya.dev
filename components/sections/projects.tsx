import { GithubIcon } from "@/components/icons"
import { Section } from "@/components/section"
import { projects } from "@/lib/data"

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((project) => (
          <article
            key={project.title}
            className="hover-lift flex flex-col rounded-xl border border-border bg-card p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-medium text-foreground">{project.title}</h3>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
              )}
            </div>
            <p className="mt-2 text-sm text-muted-foreground font-light leading-relaxed">{project.description}</p>
            {project.highlight && (
              <p className="mt-3 text-sm text-foreground/85">{project.highlight}</p>
            )}
            <div className="mt-auto flex flex-wrap gap-3 pt-4">
              {project.tags.map((tag) => (
                <span key={tag} className="label-mono">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
