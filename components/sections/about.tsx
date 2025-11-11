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
  { label: "Organizations", value: "3+" },
  { label: "Languages", value: "3" },
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
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a Computer Engineering student at{" "}
                <span className="text-foreground font-semibold">
                  Politecnico di Torino
                </span>
                , driven by a passion for creating innovative solutions at the
                intersection of technology and design.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                My journey spans from embedded systems development to full-stack
                web applications, with a particular focus on front-end
                technologies and AI-assisted development. I thrive in
                collaborative environments and enjoy contributing to student
                organizations that push technological boundaries.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Beyond code, I'm fascinated by the connections between
                disciplines—from physics to art, biology to language learning.
                This multidisciplinary approach shapes how I think about
                problems and build solutions.
              </p>
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
                    <p className="text-sm text-muted-foreground mt-1">
                      Multilingual communicator
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline">Turkish (Native)</Badge>
                      <Badge variant="outline">English (Fluent)</Badge>
                      <Badge variant="outline">Italian (Proficient)</Badge>
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
                          Pursuing Master's programs in Computer Science
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
