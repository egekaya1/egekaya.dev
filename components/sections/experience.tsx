"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "@/components/ui/section-heading"
import { Timeline, TimelineItem, TimelineContent } from "@/components/ui/timeline"

const experiences = [
  {
    title: "Research Assistant – AI",
    subtitle: "Politecnico di Torino – Prof. Paolo Montuschi",
    period: "2026 – Present",
    description:
      "Designing and implementing machine learning models to analyze and predict student academic performance. Building scalable data pipelines and evaluation frameworks for large educational datasets. Designing and deploying AI-based class support systems integrated within university infrastructure.",
    tags: ["Python", "PyTorch", "Data Pipelines", "ML"],
    achievements: ["IEEE Fellow Supervisor", "ML Models", "Educational AI"],
  },
  {
    title: "Full-Stack Developer",
    subtitle: "Parma Calcio 1913",
    period: "Sep 2025 – Feb 2026",
    description:
      "Built and deployed 20+ production full-stack features (React, TypeScript) used by 50+ staff, reducing operational workflow time by 50%. Integrated AWS S3, CDN delivery, and real-time data pipelines; achieved Lighthouse performance scores consistently above 95.",
    tags: ["Next.js", "TypeScript", "AWS S3", "CDN", "CI/CD"],
    achievements: ["20+ Features Shipped", "50+ Users", "Lighthouse 95+", "50% Time Saved"],
  },
  {
    title: "Full-Stack & Embedded Developer",
    subtitle: "PoliTo Rocket Team",
    period: "Feb 2025 – Feb 2026",
    description:
      "Developed internal web platforms for 150+ members, automating 1,000+ daily operations and reducing administrative overhead by 95%. Implemented STM32 flight firmware in C/C++ under real-time constraints; built drivers, watchdog systems, and performed SWD debugging.",
    tags: ["Next.js", "Supabase", "C/C++", "STM32", "PostgreSQL"],
    achievements: ["150+ Team Members", "95% Admin Time Saved", "STM32 Firmware", "SWD Debugging"],
  },
  {
    title: "Database Developer",
    subtitle: "Team DigiTwin – PoliTo",
    period: "Feb 2025 – Jul 2025",
    description:
      "Designed and optimized PostgreSQL systems ingesting 50,000+ sensor readings/day; improved query performance by 40%. Implemented automated data pipeline processing 2GB+ of telemetry data weekly for structural monitoring.",
    tags: ["PostgreSQL", "C++", "Data Engineering", "Performance Optimization"],
    achievements: ["50K+ Records/Day", "40% Query Improvement", "2GB+ Data/Week"],
  },
]

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="Experience"
            subtitle="Building products and contributing to innovative teams"
            centered
          />
        </motion.div>

        <div className="mt-12 lg:mt-16 max-w-4xl mx-auto">
          <Timeline>
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <TimelineItem isLast={index === experiences.length - 1}>
                  <TimelineContent
                    title={experience.title}
                    subtitle={experience.subtitle}
                    period={experience.period}
                    description={experience.description}
                    achievements={experience.achievements}
                    tags={experience.tags}
                  />
                </TimelineItem>
              </motion.div>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  )
}
