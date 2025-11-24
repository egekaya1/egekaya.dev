import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { ContentArticle } from "@/components/content-article"
import { PostHeader } from "@/components/post-header"

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
      <div className="container-custom max-w-4xl">
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
            After years of building web applications and backend systems, I found myself increasingly curious about the systems that power recommendations, predictions, and intelligent automation. The turning point came when I realized that understanding ML wasn&apos;t just about career growth — it was about understanding the technology that&apos;s reshaping every industry I might work in.
          </p>
          <p>
            This post documents my structured approach to learning machine learning from the ground up. Not a tutorial, but a roadmap — the decisions I made about what to learn, in what order, and why. My goal: build a portfolio of 6–10 production-quality projects while developing enough theoretical depth to read and reproduce research papers.
          </p>

          <h2>The Learning Philosophy</h2>
          <p>
            Before diving into the technical content, I want to share the principles guiding this journey:
          </p>
          <ul>
            <li><strong>Build first, theory second:</strong> I learn best by doing. Mathematical intuition follows from implementing algorithms, not the other way around.</li>
            <li><strong>Consistency over intensity:</strong> 30 minutes daily beats 8-hour weekend marathons. The compound effect of daily practice is real.</li>
            <li><strong>Public learning:</strong> Writing about what I learn forces clarity. This blog post is as much for me as for anyone reading it.</li>
            <li><strong>Production mindset:</strong> Every project should be deployable. No Jupyter notebooks left to rot — code gets structured, tested, and shipped.</li>
          </ul>

          <h2>The Roadmap Overview</h2>
          <p>
            I&apos;ve structured my learning into four phases, each building on the previous. The timeline is flexible — some phases might take longer, others shorter — but the sequence matters.
          </p>

          <h3>Phase 1: Python Scientific Foundations</h3>
          <p>
            Before touching any ML library, I needed fluency in the tools that underpin everything: NumPy for numerical computing, Pandas for data manipulation, and Matplotlib/Seaborn for visualization. This isn&apos;t glamorous work, but it&apos;s foundational.
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
            The key insight from this phase: <em>vectorization is everything</em>. Understanding why <code>a * b</code> on NumPy arrays is 100–500x faster than a Python loop changed how I think about numerical code. Broadcasting rules, memory layout (C vs Fortran order), and avoiding unnecessary copies — these details matter at scale.
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
            This is where things get interesting. I chose PyTorch over TensorFlow for its Pythonic API and dynamic computation graphs — debugging feels natural, and the mental model is clearer.
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
            Running on Apple Silicon&apos;s MPS backend was a revelation. Training CNNs on CIFAR-10 locally, without cloud costs, with 3–5x speedup over CPU — that&apos;s accessibility that wasn&apos;t possible a few years ago. The command to check: <code>torch.backends.mps.is_available()</code>.
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
            The breakthrough moment: implementing multi-head attention from scratch. Once you see that attention is just a weighted sum of values, with weights computed from query-key dot products, the magic disappears and understanding takes its place.
          </p>

          <h3>Phase 4: Production ML</h3>
          <p>
            Training a model is maybe 20% of the work. The rest is everything that happens before and after: data pipelines, experiment tracking, deployment, monitoring, and maintenance. This phase is about building systems, not just models.
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
            There&apos;s a lot of gatekeeping in ML about mathematical prerequisites. Here&apos;s what I actually found useful:
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
            Cutting through the noise of ML resources:
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
            What I avoided: courses that promise to make you an &quot;ML expert in 30 days.&quot; This takes time. Accepting that made the process less frustrating.
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

          <h2>Daily Habits That Compound</h2>
          <p>
            The system that keeps me consistent:
          </p>
          <ul>
            <li><strong>Daily:</strong> 30–60 minutes of focused work (code or reading)</li>
            <li><strong>Weekly:</strong> One paper read and summarized</li>
            <li><strong>Weekly:</strong> Push something to GitHub (notebook, code, or documentation)</li>
            <li><strong>Weekly:</strong> Update environment files (reproducibility)</li>
            <li><strong>Bi-weekly:</strong> Write about what I learned (blog posts like this one)</li>
          </ul>
          <p>
            The key: making it small enough to be sustainable. Missing a day happens — missing a week shouldn&apos;t.
          </p>

          <h2>Milestones I&apos;m Tracking</h2>
          <p>
            Concrete goals for the next 12 months:
          </p>
          <ul>
            <li><strong>Month 3:</strong> Complete 2 end-to-end projects (tabular + image classification)</li>
            <li><strong>Month 6:</strong> Reproduce 1 research paper, deploy 1 model to production</li>
            <li><strong>Month 9:</strong> Build a specialization project (likely NLP or computer vision)</li>
            <li><strong>Month 12:</strong> Portfolio of 6–10 polished projects, contribute to an open-source ML library</li>
          </ul>

          <h2>What I Wish I Knew Earlier</h2>
          <p>
            A few lessons that would have saved time:
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
            This roadmap isn&apos;t finished — it&apos;s a living document that evolves as I learn. The next posts in this series will dive deeper into specific projects: the CIFAR-10 classifier, the sentiment analysis pipeline, and eventually the paper reproductions.
          </p>
          <p>
            If you&apos;re on a similar journey, I&apos;d love to hear about it. What worked for you? What would you add to this roadmap?
          </p>
          <p>
            The most important thing I&apos;ve learned: <strong>start before you&apos;re ready</strong>. The best time to begin was yesterday. The second best time is now.
          </p>

          <p className="text-muted-foreground text-sm mt-12">
            Resources: <a href="https://pytorch.org/tutorials/" target="_blank" rel="noopener noreferrer">PyTorch Tutorials</a> · <a href="https://scikit-learn.org/stable/getting_started.html" target="_blank" rel="noopener noreferrer">scikit-learn Guide</a> · <a href="https://cs231n.stanford.edu/" target="_blank" rel="noopener noreferrer">CS231n (Stanford CV)</a> · <a href="https://web.stanford.edu/class/cs224n/" target="_blank" rel="noopener noreferrer">CS224n (Stanford NLP)</a> · <a href="https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi" target="_blank" rel="noopener noreferrer">3Blue1Brown Linear Algebra</a>
          </p>
        </ContentArticle>
      </div>
    </main>
  )
}
