import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { ContentArticle } from "@/components/content-article"
import { PostHeader } from "@/components/post-header"

export const metadata: Metadata = {
  title: "GitSimulator: Production-Grade Git Simulation Engine | Ege Kaya",
  description:
    "Deep dive into GitSimulator: a sophisticated Python CLI with 135+ tests, automatic PyPI releases, interactive TUI, plugin architecture, and advanced conflict prediction. Dry-run dangerous Git commands with visual feedback before executing them.",
  openGraph: {
    title: "GitSimulator: Flight Simulator for Git Commands",
    description:
      "Production-ready Git simulation engine with 135+ tests, CI/CD pipeline, conflict prediction, safety analysis, and interactive TUI.",
    url: "https://egekaya.dev/blog/git-sim-interactive-git-visualization",
    images: [
      {
        url: "https://egekaya.dev/og/git-sim.png",
        width: 1200,
        height: 630,
        alt: "GitSimulator commit graph visualization"
      }
    ]
  },
}

export default function BlogPostGitSimulator() {
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
            title="GitSimulator: Production-Grade Git Simulation Engine"
            badges={["🏆 GitKon 2025 3rd Place", "Python 3.11+", "Dulwich", "Rich", "Typer", "Textual", "135+ Tests"]}
            date={{ label: "November 23, 2025", dateTime: "2025-11-23" }}
            readingTime="22 min read"
          />

          <div className="bg-amber-500/10 border-l-4 border-amber-500 p-4 mb-8 rounded-r">
            <p className="text-sm font-medium mb-2">
              <strong>Update (Dec 2025):</strong> GitSimulator won 3rd Place at the GitKon 2025 Game Jam, organized by GitKraken.
            </p>
            <details className="mt-3">
              <summary className="text-sm text-primary hover:underline cursor-pointer">
                View official announcement →
              </summary>
              <div className="mt-4 flex justify-center">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:share:7404631806588751873?collapsed=1"
                  height="541"
                  width="504"
                  frameBorder="0"
                  allowFullScreen
                  title="GitKon 2025 Game Jam Award Announcement"
                  className="max-w-full"
                />
              </div>
            </details>
          </div>

          <h2>Overview</h2>
          <p>
            <strong>GitSimulator</strong> is a production-ready Python CLI that acts as a <em>&quot;flight simulator&quot;</em> for Git commands. It simulates potentially destructive operations — <code>rebase</code>, <code>merge</code>, <code>reset</code>, <code>cherry-pick</code> — in a safe, read-only environment, providing visual before/after graphs, conflict prediction with three certainty levels (CERTAIN/LIKELY/POSSIBLE), and comprehensive safety analysis (LOW/MEDIUM/HIGH/CRITICAL). Now available on PyPI: <code>pipx install gitsimulator</code> (v1.0.1). Repository: <a href="https://github.com/egekaya1/GitSimulator" target="_blank" rel="noopener noreferrer">GitHub - GitSimulator</a>.
          </p>

          <h3>Production Highlights</h3>
          <ul>
            <li><strong>135+ Tests:</strong> Comprehensive test suite with 95%+ coverage (unit, integration, property-based)</li>
            <li><strong>Automated CI/CD:</strong> GitHub Actions pipeline for linting, type checking, testing, and PyPI releases</li>
            <li><strong>Interactive TUI:</strong> Textual-powered terminal UI with real-time command preview</li>
            <li><strong>Plugin Architecture:</strong> Extensible hook system for custom simulators, formatters, and policies</li>
            <li><strong>Pure Python Git:</strong> No <code>git</code> binary required — uses Dulwich for all operations</li>
            <li><strong>Multi-Platform:</strong> Linux, macOS, Windows support (Python 3.11, 3.12, 3.13)</li>
          </ul>

          <h2>Why Build This?</h2>
          <p>
            Git&apos;s most powerful commands are also its most dangerous. A single mistyped <code>git reset --hard</code> or poorly planned <code>git rebase</code> can rewrite history, lose work, or create conflicts that take hours to resolve. GitSimulator addresses this by:
          </p>
          <ul>
            <li><strong>Zero-Risk Preview:</strong> See exact outcomes without touching your repository</li>
            <li><strong>Conflict Forecasting:</strong> Know which files will conflict <em>before</em> starting a merge/rebase</li>
            <li><strong>Safety Guardrails:</strong> Automated risk scoring prevents catastrophic mistakes</li>
            <li><strong>Educational Value:</strong> Learn Git internals through interactive explanations</li>
            <li><strong>CI/CD Integration:</strong> Pre-validate dangerous operations in automation scripts</li>
          </ul>

          <h2>Architecture Deep Dive</h2>

          <h3>System Design</h3>
          <p>
            GitSimulator follows a clean, modular architecture with strict separation of concerns:
          </p>
          <pre><code>{`┌────────────────── CLI Layer (Typer) ──────────────────┐
│  Commands │ Options │ Parsing │ Rich Formatting      │
└───────────────────────┬───────────────────────────────┘
                        ▼
┌───────────── Simulation Dispatcher ──────────────────┐
│  • Command routing                                   │
│  • Plugin hook execution (pre/override/post)         │
│  • Result validation                                 │
└───────────────────────┬──────────────────────────────┘
                        ▼
        ┌───────────────┼───────────────┐
        ▼               ▼               ▼
   ┌─────────┐    ┌─────────┐    ┌─────────┐
   │ Rebase  │    │  Merge  │    │  Reset  │
   │Simulator│    │Simulator│    │Simulator│
   └─────────┘    └─────────┘    └─────────┘
        └───────────────┼───────────────┘
                        ▼
┌──────────────── Core Services ───────────────────────┐
│  Repository (Dulwich) │ Diff Analyzer │ Conflict    │
│                       │               │ Detector    │
└───────────────────────┬──────────────────────────────┘
                        ▼
┌────────────── Git Repository (.git/) ────────────────┐
│          Read-only access via Dulwich                │
└──────────────────────────────────────────────────────┘`}</code></pre>

          <h3>Core Components</h3>

          <h4>1. Repository Layer (<code>core/repository.py</code>)</h4>
          <p>
            Pure Python Git access via Dulwich — <strong>no git binary required</strong>:
          </p>
          <ul>
            <li><strong>Short SHA Resolution:</strong> 7+ characters with ambiguity detection</li>
            <li><strong>Relative Refs:</strong> <code>HEAD~2</code>, <code>main^</code>, etc.</li>
            <li><strong>Topological Sorting:</strong> Proper commit graph display</li>
            <li><strong>Lazy Loading:</strong> Only fetch commits needed for visualization</li>
          </ul>

          <h4>2. Simulation Engines (<code>simulation/</code>)</h4>
          <p>
            Each simulator implements a <code>BaseSimulator[T]</code> protocol:
          </p>
          <pre><code>{`class BaseSimulator(Protocol[T]):
    def validate(self) -> tuple[list[str], list[str]]:
        """Pre-flight checks → (errors, warnings)"""
    
    def simulate(self) -> T:
        """Execute simulation → typed result"""`}</code></pre>
          <ul>
            <li><strong>Rebase:</strong> Find merge base → collect commits → replay onto target → detect conflicts per commit</li>
            <li><strong>Merge:</strong> Three-way analysis (base vs ours vs theirs) → fast-forward detection → conflict accumulation</li>
            <li><strong>Reset:</strong> Mode handling (SOFT/MIXED/HARD) → working directory simulation → reflog recovery instructions</li>
            <li><strong>Cherry-Pick:</strong> Sequential commit application → cumulative conflict detection → parent preservation</li>
          </ul>

          <h4>3. Conflict Detection (<code>simulation/conflict_detector.py</code>)</h4>
          <p>
            Sophisticated heuristics engine with three certainty levels:
          </p>
          <ul>
            <li><strong>CERTAIN (90%+ accuracy):</strong> Same file, overlapping line ranges; both sides modify identical lines; binary file conflicts</li>
            <li><strong>LIKELY (70%+ accuracy):</strong> Changes within 3 lines of each other; same function/class modifications</li>
            <li><strong>POSSIBLE (50%+ accuracy):</strong> Same file modified in different sections; semantic conflicts (imports)</li>
          </ul>
          <p>
            Algorithm: For each file changed in both branches, parse diff hunks and check for overlaps, proximity, or same-file edits. False positives reduced via whitespace normalization and contiguous hunk collapsing.
          </p>

          <h4>4. Safety Analysis System</h4>
          <p>
            Aggregates weighted risk factors into danger levels:
          </p>
          <pre><code>{`risk = Σ (w_i * factor_i)

Levels:
  LOW      → Easily reversible, minimal risk
  MEDIUM   → Recoverable with reflog
  HIGH     → History rewrite, force-push required
  CRITICAL → Data loss risk, shared branch rewrite`}</code></pre>
          <p>
            Factors include: rewrite depth, force-push requirement, orphaned commits, conflict density, working tree discard magnitude.
          </p>

          <h2>Production Infrastructure</h2>

          <h3>Testing Strategy (135+ Tests)</h3>
          <ul>
            <li><strong>Unit Tests:</strong> Each component in isolation (repository, conflict detector, simulators)</li>
            <li><strong>Integration Tests:</strong> End-to-end command flows with real Git repositories</li>
            <li><strong>Property Tests:</strong> Invariant checking (graphs are DAGs, simulations idempotent)</li>
            <li><strong>Fixture-Based:</strong> Multiple repo states (linear, branched, merge commits, octopus merges)</li>
          </ul>
          <pre><code>{`pytest --cov=git_sim --cov-report=html
# Current: 95%+ coverage`}</code></pre>

          <h3>CI/CD Pipeline (GitHub Actions)</h3>
          <p>
            Automated workflow on every push:
          </p>
          <ol>
            <li><strong>Linting:</strong> Ruff for code style and formatting</li>
            <li><strong>Type Checking:</strong> MyPy with strict mode</li>
            <li><strong>Testing:</strong> pytest across Python 3.11, 3.12, 3.13 on Linux/macOS/Windows</li>
            <li><strong>Coverage:</strong> Enforce 90%+ threshold</li>
            <li><strong>PyPI Release:</strong> Automated publishing on version tags</li>
          </ol>

          <h3>Plugin Architecture</h3>
          <p>
            Extensible system with three plugin types:
          </p>
          <ul>
            <li><strong>HookPlugin:</strong> Intercept simulation lifecycle (pre/override/post)</li>
            <li><strong>SimulatorPlugin:</strong> Add custom simulation commands</li>
            <li><strong>FormatterPlugin:</strong> Custom output rendering</li>
          </ul>
          <p>
            Discovery via entry points in <code>pyproject.toml</code>:
          </p>
          <pre><code>{`[project.entry-points."git_sim.plugins"]
my_plugin = "my_package.plugin:MyPlugin"`}</code></pre>

          <h2>Interactive TUI Mode</h2>
          <p>
            Textual-powered terminal UI with:
          </p>
          <ul>
            <li>Real-time command preview as you type</li>
            <li>Keyboard navigation of commit graphs</li>
            <li>Conflict hotspot highlighting</li>
            <li>Headless mode for scripting</li>
          </ul>
          <pre><code>{`gitsim tui                    # Launch interactive mode
gitsim tui --headless         # Script-friendly output`}</code></pre>

          <h2>Educational Features</h2>
          <p>
            <code>gitsim explain &lt;command&gt;</code> provides interactive learning:
          </p>
          <ul>
            <li>📖 Plain-English explanations of Git internals</li>
            <li>🔍 Step-by-step algorithm breakdowns</li>
            <li>⚠️ Risk assessment and common pitfalls</li>
            <li>💡 Best practices and safety tips</li>
            <li>🔄 Alternative approaches</li>
          </ul>

          <h2>Real-World Example Output</h2>
          <pre><code>{`$ gitsim rebase main

Simulating: git rebase main

╭────────── Rebase Summary ───────────╮
│   Source branch       feature       │
│   Target branch       main          │
│   Merge base          abc1234       │
│   Commits to replay   3             │
│   Predicted conflicts 1             │
╰─────────────────────────────────────╯

╭────────── Safety Analysis ──────────╮
│   Danger Level           🔴 HIGH     │
│   Reversible             Yes        │
│   Force Push Required    Yes        │
╰─────────────────────────────────────╯

Before Rebase:
* abc1234 (HEAD -> feature) Add authentication
* def5678 Update config
| * 123abcd (main) Fix security bug
|/
* 789xyz0 Initial commit

After Rebase (Simulated):
* new1234' (HEAD -> feature) Add authentication
* new5678' Update config
* 123abcd (main) Fix security bug
* 789xyz0 Initial commit

          Potential Conflicts          
┏━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━┓
┃ Severity   ┃ File       ┃ Details   ┃
┡━━━━━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━━━━┩
│ CERTAIN    │ config.py  │ Lines     │
│            │            │ 45-52     │
└────────────┴────────────┴───────────┘

Recovery: git reflog to restore, git reset --hard ORIG_HEAD`}</code></pre>

          <h2>Performance Optimizations</h2>
          <ul>
            <li><strong>Lazy Graph Building:</strong> Only load commits needed for visualization</li>
            <li><strong>Diff Caching:</strong> Memoize expensive diff operations</li>
            <li><strong>Short SHA Indexing:</strong> Stop at first unique match</li>
            <li><strong>Parallel-Safe:</strong> Pure functional core, no shared state</li>
            <li><strong>Memory Efficient:</strong> Stream commits vs loading entire history</li>
          </ul>

          <h2>Key Design Decisions</h2>

          <h3>Read-Only Guarantee</h3>
          <p>
            GitSimulator <strong>never writes</strong> to your repository:
          </p>
          <ul>
            <li>Uses Dulwich&apos;s read-only API exclusively</li>
            <li>No <code>git</code> subprocess calls that modify state</li>
            <li>Simulations run entirely in memory</li>
            <li>Snapshot system uses separate <code>.git/git-sim-snapshots/</code> directory</li>
          </ul>

          <h3>Deterministic Virtual Hashes</h3>
          <p>
            Virtual commit IDs are stable across runs (derived from parent hash + tree diff fingerprint), enabling:
          </p>
          <ul>
            <li>Consistent visualization for demos/screenshots</li>
            <li>Easier mental mapping of before/after states</li>
            <li>No collision with real Git object IDs</li>
          </ul>

          <h3>Unified Command Interface</h3>
          <p>
            Three equivalent commands reduce friction:
          </p>
          <pre><code>{`gitsim rebase main
git-sim rebase main        # Dash-style (git alias friendly)
gitsimulator rebase main   # Full name

# Or unified dispatcher:
gitsim sim "rebase main --autosquash"`}</code></pre>

          <h2>Development Struggles & Solutions</h2>

          <h3>1. Indentation Noise in Conflict Detection</h3>
          <p>
            <strong>Problem:</strong> Early heuristic flagged pure whitespace changes as conflicts.
          </p>
          <p>
            <strong>Solution:</strong> Added semantic diff filtering with whitespace normalization and comment-only diff detection.
          </p>

          <h3>2. Virtual Hash Collisions</h3>
          <p>
            <strong>Problem:</strong> First design used truncated SHA-1, causing occasional collisions.
          </p>
          <p>
            <strong>Solution:</strong> Switched to deterministic hash from <code>parent_sha + file_path + hunk_fingerprint</code> with <code>vreb</code> prefix for clarity.
          </p>

          <h3>3. Safety Scoring Calibration</h3>
          <p>
            <strong>Problem:</strong> Force-push weight produced too many HIGH scores for benign operations.
          </p>
          <p>
            <strong>Solution:</strong> Tuned weights using real-world repositories, exposed factors in explain mode for transparency.
          </p>

          <h3>4. Binary File Handling</h3>
          <p>
            <strong>Problem:</strong> Lacked diff granularity for binary files (images, PDFs).
          </p>
          <p>
            <strong>Solution:</strong> Mark binary conflicts as CERTAIN with explicit advisory to inspect manually.
          </p>

          <h2>Concrete Use Cases</h2>

          <h3>1. Pre-Flight Rebase Audit</h3>
          <p>
            Before running <code>git rebase main</code> on a 50-commit feature branch, simulate to see:
          </p>
          <ul>
            <li>Which commits will be rewritten (new SHAs)</li>
            <li>Predicted conflicts per commit with line ranges</li>
            <li>Safety level (HIGH if force-push required)</li>
          </ul>

          <h3>2. CI Merge Gate</h3>
          <p>
            In GitHub Actions:
          </p>
          <pre><code>{`- name: Simulate merge
  run: |
    gitsim merge $\{{ github.head_ref }}
    if [[ $(gitsim merge $\{{ github.head_ref }} --json | jq -r '.safety.level') == "CRITICAL" ]]; then
      echo "Merge too risky - manual review required"
      exit 1
    fi`}</code></pre>

          <h3>3. Educational Onboarding</h3>
          <p>
            New hires learn Git internals via <code>gitsim explain</code>:
          </p>
          <pre><code>{`gitsim explain rebase     # How rebase works internally
gitsim explain merge      # Three-way merge algorithm
gitsim explain reset      # SOFT vs MIXED vs HARD`}</code></pre>

          <h3>4. Complex Cherry-Pick Planning</h3>
          <p>
            Simulate picking 10 commits from <code>feature-a</code> onto <code>hotfix</code>:
          </p>
          <pre><code>{`gitsim cherry-pick abc123 def456 789xyz ... --onto hotfix
# Shows step-by-step conflicts and new commit order`}</code></pre>

          <h2>Comparison with Alternatives</h2>

          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>GitSimulator</th>
                <th>git log --graph</th>
                <th>GitKraken</th>
                <th>lazygit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Simulation</strong></td>
                <td>✅ Full</td>
                <td>❌ No</td>
                <td>❌ No</td>
                <td>❌ No</td>
              </tr>
              <tr>
                <td><strong>Conflict Prediction</strong></td>
                <td>✅ 3 levels</td>
                <td>❌ No</td>
                <td>⚠️ Basic</td>
                <td>❌ No</td>
              </tr>
              <tr>
                <td><strong>Safety Analysis</strong></td>
                <td>✅ Yes</td>
                <td>❌ No</td>
                <td>❌ No</td>
                <td>❌ No</td>
              </tr>
              <tr>
                <td><strong>Educational Mode</strong></td>
                <td>✅ Yes</td>
                <td>❌ No</td>
                <td>❌ No</td>
                <td>❌ No</td>
              </tr>
              <tr>
                <td><strong>No Git Binary</strong></td>
                <td>✅ Pure Python</td>
                <td>❌ Requires Git</td>
                <td>❌ Requires Git</td>
                <td>❌ Requires Git</td>
              </tr>
              <tr>
                <td><strong>Plugin System</strong></td>
                <td>✅ Yes</td>
                <td>❌ No</td>
                <td>✅ Yes</td>
                <td>❌ No</td>
              </tr>
              <tr>
                <td><strong>SSH-Friendly</strong></td>
                <td>✅ Yes</td>
                <td>✅ Yes</td>
                <td>❌ GUI only</td>
                <td>✅ Yes</td>
              </tr>
              <tr>
                <td><strong>Automated CI Tests</strong></td>
                <td>✅ 135+</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
            </tbody>
          </table>

          <h2>Installation & Quick Start</h2>
          <pre><code>{`# Install from PyPI (v1.0.1)
pipx install gitsimulator

# All three commands work identically:
gitsim rebase main
git-sim rebase main
gitsimulator rebase main

# Preview a merge with conflict detection
gitsim merge feature-branch

# Learn how Git commands work
gitsim explain rebase

# Save repository state for experiments
gitsim snapshot create before-rebase`}</code></pre>

          <h2>Future Roadmap</h2>
          <ul>
            <li><strong>✅ Completed:</strong> Interactive TUI, plugin system, 135+ tests, PyPI distribution, CI/CD automation</li>
            <li><strong>🚧 In Progress:</strong> AST-based conflict refinement for language-specific detection</li>
            <li><strong>📋 Planned:</strong> Batch mode for CI matrix analysis, custom policy scoring, integration with Git hosting APIs (GitHub/GitLab)</li>
          </ul>

          <h2>Lessons Learned</h2>

          <h3>Heuristics First, Precision Later</h3>
          <p>
            Fast approximations unlock value early. We shipped conflict detection with 70%+ accuracy instead of waiting for 95% precision via AST parsing. Users adopted it immediately, and we can layer in deeper analysis later.
          </p>

          <h3>Explainability Drives Trust</h3>
          <p>
            Users trust safety scores more when rationale is explicit. The <code>explain</code> mode showing <em>why</em> a rebase is HIGH risk (e.g., &quot;3 commits rewritten + force-push required&quot;) builds confidence.
          </p>

          <h3>Testing Infrastructure Pays Off</h3>
          <p>
            135+ tests caught edge cases during plugin development (octopus merges, detached HEAD, ambiguous short SHAs). Automated CI prevented regressions across 6+ Python/OS combinations.
          </p>

          <h3>Pure Python = Portability Win</h3>
          <p>
            Using Dulwich instead of shelling out to <code>git</code> binary eliminated platform-specific bugs (Windows path handling, Git version mismatches) and enabled SSH-only environments.
          </p>

          <h2>Metrics & Impact</h2>
          <ul>
            <li><strong>PyPI Downloads:</strong> Tracked via <code>pepy.tech</code> (published v1.0.1 November 2025)</li>
            <li><strong>Test Coverage:</strong> 95%+ across 135+ tests</li>
            <li><strong>CI Success Rate:</strong> 99%+ (GitHub Actions badge)</li>
            <li><strong>Supported Platforms:</strong> Linux, macOS, Windows × Python 3.11/3.12/3.13</li>
            <li><strong>Educational Reach:</strong> Used in university Git workshops (anecdotal)</li>
          </ul>

          <h2>Technical Debt & Trade-offs</h2>

          <h3>Current Limitations</h3>
          <ul>
            <li><strong>No Stash Simulation:</strong> Planned for v1.1.0</li>
            <li><strong>Basic Rename Detection:</strong> Relies on Dulwich heuristics (70% threshold)</li>
            <li><strong>English-Only Explanations:</strong> I18n deferred for post-1.0</li>
          </ul>

          <h3>Intentional Constraints</h3>
          <ul>
            <li><strong>Read-Only:</strong> Never execute simulations automatically (safety by design)</li>
            <li><strong>Terminal-First:</strong> No GUI planned (SSH-friendly focus)</li>
            <li><strong>Heuristic Conflicts:</strong> Not 100% accurate (explicitly documented)</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            GitSimulator demonstrates how production-grade tooling (comprehensive testing, CI/CD, plugin architecture) can transform a developer experience problem into a polished open-source product. By combining Git internals expertise, sophisticated heuristics, and thoughtful UX (Rich formatting, interactive TUI), the project achieves its goal: making dangerous Git commands safe to explore.
          </p>

          <p className="text-muted-foreground text-sm mt-12">
            GitHub: <a href="https://github.com/egekaya1/GitSimulator" target="_blank" rel="noopener noreferrer">egekaya1/GitSimulator</a> · PyPI: <code>pipx install gitsimulator</code> (v1.0.1) · CI: <a href="https://github.com/egekaya1/GitSimulator/actions" target="_blank" rel="noopener noreferrer">GitHub Actions</a>
          </p>
        </ContentArticle>
      </div>
    </main>
  )
}
