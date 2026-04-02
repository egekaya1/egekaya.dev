"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "@/components/ui/section-heading"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, GraduationCap, Award, Code, Linkedin as LinkedinIcon } from "lucide-react"

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
  visible: { transition: { staggerChildren: 0.08 } },
}

const summary = `Computer Engineer and Research Assistant at Politecnico di Torino under Prof. Paolo Montuschi, with experience in AI systems, production-grade full-stack development, and embedded firmware engineering. Admitted to M.Sc. in Computer Science (AI) at KU Leuven with Programme Scholarship.`

const skills = [
  "Python", "C/C++", "Java", "TypeScript", "SQL", "Swift", "Go", "Rust",
  "React", "Next.js", "Node.js", "Spring Boot", "PostgreSQL", "AWS", "Docker",
  "Git", "PyTorch", "MATLAB", "Linux", "Embedded Systems", "STM32", "CI/CD",
]

const experience = [
  {
    title: "Research Assistant – AI",
    company: "Politecnico di Torino – Prof. Paolo Montuschi",
    period: "2026 – Present",
    description: "Designing and implementing ML models to predict student academic performance. Building scalable data pipelines for educational datasets. Deploying AI-based class support systems within university infrastructure.",
  },
  {
    title: "Full-Stack Developer",
    company: "Parma Calcio 1913",
    period: "Sep 2025 – Feb 2026",
    description: "Built and deployed 20+ production full-stack features used by 50+ staff, reducing operational workflow time by 50%. Integrated AWS S3, CDN delivery, and real-time data pipelines; achieved Lighthouse performance scores above 95.",
  },
  {
    title: "Full-Stack & Embedded Developer",
    company: "PoliTo Rocket Team",
    period: "Feb 2025 – Feb 2026",
    description: "Developed internal web platforms for 150+ members, automating 1,000+ daily operations. Implemented STM32 flight firmware in C/C++ under real-time constraints; built drivers, watchdog systems, and performed SWD debugging.",
  },
  {
    title: "Database Developer",
    company: "Team DigiTwin – PoliTo",
    period: "Feb 2025 – Jul 2025",
    description: "Designed and optimized PostgreSQL systems ingesting 50,000+ sensor readings/day; improved query performance by 40%. Implemented automated data pipelines processing 2GB+ of telemetry data weekly.",
  },
]

const education = [
  {
    degree: "M.Sc. in Computer Science – AI Specialisation",
    institution: "KU Leuven",
    period: "Admitted · Weighing other offers",
    note: "Programme Scholarship · 70% Tuition Waiver",
  },
  {
    degree: "B.Sc. in Computer Engineering",
    institution: "Politecnico di Torino",
    period: "2023 – 2026",
    note: "GPA 27/30 · Full Merit Scholarship",
  },
]

const project = {
  title: "Evaluating the Pedagogical and Cognitive Impacts of Large Language Models on Engineering Education",
  institution: "Politecnico di Torino",
  description: "Conducted in collaboration with IEEE Fellow Prof. Paolo Montuschi. Investigates the pedagogical potential and cognitive impact of AI-driven teaching systems within university-level engineering education. Co-delivered a lecture to showcase findings.",
}

export function Resume() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section id="resume" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <SectionHeading
            label="CV"
            title="Resume"
            subtitle="An overview of my background and qualifications"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mt-8"
        >
          <Button variant="outline" size="sm" asChild className="rounded-sm">
            <a href="https://www.linkedin.com/in/ege-kaya/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn Profile
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="mt-12 lg:mt-16 max-w-4xl space-y-px border border-border rounded-sm overflow-hidden"
        >
          {/* Summary */}
          <motion.div variants={fadeUp} className="bg-card">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm font-medium">
                <Award className="h-4 w-4 text-muted-foreground" />
                Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground leading-relaxed">{summary}</p>
            </CardContent>
          </motion.div>

          {/* Experience */}
          <motion.div variants={fadeUp} className="bg-card">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm font-medium">
                <Briefcase className="h-4 w-4 text-muted-foreground" />
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-5">
              {experience.map((exp, i) => (
                <div key={i} className={i !== experience.length - 1 ? "pb-5 border-b border-border" : ""}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1.5">
                    <div>
                      <p className="text-sm font-medium">{exp.title}</p>
                      <p className="text-xs text-muted-foreground">{exp.company}</p>
                    </div>
                    <p className="label-mono">{exp.period}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </CardContent>
          </motion.div>

          {/* Education */}
          <motion.div variants={fadeUp} className="bg-card">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm font-medium">
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-5">
              {education.map((edu, i) => (
                <div key={i} className={i !== education.length - 1 ? "pb-5 border-b border-border" : ""}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1.5">
                    <div>
                      <p className="text-sm font-medium">{edu.degree}</p>
                      <p className="text-xs text-muted-foreground">{edu.institution}</p>
                    </div>
                    <p className="label-mono">{edu.period}</p>
                  </div>
                  <p className="label-mono">{edu.note}</p>
                </div>
              ))}
            </CardContent>
          </motion.div>

          {/* Research */}
          <motion.div variants={fadeUp} className="bg-card">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm font-medium">
                <Code className="h-4 w-4 text-muted-foreground" />
                Research Project
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm font-medium mb-1">{project.title}</p>
              <p className="label-mono mb-3">{project.institution}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
            </CardContent>
          </motion.div>

          {/* Skills */}
          <motion.div variants={fadeUp} className="bg-card">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm font-medium">
                <Code className="h-4 w-4 text-muted-foreground" />
                Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <span key={skill} className="inline-flex items-center rounded-sm border border-border px-2.5 py-1 text-xs text-muted-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
