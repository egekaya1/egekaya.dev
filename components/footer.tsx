import * as React from "react"
import Link from "next/link"
import { Github, Linkedin, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-secondary/20">
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
                <Heart className="h-3 w-3 text-red-500 fill-red-500 inline" />{" "}
                using Next.js
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Link
                href="https://www.linkedin.com/in/ege-kaya/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </Link>

              <Link
                href="https://github.com/egekaya1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-border/40 text-center">
            <p className="text-xs text-muted-foreground">
              Computer Engineering Student at Politecnico di Torino •{" "}
              Front End Developer Intern at Parma Calcio 1913
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
