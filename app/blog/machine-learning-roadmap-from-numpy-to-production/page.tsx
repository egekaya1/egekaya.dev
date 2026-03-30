import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { ContentArticle } from "@/components/content-article"
import { PostHeader } from "@/components/post-header"
import { TableOfContents } from "@/components/table-of-contents"

export const metadata: Metadata = {
  title: "My Machine Learning Journey: From NumPy to Production PyTorch | Ege Kaya",
  description:
    "A personal roadmap through machine learning: Python foundations, NumPy, Pandas, scikit-learn, PyTorch with Apple Silicon MPS, deep learning architectures, MLOps, and production deployment. Lessons learned and the path forward.",
  keywords: [
    "machine learning roadmap",
    "pytorch tutorial",
    "numpy pandas",
    "scikit-learn",
    "deep learning",
    "CNN transformer",
    "MLOps",
    "python data science",
    "MPS GPU acceleration",
    "ML production deployment"
  ],
  openGraph: {
    title: "My Machine Learning Journey: NumPy to Production PyTorch",
    description:
      "A structured learning path through ML fundamentals, deep learning, and production deployment.",
    url: "https://egekaya.dev/blog/machine-learning-roadmap-from-numpy-to-production",
    images: [
      {
        url: "https://egekaya.dev/og/ml-roadmap.png",
        width: 1200,
        height: 630,
        alt: "Machine Learning Roadmap visualization"
      }
    ]
  },
}

