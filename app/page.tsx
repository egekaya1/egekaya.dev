import dynamic from "next/dynamic"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"

// Lazy load below-the-fold sections
const TechStack = dynamic(() => import("@/components/sections/tech-stack").then(mod => ({ default: mod.TechStack })), {
  loading: () => <div className="section-padding container-custom"><div className="h-96 animate-pulse bg-secondary/20 rounded-lg" /></div>
})

const LeetCodeStats = dynamic(() => import("@/components/sections/leetcode-stats").then(mod => ({ default: mod.LeetCodeStats })), {
  loading: () => <div className="section-padding container-custom"><div className="h-96 animate-pulse bg-secondary/20 rounded-lg" /></div>
})

const Experience = dynamic(() => import("@/components/sections/experience").then(mod => ({ default: mod.Experience })), {
  loading: () => <div className="section-padding container-custom"><div className="h-96 animate-pulse bg-secondary/20 rounded-lg" /></div>
})

const Projects = dynamic(() => import("@/components/sections/projects").then(mod => ({ default: mod.Projects })), {
  loading: () => <div className="section-padding container-custom"><div className="h-96 animate-pulse bg-secondary/20 rounded-lg" /></div>
})

const Research = dynamic(() => import("@/components/sections/research").then(mod => ({ default: mod.Research })), {
  loading: () => <div className="section-padding container-custom"><div className="h-96 animate-pulse bg-secondary/20 rounded-lg" /></div>
})

const Resume = dynamic(() => import("@/components/sections/resume").then(mod => ({ default: mod.Resume })), {
  loading: () => <div className="section-padding container-custom"><div className="h-96 animate-pulse bg-secondary/20 rounded-lg" /></div>
})

const Awards = dynamic(() => import("@/components/sections/awards").then(mod => ({ default: mod.Awards })), {
  loading: () => <div className="section-padding container-custom"><div className="h-96 animate-pulse bg-secondary/20 rounded-lg" /></div>
})

const Testimonials = dynamic(() => import("@/components/sections/testimonials").then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="section-padding container-custom"><div className="h-96 animate-pulse bg-secondary/20 rounded-lg" /></div>
})

const Contact = dynamic(() => import("@/components/sections/contact").then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="section-padding container-custom"><div className="h-96 animate-pulse bg-secondary/20 rounded-lg" /></div>
})

export default function Home() {
  return (
    <main id="main" role="main" aria-label="Main content">
      <Hero />
      <About />
      <TechStack />
      <LeetCodeStats />
      <Experience />
      <Projects />
      <Research />
      <Awards />
      <Testimonials />
      <Resume />
      <Contact />
    </main>
  )
}
