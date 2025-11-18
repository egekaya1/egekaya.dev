import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github, Cpu, Database, Boxes, Binary, ShieldCheck } from "lucide-react"
import { ContentArticle } from "@/components/content-article"
import { PostHeader } from "@/components/post-header"

export const metadata: Metadata = {
  title: "LectureLens: AI Study Planner with Next.js + Supabase | Ege Kaya",
  description:
    "(WIP) Open-source AI study planner: ingest PDFs & notes, generate summaries, flashcards, interactive Q&A, and a structured schedule using Next.js + Supabase.",
  openGraph: {
    title: "LectureLens: AI Study Planner (Open Source)",
    description:
      "(Work In Progress) Ingest course material and get summaries, flashcards, Q&A, and a study plan. Built with Next.js + Supabase.",
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

        <ContentArticle>
          <PostHeader
            title="LectureLens: AI Study Planner with Next.js + Supabase"
            badges={[
              "Next.js App Router",
              "TypeScript",
              "Supabase Auth + RLS",
              "PostgreSQL",
              "Edge Functions",
              "Chunking Pipeline",
              "Embeddings (pgvector)",
              "Flashcards (Planned)",
              "RAG Q&A (Planned)",
              "Work In Progress",
            ]}
            date={{ label: "November 16, 2025", dateTime: "2025-11-16" }}
            readingTime="9 min read"
            externalLinks={[
              { label: "Live Demo", href: "https://lecture-lens-nine.vercel.app/", icon: <ExternalLink className="h-4 w-4" /> },
              { label: "Source Code", href: "https://github.com/egekaya1/LectureLens", icon: <Github className="h-4 w-4" /> },
            ]}
          />

          <p className="lead">
            LectureLens converts raw lecture material (PDF slides, notes, transcripts) into structured topics, concise summaries, flashcards, interactive Q&amp;A, and a milestone‑driven study schedule. This post documents the <strong>active MVP build phase</strong> — schema + RLS are codified, processing pipeline scaffold exists, and upcoming milestones focus on auth UX, topic navigation, spaced repetition, and semantic search.
          </p>
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
            <li><strong>Edge Functions:</strong> Deterministic processing stages with service role isolation</li>
            <li><strong>pgvector (planned):</strong> Semantic retrieval for RAG Q&amp;A</li>
          </ul>

          <h2>AI Processing Pipeline</h2>
          <p>
            Internally the pipeline treats each uploaded document as a sequence of processing stages designed to preserve semantic structure while limiting token usage:
          </p>
          <ol>
            <li><strong>Text Extraction:</strong> Segment PDF text into logical blocks (headings, paragraphs, lists).</li>
            <li><strong>Chunking & Normalization:</strong> Group blocks under a token budget with cleanup (hyphen join, heading dedupe).</li>
            <li><strong>Summarization Pass:</strong> Summarize each chunk; consolidation merges overlap and enforces terminology.</li>
            <li><strong>Flashcard Generation (planned):</strong> Prompt templates classify facts/processes/edge cases, dedupe similar cards.</li>
            <li><strong>Q&A Mode (planned):</strong> Embed chunks, retrieve top‑N, inject into answer synthesis prompt.</li>
            <li><strong>Schedule Synthesis (planned):</strong> Use summary difficulty + card density to allocate milestone focus windows.</li>
          </ol>
          <div className="not-prose mt-4 grid sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 text-xs font-medium"><Cpu className="h-4 w-4" /> Deterministic sequencing</div>
            <div className="flex items-center gap-2 text-xs font-medium"><Database className="h-4 w-4" /> Relational artifacts</div>
            <div className="flex items-center gap-2 text-xs font-medium"><Boxes className="h-4 w-4" /> Adaptive chunk sizing</div>
            <div className="flex items-center gap-2 text-xs font-medium"><Binary className="h-4 w-4" /> Similarity dedupe</div>
            <div className="flex items-center gap-2 text-xs font-medium"><ShieldCheck className="h-4 w-4" /> RLS isolation</div>
          </div>

          <h3>Token & Performance Constraints</h3>
          <ul>
            <li>Chunking bounds latency variance + cost.</li>
            <li>Consolidation reduces summary drift & duplication.</li>
            <li>Dedupe prevents redundant glossary‑style flashcards.</li>
          </ul>

          <h2>Challenges & Mitigations</h2>
          <ul>
            <li><strong>PDF Noise:</strong> Normalization & rejoining heuristics.</li>
            <li><strong>Duplicate Content:</strong> Fuzzy similarity scoring pre‑generation.</li>
            <li><strong>Large Lectures:</strong> Incremental hierarchical summarization tree.</li>
            <li><strong>Hallucinations:</strong> Narrow retrieval (top‑N chunk context) before answer synthesis.</li>
            <li><strong>Scheduling Bias:</strong> Weight milestones by normalized concept density.</li>
          </ul>

          <h2>Roadmap Status (WIP)</h2>
          <p className="text-muted-foreground text-sm">Current build cycle; implemented vs upcoming milestones.</p>
          <div className="grid md:grid-cols-2 gap-6 not-prose">
            <div className="rounded-lg border p-4 space-y-2">
              <h3 className="font-semibold">Implemented</h3>
              <ul className="list-disc ml-5 text-sm">
                <li>Schema: lectures, chunks, topics</li>
                <li>RLS policies (migrations)</li>
                <li>Edge function scaffold</li>
                <li>Upload flow prototype</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4 space-y-2">
              <h3 className="font-semibold">Next / In Progress</h3>
              <ul className="list-disc ml-5 text-sm">
                <li>Auth UI</li>
                <li>Processing trigger + status badges</li>
                <li>Lecture detail + topic navigation</li>
                <li>Flashcards & study mode</li>
                <li>Practice Q&amp;A + quiz mode</li>
                <li>Semantic search & RAG</li>
                <li>Study schedules & reminders</li>
              </ul>
            </div>
          </div>
          <h3 className="mt-8">Milestones</h3>
          <ol className="list-decimal ml-5 text-sm space-y-1">
            <li>M1: Auth + processing integration</li>
            <li>M2: Lecture detail + topic UX</li>
            <li>M3: Flashcards & study mode</li>
            <li>M4: Practice Q&amp;A generation</li>
            <li>M5: Semantic search (vector + hybrid)</li>
            <li>M6: Study schedules & tracking</li>
            <li>M7: Deployment & analytics</li>
          </ol>
          <div className="mt-6 p-4 rounded-md border bg-muted/40 not-prose">
            <p className="text-xs text-muted-foreground">Post‑MVP: ICS export, adaptive spaced repetition, shared study sets, semantic rerank refinement.</p>
          </div>

          <p className="text-muted-foreground text-sm mt-12">Feedback or ideas? <Link href="/#contact">Reach out</Link> — I’d love to hear them.</p>
          <div className="not-prose mt-10 p-4 rounded-lg border bg-muted/30">
            <p className="text-sm"><strong>Note:</strong> Roadmap sections are aspirational until shipped; page updates track milestone delivery.</p>
          </div>
        </ContentArticle>
      </div>
    </main>
  )
}
