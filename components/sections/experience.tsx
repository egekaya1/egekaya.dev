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
    period: "Current",
    description:
      "Developing full-stack features for internal web applications using modern frameworks and AWS cloud services. Contributing to the digital transformation of professional sports operations.",
    tags: ["AWS", "Next.js", "Modern UI Frameworks", "Full-Stack Development"],
  },
  {
    title: "Full Stack Developer",
    subtitle: "PoliTo Rocket Team",
    period: "Current",
    description:
      "Building and maintaining full-stack applications for university rocket team operations. Collaborating with multidisciplinary teams to deliver robust technical solutions.",
    tags: ["Next.js", "JavaScript", "Supabase", "PostgreSQL"],
  },
  {
    title: "Staff Volunteer",
    subtitle: "Italian Tech Week (ITW) 2025",
    period: "2025",
    description:
      "Supported logistics and operations for one of Italy's premier technology conferences, facilitating connections between innovators, industry leaders, and the tech community.",
    tags: ["Event Operations", "Tech Community", "Networking"],
  },
  {
    title: "Embedded Developer",
    subtitle: "PoliTo Rocket Team",
    period: "Past",
    description:
      "Developed embedded systems software for rocket avionics using C++ and STM32 microcontrollers. Implemented real-time data processing and sensor integration for flight systems.",
    tags: ["C++", "STM32", "Embedded Systems", "Real-Time Programming"],
  },
  {
    title: "Database Developer",
    subtitle: "Team DigiTwin",
    period: "Past",
    description:
      "Designed and implemented database architecture for digital twin systems. Built robust data management solutions using modern database technologies and development practices.",
    tags: ["C++", "PostgreSQL", "Database Design"],
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
