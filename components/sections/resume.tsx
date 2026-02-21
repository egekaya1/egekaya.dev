"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Linkedin as LinkedinIcon
} from "lucide-react"

const summary = `Computer Engineer and incoming M.Sc. candidate in Computer Science (Artificial Intelligence) at KU Leuven. Research Assistant under Prof. Paolo Montuschi, with experience in AI systems, production-grade full-stack development, and embedded firmware engineering.`

const skills = [
  "Python",
  "C/C++",
  "Java",
  "TypeScript",
  "SQL",
  "Swift",
  "Go",
  "Rust",
  "React",
  "Next.js",
  "Node.js",
  "Spring Boot",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Git",
  "PyTorch",
  "MATLAB",
  "Linux",
  "Embedded Systems",
  "STM32",
  "CI/CD",
]

const experience = [
  {
    title: "Research Assistant – AI",
    company: "Politecnico di Torino – Prof. Paolo Montuschi",
    period: "2026 – Present",
    description:
      "Designing and implementing ML models to predict student academic performance. Building scalable data pipelines for educational datasets. Deploying AI-based class support systems within university infrastructure.",
  },
  {
    title: "Front-end Developer Intern",
    company: "Parma Calcio 1913",
    period: "Sep 2025 – Feb 2026",
    description:
      "Built and deployed 20+ production full-stack features used by 50+ staff, reducing operational workflow time by 50%. Integrated AWS S3, CDN delivery, and real-time data pipelines; achieved Lighthouse performance scores above 95.",
  },
  {
    title: "Full-Stack & Embedded Developer",
    company: "PoliTo Rocket Team",
    period: "Feb 2025 – Feb 2026",
    description:
      "Developed internal web platforms for 150+ members, automating 1,000+ daily operations. Implemented STM32 flight firmware in C/C++ under real-time constraints; built drivers, watchdog systems, and performed SWD debugging.",
  },
  {
    title: "Database Developer",
    company: "Team DigiTwin – PoliTo",
    location: "Turin, Piedmont, Italy",
    period: "Feb 2025 – Jul 2025",
    description:
      "Designed and optimized PostgreSQL systems ingesting 50,000+ sensor readings/day; improved query performance by 40%. Implemented automated data pipelines processing 2GB+ of telemetry data weekly.",
  },
]

const education = [
  {
    degree: "M.Sc. in Computer Science – AI Specialisation",
    institution: "KU Leuven",
    period: "2026 – 2028",
    note: "Programme Scholarship (70% Tuition Waiver)",
  },
  {
    degree: "B.Sc. in Computer Engineering",
    institution: "Politecnico di Torino",
    period: "2023 – 2026",
    gpa: "27/30",
    note: "Full Merit Scholarship",
  },
]

const project = {
  title: "Evaluating the Pedagogical and Cognitive Impacts of Large Language Models on Engineering Education",
  institution: "Politecnico di Torino",
  description:
    "This research paper, conducted in collaboration with IEEE Fellow Prof. Paolo Montuschi at Politecnico di Torino, investigates the pedagogical potential and cognitive impact of AI-driven teaching systems, particularly Large Language Models (LLMs) and AI agents, within the context of university-level engineering education. Co-delivered a lecture to showcase findings and discuss.",
}

export function Resume() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="resume" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="Resume"
            subtitle="An overview of my background and qualifications"
            centered
          />
        </motion.div>

        {/* LinkedIn Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 flex flex-col items-center justify-center gap-2"
        >
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://www.linkedin.com/in/ege-kaya/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn Profile
            </a>
          </Button>
        </motion.div>

        <div className="mt-12 lg:mt-16 max-w-5xl mx-auto space-y-8">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {summary}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className={`${
                      index !== experience.length - 1
                        ? "pb-6 border-b border-border"
                        : ""
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{exp.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {exp.company}
                          {exp.location && ` • ${exp.location}`}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`${
                      index !== education.length - 1
                        ? "pb-6 border-b border-border"
                        : ""
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {edu.gpa && <Badge variant="secondary">GPA: {edu.gpa}</Badge>}
                      <Badge variant="outline">{edu.note}</Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Project/Research */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Research Project
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {project.institution}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