export default function BlogPostMLRoadmap() {
  return (
    <main className="section-padding">
      <div className="container-custom">
        <div className="lg:flex lg:gap-16 lg:items-start">
          <div className="lg:order-last">
            <TableOfContents />
          </div>
          <div className="flex-1 min-w-0 max-w-4xl">
        <Link href="/blog">
          <Button variant="ghost" size="sm" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <ContentArticle>
          <PostHeader
            title="My Machine Learning Journey: From NumPy to Production PyTorch"
            badges={["Python", "NumPy", "PyTorch", "scikit-learn", "MLOps", "Deep Learning"]}
            date={{ label: "November 24, 2025", dateTime: "2025-11-24" }}
            readingTime="18 min read"
          />

          <h2>Why Machine Learning, Why Now</h2>
          <p>
            I spent two years building web applications and backend systems before seriously engaging with ML. The gap between deploying a Next.js app and understanding what is inside a recommendation model bothered me enough to do something about it.
          </p>
          <p>
            This post documents how I structured that transition: what to learn, in what order, and why that sequence matters. The goal is a portfolio of 6&ndash;10 production-quality projects with enough theoretical depth to read and reproduce research papers.
          </p>

          <h2>How I Approach This</h2>
          <p>
            A few rules I set for myself before starting:
          </p>
          <ul>
            <li><strong>Build first, theory second.</strong> I learn by implementing. The math clicks after you have code that either works or fails in a way you can trace.</li>
            <li><strong>Consistency beats intensity.</strong> 30 minutes daily is more reliable than 8-hour weekend sessions. Progress looks slow week-to-week and fast month-to-month.</li>
            <li><strong>Write about it.</strong> Writing forces precision. This post is partly for others, mostly to hold myself to account.</li>
            <li><strong>Ship things.</strong> Every project gets structured, tested, and put somewhere public. No notebooks that only run on my machine.</li>
          </ul>

          <h2>The Roadmap</h2>
          <p>
            Four phases, each building on the previous. The timeline is flexible but the sequence matters.
          </p>

          <h3>Phase 1: Python Scientific Foundations</h3>
          <p>
            Before touching any ML library, I needed fluency in NumPy, Pandas, and Matplotlib. Not the most exciting phase, but skipping it makes everything harder later.
          </p>
          <p>
            <strong>The tech stack:</strong>
          </p>
          <ul>
            <li><strong>JupyterLab</strong> — Interactive development environment for experimentation</li>
            <li><strong>Conda</strong> — Environment isolation (critical for reproducibility)</li>
            <li><strong>NumPy</strong> — Vectorized computing, linear algebra, the backbone of everything</li>
            <li><strong>Pandas</strong> — DataFrames, data cleaning, aggregation, joins</li>
            <li><strong>Matplotlib + Seaborn</strong> — Visualization for EDA and communication</li>
          </ul>
          <p>
            The main thing this phase taught me: <em>vectorization is not optional</em>. Understanding why <code>a * b</code> on NumPy arrays is 100&ndash;500x faster than a Python loop changed how I think about numerical code. Broadcasting rules, memory layout (C vs Fortran order), avoiding unnecessary copies&mdash;these details compound at scale.
          </p>
          <p>
            <strong>Key exercises I worked through:</strong>
          </p>
          <ul>
            <li>Implementing dot products with and without NumPy to feel the performance difference</li>
            <li>Normalizing matrices using broadcasting (no loops allowed)</li>
            <li>Building gradient descent from scratch with vectorized operations</li>
            <li>Loading messy CSVs, handling missing data, GroupBy aggregations, multi-table joins</li>
          </ul>

          <h3>Phase 2: Classical Machine Learning</h3>
          <p>
            With the foundation in place, I moved to scikit-learn and the classical ML algorithms. The goal wasn&apos;t just to call <code>model.fit()</code> — it was to understand the full pipeline: data splitting, preprocessing, cross-validation, hyperparameter tuning, and evaluation.
          </p>
          <p>
            <strong>The tech stack:</strong>
          </p>
          <ul>
            <li><strong>scikit-learn</strong> — Pipelines, transformers, estimators, GridSearchCV</li>
            <li><strong>XGBoost / LightGBM</strong> — Gradient boosting for tabular data</li>
            <li><strong>Linear algebra refresher</strong> — Vectors, matrices, eigenvalues, SVD</li>
            <li><strong>Calculus</strong> — Gradients, chain rule, backpropagation intuition</li>
            <li><strong>Probability/Stats</strong> — Distributions, MLE, Bayesian thinking</li>
          </ul>
          <p>
            The most valuable lesson here: <strong>pipelines prevent data leakage</strong>. Fitting a scaler on the full dataset before splitting? That&apos;s leakage. Cross-validation with preprocessing inside the fold? That&apos;s correct. Getting this wrong invalidates your entire evaluation.
          </p>
          <p>
            I spent significant time on the math — not to derive every theorem, but to build intuition. Why does PCA work? Because it finds directions of maximum variance via eigendecomposition. Why does gradient descent converge? Because we&apos;re following the negative gradient of a (hopefully) convex loss surface. This intuition pays dividends when debugging models that won&apos;t train.
          </p>
          <p>
            <strong>Models I implemented and compared:</strong>
          </p>
          <ul>
            <li>Logistic Regression (understand the baseline)</li>
            <li>Random Forest (ensemble intuition, feature importance)</li>
            <li>Gradient Boosting (sequential error correction)</li>
            <li>SVM with RBF kernel (the kernel trick)</li>
            <li>KNN (lazy learning, curse of dimensionality)</li>
          </ul>

          <h3>Phase 3: Deep Learning with PyTorch</h3>
          <p>
            I chose PyTorch over TensorFlow for its Pythonic API and dynamic computation graphs. Debugging feels natural because you are just manipulating Python objects, not reasoning about a compiled static graph.
          </p>
          <p>
            <strong>The tech stack:</strong>
          </p>
          <ul>
            <li><strong>PyTorch</strong> — Tensors, autograd, nn.Module, DataLoaders</li>
            <li><strong>MPS backend</strong> — Apple Silicon GPU acceleration (game-changer for local training)</li>
            <li><strong>torchvision</strong> — Image datasets, transforms, pretrained models</li>
            <li><strong>Hugging Face Transformers</strong> — Pretrained NLP models, fine-tuning</li>
          </ul>
          <p>
            Running on Apple Silicon&apos;s MPS backend was genuinely useful. Training CNNs on CIFAR-10 locally with a 3&ndash;5x speedup over CPU, no cloud credits needed. Check availability with <code>torch.backends.mps.is_available()</code> before each run.
          </p>
          <p>
            <strong>Architectures I studied and implemented:</strong>
          </p>
          <ul>
            <li><strong>MLPs</strong> — The foundation. BatchNorm, Dropout, activation functions</li>
            <li><strong>CNNs</strong> — Convolutions, pooling, ResNet-style skip connections</li>
            <li><strong>Transfer Learning</strong> — Freezing backbones, fine-tuning classification heads</li>
            <li><strong>RNNs/LSTMs</strong> — Sequential data, vanishing gradients, hidden states</li>
            <li><strong>Transformers</strong> — Multi-head attention, positional encoding, the architecture that changed NLP</li>
          </ul>
          <p>
            The most clarifying exercise: implementing multi-head attention from scratch. Attention is a weighted sum of values where the weights come from query-key dot products. Once you have that in code, the rest of transformer architecture follows directly.
          </p>

          <h3>Phase 4: Production ML</h3>
          <p>
            Training a model is maybe 20% of the work. The rest is data pipelines, experiment tracking, deployment, monitoring, and maintenance. The goal here is treating the whole thing as a software system, not a research notebook.
          </p>
          <p>
            <strong>The tech stack:</strong>
          </p>
          <ul>
            <li><strong>MLflow</strong> — Experiment tracking, model registry, reproducibility</li>
            <li><strong>DVC</strong> — Data versioning (Git for datasets)</li>
            <li><strong>FastAPI</strong> — Model serving with async Python</li>
            <li><strong>Docker</strong> — Containerization for consistent deployment</li>
            <li><strong>GitHub Actions</strong> — CI/CD for ML pipelines</li>
          </ul>
          <p>
            The insight that changed my approach: <strong>treat ML projects like software projects</strong>. That means version control for data and models, automated testing for data quality, monitoring for model drift, and proper logging for debugging production issues.
          </p>

          <h2>Project Structure That Works</h2>
          <p>
            After several false starts, I settled on a project structure that scales from exploration to production:
          </p>
          <pre><code>{`project/
├── notebooks/           # EDA, experimentation (numbered)
├── src/
│   ├── data/           # Dataset classes, preprocessing
│   ├── models/         # Architecture definitions
│   ├── training/       # Train loops, evaluation, callbacks
│   └── utils/          # Config, visualization
├── experiments/        # Tracked runs with configs and metrics
├── tests/              # Unit and integration tests
├── envs/               # Environment files
├── Dockerfile
└── pyproject.toml`}</code></pre>
          <p>
            The key principle: notebooks are for exploration, <code>src/</code> is for production. Once code works in a notebook, it gets refactored into proper modules with tests.
          </p>

          <h2>The Math I Actually Needed</h2>
          <p>
            Most ML courses over-sell the math prerequisites. Here is what actually came up repeatedly:
          </p>
          <p>
            <strong>Linear Algebra (essential):</strong>
          </p>
          <ul>
            <li>Matrix multiplication and why order matters</li>
            <li>Transpose, inverse, and when they exist</li>
            <li>Eigenvalues/eigenvectors (for PCA, understanding attention)</li>
            <li>SVD (dimensionality reduction, latent factors)</li>
            <li>Norms (L1, L2 for regularization)</li>
          </ul>
          <p>
            <strong>Calculus (practical subset):</strong>
          </p>
          <ul>
            <li>Derivatives and what they mean geometrically</li>
            <li>Chain rule (the foundation of backpropagation)</li>
            <li>Gradients as direction of steepest ascent</li>
            <li>Numerical gradient checking (debugging tool)</li>
          </ul>
          <p>
            <strong>Probability/Statistics (for intuition):</strong>
          </p>
          <ul>
            <li>Common distributions (Gaussian, Bernoulli, Poisson)</li>
            <li>Expectation and variance</li>
            <li>Maximum Likelihood Estimation (what loss functions optimize)</li>
            <li>Bayesian thinking (priors, posteriors, updating beliefs)</li>
          </ul>
          <p>
            I didn&apos;t derive every formula — but I made sure I could explain intuitively why each technique works.
          </p>

          <h2>Resources That Actually Helped</h2>
          <p>
            Filtered from a lot of mediocre material:
          </p>
          <ul>
            <li><strong>3Blue1Brown&apos;s Linear Algebra series</strong> — Visual intuition that textbooks lack</li>
            <li><strong>CS231n (Stanford)</strong> — The definitive CNN course, lectures are gold</li>
            <li><strong>CS224n (Stanford)</strong> — NLP and Transformers, rigorous but accessible</li>
            <li><strong>PyTorch official tutorials</strong> — Surprisingly well-written, start here</li>
            <li><strong>StatQuest (YouTube)</strong> — Josh Starmer explains stats concepts clearly</li>
            <li><strong>Andrej Karpathy&apos;s blog/videos</strong> — Practical wisdom from a practitioner</li>
          </ul>
          <p>
            What I skipped: courses that promise to make you an &quot;ML expert in 30 days.&quot; This takes longer than that. Accepting it early makes the rest less frustrating.
          </p>

          <h2>Project Ideas by Difficulty</h2>
          <p>
            The portfolio I&apos;m building, organized by complexity:
          </p>

          <h3>Beginner</h3>
          <ul>
            <li><strong>Titanic Survival Predictor</strong> — The classic. EDA, feature engineering, baseline models</li>
            <li><strong>House Price Regression</strong> — Regression, cross-validation, handling outliers</li>
          </ul>

          <h3>Intermediate</h3>
          <ul>
            <li><strong>CIFAR-10 Image Classifier</strong> — CNN from scratch, then transfer learning with ResNet</li>
            <li><strong>Sentiment Analysis</strong> — Fine-tuning DistilBERT on IMDB reviews</li>
            <li><strong>Football Analytics</strong> — Applying ML to match data, player performance prediction</li>
          </ul>

          <h3>Advanced</h3>
          <ul>
            <li><strong>Stock Price Prediction</strong> — Time series, LSTMs, backtesting frameworks</li>
            <li><strong>Object Detection</strong> — YOLO, mAP evaluation, real-time inference</li>
            <li><strong>Paper Reproduction</strong> — Pick a seminal paper (ResNet, Attention Is All You Need), reproduce key results</li>
          </ul>

          <h2>Daily Habits</h2>
          <p>
            What the actual routine looks like:
          </p>
          <ul>
            <li><strong>Daily:</strong> 30–60 minutes of focused work (code or reading)</li>
            <li><strong>Weekly:</strong> One paper read and summarized</li>
            <li><strong>Weekly:</strong> Push something to GitHub (notebook, code, or documentation)</li>
            <li><strong>Weekly:</strong> Update environment files (reproducibility)</li>
            <li><strong>Bi-weekly:</strong> Write about what I learned (blog posts like this one)</li>
          </ul>
          <p>
            The goal is something small enough to do every day. Missing a day is fine. Missing a week breaks the rhythm.
          </p>

          <h2>Milestones</h2>
          <p>
            Concrete targets for the next 12 months:
          </p>
          <ul>
            <li><strong>Month 3:</strong> Complete 2 end-to-end projects (tabular + image classification)</li>
            <li><strong>Month 6:</strong> Reproduce 1 research paper, deploy 1 model to production</li>
            <li><strong>Month 9:</strong> Build a specialization project (likely NLP or computer vision)</li>
            <li><strong>Month 12:</strong> Portfolio of 6–10 polished projects, contribute to an open-source ML library</li>
          </ul>

          <h2>What I Wish I Knew Earlier</h2>
          <p>
            Things that would have saved me time:
          </p>
          <ul>
            <li><strong>Start with structured data.</strong> Tabular ML is underrated and immediately applicable. Don&apos;t rush to deep learning.</li>
            <li><strong>Data quality &gt; model complexity.</strong> A simple model on clean data beats a complex model on garbage.</li>
            <li><strong>Read the scikit-learn docs.</strong> They&apos;re excellent and often answer questions faster than Stack Overflow.</li>
            <li><strong>GPU access matters.</strong> Apple Silicon MPS, Google Colab, or cloud credits — don&apos;t suffer through CPU-only training.</li>
            <li><strong>Version everything.</strong> Code, data, models, configs. Your future self will thank you.</li>
          </ul>

          <h2>The Path Forward</h2>
          <p>
            This roadmap will keep changing as I work through it. The next posts in this series will cover specific projects: the CIFAR-10 classifier, the sentiment analysis pipeline, and eventually the paper reproductions.
          </p>
          <p>
            If you&apos;re at a similar point, the most practical thing I can say is: pick one dataset, build one end-to-end pipeline, and ship it. Everything else follows from that.
          </p>

          <p className="text-muted-foreground text-sm mt-12">
            Resources: <a href="https://pytorch.org/tutorials/" target="_blank" rel="noopener noreferrer">PyTorch Tutorials</a> · <a href="https://scikit-learn.org/stable/getting_started.html" target="_blank" rel="noopener noreferrer">scikit-learn Guide</a> · <a href="https://cs231n.stanford.edu/" target="_blank" rel="noopener noreferrer">CS231n (Stanford CV)</a> · <a href="https://web.stanford.edu/class/cs224n/" target="_blank" rel="noopener noreferrer">CS224n (Stanford NLP)</a> · <a href="https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi" target="_blank" rel="noopener noreferrer">3Blue1Brown Linear Algebra</a>
          </p>
        </ContentArticle>
          </div>
        </div>
      </div>
    </main>
  )
}
