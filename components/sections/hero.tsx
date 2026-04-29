"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Download, MapPin, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { scrollToSection } from "@/lib/utils"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
  }),
}

export function Hero() {
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    setReady(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle grain texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      <div className="container-custom w-full pt-24 pb-20 md:pt-0 md:pb-0">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 md:items-center">

          {/* Left — text */}
          <div className="space-y-8 order-2 md:order-1">

            {/* Mono label */}
            <motion.div
              custom={0}
              initial="hidden"
              animate={ready ? "visible" : "hidden"}
              variants={fadeUp}
            >
              <span className="label-mono">Computer Engineer · Researcher</span>
            </motion.div>

            {/* Display name */}
            <motion.div
              custom={0.1}
              initial="hidden"
              animate={ready ? "visible" : "hidden"}
              variants={fadeUp}
              className="space-y-1"
            >
              <h1 className="font-display font-normal leading-[0.95] tracking-tight text-[clamp(3.5rem,8vw,7rem)]">
                Ege<br />Kaya
              </h1>
            </motion.div>

            {/* Location + availability */}
            <motion.div
              custom={0.2}
              initial="hidden"
              animate={ready ? "visible" : "hidden"}
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4"
            >
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                <span>Torino, Italy</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              custom={0.3}
              initial="hidden"
              animate={ready ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-base text-muted-foreground leading-relaxed max-w-md"
            >
              Computer Engineering graduate from Politecnico di Torino. Google Summer of Code 2026, contributing to the Swift Concurrency runtime, mentored by Apple engineers. Incoming M.Sc. at University of British Columbia (starting Sep 2026), supervised by Prof. Cristina Conati (ACM &amp; AAAI Fellow).
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={0.4}
              initial="hidden"
              animate={ready ? "visible" : "hidden"}
              variants={fadeUp}
              className="flex flex-wrap items-center gap-3"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="rounded-sm px-6"
              >
                View Projects
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-sm px-6"
              >
                <a href="/resume.pdf" download="Ege-Kaya-Resume.pdf" className="inline-flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </Button>

              <Button size="lg" variant="ghost" asChild className="rounded-sm px-3">
                <a
                  href="https://www.linkedin.com/in/ege-kaya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>

              <Button size="lg" variant="ghost" asChild className="rounded-sm px-3">
                <a
                  href="https://github.com/egekaya1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right — photo */}
          <motion.div
            custom={0.15}
            initial="hidden"
            animate={ready ? "visible" : "hidden"}
            variants={fadeUp}
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-md lg:h-112">
              {/* Offset border frame */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 border border-border rounded-sm" />
              <div className="relative w-full h-full overflow-hidden rounded-sm border border-border">
                <Image
                  src="/profile.webp"
                  alt="Ege Kaya"
                  fill
                  className="object-cover object-[center_30%]"
                  priority
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 384px, 448px"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.8 }}
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group flex flex-col items-center gap-2"
        aria-label="Scroll down"
      >
        <span className="label-mono text-[10px]">Scroll</span>
        <ArrowDown className="h-4 w-4 text-muted-foreground group-hover:translate-y-1 transition-transform duration-300" />
      </motion.button>
    </section>
  )
}
