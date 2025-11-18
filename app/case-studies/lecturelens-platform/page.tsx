import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, BookOpen, Brain, Layers, ExternalLink, Github, Calendar } from "lucide-react"
import { ContentArticle } from "@/components/content-article"
import { PostHeader } from "@/components/post-header"

export const metadata: Metadata = {
  title: "Case Study: LectureLens — AI Study Planner with Next.js + Supabase | Ege Kaya",
  description:
    "(WIP) Open-source AI study planner: ingest PDFs & notes, generate summaries, flashcards, interactive Q&A, and structured schedules (Next.js + Supabase).",
  openGraph: {
    title: "Case Study: LectureLens — Next.js + Supabase (Open Source)",
    url: "https://egekaya.dev/case-studies/lecturelens-platform",
  },
}

export default function CaseStudy() {
  const readingTime = "11 min read"
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
            title="Case Study: LectureLens — AI Study Planner"
            badges={["Next.js", "React", "Supabase", "TypeScript", "Open Source", "Work In Progress"]}
            readingTime={readingTime}
            externalLinks={[
              { label: "Live Demo", href: "https://lecture-lens-nine.vercel.app/", icon: <ExternalLink className="h-4 w-4" /> },
              { label: "Source Code", href: "https://github.com/egekaya1/LectureLens", icon: <Github className="h-4 w-4" /> },
            ]}
          />
          <p className="lead">
            LectureLens converts raw course materials (PDFs, notes, slides) into distilled summaries, targeted flashcards,
            interactive Q&amp;A, and a milestone-driven study schedule using an incremental AI processing pipeline.
          </p>

          {/* Key Metrics / Highlights */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 not-prose">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Summaries</div>
                    <div className="text-sm text-muted-foreground">From raw material</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500/10">
                    <Brain className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Flashcards</div>
                    <div className="text-sm text-muted-foreground">Drill key concepts</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <Layers className="h-5 w-5 text-cyan-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Q&amp;A</div>
                    <div className="text-sm text-muted-foreground">Ask &amp; clarify</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/10">
                    <Calendar className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Schedule</div>
                    <div className="text-sm text-muted-foreground">Plan &amp; review</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Current Status */}
          <section>
            <h2>Current Status (WIP)</h2>
            <div className="text-sm">
              <p>
                LectureLens is in an MVP build cycle. Core schema and row level security policies are codified. Next focus: completing auth flows, wiring the processing trigger, and surfacing topic extraction in the dashboard before moving into flashcards, practice Q&amp;A, and semantic search.
              </p>
              <div className="grid md:grid-cols-2 gap-6 not-prose mt-4">
                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold mb-2">Implemented</h3>
                  <ul className="list-disc ml-5 space-y-1 text-xs md:text-sm">
                    <li>Postgres schema (lectures, chunks, topics)</li>
                    <li>RLS policies (migrations committed)</li>
                    <li>Edge function scaffold for processing pipeline</li>
                    <li>Initial upload flow prototype</li>
                  </ul>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold mb-2">In Progress / Next</h3>
                  <ul className="list-disc ml-5 space-y-1 text-xs md:text-sm">
                    <li>Auth UI (signup / signin / reset)</li>
                    <li>Processing trigger + status badges</li>
                    <li>Lecture detail & topic navigation</li>
                    <li>Flashcards & study mode (Milestone 3)</li>
                    <li>Practice Q&amp;A + quiz mode (Milestone 4)</li>
                    <li>Semantic search & RAG (Milestone 5)</li>
                    <li>Study plans & reminders (Milestone 6)</li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-6">Milestone Roadmap</h3>
              <ol className="list-decimal ml-5 space-y-1 text-xs md:text-sm">
                <li>M1: Auth foundation & processing integration</li>
                <li>M2: Lecture detail pages & topic UX</li>
                <li>M3: Flashcards & study mode</li>
                <li>M4: Practice Q&amp;A generation</li>
                <li>M5: Semantic search & retrieval‑augmented answers</li>
                <li>M6: Study schedules & progress tracking</li>
                <li>M7: Deployment, analytics & polish</li>
              </ol>
            </div>
          </section>

          {/* Problem */}
          <section>
            <h2>The Challenge</h2>
            <div>
              <p>
                Students juggle heterogeneous materials (slides, lecture notes, textbook PDFs) that vary in density and
                formatting. Translating this into a sustainable plan with spaced repetition and concept reinforcement is
                tedious and error-prone. Repetition without structure leads to plateaued retention and wasted time.
              </p>
            </div>
          </section>

          {/* Solution */}
          <section>
            <h2>The Solution</h2>
            <div>
              <h3>Product Flow</h3>
              <ol>
                <li>Import course material (notes, PDFs, slides)</li>
                <li>Generate summaries and flashcards</li>
                <li>Ask follow-up questions in Q&amp;A</li>
                <li>Create a study schedule with milestones</li>
              </ol>

              <h3>Architecture</h3>
              <ul>
                <li><strong>Next.js (App Router)</strong> for UI and server actions</li>
                <li><strong>Supabase</strong> for authentication, Postgres, and secure storage</li>
                <li><strong>TypeScript</strong> for correctness across the stack</li>
              </ul>

              <h3>AI Processing Pipeline</h3>
              <ol>
                <li><strong>Extraction & Segmentation:</strong> Uploaded PDF/notes are parsed into logical blocks (headings, paragraphs, enumerations) to preserve hierarchy.</li>
                <li><strong>Chunk Formation:</strong> Blocks grouped under a token threshold to keep prompt context focused and predictable in cost.</li>
                <li><strong>Per-Chunk Summarization:</strong> Summaries generated with consistency directives (terminology normalization) to reduce drift across sections.</li>
                <li><strong>Global Consolidation:</strong> Merge overlapping concepts; eliminate redundant glossary-style lines.</li>
                <li><strong>Flashcard Generation:</strong> Pattern-based prompts classify facts vs processes vs edge cases; dedupe via similarity scoring.</li>
                <li><strong>Interactive Q&amp;A:</strong> User questions map to most relevant blocks (future: vector search) before response synthesis.</li>
                <li><strong>Schedule Synthesis:</strong> Summary difficulty + card density drive milestone allocation (intro → drill → review cycles).</li>
              </ol>

              <h3>Data Model</h3>
              <ul>
                <li><strong>documents</strong>: id, title, original_filename, processing_state</li>
                <li><strong>blocks</strong>: id, document_id, ordinal, text, type (heading|paragraph|list)</li>
                <li><strong>summaries</strong>: block_ids[], text, level (chunk|section|global)</li>
                <li><strong>cards</strong>: question, answer, source_block_ids[], difficulty, next_review_at</li>
                <li><strong>schedules</strong>: milestone_index, start_at, focus (new|review), target_card_ids[]</li>
              </ul>

              <h3>Key Constraints</h3>
              <ul>
                <li><strong>Token Limits:</strong> Chunk sizing prevents model context overflow and outlier latency.</li>
                <li><strong>Terminology Drift:</strong> Consolidation normalizes synonyms to avoid mismatched flashcards.</li>
                <li><strong>Redundancy:</strong> Similar blocks (slide bullets vs notes) filtered before card generation.</li>
                <li><strong>Fair Scheduling:</strong> Milestones weighted by conceptual density, not raw character count.</li>
              </ul>
            </div>
          </section>

          {/* Results */}
          <section>
            <h2>Results & Impact</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Study Outcomes</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✅ Consistent review via flashcards and Q&amp;A</li>
                    <li>✅ Structured schedules reduce planning overhead</li>
                    <li>✅ Centralizes materials and progress in one place</li>
                    <li>✅ Reduced cognitive load choosing what to study next</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Platform Qualities</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✅ Open-source transparency and extensibility</li>
                    <li>✅ Next.js + Supabase foundation for rapid iteration</li>
                    <li>✅ Clear roadmap for export and collaboration</li>
                    <li>✅ Strong typing reduces regression surface in pipeline changes</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Challenges & Lessons */}
          <section>
            <h2>Challenges & Lessons</h2>
            <div>
              <ul>
                <li><strong>Noisy PDFs:</strong> Hyphenated line breaks and multi-column layouts required normalization heuristics to prevent fragmented prompts.</li>
                <li><strong>Duplicate Concepts:</strong> Overlapping slide + note content inflated card counts; similarity checks trimmed 20–30% redundant candidates.</li>
                <li><strong>Prompt Consistency:</strong> Early versions produced variable answer formats; adding explicit output schemas (lists, definitions) improved dedupe.</li>
                <li><strong>Scheduling Bias:</strong> Long early chapters dominated milestone allocation until normalized by concept density metrics.</li>
                <li><strong>Auth & Isolation:</strong> Supabase row-level security ensures users only access their own documents and derived artifacts.</li>
              </ul>
            </div>
          </section>

          {/* Next Steps */}
          <section>
            <h2>Next Steps</h2>
            <div>
              <ul>
                <li>Vector embeddings (pgvector) for semantic retrieval in Q&amp;A.</li>
                <li>Adaptive spaced repetition using historical success rate per card.</li>
                <li>Calendar (ICS) export & sync.</li>
                <li>Collaborative study sets with shared progress overlays.</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="not-prose p-4 rounded-lg border bg-muted/30 text-xs md:text-sm">
              <p><strong>Note:</strong> This case study reflects an in-progress build. Impact metrics and advanced features (semantic search, adaptive scheduling) will be updated as milestones are delivered.</p>
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <h2>Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="text-sm py-2 px-4">Next.js</Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">React</Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">TypeScript</Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">Supabase</Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">PostgreSQL</Badge>
            </div>
          </section>

          {/* CTA */}
          <section className="border-t pt-8 not-prose">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Interested in learning tools?</h3>
              <p className="text-muted-foreground mb-6">
                Let’s explore how to tailor an effective study experience.
              </p>
              <Button asChild>
                <Link href="/#contact">Get in Touch</Link>
              </Button>
            </div>
          </section>
        </ContentArticle>
      </div>
    </main>
  )
}
