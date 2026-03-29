"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Lock } from "lucide-react"
import { cn } from "@/lib/utils"

type Category = "All" | "Web" | "ML / AI" | "Systems" | "Tools"
const FILTERS: Category[] = ["All", "Web", "ML / AI", "Systems", "Tools"]

interface Project {
  title: string
  organization: string
  description: string
  tags: string[]
  metrics: string[]
  category: Category
  isNDA: boolean
  github: string | null
  external: string | null
  caseStudy: string | null
}

const projects: Project[] = [
  {
    title: "Gravitational Lens Finder",
    organization: "GSoC 2026 Applicant — ML4SCI / DeepLense",
    description:
      "Completed evaluation tests for Google Summer of Code 2026 under ML4SCI / DeepLense. Multi-class substructure classification: AUC 0.9919, surpassing the Varma et al. reported baseline on the same dataset. Lens finding under 100:1 class imbalance: AUC 0.9877, 189 of 195 lenses recovered.",
    tags: ["PyTorch", "ResNet-18", "Computer Vision", "Python", "Class Imbalance", "Astrophysics"],
    metrics: ["AUC 0.9919", "96.9% Sensitivity", "100:1 Imbalance"],
    category: "ML / AI",
    isNDA: false,
    github: null,
    external: null,
    caseStudy: null,
  },
  {
    title: "AI-Generated Text Detector",
    organization: "MALTO Hackathon",
    description:
      "6-class classifier distinguishing human writing from 5 LLM sources on a heavily imbalanced dataset. Ensemble of 3 TF-IDF models — word n-grams, char n-grams, and 20 handcrafted stylometric features — with meta-learner stacking. Top 10 finish.",
    tags: ["Python", "scikit-learn", "NLP", "TF-IDF", "Ensemble", "Stacking"],
    metrics: ["Top 10 Finish", "F1 0.9370 (OOF)", "6-Class"],
    category: "ML / AI",
    isNDA: false,
    github: null,
    external: null,
    caseStudy: null,
  },
  {
    title: "Timber Co.",
    organization: "Personal Project",
    description:
      "(WIP) Bird's-eye view strategy game — build a timber empire. Command workers to cut forests, process wood into refined materials, automate production chains, and scale operations. Resource management, worker AI, progression systems built with Java and JavaFX.",
    tags: ["Java", "JavaFX", "Game Development", "Resource Management", "AI Systems"],
    metrics: ["Worker Automation", "Production Chains", "Resource Economy"],
    category: "Systems",
    isNDA: false,
    github: null,
    external: null,
    caseStudy: null,
  },
  {
    title: "CoreMetric",
    organization: "Open Source",
    description:
      "(WIP) Privacy-first macOS system monitor using ML-powered anomaly detection. A Reconstruction Autoencoder on Apple Neural Engine learns your usage patterns and detects memory leaks, crypto-miners, and frozen processes with <1% CPU overhead.",
    tags: ["SwiftUI", "CoreML", "PyTorch", "Metal (MPS)", "IOKit", "Darwin Kernel"],
    metrics: ["<1% CPU Overhead", "ANE Inference", "Zero Cloud Dependencies"],
    category: "ML / AI",
    isNDA: false,
    github: "https://github.com/egekaya1/CoreMetric",
    external: null,
    caseStudy: "/case-studies/coremetric",
  },
  {
    title: "LectureLens",
    organization: "Open Source",
    description:
      "(WIP) AI-powered study companion: ingest PDFs & notes → summaries, flashcards, interactive Q&A, and milestone-based study schedules. Incremental AI pipeline with secure per-user isolation.",
    tags: ["Next.js App Router", "TypeScript", "Supabase (Auth + RLS)", "PostgreSQL", "Edge Functions"],
    metrics: ["Auth + RLS", "Chunking Pipeline", "M3 Flashcards In Progress"],
    category: "Web",
    isNDA: false,
    github: "https://github.com/egekaya1/LectureLens",
    external: "https://lecture-lens-nine.vercel.app/",
    caseStudy: "/case-studies/lecturelens-platform",
  },
  {
    title: "GitSimulator",
    organization: "Open Source · GitKon 2025 3rd Place",
    description:
      "Production-grade Git simulation engine: dry-run rebase, merge, reset, cherry-pick with visual commit graphs, conflict prediction (3 certainty levels), and safety analysis. 135+ tests, CI/CD, interactive TUI, plugin architecture. Available on PyPI.",
    tags: ["Python 3.11+", "Dulwich", "Rich", "Typer", "Textual", "CI/CD"],
    metrics: ["135+ Tests", "95%+ Coverage", "PyPI v1.0.1", "3-Level Conflict Detection"],
    category: "Tools",
    isNDA: false,
    github: "https://github.com/egekaya1/GitSimulator",
    external: null,
    caseStudy: "/case-studies/git-sim",
  },
  {
    title: "This Website",
    organization: "Personal Project",
    description:
      "Portfolio built with Next.js 16, TypeScript, and Tailwind CSS v4. 95+ Lighthouse score, WCAG AA, dark mode, responsive design, and 99.9% uptime on Vercel.",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4"],
    metrics: ["95+ Lighthouse", "WCAG AA", "<1s Load Time"],
    category: "Web",
    isNDA: false,
    github: "https://github.com/egekaya1/egekaya.dev",
    external: null,
    caseStudy: "/case-studies/portfolio-website",
  },
  {
    title: "Internal Web Application",
    organization: "Parma Calcio 1913",
    description:
      "5+ full-stack features for Parma Calcio's internal platform serving 50+ staff. Reduced data entry time by 35% via automated workflows, CloudFront + S3 edge-cached documents and training videos, and 95+ Lighthouse performance.",
    tags: ["CloudFront + S3", "Next.js", "TypeScript", "PostgreSQL"],
    metrics: ["50+ Users", "35% Time Saved", "95+ Lighthouse"],
    category: "Web",
    isNDA: true,
    github: null,
    external: null,
    caseStudy: "/case-studies/parma-internal-platform",
  },
  {
    title: "DigiTwin Database System",
    organization: "Team DigiTwin",
    description:
      "High-performance database handling 50,000+ sensor readings per day for structural monitoring. Optimized PostgreSQL queries achieving 40% faster response times. C++ data processing pipeline with CMake for cross-platform deployment.",
    tags: ["C++", "PostgreSQL", "CMake", "Data Processing"],
    metrics: ["50K+ Readings/Day", "40% Faster Queries", "Multi-Platform"],
    category: "Systems",
    isNDA: true,
    github: null,
    external: null,
    caseStudy: "/case-studies/digitwin-database",
  },
  {
    title: "Discord Bot Automation",
    organization: "PoliTo Organization",
    description:
      "Automated role assignment for 200+ member university Discord server, cutting manual management from 2 hours/week to 5 minutes/month. Discord.js + Supabase real-time sync. 1000+ role assignments, 99.9% uptime.",
    tags: ["Discord.js", "Node.js", "Supabase", "API Integration"],
    metrics: ["200+ Members", "95% Time Reduction", "1000+ Assignments"],
    category: "Tools",
    isNDA: false,
    github: "https://github.com/egekaya1/PRT-role-bot",
    external: null,
    caseStudy: "/case-studies/discord-bot-automation",
  },
  {
    title: "NIOChatServer",
    organization: "Open Source",
    description:
      "Real-time WebSocket chat built with Swift NIO for high-performance async networking. Non-blocking I/O, concurrent connection handling, event-driven architecture.",
    tags: ["Swift", "SwiftNIO", "WebSocket", "Async/Await"],
    metrics: ["Non-blocking I/O", "Event-Driven", "Real-time"],
    category: "Systems",
    isNDA: false,
    github: "https://github.com/egekaya1/NIOChatServer",
    external: null,
    caseStudy: null,
  },
  {
    title: "Notes App",
    organization: "Personal Project",
    description:
      "Desktop notes application with JavaFX interface. Note categorization, search, and persistent storage. MVC architecture.",
    tags: ["Java", "JavaFX", "MVC", "Desktop App"],
    metrics: ["Rich Text Editor", "Category System", "Search & Filter"],
    category: "Systems",
    isNDA: false,
    github: "https://github.com/egekaya1/Notes-App",
    external: null,
    caseStudy: null,
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
  exit: { opacity: 0, y: 12, transition: { duration: 0.2 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

export function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [activeFilter, setActiveFilter] = React.useState<Category>("All")

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardVariant}
        >
          <SectionHeading
            label="Work"
            title="Projects"
            subtitle="Crafting solutions from concept to deployment"
          />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="flex flex-wrap gap-2 mt-10"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 py-1.5 rounded-sm text-sm border transition-colors duration-200",
                activeFilter === filter
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-foreground/40"
              )}
            >
              {filter}
              {filter !== "All" && (
                <span className="ml-1.5 font-mono text-xs opacity-50">
                  {projects.filter((p) => p.category === filter).length}
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div
          key={activeFilter}
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mt-10 grid sm:grid-cols-2 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={cardVariant}
                className="border border-border rounded-sm bg-card flex flex-col p-6 gap-4 transition-colors duration-200 hover:bg-secondary/35 hover:border-foreground/30"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-0.5 flex-1 min-w-0">
                    <p className="label-mono">{project.organization}</p>
                    <h3 className="text-base font-medium leading-snug">{project.title}</h3>
                  </div>
                  {project.isNDA && (
                    <Lock className="h-3.5 w-3.5 text-muted-foreground shrink-0 mt-0.5" />
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Metrics */}
                {project.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="inline-flex items-center rounded-sm border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-sm bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                {(project.github || project.external || project.caseStudy || project.isNDA) && (
                  <div className="flex flex-wrap gap-2 pt-1 border-t border-border mt-auto">
                    {project.isNDA && (
                      <span className="label-mono">Code not publicly available</span>
                    )}
                    {project.caseStudy && (
                      <Button variant="default" size="sm" asChild>
                        <a href={project.caseStudy}>Case Study</a>
                      </Button>
                    )}
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                          <Github className="h-3.5 w-3.5" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.external && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.external} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                          <ExternalLink className="h-3.5 w-3.5" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
