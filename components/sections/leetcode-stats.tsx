"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Target, TrendingUp, Code2 } from "lucide-react"
import Image from "next/image"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const leetcodeStats = {
  totalSolved: 69,
  easy: 44,
  medium: 23,
  hard: 2,
  acceptanceRate: 53.2,
  recentSubmissions: [
    { title: "Function Composition", difficulty: "Easy", status: "Accepted" },
    { title: "Array Reduce Transformation", difficulty: "Easy", status: "Accepted" },
    { title: "LRU Cache", difficulty: "Medium", status: "Accepted" },
  ],
}

export function LeetCodeStats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mb-12"
        >
          <p className="label-mono mb-3">Competitive Programming</p>
          <h2 className="font-display text-4xl font-light tracking-tight sm:text-5xl">LeetCode</h2>
          <p className="text-base text-muted-foreground mt-3 max-w-md leading-relaxed">
            Practicing algorithmic problem-solving to sharpen technical skills.
          </p>
        </motion.div>

        {/* Stats image */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mb-10"
        >
          <div className="border border-border rounded-sm overflow-hidden w-full">
            <Image
              src="https://leetcode-stats.vercel.app/api?username=egekaya&theme=dark"
              alt="Ege Kaya's LeetCode Stats"
              width={500}
              height={200}
              className="w-full grayscale opacity-75 dark:opacity-50"
              unoptimized
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="grid md:grid-cols-3 gap-px border border-border rounded-sm overflow-hidden bg-border"
        >
          <motion.div variants={fadeUp} className="bg-card p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="label-mono">Total Solved</p>
              <Code2 className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
            <p className="font-display text-4xl font-light">{leetcodeStats.totalSolved}</p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-card p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="label-mono">Success Rate</p>
              <Target className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
            <p className="font-display text-4xl font-light">{leetcodeStats.acceptanceRate}%</p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-card p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="label-mono">Difficulty</p>
              <TrendingUp className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
            <div className="space-y-1.5">
              {[
                { label: "Easy", value: leetcodeStats.easy },
                { label: "Medium", value: leetcodeStats.medium },
                { label: "Hard", value: leetcodeStats.hard },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="label-mono">{label}</span>
                  <span className="text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Recent submissions */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mt-6 border border-border rounded-sm overflow-hidden"
        >
          <div className="bg-card">
            <div className="px-5 py-4 border-b border-border">
              <p className="label-mono">Recent Submissions</p>
            </div>
            <div className="divide-y divide-border">
              {leetcodeStats.recentSubmissions.map((s, i) => (
                <div key={i} className="flex items-center justify-between px-5 py-3">
                  <span className="text-sm">{s.title}</span>
                  <div className="flex items-center gap-3">
                    <span className="label-mono">{s.difficulty}</span>
                    <span className="label-mono text-foreground">{s.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mt-6"
        >
          <a
            href="https://leetcode.com/egekaya"
            target="_blank"
            rel="noopener noreferrer"
            className="label-mono hover:text-foreground transition-colors duration-200 underline-animate"
          >
            View full profile on LeetCode →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
