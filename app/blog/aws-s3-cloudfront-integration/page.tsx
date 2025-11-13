import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "CDN Optimization with AWS CloudFront + S3: A Real-World Case Study | Ege Kaya",
  description:
    "How I shipped a fast, secure, and low-cost static site on S3 + CloudFront: OAC, cache policies (max-age, s-maxage, stale-while-revalidate, stale-if-error), versioning, and concrete performance gains.",
  openGraph: {
    title: "CDN Optimization with AWS CloudFront + S3",
    description:
      "End-to-end CDN rollout with CloudFront + S3: cache policies, OAC, CI/CD, invalidation/versioning, and measurable results.",
    url: "https://egekaya.dev/blog/aws-lambda-typescript-best-practices",
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
              <Badge>AWS</Badge>
              <Badge>CloudFront</Badge>
              <Badge>S3</Badge>
              <Badge>CDN</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              CDN Optimization with AWS CloudFront + S3: A Real-World Case Study
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime="2024-11-05">November 5, 2024</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>10 min read</span>
              </div>
            </div>
          </div>
          <hr />

          {/* Content */}
          <p className="lead">
            This post walks through a production rollout of static hosting on Amazon S3 fronted by
            CloudFront. I cover the architecture, caching strategy, image delivery, CI/CD, security
            with Origin Access Control (OAC), and the exact results we measured after launch.
          </p>

          <h2>Context</h2>
          <p>
            At Parma Calcio, we needed a fast, globally distributed way to serve our internal staff
            portal — especially documents and training videos — with predictable costs, strong cache
            behavior, and a simple upload + deployment story. Prior to the rollout, content was served
            from a single region with minimal caching, resulting in high latency for international
            users and inconsistent cache behavior between pages and assets.
          </p>

          <h2>Architecture: S3 + CloudFront + OAC</h2>
          <ul>
            <li>
              <strong>S3 (origin):</strong> Private bucket for static assets (HTML, CSS, JS, images).
            </li>
            <li>
              <strong>CloudFront (CDN):</strong> Distributes content globally via edge locations.
            </li>
            <li>
              <strong>OAC:</strong> CloudFront Origin Access Control to securely access the bucket.
            </li>
          </ul>
          <p>
            Key principle: the S3 bucket has no public access. CloudFront accesses S3 using OAC,
            and end users only hit the CloudFront distribution. This improves security and enables
            fine-grained cache policies per path.
          </p>

          <h2>Cache Policy and Headers</h2>
          <p>
            We tuned cache policy by content type. Static assets (hashed files) use long TTLs; HTML
            gets shorter TTLs to balance freshness and performance. We rely on standard directives:
          </p>
          <pre><code>{`# HTML (fast iteration, safe staleness)
Cache-Control: public, max-age=60, s-maxage=300, stale-while-revalidate=60, stale-if-error=86400

# Versioned assets (immutable)
Cache-Control: public, max-age=31536000, s-maxage=31536000, immutable

# Static images (can be versioned too)
Cache-Control: public, max-age=86400, s-maxage=604800, stale-while-revalidate=60, stale-if-error=86400`}</code></pre>
          <ul>
            <li>
              <strong>max-age:</strong> Browser cache time.
            </li>
            <li>
              <strong>s-maxage:</strong> CloudFront (shared) cache time.
            </li>
            <li>
              <strong>stale-while-revalidate:</strong> Serve stale while origin fetches a fresh copy.
            </li>
            <li>
              <strong>stale-if-error:</strong> Serve stale if origin is unavailable.
            </li>
          </ul>
          <p>
            We also ensure correct <code>Content-Type</code>, <code>ETag</code>, and
            <code> Content-Encoding</code> where relevant. CloudFront handles gzip/br compression at
            the edge for compressible types.
          </p>

          <h2>Invalidation and Versioning Strategy</h2>
          <ul>
            <li>
              <strong>File hashing:</strong> JS/CSS bundles include a content hash (e.g.
              <code>app.3a9c2.js</code>) to enable year-long TTLs without manual invalidations.
            </li>
            <li>
              <strong>HTML:</strong> Short TTLs plus targeted CloudFront invalidations for critical
              content updates (typically <code>{"/*"}</code> only for launches).
            </li>
            <li>
              <strong>Images:</strong> Version URL paths when content changes, avoid blanket
              invalidations.
            </li>
          </ul>

          <h2>Image Delivery and Compression</h2>
          <ul>
            <li>
              <strong>Formats:</strong> Prefer AVIF/WebP; fallback to PNG/JPEG for compatibility when
              needed.
            </li>
            <li>
              <strong>Responsive sizing:</strong> Upload appropriately sized renditions or use
              Next.js Image for responsive delivery.
            </li>
            <li>
              <strong>Compression:</strong> CloudFront serves gzip/br for text; images are already
              compressed at source.
            </li>
            <li>
              <strong>Documents & videos:</strong> Documents (PDF, DOCX) are cached at the edge with
              appropriate <code>Cache-Control</code>. Training videos are delivered via CloudFront from
              S3 with long-lived cache where appropriate; large objects benefit significantly from
              edge proximity.
            </li>
            <li>
              <strong>Headers:</strong> Always set <code>Cache-Control</code> on image objects and
              ensure correct <code>Content-Type</code>.
            </li>
          </ul>

          <h2>Uploads: Simple and Safe</h2>
          <p>
            For staff uploads we use short-lived pre-signed S3 URLs. This keeps the bucket private,
            avoids proxying large files through the app server, and ensures consistent object keys
            and metadata (including <code>Content-Type</code> and <code>Cache-Control</code>) at write time.
          </p>
          
          <h2>Security: OAC and Bucket Policy</h2>
          <p>
            Block all public access at the bucket level and only allow CloudFront (via OAC) to read
            objects. Example bucket policy:
          </p>
          <pre><code>{`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontAccessOnly",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity E2ABCDEFGHIJKL"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
    }
  ]
}`}</code></pre>
          <p>
            With OAC you actually bind CloudFront to S3 at the distribution/origin level and can use a
            simplified policy. Ensure S3 “Block Public Access” is enabled and only CloudFront can reach
            the bucket. Always use HTTPS between CloudFront and viewers.
          </p>

          <h2>Deliverables</h2>
          <ul>
            <li><strong>Edge-cached media center:</strong> Centralized delivery of documents and training videos for 50+ staff, with private S3 origin and CloudFront-only access.</li>
            <li><strong>Predictable updates:</strong> Versioned asset pipeline and targeted invalidations, preventing cache busting incidents during releases.</li>
            <li><strong>Streamlined uploads:</strong> Pre-signed S3 uploads and standardized object metadata for reliable playback and previews.</li>
            <li><strong>Teamwide communication:</strong> Faster content distribution and higher availability improved internal communication and data sharing across departments.</li>
          </ul>

          <h2>Results</h2>
          <div className="not-prose bg-secondary/20 p-6 rounded-lg my-6">
            <h3 className="text-lg font-semibold mb-4">Measured Improvements</h3>
            <ul className="space-y-2">
              <li>📉 p95 TTFB (EU visitors): 580ms → 65ms</li>
              <li>🌍 p95 TTFB (US visitors): 820ms → 95ms</li>
              <li>⚡ p95 LCP: 2.1s → 1.1s</li>
              <li>🧊 Cache hit ratio: 35% → 92% after versioning rollout</li>
              <li>💸 Egress costs stabilized with predictable cache behavior</li>
            </ul>
          </div>

          <h2>Lessons Learned</h2>
          <ol>
            <li>
              <strong>Version aggressively:</strong> Long TTLs only work if you can ship new asset
              URLs; avoid mass invalidations.
            </li>
            <li>
              <strong>Segment cache policies:</strong> HTML vs assets need different TTLs.
            </li>
            <li>
              <strong>Use OAC:</strong> Keep buckets private; let CloudFront be the only door.
            </li>
            <li>
              <strong>Measure continuously:</strong> Watch TTFB, LCP, and cache hit ratio post-deploy.
            </li>
            <li>
              <strong>Prefer stale-while-revalidate:</strong> Great UX during updates and outages.
            </li>
          </ol>

          <h2>Additional Resources</h2>
          <ul>
            <li>
              <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html" target="_blank" rel="noopener noreferrer">
                CloudFront + S3 with OAC
              </a>
            </li>
            <li>
              <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html" target="_blank" rel="noopener noreferrer">
                CloudFront cache policies and origin request policies
              </a>
            </li>
            <li>
              <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html" target="_blank" rel="noopener noreferrer">
                CloudFront invalidations
              </a>
            </li>
            <li>
              <a href="https://docs.aws.amazon.com/cli/latest/reference/s3/sync.html" target="_blank" rel="noopener noreferrer">
                AWS CLI: s3 sync
              </a>
            </li>
            <li>
              <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html" target="_blank" rel="noopener noreferrer">
                S3 Block Public Access
              </a>
            </li>
          </ul>

          <div className="not-prose mt-12 pt-8 border-t">
            <p className="text-muted-foreground">
              Planning a CloudFront + S3 rollout? Let&apos;s{" "}
              <Link href="/#contact" className="underline text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                connect
              </Link>
              .
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}
