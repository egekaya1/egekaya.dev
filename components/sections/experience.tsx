"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "@/components/ui/section-heading"
import { Timeline, TimelineItem, TimelineContent } from "@/components/ui/timeline"

const experiences = [
  {
    title: "Front-end Developer Intern",
    subtitle: "Parma Calcio 1913",
    period: "Sep 2024 - Present",
    description:
      "Architected and deployed 20+ full-stack production features serving 50+ staff members, reducing operational workflow time by 50% in most cases. Implemented AWS S3 data storage.Implemented real-time data, video and document processing. Collaborated with cross-functional teams to deliver features with 95+ Lighthouse performance scores.",
    tags: ["AWS Lambda", "Next.js", "TypeScript", "CI/CD"],
    achievements: ["20+ Features Shipped", "50+ Users", "50% Time Saved", "Interdepartmental Communication"],
  },
  {
    title: "Full Stack Developer",
    subtitle: "PoliTo Rocket Team",
    period: "Mar 2024 - Present",
    description:
      "Building internal tools and web applications for 150+ team members across engineering disciplines. Developed Discord bot automation reducing administrative overhead by 95%. Implemented Supabase-backed authentication and real-time database synchronization handling 1000+ daily operations.",
    tags: ["Next.js", "Supabase", "PostgreSQL", "Discord.js"],
    achievements: ["150+ Team Members", "95% Admin Time Saved", "1000+ Daily Ops"],
  },
  {
    title: "Staff Volunteer",
    subtitle: "Italian Tech Week (ITW) 2025",
    period: "Sep 2025",
    description:
      "Supported logistics and operations for Italy's largest technology conference with 5000+ attendees. Coordinated speaker sessions, facilitated networking between 100+ startups and investors, and managed registration systems ensuring smooth event flow.",
    tags: ["Event Management", "Coordination", "Tech Community"],
    achievements: ["5000+ Attendees", "100+ Startups", "Smooth Flow"],
  },
  {
    title: "Embedded Developer",
    subtitle: "PoliTo Rocket Team",
    period: "Mar 2024 - May 2024",
    description:
      "Developed embedded C++ software for STM32-based rocket flight computer, processing 100+ sensor readings per second. Worked on real-time telemetry system with <10ms latency for critical flight data. Optimized memory usage by 30% through efficient data structures and buffer management.",
    tags: ["C++", "STM32", "Real-Time Systems", "I2C/SPI"],
    achievements: ["100+ Readings/sec", "<10ms Latency", "30% Memory Saved"],
  },
  {
    title: "Database Developer",
    subtitle: "Team DigiTwin - PoliTo",
    period: "Mar 2024 - Jul 2024",
    description:
      "Designed PostgreSQL database schema from scratch handling capable of up to 50,000+ daily sensor readings for structural monitoring. Optimized query performance achieving 80% faster response times through indexing and query optimization. Implemented automated data pipeline processing 2GB+ of telemetry data weekly.",
    tags: ["PostgreSQL", "C++", "Data Engineering", "Performance Optimization"],
    achievements: ["50K+ Records/Day", "80% Query Speedup", "2GB+ Data/Week"],
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
