"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Command } from "cmdk"
import { useTheme } from "next-themes"
import {
  User,
  Layers,
  Briefcase,
  FolderGit2,
  FlaskConical,
  Trophy,
  Mail,
  BookOpen,
  Github,
  Linkedin,
  Download,
  Moon,
  Sun,
  Search,
} from "lucide-react"
import { scrollToSection } from "@/lib/utils"

interface CommandItem {
  label: string
  icon: React.ReactNode
  onSelect: () => void
  keywords?: string
}

export function CommandPalette() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [])

  const navigate = (section: string) => {
    setOpen(false)
    if (window.location.pathname !== "/") {
      router.push("/" + section)
    } else {
      scrollToSection(section)
    }
  }

  const navItems: CommandItem[] = [
    { label: "About", icon: <User className="h-4 w-4" />, onSelect: () => navigate("#about"), keywords: "about me education" },
    { label: "Tech Stack", icon: <Layers className="h-4 w-4" />, onSelect: () => navigate("#tech-stack"), keywords: "skills technologies languages" },
    { label: "Experience", icon: <Briefcase className="h-4 w-4" />, onSelect: () => navigate("#experience"), keywords: "work jobs career" },
    { label: "Projects", icon: <FolderGit2 className="h-4 w-4" />, onSelect: () => navigate("#projects"), keywords: "portfolio code github" },
    { label: "Research", icon: <FlaskConical className="h-4 w-4" />, onSelect: () => navigate("#research"), keywords: "papers publications ml" },
    { label: "Achievements", icon: <Trophy className="h-4 w-4" />, onSelect: () => navigate("#awards"), keywords: "awards scholarships hackathon" },
    { label: "Contact", icon: <Mail className="h-4 w-4" />, onSelect: () => navigate("#contact"), keywords: "email message hire" },
    { label: "Blog", icon: <BookOpen className="h-4 w-4" />, onSelect: () => { setOpen(false); router.push("/blog") }, keywords: "articles case studies writing posts" },
  ]

  const actionItems: CommandItem[] = [
    {
      label: "Download Resume",
      icon: <Download className="h-4 w-4" />,
      onSelect: () => { setOpen(false); window.open("/resume.pdf", "_blank") },
      keywords: "cv pdf resume download",
    },
    {
      label: "Toggle Theme",
      icon: theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />,
      onSelect: () => { setOpen(false); setTheme(theme === "dark" ? "light" : "dark") },
      keywords: "dark light mode theme",
    },
    {
      label: "GitHub",
      icon: <Github className="h-4 w-4" />,
      onSelect: () => { setOpen(false); window.open("https://github.com/egekaya1", "_blank") },
      keywords: "github code repositories",
    },
    {
      label: "LinkedIn",
      icon: <Linkedin className="h-4 w-4" />,
      onSelect: () => { setOpen(false); window.open("https://www.linkedin.com/in/ege-kaya/", "_blank") },
      keywords: "linkedin profile network",
    },
  ]

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]"
      onClick={() => setOpen(false)}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />

      {/* Palette */}
      <div
        className="relative w-full max-w-lg mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Command
          className="rounded-xl border border-border bg-popover shadow-2xl overflow-hidden"
          loop
        >
          <div className="flex items-center gap-2 px-4 border-b border-border">
            <Search className="h-4 w-4 text-muted-foreground shrink-0" />
            <Command.Input
              placeholder="Type a command or search…"
              className="flex-1 py-4 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              autoFocus
            />
            <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded border border-border text-[10px] text-muted-foreground font-mono">
              Esc
            </kbd>
          </div>

          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="py-8 text-center text-sm text-muted-foreground">
              No results found.
            </Command.Empty>

            <Command.Group
              heading="Navigate"
              className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground"
            >
              {navItems.map((item) => (
                <Command.Item
                  key={item.label}
                  keywords={item.keywords ? item.keywords.split(" ") : undefined}
                  onSelect={item.onSelect}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer text-foreground/80 hover:text-foreground aria-selected:bg-secondary aria-selected:text-foreground transition-colors"
                >
                  <span className="text-muted-foreground">{item.icon}</span>
                  {item.label}
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Separator className="my-1.5 h-px bg-border" />

            <Command.Group
              heading="Actions"
              className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground"
            >
              {actionItems.map((item) => (
                <Command.Item
                  key={item.label}
                  keywords={item.keywords ? item.keywords.split(" ") : undefined}
                  onSelect={item.onSelect}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer text-foreground/80 hover:text-foreground aria-selected:bg-secondary aria-selected:text-foreground transition-colors"
                >
                  <span className="text-muted-foreground">{item.icon}</span>
                  {item.label}
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>

          <div className="flex items-center gap-3 px-4 py-2.5 border-t border-border text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded border border-border font-mono">↑↓</kbd> navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded border border-border font-mono">↵</kbd> select
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded border border-border font-mono">Esc</kbd> close
            </span>
          </div>
        </Command>
      </div>
    </div>
  )
}
