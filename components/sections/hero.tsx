"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Download, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const ThreeBackground = dynamic(
  () => import("@/components/three-background").then((mod) => ({ default: mod.ThreeBackground })),
  { ssr: false, loading: () => null }
)

export function Hero() {
  const [showThreeBackground, setShowThreeBackground] = React.useState(false)
  const [enableAnimations, setEnableAnimations] = React.useState(false)

  React.useEffect(() => {
    // Enable animations after initial render to improve LCP
    setEnableAnimations(true)

    // Small delay for Three.js
    const timer = setTimeout(() => {
      setShowThreeBackground(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])
  const handleScrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const handleScrollDown = () => {
    const element = document.querySelector("#about")
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative min-h-screen flex justify-center overflow-hidden items-start pt-20 pb-24 md:items-center md:pt-0 md:pb-0">
      {/* CSS Gradient Preview - Instant appearance, 0 performance overhead */}
      <div
        className="absolute inset-0 -z-10 transition-opacity duration-500"
        style={{
          opacity: showThreeBackground ? 0 : 1,
          background: 'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
          animation: 'gradient-shift 8s ease-in-out infinite'
        }}
      />

      {/* 3D Background - deferred loading */}
      <div
        className="absolute inset-0 -z-10 transition-opacity duration-500"
        style={{ opacity: showThreeBackground ? 1 : 0 }}
      >
        {showThreeBackground && <ThreeBackground />}
      </div>

      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile Photo */}
          <motion.div
            initial={enableAnimations ? { opacity: 0, scale: 0.9 } : false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <Image
                src="/profile.webp"
                alt="Ege Kaya - Computer Engineering Student and Software Developer"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
              />
            </div>
            <div className="absolute -inset-1 rounded-full bg-linear-to-r from-primary/20 via-cyan-500/20 to-purple-500/20 blur-xl -z-10" />
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={enableAnimations ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50"
          >
            <span className="text-sm font-medium">Computer Engineer • Researcher • Builder</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={enableAnimations ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
              <span className="block">Ege Kaya</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl">
              Computer Engineering Student &{" "}
              <span className="text-gradient-accent font-semibold">
                Software Developer
              </span>
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={enableAnimations ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <MapPin className="h-4 w-4" />
            <span className="text-sm">Torino, Italy</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={enableAnimations ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            Currently building production-grade full-stack applications at Parma Calcio 1913.
            Experienced in React/Next.js, Python and problem solving.
            3rd-year at Politecnico di Torino with 27/30 GPA and full ride scholarship.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={enableAnimations ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
          >
            <Button
              size="lg"
              onClick={handleScrollToProjects}
              className="group w-full sm:w-auto"
            >
              View Projects
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto"
            >
              <a
                href="/resume.pdf"
                download="Ege-Kaya-Resume.pdf"
                className="inline-flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>

            <div className="flex items-center gap-3">
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/ege-kaya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <a
                  href="https://github.com/egekaya1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-4 w-4" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={enableAnimations ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        onClick={handleScrollDown}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group"
        aria-label="Scroll down"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-muted-foreground">Scroll</span>
          <ArrowDown className="h-5 w-5 text-muted-foreground group-hover:translate-y-1 transition-transform animate-bounce" />
        </div>
      </motion.button>
    </section>
  )
}
