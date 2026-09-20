"use client"

import * as React from "react"
import Image from "next/image"
import illustrationPic from "@/public/illustration.webp"
import vancouverLakePic from "@/public/vancouver_lake.webp"
import tameImpalaPic from "@/public/tame_impala.webp"
import milanoPic from "@/public/milano.webp"
import northVanPic from "@/public/north_van.webp"
import fazilSayPic from "@/public/fazil_say.webp"
import portofinoPic from "@/public/portofino.webp"
import cernPic from "@/public/cern.webp"
import parmaPic from "@/public/parma.webp"
import catSticker from "@/public/sticker_cat.webp"


const photos = [
  { src: vancouverLakePic, alt: "A quiet lake up in North Vancouver" },
  { src: tameImpalaPic, alt: "Seeing Tame Impala live" },
  { src: milanoPic, alt: "Piazza del Duomo, Milano" },
  { src: northVanPic, alt: "Hiking the Pacific Northwest" },
  { src: fazilSayPic, alt: "Fazıl Say performing in Torino" },
  { src: portofinoPic, alt: "Coastline views in Portofino" },
  { src: cernPic, alt: "Visiting the CERN Antimatter Factory (when I was 17)" },
  { src: parmaPic, alt: "The historic library in Parma" }
]

export function About() {
  return (
    <section className="py-16">
      <div className="container-custom max-w-5xl mx-auto space-y-24">
        
        {/* Top: Intro & Illustration */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          
          <div className="md:col-span-3 space-y-6 text-lg text-muted-foreground font-light leading-relaxed order-2 md:order-1">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">A bit about me</h2>
            
            <p>
              Before moving to the Pacific Northwest, I lived in Italy. I studied Computer Engineering at Politecnico di Torino, did AI research for the university, built software for a professional football club, and even wrote some flight firmware for a rocket team.
            </p>
            
            <p>
              I usually work on a Mac. Lately, I've been spending my time building the global task registry for the Swift Concurrency runtime in C++ for Apple via Google Summer of Code. It's a lot of low-level systems work, but making opaque program stalls diagnosable is pretty rewarding.
            </p>

            <p className="pt-2">
              Want to chat? Shoot me an email at <a href="mailto:egekaya360@gmail.com" className="text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity">egekaya360@gmail.com</a>.
            </p>
          </div>

          <div className="md:col-span-2 flex justify-center order-1 md:order-2">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative w-full max-w-[360px] aspect-square rounded-2xl overflow-hidden shadow-sm border border-border/40 group">
                <Image
                  src={illustrationPic}
                  placeholder="blur"
                  alt="Cozy lo-fi aesthetic of Ege working"
                  fill
                  className="object-cover rounded-2xl transition-transform duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>

            </div>
          </div>
        </div>

        {/* Middle: Trivia */}
        <div className="bg-secondary/30 rounded-2xl p-8 md:p-10 border border-border/40 relative">
          
          {/* Cat Sticker */}
          <div className="absolute -top-10 -right-6 p-8 group cursor-pointer z-50">
            <div className="relative w-28 h-28 opacity-90 -rotate-12 transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 group-hover:-translate-y-2 group-hover:-rotate-3">
              <Image src={catSticker}
                  placeholder="blur" alt="Cat sticker" fill sizes="112px" className="object-contain filter drop-shadow-lg" />
            </div>
          </div>
          <h3 className="font-display text-2xl text-foreground mb-6 border-b border-border/50 pb-4">Beyond the Terminal</h3>
          <ul className="space-y-4 text-lg text-muted-foreground font-light">
            <li>🎸 <strong>Music:</strong> I'm learning to play guitar on my Yamaha Pacifica 012 II (Metallic Black) plugged into a Boss Katana Mini.</li>
            <li>☕ <strong>Caffeine:</strong> I drink iced coffee with milk almost exclusively. My go-to Nespresso Vertuo pods are Ice Leggero, Bianco Doppio, and Double Espresso Dolce.</li>
            <li>🏃‍♂️ <strong>Activity:</strong> I stay active by working out and running around Vancouver. </li>
            <li>🎮 <strong>Downtime:</strong> You can probably find me playing PS5.</li>
            <li>🌍 <strong>Languages:</strong> I speak Turkish, Italian, English, and I'm currently trying to learn French.</li>
          </ul>
        </div>

        {/* Bottom: Masonry Gallery */}
        <div>
          <h3 className="font-display text-3xl md:text-4xl text-foreground mb-8">Life & Places</h3>
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6">
            {photos.map((photo, i) => (
              <div key={i} className="break-inside-avoid relative group inline-block w-full mb-6">
                <div className="relative w-full overflow-hidden rounded-xl bg-secondary/30 shadow-sm border border-border/20">
                  {/* Using standard img to maintain original aspect ratios in masonry */}
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    placeholder="blur"
                    className="w-full h-auto object-cover rounded-xl transition-transform duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="pt-2 px-1">
                  <p className="text-sm font-display italic text-muted-foreground">{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
