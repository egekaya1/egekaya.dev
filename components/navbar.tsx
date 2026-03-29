"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Moon, Sun, Menu, X, Download } from "lucide-react"
import { useTheme } from "next-themes"
import { cn, scrollToSection } from "@/lib/utils"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Stack", href: "#tech-stack" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Awards", href: "#awards" },
  { name: "Contact", href: "#contact" },
  { name: "Blog", href: "/blog", external: true },
]

export function Navbar() {
  const [mounted, setMounted] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState<string>("about")
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()

  const updateHash = React.useCallback((sectionId: string, mode: "push" | "replace") => {
    if (typeof window === "undefined") {
      return
    }

    const nextHash = `#${sectionId}`
    if (window.location.hash === nextHash) {
      return
    }

    const nextUrl = `${window.location.pathname}${window.location.search}${nextHash}`
    if (mode === "push") {
      window.history.pushState(null, "", nextUrl)
      return
    }

    window.history.replaceState(null, "", nextUrl)
  }, [])

  React.useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    if (pathname !== "/") {
      return
    }

    const sectionIds = navItems
      .filter((item) => item.href.startsWith("#"))
      .map((item) => item.href.slice(1))

    const syncActiveSectionFromHash = () => {
      const hashId = decodeURIComponent(window.location.hash.replace("#", "")).trim()
      if (!hashId) {
        return false
      }

      if (!sectionIds.includes(hashId)) {
        return false
      }

      const hashSection = document.getElementById(hashId)
      if (!hashSection) {
        return false
      }

      setActiveSection((prev) => (prev === hashId ? prev : hashId))
      return true
    }

    const updateActiveSection = () => {
      const NAVBAR_OFFSET = 120
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => section !== null)

      if (sections.length === 0) {
        return
      }

      const currentPosition = window.scrollY + NAVBAR_OFFSET
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8

      let nextActive = sections[0].id

      if (nearBottom) {
        nextActive = sections[sections.length - 1].id
      } else {
        for (const section of sections) {
          if (section.offsetTop <= currentPosition) {
            nextActive = section.id
          }
        }
      }

      setActiveSection((prev) => (prev === nextActive ? prev : nextActive))
      updateHash(nextActive, "replace")
    }

    const handleHashChange = () => {
      if (!syncActiveSectionFromHash()) {
        updateActiveSection()
      }
    }

    handleHashChange()
    requestAnimationFrame(updateActiveSection)
    setTimeout(updateActiveSection, 250)

    window.addEventListener("scroll", updateActiveSection, { passive: true })
    window.addEventListener("resize", updateActiveSection)
    window.addEventListener("load", updateActiveSection)
    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
      window.removeEventListener("load", updateActiveSection)
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [pathname, updateHash])

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    external?: boolean
  ) => {
    setMobileMenuOpen(false)
    if (external) return
    if (pathname !== "/") {
      router.push("/" + href)
      return
    }
    e.preventDefault()
    const targetId = href.slice(1)
    setActiveSection(targetId)
    updateHash(targetId, "push")
    scrollToSection(href)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border/60"
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl font-light tracking-tight hover:opacity-70 transition-opacity duration-200"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            Ege Kaya
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-0.5">
            {navItems.map((item) => (
              (() => {
                const isHashLink = item.href.startsWith("#")
                const isActive =
                  (pathname === "/" && isHashLink && activeSection === item.href.slice(1)) ||
                  (item.external && pathname.startsWith("/blog"))

                return (
              <Link
                key={item.name}
                href={item.external ? item.href : (pathname !== "/" ? "/" + item.href : item.href)}
                onClick={(e) => handleNavClick(e, item.href, item.external)}
                className={cn(
                  "px-3 py-2 text-xs font-medium tracking-wide transition-colors duration-200 uppercase",
                  isActive
                    ? "text-foreground underline underline-offset-6 decoration-1"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
                )
              })()
            ))}

            {/* CV Download */}
            <a
              href="/resume.pdf"
              download="Ege-Kaya-Resume.pdf"
              className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium tracking-wide uppercase border border-border rounded-sm text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors duration-200"
            >
              <Download className="h-3 w-3" />
              CV
            </a>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="ml-1 p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            )}
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-1 md:hidden">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border/60">
          <div className="container-custom py-4 space-y-1">
            {navItems.map((item) => (
              (() => {
                const isHashLink = item.href.startsWith("#")
                const isActive =
                  (pathname === "/" && isHashLink && activeSection === item.href.slice(1)) ||
                  (item.external && pathname.startsWith("/blog"))

                return (
              <Link
                key={item.name}
                href={item.external ? item.href : (pathname !== "/" ? "/" + item.href : item.href)}
                onClick={(e) => handleNavClick(e, item.href, item.external)}
                className={cn(
                  "block px-3 py-2.5 text-sm transition-colors duration-200",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
                )
              })()
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
