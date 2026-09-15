import Link from 'next/link'
import Image from 'next/image'
import catSticker from "@/public/sticker_cat.webp"


export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 relative overflow-hidden">
      <div className="max-w-md w-full text-center space-y-6 relative z-10">
        
        <div className="flex justify-center mb-[-20px] relative z-20">
          {/* Wrapper for larger hover radius */}
          <div className="group/sticker p-8 cursor-pointer">
            <div className="relative w-32 h-32 sticker -rotate-6 transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/sticker:scale-110 group-hover/sticker:-translate-y-2 group-hover/sticker:rotate-[-2deg]">
              <Image src={catSticker}
                placeholder="blur" alt="Confused cat sticker" fill sizes="128px" priority className="object-contain filter drop-shadow-md" />
            </div>
          </div>
        </div>

        <h1 className="font-display text-6xl text-foreground">404</h1>
        <p className="text-muted-foreground font-light leading-relaxed">
          This page doesn't exist. It might have been moved during the redesign.
        </p>
        <div className="pt-4">
          <Link 
            href="/"
            className="text-sm uppercase tracking-widest font-mono text-muted-foreground hover:text-foreground transition-colors border-b border-muted-foreground/30 hover:border-foreground pb-1"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}
