"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Languages, Target, BookOpen } from "lucide-react"

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
  visible: { transition: { staggerChildren: 0.07 } },
}

const interests = [
  "Computer Science", "Artificial Intelligence", "Software Engineering",
  "Physics", "Biology", "Chemistry", "Mathematics", "Art", "Language Learning",
]

const stats = [
  { label: "GPA", value: "27/30" },
  { label: "Year", value: "Final" },
  { label: "Languages", value: "3" },
  { label: "Organizations", value: "3+" },
  { label: "Projects", value: "5+" },
]

export function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <SectionHeading
            label="About"
            title="Who I Am"
            subtitle="Computer engineer. AI researcher. Full-stack developer."
          />
        </motion.div>

        <div className="mt-16 lg:mt-20 grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={stagger}
            className="space-y-8"
          >
            <motion.div variants={fadeUp} className="space-y-4">
              <h3 className="font-display text-2xl font-light">Background</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-0.75 text-foreground/40 shrink-0">—</span>
                  <span className="text-sm leading-relaxed">
                    Final-year Computer Engineering student at{" "}
                    <span className="text-foreground font-medium">Politecnico di Torino</span>{" "}
                    with 27/30 GPA and Full Scholarship, incoming M.Sc. in CS (AI) at{" "}
                    <span className="text-foreground font-medium">KU Leuven</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.75 text-foreground/40 shrink-0">—</span>
                  <span className="text-sm leading-relaxed">
                    Research Assistant under IEEE Fellow and Vice Rector Prof. Paolo Montuschi at Politecnico di Torino
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.75 text-foreground/40 shrink-0">—</span>
                  <span className="text-sm leading-relaxed">
                    Full-stack developer with experience in React, Next.js, TypeScript, AWS, Python, and AI/ML systems
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              <h3 className="font-display text-2xl font-light">What I Do</h3>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Build scalable web applications with modern frameworks (React, Next.js, TypeScript)",
                  "Develop problem-solving software for real-time applications (C++, Python)",
                  "Design and optimize database architectures (PostgreSQL, Supabase)",
                  "Contribute to open-source and research projects exploring AI and CS",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.75 text-foreground/40 shrink-0">—</span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Education */}
            <motion.div variants={fadeUp} className="space-y-3">
              {[
                {
                  degree: "M.Sc. Computer Science – AI Specialisation",
                  school: "KU Leuven",
                  meta: "2026 – 2028 · Programme Scholarship",
                },
                {
                  degree: "B.Sc. Computer Engineering",
                  school: "Politecnico di Torino",
                  meta: "2023 – 2026 · GPA 27/30",
                },
              ].map((edu) => (
                <Card key={edu.degree} className="border">
                  <CardContent className="pt-5 pb-5">
                    <div className="flex items-start gap-4">
                      <GraduationCap className="h-5 w-5 mt-0.5 text-muted-foreground shrink-0" />
                      <div>
                        <p className="text-sm font-medium">{edu.degree}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{edu.school}</p>
                        <p className="label-mono mt-2">{edu.meta}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Card className="border">
                <CardContent className="pt-5 pb-5">
                  <div className="flex items-start gap-4">
                    <Languages className="h-5 w-5 mt-0.5 text-muted-foreground shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Languages</p>
                      <p className="label-mono mt-2">Turkish · English · Italian</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={stagger}
            className="space-y-6"
          >
            {/* Stats */}
            <motion.div variants={fadeUp}>
              <div className="grid grid-cols-3 gap-px border border-border rounded-sm overflow-hidden">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-card px-4 py-5 text-center">
                    <p className="font-display text-4xl font-normal tabular-nums">{stat.value}</p>
                    <p className="label-mono mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div variants={fadeUp}>
              <Card className="border">
                <CardContent className="pt-5 pb-5">
                  <div className="flex items-start gap-4">
                    <BookOpen className="h-5 w-5 mt-0.5 text-muted-foreground shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium mb-3">Interests</p>
                      <div className="flex flex-wrap gap-2">
                        {interests.map((interest) => (
                          <span
                            key={interest}
                            className="inline-flex items-center rounded-sm border border-border px-2.5 py-1 text-xs text-muted-foreground"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Goals */}
            <motion.div variants={fadeUp}>
              <Card className="border">
                <CardContent className="pt-5 pb-5">
                  <div className="flex items-start gap-4">
                    <Target className="h-5 w-5 mt-0.5 text-muted-foreground shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium mb-3">Current Goals</p>
                      <ul className="space-y-2">
                        {[
                          "Starting M.Sc. in Computer Science (AI) at KU Leuven",
                          "Continuing AI research under Prof. Montuschi",
                          "Contributing to open-source and research projects",
                        ].map((goal) => (
                          <li key={goal} className="flex items-start gap-3">
                            <span className="mt-0.75 text-foreground/40 shrink-0 text-xs">—</span>
                            <span className="text-sm text-muted-foreground">{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
