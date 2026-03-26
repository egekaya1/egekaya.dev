import dynamic from "next/dynamic"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"

const SectionSkeleton = () => (
  <div className="section-padding container-custom">
    <div className="h-96 animate-pulse bg-secondary/20 rounded-lg" />
  </div>
)

// Lazy load below-the-fold sections
const TechStack = dynamic(() => import("@/components/sections/tech-stack").then(mod => ({ default: mod.TechStack })), {
  loading: () => <SectionSkeleton />
})

const LeetCodeStats = dynamic(() => import("@/components/sections/leetcode-stats").then(mod => ({ default: mod.LeetCodeStats })), {
  loading: () => <SectionSkeleton />
})

const Experience = dynamic(() => import("@/components/sections/experience").then(mod => ({ default: mod.Experience })), {
  loading: () => <SectionSkeleton />
})

const Projects = dynamic(() => import("@/components/sections/projects").then(mod => ({ default: mod.Projects })), {
  loading: () => <SectionSkeleton />
})

const Research = dynamic(() => import("@/components/sections/research").then(mod => ({ default: mod.Research })), {
  loading: () => <SectionSkeleton />
})

const Awards = dynamic(() => import("@/components/sections/awards").then(mod => ({ default: mod.Awards })), {
  loading: () => <SectionSkeleton />
})

const Contact = dynamic(() => import("@/components/sections/contact").then(mod => ({ default: mod.Contact })), {
  loading: () => <SectionSkeleton />
})

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <TechStack />
      <LeetCodeStats />
      <Experience />
      <Projects />
      <Research />
      <Awards />
      <Contact />
    </main>
  )
}
