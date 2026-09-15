"use client"

import * as React from "react"
import Image from "next/image"
import profilePic from "@/public/hero-profile.webp"
import pineSticker from "@/public/sticker_pine.webp"


export function Hero() {
  return (
    <section className="pt-20 pb-16">
      <div className="container-custom max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text (No em dashes) */}
        <div className="space-y-8 order-2 md:order-1">
          <h1 className="font-display font-medium leading-tight text-5xl md:text-7xl text-foreground">
            Hi, I'm Ege.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            I write code, mostly focusing on low-level systems and machine learning. I recently moved to Vancouver to start my M.Sc. in Computer Science at UBC, researching personalized explainable AI.
          </p>
        </div>

        {/* Right: Rectangular Photo */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
          
          {/* Pine Sticker */}
          <div className="absolute -bottom-12 -right-12 p-8 group cursor-pointer z-50">
            <div className="relative w-28 h-28 opacity-90 rotate-6 transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 group-hover:-translate-y-2">
              <Image src={pineSticker}
              placeholder="blur" alt="Pine sticker" fill sizes="112px" priority className="object-contain filter drop-shadow-lg" />
            </div>
          </div>
          <div className="relative w-full max-w-[400px] aspect-[4/5] overflow-hidden rounded-xl bg-secondary/50 shadow-sm border border-border/40 group">
            <Image
              src={profilePic}
              placeholder="blur"
              alt="Ege Kaya"
              fill
              className="object-cover object-[center_30%] rounded-xl transition-transform duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]"
              priority
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
