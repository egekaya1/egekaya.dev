import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { ContentArticle } from "@/components/content-article"
import { PostHeader } from "@/components/post-header"

export const metadata: Metadata = {
  title: "Git-Sim: Simulating Rebase, Merge, Reset & Cherry-Pick Safely | Ege Kaya",
  description:
    "Deep dive into Git-Sim internals: commit graph modeling, conflict prediction heuristics, safety scoring, virtual hash generation, and snapshot/restore — a Python CLI for safe Git operation exploration.",
  openGraph: {
    title: "Git-Sim: Safe Git Operation Simulation",
    description:
      "Rebase, merge, reset & cherry-pick simulation with before/after commit graphs, conflict prediction, and safety scoring.",
    url: "https://egekaya.dev/blog/git-sim-interactive-git-visualization",
    images: [
      {
        url: "https://egekaya.dev/og/git-sim.png",
        width: 1200,
        height: 630,
        alt: "Git-Sim simulated commit graph"
      }
    ]
  },
}

export default function BlogPostGitSim() {
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
            title="Git-Sim: Simulating Rebase, Merge, Reset & Cherry-Pick Safely"
            badges={["Git", "Simulation", "Python", "CLI"]}
            date={{ label: "November 23, 2025", dateTime: "2025-11-23" }}
            readingTime="18 min read"
          />

          <h2>Overview</h2>
          <p>
            <strong>Git-Sim</strong> is a Python CLI that <em>simulates</em> potentially destructive Git operations — <code>rebase</code>, <code>merge</code>, <code>reset</code>, <code>cherry-pick</code> — without mutating your repository. It renders a before/after commit graph, predicts conflicts, scores safety (LOW / MEDIUM / HIGH / CRITICAL), and explains why. Upcoming distribution: <code>pip install git-sim</code> (soon). Public link only: <a href="https://github.com/egekaya1/GitSim" target="_blank" rel="noopener noreferrer">GitHub Repository</a>.
          </p>

          <h2>Why Build This?</h2>
          <ul>
            <li><strong>No Preview:</strong> Git provides minimal foresight before history rewrites (rebase/reset).</li>
            <li><strong>Surprise Conflicts:</strong> Users discover conflicts mid-operation, after ref changes start.</li>
            <li><strong>Onboarding Cost:</strong> Understanding merge base, replay order, force push implications is non-trivial.</li>
            <li><strong>CI Gap:</strong> Pipelines cannot pre-score merges for safety risk.</li>
          </ul>

          <h2>Core Abstractions</h2>
          <ol>
            <li><strong>Repository Wrapper:</strong> Read-only Dulwich interface for commits, trees, refs, diff objects.</li>
            <li><strong>CommitGraph:</strong> Immutable structure (nodes carry parents, annotations for HEAD/tracked refs).</li>
            <li><strong>Simulation Engines:</strong> Each operation has <code>prepare()</code> (analysis) and <code>simulate()</code> (virtual graph projection).</li>
            <li><strong>ConflictDetector:</strong> Predicts likely conflicts pre-run using diff hunk overlap + structural change heuristics.</li>
            <li><strong>SafetyAnalyzer:</strong> Aggregates risk factors into level classification.</li>
            <li><strong>Snapshot:</strong> Captures ref map + index fingerprint for reversibility checks.</li>
            <li><strong>Dispatcher:</strong> Parses unified command string: <code>git-sim sim &quot;rebase main --autosquash&quot;</code>.</li>
          </ol>

          <h2>Simulation Flow</h2>
          <pre><code>{`plan = parse(command_string)
repo = Repository.open(cwd)
base_graph = Graph.build(repo)
engine = select(plan.operation)
analysis = engine.prepare(repo, plan)
conflicts = ConflictDetector.predict(repo, analysis)
virtual_graph = engine.simulate(base_graph, analysis, conflicts)
safety = SafetyAnalyzer.score(plan, analysis, conflicts, base_graph, virtual_graph)
return SimulationResult(before=base_graph, after=virtual_graph, conflicts=conflicts, safety=safety)`}</code></pre>
          <p>
            The <code>virtual_graph</code> uses <strong>virtual hashes</strong> (deterministic short IDs derived from parent hash + change fingerprint) for rewritten commits, avoiding collision with real object IDs.
          </p>

          <h2>Conflict Prediction Heuristics</h2>
          <ul>
            <li><strong>Line Overlap:</strong> Modified line ranges intersect for same file.</li>
            <li><strong>Delete vs Modify:</strong> One side deletes, other edits — guaranteed conflict.</li>
            <li><strong>Rename + Modify:</strong> Path changed on both sides with content edits.</li>
            <li><strong>Binary Ambiguity:</strong> Binary file changes flagged uncertain → safety penalty.</li>
            <li><strong>Mode Changes:</strong> Executable bit / symlink toggles combined with edits raise risk.</li>
          </ul>
          <p>
            False positives reduced by whitespace normalization + collapsing contiguous hunks. Language-aware refinement (AST) deferred for future plug-ins.
          </p>

          <h2>Safety Scoring Model</h2>
          <pre><code>{`risk = Σ (w_i * factor_i)
if risk < 25: LOW
elif risk < 50: MEDIUM
elif risk < 75: HIGH
else: CRITICAL`}</code></pre>
          <ul>
            <li><strong>Rewrite Depth:</strong> Count of commits with virtual hashes.</li>
            <li><strong>Force Push Required:</strong> Non-fast-forward remote branch update.</li>
            <li><strong>Orphan Risk:</strong> Commits becoming unreachable post-reset.</li>
            <li><strong>Conflict Density:</strong> Conflicts ÷ replayed commits.</li>
            <li><strong>Working Tree Loss:</strong> Staged/unstaged discard under reset modes.</li>
          </ul>

          <h2>Design Choices</h2>
          <ul>
            <li><strong>Read-Only First:</strong> All simulations avoid ref mutation until explicit execute flag (future).</li>
            <li><strong>Deterministic Virtual IDs:</strong> Stable visualization across runs aids mental mapping.</li>
            <li><strong>Unified CLI:</strong> Reduces memorization overhead for subcommands.</li>
            <li><strong>Explain Mode:</strong> Surfaces internal rationale behind safety classification.</li>
          </ul>

          <h2>Example Rebase Output (Conceptual)</h2>
          <pre><code>{`Before:
* abc1234 (HEAD -> feature) Add caching layer
* def5678 Refactor config parsing
| * 9fed321 (main) Fix edge case
|/
* 789xyz0 Initial commit

After (Simulated):
* vreb123 (HEAD -> feature) Add caching layer
* vreb567 Refactor config parsing
* 9fed321 (main) Fix edge case
* 789xyz0 Initial commit

Predicted Conflicts: 1 (config.py lines 40-55 overlap)`}</code></pre>

          <h2>Key Struggles & Solutions</h2>
          <ul>
            <li><strong>Indentation Noise:</strong> Early heuristic flagged pure whitespace as conflict → added semantic diff filtering.</li>
            <li><strong>Virtual Hash Collisions:</strong> First design used truncated SHA1 → switched to parent + path + hunk fingerprint.</li>
            <li><strong>Over-weighting Force Push:</strong> Produced frequent HIGH scores → tuned weights & exposed factors in explain mode.</li>
            <li><strong>Binary Handling:</strong> Lacked diff granularity → now marks uncertain with explicit advisory.</li>
          </ul>

          <h2>Concrete Use Cases</h2>
          <ul>
            <li><strong>Pre-flight Rebase Audit:</strong> Identify rewritten commits and conflict density before running.</li>
            <li><strong>CI Merge Gate:</strong> Prevents merging branches with CRITICAL safety score.</li>
            <li><strong>Educational Tool:</strong> New hires learn Git internals via explain mode.</li>
            <li><strong>Reset Planning:</strong> Visualize commit orphaning under soft/mixed/hard strategies.</li>
          </ul>

          <h2>Performance (Preliminary)</h2>
          <ul>
            <li>Graph build ~12ms / 1K commits (TBD refine).</li>
            <li>Diff heuristic linear in changed files.</li>
            <li>Virtual hash generation constant time per commit.</li>
            <li>Memory bounded by commit metadata slice + diff summary.</li>
          </ul>

            <h2>Future Roadmap</h2>
            <ul>
              <li><strong>Interactive TUI:</strong> Keyboard navigation of virtual graph & conflict hotspots.</li>
              <li><strong>Plugin System:</strong> Custom policy scoring & language-specific conflict detectors.</li>
              <li><strong>Batch Mode:</strong> Analyze multiple branches matrix-style in CI.</li>
              <li><strong>AST Heuristics:</strong> Deeper semantic merge conflict reduction.</li>
            </ul>

          <h2>Lessons & Trade-offs</h2>
          <ul>
            <li><strong>Heuristic First:</strong> Fast approximations unlock value early; deeper precision can layer in later.</li>
            <li><strong>Explainability Drives Trust:</strong> Users adopt scores faster when rationale is explicit.</li>
            <li><strong>Unified Command Surface:</strong> Reduces friction compared to separate subcommands.</li>
          </ul>

          <h2>Next Steps</h2>
          <p>
            Ship initial PyPI release (<code>pip install git-sim</code>), finalize TUI for interactive exploration, calibrate safety weights with real-world repositories, and publish plug-in API spec.
          </p>

          <p className="text-muted-foreground text-sm mt-12">
            GitHub: <a href="https://github.com/egekaya1/GitSim" target="_blank" rel="noopener noreferrer">egekaya1/GitSim</a> · Distribution soon: <code>pip install git-sim</code>
          </p>
        </ContentArticle>
      </div>
    </main>
  )
}
