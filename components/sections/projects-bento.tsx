"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "@/components/ui/section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Lock } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Internal Web Application",
    organization: "Parma Calcio 1913",
    description:
      "Architected and deployed 5+ full-stack features for Parma Calcio's internal operations platform serving 50+ staff members.",
    tags: ["AWS Lambda", "Next.js", "TypeScript", "PostgreSQL"],
    metrics: ["50+ Users", "35% Time Saved", "95+ Lighthouse Score"],
    isNDA: true,
    featured: true,
  },
  {
    title: "Discord Bot Automation",
    organization: "PoliTo Organization",
    description:
      "Automated role assignment system for 200+ member university Discord server, reducing manual management time by 95%.",
    tags: ["Discord.js", "Node.js", "Supabase"],
    metrics: ["200+ Members", "95% Time Saved"],
    github: "https://github.com/egekaya1/PRT-role-bot",
    caseStudy: "/case-studies/discord-bot-automation",
    featured: true,
  },
  {
    title: "DigiTwin Database System",
    organization: "Team DigiTwin",
    description:
      "High-performance database system handling 50,000+ sensor readings per day with 40% faster query times.",
    tags: ["C++", "PostgreSQL", "CMake"],
    metrics: ["50K+ Readings/Day", "40% Faster"],
    isNDA: true,
    caseStudy: "/case-studies/digitwin-database",
    featured: true,
  },
  {
    title: "Portfolio Website",
    organization: "Personal Project",
    description:
      "Modern portfolio website achieving 95+ Lighthouse score with server-side rendering and optimal performance.",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS"],
    metrics: ["95+ Lighthouse", "<1s Load"],
    github: "https://github.com/egekaya1/egekaya.dev",
    external: "https://egekaya.dev",
  },
]

export function ProjectsBento() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="Projects"
            subtitle="Crafting solutions from concept to deployment"
            centered
          />
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-4">
          {/* Featured Project 1 - Large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 md:row-span-2"
          >
            <div className="h-full p-6 rounded-2xl border-2 bg-linear-to-br from-primary/5 via-background to-cyan-500/5 hover-lift">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge className="mb-2">Featured</Badge>
                  <h3 className="text-2xl font-bold mb-1">{projects[0].title}</h3>
                  <p className="text-sm text-muted-foreground">{projects[0].organization}</p>
                </div>
                {projects[0].isNDA && (
                  <div className="p-2 rounded-lg bg-amber-500/10">
                    <Lock className="h-5 w-5 text-amber-500" />
                  </div>
                )}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {projects[0].description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {projects[0].metrics?.map((metric) => (
                  <Badge key={metric} variant="outline" className="bg-primary/5">
                    {metric}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {projects[0].tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:row-span-2"
          >
            <div className="h-full p-6 rounded-2xl border-2 hover-lift flex flex-col">
              <div className="flex-1">
                <Badge className="mb-3">Open Source</Badge>
                <h3 className="text-xl font-bold mb-1">{projects[1].title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{projects[1].organization}</p>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {projects[1].description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {projects[1].metrics?.map((metric) => (
                    <Badge key={metric} variant="outline" className="text-xs">
                      {metric}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {projects[1].tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                {projects[1].caseStudy && (
                  <Button size="sm" variant="default" asChild className="w-full">
                    <Link href={projects[1].caseStudy}>Case Study</Link>
                  </Button>
                )}
                {projects[1].github && (
                  <Button size="sm" variant="outline" asChild className="w-full">
                    <a href={projects[1].github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2"
          >
            <div className="h-full p-6 rounded-2xl border-2 hover-lift">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold mb-1">{projects[2].title}</h3>
                  <p className="text-sm text-muted-foreground">{projects[2].organization}</p>
                </div>
                {projects[2].isNDA && (
                  <div className="p-2 rounded-lg bg-amber-500/10">
                    <Lock className="h-4 w-4 text-amber-500" />
                  </div>
                )}
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {projects[2].description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {projects[2].tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {projects[2].caseStudy && (
                  <Button size="sm" variant="outline" asChild>
                    <Link href={projects[2].caseStudy}>Learn More</Link>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Project 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="h-full p-6 rounded-2xl border-2 hover-lift flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">{projects[3].title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{projects[3].organization}</p>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {projects[3].description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {projects[3].tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                {projects[3].github && (
                  <Button size="sm" variant="outline" asChild className="flex-1">
                    <a href={projects[3].github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {projects[3].external && (
                  <Button size="sm" variant="outline" asChild className="flex-1">
                    <a href={projects[3].external} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
