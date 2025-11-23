import Link from "next/link"
import { Metadata } from "next"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Ege Kaya - Technical Articles on Web Development, React, and Software Engineering",
  description: "Technical articles about React, Next.js, TypeScript, AWS, performance optimization, and software engineering best practices by Ege Kaya.",
  openGraph: {
    title: "Blog | Ege Kaya",
    description: "Technical articles about web development and software engineering",
    url: "https://egekaya.dev/blog",
  },
}

interface BlogPost {
  slug: string
  title: string
  description: string
  publishedAt: string
  readingTime: string
  tags: string[]
  featured?: boolean
}

const blogPosts: BlogPost[] = [
  {
    slug: "git-sim-interactive-git-visualization",
    title: "Git-Sim: Simulating Rebase, Merge, Reset & Cherry-Pick Safely",
    description: "Deep technical dive: commit graph modeling, conflict prediction heuristics, safety scoring, virtual hashes, and snapshot system for safe exploration of advanced Git operations.",
    publishedAt: "2025-11-23",
    readingTime: "18 min read",
    tags: ["Git", "Simulation", "Python", "CLI"],
    featured: true,
  },
  {
    slug: "optimizing-nextjs-performance",
    title: "Next.js Performance Optimization: 58 → 100 Lighthouse Score",
    description: "Complete guide to achieving 100/100 Lighthouse score in Next.js. Real portfolio case study: WebP optimization, Three.js deferring, code splitting, accessibility, and security headers.",
    publishedAt: "2025-11-14",
    readingTime: "15 min read",
    tags: ["Performance", "Lighthouse", "Next.js", "Case Study"],
    featured: true,
  },
  {
    slug: "lecturelens-ai-study-planner",
    title: "LectureLens: AI Study Planner with Next.js + Supabase",
    description:
      "Open-source study companion: ingest course materials to generate summaries, flashcards, Q&A, and schedules — built with React, Next.js, and Supabase.",
    publishedAt: "2025-11-16",
    readingTime: "9 min read",
    tags: ["Next.js", "Supabase", "AI", "Open Source"],
    featured: true,
  },
  {
    slug: "aws-s3-cloudfront-integration",
    title: "CDN Optimization with AWS CloudFront + S3: A Real-World Case Study",
    description: "How I shipped a fast, secure, and low-cost static site on S3 + CloudFront: OAC, cache policies (max-age, s-maxage, stale-while-revalidate, stale-if-error), versioning, and concrete performance gains..",
    publishedAt: "2025-11-05",
    readingTime: "10 min read",
    tags: ["AWS", "TypeScript", "Serverless"],
    featured: true,
  },
  {
    slug: "postgresql-query-optimization",
    title: "PostgreSQL Query Optimization: 40% Performance Boost in Production",
    description: "Real-world PostgreSQL optimization techniques from handling 50,000+ daily sensor readings. Indexing strategies, query planning, and monitoring tips that delivered measurable results.",
    publishedAt: "2024-11-01",
    readingTime: "12 min read",
    tags: ["PostgreSQL", "Database", "Performance"],
    featured: true,
  },
]

export default function BlogPage() {
  return (
    <main className="section-padding">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Technical Blog
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Insights and lessons learned from building production applications
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts
              .filter((post) => post.featured)
              .map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="h-full hover-lift transition-all duration-300 border-2 hover:border-primary/50">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <Badge variant="secondary" className="bg-primary/10">
                          Featured
                        </Badge>
                      </div>
                      <CardTitle className="text-xl leading-tight">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {post.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <time dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{post.readingTime}</span>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  )
}
