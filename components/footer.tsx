import * as React from "react"
import Link from "next/link"
import { Github, Linkedin, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-secondary/20" role="contentinfo">
      <div className="container-custom">
        <div className="py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground text-center md:text-left">
              <p>
                © {currentYear} Ege Kaya. All rights reserved.
              </p>
              <p className="flex items-center justify-center md:justify-start gap-1 mt-1">
                Built with{" "}
                <Heart className="h-3 w-3 text-red-500 fill-red-500 inline" aria-label="love" />{" "}
                using Next.js 16
              </p>
            </div>

            {/* Social Links */}
            <nav aria-label="Social media links">
              <ul className="flex items-center gap-4">
                <li>
                  <Link
                    href="https://www.linkedin.com/in/ege-kaya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                    aria-label="LinkedIn Profile - Opens in new tab"
                  >
                    <Linkedin className="h-5 w-5" aria-hidden="true" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/egekaya1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                    aria-label="GitHub Profile - Opens in new tab"
                  >
                    <Github className="h-5 w-5" aria-hidden="true" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-border/40 text-center">
            <p className="text-xs text-muted-foreground">
              Computer Engineering Student at Politecnico di Torino •{" "}
              Front End Developer at Parma Calcio 1913
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
