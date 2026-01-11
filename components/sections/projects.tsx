"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MilestoneBar } from "@/components/ui/milestone-bar"
import type { Milestone } from "@/components/ui/milestone-bar"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Lock } from "lucide-react"

const projects = [
  {
    title: "Timber Co.",
    organization: "Personal Project",
    description:
      "(WIP) Bird's-eye view strategy game where you build a timber empire from the ground up. Command workers to cut forests, process wood into refined materials, automate production chains, and scale operations. Features resource management, worker AI, and progression systems built with Java and JavaFX.",
    tags: [
      "Java",
      "JavaFX",
      "Game Development",
      "Resource Management",
      "AI Systems"
    ],
    metrics: [
      "Worker Automation",
      "Production Chains",
      "Resource Economy",
      "Bird's-eye View"
    ],
    isNDA: false,
    github: null,
    external: null,
    caseStudy: null,
  },
  {
    title: "CoreMetric",
    organization: "Open Source",
    description:
      "(WIP) Privacy-first macOS system monitor using ML-powered anomaly detection. Unlike traditional monitors with hard-coded thresholds, CoreMetric uses a Reconstruction Autoencoder running on Apple Neural Engine to learn your usage patterns and detect subtle anomalies—memory leaks, crypto-miners, frozen processes—with <1% CPU overhead.",
    tags: [
      "SwiftUI",
      "CoreML",
      "PyTorch",
      "Metal (MPS)",
      "IOKit",
      "Darwin Kernel"
    ],
    metrics: [
      "<1% CPU Overhead",
      "ANE Inference",
      "Zero Cloud Dependencies",
      "Real-time Detection",
      "24h Training Window"
    ],
    isNDA: false,
    github: "https://github.com/egekaya1/CoreMetric",
    external: null,
    caseStudy: "/case-studies/coremetric",
  },
  {
    title: "LectureLens",
    organization: "Open Source",
    description:
      "(WIP) AI-powered study companion: ingest PDFs & notes → summaries, flashcards, interactive Q&A and milestone-based study schedules. Incremental AI pipeline with secure per-user isolation.",
    tags: [
      "Next.js App Router",
      "TypeScript",
      "Supabase (Auth + RLS)",
      "PostgreSQL",
      "Edge Functions",
      "AI Pipeline"
    ],
    metrics: [
      "Schema+RLS",
      "Chunking Pipeline",
      "Edge Fn Scaffold",
      "Embeddings Ready",
      "M1 In Progress"
    ],
    milestones: [
      { label: "M1 Auth & Processing", status: "done" },
      { label: "M2 Lecture Detail", status: "done" },
      { label: "M3 Flashcards", status: "in-progress" },
      { label: "M4 Q&A", status: "pending" },
      { label: "M5 Semantic Search", status: "pending" },
      { label: "M6 Study Schedules", status: "pending" },
      { label: "M7 Polish & Beta", status: "pending" }
    ] as Milestone[],
    isNDA: false,
    github: "https://github.com/egekaya1/LectureLens",
    external: "https://lecture-lens-nine.vercel.app/",
    caseStudy: "/case-studies/lecturelens-platform",
  },
  {
    title: "GitSimulator",
    organization: "Open Source",
    description:
      "Production-grade Git simulation engine: dry-run rebase, merge, reset, cherry-pick with visual commit graphs, conflict prediction (3 certainty levels), and safety analysis. Awarded 3rd Place at GitKon Game Jam 2025. 135+ tests, automated CI/CD, interactive TUI, plugin architecture. Available on PyPI: pipx install gitsimulator (v1.0.1).",
    tags: [
      "Python 3.11+",
      "Dulwich",
      "Rich",
      "Typer",
      "Textual",
      "CI/CD"
    ],
    metrics: [
      "🏆 GitKon 2025 3rd Place",
      "135+ Tests",
      "95%+ Coverage",
      "PyPI v1.0.1",
      "3-Level Conflict Detection",
      "Interactive TUI"
    ],
    isNDA: false,
    github: "https://github.com/egekaya1/GitSimulator",
    external: null,
    caseStudy: "/case-studies/git-sim",
  },
  {
    title: "This Website!",
    organization: "Personal Project",
    description:
      "Modern portfolio website built with Next.js 16 and TypeScript, achieving 95+ Lighthouse score across all metrics. Implements server-side rendering, optimized image loading, and accessibility best practices (WCAG AA). Features dark mode, responsive design, and form validation with 99.9% uptime on Vercel.",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4"],
    metrics: ["95+ Lighthouse", "WCAG AA", "<1s Load Time"],
    isNDA: false,
    github: "https://github.com/egekaya1/egekaya.dev", 
    external: null,
    caseStudy: "/case-studies/portfolio-website",
  },
  {
    title: "Internal Web Application",
    organization: "Parma Calcio 1913",
    description:
      "Architected and deployed 5+ full-stack features for Parma Calcio's internal operations platform serving 50+ staff members. Reduced data entry time by 35% through automated workflows using Next.js and CloudFront + S3, serving edge‑cached documents and training videos to enable faster teamwide communication and data sharing. Implemented responsive UI components with 95+ Lighthouse performance score.",
    tags: ["CloudFront + S3", "Next.js", "TypeScript", "PostgreSQL"],
    metrics: ["50+ Users", "35% Time Saved", "95+ Lighthouse Score"],
    isNDA: true,
    github: null,
    external: null,
    caseStudy: "/case-studies/parma-internal-platform",
  },
  {
    title: "DigiTwin Database System",
    organization: "Team DigiTwin",
    description:
      "Engineered high-performance database management system handling 50,000+ sensor readings per day for structural monitoring. Optimized PostgreSQL queries achieving 40% faster response times. Implemented C++ data processing pipeline with CMake for cross-platform deployment across Linux and embedded systems.",
    tags: ["C++", "PostgreSQL", "CMake", "Data Processing"],
    metrics: ["50K+ Readings/Day", "40% Faster Queries", "Multi-Platform"],
    isNDA: true,
    github: null, 
    external: null,
    caseStudy: "/case-studies/digitwin-database",
  },
  {
    title: "Discord Bot Automation",
    organization: "PoliTo Organization",
    description:
      "Automated role assignment system for 200+ member university Discord server, reducing manual role management time from 2 hours/week to 5 minutes/month. Built with Discord.js and Node.js, integrated with Supabase for real-time data synchronization. Handles 1000+ role assignments with 99.9% uptime.",
    tags: ["Discord.js", "Node.js", "Supabase", "API Integration"],
    metrics: ["200+ Members", "95% Time Reduction", "1000+ Assignments"],
    isNDA: false,
    github: "https://github.com/egekaya1/PRT-role-bot",
    external: null,
    caseStudy: "/case-studies/discord-bot-automation",
  },
  {
    title: "NIOChatServer",
    organization: "Open Source",
    description:
      "Real-time WebSocket chat application built with Swift NIO for high-performance asynchronous networking. Features non-blocking I/O, concurrent connection handling, and event-driven architecture. Demonstrates modern Swift server-side development with efficient resource utilization.",
    tags: ["Swift", "SwiftNIO", "WebSocket", "Async/Await", "Server-Side"],
    metrics: ["Non-blocking I/O", "Event-Driven", "Real-time Messaging"],
    isNDA: false,
    github: "https://github.com/egekaya1/NIOChatServer",
    external: null,
    caseStudy: null,
  },
  {
    title: "Notes App",
    organization: "Personal Project",
    description:
      "Feature-rich desktop notes application with clean JavaFX interface for organizing and managing personal notes. Includes note categorization, search functionality, and persistent storage. Built with modern Java practices and MVC architecture.",
    tags: ["Java", "JavaFX", "MVC", "Desktop App", "UI/UX"],
    metrics: ["Rich Text Editor", "Category System", "Search & Filter"],
    isNDA: false,
    github: "https://github.com/egekaya1/Notes-App",
    external: null,
    caseStudy: null,
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

                  {project.milestones && (
                    <div className="mt-4">
                      <MilestoneBar milestones={project.milestones} />
                    </div>
                  )}

                  {project.metrics && (
                    <div className="flex flex-wrap gap-2 mt-4 mb-4">
                      {project.metrics.map((metric) => {
                        const isAward = metric.includes("🏆") || metric.toLowerCase().includes("gitkon")
                        return (
                          <Badge
                            key={metric}
                            variant={isAward ? "default" : "outline"}
                            className={isAward
                              ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold border-0 shadow-md hover:shadow-lg transition-shadow ring-1 ring-amber-600/50"
                              : "bg-primary/5"
                            }
                          >
                            {metric}
                          </Badge>
                        )
                      })}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {(project.github || project.external || project.caseStudy) && (
                  <CardFooter className="flex gap-2 flex-wrap">
                    {project.caseStudy && (
                      <Button
                        variant="default"
                        size="sm"
                        asChild
                        className="flex-1"
                      >
                        <a
                          href={project.caseStudy}
                          aria-label={`View case study for ${project.title}`}
                          className="inline-flex items-center justify-center gap-2"
                        >
                          Case Study
                        </a>
                      </Button>
                    )}
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
