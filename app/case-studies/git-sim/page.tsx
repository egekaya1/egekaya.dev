import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, GitBranch, Shield, Zap, FileDiff, Trophy } from "lucide-react"
import { ContentArticle } from "@/components/content-article"
import { PostHeader } from "@/components/post-header"

export const metadata: Metadata = {
  title: "Case Study: GitSimulator — Production-Grade Git Simulation Engine | Ege Kaya",
  description:
    "GitSimulator: Production-ready Python CLI with 135+ tests, automated CI/CD, interactive TUI, and plugin architecture. Safely simulates rebase, merge, reset & cherry-pick with advanced conflict prediction and safety analysis.",
  openGraph: {
    title: "Case Study: GitSimulator — Flight Simulator for Git Commands",
    url: "https://egekaya.dev/case-studies/git-sim",
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

export default function CaseStudyGitSimulator() {
  const readingTime = "25 min read"
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
            title="Case Study: GitSimulator — Production-Grade Git Simulation"
            badges={["🏆 GitKon 2025 3rd Place", "Python 3.11+", "Dulwich", "Rich", "Textual", "135+ Tests", "CI/CD", "PyPI"]}
            readingTime={readingTime}
          />

          <p className="lead">
            GitSimulator is a <strong>production-ready Python CLI</strong> that acts as a &quot;flight simulator&quot; for Git commands. It simulates dangerous Git operations — rebase, merge, reset, cherry-pick — in a safe, read-only environment with <strong>135+ comprehensive tests</strong>, <strong>automated CI/CD pipelines</strong>, <strong>interactive TUI</strong>, and <strong>extensible plugin architecture</strong>. Now available on PyPI: <code>pipx install gitsimulator</code> (v1.0.1). Repository: <a href="https://github.com/egekaya1/GitSimulator" target="_blank" rel="noopener noreferrer">GitHub - GitSimulator</a>.
          </p>

          {/* Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 not-prose">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GitBranch className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">135+</div>
                    <div className="text-sm text-muted-foreground">Test Suite</div>
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
                    <div className="text-2xl font-bold">3 Levels</div>
                    <div className="text-sm text-muted-foreground">Conflict Prediction</div>
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
                    <div className="text-2xl font-bold">95%+</div>
                    <div className="text-sm text-muted-foreground">Test Coverage</div>
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
                    <div className="text-2xl font-bold">v1.0.1</div>
                    <div className="text-sm text-muted-foreground">PyPI Release</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/10">
                    <Trophy className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">3rd Place</div>
                    <div className="text-sm text-muted-foreground">GitKon Game Jam 2025</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <section>
            <h2>Motivation & Pain Points</h2>
            <p>
              Git&apos;s most powerful commands (<code>rebase</code>, <code>merge</code>, <code>reset</code>, <code>cherry-pick</code>) are also its most <strong>dangerous</strong>. One wrong move can rewrite history, lose work, or create conflicts that take hours to resolve. GitSimulator addresses the fundamental problem: <strong>Git provides no preview of destructive operations before execution</strong>.
            </p>
            <ul>
              <li><strong>Zero Foresight:</strong> No way to see exact outcome before running commands like <code>git reset --hard</code> or <code>git rebase</code></li>
              <li><strong>Surprise Conflicts:</strong> Users only discover conflicts mid-operation, after refs have already changed</li>
              <li><strong>Steep Learning Curve:</strong> Understanding merge bases, replay ordering, force-push implications, and detached HEAD states is non-trivial</li>
              <li><strong>CI/CD Risk:</strong> Automated pipelines cannot validate dangerous Git operations before execution</li>
              <li><strong>Team Onboarding:</strong> New developers lack safe environments to experiment with advanced Git features</li>
            </ul>
            <p>
              <strong>GitSimulator&apos;s Solution:</strong> A safe, read-only simulation environment with visual feedback, conflict prediction, safety analysis, and educational explanations—all backed by production-grade infrastructure (135+ tests, CI/CD, plugin architecture).
            </p>
          </section>

          <section>
            <h2>Recognition</h2>
            <p>
              GitSimulator was awarded <strong>3rd Place at GitKon Game Jam 2025</strong>, hosted by GitKraken. The competition challenged developers to build games or tools that make Git more playful, turning Git&apos;s notorious pain points into engaging mechanics. GitSimulator was recognized for its innovative approach to Git visualization, educational impact through safe command exploration, and focus on preventing costly mistakes in production environments. The project stood out for combining technical rigor (135+ tests, automated CI/CD) with practical utility (conflict prediction, safety analysis) and educational value (interactive TUI, explain mode).
            </p>
          </section>

          <section>
            <h2>Architecture Overview</h2>
            <h3>Production-Grade System Design</h3>
            <p>
              GitSimulator follows a clean, modular architecture with strict separation of concerns and production-ready infrastructure:
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
            <ol>
              <li><strong>Repository Layer (<code>core/repository.py</code>):</strong> Pure Python Git access via Dulwich—no <code>git</code> binary required. Features short SHA resolution (7+ chars), relative refs (<code>HEAD~2</code>), topological sorting, and lazy loading for performance.</li>
              <li><strong>Simulation Engines (<code>simulation/</code>):</strong> Each implements <code>BaseSimulator[T]</code> protocol with <code>validate()</code> and <code>simulate()</code> methods. Covers rebase, merge, reset, cherry-pick with step-by-step conflict tracking.</li>
              <li><strong>Conflict Detection (<code>simulation/conflict_detector.py</code>):</strong> Three-level heuristics (CERTAIN 90%+, LIKELY 70%+, POSSIBLE 50%+) analyzing diff hunks, line overlaps, and structural changes.</li>
              <li><strong>Safety Analysis System:</strong> Weighted risk scoring (LOW/MEDIUM/HIGH/CRITICAL) considering rewrite depth, force-push requirements, orphaned commits, and conflict density.</li>
              <li><strong>Plugin Architecture (<code>plugins/</code>):</strong> Hook, Simulator, and Formatter plugins discovered via entry points. Enables custom simulators, output formats, and policy enforcement.</li>
              <li><strong>Interactive TUI (<code>tui/app.py</code>):</strong> Textual-powered terminal UI with real-time command preview, keyboard navigation, and headless mode for scripting.</li>
              <li><strong>Snapshot System (<code>snapshot.py</code>):</strong> Save/restore repository states in separate <code>.git/git-sim-snapshots/</code> directory for safe experimentation.</li>
            </ol>

            <h3>Testing Infrastructure (135+ Tests)</h3>
            <ul>
              <li><strong>Unit Tests:</strong> Isolated component testing (repository, conflict detector, each simulator)</li>
              <li><strong>Integration Tests:</strong> End-to-end command flows with real Git repository fixtures</li>
              <li><strong>Property Tests:</strong> Invariant checking (graphs are DAGs, simulations idempotent, no repo mutations)</li>
              <li><strong>Fixture-Based:</strong> Multiple repo states (linear history, branched, merge commits, octopus merges, detached HEAD)</li>
              <li><strong>Coverage:</strong> 95%+ via pytest with HTML reports</li>
            </ul>

            <h3>CI/CD Pipeline (GitHub Actions)</h3>
            <p>
              Automated workflow on every push and pull request:
            </p>
            <ol>
              <li><strong>Code Quality:</strong> Ruff linting and formatting checks</li>
              <li><strong>Type Safety:</strong> MyPy strict mode type checking</li>
              <li><strong>Cross-Platform Testing:</strong> pytest across Python 3.11/3.12/3.13 on Linux/macOS/Windows</li>
              <li><strong>Coverage Enforcement:</strong> Require 90%+ test coverage</li>
              <li><strong>Automated Releases:</strong> PyPI publishing on version tags with automated changelog generation</li>
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
            <h2>Advanced Conflict Detection Engine</h2>
            <p>GitSimulator’s conflict detection uses sophisticated heuristics to predict merge/rebase conflicts <em>before</em> execution, with three certainty levels:</p>
            
            <h3>Detection Levels</h3>
            <ul>
              <li><strong>CERTAIN (90%+ accuracy):</strong> Same file with overlapping line ranges; both sides modify identical lines; binary file conflicts; delete vs modify scenarios</li>
              <li><strong>LIKELY (70%+ accuracy):</strong> Changes within 3 lines of each other; same function/class modifications; high-churn areas; mode changes combined with content edits</li>
              <li><strong>POSSIBLE (50%+ accuracy):</strong> Same file modified in different sections; semantic conflicts (import changes, dependency updates)</li>
            </ul>
            
            <h3>Detection Algorithm</h3>
            <pre><code>{`for each file changed in OURS:
    if file changed in THEIRS:
        parse diff hunks (line ranges + content)
        for each hunk_ours:
            for each hunk_theirs:
                if hunks_overlap(hunk_ours, hunk_theirs):
                    → CERTAIN conflict (line ranges intersect)
                elif hunks_nearby(hunk_ours, hunk_theirs, threshold=3):
                    → LIKELY conflict (within 3 lines)
                else:
                    → POSSIBLE conflict (same file, different sections)
                    
Apply false positive reduction:
  - Normalize whitespace (tabs/spaces, trailing)
  - Collapse contiguous hunks
  - Filter comment-only diffs
  - Detect rename patterns`}</code></pre>

            <h3>Edge Cases Handled</h3>
            <ul>
              <li><strong>Binary Files:</strong> Marked CERTAIN with advisory for manual inspection</li>
              <li><strong>Renames + Modifications:</strong> Path changes on both sides detected via similarity heuristics</li>
              <li><strong>Mode Changes:</strong> Executable bit/symlink toggles flagged when combined with content edits</li>
              <li><strong>Octopus Merges:</strong> Multi-parent ambiguity triggers structural warnings</li>
            </ul>
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
            <h2>Performance & Optimization</h2>
            <ul>
              <li><strong>Lazy Graph Building:</strong> Only load commits needed for visualization (not entire history)</li>
              <li><strong>Diff Caching:</strong> Memoize expensive diff operations within simulation session</li>
              <li><strong>Short SHA Indexing:</strong> Early abort on first unique match (7+ chars)</li>
              <li><strong>Parallel-Safe Design:</strong> Pure functional core with no shared mutable state</li>
              <li><strong>Memory Efficiency:</strong> Stream commits instead of loading all into memory</li>
              <li><strong>Cross-Platform:</strong> Tested on Linux, macOS, Windows across Python 3.11/3.12/3.13</li>
            </ul>
            
            <h3>Production Metrics</h3>
            <ul>
              <li><strong>Test Coverage:</strong> 95%+ across 135+ comprehensive tests</li>
              <li><strong>CI Success Rate:</strong> 99%+ (tracked via GitHub Actions badge)</li>
              <li><strong>PyPI Distribution:</strong> v1.0.1 published November 2025</li>
              <li><strong>Supported Platforms:</strong> Linux, macOS, Windows × Python 3.11/3.12/3.13</li>
              <li><strong>Dependencies:</strong> Minimal (Dulwich, Rich, Typer, Textual)</li>
              <li><strong>Package Size:</strong> Lightweight CLI with no Git binary dependency</li>
            </ul>
          </section>

          <section>
            <h2>Developer Experience & Modern CLI</h2>
            
            <h3>Unified Command Interface</h3>
            <p>Three equivalent commands reduce memorization overhead:</p>
            <pre><code>{`gitsim rebase main
git-sim rebase main        # Dash-style (git alias friendly)
gitsimulator rebase main   # Full package name

# Unified dispatcher for natural syntax:
gitsim sim "rebase main --autosquash"`}</code></pre>

            <h3>Rich Terminal Output</h3>
            <ul>
              <li><strong>Summary Tables:</strong> Source/target branches, merge base, commit counts, conflict predictions</li>
              <li><strong>Safety Panels:</strong> Color-coded danger levels (🟢 LOW, 🟡 MEDIUM, 🟠 HIGH, 🔴 CRITICAL)</li>
              <li><strong>ASCII Commit Graphs:</strong> Side-by-side before/after visualization with branch topology</li>
              <li><strong>Conflict Tables:</strong> Severity, file paths, line ranges in structured format</li>
              <li><strong>Recovery Instructions:</strong> Step-by-step undo commands (<code>git reflog</code>, <code>git reset</code>)</li>
            </ul>

            <h3>Interactive TUI Mode</h3>
            <p>Textual-powered interface with:</p>
            <ul>
              <li>Real-time command preview as you type</li>
              <li>Keyboard navigation of commit graphs (arrow keys, vim bindings)</li>
              <li>Conflict hotspot highlighting</li>
              <li>Headless mode for CI/scripting: <code>gitsim tui --headless</code></li>
            </ul>

            <h3>Educational Mode</h3>
            <p><code>gitsim explain &lt;command&gt;</code> provides interactive learning:</p>
            <ul>
              <li>📖 Plain-English explanations of Git internals</li>
              <li>🔍 Step-by-step algorithm breakdowns</li>
              <li>⚠️ Risk assessment and common pitfalls</li>
              <li>💡 Best practices and safety tips</li>
              <li>🔄 Alternative approaches (merge vs rebase, reset modes)</li>
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
            <h2>Real-World Use Cases</h2>
            
            <h3>1. Pre-Flight Rebase Audit</h3>
            <p>Before running <code>git rebase main</code> on a 50-commit feature branch:</p>
            <pre><code>{`gitsim rebase main

# Output shows:
# - 50 commits will be rewritten (new SHAs)
# - 3 CERTAIN conflicts in config.py, auth.py
# - HIGH safety level (force-push required)
# - Recovery: git reflog + git reset --hard ORIG_HEAD`}</code></pre>

            <h3>2. CI/CD Merge Safety Gate</h3>
            <p>GitHub Actions workflow:</p>
            <pre><code>{`- name: Validate merge safety
  run: |
    gitsim merge $\{{ github.head_ref }} --json > result.json
    SAFETY=$(jq -r '.safety.level' result.json)
    if [[ "$SAFETY" == "CRITICAL" ]]; then
      echo "::error::Merge too risky - manual review required"
      exit 1
    fi`}</code></pre>

            <h3>3. Team Onboarding & Education</h3>
            <p>New developers learn Git internals safely:</p>
            <pre><code>{`gitsim explain rebase     # How rebase works internally
gitsim explain merge      # Three-way merge algorithm
gitsim explain reset      # SOFT vs MIXED vs HARD modes

# Then experiment with snapshots:
gitsim snapshot create before-rebase
gitsim rebase main
# If confused, restore:
gitsim snapshot restore before-rebase`}</code></pre>

            <h3>4. Complex Cherry-Pick Planning</h3>
            <p>Picking 10 commits from <code>feature-a</code> onto <code>hotfix</code>:</p>
            <pre><code>{`gitsim cherry-pick abc123 def456 789xyz ... --onto hotfix

# Shows:
# - Step-by-step conflict prediction for each commit
# - New commit order and SHAs
# - Cumulative conflict areas`}</code></pre>

            <h3>5. Dangerous Reset Scenarios</h3>
            <p>Visualize impact before discarding work:</p>
            <pre><code>{`gitsim reset HEAD~5 --hard

# CRITICAL warning:
# - 5 commits will become orphaned
# - 12 files in working tree will be lost
# - Staged changes discarded (3 files)
# - Recovery possible via reflog for 30 days`}</code></pre>
          </section>

          <section>
            <h2>Roadmap & Evolution</h2>
            
            <h3>✅ Completed (v1.0.1)</h3>
            <ul>
              <li>Interactive TUI with Textual framework</li>
              <li>Plugin system (Hook, Simulator, Formatter plugins)</li>
              <li>135+ comprehensive test suite with 95%+ coverage</li>
              <li>Automated CI/CD pipeline (linting, type checking, multi-platform testing)</li>
              <li>PyPI distribution with automated releases</li>
              <li>Educational explain mode for all major commands</li>
              <li>Snapshot/restore system for safe experimentation</li>
            </ul>

            <h3>🛠️ In Progress</h3>
            <ul>
              <li>AST-based conflict refinement for language-specific detection (Python, JavaScript, TypeScript)</li>
              <li>Stash simulation support</li>
              <li>Internationalization (i18n) for explain mode</li>
            </ul>

            <h3>📋 Planned (v1.1+)</h3>
            <ul>
              <li>Batch mode for CI matrix analysis (test multiple branch combinations)</li>
              <li>Custom policy scoring plugins for organization-specific rules</li>
              <li>Integration with Git hosting APIs (GitHub, GitLab, Bitbucket)</li>
              <li>Web-based visualization export (HTML reports)</li>
              <li>Performance profiling mode for large repositories (10K+ commits)</li>
            </ul>
          </section>

          <section>
            <h2>Lessons Learned & Engineering Insights</h2>
            
            <h3>Heuristics First, Precision Later</h3>
            <p>
              Fast approximations unlock value early. We shipped conflict detection with 70%+ accuracy instead of waiting for 95% precision via AST parsing. Users adopted it immediately, and we can layer in deeper analysis later. <strong>Key insight:</strong> &quot;Good enough&quot; solutions that ship beat perfect solutions that don&apos;t.
            </p>

            <h3>Explainability Drives Adoption</h3>
            <p>
              Users trust safety scores more when rationale is explicit. The <code>explain</code> mode showing <em>why</em> a rebase is HIGH risk (e.g., &quot;3 commits rewritten + force-push required to origin/main&quot;) builds confidence. <strong>Lesson:</strong> Transparency &gt; black-box algorithms.
            </p>

            <h3>Testing Infrastructure Pays Dividends</h3>
            <p>
              135+ tests caught edge cases during plugin development that would have been production bugs:
            </p>
            <ul>
              <li>Octopus merges (multiple parents) breaking graph traversal</li>
              <li>Detached HEAD states causing ref resolution failures</li>
              <li>Ambiguous short SHAs (e.g., <code>abc</code> matching both <code>abc1234</code> and <code>abc5678</code>)</li>
              <li>Windows path handling differences (backslash vs forward slash)</li>
            </ul>
            <p>
              <strong>Investment:</strong> Writing comprehensive tests takes time upfront but prevents exponential debugging costs later.
            </p>

            <h3>Pure Python = Portability Win</h3>
            <p>
              Using Dulwich instead of shelling out to <code>git</code> binary eliminated platform-specific bugs:
            </p>
            <ul>
              <li>No Windows CMD.exe escaping issues</li>
              <li>No Git version compatibility matrix to maintain</li>
              <li>Works in SSH-only environments (no Git installation required)</li>
              <li>Consistent behavior across platforms (no <code>git config</code> differences)</li>
            </ul>
            <p>
              <strong>Trade-off:</strong> Dulwich has slightly different rename detection than Git, but consistency across platforms outweighs this.
            </p>

            <h3>CI/CD Automation Saves Time</h3>
            <p>
              Automated PyPI releases on version tags eliminated manual publishing errors:
            </p>
            <ul>
              <li>Forgot to update version in <code>pyproject.toml</code> → CI enforces tag-version match</li>
              <li>Incomplete changelog → CI generates from commit messages</li>
              <li>Broken builds shipped to PyPI → CI tests before publishing</li>
            </ul>
            <p>
              <strong>ROI:</strong> 2 days setup time has saved ~4 hours per release (8 releases so far = 32 hours saved).
            </p>

            <h3>Read-Only Design Builds Trust</h3>
            <p>
              Guaranteeing zero repository mutations (via Dulwich read-only API) was critical for user adoption. Developers are rightfully cautious about tools that touch <code>.git/</code>. <strong>Philosophy:</strong> Constraints (read-only) can be features (safety guarantee).
            </p>
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
                GitHub: <Link href="https://github.com/egekaya1/GitSimulator" target="_blank" rel="noopener noreferrer">egekaya1/GitSimulator</Link> · PyPI: <code>pipx install gitsimulator</code> (v1.0.1) · CI: <Link href="https://github.com/egekaya1/GitSimulator/actions" target="_blank" rel="noopener noreferrer">GitHub Actions</Link>
              </div>
            </div>
          </section>
        </ContentArticle>
      </div>
    </main>
  )
}
