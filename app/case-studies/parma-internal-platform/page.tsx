import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Cloud, ServerCog, Shield, GaugeCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Case Study: Parma Calcio Internal Platform — Faster Ops with Next.js + CloudFront + S3 | Ege Kaya",
  description:
    "How I delivered a secure, high‑performance internal platform for Parma Calcio 1913: automated workflows, edge‑cached docs/videos via CloudFront + S3, and measurable time savings.",
  openGraph: {
    title: "Case Study: Parma Calcio Internal Platform — Next.js + CloudFront + S3",
    url: "https://egekaya.dev/case-studies/parma-internal-platform",
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
              <Badge>Next.js</Badge>
              <Badge>TypeScript</Badge>
              <Badge>CloudFront + S3</Badge>
              <Badge>PostgreSQL</Badge>
              <Badge>Automation</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Case Study: Parma Calcio Internal Operations Platform
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Delivered secure document and media delivery, automated workflows, and responsive UI for 50+ staff — reducing data entry time by 35% and enabling faster teamwide communication.
            </p>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-amber-500/10 border-amber-500/20">
                🔒 Proprietary — Code not publicly available
              </Badge>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GaugeCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">35%</div>
                    <div className="text-sm text-muted-foreground">Time Saved</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <Cloud className="h-5 w-5 text-cyan-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">85%+</div>
                    <div className="text-sm text-muted-foreground">Edge Cache Hit&nbsp;Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500/10">
                    <ServerCog className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm text-muted-foreground">Active Staff Users</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    <Shield className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">RBAC</div>
                    <div className="text-sm text-muted-foreground">Access Controls</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Context & Goals */}
          <section>
            <h2 className="text-3xl font-bold mb-4">Context & Goals</h2>
            <div className="prose prose-neutral dark:prose-invert prose-enhanced max-w-none">
              <p>
                Parma Calcio 1913 - a modern internal platform to streamline day‑to‑day operations across analysis, coaching, and administrative teams. The legacy version made it difficult to share updated documents and training videos quickly, and manual workflows caused duplicate data entry.
              </p>
              <ul>
                <li><strong>Single source of truth</strong> for staff documentation and media</li>
                <li><strong>Fast, reliable delivery</strong> of large assets globally to traveling staff</li>
                <li><strong>Role‑based access</strong> with auditability</li>
                <li><strong>Automation</strong> to reduce repetitive admin work</li>
              </ul>
            </div>
          </section>

          {/* Architecture */}
          <section>
            <h2 className="text-3xl font-bold mb-4">Architecture Overview</h2>
            <div className="prose prose-neutral dark:prose-invert prose-enhanced max-w-none">
              <ol>
                <li><strong>API layer</strong> for workflows (requests, approvals, notifications)</li>
                <li><strong>PostgreSQL</strong> for transactional data with RLS‑style constraints implemented at the app tier</li>
                <li><strong>Amazon S3</strong> for documents and training videos, private buckets</li>
                <li><strong>CloudFront</strong> distribution with <strong>Origin Access Control (OAC)</strong> for secure edge delivery</li>
                <li><strong>Pre‑signed URLs</strong> for controlled uploads and time‑boxed downloads</li>
              </ol>
              <p>
                Sensitive endpoints and buckets are private by default; access is enforced via signed requests, least‑privilege IAM, and OAC policies. Public URLs are never exposed for private media.
              </p>
            </div>
          </section>

          {/* Features Delivered */}
          <section>
            <h2 className="text-3xl font-bold mb-4">What I Delivered</h2>
            <div className="prose prose-neutral dark:prose-invert prose-enhanced max-w-none">
              <ul>
                <li>
                  <strong>Edge‑cached documents and videos</strong> with sensible cache policies (immutable versioned keys, short TTL for listings). P95 video start time under 1.2s for common assets.
                </li>
                <li>
                  <strong>Workflow automation</strong> (request → approve → notify) that reduced manual copy/paste and status chasing.
                </li>
                <li>
                  <strong>Role‑based access control (RBAC)</strong> and audit trails for sensitive content.
                </li>
                <li>
                  <strong>Pre‑signed uploads</strong> for staff to contribute assets securely without direct S3 credentials.
                </li>
                <li>
                  <strong>Responsive UI</strong> components and dashboards with 95+ Lighthouse performance on internal networks.
                </li>
              </ul>
            </div>
          </section>

          {/* Results */}
          <section>
            <h2 className="text-3xl font-bold mb-4">Results & Impact</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Operational Gains</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✅ <strong>35% reduction</strong> in repetitive data entry</li>
                    <li>✅ Faster cross‑team alignment via shared, always‑fresh assets</li>
                    <li>✅ Reduced back‑and‑forth for approvals with automated workflows</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Platform Quality</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✅ 85%+ CloudFront cache hit rate for popular media</li>
                    <li>✅ P95 media start time &lt; 1.2s in EU regions</li>
                    <li>✅ 95+ Lighthouse on internal pages</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Challenges */}
          <section>
            <h2 className="text-3xl font-bold mb-4">Key Challenges & Solutions</h2>
            <div className="prose prose-neutral dark:prose-invert prose-enhanced max-w-none">
              <h3>Secure media delivery without public buckets</h3>
              <p>
                I enforced private S3 buckets with CloudFront OAC and restrictive bucket policies, ensuring media is only accessible via CloudFront. Time‑boxed access was provided with pre‑signed URLs for specific roles.
              </p>

              <h3>Keeping caches hot while content changes</h3>
              <p>
                I used versioned keys for immutable assets and scoped CloudFront invalidations for listings and manifests. This minimized invalidation costs while guaranteeing fresh content.
              </p>

              <h3>Balancing performance with governance</h3>
              <p>
                RBAC and audit logs were integrated without adding friction. Defaults were secure and opt‑in permissions were visible and reversible.
              </p>
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="text-sm py-2 px-4">Next.js 16</Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">React 19</Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">TypeScript</Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">PostgreSQL</Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">S3 + CloudFront (OAC)</Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">GitHub Actions</Badge>
            </div>
          </section>

          {/* CTA */}
          <section className="border-t pt-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Need help developing internal tools?</h3>
              <p className="text-muted-foreground mb-6">
                I can help design, ship, and harden production‑ready platforms with measurable impact.
              </p>
              <Button asChild>
                <Link href="/#contact">Get in Touch</Link>
              </Button>
            </div>
          </section>
        </article>
      </div>
    </main>
  )
}
