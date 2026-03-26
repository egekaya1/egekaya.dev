import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const NAV_OFFSET = 80

export function scrollToSection(selector: string, offset = NAV_OFFSET) {
  const el = document.querySelector(selector)
  if (!el) return
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - offset,
    behavior: "smooth",
  })
}
