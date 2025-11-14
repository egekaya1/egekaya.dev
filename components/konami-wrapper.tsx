"use client"

import { ReactNode, useState, useCallback } from "react"
import { useKonamiCode } from "@/hooks/use-konami-code"

export function KonamiWrapper({ children }: { children: ReactNode }) {
  const [retroMode, setRetroMode] = useState(false)

  const activateRetroMode = useCallback(() => {
    console.log("🔥 activateRetroMode called!")
    setRetroMode((prev) => {
      const newMode = !prev
      console.log("Retro mode:", prev, "->", newMode)
      
      if (newMode) {
        document.documentElement.classList.add("retro-mode")
        // Force style application with inline styles as backup
        document.body.style.cssText = `
          background: #000000 !important;
          color: #00ff00 !important;
          font-family: "Courier New", monospace !important;
        `
        console.log("✅ Retro mode ENABLED")
        
        // Play retro beep sound using Web Audio API
        const playSound = async () => {
          try {
            // Prefer standard AudioContext, fall back to webkitAudioContext with a typed cast to avoid `any`
            const AudioCtor = typeof AudioContext !== "undefined"
              ? AudioContext
              : (globalThis as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
            if (!AudioCtor) throw new Error("Web Audio API is not supported in this browser")
            const audioContext = new AudioCtor()
            
            // Resume context if suspended (required for autoplay policy)
            if (audioContext.state === 'suspended') {
              await audioContext.resume()
            }
            
            const oscillator = audioContext.createOscillator()
            const gainNode = audioContext.createGain()
            
            oscillator.connect(gainNode)
            gainNode.connect(audioContext.destination)
            
            oscillator.frequency.value = 800 // Frequency in Hz
            oscillator.type = 'square' // Retro square wave
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)
            
            oscillator.start(audioContext.currentTime)
            oscillator.stop(audioContext.currentTime + 0.2)
            
            console.log("🔊 Audio played")
          } catch (e) {
            console.log("❌ Audio error:", e)
          }
        }
        
        playSound()
      } else {
        document.documentElement.classList.remove("retro-mode")
        // Remove inline styles
        document.body.style.cssText = ""
        console.log("❌ Retro mode DISABLED")
      }
      return newMode
    })
  }, [])

  useKonamiCode(activateRetroMode)

  return (
    <>
      {children}
      {retroMode && (
        <div
          className="fixed bottom-4 right-4 z-50 p-4 bg-black border-2 border-green-500 text-green-500 font-mono text-sm shadow-lg"
          style={{ textShadow: "0 0 5px #00ff00" }}
        >
          <div className="flex items-center gap-2">
            <span className="animate-pulse">●</span>
            <span>RETRO MODE ACTIVATED</span>
          </div>
          <button
            onClick={activateRetroMode}
            className="mt-2 text-xs underline hover:text-amber-500"
          >
            [PRESS KONAMI CODE TO EXIT]
          </button>
        </div>
      )}
    </>
  )
}
