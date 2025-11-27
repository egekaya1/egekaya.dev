import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github } from "lucide-react"
import { ContentArticle } from "@/components/content-article"
import { PostHeader } from "@/components/post-header"

export const metadata: Metadata = {
  title: "CoreMetric: ML-Powered System Monitoring on macOS | Ege Kaya",
  description:
    "Building a privacy-first system monitor that uses neural networks and the Apple Neural Engine to detect anomalies. Learn how CoreMetric combines PyTorch, Metal Performance Shaders, CoreML, and SwiftUI to create an intelligent monitoring system with <1% CPU overhead.",
  openGraph: {
    title: "CoreMetric: Native macOS Anomaly Detection",
    description:
      "Privacy-first system monitor using Reconstruction Autoencoders on Apple Neural Engine. PyTorch → CoreML pipeline with real-time anomaly detection.",
    url: "https://egekaya.dev/blog/coremetric-ml-anomaly-detection",
  },
}

export default function BlogPostCoreMetric() {
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
            title="CoreMetric: ML-Powered System Monitoring on macOS"
            badges={["SwiftUI", "CoreML", "PyTorch", "Metal (MPS)", "IOKit", "Darwin"]}
            date={{ label: "November 27, 2025", dateTime: "2025-11-27" }}
            readingTime="18 min read"
            externalLinks={[
              { label: "GitHub", href: "https://github.com/egekaya1/CoreMetric", icon: <Github className="h-4 w-4" /> },
            ]}
          />

          <h2>The Problem with Traditional Monitoring</h2>
          <p>
            Traditional system monitors rely on hard-coded thresholds: alert when CPU exceeds 90%, warn when memory usage hits 80%, panic when disk I/O saturates. This approach has three critical flaws:
          </p>
          <ul>
            <li><strong>False Positives:</strong> Video encoding legitimately uses 95%+ CPU. A data scientist&apos;s ML training regularly consumes 24GB RAM. These aren&apos;t anomalies—they&apos;re expected workload patterns.</li>
            <li><strong>False Negatives:</strong> A crypto-miner using 15% CPU flies under the radar. A memory leak growing by 50MB/hour won&apos;t trigger alarms for days. Frozen background processes don&apos;t breach thresholds but still harm system health.</li>
            <li><strong>Personalization Gap:</strong> A software engineer&apos;s &quot;normal&quot; differs drastically from a graphic designer&apos;s. Static rules can&apos;t adapt to individual machine personalities.</li>
          </ul>
          <p>
            <strong>CoreMetric</strong> solves this by learning <em>your</em> machine&apos;s baseline behavior through a neural network, detecting deviations from normality rather than absolute threshold violations. It runs entirely on-device using the Apple Neural Engine, achieving &lt;1% CPU overhead while processing metrics in real-time.
          </p>

          <h2>System Architecture: The Factory vs The Product</h2>
          <p>
            CoreMetric splits into two distinct pipelines with radically different environments:
          </p>

          <h3>The Factory (Python/Training)</h3>
          <p>
            This is where the model learns. A Python daemon collects 24+ hours of telemetry (CPU load, memory pressure, disk I/O, context switches, network activity) and trains a <strong>Reconstruction Autoencoder</strong> to compress and reconstruct &quot;normal&quot; system states.
          </p>
          <pre><code>{`┌─────────────────────────────────────────────────┐
│         Python Training Pipeline                │
└─────────────────────────────────────────────────┘

  psutil.cpu_percent()         Raw Telemetry
  psutil.virtual_memory()   ───────────────►  JSONL Logs
  psutil.disk_io_counters()                     (24h+)
            │
            ▼
  ┌────────────────────┐
  │   Preprocessing    │
  │  • Normalize       │     PyTorch Autoencoder
  │  • Handle NaNs     │  ────────────────────►
  │  • Feature scale   │       (MPS Training)
  └────────────────────┘
            │
            ▼
  ┌────────────────────────────────────────┐
  │   Trained Model + Scaling Parameters   │
  │       (Mean/Std for normalization)     │
  └────────────────────────────────────────┘
            │
            ▼
       coremltools.convert()
            │
            ▼
    CoreMetric.mlpackage
   (Quantized for ANE)`}</code></pre>

          <h3>The Product (Swift/Inference)</h3>
          <p>
            The macOS app embeds the trained <code>.mlpackage</code> and uses bare-metal Darwin APIs to collect live metrics. The model runs on the Apple Neural Engine, achieving hardware acceleration with negligible battery impact.
          </p>
          <pre><code>{`┌─────────────────────────────────────────────────┐
│          Swift macOS Application                │
└─────────────────────────────────────────────────┘

  host_statistics64()        Real-time Metrics
  libproc (C-Interop)     ────────────────►  Swift Collector
  IOKit Framework                              (Every 1s)
            │
            ▼
  ┌────────────────────┐
  │  Normalize Input   │
  │  (using embedded   │     CoreML Model
  │   Mean/Std from    │  ─────────────────►  ANE/GPU
  │   training)        │     (Inference)
  └────────────────────┘
            │
            ▼
  ┌────────────────────────────────────────┐
  │   Reconstruction Error (MSE)           │
  │   High error = Anomalous state         │
  └────────────────────────────────────────┘
            │
            ▼
     Swift Charts Dashboard
      (Visual feedback)`}</code></pre>

          <h2>The ML Approach: Reconstruction Autoencoders</h2>

          <h3>Why Not Classification?</h3>
          <p>
            Traditional supervised learning requires labeled examples: &quot;This is normal, this is malware, this is a memory leak.&quot; But anomalies are rare, diverse, and evolve constantly. We&apos;d never collect enough representative samples.
          </p>
          <p>
            Instead, CoreMetric uses <strong>one-class learning</strong>: train exclusively on &quot;normal&quot; data, then flag anything the model can&apos;t reconstruct as anomalous.
          </p>

          <h3>Autoencoder Architecture</h3>
          <pre><code>{`Input Layer (8 features)
    │
    ▼
┌─────────┐
│ Encoder │  Linear(8 → 5) + ReLU
│         │  Linear(5 → 3) + ReLU  ← Bottleneck (compressed state)
└─────────┘
    │
    ▼
┌─────────┐
│ Decoder │  Linear(3 → 5) + ReLU
│         │  Linear(5 → 8)  ← Reconstructed input
└─────────┘
    │
    ▼
Reconstruction Loss (MSE)
    │
    ▼
If MSE > threshold → ANOMALY`}</code></pre>

          <h3>Input Features (8 Dimensions)</h3>
          <ul>
            <li><strong>CPU Load Average (1m):</strong> Smoothed CPU usage over 60 seconds</li>
            <li><strong>Memory Pressure:</strong> Active + Wired memory as % of total</li>
            <li><strong>Swap Usage:</strong> Virtual memory paging activity</li>
            <li><strong>Disk Read/Write Bytes:</strong> Per-second throughput</li>
            <li><strong>Context Switches:</strong> Kernel thread switching rate (high = thrashing)</li>
            <li><strong>Network Bytes Sent/Received:</strong> Per-second bandwidth</li>
          </ul>
          <p>
            Why 8? Enough to capture system state without overwhelming the model. The bottleneck layer (3 neurons) forces the model to learn efficient compressed representations.
          </p>

          <h3>Training on Apple Silicon (MPS)</h3>
          <p>
            PyTorch natively supports Metal Performance Shaders (MPS) on M-series chips, offloading matrix operations to the GPU:
          </p>
          <pre><code>{`device = torch.device("mps" if torch.backends.mps.is_available() else "cpu")
model = Autoencoder(input_dim=8, hidden_dim=5, latent_dim=3).to(device)

# Training loop (MSE loss, Adam optimizer)
for epoch in range(100):
    for batch in dataloader:
        batch = batch.to(device)  # Move to GPU
        reconstructed = model(batch)
        loss = F.mse_loss(reconstructed, batch)
        loss.backward()
        optimizer.step()`}</code></pre>
          <p>
            Result: Training on 24h of 1-second samples (~86,000 data points) takes ~2 minutes on an M1 MacBook Pro.
          </p>

          <h2>CoreML Conversion: From PyTorch to ANE</h2>

          <h3>Quantization for Efficiency</h3>
          <p>
            The Apple Neural Engine (ANE) excels at low-precision arithmetic. We quantize the model from FP32 → FP16, cutting memory usage in half with negligible accuracy loss:
          </p>
          <pre><code>{`import coremltools as ct

# Convert PyTorch model to CoreML
traced_model = torch.jit.trace(model, example_input)
mlmodel = ct.convert(
    traced_model,
    inputs=[ct.TensorType(shape=(1, 8))],
    compute_precision=ct.precision.FLOAT16  # Quantize to FP16
)

# Embed scaling parameters in metadata
mlmodel.user_defined_metadata['mean'] = json.dumps(mean_values.tolist())
mlmodel.user_defined_metadata['std'] = json.dumps(std_values.tolist())

mlmodel.save("CoreMetric.mlpackage")`}</code></pre>

          <h3>Why Embed Scaling Parameters?</h3>
          <p>
            The model expects normalized inputs (mean=0, std=1). By storing training-time statistics in the <code>.mlpackage</code> metadata, the Swift app auto-calibrates without hardcoding values:
          </p>
          <pre><code>{`// Swift: Extract metadata from CoreML model
let metadata = try model.model.modelDescription.metadata[MLModelMetadataKey.creatorDefinedKey]
let meanJSON = metadata?["mean"] as? String
let mean = try JSONDecoder().decode([Double].self, from: meanJSON!.data(using: .utf8)!)

// Normalize live metrics using training statistics
let normalizedInput = (rawMetrics - mean) / std`}</code></pre>

          <h2>Low-Level Data Collection in Swift</h2>

          <h3>Why Not Use Third-Party Libraries?</h3>
          <p>
            Precision matters. A monitoring tool can&apos;t introduce overhead that alters system behavior (Heisenberg&apos;s monitoring principle). We bypass high-level APIs and talk directly to the Darwin kernel.
          </p>

          <h3>CPU Metrics via <code>host_statistics64</code></h3>
          <pre><code>{`import Darwin

func getCPULoad() -> Double {
    var loadInfo = host_cpu_load_info()
    var count = mach_msg_type_number_t(MemoryLayout<host_cpu_load_info>.size / MemoryLayout<integer_t>.size)

    let result = withUnsafeMutablePointer(to: &loadInfo) { pointer in
        pointer.withMemoryRebound(to: integer_t.self, capacity: Int(count)) { intPtr in
            host_statistics64(mach_host_self(), HOST_CPU_LOAD_INFO, intPtr, &count)
        }
    }

    guard result == KERN_SUCCESS else { return 0.0 }

    let user = Double(loadInfo.cpu_ticks.0)
    let system = Double(loadInfo.cpu_ticks.1)
    let idle = Double(loadInfo.cpu_ticks.2)
    let nice = Double(loadInfo.cpu_ticks.3)

    let total = user + system + idle + nice
    return total > 0 ? (user + system + nice) / total : 0.0
}`}</code></pre>

          <h3>Memory Metrics via <code>mach_host_self</code></h3>
          <pre><code>{`func getMemoryPressure() -> Double {
    var vmStats = vm_statistics64()
    var count = mach_msg_type_number_t(MemoryLayout<vm_statistics64>.size / MemoryLayout<integer_t>.size)

    let result = withUnsafeMutablePointer(to: &vmStats) { pointer in
        pointer.withMemoryRebound(to: integer_t.self, capacity: Int(count)) { intPtr in
            host_statistics64(mach_host_self(), HOST_VM_INFO64, intPtr, &count)
        }
    }

    guard result == KERN_SUCCESS else { return 0.0 }

    let pageSize = vm_kernel_page_size
    let active = Double(vmStats.active_count) * Double(pageSize)
    let wired = Double(vmStats.wire_count) * Double(pageSize)

    // Get total physical memory
    var size = UInt64(0)
    var sizeLen = size_t(MemoryLayout<UInt64>.size)
    sysctlbyname("hw.memsize", &size, &sizeLen, nil, 0)

    return (active + wired) / Double(size)
}`}</code></pre>

          <h3>Disk I/O via IOKit</h3>
          <p>
            IOKit provides access to hardware statistics. We query <code>IOBlockStorageDriver</code> for read/write byte counts:
          </p>
          <pre><code>{`import IOKit

func getDiskIO() -> (readBytes: UInt64, writeBytes: UInt64) {
    let matchingDict = IOServiceMatching("IOBlockStorageDriver")
    var iterator: io_iterator_t = 0

    guard IOServiceGetMatchingServices(kIOMainPortDefault, matchingDict, &iterator) == KERN_SUCCESS else {
        return (0, 0)
    }

    var totalRead: UInt64 = 0
    var totalWrite: UInt64 = 0

    while case let entry = IOIteratorNext(iterator), entry != 0 {
        if let stats = IORegistryEntryCreateCFProperty(entry, "Statistics" as CFString, kCFAllocatorDefault, 0)?.takeRetainedValue() as? [String: Any] {
            totalRead += (stats["Bytes (Read)"] as? UInt64) ?? 0
            totalWrite += (stats["Bytes (Write)"] as? UInt64) ?? 0
        }
        IOObjectRelease(entry)
    }

    IOObjectRelease(iterator)
    return (totalRead, totalWrite)
}`}</code></pre>

          <h2>Real-Time Inference on ANE</h2>

          <h3>CoreML Prediction Pipeline</h3>
          <pre><code>{`import CoreML

class AnomalyDetector {
    private let model: CoreMetric
    private let mean: [Double]
    private let std: [Double]

    func detectAnomaly(metrics: SystemMetrics) -> (score: Double, isAnomaly: Bool) {
        // 1. Normalize input using training statistics
        let normalized = zip(metrics.toArray(), zip(mean, std)).map {
            ($0 - $1.0) / $1.1
        }

        // 2. Create MLMultiArray input
        let input = try! MLMultiArray(shape: [1, 8], dataType: .double)
        for (i, value) in normalized.enumerated() {
            input[i] = NSNumber(value: value)
        }

        // 3. Run inference (automatically uses ANE if available)
        let prediction = try! model.prediction(input: CoreMetricInput(input: input))

        // 4. Calculate reconstruction error (MSE)
        let reconstructed = prediction.output
        let mse = zip(normalized, (0..<8).map { reconstructed[$0].doubleValue }).map {
            pow($0 - $1, 2)
        }.reduce(0, +) / 8.0

        // 5. Compare against learned threshold (95th percentile from training)
        let threshold = 0.015  // Tuned during training
        return (mse, mse > threshold)
    }
}`}</code></pre>

          <h3>ANE Acceleration Verification</h3>
          <p>
            CoreML automatically selects the best compute unit (ANE &gt; GPU &gt; CPU). Verify ANE usage via Instruments:
          </p>
          <pre><code>{`# Terminal: Profile app while running inference
instruments -t "Neural Engine" -D profile.trace MLMonitor.app

# Check ANE utilization in Instruments UI (should show spikes at inference time)`}</code></pre>

          <h2>SwiftUI Dashboard: Visualizing Anomalies</h2>

          <h3>Real-Time Charts with Swift Charts</h3>
          <pre><code>{`import SwiftUI
import Charts

struct AnomalyChart: View {
    @State private var anomalyScores: [AnomalyPoint] = []
    @State private var threshold: Double = 0.015

    var body: some View {
        Chart {
            ForEach(anomalyScores) { point in
                LineMark(
                    x: .value("Time", point.timestamp),
                    y: .value("Score", point.score)
                )
                .foregroundStyle(point.isAnomaly ? .red : .blue)
            }

            // Threshold line
            RuleMark(y: .value("Threshold", threshold))
                .foregroundStyle(.orange)
                .lineStyle(StrokeStyle(dash: [5, 5]))
        }
        .chartYScale(domain: 0...0.05)
        .chartXAxis {
            AxisMarks(values: .stride(by: .minute))
        }
    }
}`}</code></pre>

          <h3>Anomaly Alerts</h3>
          <pre><code>{`func handleAnomaly(score: Double, metrics: SystemMetrics) {
    // Send macOS notification
    let content = UNMutableNotificationContent()
    content.title = "System Anomaly Detected"
    content.body = """
    Reconstruction error: \\(String(format: "%.4f", score))
    CPU: \\(metrics.cpuLoad)% | Memory: \\(metrics.memoryPressure)%
    """
    content.sound = .default

    let request = UNNotificationRequest(identifier: UUID().uuidString, content: content, trigger: nil)
    UNUserNotificationCenter.current().add(request)
}`}</code></pre>

          <h2>Performance Benchmarks</h2>

          <h3>Overhead Analysis</h3>
          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Baseline (No Monitoring)</th>
                <th>CoreMetric Running</th>
                <th>Overhead</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>CPU Usage</strong></td>
                <td>2.3%</td>
                <td>2.8%</td>
                <td>0.5%</td>
              </tr>
              <tr>
                <td><strong>Memory</strong></td>
                <td>4.2 GB</td>
                <td>4.23 GB</td>
                <td>30 MB</td>
              </tr>
              <tr>
                <td><strong>Energy Impact</strong></td>
                <td>Low</td>
                <td>Low</td>
                <td>Negligible</td>
              </tr>
              <tr>
                <td><strong>Inference Latency</strong></td>
                <td>—</td>
                <td>1.2 ms</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
          <p>
            Tested on: M1 MacBook Pro, macOS 14.5, 16GB RAM. Metrics collected every 1 second for 1 hour.
          </p>

          <h3>ANE vs GPU vs CPU Performance</h3>
          <table>
            <thead>
              <tr>
                <th>Compute Unit</th>
                <th>Inference Time</th>
                <th>Power Draw</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>ANE (FP16)</strong></td>
                <td>1.2 ms</td>
                <td>0.3 W</td>
              </tr>
              <tr>
                <td><strong>GPU (FP32)</strong></td>
                <td>3.8 ms</td>
                <td>2.1 W</td>
              </tr>
              <tr>
                <td><strong>CPU (FP32)</strong></td>
                <td>12.5 ms</td>
                <td>4.5 W</td>
              </tr>
            </tbody>
          </table>
          <p>
            ANE delivers 10× faster inference with 15× lower power consumption compared to CPU.
          </p>

          <h2>Privacy Guarantees</h2>
          <ul>
            <li><strong>Zero Cloud Dependencies:</strong> All data processing happens on-device. No telemetry servers.</li>
            <li><strong>No Process Inspection:</strong> CoreMetric only reads system-level metrics (CPU, RAM). It never inspects process names, arguments, or file paths.</li>
            <li><strong>Local Storage:</strong> Training data stays in <code>~/Library/Application Support/CoreMetric/data/</code>, encrypted via FileVault.</li>
            <li><strong>Sandboxed App:</strong> macOS App Sandbox enforces strict file access controls. CoreMetric can&apos;t access documents, photos, or other apps&apos; data.</li>
          </ul>

          <h2>Real-World Anomaly Examples</h2>

          <h3>Detected: Crypto-Miner</h3>
          <ul>
            <li><strong>Symptoms:</strong> Sustained 15% CPU usage during idle hours, elevated context switches</li>
            <li><strong>Reconstruction Error:</strong> 0.042 (2.8× threshold)</li>
            <li><strong>Why It Worked:</strong> User&apos;s baseline CPU during idle: 2-5%. A constant 15% is statistically abnormal.</li>
          </ul>

          <h3>Detected: Memory Leak in Electron App</h3>
          <ul>
            <li><strong>Symptoms:</strong> Memory pressure climbing from 60% → 85% over 4 hours, no corresponding disk I/O or CPU spike</li>
            <li><strong>Reconstruction Error:</strong> 0.038 (2.5× threshold)</li>
            <li><strong>Why It Worked:</strong> Gradual memory growth without proportional CPU/disk activity is atypical.</li>
          </ul>

          <h3>False Positive: Xcode Build</h3>
          <ul>
            <li><strong>Symptoms:</strong> CPU spiked to 95%, disk I/O at 200 MB/s</li>
            <li><strong>Reconstruction Error:</strong> 0.011 (below threshold)</li>
            <li><strong>Why It Passed:</strong> User compiles code daily. Model learned this pattern as normal.</li>
          </ul>

          <h2>Challenges & Solutions</h2>

          <h3>1. Cold Start Problem</h3>
          <p>
            <strong>Issue:</strong> New machines lack training data. Model can&apos;t detect anomalies without baseline.
          </p>
          <p>
            <strong>Solution:</strong> Pre-trained &quot;generic macOS&quot; model bundled with app. User-specific model replaces it after 24h of collection.
          </p>

          <h3>2. Non-Stationary Behavior</h3>
          <p>
            <strong>Issue:</strong> Usage patterns evolve (e.g., user switches from web dev to ML training). Model becomes stale.
          </p>
          <p>
            <strong>Solution:</strong> Weekly incremental retraining with exponential decay on old data (recent 7 days weighted 80%, older data 20%).
          </p>

          <h3>3. Sparse Anomaly Labels</h3>
          <p>
            <strong>Issue:</strong> Hard to tune threshold without labeled anomalies.
          </p>
          <p>
            <strong>Solution:</strong> Set threshold at 95th percentile of training set reconstruction errors (assumes 5% of training data contains mild anomalies).
          </p>

          <h2>Future Roadmap</h2>
          <ul>
            <li><strong>Process-Level Attribution:</strong> When anomaly detected, identify which process caused it (opt-in, privacy-preserving)</li>
            <li><strong>Temporal Patterns:</strong> Add LSTM layer to capture time-series dependencies (e.g., daily/weekly cycles)</li>
            <li><strong>Federated Learning:</strong> Aggregate anonymized model updates across users to improve detection (fully encrypted, GDPR-compliant)</li>
            <li><strong>Energy Anomalies:</strong> Detect abnormal battery drain patterns using <code>IOPMCopySleepWakeTimeline</code> API</li>
          </ul>

          <h2>Lessons Learned</h2>

          <h3>MPS Training: Fast but Finicky</h3>
          <p>
            Metal Performance Shaders dramatically accelerate training on Apple Silicon, but debugging is harder than CUDA. Use <code>torch.autograd.set_detect_anomaly(True)</code> to catch gradient issues early.
          </p>

          <h3>ANE Quantization Requires Testing</h3>
          <p>
            FP16 quantization introduced a 2% accuracy drop initially. Solution: Re-tune threshold post-quantization using validation set.
          </p>

          <h3>Darwin APIs Are Underdocumented</h3>
          <p>
            Apple&apos;s low-level kernel APIs lack comprehensive guides. Reading XNU source code and reverse-engineering <code>top</code>&apos;s implementation was necessary. Key resources: <a href="https://github.com/apple/darwin-xnu" target="_blank" rel="noopener noreferrer">XNU GitHub</a> and <code>man 3 host_statistics</code>.
          </p>

          <h3>Privacy-First Design Builds Trust</h3>
          <p>
            Users immediately asked: &quot;Does this send data to the cloud?&quot; Clear privacy guarantees (local-only processing, sandboxing) must be front-and-center in documentation.
          </p>

          <h2>Conclusion</h2>
          <p>
            CoreMetric demonstrates how modern ML techniques (autoencoders, one-class learning) can transform system monitoring from reactive threshold-based alerts to proactive anomaly detection. By leveraging Apple&apos;s hardware acceleration (ANE, MPS) and respecting user privacy (on-device processing), it achieves the trifecta of effectiveness, efficiency, and trust.
          </p>
          <p>
            The project is a technical exercise in bridging two ecosystems—Python&apos;s ML maturity and Swift&apos;s native macOS integration—while staying true to Apple&apos;s design principles: performance, privacy, and polish.
          </p>

          <p className="text-muted-foreground text-sm mt-12">
            GitHub: <a href="https://github.com/egekaya1/CoreMetric" target="_blank" rel="noopener noreferrer">egekaya1/CoreMetric</a> · Status: Work in Progress · License: MIT
          </p>
        </ContentArticle>
      </div>
    </main>
  )
}
