"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Presentation } from "lucide-react"

const research = [
  {
    type: "Report",
    title: "Eligibility of Artificial Intelligence in University-Level Lecturing",
    role: "Co-author",
    description:
      "Investigated the potential and limitations of AI-assisted teaching in higher education. Analyzed pedagogical implications, technological feasibility, and student outcomes when integrating AI tools into university lectures.",
    icon: FileText,
    tags: ["Artificial Intelligence", "Education Technology", "Research"],
  },
  {
    type: "Lecture",
    title: "Architecture and Memory: A Deep Dive aided by Artificial Intelligence",
    role: "Co-presenter",
    description:
      "Delivered an in-depth technical presentation exploring computer architecture and memory systems, leveraging AI tools to enhance explanation clarity and visual demonstrations. Focused on bridging theoretical concepts with practical applications.",
    icon: Presentation,
    tags: ["Computer Architecture", "Memory Systems", "AI-Assisted Teaching"],
  },
]

export function Research() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="research" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="Research & Contributions"
            subtitle="Looking out for research opportunities actively"
            centered
          />
        </motion.div>

        <div className="mt-12 lg:mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {research.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <Card className="h-full hover-lift border-2">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="outline">{item.type}</Badge>
                        <Badge variant="secondary">{item.role}</Badge>
                      </div>
                      <CardTitle className="text-xl leading-tight">
                        {item.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 max-w-3xl mx-auto text-center"
        >
          <p className="text-sm text-muted-foreground">
            Actively exploring research opportunities in the fields of Computer Science, AI, Architecture and more. Open to
            collaborations and academic partnerships.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
