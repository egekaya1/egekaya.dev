"use server"

import { headers } from "next/headers"
import { Resend } from "resend"

const rateLimitMap = new Map<string, { count: number; last: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

const resend = new Resend(process.env.RESEND_API_KEY)

interface EmailData {
  name: string
  email: string
  message: string
}

export async function sendEmail(data: EmailData) {
  try {
    // Rate limiting
    const headersList = await headers()
    const ip = headersList.get("x-forwarded-for") ?? "unknown"
    const now = Date.now()
    const entry = rateLimitMap.get(ip)

    // Check if rate limit exceeded
    if (!entry || now - entry.last > RATE_LIMIT_WINDOW) {
      rateLimitMap.set(ip, { count: 1, last: now })
    } else {
      if (entry.count >= RATE_LIMIT_MAX) {
        return { success: false, error: "Rate limit exceeded. Try again later." }
      }
      entry.count++
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set")
      return {
        success: false,
        error: "Email service not configured",
      }
    }

    if (!process.env.CONTACT_EMAIL) {
      console.error("CONTACT_EMAIL is not set")
      return {
        success: false,
        error: "Contact email not configured",
      }
    }

    const { name, email, message } = data

    // Send email using Resend
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Update this with your verified domain
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Portfolio Contact: Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `.trim(),
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
  </div>

  <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0; border-top: none;">
    <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
      <p style="margin: 0 0 10px 0; color: #666; font-size: 14px;">FROM</p>
      <p style="margin: 0; font-size: 18px; font-weight: 600; color: #333;">${name}</p>
      <p style="margin: 5px 0 0 0; color: #667eea; font-size: 16px;">
        <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
      </p>
    </div>

    <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
      <p style="margin: 0 0 10px 0; color: #666; font-size: 14px;">MESSAGE</p>
      <p style="margin: 0; color: #333; font-size: 16px; white-space: pre-wrap;">${message}</p>
    </div>

    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #999; font-size: 12px;">
      <p style="margin: 0;">This message was sent from your portfolio contact form</p>
      <p style="margin: 5px 0 0 0;">egekaya.dev</p>
    </div>
  </div>
</body>
</html>
      `.trim(),
    })

    return {
      success: true,
    }
  } catch (error) {
    console.error("Failed to send email:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    }
  }
}
