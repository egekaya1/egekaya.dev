"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Moon, Sun, Menu, X, Download } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Research", href: "#research" },
  { name: "Blog", href: "/blog", external: true },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mounted, setMounted] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()

  React.useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    external?: boolean
  ) => {
    setMobileMenuOpen(false)

    // If it's an external link, let Next.js handle it
    if (external) {
      return
    }

    // If we're not on the homepage, navigate to homepage with hash
    if (pathname !== "/") {
      router.push("/" + href)
      return
    }

    // We're on homepage, do smooth scroll
    e.preventDefault()
    const element = document.querySelector(href)
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
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b border-border/40 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            Ege Kaya
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.external ? item.href : (pathname !== "/" ? "/" + item.href : item.href)}
                onClick={(e) => handleNavClick(e, item.href, item.external)}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors underline-animate"
              >
                {item.name}
              </Link>
            ))}

            {/* Resume Download Button */}
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="ml-1"
            >
              <a
                href="/resume.pdf"
                download="Ege-Kaya-Resume.pdf"
                className="inline-flex items-center gap-1.5"
              >
                <Download className="h-4 w-4" />
                <span>Resume</span>
              </a>
            </Button>

            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="ml-2"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            )}

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass border-t border-border/40">
          <div className="container-custom py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.external ? item.href : (pathname !== "/" ? "/" + item.href : item.href)}
                onClick={(e) => handleNavClick(e, item.href, item.external)}
                className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-secondary/50 rounded-md transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download="Ege-Kaya-Resume.pdf"
              className="flex items-center gap-2 px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-secondary/50 rounded-md transition-colors"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
