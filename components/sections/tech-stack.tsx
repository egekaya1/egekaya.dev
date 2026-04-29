"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "@/components/ui/section-heading"

interface TechItem {
  name: string
  category: string
}

const techStack: TechItem[] = [
  // Languages
  { name: "Python", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "C", category: "Languages" },
  { name: "C++", category: "Languages" },
  { name: "Swift", category: "Languages" },
  { name: "Go", category: "Languages" },
  { name: "Rust", category: "Languages" },
  { name: "SQL", category: "Languages" },
  { name: "MATLAB", category: "Languages" },
  // Frameworks & Libraries
  { name: "React", category: "Frameworks & Libraries" },
  { name: "Next.js", category: "Frameworks & Libraries" },
  { name: "Tailwind CSS", category: "Frameworks & Libraries" },
  { name: "Node.js", category: "Frameworks & Libraries" },
  { name: "Spring Boot", category: "Frameworks & Libraries" },
  { name: "PyTorch", category: "Frameworks & Libraries" },
  { name: "scikit-learn", category: "Frameworks & Libraries" },
  { name: "TensorFlow", category: "Frameworks & Libraries" },
  { name: "HuggingFace", category: "Frameworks & Libraries" },
  { name: "HTML", category: "Frameworks & Libraries" },
  { name: "CSS", category: "Frameworks & Libraries" },
  // Infrastructure
  { name: "PostgreSQL", category: "Infrastructure" },
  { name: "AWS", category: "Infrastructure" },
  { name: "Docker", category: "Infrastructure" },
  { name: "Git", category: "Infrastructure" },
]

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
  visible: { transition: { staggerChildren: 0.04 } },
}

export function TechStack() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  const categoryOrder = ["Languages", "Frameworks & Libraries", "Infrastructure"]
  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    items: techStack.filter((t) => t.category === cat),
  }))

  return (
    <section id="tech-stack" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <SectionHeading
            label="Skills"
            title="Tech Stack"
            subtitle="Technologies I work with daily"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="mt-16 lg:mt-20 space-y-8"
        >
          {grouped.map(({ category, items }) => (
            <motion.div key={category} variants={fadeUp} className="grid grid-cols-[6rem_1fr] gap-6 items-start border-t border-border pt-6">
              <p className="label-mono pt-0.5">{category}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center rounded-sm border border-border px-3 py-1.5 text-sm text-foreground hover:bg-secondary transition-colors duration-200"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
