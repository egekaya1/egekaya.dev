"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { scrollToSection } from "@/lib/utils"

interface Testimonial {
  name: string
  role: string
  company: string
  avatar?: string
  content: string
  relationship: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _testimonials: Testimonial[] = [
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
      "Ege's automation on our Discord bot project eliminated repetitive ops work. The code was clean, resilient, and easy to maintain, and he documented the code and deployment clearly.",
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

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
}

export function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <SectionHeading
            label="Testimonials"
            title="What People Say"
            subtitle="Coming soon — pending approvals"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mt-16 max-w-xl"
        >
          <Card className="border">
            <CardContent className="pt-6 pb-6">
              <div className="flex items-start gap-4">
                <Quote className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I&apos;m collecting approvals from collaborators and mentors. Once ready, you&apos;ll find
                    verified testimonials here.
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">
                    In the meantime, feel free to{" "}
                    <a
                      href="#contact"
                      onClick={(e) => { e.preventDefault(); scrollToSection("#contact") }}
                      className="text-foreground underline underline-offset-2"
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
