"use client"
import { useEffect } from 'react'
import Image from 'next/image'
import pineSticker from "@/public/sticker_pine.webp"


export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 relative overflow-hidden">
      <div className="max-w-md w-full text-center space-y-6 relative z-10">
        
        {/* Wrapper for larger hover radius */}
        <div className="absolute -top-16 -left-8 p-6 group/sticker cursor-pointer z-20">
          <div className="relative w-24 h-24 sticker rotate-12 opacity-90 transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/sticker:scale-110 group-hover/sticker:-translate-y-2 group-hover/sticker:rotate-12">
            <Image src={pineSticker}
              placeholder="blur" alt="Pine tree sticker" fill sizes="96px" priority className="object-contain filter drop-shadow-md" />
          </div>
        </div>

        <h2 className="font-display text-4xl text-foreground">Something went wrong.</h2>
        <p className="text-muted-foreground font-light leading-relaxed">
          An unexpected error occurred while loading this page.
        </p>
        <button 
          onClick={() => reset()} 
          className="text-sm uppercase tracking-widest font-mono text-muted-foreground hover:text-foreground transition-colors border-b border-muted-foreground/30 hover:border-foreground pb-1"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
