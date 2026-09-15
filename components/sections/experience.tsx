"use client"

import * as React from "react"

const experiences = [
  {
    title: "Graduate Research Assistant",
    subtitle: "UBC Nunez Lab & BC Cancer",
    period: "Sep 2026 – Present",
    description: "Researching Explainable AI (XAI) and Human-Centred AI to design personalized, multimodal LLM systems for AI-powered oncology care navigation.",
  },
  {
    title: "Google Summer of Code 2026",
    subtitle: "Apple / Swift Concurrency",
    period: "May 2026 – Sep 2026",
    description: "Building the global task registry for the Swift Concurrency runtime in C++ so suspended async tasks become visible to debuggers and crash reports.",
  },
  {
    title: "Research Assistant",
    subtitle: "Politecnico di Torino",
    period: "Feb 2026 – Jul 2026",
    description: "Building ML models to analyze and predict student academic performance, and deploying AI-based class support systems.",
  },
  {
    title: "Software Engineer Intern",
    subtitle: "Parma Calcio 1913",
    period: "Sep 2025 – Feb 2026",
    description: "Built and deployed full-stack features (React, TypeScript, AWS) for the club's internal platform, used by 50+ staff members.",
  },
  {
    title: "Embedded Developer",
    subtitle: "PoliTo Rocket Team",
    period: "Feb 2025 – Feb 2026",
    description: "Implemented STM32 flight firmware in C/C++ under real-time constraints.",
  }
]

export function Experience() {
  return (
    <section className="py-16">
      <div className="container-custom max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-10 border-b border-border/50 pb-4">Experience</h2>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
              <div className="text-sm text-muted-foreground w-40 shrink-0 uppercase tracking-widest font-mono">
                {exp.period}
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-medium text-foreground">{exp.title}</h3>
                <p className="text-muted-foreground italic font-display text-lg">{exp.subtitle}</p>
                <p className="text-muted-foreground font-light pt-2 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
