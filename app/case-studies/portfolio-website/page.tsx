import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Rocket, Sparkles, Image as ImageIcon, Accessibility, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "Case Study: egekaya.dev — 95+ Lighthouse, App Router, Tailwind v4 | Ege Kaya",
  description:
    "A fast, accessible, and maintainable portfolio built with Next.js 16, React 19, TypeScript 5, and Tailwind CSS v4. Includes Three.js background, retro mode, and robust writing UX.",
  openGraph: {
    title: "Case Study: egekaya.dev — Next.js 16 + Tailwind v4",
    url: "https://egekaya.dev/case-studies/portfolio-website",
  },
}

export default function CaseStudy() {
  return (
    <main className="section-padding">
      <div className="container-custom max-w-5xl">
        <Link href="/#projects">
          <Button variant="ghost" size="sm" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <article className="space-y-12">
          {/* Hero */}
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge>Next.js 16</Badge>
              <Badge>React 19</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Tailwind CSS v4</Badge>
              <Badge>r3f</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Case Study: egekaya.dev Portfolio Website
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              A performance‑focused, accessible portfolio with a playful twist — Three.js background, Konami retro mode, and writing‑first typography.
            </p>
          </div>

          {/* Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Rocket className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">95+</div>
                    <div className="text-sm text-muted-foreground">Lighthouse Score</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500/10">
                    <Accessibility className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">AA</div>
                    <div className="text-sm text-muted-foreground">WCAG Compliance</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <BarChart3 className="h-5 w-5 text-cyan-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">&lt;1s</div>
                    <div className="text-sm text-muted-foreground">LCP (median)</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/10">
                    <ImageIcon className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">OG</div>
                    <div className="text-sm text-muted-foreground">Dynamic Images</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Goals */}
          <section>
            <h2 className="text-3xl font-bold mb-4">Project Goals</h2>
            <div className="prose prose-neutral dark:prose-invert prose-enhanced max-w-none">
              <ul>
                <li><strong>Fast by default</strong> with aggressive image optimization and minimal JS</li>
                <li><strong>Accessible</strong> navigation and content that reads well on mobile</li>
                <li><strong>Writing‑first</strong> blog and case studies with consistent typography</li>
                <li><strong>Delightful</strong> extras like a subtle Three.js background and a Konami retro mode</li>
              </ul>
            </div>
          </section>

          {/* Architecture & Decisions */}
          <section>
            <h2 className="text-3xl font-bold mb-4">Architecture & Key Decisions</h2>
            <div className="prose prose-neutral dark:prose-invert prose-enhanced max-w-none">
              <h3>Next.js App Router with React 19</h3>
              <p>
                The site uses Next.js 16 App Router for file‑system routes, streaming, and metadata per page. React 19 upgrades enable smaller bundle sizes and better concurrent rendering.
              </p>

              <h3>Tailwind CSS v4 + prose‑enhanced typography</h3>
              <p>
                Tailwind v4 powers a compact, token‑driven design system. I added a lightweight <code>prose‑enhanced</code> utility for consistent spacing, headings, and blue underlined links across long‑form content.
              </p>

              <h3>Three.js background via r3f</h3>
              <p>
                A GPU‑light background is rendered with <a href="https://github.com/pmndrs/react-three-fiber" target="_blank" rel="noopener noreferrer">@react-three/fiber</a> and <a href="https://github.com/pmndrs/drei" target="_blank" rel="noopener noreferrer">@react-three/drei</a>, deferred off the main content for zero CLS. It gracefully degrades on low‑end devices.
              </p>

              <h3>Konami retro mode</h3>
              <p>
                A small client hook listens for the Konami code and toggles a retro theme with a Web Audio API beep. Styles live in <code>globals.css</code> and don’t affect core performance.
              </p>

              <h3>Navigation across routes with anchors</h3>
              <p>
                The navbar is aware of current route vs. home and performs smooth in‑page scroll or cross‑route navigation to <code>#about</code>, <code>#projects</code>, etc., avoiding double scroll handlers.
              </p>

              <h3>OG images with next/og</h3>
              <p>
                Dynamic Open Graph images are generated via <code>next/og</code> with careful flex sizing to prevent rendering overflows.
              </p>

              <h3>Analytics</h3>
              <p>
                <a href="https://vercel.com/docs/analytics" target="_blank" rel="noopener noreferrer">Vercel Analytics</a> and <a href="https://vercel.com/docs/speed-insights" target="_blank" rel="noopener noreferrer">Speed Insights</a> provide privacy‑respecting telemetry. Google Analytics can be toggled with <code>@next/third-parties</code> if needed.
              </p>
            </div>
          </section>

          {/* Performance & A11y */}
          <section>
            <h2 className="text-3xl font-bold mb-4">Performance & Accessibility</h2>
            <div className="prose prose-neutral dark:prose-invert prose-enhanced max-w-none">
              <ul>
                <li>Optimized images with <code>next/image</code> and correct <code>sizes</code> attributes</li>
                <li>Script strategy tuned; non‑critical work deferred to client components</li>
                <li>Semantic landmarks and correct heading order</li>
                <li>Focus states and color contrast meeting WCAG AA</li>
                <li>Consistent link styling: blue and underlined globally</li>
              </ul>
            </div>
          </section>

          {/* What I Built */}
          <section>
            <h2 className="text-3xl font-bold mb-4">What I Built</h2>
            <div className="prose prose-neutral dark:prose-invert prose-enhanced max-w-none">
              <ul>
                <li>Home hero with responsive image sizing and mobile‑first spacing (no navbar overlap)</li>
                <li>Projects grid with case study first, code second</li>
                <li>Blog and case study pages using the same typographic system</li>
                <li>Testimonials placeholder flow with a compliant “coming soon” experience</li>
                <li>Konami retro mode and a subtle, performant Three.js background</li>
              </ul>
            </div>
          </section>

          {/* Lessons */}
          <section>
            <h2 className="text-3xl font-bold mb-4">Lessons & Trade‑offs</h2>
            <div className="prose prose-neutral dark:prose-invert prose-enhanced max-w-none">
              <ul>
                <li><strong>Small UX fixes matter</strong>: Anchor navigation and mobile spacing improved perceived quality a lot.</li>
                <li><strong>Keep effects optional</strong>: Three.js and Konami add personality without hurting performance.</li>
                <li><strong>Content over frameworks</strong>: Typography and link consistency improved readability more than new tech.</li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="border-t pt-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Want a fast, accessible site?</h3>
              <p className="text-muted-foreground mb-6">
                I build modern web experiences with measurable performance and polish.
              </p>
              <Button asChild>
                <Link href="/#contact">Let’s talk</Link>
              </Button>
            </div>
          </section>
        </article>
      </div>
    </main>
  )
}
