"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { sendEmail } from "@/app/actions/send-email"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
}

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle")

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading")
    try {
      const result = await sendEmail(data)
      if (result.success) {
        setSubmitStatus("success")
        reset()
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
        setTimeout(() => setSubmitStatus("idle"), 5000)
      }
    } catch {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <SectionHeading
            label="Contact"
            title="Get in Touch"
            subtitle="Open to opportunities, collaborations, and conversations"
            centered
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mt-16 lg:mt-20 max-w-xl mx-auto"
        >
          <Card className="border">
            <CardContent className="pt-6 pb-6">
              {/* Social Links */}
              <div className="flex gap-3 mb-8">
                <Button variant="outline" size="default" asChild className="flex-1 rounded-sm">
                  <a href="https://www.linkedin.com/in/ege-kaya/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="default" asChild className="flex-1 rounded-sm">
                  <a href="https://github.com/egekaya1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>

              {/* Divider */}
              <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-card px-3 label-mono">Or send a message</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="label-mono">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="rounded-sm"
                    {...register("name")}
                    aria-invalid={errors.name ? "true" : "false"}
                    disabled={submitStatus === "loading"}
                    required
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="label-mono">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="rounded-sm"
                    {...register("email")}
                    aria-invalid={errors.email ? "true" : "false"}
                    disabled={submitStatus === "loading"}
                    required
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="label-mono">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    className="rounded-sm resize-none"
                    {...register("message")}
                    aria-invalid={errors.message ? "true" : "false"}
                    disabled={submitStatus === "loading"}
                    required
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive">{errors.message.message}</p>
                  )}
                </div>

                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 p-3 rounded-sm border border-border text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    Message sent. I&apos;ll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 p-3 rounded-sm border border-destructive/30 text-sm text-destructive">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    Failed to send. Please try again later.
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full rounded-sm" disabled={submitStatus === "loading"}>
                  {submitStatus === "loading" ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
                  ) : (
                    <><Send className="h-4 w-4" /> Send Message</>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
