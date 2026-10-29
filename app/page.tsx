import { Profile } from "@/components/profile"
import { About } from "@/components/sections/about"
import { Research } from "@/components/sections/research"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { Education } from "@/components/sections/education"
import { Personal } from "@/components/sections/personal"

export default function Home() {
  return (
    <main id="main" className="container-custom max-w-6xl pt-28 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-12 lg:gap-16">
        <div className="fade-in-section">
          <Profile />
        </div>
        <div className="fade-in-section" style={{ animationDelay: "0.15s" }}>
          <About />
          <Research />
          <Experience />
          <Projects />
          <Education />
          <Personal />
        </div>
      </div>
    </main>
  )
}
