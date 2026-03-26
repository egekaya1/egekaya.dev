import { Metadata } from "next"
import { WritingList, type WritingEntry } from "@/components/writing-list"

export const metadata: Metadata = {
  title: "Blog | Ege Kaya — Articles & Case Studies",
  description:
    "Technical articles and case studies on machine learning, web development, and software engineering by Ege Kaya.",
  openGraph: {
    title: "Blog | Ege Kaya",
    description:
      "Technical articles and case studies on machine learning and software engineering",
    url: "https://egekaya.dev/blog",
  },
}

const entries: WritingEntry[] = [
  // ── Articles ────────────────────────────────────────────────────────────────
  {
    type: "article",
    slug: "coremetric-ml-anomaly-detection",
    title: "CoreMetric: ML-Powered System Monitoring on macOS",
    description:
      "Building a privacy-first system monitor that uses neural networks and the Apple Neural Engine to detect anomalies. Combines PyTorch, Metal Performance Shaders, CoreML, and SwiftUI to deliver intelligent monitoring with <1% CPU overhead.",
    publishedAt: "2025-11-27",
    readingTime: "18 min read",
    tags: ["Machine Learning", "SwiftUI", "CoreML", "PyTorch", "macOS"],
  },
  {
    type: "article",
    slug: "machine-learning-roadmap-from-numpy-to-production",
    title: "My Machine Learning Journey: From NumPy to Production PyTorch",
    description:
      "A personal roadmap through machine learning: Python foundations, NumPy, Pandas, scikit-learn, PyTorch with Apple Silicon MPS, deep learning architectures, MLOps, and production deployment.",
    publishedAt: "2025-11-24",
    readingTime: "18 min read",
    tags: ["Python", "PyTorch", "Machine Learning", "Deep Learning", "MLOps"],
  },
  {
    type: "article",
    slug: "git-sim-interactive-git-visualization",
    title: "GitSimulator: Production-Grade Git Simulation Engine",
    description:
      "Deep technical dive into GitSimulator (3rd Place, GitKon 2025 Game Jam): 135+ tests, automated CI/CD, interactive TUI, plugin architecture, and advanced conflict prediction.",
    publishedAt: "2025-11-23",
    readingTime: "22 min read",
    tags: ["Git", "Python", "CLI", "Testing", "CI/CD"],
  },
  {
    type: "article",
    slug: "lecturelens-ai-study-planner",
    title: "LectureLens: AI Study Planner with Next.js + Supabase",
    description:
      "Open-source study companion: ingest course materials to generate summaries, flashcards, Q&A, and schedules — built with React, Next.js, and Supabase.",
    publishedAt: "2025-11-16",
    readingTime: "9 min read",
    tags: ["Next.js", "Supabase", "AI", "Open Source"],
  },
  {
    type: "article",
    slug: "optimizing-nextjs-performance",
    title: "Next.js Performance Optimization: 58 → 100 Lighthouse Score",
    description:
      "Complete guide to achieving 100/100 Lighthouse score in Next.js. Real portfolio case study: WebP optimization, Three.js deferring, code splitting, accessibility, and security headers.",
    publishedAt: "2025-11-14",
    readingTime: "15 min read",
    tags: ["Performance", "Lighthouse", "Next.js", "Case Study"],
  },
  {
    type: "article",
    slug: "aws-s3-cloudfront-integration",
    title: "CDN Optimization with AWS CloudFront + S3: A Real-World Case Study",
    description:
      "How I shipped a fast, secure, and low-cost static site on S3 + CloudFront: OAC, cache policies, versioning, and concrete performance gains.",
    publishedAt: "2025-11-05",
    readingTime: "10 min read",
    tags: ["AWS", "TypeScript", "Serverless"],
  },
  {
    type: "article",
    slug: "postgresql-query-optimization",
    title: "PostgreSQL Query Optimization: 40% Performance Boost in Production",
    description:
      "Real-world PostgreSQL optimization from handling 50,000+ daily sensor readings: indexing strategies, query planning, partitioning, materialized views, and monitoring.",
    publishedAt: "2024-11-01",
    readingTime: "12 min read",
    tags: ["PostgreSQL", "Database", "Performance"],
  },

  // ── Case Studies ─────────────────────────────────────────────────────────────
  {
    type: "case-study",
    slug: "coremetric",
    title: "Case Study: CoreMetric — Neural Anomaly Detection on macOS",
    description:
      "Privacy-first system monitor using Reconstruction Autoencoders on Apple Neural Engine. Complete ML pipeline from PyTorch training with MPS to CoreML inference in SwiftUI with <1% CPU overhead.",
    publishedAt: "2025-11-27",
    readingTime: "20 min read",
    tags: ["Machine Learning", "SwiftUI", "CoreML", "PyTorch", "macOS"],
  },
  {
    type: "case-study",
    slug: "git-sim",
    title: "Case Study: GitSimulator — Flight Simulator for Git Commands",
    description:
      "Production-ready Python CLI with 135+ tests, automated CI/CD, interactive TUI, and plugin architecture. Safely simulates rebase, merge, reset & cherry-pick with advanced conflict prediction.",
    publishedAt: "2025-11-23",
    readingTime: "25 min read",
    tags: ["Python", "Git", "CLI", "Testing", "CI/CD"],
  },
  {
    type: "case-study",
    slug: "digitwin-database",
    title: "Case Study: DigiTwin Database System — 50K+/day, 40% Faster Queries",
    description:
      "High-performance database for structural monitoring: 50,000+ daily readings, 40% faster queries via partitioning and materialized views, and a robust C++ ingestion pipeline.",
    publishedAt: "2025-11-20",
    readingTime: "10 min read",
    tags: ["C++", "PostgreSQL", "Performance", "Database"],
  },
  {
    type: "case-study",
    slug: "lecturelens-platform",
    title: "Case Study: LectureLens — AI Study Planner (Open Source)",
    description:
      "(WIP) Open-source AI study planner: ingest PDFs & notes, generate summaries, flashcards, interactive Q&A, and structured schedules (Next.js + Supabase).",
    publishedAt: "2025-11-16",
    readingTime: "11 min read",
    tags: ["Next.js", "Supabase", "AI", "Open Source"],
  },
  {
    type: "case-study",
    slug: "portfolio-website",
    title: "Case Study: egekaya.dev — Next.js 16 + Tailwind v4",
    description:
      "A fast, accessible, and maintainable portfolio built with Next.js 16, React 19, TypeScript 5, and Tailwind CSS v4. Includes Three.js background, retro mode, and robust writing UX.",
    publishedAt: "2025-11-12",
    readingTime: "14 min read",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    type: "case-study",
    slug: "parma-internal-platform",
    title: "Case Study: Parma Calcio Internal Platform",
    description:
      "Delivering a secure, high-performance internal platform for Parma Calcio 1913: automated workflows, edge-cached docs and videos via CloudFront + S3, and measurable time savings.",
    publishedAt: "2025-11-07",
    readingTime: "9 min read",
    tags: ["Next.js", "TypeScript", "AWS", "CloudFront"],
  },
  {
    type: "case-study",
    slug: "discord-bot-automation",
    title: "Case Study: Discord Bot Automation for PoliTo Organization",
    description:
      "Automating role assignment for 200+ members, reducing manual management time by 95% using Discord.js and Supabase.",
    publishedAt: "2025-10-15",
    readingTime: "8 min read",
    tags: ["Discord.js", "Node.js", "Supabase", "Automation"],
  },
]

export default function BlogPage() {
  return (
    <main className="section-padding">
      <div className="container-custom">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Blog
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Technical articles and case studies on ML, web development, and software engineering
          </p>
        </div>

        <WritingList entries={entries} />
      </div>
    </main>
  )
}
