"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Lock } from "lucide-react"

const projects = [
  {
    title: "Internal Web Application",
    organization: "Parma Calcio 1913",
    description:
      "Developed multiple full-stack features for internal operations web application. Implemented modern UI components and integrated AWS cloud services for scalable, performant solutions.",
    tags: ["AWS", "Next.js", "Modern UI Frameworks", "Full-Stack"],
    isNDA: true,
    github: null,
    external: null,
  },
  {
    title: "Discord Bot Automation",
    organization: "PoliTo Organization",
    description:
      "Automated role assignment system for university organization Discord server. Built with Discord.js and Node.js, integrated with Supabase for persistent data storage and management.",
    tags: ["Discord.js", "Node.js", "Supabase", "API Integration"],
    isNDA: false,
    github: "https://github.com/egekaya1/PRT-role-bot",
    external: null,
  },
  {
    title: "DigiTwin Database System",
    organization: "Team DigiTwin",
    description:
      "Comprehensive database management system for digital twin applications. Engineered with C++ for performance-critical operations, PostgreSQL for data persistence, and CMake for cross-platform build automation.",
    tags: ["C++", "PostgreSQL", "Database Architecture"],
    isNDA: true,
    github: null, 
    external: null,
  },
  {
    title: "This Website",
    organization: "Ege Kaya",
    description:
      "Personal portfolio website designed and developed to showcase my projects, research, and experience. Built with Next.js and modern UI frameworks, it features responsive design, modular architecture, and optimized performance. Focused on clean aesthetics, accessibility, and modernity, the site serves as both a professional resume and a demonstration of frontend development best practices.",
    tags: ["Next.js", "React", "TypeScript", "UI/UX", "Responsive Design", "Web Performance"],
    isNDA: false,
    github: null, 
    external: null,
  },
]

export function Projects() {
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
        <div className="mt-12 lg:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <Card className="h-full flex flex-col hover-lift border-2">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    {project.isNDA && (
                      <div className="p-2 rounded-lg bg-amber-500/10">
                        <Lock className="h-4 w-4 text-amber-500" />
                      </div>
                    )}
                  </div>
                  {project.organization && (
                    <p className="text-sm text-muted-foreground">
                      {project.organization}
                    </p>
                  )}
                </CardHeader>

                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {!project.isNDA && (project.github || project.external) && (
                  <CardFooter className="flex gap-2">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.external && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1"
                      >
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                )}

                {project.isNDA && (
                  <CardFooter>
                    <div className="w-full text-center py-2">
                      <Badge variant="outline" className="text-xs">
                        Code not publicly available
                      </Badge>
                    </div>
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
