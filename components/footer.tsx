"use client"

import * as React from "react"
import Link from "next/link"
import { Github, Linkedin, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import Image from "next/image"
import vinylSticker from "@/public/sticker_vinyl.webp"


export function Footer() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // Fix hydration mismatch for theme toggle
  useEffect(() => {
    setMounted(true)
  }, [])

  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border" role="contentinfo">
      <div className="container-custom">
        <div className="py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="label-mono">© {currentYear} Ege Kaya</p>
            <p className="label-mono opacity-70">Built with Next.js</p>
          </div>

          {/* Now Playing Widget - Spotify Link */}
          <a href="https://open.spotify.com/album/31qVWUdRrlb8thMvts0yYL" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-secondary/40 px-4 py-2 rounded-full border border-border/40 relative group transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="absolute -top-6 -right-6 w-12 h-12 opacity-90 transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 group-hover:-translate-y-2">
              <div className="relative w-full h-full">
                <Image src={vinylSticker}
                placeholder="blur" alt="Vinyl sticker" fill sizes="48px" className="object-contain filter drop-shadow-md" />
              </div>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-xs font-mono text-muted-foreground">
              <span className="font-semibold text-foreground group-hover:underline">Now Playing:</span> Tame Impala - The Slow Rush
            </p>
          </a>

          <nav aria-label="Social media links" className="flex items-center gap-4">
            
            <Link
              href="https://www.linkedin.com/in/ege-kaya/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href="https://github.com/egekaya1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
