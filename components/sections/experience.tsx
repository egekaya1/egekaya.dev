"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "@/components/ui/section-heading"
import { Timeline, TimelineItem, TimelineContent } from "@/components/ui/timeline"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const experiences = [
  {
    title: "Research Assistant – AI",
    subtitle: "Politecnico di Torino – Prof. Paolo Montuschi",
    period: "2026 – Present",
    description:
      "Building ML models to analyze and predict student academic performance. Implementing data pipelines and evaluation frameworks for large educational datasets. Deploying AI-based class support systems integrated within university infrastructure.",
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
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <SectionHeading
            label="Experience"
            title="Work History"
            subtitle="Where I have shipped code and what it did"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="mt-16 lg:mt-20"
        >
          <Timeline>
            {experiences.map((experience, index) => (
              <motion.div key={index} variants={fadeUp}>
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
        </motion.div>
      </div>
    </section>
  )
}
