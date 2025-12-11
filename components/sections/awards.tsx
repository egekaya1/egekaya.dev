"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, GraduationCap, Users, Sparkles, Server } from "lucide-react"

const recognitions = [
  {
    title: "3rd Place – GitKon Game Jam 2025",
    organization: "GitKraken",
    year: "2025",
    description:
      "Awarded 3rd place at GitKon Game Jam for GitSimulator, a production-grade Git simulation engine. Recognized for innovative approach to Git visualization, educational impact, and focus on preventing costly mistakes in production environments.",
    icon: Trophy,
    link: "https://www.linkedin.com/embed/feed/update/urn:li:share:7404631806588751873",
    category: "Competition Winner",
    highlight: "3rd Place",
  },
  {
    title: "Full Merit Scholarship",
    organization: "Politecnico di Torino",
    year: "2023–2026",
    description:
      "Awarded full-ride merit scholarship (90% GPA) for outstanding academic excellence in Computer Engineering. Covers complete tuition and living expenses at one of Europe's top technical universities for engineering.",
    icon: GraduationCap,
    category: "Academic Honor",
  },
  {
    title: "Reply Student Clash 2025 – Agentic AI Challenge",
    organization: "Reply",
    year: "2025",
    description:
      "Competed in Reply's European-wide Student Clash focused on Agentic AI, joined by 700+ students from 8 top universities across Europe. Designed and scaled innovative AI Agent projects that transform business operations and empower society through autonomous, intelligent systems.",
    icon: Sparkles,
    category: "Hackathon",
    highlight: "700+ Participants",
  },
  {
    title: "Google Cloud Datacenter Hackathon 2025",
    organization: "Google Cloud × Intesa Sanpaolo × TIM",
    year: "2025",
    description:
      "Selected for exclusive hands-on datacenter hackathon hosted by Google Cloud in Turin. Worked directly with production-grade hardware including servers, managed switches, fiber optics, and Linux systems. Competed in team-based challenges simulating real-world datacenter operations, supported by Google's datacenter engineers from Turin and Milan facilities.",
    icon: Server,
    category: "Hackathon",
  },
  {
    title: "200+ Users Served Across Production Systems",
    organization: "Parma Calcio 1913 & PoliTo Rocket Team",
    year: "2024–Present",
    description:
      "Built and deployed production systems serving 50+ staff members at Parma Calcio and 150+ team members at PoliTo Rocket Team. Reduced operational workflow time by 50% and administrative overhead by 95% through full-stack automation and real-time data processing.",
    icon: Users,
    category: "Professional Impact",
  },
]

export function Awards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="awards" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="Recognition & Impact"
            subtitle="Awards, achievements, and measurable contributions"
            centered
          />
        </motion.div>

        <div className="mt-12 lg:mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {recognitions.map((recognition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <Card className="h-full hover-lift border-2 relative overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500" />

                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-amber-500/10 to-orange-500/10">
                      <recognition.icon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="outline" className="bg-amber-500/10 border-amber-500/30">
                          {recognition.category}
                        </Badge>
                        <Badge variant="secondary">{recognition.year}</Badge>
                        {recognition.highlight && (
                          <Badge variant="default" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold">
                            {recognition.highlight}
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl leading-tight">
                        {recognition.title}
                      </CardTitle>
                      <CardDescription className="text-base font-medium">
                        {recognition.organization}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {recognition.description}
                  </p>

                  {recognition.link && (
                    <a
                      href={recognition.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-primary hover:underline"
                    >
                      View announcement →
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
