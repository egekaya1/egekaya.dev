"use client"

import * as React from "react"
import Link from "next/link"
import { Moon, Sun,  } from "lucide-react"
import { useTheme } from "next-themes"

export function Navbar() {
  const [mounted, setMounted] = React.useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark")

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent py-6">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-2xl font-medium tracking-tight hover:opacity-70 transition-opacity duration-200"
          >
            EK.
          </Link>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Resume Download */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-semibold transition-all duration-300 text-muted-foreground hover:text-foreground border-b border-transparent hover:border-foreground/50 pb-0.5 hover:-translate-y-[1px] active:scale-95"
            >
              Resume
            </a>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 text-muted-foreground hover:text-foreground transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-[1px] hover:scale-110 active:scale-95"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
