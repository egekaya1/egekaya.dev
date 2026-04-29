"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "@/components/ui/section-heading"
import { CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { FileText, Presentation, Microscope } from "lucide-react"
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
  visible: { transition: { staggerChildren: 0.09 } },
}

const research = [
  {
    type: "Evaluation",
    title: "Gravitational Lens Finder: ML4SCI / DeepLense",
    role: "Google Summer of Code 2026 Applicant",
    description:
      "Completed evaluation tests for Google Summer of Code 2026 under ML4SCI / DeepLense. Multi-class substructure classification achieved AUC 0.9919, surpassing the Varma et al. reported baseline on the same dataset. Lens finding under 100:1 class imbalance: AUC 0.9877, recovering 189 of 195 lenses.",
    icon: Microscope,
    tags: ["PyTorch", "ResNet-18", "Computer Vision", "Astrophysics", "Class Imbalance"],
  },
  {
    type: "Report",
    title: "Evaluating the Pedagogical and Cognitive Impacts of LLMs on Engineering Education",
    role: "Co-author",
    description:
      "Conducted in collaboration with IEEE Fellow Prof. Paolo Montuschi at Politecnico di Torino. Investigated the pedagogical potential and cognitive impact of LLMs and AI agents on university-level engineering education. Analyzed student outcomes and teaching methodologies.",
    icon: FileText,
    tags: ["Artificial Intelligence", "Education Technology", "Research"],
  },
  {
    type: "Lecture",
    title: "Architecture and Memory: A Deep Dive aided by Artificial Intelligence",
    role: "Co-presenter",
    description:
      "Delivered a technical presentation on computer architecture and memory systems, using AI tools to generate visual demonstrations and reinforce explanation clarity. Focused on connecting lecture theory to practical system behavior.",
    icon: Presentation,
    tags: ["Computer Architecture", "Memory Systems", "AI-Assisted Teaching"],
  },
  {
    type: "Paper",
    title: "AI-Based Anomaly Detection in Network Security",
    role: "Co-author",
    description:
      "Survey paper for the Cybersecurity course at Politecnico di Torino. Covered AI-based approaches to network intrusion detection as alternatives to signature-based tools such as Snort and Suricata: Isolation Forest, One-Class SVM, autoencoders (including Kitsune), LSTM networks, CNNs, and clustering methods. Analysed deployment contexts across enterprise security, military networks, and critical infrastructure, and proposed a hybrid detection architecture combining signature-based and anomaly-based detection with continuous retraining.",
    icon: FileText,
    tags: ["Network Security", "Anomaly Detection", "Machine Learning", "Deep Learning", "Intrusion Detection", "Cybersecurity"],
  },
]

export function Research() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section id="research" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <SectionHeading
            label="Research"
            title="Research & Contributions"
            subtitle="Academic work, evaluations, and technical presentations"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="mt-16 lg:mt-20 grid md:grid-cols-2 gap-px border border-border rounded-sm overflow-hidden bg-border"
        >
          {research.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className={cn(
                "bg-card",
                index === research.length - 1 && research.length % 2 !== 0 && "md:col-span-2"
              )}
            >
              <CardHeader className="pt-6 pb-3">
                <div className="flex items-start gap-3">
                  <item.icon className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
                  <div className="space-y-2">
                    <p className="label-mono">{item.type} · {item.role}</p>
                    <CardTitle className="text-base font-medium leading-snug">
                      {item.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 pt-0 pb-6">
                <CardDescription className="text-sm leading-relaxed">
                  {item.description}
                </CardDescription>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-sm bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mt-10 max-w-2xl"
        >
          <p className="text-sm text-muted-foreground leading-relaxed">
            Open to research collaborations in computer science, AI, and adjacent areas. Feel free to reach out if you have
            something specific in mind.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
