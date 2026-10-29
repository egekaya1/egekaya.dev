import Image from "next/image"
import { Section } from "@/components/section"
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
  { src: parmaPic, alt: "The historic library in Parma" },
]

const trivia = [
  { emoji: "🎸", label: "Music", text: "Learning guitar on a Yamaha Pacifica through a Boss Katana Mini." },
  { emoji: "☕", label: "Caffeine", text: "Iced coffee with milk, almost exclusively." },
  { emoji: "🏃‍♂️", label: "Activity", text: "Working out and running around Vancouver." },
  { emoji: "🌍", label: "Languages", text: "Turkish, Italian, English, and slowly, French." },
]

export function Personal() {
  return (
    <Section id="personal" title="Outside the lab">
      <div className="relative rounded-2xl border border-border/50 bg-secondary/30 p-6 md:p-8">
        <div className="pointer-events-none absolute -top-8 -right-4 h-20 w-20 -rotate-12 opacity-90">
          <Image src={catSticker} placeholder="blur" alt="" fill sizes="80px" className="object-contain drop-shadow-lg" />
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-muted-foreground font-light">
          {trivia.map((item) => (
            <li key={item.label}>
              <span aria-hidden>{item.emoji}</span>{" "}
              <strong className="font-medium text-foreground">{item.label}:</strong> {item.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 columns-2 md:columns-3 gap-4">
        {photos.map((photo) => (
          <figure key={photo.alt} className="break-inside-avoid mb-4 group">
            <div className="overflow-hidden rounded-lg border border-border/30 bg-secondary/30">
              <Image
                src={photo.src}
                alt={photo.alt}
                placeholder="blur"
                className="w-full h-auto object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 50vw, 240px"
              />
            </div>
            <figcaption className="pt-1.5 px-0.5 text-sm font-display italic text-muted-foreground">{photo.alt}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
