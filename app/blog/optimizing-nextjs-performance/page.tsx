import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Next.js Performance: 60 → 95+ Lighthouse (Practical Guide) | Ege Kaya",
  description:
    "Practical steps to reach 95+ Lighthouse in Next.js: images, code splitting, fonts, metadata, and non-blocking analytics.",
  openGraph: {
    title: "Next.js Performance: 60 → 95+ Lighthouse (Practical Guide)",
    description:
      "Real-world Next.js performance guide: image optimization, dynamic imports, font loading, metadata, and async analytics.",
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
              <Badge>Next.js</Badge>
              <Badge>Performance</Badge>
              <Badge>Web Vitals</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Next.js Performance: 60 → 95+ Lighthouse (Practical Guide)
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime="2024-11-10">November 10, 2024</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
              </div>
            </div>
          </div>

          <hr />

          {/* Content */}
          <p className="lead">
            When I rebuilt my portfolio website, I was frustrated to see a Lighthouse score of only 60. 
            After implementing strategic optimizations, I achieved a consistent 95+ score across all metrics. 
            Here&apos;s exactly what worked.
          </p>

          <h2>The Starting Point</h2>
          <p>
            My initial Next.js application suffered from common performance pitfalls:
          </p>
          <ul>
            <li>Unoptimized images loading at full resolution</li>
            <li>Large JavaScript bundles blocking initial render</li>
            <li>Third-party scripts impacting load times</li>
            <li>Missing resource hints and preloading</li>
          </ul>

          <h2>1. Image Optimization Strategy</h2>
          <p>
            Images were the biggest culprit. Next.js Image component is powerful, but requires proper configuration:
          </p>
          
          <pre><code>{`// Before: Regular img tag
<img src="/profile.png" alt="Profile" />

// After: Optimized Next.js Image
<Image
  src="/profile.png"
  alt="Profile"
  width={256}
  height={256}
  priority // Critical for above-the-fold images
  sizes="(max-width: 640px) 192px, 256px"
  className="object-cover"
/>`}</code></pre>

          <p><strong>Key improvements:</strong></p>
          <ul>
            <li>Use <code>priority</code> for hero images to preload them</li>
            <li>Define responsive <code>sizes</code> to serve appropriate resolutions</li>
            <li>Convert images to WebP/AVIF automatically with Next.js</li>
            <li>Lazy load below-the-fold images by default</li>
          </ul>

          <p><strong>Impact:</strong> Reduced Largest Contentful Paint (LCP) from 4.2s to 1.1s</p>

          <h2>2. Code Splitting with Dynamic Imports</h2>
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

          <p><strong>Impact:</strong> Initial bundle size reduced by 35%, Time to Interactive improved by 1.2s</p>

          <h2>3. Font Optimization</h2>
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

          <p><strong>Impact:</strong> Eliminated Cumulative Layout Shift (CLS) from font loading</p>

          <h2>4. Metadata and SEO Optimization</h2>
          <p>
            Proper metadata improves both SEO and perceived performance:
          </p>

          <pre><code>{`export const metadata: Metadata = {
  metadataBase: new URL("https://egekaya.dev"),
  title: "Ege Kaya | Software Engineer Portfolio",
  description: "...",
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
}`}</code></pre>

          <h2>5. Analytics Without Performance Cost</h2>
          <p>
            Vercel Analytics loads asynchronously and doesn&apos;t block rendering:
          </p>

          <pre><code>{`import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics /> {/* Loads after main content */}
      </body>
    </html>
  )
}`}</code></pre>

          <h2>Results</h2>
          <div className="not-prose bg-secondary/20 p-6 rounded-lg my-6">
            <h3 className="text-lg font-semibold mb-4">Lighthouse Score Improvements</h3>
            <ul className="space-y-2">
              <li>🎯 Performance: 60 → 97</li>
              <li>♿ Accessibility: 88 → 100</li>
              <li>✅ Best Practices: 92 → 100</li>
              <li>🔍 SEO: 75 → 100</li>
            </ul>
          </div>

          <h2>Key Takeaways</h2>
          <ol>
            <li><strong>Prioritize above-the-fold content</strong> - Use priority loading for critical resources</li>
            <li><strong>Lazy load aggressively</strong> - Only load what users need when they need it</li>
            <li><strong>Measure real metrics</strong> - Focus on Core Web Vitals (LCP, FID, CLS)</li>
            <li><strong>Test on real devices</strong> - Performance varies significantly on mobile vs desktop</li>
            <li><strong>Use Next.js built-ins</strong> - Image, Font, and Script components handle optimization automatically</li>
          </ol>

          <h2>Additional Resources</h2>
          <ul>
            <li><a href="https://nextjs.org/docs/pages/building-your-application/optimizing" target="_blank" rel="noopener noreferrer">Next.js Performance Optimization Guide</a></li>
            <li><a href="https://web.dev/vitals/" target="_blank" rel="noopener noreferrer">Web Vitals Documentation</a></li>
            <li><a href="https://developer.chrome.com/docs/lighthouse/" target="_blank" rel="noopener noreferrer">Lighthouse Documentation</a></li>
          </ul>

          <div className="not-prose mt-12 pt-8 border-t">
            <p className="text-muted-foreground">
              Have questions about Next.js performance optimization? Feel free to{" "}
              <Link
                href="/#contact"
                className="underline text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                reach out
              </Link>
              .
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}
