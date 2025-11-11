import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { Research } from "@/components/sections/research"
import { Resume } from "@/components/sections/resume"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Research />
      <Resume />
      <Contact />
    </main>
  )
}
