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

const summary = `Dynamic and results-driven Computer Engineering student with strong experience in software development, research, and engineering. Co-authored a university-level research report on the use of AI in lecturing and contributed to projects like database systems, web apps, and automation. Passionate about innovation, technology, and design. Motivated by impact and excellence, I aim to build scalable solutions that blend engineering precision with creative problem-solving.`

const skills = [
  "Object oriented programming",
  "Operating systems",
  "Computer networks",
  "Algorithms and data structures",
  "Databases",
  "Computer architecture",
  "Linear algebra",
  "Computer Science",
  "Git",
  "React",
  "TypeScript",
  "Next.js",
  "PostgreSQL",
  "AWS",
]

const experience = [
  {
    title: "Front End Developer Intern",
    company: "Parma Calcio 1913",
    period: "Sep 2025 - Present",
    description:
      "Contributing to the development and maintenance of web apps using React, TypeScript, and modern front-end frameworks. Responsible for delivering full feature lifecycles, integrating back-end services, and ensuring high-quality, scalable code.",
  },
  {
    title: "Full-stack Developer",
    company: "PoliTo Rocket Team",
    period: "Mar 2025 - Present",
    description:
      "I contribute to the design and development of internal tools and applications supporting the team. My work spans backend APIs, frontend interfaces, and scripts that improve team communication, data access, and operations.",
  },
  {
    title: "Database Developer",
    company: "DigiTwin Monitoring - PoliTo",
    location: "Turin, Piedmont, Italy",
    period: "Mar 2025 - Jul 2025",
    description:
      "Designing and developing a relational database from scratch using PostgreSQL, ensuring efficient data storage and retrieval for a structural and environmental monitoring system. Implemented programs for data processing, optimizing performance and scalability. Collaborating with the team using GitHub for version control and development workflows. The system enables real-time analysis and predictive maintenance, enhancing infrastructure management and operational efficiency.",
  },
  {
    title: "Embedded Software Engineer",
    company: "PoliTo Rocket Team",
    period: "Mar 2025 - May 2025",
    description:
      "Gained foundational exposure to embedded systems programming and hardware interfacing as part of the team's projects. Developed understanding of low-level programming and embedded environments.",
  },
]

const education = {
  degree: "Bachelor's degree in Computer Engineering",
  institution: "Politecnico di Torino",
  period: "Jan 2023 - Present",
  gpa: "27/30",
  note: "Full Merit Scholarship for my studies",
}

const involvement = {
  role: "Staff",
  organization: "Italian Tech Week",
  description:
    "From guiding international speakers and guests to supporting the smooth organization of Italy's largest tech conference, it was an incredible experience to be part of the team that made this event possible. I had the chance to witness inspiring talks, while also connecting with amazing innovators, entrepreneurs, and fellow volunteers who share a passion for technology and the future. Being behind the scenes showed me how much teamwork, attention to detail, and adaptability go into making such a large-scale event a success. I'm grateful for the opportunity to contribute, learn, and grow from this experience.",
}

const project = {
  title: "Evaluating the Pedagogical and Cognitive Impacts of Large Language Models on Engineering Education",
  institution: "Politecnico di Torino",
  description:
    "This research paper, conducted under the supervision of the Computer Architecture faculty at Politecnico di Torino, investigates the pedagogical potential and cognitive impact of AI-driven teaching systems, particularly Large Language Models (LLMs) and AI agents, within the context of university level engineering education. Co-delivered a lecture to showcase findings and discuss.",
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
            subtitle="A comprehensive overview of my background and qualifications"
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
          <p className="text-sm text-muted-foreground">Torino, Italy</p>
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
              <CardContent>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">
                      {education.degree}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {education.institution}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {education.period}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="secondary">GPA: {education.gpa}</Badge>
                  <Badge variant="outline">{education.note}</Badge>
                </div>
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

          {/* Involvement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Involvement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <h3 className="font-semibold text-lg">{involvement.role}</h3>
                  <p className="text-sm text-muted-foreground">
                    {involvement.organization}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {involvement.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
