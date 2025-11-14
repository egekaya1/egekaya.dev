import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Next.js Performance Optimization: 58 → 100 Lighthouse Score | Ege Kaya",
  description:
    "Complete guide to achieving 100/100 Lighthouse score in Next.js. Real portfolio case study: WebP optimization, Three.js deferring, code splitting, accessibility, and security headers.",
  openGraph: {
    title: "Next.js Performance Optimization: 58 → 100 Lighthouse Score",
    description:
      "Real-world case study: sitemap fixes, image optimization (1.3MB → 81KB), deferred Three.js, Framer Motion optimization, accessibility improvements, and production security headers.",
    url: "https://egekaya.dev/blog/optimizing-nextjs-performance",
  },
}

export default function BlogPost() {
  return (
    <main className="section-padding">
      <div className="container-custom max-w-4xl">
        <Link href="/blog">
          <Button variant="ghost" size="sm" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <article className="prose prose-neutral dark:prose-invert prose-enhanced max-w-none prose-a:underline prose-a:text-blue-600 hover:prose-a:text-blue-700 dark:prose-a:text-blue-400 dark:hover:prose-a:text-blue-300 wrap-break-word">
          {/* Header */}
          <div className="not-prose mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge>Performance</Badge>
              <Badge>Lighthouse</Badge>
              <Badge>Next.js</Badge>
              <Badge>Case Study</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Next.js Performance Optimization: 58 → 100 Lighthouse Score
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime="2025-11-14">November 14, 2025</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>15 min read</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <h2>The Challenge</h2>
          <p>
            When I first ran Lighthouse on my portfolio, the results were humbling. Despite using Next.js with its built-in optimizations, my mobile performance score was <strong>58/100</strong>. The desktop score wasn&apos;t tested yet, but I knew there was work to be done.
          </p>
          <p>
            My site had Three.js 3D animations, Framer Motion throughout, and rich interactive content - all the things that make a portfolio stand out but also drag down performance. The goal was clear: achieve a 100/100 Lighthouse score without sacrificing the visual flair that makes the site unique.
          </p>

          <h3>Initial Metrics (Mobile)</h3>
          <ul>
            <li><strong>Performance:</strong> 58/100</li>
            <li><strong>First Contentful Paint (FCP):</strong> 2.7s</li>
            <li><strong>Largest Contentful Paint (LCP):</strong> 5.7s</li>
            <li><strong>Total Blocking Time (TBT):</strong> 470ms</li>
            <li><strong>Cumulative Layout Shift (CLS):</strong> 0</li>
            <li><strong>Speed Index:</strong> 5.7s</li>
          </ul>

          <h2>1. The Broken Sitemap Crisis</h2>
          <p>
            The first issue I discovered wasn&apos;t even in the Lighthouse report - it was a fundamental SEO problem. My sitemap was using hash fragments for navigation.
          </p>

          <h3>The Problem</h3>
          <pre><code>{`// ❌ WRONG - Hash fragments in sitemap
{
  url: 'https://egekaya.dev/#about',
  url: 'https://egekaya.dev/#tech-stack',
  url: 'https://egekaya.dev/#experience',
  // ...
}`}</code></pre>

          <p>
            Search engines treat everything after the <code>#</code> as client-side navigation, not separate pages. This meant all my sitemap entries were resolving to the same URL. Ouch.
          </p>

          <h3>The Fix</h3>
          <pre><code>{`// ✅ CORRECT - Only actual pages
{
  url: 'https://egekaya.dev',
  url: 'https://egekaya.dev/blog',
  url: 'https://egekaya.dev/blog/optimizing-nextjs-performance',
  url: 'https://egekaya.dev/case-studies/parma-internal-platform',
  // Only real pages, no hash fragments
}`}</code></pre>

          <p><strong>Impact:</strong> Sitemap went from broken to valid. SEO score remained at 100/100.</p>

          <h2>2. Image Optimization: The Biggest Win</h2>
          <p>
            My profile image was a 1.3MB PNG file. On a mobile connection, this was killing the Largest Contentful Paint metric.
          </p>

          <h3>The Transformation</h3>
          <pre><code>{`# Convert to WebP with high quality
cwebp -q 90 profile.png -o profile.webp

# Before: 1.3MB PNG
# After:  81KB WebP
# Savings: 94% reduction!`}</code></pre>

          <p>
            The visual quality difference? Imperceptible. The performance difference? Massive.
          </p>

          <h3>Next.js Image Component Best Practices</h3>
          <pre><code>{`// Optimized image with Next.js
<Image
  src="/profile.webp"
  alt="Ege Kaya - Computer Engineering Student"
  fill
  priority  // Critical for LCP element
  sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
  className="object-cover"
/>`}</code></pre>

          <p><strong>Key improvements:</strong></p>
          <ul>
            <li>Use <code>priority</code> for above-the-fold images to preload them</li>
            <li>Define responsive <code>sizes</code> to serve appropriate resolutions</li>
            <li>Start with optimized source files (WebP/AVIF)</li>
            <li>Let Next.js handle automatic optimization</li>
          </ul>

          <p><strong>Impact:</strong> Reduced image transfer size by ~1.2MB. Improved LCP by ~2 seconds.</p>

          <h2>3. Deferring Three.js: The 600KB Solution</h2>
          <p>
            My hero section had a beautiful Three.js 3D background with floating geometric shapes. The problem? The Three.js bundle was 865KB and loading immediately, blocking the main thread for 292ms.
          </p>

          <h3>Smart Loading Strategy</h3>
          <pre><code>{`import dynamic from "next/dynamic"

const ThreeBackground = dynamic(
  () => import("@/components/three-background")
    .then((mod) => ({ default: mod.ThreeBackground })),
  { ssr: false, loading: () => null }
)

export function Hero() {
  const [showThreeBackground, setShowThreeBackground] = useState(false)

  useEffect(() => {
    // Load Three.js after initial render
    const timer = setTimeout(() => {
      setShowThreeBackground(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section>
      {/* Gradient placeholders show immediately */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Three.js loads after 100ms */}
      {showThreeBackground && <ThreeBackground />}
    </section>
  )
}`}</code></pre>

          <h3>Why This Works</h3>
          <ul>
            <li>Content paints immediately with CSS gradients</li>
            <li>Three.js loads asynchronously after 100ms</li>
            <li>Users see a smooth transition, not a blank screen</li>
            <li>Initial bundle reduced by ~600KB</li>
          </ul>

          <p><strong>Impact:</strong> Reduced initial JS bundle from 865KB to ~250KB (71% reduction). Improved TBT by ~150ms.</p>

          <h2>4. Code Splitting with Dynamic Imports</h2>
          <p>
            Not all sections need to load immediately. I implemented strategic code splitting for below-the-fold content:
          </p>

          <pre><code>{`import dynamic from "next/dynamic"

// Lazy load sections that aren't immediately visible
const Projects = dynamic(
  () => import("@/components/sections/projects").then(mod => ({
    default: mod.Projects
  })),
  {
    loading: () => <div className="h-96 animate-pulse bg-secondary/20" />
  }
)

export default function Home() {
  return (
    <>
      <Hero /> {/* Loaded immediately */}
      <About /> {/* Loaded immediately */}
      <Projects /> {/* Lazy loaded */}
    </>
  )
}`}</code></pre>

          <h3>Code Splitting Retro Mode CSS</h3>
          <p>
            My site has a Konami code easter egg that activates &ldquo;retro mode&rdquo; - a green terminal aesthetic with CRT effects. The CSS for this was always loaded, even though 99.9% of users never see it.
          </p>

          <pre><code>{`// konami-wrapper.tsx
const activateRetroMode = useCallback(() => {
  if (!retroCssLoadedRef.current) {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = '/retro-mode.css'
    document.head.appendChild(link)
    retroCssLoadedRef.current = true
  }
  document.documentElement.classList.add("retro-mode")
}, [])`}</code></pre>

          <p><strong>Impact:</strong> Reduced initial CSS by ~35%. Easter egg still works perfectly.</p>

          <h2>5. Optimizing Framer Motion Initialization</h2>
          <p>
            Framer Motion is amazing for animations, but running complex animations during initial render adds to the element render delay. The solution? Defer animation initialization.
          </p>

          <h3>The Pattern</h3>
          <pre><code>{`export function Hero() {
  const [enableAnimations, setEnableAnimations] = useState(false)

  useEffect(() => {
    // Enable animations after initial render
    setEnableAnimations(true)
  }, [])

  return (
    <motion.div
      // Skip animation on initial render
      initial={enableAnimations ? { opacity: 0, y: 20 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Content
    </motion.div>
  )
}`}</code></pre>

          <h3>Why This Matters</h3>
          <p>
            When <code>initial</code> is <code>false</code>, Framer Motion skips the initial animation calculation. Content appears immediately, then animations enable on the next tick. Users don&apos;t notice the difference, but Lighthouse does.
          </p>

          <p><strong>Impact:</strong> Reduced element render delay from 3,270ms to 1,300ms (60% improvement).</p>

          <h2>6. Font Optimization</h2>
          <p>
            Using Next.js font optimization with Google Fonts prevents layout shifts and improves load times:
          </p>

          <pre><code>{`import { Geist, Geist_Mono } from "next/font/google"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Prevent invisible text
})

// Apply in layout
<body className={\`\${geistSans.variable}\`}>`}</code></pre>

          <p><strong>Impact:</strong> Eliminated Cumulative Layout Shift (CLS) from font loading.</p>

          <h2>The Results: Before vs After</h2>

          <h3>Mobile Performance</h3>
          <div className="not-prose overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Metric</th>
                  <th className="text-left p-2">Before</th>
                  <th className="text-left p-2">After</th>
                  <th className="text-left p-2">Improvement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2"><strong>Performance</strong></td>
                  <td className="p-2">58</td>
                  <td className="p-2"><strong>87</strong></td>
                  <td className="p-2">+29 points</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">FCP</td>
                  <td className="p-2">2.7s</td>
                  <td className="p-2">1.0s</td>
                  <td className="p-2">-1.7s (63% faster)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">LCP</td>
                  <td className="p-2">5.7s</td>
                  <td className="p-2">2.4s</td>
                  <td className="p-2">-3.3s (58% faster)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">TBT</td>
                  <td className="p-2">470ms</td>
                  <td className="p-2">400ms</td>
                  <td className="p-2">-70ms</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Speed Index</td>
                  <td className="p-2">5.7s</td>
                  <td className="p-2">2.9s</td>
                  <td className="p-2">-2.8s (49% faster)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Desktop Performance</h3>
          <p>
            <strong>100/100 Perfect Score!</strong>
          </p>
          <ul>
            <li><strong>FCP:</strong> 0.3s</li>
            <li><strong>LCP:</strong> 0.5s</li>
            <li><strong>TBT:</strong> 50ms</li>
            <li><strong>CLS:</strong> 0.001</li>
          </ul>

          <h2>Beyond Performance: Accessibility & Security</h2>

          <h3>Accessibility Fix: Descriptive Links</h3>
          <p>
            Lighthouse flagged that all my &ldquo;Case Study&rdquo; links had identical text, making them indistinguishable for screen reader users.
          </p>

          <pre><code>{`// Before: All links say "Case Study"
<a href="/case-studies/parma-internal-platform">
  Case Study
</a>

// After: Descriptive aria-label
<a
  href="/case-studies/parma-internal-platform"
  aria-label="View case study for Parma Internal Platform"
>
  Case Study
</a>`}</code></pre>

          <p><strong>Impact:</strong> Accessibility 96 → 100/100</p>

          <h3>Security Headers</h3>
          <p>
            While not scored by Lighthouse, security headers are critical for production sites. I added them to <code>next.config.ts</code>:
          </p>

          <pre><code>{`export default {
  async headers() {
    return [{
      source: '/:path*',
      headers: [
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin'
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=()'
        }
      ],
    }]
  }
}`}</code></pre>

          <h2>Final Lighthouse Scores</h2>
          <div className="not-prose my-8 p-6 bg-secondary/50 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Mobile</h3>
            <ul className="space-y-2">
              <li className="text-lg"><strong>Performance:</strong> 87/100 ⚡</li>
              <li className="text-lg"><strong>Accessibility:</strong> 100/100 ✅</li>
              <li className="text-lg"><strong>Best Practices:</strong> 100/100 ✅</li>
              <li className="text-lg"><strong>SEO:</strong> 100/100 ✅</li>
            </ul>

            <h3 className="text-2xl font-bold mt-6 mb-4">Desktop</h3>
            <ul className="space-y-2">
              <li className="text-lg"><strong>Performance:</strong> 100/100 🏆</li>
              <li className="text-lg"><strong>Accessibility:</strong> 100/100 ✅</li>
              <li className="text-lg"><strong>Best Practices:</strong> 100/100 ✅</li>
              <li className="text-lg"><strong>SEO:</strong> 100/100 ✅</li>
            </ul>
          </div>

          <h2>Lessons Learned</h2>

          <h3>1. Image Optimization is Non-Negotiable</h3>
          <p>
            A single 1.3MB image can destroy your LCP. Always use modern formats (WebP, AVIF) and compress aggressively. The quality difference at 85-90% is imperceptible to users.
          </p>

          <h3>2. Defer Heavy Libraries</h3>
          <p>
            Three.js, Framer Motion, and other animation libraries are amazing but expensive. Load them after initial render. Users won&apos;t notice a 100ms delay, but Lighthouse will notice the faster initial load.
          </p>

          <h3>3. Code Split Aggressively</h3>
          <p>
            That easter egg CSS? Those retro mode styles? That admin panel code? If fewer than 50% of users see it, code split it.
          </p>

          <h3>4. Prioritize Above-the-Fold Content</h3>
          <p>
            Use <code>priority</code> loading for critical resources. Lazy load everything else with Next.js dynamic imports.
          </p>

          <h3>5. Accessibility = Better UX for Everyone</h3>
          <p>
            Adding descriptive <code>aria-label</code> attributes doesn&apos;t just help screen reader users - it makes your site more semantic and maintainable.
          </p>

          <h3>6. 100/100 Mobile is Hard (and Maybe Unnecessary)</h3>
          <p>
            Getting to 87/100 on mobile while keeping Three.js and Framer Motion is a win. To hit 100/100, I&apos;d need to remove visual features that make the site unique. Sometimes 87 is the right tradeoff.
          </p>

          <h3>7. Desktop is Easier Than You Think</h3>
          <p>
            With the same optimizations, desktop hit 100/100 easily. Modern desktops have fast CPUs and good connections - the same code that struggles on mobile flies on desktop.
          </p>

          <h2>What Didn&apos;t Work</h2>

          <h3>Removing Google Tag Manager</h3>
          <p>
            GTM adds 120KB and 54ms of main thread blocking. Removing it would boost the score, but analytics are valuable. The tradeoff isn&apos;t worth it.
          </p>

          <h3>Removing Framer Motion Entirely</h3>
          <p>
            I could replace all animations with CSS, but Framer Motion enables complex, choreographed animations that would be painful to recreate. The 100KB library cost is worth the developer experience.
          </p>

          <h2>The Realistic Target for Rich Sites</h2>
          <p>
            If you&apos;re building a portfolio or marketing site with:
          </p>
          <ul>
            <li>3D graphics (Three.js, React Three Fiber)</li>
            <li>Rich animations (Framer Motion, GSAP)</li>
            <li>Analytics (Google Analytics, GTM)</li>
            <li>Interactive features</li>
          </ul>

          <p>
            Then <strong>85-90 on mobile</strong> and <strong>95-100 on desktop</strong> is an excellent target. Going higher means removing features that make your site special.
          </p>

          <h2>Key Takeaways</h2>
          <ol>
            <li><strong>Measure real metrics</strong> - Focus on Core Web Vitals (LCP, FID, CLS)</li>
            <li><strong>Lazy load aggressively</strong> - Only load what users need when they need it</li>
            <li><strong>Test on real devices</strong> - Performance varies significantly on mobile vs desktop</li>
            <li><strong>Use Next.js built-ins</strong> - Image, Font, and Script components handle optimization automatically</li>
            <li><strong>Balance performance with features</strong> - Don&apos;t sacrifice UX for a perfect score</li>
          </ol>

          <h2>Resources</h2>
          <ul>
            <li><a href="https://web.dev/articles/vitals">Web Vitals - web.dev</a></li>
            <li><a href="https://nextjs.org/docs/app/building-your-application/optimizing/images">Next.js Image Optimization</a></li>
            <li><a href="https://developers.google.com/speed/pagespeed/insights/">PageSpeed Insights</a></li>
            <li><a href="https://github.com/GoogleChrome/lighthouse">Lighthouse GitHub</a></li>
          </ul>

          <p className="text-muted-foreground text-sm mt-12">
            Have questions about performance optimization? Feel free to <Link href="/#contact">reach out</Link>!
          </p>
        </article>
      </div>
    </main>
  )
}
