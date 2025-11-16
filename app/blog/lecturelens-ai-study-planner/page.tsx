import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, ExternalLink, Github } from "lucide-react"

export const metadata: Metadata = {
  title: "LectureLens: AI Study Planner with Next.js + Supabase | Ege Kaya",
  description:
    "Open-source AI study planner: ingest PDFs & notes, generate summaries, flashcards, interactive Q&A, and a structured schedule using Next.js + Supabase.",
  openGraph: {
    title: "LectureLens: AI Study Planner (Open Source)",
    description:
      "Ingest course material and get summaries, flashcards, Q&A, and a study plan. Built with Next.js + Supabase.",
    url: "https://egekaya.dev/blog/lecturelens-ai-study-planner",
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
              <Badge>Supabase</Badge>
              <Badge>AI</Badge>
              <Badge>Open Source</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              LectureLens: AI Study Planner with Next.js + Supabase
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime="2025-11-16">November 16, 2025</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>9 min read</span>
              </div>
            </div>
          </div>

          <p className="lead">
            LectureLens helps students turn raw course materials into a practical study program: concise summaries,
            flashcards, interactive Q&amp;A, and a calendar-ready schedule. The app is open source and built with
            React, Next.js, and Supabase.
          </p>

          <div className="not-prose mt-6 flex flex-wrap gap-3">
            <a
              href="https://lecture-lens-nine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm underline"
            >
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
            <a
              href="https://github.com/egekaya1/LectureLens"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm underline"
            >
              <Github className="h-4 w-4" /> Source Code
            </a>
          </div>

          <hr />

          <h2>Problem</h2>
          <p>
            Students collect PDFs, slides, and notes—but translating them into a daily plan is time-consuming. Keeping
            momentum across readings, practice, and spaced repetition often falls through the cracks.
          </p>

          <h2>What LectureLens Does</h2>
          <ul>
            <li><strong>Summaries:</strong> Distills long-form material into digestible sections</li>
            <li><strong>Flashcards:</strong> Generates Q&amp;A cards to drill concepts</li>
            <li><strong>Interactive Q&amp;A:</strong> Ask follow-ups on any topic</li>
            <li><strong>Study Plan:</strong> Builds a schedule with milestones and reviews</li>
          </ul>

          <h2>High-Level Architecture</h2>
          <p>
            The app uses Next.js (App Router) for routing and UI, with Supabase for authentication, storage, and a
            Postgres-backed data layer. Content processing is orchestrated server-side for reliability.
          </p>
          <ul>
            <li><strong>Next.js:</strong> UI, routing, server actions</li>
            <li><strong>Supabase:</strong> Auth, Postgres, and row-level security rules</li>
            <li><strong>TypeScript:</strong> End-to-end types for safer feature work</li>
          </ul>

          <h2>AI Processing Pipeline</h2>
          <p>
            Although the public README focuses on core features, internally the pipeline treats each uploaded document as a
            sequence of processing stages designed to preserve semantic structure while limiting token usage:
          </p>
          <ol>
            <li><strong>Text Extraction:</strong> Raw PDF text is segmented into logical blocks (headings, paragraphs, lists) to avoid merging unrelated concepts.</li>
            <li><strong>Chunking & Normalization:</strong> Blocks are grouped into chunks under a target token budget (e.g. ~1–2k tokens) with light cleanup (whitespace, duplicate heading collapse).</li>
            <li><strong>Summarization Pass:</strong> Each chunk is summarized independently; a consolidation pass merges overlapping summaries and enforces consistent terminology.</li>
            <li><strong>Flashcard Generation:</strong> For factual or definition-rich segments, prompt templates produce Q&A pairs (priority: definitions → processes → edge cases). Near-duplicate cards are deduped by fuzzy matching.</li>
            <li><strong>Q&A Interactive Mode:</strong> User questions reference stored chunk embeddings (future: vector index) to inject relevant context before answering.</li>
            <li><strong>Schedule Synthesis:</strong> Summaries + card counts feed a heuristic that splits material into milestones (intro, drilling, review). Spaced repetition intervals are tuned by difficulty (definition vs conceptual vs procedural).</li>
          </ol>

          <h3>Data Model Considerations</h3>
          <ul>
            <li><strong>Documents:</strong> Metadata (title, source filename, processing state) + normalized text blocks.</li>
            <li><strong>Cards:</strong> question, answer, source_block_ids[], difficulty, next_review_at.</li>
            <li><strong>Schedules:</strong> milestone_day, target_blocks, review_focus (new vs mature).</li>
          </ul>

          <h3>Token & Performance Constraints</h3>
          <ul>
            <li>Chunking prevents hitting provider token limits and reduces latency variance.</li>
            <li>Consolidation step avoids summary drift where later chunks rephrase earlier concepts inconsistently.</li>
            <li>Flashcard dedupe prevents redundant drilling (especially glossary sections repeating terms).</li>
          </ul>

          <h2>Challenges & Mitigations</h2>
          <ul>
            <li><strong>PDF Noise:</strong> Line-break heavy content or hyphenated words cause fragmented context → employ normalization and word rejoining heuristics.</li>
            <li><strong>Duplicate Content:</strong> Slides + notes with overlapping bullet points → similarity scoring before generating cards.</li>
            <li><strong>Token Budget:</strong> Large textbooks exceed single-pass limits → incremental summarization tree (chunk → section → global).</li>
            <li><strong>Context Precision:</strong> Q&A answers hallucinate if context is too broad → narrow selection to top-N semantically closest blocks (future: embedding store).</li>
            <li><strong>Scheduling Fairness:</strong> Over-emphasis on early dense chapters → weight milestones by normalized token density, not raw length.</li>
          </ul>

          <h2>Future Improvements</h2>
          <ul>
            <li>Vector index for semantic retrieval (Supabase pgvector or external service).</li>
            <li>Adaptive spaced repetition using per-card success history.</li>
            <li>Export schedule to external calendars (ICS generation).</li>
            <li>Collaborative sets with per-user mastery scoring.</li>
          </ul>

          <h2>Why This Stack</h2>
          <p>
            Supabase provides an excellent developer experience for auth and data, while Next.js simplifies server/
            client boundaries and streaming UI. Together they enable fast iteration and a clean mental model.
          </p>

          <h2>Roadmap Snapshot</h2>
          <ul>
            <li>Calendar export (ICS + provider sync)</li>
            <li>Adaptive spaced repetition tuning</li>
            <li>Team/shared study sets with permission tiers</li>
            <li>Embeddings + semantic rerank for Q&A context</li>
          </ul>

          <p className="text-muted-foreground text-sm mt-12">
            Feedback or ideas? <Link href="/#contact">Reach out</Link> — I’d love to hear them.
          </p>
        </article>
      </div>
    </main>
  )
}
