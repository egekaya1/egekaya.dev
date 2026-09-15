"use client"

import * as React from "react"
import { Github } from "lucide-react"

const projects = [
  {
    title: "GitSimulator",
    description: "Python Git simulation engine with dry-run rebase, merge, reset, and cherry-pick. Won 3rd Place at the GitKon Game Jam 2025.",
    tags: ["Python", "Dulwich"],
    github: "https://github.com/egekaya1/GitSimulator",
    external: null,
  },
  {
    title: "CoreMetric",
    description: "Privacy-first macOS system monitor using a Reconstruction Autoencoder on the Apple Neural Engine to detect memory leaks.",
    tags: ["Swift", "CoreML"],
    github: "https://github.com/egekaya1/CoreMetric",
    external: null,
  },
  {
    title: "NIOChatServer",
    description: "Real-time WebSocket chat server built with Swift NIO focusing on high-performance async networking.",
    tags: ["Swift", "SwiftNIO"],
    github: "https://github.com/egekaya1/NIOChatServer",
    external: null,
  },
  {
    title: "LectureLens",
    description: "AI study platform that ingests PDFs and notes to generate summaries, flashcards, and interactive Q&A.",
    tags: ["Next.js", "PostgreSQL"],
    github: "https://github.com/egekaya1/LectureLens",
    external: null,
  }
]

export function Projects() {
  return (
    <section className="py-16 pb-32">
      <div className="container-custom max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-10 border-b border-border/50 pb-4">Selected Work</h2>

        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.title} className="group flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-display font-medium text-foreground">{project.title}</h3>
                <div className="flex gap-3 text-muted-foreground">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-all duration-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-[2px] hover:scale-110 active:scale-95">
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  
                </div>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
