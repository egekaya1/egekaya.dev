import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"

export default function Home() {
  return (
    <main id="main">
      <div className="fade-in-section" style={{animationDelay: "0s"}}><Hero /></div>
      <div className="fade-in-section" style={{animationDelay: "0.2s"}}><About /></div>
      <div className="fade-in-section" style={{animationDelay: "0.4s"}}><Experience /></div>
      <div className="fade-in-section" style={{animationDelay: "0.6s"}}><Projects /></div>
    </main>
  )
}
