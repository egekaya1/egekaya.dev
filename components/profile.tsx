import Image from "next/image"
import { FileText, GraduationCap, Mail, MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import profilePic from "@/public/hero-profile.webp"
import { profile } from "@/lib/data"

const links = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "Google Scholar", href: profile.links.scholar, icon: GraduationCap },
  { label: "GitHub", href: profile.links.github, icon: GithubIcon },
  { label: "LinkedIn", href: profile.links.linkedin, icon: LinkedinIcon },
  { label: "CV (PDF)", href: profile.links.cv, icon: FileText },
]

export function Profile() {
  return (
    <aside className="lg:sticky lg:top-24 flex flex-col sm:flex-row lg:flex-col gap-6 sm:items-center lg:items-start">
      <div className="relative w-36 sm:w-40 lg:w-full lg:max-w-[260px] aspect-[4/5] overflow-hidden rounded-xl bg-secondary/50 border border-border/40 shadow-sm shrink-0">
        <Image
          src={profilePic}
          placeholder="blur"
          alt="Portrait of Ege Kaya"
          fill
          priority
          className="object-cover object-[center_30%]"
          sizes="(max-width: 1024px) 160px, 260px"
        />
      </div>

      <div className="space-y-4">
        <div>
          <h1 className="font-display text-4xl lg:text-5xl font-medium leading-tight text-foreground">{profile.name}</h1>
          <p className="mt-2 text-foreground/90">{profile.role}</p>
          <p className="text-muted-foreground">{profile.affiliation}</p>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            {profile.location}
          </p>
        </div>

        <ul className="flex flex-wrap lg:flex-col gap-x-5 gap-y-2 text-sm">
          {links.map(({ label, href, icon: Icon }) => {
            const external = href.startsWith("http") || href.endsWith(".pdf")
            return (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}
