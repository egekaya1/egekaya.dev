"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface TechItem {
  name: string
  category: string
  icon: string
}

const techStack: TechItem[] = [
  // Languages (most general)
  { name: "Python", category: "Language", icon: "🐍" },
  { name: "Java", category: "Language", icon: "☕" },
  { name: "JavaScript", category: "Language", icon: "JS" },
  { name: "TypeScript", category: "Language", icon: "TS" },
  { name: "C", category: "Language", icon: "C" },
  { name: "C++", category: "Language", icon: "C++" },
  { name: "MATLAB", category: "Language", icon: "𝓜" },
  { name: "SQL", category: "Language", icon: "SQL" },

  // Web fundamentals
  { name: "HTML", category: "Web", icon: "HTML" },
  { name: "CSS", category: "Web", icon: "CSS" },

  // Frameworks & Libraries
  { name: "React", category: "Framework", icon: "⚛️" },
  { name: "Next.js", category: "Framework", icon: "▲" },
  { name: "Tailwind CSS", category: "Framework", icon: "🎨" },

  // Cloud / Runtime / Tools (more specific)
  { name: "AWS", category: "Cloud", icon: "☁️" },
  { name: "Docker", category: "Tool", icon: "🐳" },
  { name: "Node.js", category: "Runtime", icon: "🟢" },
  { name: "Git", category: "Tool", icon: "🔧" },
]

const categoryColors = {
  Frontend: "from-blue-500 to-cyan-500",
  Backend: "from-green-500 to-emerald-500",
  Languages: "from-purple-500 to-pink-500",
  Tools: "from-orange-500 to-red-500",
  Embedded: "from-yellow-500 to-amber-500",
}

const categoryBorderColors = {
  Frontend: "border-blue-500/20 bg-blue-500/5",
  Backend: "border-green-500/20 bg-green-500/5",
  Languages: "border-purple-500/20 bg-purple-500/5",
  Tools: "border-orange-500/20 bg-orange-500/5",
  Embedded: "border-yellow-500/20 bg-yellow-500/5",
}

export function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Categories removed from UI — rendering as a single logical list

  return (
    <section id="tech-stack" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="Tech Stack"
            subtitle="Technologies I work with daily"
            centered
          />
        </motion.div>

        <div className="mt-12 lg:mt-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.05 * index }}
              >
                <Card className="hover-lift border-2 h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{tech.icon}</div>
                        <div>
                          <h3 className="font-semibold text-sm">{tech.name}</h3>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 flex flex-col items-center gap-6"
        >
          <h3 className="text-2xl font-bold text-center">GitHub Activity</h3>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 w-full max-w-4xl">
            <Card className="flex-1 w-full border-2">
              <CardContent className="pt-6 flex items-center justify-center">
                <Image
                  src="https://github-readme-stats.vercel.app/api?username=egekaya1&show_icons=true&theme=transparent&hide_border=true&title_color=6366f1&icon_color=06b6d4&text_color=64748b&bg_color=00000000"
                  alt="Ege Kaya's GitHub Stats"
                  width={495}
                  height={195}
                  className="w-full max-w-md"
                  unoptimized
                />
              </CardContent>
            </Card>
            <Card className="flex-1 w-full border-2">
              <CardContent className="pt-6 flex items-center justify-center">
                <Image
                  src="https://github-readme-streak-stats.herokuapp.com?user=egekaya1&theme=transparent&hide_border=true&ring=6366f1&fire=06b6d4&currStreakLabel=64748b&sideLabels=64748b&dates=64748b&background=00000000"
                  alt="Ege Kaya's GitHub Streak"
                  width={495}
                  height={195}
                  className="w-full max-w-md"
                  unoptimized
                />
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
