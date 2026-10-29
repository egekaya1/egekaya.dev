"use client"

import * as React from "react"
import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const sections = [
  { href: "#research", label: "Research" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
]

export function Navbar() {
  // false during SSR, true on the client — avoids a theme-icon hydration mismatch
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )
  const { setTheme, resolvedTheme } = useTheme()

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark")

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/40">
      <div className="container-custom max-w-6xl">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="font-display text-2xl font-medium tracking-tight hover:opacity-70 transition-opacity duration-200"
          >
            Ege Kaya
          </Link>

          <div className="flex items-center gap-5">
            <ul className="hidden md:flex items-center gap-5">
              {sections.map((section) => (
                <li key={section.href}>
                  <a
                    href={section.href}
                    className="underline-animate text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-3 py-1 text-[13px] font-medium text-foreground hover:border-primary hover:text-primary transition-colors duration-200"
            >
              CV
            </a>

            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
