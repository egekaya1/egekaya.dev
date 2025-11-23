import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, GitBranch, Shield, Zap, FileDiff } from "lucide-react"
import { ContentArticle } from "@/components/content-article"
import { PostHeader } from "@/components/post-header"

export const metadata: Metadata = {
  title: "Case Study: Git-Sim — Safe Git Operation Simulation Engine | Ege Kaya",
  description:
    "Git-Sim: Python CLI that safely simulates rebase, merge, reset & cherry-pick with commit graph visualization, conflict prediction heuristics, safety scoring, and snapshot/restore — built for education and CI pre-flight validation.",
  openGraph: {
    title: "Case Study: Git-Sim — Safe Git Simulation Engine",
    url: "https://egekaya.dev/case-studies/git-sim",
    images: [
      {
        url: "https://egekaya.dev/og/git-sim.png",
        width: 1200,
        height: 630,
        alt: "Git-Sim commit graph visualization"
      }
    ]
  },
}

export default function CaseStudyGitSim() {
  const readingTime = "18 min read"
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
            title="Case Study: Git-Sim — Safe Git Operation Simulation"
            badges={["Python", "CLI", "Git Internals", "Simulation", "Visualization"]}
            readingTime={readingTime}
          />

          <p className="lead">
            Git-Sim is a Python CLI that <strong>simulates dangerous Git operations</strong> — rebase, merge, reset, and cherry-pick — <em>without modifying the working repository</em>. It predicts conflicts, visualizes before/after commit graphs, scores safety (LOW → CRITICAL), and preserves state snapshots for exploratory learning. Upcoming distribution: <code>pip install git-sim</code> (soon). Only public link: <a href="https://github.com/egekaya1/GitSim" target="_blank" rel="noopener noreferrer">GitHub Repository</a>.
          </p>

          {/* Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 not-prose">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GitBranch className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">4</div>
                    <div className="text-sm text-muted-foreground">Ops Simulated</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/10">
                    <FileDiff className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Conflicts</div>
                    <div className="text-sm text-muted-foreground">Predicted Pre-Run</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <Shield className="h-5 w-5 text-cyan-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Safety</div>
                    <div className="text-sm text-muted-foreground">Risk Scoring</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500/10">
                    <Zap className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Snapshots</div>
                    <div className="text-sm text-muted-foreground">State Preservation</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <section>
            <h2>Motivation & Pain Points</h2>
            <p>
              Advanced Git commands are <strong>opaque</strong>: users only know the outcome <em>after</em> mutation. A mistyped <code>rebase</code> or <code>reset --hard</code> can rewrite history or discard work. Teams need <strong>pre-flight insight</strong>: which commits replay, which disappear, which conflicts emerge, whether a force push becomes unavoidable, and how reversible the result is.
            </p>
            <ul>
              <li><strong>Lack of Preview:</strong> Git does not show an after-state commit graph before destructive operations.</li>
              <li><strong>Conflicts Surprise:</strong> Developers only see conflicts mid-rebase/merge, wasting context-switch time.</li>
              <li><strong>Onboarding Cost:</strong> Juniors guess at internals (merge base, replay ordering, detached commits).</li>
              <li><strong>CI Safety:</strong> Pipelines cannot pre-score risk of history rewriting.</li>
            </ul>
          </section>

          <section>
            <h2>Architecture Overview</h2>
            <h3>Layers</h3>
            <ol>
              <li><strong>Repository Abstraction:</strong> Read-only wrapper (Dulwich) for commits, trees, refs, diffs.</li>
              <li><strong>Graph Model:</strong> Immutable commit graph (nodes: commits; edges: parent links; annotations for HEAD/ref roles).</li>
              <li><strong>Simulation Engines:</strong> Strategy objects per operation (Rebase, Merge, Reset, Cherry-Pick).</li>
              <li><strong>Conflict Heuristics:</strong> Diff-based detection pre-run (line intersection + mode changes + rename ambiguity).</li>
              <li><strong>Safety Analyzer:</strong> Scores LOW → CRITICAL using weighted factors (history rewrite, force push necessity, commit orphan risk, working tree discard magnitude).</li>
              <li><strong>Snapshot System:</strong> Captures ref map + working index signature for restore experiments.</li>
              <li><strong>Unified Dispatcher:</strong> Parses free-form command string (e.g. <code>rebase main --autosquash</code>) → simulation plan.</li>
              <li><strong>Presentation Layer:</strong> Rich-formatted tables + side-by-side commit graph ASCII diff.</li>
            </ol>
          </section>

          <section>
            <h2>Simulation Pipeline</h2>
            <pre><code>{`# High-level pseudocode
plan = parse_command(input)
repo = Repository.open(cwd)
base_state = Snapshot.capture(repo)
commit_graph_before = Graph.build(repo)
engine = select_engine(plan.operation)
analysis = engine.prepare(repo, plan)
conflicts = ConflictDetector.predict(repo, analysis)
new_graph = engine.simulate(commit_graph_before, analysis, conflicts)
safety = SafetyAnalyzer.score(plan, analysis, conflicts, commit_graph_before, new_graph)
return SimulationResult(
  operation=plan.operation,
  before=commit_graph_before,
  after=new_graph,
  conflicts=conflicts,
  safety=safety,
  reversible=Snapshot.can_restore(base_state, new_graph)
)`}</code></pre>
            <p>
              The pipeline never mutates refs. <code>simulate()</code> returns a <code>CommitGraph</code> clone with projected IDs (virtual hashes derived from parent+tree diff signature) for commits that would be rewritten.
            </p>
          </section>

          <section>
            <h2>Conflict Detection Heuristics</h2>
            <p>Pre-run heuristics reduce surprise during interactive operations:</p>
            <ul>
              <li><strong>Overlapping Line Ranges:</strong> Same file lines modified in diverging branches.</li>
              <li><strong>Delete vs Modify:</strong> One side deletes file other modifies → guaranteed conflict.</li>
              <li><strong>Mode / Rename Collisions:</strong> Rename + content change on both sides flagged as high-risk.</li>
              <li><strong>Binary Files:</strong> Marked indeterminate (needs manual inspect) → safety penalty applied.</li>
              <li><strong>Multi-parent Ambiguity:</strong> Merge with multiple divergent renames triggers structural warning.</li>
            </ul>
            <p>
              False positives are minimized by normalizing whitespace and filtering comment-only diffs (language heuristics lightweight, extensible via plug-ins).
            </p>
          </section>

          <section>
            <h2>Safety Scoring Model</h2>
            <p>
              Safety levels aggregate weighted factors (<code>w_i</code>) into a normalized 0–100 risk score:
            </p>
            <pre><code>{`risk = Σ (w_factor * factor_value)
level =
  risk < 25  -> LOW
  risk < 50  -> MEDIUM
  risk < 75  -> HIGH
  else       -> CRITICAL`}</code></pre>
            <ul>
              <li><strong>History Rewrite Depth:</strong> Number of commits with new virtual hashes.</li>
              <li><strong>Force Push Requirement:</strong> Any non-fast-forward ref update on a remote-tracked branch.</li>
              <li><strong>Detached Commits Risk:</strong> Commits becoming unreachable unless re-tagged.</li>
              <li><strong>Conflict Density:</strong> Conflicts / commits replayed ratio.</li>
              <li><strong>Working Tree Discard:</strong> (Reset modes) Count + total size of lost tracked changes.</li>
            </ul>
          </section>

          <section>
            <h2>Performance Benchmarks</h2>
            <p>Preliminary (to be refined; placeholder values indicated with <code>TBD</code>):</p>
            <ul>
              <li>Commit graph build: ~12ms per 1K commits (TBD refine)</li>
              <li>Conflict heuristic pass: O(changed files) with intelligent early abort</li>
              <li>Rebase simulation: linear in commits replayed (virtual hash generation constant factors only)</li>
              <li>Memory footprint: bounded by commit metadata slice + diff summary (no tree expansion)</li>
            </ul>
            <p>
              Optimization opportunity: parallel diff heuristic evaluation using Python concurrency where I/O bound (Dulwich object reads) vs CPU bound scoring.
            </p>
          </section>

          <section>
            <h2>Developer Experience & CLI Output</h2>
            <ul>
              <li><strong>Unified Dispatcher:</strong> Single entry: <code>git-sim sim &quot;rebase main --autosquash&quot;</code>.</li>
              <li><strong>Rich Rendering:</strong> Tables for summary (source branch, merge base, conflicts, safety level).</li>
              <li><strong>ASCII Graph:</strong> Side-by-side before/after with virtual IDs (<code>new1234</code> style).</li>
              <li><strong>Explain Mode:</strong> Domain docs inline (e.g. safety rationale for HIGH vs CRITICAL).</li>
            </ul>
          </section>

          <section>
            <h2>Key Struggles & Solutions</h2>
            <ul>
              <li><strong>Diff Normalization:</strong> Early false positives due to indentation-only changes → added semantic filtering.</li>
              <li><strong>Virtual Hash Representation:</strong> Need stable identifiers without computing real SHA-1 → deterministic short hash from parent hash + file path + line change fingerprint.</li>
              <li><strong>Conflict Density Overcount:</strong> Multi-line hunk treated as multiple conflicts → collapsed contiguous ranges.</li>
              <li><strong>Safety Calibration:</strong> CRITICAL overstated for benign interactive rebases → tuned force-push weight downward.</li>
            </ul>
          </section>

          <section>
            <h2>Concrete Use Cases</h2>
            <ul>
              <li><strong>Pre-flight Rebase Audit:</strong> See rewritten commits + risk before executing.</li>
              <li><strong>CI Merge Safety Gate:</strong> Flag HIGH/CRITICAL merges for manual review.</li>
              <li><strong>Educational Onboarding:</strong> Explain mode for teaching internals (merge base, replay order).</li>
              <li><strong>Detached Head Recovery:</strong> Snapshot system shows which commits go orphaned under reset scenarios.</li>
            </ul>
          </section>

          <section>
            <h2>Future Roadmap</h2>
            <ul>
              <li><strong>TUI:</strong> Interactive commit graph exploration (Textual) with keyboard navigation.</li>
              <li><strong>Plugin Hooks:</strong> Custom risk factors + org-specific policy scoring.</li>
              <li><strong>Heuristic Refinement:</strong> Structural diff AST for language-specific conflict minimization.</li>
              <li><strong>Batch Mode:</strong> Simulate impact across multiple branches in CI matrix.</li>
            </ul>
          </section>

          <section>
            <h2>Lessons & Trade-offs</h2>
            <ul>
              <li><strong>Read-only First:</strong> Ensured zero accidental mutations before performance tuning.</li>
              <li><strong>Explainability Matters:</strong> Users trust a risk score more when rationale surfaces inline.</li>
              <li><strong>Heuristics vs Precision:</strong> Avoided heavy full-file diff AST parsing initially for speed; extensible later via plugins.</li>
              <li><strong>Virtual Hash Design:</strong> Prefixed pseudo-hashes communicate simulation state clearly without confusion for real object IDs.</li>
            </ul>
          </section>

          <section className="border-t pt-8 not-prose">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Interested in safer Git workflows?</h3>
              <p className="text-muted-foreground mb-6">
                I build tooling that makes complex version control operations transparent and teachable.
              </p>
              <Button asChild>
                <Link href="/#contact">Let’s talk</Link>
              </Button>
              <div className="mt-6 text-sm text-muted-foreground">
                GitHub: <Link href="https://github.com/egekaya1/GitSim" target="_blank" rel="noopener noreferrer">egekaya1/GitSim</Link> · Distribution soon: <code>pip install git-sim</code>
              </div>
            </div>
          </section>
        </ContentArticle>
      </div>
    </main>
  )
}
