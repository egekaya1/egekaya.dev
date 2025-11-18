import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Database, TrendingUp, Zap, Server } from "lucide-react"
import { ContentArticle } from "@/components/content-article"
import { PostHeader } from "@/components/post-header"

export const metadata: Metadata = {
  title: "Case Study: DigiTwin Database System — 50K+/day, 40% Faster Queries | Ege Kaya",
  description:
    "High-performance database for structural monitoring: 50,000+ daily readings, 40% faster queries, partitioning, materialized views, and a robust C++ ingestion pipeline.",
  openGraph: {
    title: "Case Study: DigiTwin Database System — 50K+/day, 40% Faster Queries",
    url: "https://egekaya.dev/case-studies/digitwin-database",
  },
}

export default function CaseStudy() {
  const readingTime = "10 min read"
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
            title="Case Study: DigiTwin High‑Performance Database System"
            badges={["C++", "PostgreSQL", "CMake", "Performance"]}
            readingTime={readingTime}
          />
          <p className="lead">
            Engineered database management system for structural monitoring, processing 50,000+ daily sensor readings with 40% performance improvement
          </p>
          <div className="not-prose mb-8">
            <Badge variant="outline" className="bg-amber-500/10 border-amber-500/20">
              🔒 Proprietary - Code not publicly available
            </Badge>
          </div>

          {/* Key Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 not-prose">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">50K+</div>
                    <div className="text-sm text-muted-foreground">Readings/Day</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500/10">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">40%</div>
                    <div className="text-sm text-muted-foreground">Faster Queries</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <Zap className="h-5 w-5 text-cyan-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">&lt;100ms</div>
                    <div className="text-sm text-muted-foreground">Avg Response</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    <Server className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Multi</div>
                    <div className="text-sm text-muted-foreground">Platform</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Challenge */}
          <section>
            <h2>The Challenge</h2>
            <div>
              <p>
                The DigiTwin research project at Politecnico di Torino required a database system 
                to monitor structural integrity of buildings using IoT sensors. The system faced 
                several critical challenges:
              </p>
              <ul>
                <li>
                  <strong>High-frequency data ingestion</strong> - Sensors generating readings every 
                  few seconds, 24/7
                </li>
                <li>
                  <strong>Real-time analysis requirements</strong> - Structural engineers needed immediate 
                  access to aggregated data
                </li>
                <li>
                  <strong>Historical data queries</strong> - Research required fast access to months of 
                  historical sensor data
                </li>
                <li>
                  <strong>Cross-platform deployment</strong> - System needed to run on Linux servers 
                  and embedded devices
                </li>
                <li>
                  <strong>Reliability</strong> - No data loss acceptable for critical infrastructure monitoring
                </li>
              </ul>
            </div>
          </section>

          {/* Solution */}
          <section>
            <h2>The Solution</h2>
            <div>
              <p>
                I designed and implemented a high-performance C++ data processing pipeline with optimized 
                PostgreSQL integration, focusing on throughput and query performance.
              </p>

              <h3>Architecture Overview</h3>
              <ol>
                <li><strong>Data Ingestion Layer (C++)</strong> - Buffered batch inserts for high throughput</li>
                <li><strong>PostgreSQL Database</strong> - Optimized schema with strategic indexing</li>
                <li><strong>Query Optimization</strong> - Materialized views and partitioning</li>
                <li><strong>CMake Build System</strong> - Cross-platform compilation</li>
              </ol>

              <h3>Key Technical Decisions</h3>

              <h4>1. Batch Processing Pipeline</h4>
              <p>
                Instead of inserting each sensor reading individually, I implemented a batching system 
                that accumulates readings and performs bulk inserts:
              </p>
              <pre><code>{`// Pseudocode - actual implementation is proprietary
class SensorDataBuffer {
  std::vector<SensorReading> buffer;
  std::mutex mutex;
  
  void addReading(const SensorReading& reading) {
    std::lock_guard<std::mutex> lock(mutex);
    buffer.push_back(reading);
    
    if (buffer.size() >= BATCH_SIZE) {
      flushToDatabase();
    }
  }
  
  void flushToDatabase() {
    // Bulk insert using COPY command
    // 10x faster than individual INSERTs
    executeBulkInsert(buffer);
    buffer.clear();
  }
};`}</code></pre>

              <h4>2. Database Schema Optimization</h4>
              <ul>
                <li><strong>Time-series partitioning</strong> by month for efficient queries</li>
                <li><strong>Composite indexes</strong> on (sensor_id, timestamp)</li>
                <li><strong>Materialized views</strong> for hourly/daily aggregates</li>
                <li><strong>Automatic vacuum</strong> and analyze scheduling</li>
              </ul>

              <h4>3. Query Performance</h4>
              <p>
                Implemented several optimization techniques:
              </p>
              <ul>
                <li>Prepared statements to reduce parsing overhead</li>
                <li>Connection pooling to minimize connection overhead</li>
                <li>Index-only scans for common query patterns</li>
                <li>Parallel query execution for aggregate calculations</li>
              </ul>

              <h4>4. Cross-Platform Build System</h4>
              <pre><code>{`# CMakeLists.txt structure
cmake_minimum_required(VERSION 3.15)
project(DigiTwinDB)

# PostgreSQL client library
find_package(PostgreSQL REQUIRED)

# Compiler optimizations
if(CMAKE_BUILD_TYPE STREQUAL "Release")
  set(CMAKE_CXX_FLAGS "\${CMAKE_CXX_FLAGS} -O3 -march=native")
endif()

add_executable(digitwin_processor
  src/main.cpp
  src/database.cpp
  src/sensor_buffer.cpp
)

target_link_libraries(digitwin_processor
  PostgreSQL::PostgreSQL
  pthread
)`}</code></pre>
            </div>
          </section>

          {/* Results */}
          <section>
            <h2>Results & Impact</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Performance Gains</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✅ Query response time: <strong>400ms → 150ms average</strong></li>
                    <li>✅ Data ingestion rate: <strong>5K → 50K readings/day</strong></li>
                    <li>✅ Historical queries: <strong>8s → 2s for 30-day range</strong></li>
                    <li>✅ Database size: <strong>30% smaller with compression</strong></li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Research Impact</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✅ Enabled real-time structural monitoring</li>
                    <li>✅ Supported 6-month continuous operation</li>
                    <li>✅ Zero data loss during deployment</li>
                    <li>✅ Published in research paper (pending)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Technical Challenges */}
          <section>
            <h2>Technical Challenges Overcome</h2>
            <div>
              <h3>1. Memory Management</h3>
              <p>
                C++ manual memory management required careful attention to prevent leaks in long-running 
                processes. Implemented RAII patterns and smart pointers throughout.
              </p>

              <h3>2. Concurrent Access</h3>
              <p>
                Multiple sensor threads writing simultaneously required proper synchronization. Used 
                mutexes and lock-free queues to prevent race conditions while maintaining throughput.
              </p>

              <h3>3. Database Connection Handling</h3>
              <p>
                PostgreSQL connections can fail unexpectedly. Implemented automatic reconnection with 
                exponential backoff and transaction rollback on failure.
              </p>

              <h3>4. Cross-Platform Compilation</h3>
              <p>
                Different Linux distributions and embedded systems had varying library versions. CMake 
                configuration needed to handle multiple target platforms gracefully.
              </p>
            </div>
          </section>

          {/* Lessons Learned */}
          <section>
            <h2>Lessons Learned</h2>
            <div>
              <ul>
                <li>
                  <strong>Profiling before optimizing</strong> - Used Valgrind and gprof to identify 
                  actual bottlenecks, not assumed ones
                </li>
                <li>
                  <strong>Database optimization is multi-layered</strong> - Schema design, indexing, 
                  queries, and application code all matter
                </li>
                <li>
                  <strong>Batch operations win</strong> - Bulk inserts were 10x faster than row-by-row
                </li>
                <li>
                  <strong>Error handling is critical</strong> - In long-running systems, everything 
                  that can fail, will fail
                </li>
                <li>
                  <strong>Testing on target hardware</strong> - Performance characteristics differ 
                  significantly between development and embedded systems
                </li>
              </ul>
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <h2>Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="text-sm py-2 px-4">C++17</Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">PostgreSQL 14</Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">CMake</Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">libpq (PostgreSQL C library)</Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">Linux</Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">Docker</Badge>
            </div>
          </section>

          {/* CTA */}
          <section className="border-t pt-8 not-prose">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Need high-performance data processing?</h3>
              <p className="text-muted-foreground mb-6">
                Let&apos;s discuss how I can help optimize your systems.
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
