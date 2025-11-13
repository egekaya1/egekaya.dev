"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
// import Image from "next/image"

interface Testimonial {
  name: string
  role: string
  company: string
  avatar?: string
  content: string
  relationship: string
}

// Keeping data for future use; not rendered until approvals are collected
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const testimonials: Testimonial[] = [
  {
    name: "E. M.",
    role: "Department Head",
    company: "Parma Calcio 1913",
    relationship: "Supervisor",
    content:
      "Ege led a smooth rollout on CloudFront + S3 for our internal app. Latency dropped globally and fetches became predictable thanks to versioned assets and targeted invalidations. He communicated trade-offs clearly and shipped safely.",
  },
  {
    name: "S. C.",
    role: "Database Developer",
    company: "DigiTwin",
    relationship: "Colleague",
    content:
      "On the database optimization work, Ege focused on impact. Partitioning, better indexes, and materialized views brought query times down dramatically. He delivered changes incrementally with solid observability.",
  },
  {
    name: "Prof. G. B.",
    role: "Professor",
    company: "Politecnico di Torino",
    relationship: "Academic Advisor",
    content:
      "Ege combines strong fundamentals with practical engineering. His grasp of my class and his ability to apply theoretical concepts to real-world problems are truly impressive.",
  },
  {
    name: "A. T.",
    role: "Full-Stack Developer",
    company: "Polito Rocket Team",
    relationship: "Division Lead",
    content:
      "Ege’s automation on our Discord bot project eliminated repetitive ops work. The code was clean, resilient, and easy to maintain, and he documented the code and deployment clearly.",
  },
  {
    name: "Prof. A. K.",
    role: "Professor of Mathematics",
    company: "İzmir Institute of Technology (İYTE)",
    relationship: "Course Instructor",
    content:
      "Collaborated on Calculus III problem sets and mentoring sessions. Ege demonstrated a strong command of multivariable calculus, communicated concepts clearly to peers, and delivered accurate, well-structured solutions on time.",
  },
]

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  return (
    <section id="testimonials" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="Testimonials"
            subtitle="Coming soon — pending approvals"
            centered
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12"
        >
          <Card className="border-2">
            <CardContent className="pt-8 pb-8">
              <div className="flex items-start gap-4">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <Quote className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground">
                    I&apos;m collecting approvals from collaborators and mentors. Once ready, you&apos;ll find
                    verified testimonials here.
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">
                    In the meantime, feel free to {""}
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.querySelector("#contact")
                        if (element) {
                          const offset = 80
                          const elementPosition = element.getBoundingClientRect().top
                          const offsetPosition = elementPosition + window.pageYOffset - offset
                          window.scrollTo({ top: offsetPosition, behavior: "smooth" })
                        }
                      }}
                      className="underline text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      reach out
                    </a>
                    .
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
