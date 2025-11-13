"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Languages, Target, BookOpen } from "lucide-react"

const interests = [
  "Computer Science",
  "Artificial Intelligence",
  "Software Engineering",
  "Physics",
  "Biology",
  "Chemistry",
  "Mathematics",
  "Art",
  "Language Learning",
]

const stats = [
  { label: "GPA", value: "27/30" },
  { label: "Year", value: "3rd" },
  { label: "Languages", value: "3" },
  { label: "Organizations", value: "3+" },
  { label: "Projects", value: "5+" },
]

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="About Me"
            subtitle="Building the future through code and curiosity"
            centered
          />
        </motion.div>

        <div className="mt-12 lg:mt-16 grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Who I Am</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">→</span>
                    <span className="text-base leading-relaxed">
                      3rd-year Computer Engineering student at{" "}
                      <span className="text-foreground font-semibold">
                        Politecnico di Torino
                      </span>{" "}
                      with 27/30 GPA and Full Scholarship
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">→</span>
                    <span className="text-base leading-relaxed">
                      Front End Developer Intern at Parma Calcio 1913, building production-grade applications
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">→</span>
                    <span className="text-base leading-relaxed">
                      Full-stack developer with experience in React, Next.js, TypeScript, AWS, and Python
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold">What I Do</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span className="text-base leading-relaxed">
                      Build scalable web applications with modern frameworks (React, Next.js, TypeScript)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span className="text-base leading-relaxed">
                      Develop problem-solving software for real-time applications (C++, Python)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span className="text-base leading-relaxed">
                      Design and optimize database architectures (PostgreSQL, Supabase)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span className="text-base leading-relaxed">
                      Contribute to open-source and research projects exploring AI and CS
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Education Card */}
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">
                      Computer Engineering
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Politecnico di Torino
                    </p>
                    <div className="flex items-center gap-4 mt-3">
                      <Badge variant="secondary">GPA: 27/30</Badge>
                      <Badge variant="secondary">3rd Year</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Languages Card */}
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <Languages className="h-6 w-6 text-cyan-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">Languages</h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline">Turkish</Badge>
                      <Badge variant="outline">English</Badge>
                      <Badge variant="outline">Italian</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Stats & Interests */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="text-center hover-lift">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-gradient-accent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground mt-2">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Interests */}
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    <BookOpen className="h-6 w-6 text-purple-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-3">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {interests.map((interest) => (
                        <Badge key={interest} variant="secondary">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Goals */}
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-green-500/10">
                    <Target className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-3">Current Goals</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">→</span>
                        <span>
                          Pursuing Master&apos;s programs in Computer Science
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">→</span>
                        <span>Advancing Italian language proficiency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">→</span>
                        <span>
                          Contributing to open-source and research projects
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
