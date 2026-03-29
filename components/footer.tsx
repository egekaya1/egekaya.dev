import * as React from "react"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border" role="contentinfo">
      <div className="container-custom">
        <div className="py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="label-mono">© {currentYear} Ege Kaya</p>
            <p className="label-mono opacity-50">Built with Next.js</p>
          </div>

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
