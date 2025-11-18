import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Rocket, Sparkles, Image as ImageIcon, Accessibility, BarChart3 } from "lucide-react"
import { ContentArticle } from "@/components/content-article"
import { PostHeader } from "@/components/post-header"

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
  const readingTime = "14 min read"
  return (
    <main className="section-padding">
      <div className="container-custom max-w-4xl">
        <Link href="/#projects">
          <Button variant="ghost" size="sm" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
        <ContentArticle>
          <PostHeader
            title="Case Study: egekaya.dev Portfolio Website"
            badges={["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "r3f"]}
            readingTime={readingTime}
          />
          <p className="lead">
            A performance‑focused, accessible portfolio with a playful twist — Three.js background, Konami retro mode, and writing‑first typography.
          </p>

          {/* Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 not-prose">
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
            <h2>Project Goals</h2>
            <div>
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
            <h2>Architecture & Key Decisions</h2>
            <div>
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
            <h2>Performance & Accessibility</h2>
            <div>
              <h3>Initial Challenges</h3>
              <p>
                The first Lighthouse audit revealed significant performance issues despite using Next.js. Mobile performance scored only 58/100 with a 5.7s LCP - far from production-ready.
              </p>

              <h3>Optimization Journey: 58 → 100/100</h3>

              <h4>1. Sitemap Crisis (SEO Fix)</h4>
              <p>
                The sitemap was using hash fragments (<code>/#about</code>, <code>/#tech-stack</code>) which search engines ignore. Fixed by removing hash entries and only including actual pages.
              </p>

              <h4>2. Image Optimization (Biggest Impact)</h4>
              <ul>
                <li>Converted 1.3MB PNG profile image to 81KB WebP (94% reduction)</li>
                <li>Maintained imperceptible visual quality at 90% compression</li>
                <li>Improved LCP by ~2 seconds</li>
              </ul>

              <h4>3. Deferred Three.js Loading (Bundle Reduction)</h4>
              <ul>
                <li>Three.js bundle (865KB) was blocking initial render for 292ms</li>
                <li>Implemented smart deferral: CSS gradients show immediately, Three.js loads after 100ms</li>
                <li>Reduced initial bundle from 865KB to ~250KB (71% reduction)</li>
              </ul>

              <h4>4. Code Splitting Easter Eggs</h4>
              <ul>
                <li>Moved retro mode CSS (136 lines) to dynamically loaded file</li>
                <li>Loads only when Konami code is activated</li>
                <li>Reduced initial CSS by 35%</li>
              </ul>

              <h4>5. Framer Motion Optimization</h4>
              <ul>
                <li>Deferred animation initialization using <code>initial: false</code> pattern</li>
                <li>Content appears immediately, animations enable on next tick</li>
                <li>Reduced element render delay from 3,270ms to 1,300ms (60% improvement)</li>
              </ul>

              <h4>6. Accessibility Improvements</h4>
              <ul>
                <li>Added descriptive <code>aria-label</code> to case study links</li>
                <li>Fixed semantic HTML structure for screen readers</li>
                <li>Achieved 100/100 accessibility score</li>
              </ul>

              <h4>7. Security Headers</h4>
              <ul>
                <li>Added HSTS with <code>includeSubDomains</code> and <code>preload</code></li>
                <li>Implemented X-Frame-Options, X-Content-Type-Options</li>
                <li>Configured Referrer-Policy and Permissions-Policy</li>
              </ul>

              <h3>Final Results</h3>
              <p><strong>Mobile Performance:</strong></p>
              <ul>
                <li>Performance: 58 → <strong>87/100</strong> (+29 points)</li>
                <li>FCP: 2.7s → <strong>1.0s</strong> (63% faster)</li>
                <li>LCP: 5.7s → <strong>2.4s</strong> (58% faster)</li>
                <li>TBT: 470ms → <strong>400ms</strong> (15% faster)</li>
                <li>Speed Index: 5.7s → <strong>2.9s</strong> (49% faster)</li>
              </ul>

              <p><strong>Desktop Performance: Perfect 100/100</strong></p>
              <ul>
                <li>FCP: 0.3s | LCP: 0.5s | TBT: 50ms | CLS: 0.001</li>
              </ul>

              <p><strong>All Other Metrics: 100/100</strong></p>
              <ul>
                <li>Accessibility: 100/100</li>
                <li>Best Practices: 100/100</li>
                <li>SEO: 100/100</li>
              </ul>

              <h3>Technical Implementation</h3>
              <ul>
                <li>Optimized images with <code>next/image</code> and WebP format</li>
                <li>Dynamic imports for heavy libraries (Three.js, retro CSS)</li>
                <li>Smart animation deferral with Framer Motion</li>
                <li>Semantic landmarks and correct heading order</li>
                <li>WCAG AA compliance for focus states and color contrast</li>
                <li>Comprehensive security headers in Next.js config</li>
              </ul>

              <p>
                <em>Read the full technical breakdown in the <a href="/blog/optimizing-nextjs-performance">detailed blog post</a>.</em>
              </p>
            </div>
          </section>

          {/* What I Built */}
          <section>
            <h2>What I Built</h2>
            <div>
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
            <h2>Lessons & Trade‑offs</h2>
            <div>
              <ul>
                <li><strong>Small UX fixes matter</strong>: Anchor navigation and mobile spacing improved perceived quality a lot.</li>
                <li><strong>Keep effects optional</strong>: Three.js and Konami add personality without hurting performance.</li>
                <li><strong>Content over frameworks</strong>: Typography and link consistency improved readability more than new tech.</li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="border-t pt-8 not-prose">
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
        </ContentArticle>
      </div>
    </main>
  )
}
