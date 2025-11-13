"use client"

import { useEffect, useRef } from "react"

const KONAMI_CODE = [
  "arrowup",
  "arrowup",
  "arrowdown",
  "arrowdown",
  "arrowleft",
  "arrowright",
  "arrowleft",
  "arrowright",
  "b",
  "a",
]

export function useKonamiCode(callback: () => void) {
  const keysRef = useRef<string[]>([])
  const lastKeyTimeRef = useRef<number>(0)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ignore modifier keys and prevent repeat events
      const ignoredKeys = ['meta', 'alt', 'control', 'shift', 'capslock', 'tab', 'escape']
      const key = event.key.toLowerCase()
      
      if (ignoredKeys.includes(key) || event.repeat) {
        return
      }
      
      const now = Date.now()
      // Reset if more than 2 seconds between keypresses
      if (now - lastKeyTimeRef.current > 2000) {
        keysRef.current = []
      }
      lastKeyTimeRef.current = now
      
      // Add new key
      keysRef.current = [...keysRef.current, key].slice(-10)
      
      console.log("🎹 Key:", key, "| Sequence:", keysRef.current.join(" "))
      
      // Check if matches
      const matches = KONAMI_CODE.every((codeKey, index) => codeKey === keysRef.current[index])
      
      if (matches && keysRef.current.length === KONAMI_CODE.length) {
        console.log("🎮 KONAMI CODE ACTIVATED!")
        callback()
        keysRef.current = []
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [callback])
}
