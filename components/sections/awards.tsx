"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "@/components/ui/section-heading"
import { CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Trophy, GraduationCap, Sparkles, Server } from "lucide-react"
import { cn } from "@/lib/utils"

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
  visible: { transition: { staggerChildren: 0.07 } },
}

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
    title: "KU Leuven Programme Scholarship",
    organization: "KU Leuven",
    year: "2026",
    description:
      "Awarded the Programme Scholarship with a 70% tuition waiver for the M.Sc. in Computer Science (Artificial Intelligence). Granted to only 10 students across the programme, recognizing academic excellence and research potential.",
    icon: GraduationCap,
    category: "Academic Honor",
    highlight: "70% Tuition Waiver",
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
      "Competed in Reply's European-wide Student Clash focused on Agentic AI, with 700+ students from 8 universities across Europe. The challenge was to design and build AI agent systems that address real business problems.",
    icon: Sparkles,
    category: "Hackathon",
  },
  {
    title: "Google Cloud Datacenter Hackathon 2025",
    organization: "Google Cloud × Intesa Sanpaolo × TIM",
    year: "2025",
    description:
      "Selected for exclusive hands-on datacenter hackathon hosted by Google Cloud in Turin. Worked directly with production-grade hardware including servers, managed switches, fiber optics, and Linux systems. Competed in team-based challenges simulating real-world datacenter operations.",
    icon: Server,
    category: "Hackathon",
  },
]

export function Awards() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section id="awards" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <SectionHeading
            label="Recognition"
            title="Awards & Achievements"
            subtitle="Competitions, scholarships, and awards"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="mt-16 lg:mt-20 grid md:grid-cols-2 gap-px border border-border rounded-sm overflow-hidden bg-border"
        >
          {recognitions.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className={cn(
                "bg-card",
                index === recognitions.length - 1 && recognitions.length % 2 !== 0 && "md:col-span-2"
              )}
            >
              <CardHeader className="pt-6 pb-3">
                <div className="flex items-start gap-3">
                  <item.icon className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
                  <div className="flex-1 space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="label-mono">{item.category}</p>
                      <p className="label-mono opacity-50">{item.year}</p>
                      {item.highlight && (
                        <p className="label-mono text-foreground">{item.highlight}</p>
                      )}
                    </div>
                    <CardTitle className="text-base font-medium leading-snug">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-xs font-medium">
                      {item.organization}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0 pb-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-3 text-xs text-muted-foreground hover:text-foreground transition-colors underline-animate"
                  >
                    View announcement →
                  </a>
                )}
              </CardContent>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
