import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Users, TrendingUp, Zap, Calendar } from "lucide-react"
import { ContentArticle } from "@/components/content-article"
import { PostHeader } from "@/components/post-header"

export const metadata: Metadata = {
  title: "Discord Bot Automation - Case Study | Ege Kaya",
  description: "How I automated role assignment for 200+ members, reducing manual management time by 95% using Discord.js and Supabase.",
  openGraph: {
    title: "Discord Bot Automation - Case Study",
    url: "https://egekaya.dev/case-studies/discord-bot-automation",
  },
}

export default function CaseStudy() {
  const readingTime = "8 min read"
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
            title="Discord Bot Automation for PoliTo Organization"
            badges={["Discord.js", "Node.js", "Supabase", "Automation"]}
            readingTime={readingTime}
            externalLinks={[
              { label: "View Source Code", href: "https://github.com/egekaya1/PRT-role-bot", icon: <ExternalLink className="h-4 w-4" /> },
            ]}
          />
          <p className="lead">
            Automated role assignment system for 200+ member university Discord server, reducing manual management time by 95%
          </p>

          {/* Key Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 not-prose">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">200+</div>
                    <div className="text-sm text-muted-foreground">Active Members</div>
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
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-sm text-muted-foreground">Time Saved</div>
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
                    <div className="text-2xl font-bold">1000+</div>
                    <div className="text-sm text-muted-foreground">Assignments</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/10">
                    <Calendar className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
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
                The PoliTo student organization managed a Discord server for 200+ engineering students. 
                Each semester, new students joined and needed appropriate course-specific roles for access 
                to private channels. The manual process was time-consuming and error-prone:
              </p>
              <ul>
                <li><strong>2 hours per week</strong> spent manually assigning roles</li>
                <li><strong>Human errors</strong> leading to incorrect permissions</li>
                <li><strong>Delayed access</strong> - new members waited hours or days for roles</li>
                <li><strong>No audit trail</strong> - difficult to track role changes</li>
                <li><strong>Scalability issues</strong> - process didn&apos;t scale with growing membership</li>
              </ul>
            </div>
          </section>

          {/* Solution */}
          <section>
            <h2>The Solution</h2>
            <div>
              <p>
                I developed a Discord bot that automates the entire role assignment process with real-time 
                synchronization and audit logging.
              </p>

              <h3>Architecture</h3>
              <ol>
                <li><strong>Discord.js Bot</strong> - Listens for member joins and command interactions</li>
                <li><strong>Supabase Backend</strong> - Stores member data, role mappings, and audit logs</li>
                <li><strong>Role Verification System</strong> - Validates university email addresses</li>
                <li><strong>Automated Assignment</strong> - Assigns roles based on course enrollment</li>
              </ol>

              <h3>Key Features</h3>
              <ul>
                <li><strong>Self-service role selection</strong> via slash commands (<code>/roles</code>)</li>
                <li><strong>Email verification</strong> with university domain checking</li>
                <li><strong>Bulk operations</strong> for administrators</li>
                <li><strong>Real-time sync</strong> with Supabase for role state management</li>
                <li><strong>Audit logging</strong> - all role changes tracked with timestamps</li>
                <li><strong>Error recovery</strong> - automatic retry logic for failed operations</li>
              </ul>

              <h3>Technical Implementation</h3>
              <pre><code>{`// Slash command handler
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return
  
  if (interaction.commandName === 'roles') {
    const courses = await supabase
      .from('courses')
      .select('*')
      .eq('active', true)
    
    const embed = new EmbedBuilder()
      .setTitle('Select Your Courses')
      .setDescription('React with emojis to get course roles')
      .addFields(
        courses.data.map(course => ({
          name: course.code,
          value: course.name
        }))
      )
    
    await interaction.reply({ embeds: [embed] })
  }
})

// Role assignment with error handling
async function assignRole(member, roleId) {
  try {
    await member.roles.add(roleId)
    
    // Log to Supabase
    await supabase.from('role_assignments').insert({
      user_id: member.id,
      role_id: roleId,
      assigned_at: new Date().toISOString()
    })
    
    return { success: true }
  } catch (error) {
    console.error('Role assignment failed:', error)
    return { success: false, error }
  }
}`}</code></pre>
            </div>
          </section>

          {/* Results */}
          <section>
            <h2>Results & Impact</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Time Savings</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✅ Manual assignment time: <strong>2 hours/week → 5 minutes/month</strong></li>
                    <li>✅ New member onboarding: <strong>24 hours → instant</strong></li>
                    <li>✅ Role updates: <strong>Manual → Automated</strong></li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Quality Improvements</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✅ Assignment errors: <strong>~10/week → 0</strong></li>
                    <li>✅ Uptime: <strong>99.9%</strong> (monitored via UptimeRobot)</li>
                    <li>✅ Member satisfaction: <strong>Significant increase</strong></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Lessons Learned */}
          <section>
            <h2>Lessons Learned</h2>
            <div>
              <ul>
                <li>
                  <strong>Start with MVP</strong> - Initially built basic role assignment, then added 
                  features based on user feedback
                </li>
                <li>
                  <strong>Error handling is critical</strong> - Discord API rate limits and network issues 
                  required robust retry logic
                </li>
                <li>
                  <strong>Audit logs save time</strong> - When issues arise, logs make debugging 10x faster
                </li>
                <li>
                  <strong>User experience matters</strong> - Slash commands are more intuitive than text commands
                </li>
                <li>
                  <strong>Documentation is key</strong> - Good README reduced support questions by 80%
                </li>
              </ul>
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <h2>Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="text-sm py-2 px-4">Discord.js v14</Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">Node.js 18</Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">Supabase</Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">PostgreSQL</Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">Docker</Badge>
            </div>
          </section>

          {/* CTA */}
          <section className="border-t pt-8 not-prose">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Interested in automation solutions?</h3>
              <p className="text-muted-foreground mb-6">
                I&apos;d love to discuss how automation can solve your team&apos;s challenges.
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
