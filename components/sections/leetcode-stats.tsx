"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, TrendingUp, Code2 } from "lucide-react"
import Image from "next/image"

// Updated with real data from LeetCode profile
const leetcodeStats = {
  totalSolved: 69,
  easy: 44,
  medium: 23,
  hard: 2,
  ranking: 0, // Not prominently displayed
  acceptanceRate: 53.2,
  recentSubmissions: [
    { title: "Function Composition", difficulty: "Easy", status: "Accepted" },
    { title: "Array Reduce Transformation", difficulty: "Easy", status: "Accepted" },
    { title: "LRU Cache", difficulty: "Medium", status: "Accepted" },
  ],
}

export function LeetCodeStats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Competitive Programming
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Practicing algorithmic problem-solving on LeetCode to sharpen my technical skills.
          </p>
        </motion.div>

        {/* LeetCode Stats Card using API */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <Card className="border-2 overflow-hidden max-w-2xl w-full">
            <CardContent className="pt-6 flex items-center justify-center">
              <Image
                src="https://leetcode-stats.vercel.app/api?username=egekaya&theme=dark"
                alt="Ege Kaya's LeetCode Stats"
                width={500}
                height={200}
                className="w-full"
                unoptimized
              />
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Total Solved */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="border-2 hover-lift">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Solved
                  </CardTitle>
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{leetcodeStats.totalSolved}</div>
                <p className="text-xs text-muted-foreground mt-1">problems</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Acceptance Rate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border-2 hover-lift">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Success Rate
                  </CardTitle>
                  <Target className="h-5 w-5 text-green-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{leetcodeStats.acceptanceRate}%</div>
                <p className="text-xs text-muted-foreground mt-1">acceptance</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Problem Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="border-2 hover-lift">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Difficulty
                  </CardTitle>
                  <TrendingUp className="h-5 w-5 text-cyan-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                      Easy
                    </Badge>
                    <span className="font-semibold">{leetcodeStats.easy}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20">
                      Medium
                    </Badge>
                    <span className="font-semibold">{leetcodeStats.medium}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">
                      Hard
                    </Badge>
                    <span className="font-semibold">{leetcodeStats.hard}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8"
        >
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-lg">Recent Submissions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {leetcodeStats.recentSubmissions.map((submission, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="font-medium">{submission.title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className={
                          submission.difficulty === "Easy"
                            ? "bg-green-500/10 text-green-500"
                            : submission.difficulty === "Medium"
                            ? "bg-amber-500/10 text-amber-500"
                            : "bg-red-500/10 text-red-500"
                        }
                      >
                        {submission.difficulty}
                      </Badge>
                      <Badge variant="outline" className="bg-green-500/10 text-green-500">
                        {submission.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-muted-foreground">
            View my full profile on{" "}
            <a
              href="https://leetcode.com/egekaya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              LeetCode
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
