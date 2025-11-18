import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { ContentArticle } from "@/components/content-article"
import { PostHeader } from "@/components/post-header"

export const metadata: Metadata = {
  title: "PostgreSQL in Production: 40% Faster Queries (Case Notes) | Ege Kaya",
  description:
    "Production-proven PostgreSQL techniques: EXPLAIN ANALYZE, indexing, partitioning, materialized views, connection pooling, and monitoring.",
  openGraph: {
    title: "PostgreSQL in Production: 40% Faster Queries (Case Notes)",
    description:
      "Hands-on Postgres optimization notes: query plans, indexes, partitioning, aggregates, pooling, and observability.",
    url: "https://egekaya.dev/blog/postgresql-query-optimization",
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
            title="PostgreSQL in Production: 40% Faster Queries (Case Notes)"
            badges={["PostgreSQL", "Database", "Performance"]}
            date={{ label: "November 1, 2024", dateTime: "2024-11-01" }}
            readingTime="12 min read"
          />
          <hr />
          <hr />

          {/* Content */}
          <p className="lead">
            Working on a structural monitoring system processing 50,000+ sensor readings daily, 
            I learned PostgreSQL optimization the hard way. These techniques reduced our query 
            response times by 40% and improved system reliability.
          </p>

          <h2>The Problem</h2>
          <p>
            Our sensor data table grew rapidly. What started as snappy queries became progressively 
            slower:
          </p>
          <ul>
            <li>Dashboard loading time: 8+ seconds</li>
            <li>Historical data queries timing out</li>
            <li>Aggregate reports taking minutes</li>
            <li>Database CPU usage spiking during peak hours</li>
          </ul>

          <h2>1. Understanding Query Plans with EXPLAIN ANALYZE</h2>
          <p>
            Before optimizing, measure. <code>EXPLAIN ANALYZE</code> shows exactly what PostgreSQL 
            is doing:
          </p>

          <pre><code>{`-- Problematic query
EXPLAIN ANALYZE
SELECT 
  sensor_id,
  AVG(value) as avg_value,
  MAX(value) as max_value
FROM sensor_readings
WHERE timestamp >= NOW() - INTERVAL '7 days'
GROUP BY sensor_id;

-- Output showed:
-- Seq Scan on sensor_readings (cost=0.00..2500000.00)
-- Planning Time: 2.3ms
-- Execution Time: 8421.5ms`}</code></pre>

          <p>
            <strong>Key insight:</strong> Sequential scan through 2M+ rows. We needed indexes.
          </p>

          <h2>2. Strategic Indexing</h2>
          <p>
            Indexes are critical but come with trade-offs. Here&apos;s what worked:
          </p>

          <pre><code>{`-- B-tree index for timestamp range queries
CREATE INDEX idx_readings_timestamp 
ON sensor_readings(timestamp DESC);

-- Composite index for common query patterns
CREATE INDEX idx_readings_sensor_time 
ON sensor_readings(sensor_id, timestamp DESC);

-- Partial index for recent data (hot data)
CREATE INDEX idx_readings_recent 
ON sensor_readings(timestamp)
WHERE timestamp >= NOW() - INTERVAL '30 days';

-- After indexes, same query:
-- Index Scan using idx_readings_timestamp
-- Execution Time: 421.3ms (95% improvement)`}</code></pre>

          <p><strong>Index selection guidelines:</strong></p>
          <ul>
            <li>Create indexes on WHERE, JOIN, and ORDER BY columns</li>
            <li>Composite indexes for multi-column queries (most selective column first)</li>
            <li>Partial indexes for frequently queried subsets</li>
            <li>Monitor index usage with <code>pg_stat_user_indexes</code></li>
          </ul>

          <h2>3. Table Partitioning for Time-Series Data</h2>
          <p>
            Our sensor readings were perfect for range partitioning by timestamp:
          </p>

          <pre><code>{`-- Create partitioned table
CREATE TABLE sensor_readings (
  id BIGSERIAL,
  sensor_id INTEGER NOT NULL,
  value DECIMAL(10, 2),
  timestamp TIMESTAMP NOT NULL
) PARTITION BY RANGE (timestamp);

-- Create monthly partitions
CREATE TABLE sensor_readings_2024_11 
PARTITION OF sensor_readings
FOR VALUES FROM ('2024-11-01') TO ('2024-12-01');

CREATE TABLE sensor_readings_2024_12
PARTITION OF sensor_readings
FOR VALUES FROM ('2024-12-01') TO ('2025-01-01');

-- Automatic partition creation with pg_cron or application logic
CREATE OR REPLACE FUNCTION create_monthly_partition()
RETURNS void AS $$
DECLARE
  start_date DATE := DATE_TRUNC('month', NOW() + INTERVAL '1 month');
  end_date DATE := start_date + INTERVAL '1 month';
  partition_name TEXT := 'sensor_readings_' || TO_CHAR(start_date, 'YYYY_MM');
BEGIN
  EXECUTE format(
    'CREATE TABLE IF NOT EXISTS %I PARTITION OF sensor_readings
     FOR VALUES FROM (%L) TO (%L)',
    partition_name, start_date, end_date
  );
END;
$$ LANGUAGE plpgsql;`}</code></pre>

          <p><strong>Benefits:</strong></p>
          <ul>
            <li>Query pruning - scans only relevant partitions</li>
            <li>Faster maintenance (VACUUM, ANALYZE)</li>
            <li>Easy archival - drop old partitions</li>
            <li>Better index performance on smaller partitions</li>
          </ul>

          <h2>4. Materialized Views for Aggregates</h2>
          <p>
            Real-time aggregation on millions of rows is expensive. Pre-compute common aggregates:
          </p>

          <pre><code>{`-- Create materialized view for hourly averages
CREATE MATERIALIZED VIEW sensor_hourly_avg AS
SELECT 
  sensor_id,
  DATE_TRUNC('hour', timestamp) as hour,
  AVG(value) as avg_value,
  MIN(value) as min_value,
  MAX(value) as max_value,
  COUNT(*) as reading_count
FROM sensor_readings
GROUP BY sensor_id, DATE_TRUNC('hour', timestamp);

-- Index for fast lookups
CREATE INDEX idx_hourly_avg_sensor_hour 
ON sensor_hourly_avg(sensor_id, hour DESC);

-- Refresh strategy (using pg_cron)
-- Refresh every hour, only recent data
REFRESH MATERIALIZED VIEW CONCURRENTLY sensor_hourly_avg;

-- Query becomes instant:
SELECT * FROM sensor_hourly_avg
WHERE sensor_id = 42
  AND hour >= NOW() - INTERVAL '7 days'
ORDER BY hour DESC;
-- Execution Time: 12ms (instead of 4000ms)`}</code></pre>

          <h2>5. Query Optimization Techniques</h2>

          <h3>Use CTEs for Readability, JOINs for Performance</h3>
          <pre><code>{`-- Before: Slow CTE
WITH recent_readings AS (
  SELECT * FROM sensor_readings 
  WHERE timestamp >= NOW() - INTERVAL '1 day'
)
SELECT sensor_id, AVG(value)
FROM recent_readings
GROUP BY sensor_id;

-- After: Optimized single query
SELECT sensor_id, AVG(value)
FROM sensor_readings
WHERE timestamp >= NOW() - INTERVAL '1 day'
GROUP BY sensor_id;`}</code></pre>

          <h3>LIMIT with Indexes</h3>
          <pre><code>{`-- Slow: Large offset
SELECT * FROM sensor_readings
ORDER BY timestamp DESC
OFFSET 10000 LIMIT 20;

-- Fast: Cursor-based pagination
SELECT * FROM sensor_readings
WHERE timestamp < '2024-11-01 12:00:00'
ORDER BY timestamp DESC
LIMIT 20;`}</code></pre>

          <h3>Batch Inserts</h3>
          <pre><code>{`-- Slow: Individual inserts
for (const reading of readings) {
  await db.query(
    'INSERT INTO sensor_readings (sensor_id, value, timestamp) VALUES ($1, $2, $3)',
    [reading.sensorId, reading.value, reading.timestamp]
  )
}

-- Fast: Batch insert
const values = readings.map(r => 
  \`(\${r.sensorId}, \${r.value}, '\${r.timestamp}')\`
).join(',')

await db.query(
  \`INSERT INTO sensor_readings (sensor_id, value, timestamp) VALUES \${values}\`
)
// 10x faster for large batches`}</code></pre>

          <h2>6. Connection Pooling</h2>
          <p>
            Connection overhead adds up. Use pgBouncer or application-level pooling:
          </p>

          <pre><code>{`// Node.js with pg library
import { Pool } from 'pg'

const pool = new Pool({
  host: 'localhost',
  database: 'sensors',
  max: 20, // Maximum connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

// Reuse connections
const result = await pool.query('SELECT ...')

// vs creating new connection each time (slow)
const client = new Client()
await client.connect()
await client.query('SELECT ...')
await client.end()`}</code></pre>

          <h2>7. Monitoring and Maintenance</h2>
          <p>
            Optimization is ongoing. Monitor these metrics:
          </p>

          <pre><code>{`-- Slow queries
SELECT 
  calls,
  mean_exec_time::numeric(10,2) as avg_time_ms,
  query
FROM pg_stat_statements
ORDER BY mean_exec_time DESC
LIMIT 10;

-- Index usage
SELECT 
  schemaname,
  tablename,
  indexname,
  idx_scan,
  idx_tup_read,
  idx_tup_fetch
FROM pg_stat_user_indexes
WHERE idx_scan = 0
ORDER BY pg_relation_size(indexrelid) DESC;

-- Table bloat
SELECT
  schemaname,
  tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as size
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;`}</code></pre>

          <p><strong>Regular maintenance tasks:</strong></p>
          <ul>
            <li><code>VACUUM ANALYZE</code> - Reclaim space and update statistics</li>
            <li><code>REINDEX</code> - Rebuild bloated indexes</li>
            <li>Monitor with <code>pg_stat_statements</code> extension</li>
            <li>Set up alerts for slow queries (&gt;1s)</li>
          </ul>

          <h2>Results</h2>
          <div className="not-prose bg-secondary/20 p-6 rounded-lg my-6">
            <h3 className="text-lg font-semibold mb-4">Performance Improvements</h3>
            <ul className="space-y-2">
              <li>📊 Dashboard load time: 8s → 1.2s (85% improvement)</li>
              <li>⚡ Average query response: 2.5s → 0.6s (76% improvement)</li>
              <li>💾 Database CPU usage: 75% → 35% average</li>
              <li>📈 Throughput: 2x increase in concurrent queries</li>
            </ul>
          </div>

          <h2>Key Takeaways</h2>
          <ol>
            <li><strong>Measure first</strong> - Use EXPLAIN ANALYZE to identify bottlenecks</li>
            <li><strong>Index strategically</strong> - Focus on query patterns, not every column</li>
            <li><strong>Partition large tables</strong> - Especially for time-series data</li>
            <li><strong>Pre-compute aggregates</strong> - Materialized views for expensive calculations</li>
            <li><strong>Optimize at multiple levels</strong> - Queries, indexes, schema design, and application code</li>
            <li><strong>Monitor continuously</strong> - Performance degrades over time without maintenance</li>
          </ol>

          <h2>Additional Resources</h2>
          <ul>
            <li><a href="https://www.postgresql.org/docs/current/performance-tips.html" target="_blank" rel="noopener noreferrer">PostgreSQL Performance Tips</a></li>
            <li><a href="https://wiki.postgresql.org/wiki/Don%27t_Do_This" target="_blank" rel="noopener noreferrer">PostgreSQL Anti-Patterns</a></li>
            <li><a href="https://explain.depesz.com/" target="_blank" rel="noopener noreferrer">EXPLAIN Analyzer Tool</a></li>
          </ul>

          <div className="not-prose mt-12 pt-8 border-t">
            <p className="text-muted-foreground">
              Need help optimizing your database? Let&apos;s{" "}
              <Link
                href="/#contact"
                className="underline text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                talk
              </Link>
              .
            </p>
          </div>
        </ContentArticle>
      </div>
    </main>
  )
}
