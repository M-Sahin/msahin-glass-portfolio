import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

interface SendEmailRequest {
  visitorName: string
  visitorEmail: string
  contactReason: string
  message: string
}

// Simple in-memory rate limiter
const rateLimit = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(identifier: string, maxRequests: number = 3, windowMs: number = 3600000): boolean {
  const now = Date.now()
  const record = rateLimit.get(identifier)

  if (!record || now > record.resetTime) {
    rateLimit.set(identifier, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (record.count < maxRequests) {
    record.count++
    return true
  }

  return false
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      request.headers.get("x-real-ip") ||
      "unknown"

    // Check rate limit (3 requests per hour per IP)
    if (!checkRateLimit(clientIp, 3, 3600000)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }

    const body: SendEmailRequest = await request.json()
    const { visitorName, visitorEmail, contactReason, message } = body

    // Validate required fields
    if (!visitorName || !visitorEmail || !contactReason || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(visitorEmail)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    // Get environment variables
    const emailUser = process.env.EMAIL_USER
    const emailPassword = process.env.EMAIL_PASSWORD
    const recipientEmail = "murat.sa25@gmail.com"

    if (!emailUser || !emailPassword) {
      console.error("Email configuration missing")
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      )
    }

    // Create transporter (using Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    })

    // Prepare email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px;">
        <h2 style="color: #4f46e5;">New Contact Message</h2>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>From:</strong> ${visitorName}</p>
          <p><strong>Email:</strong> <a href="mailto:${visitorEmail}">${visitorEmail}</a></p>
          <p><strong>Reason for Contact:</strong> ${contactReason}</p>
          
          <div style="border-top: 1px solid #e5e7eb; margin-top: 20px; padding-top: 20px;">
            <h3 style="color: #4f46e5; margin-bottom: 10px;">Message:</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>

        <div style="color: #6b7280; font-size: 12px; border-top: 1px solid #e5e7eb; padding-top: 15px;">
          <p>This email was sent from your portfolio contact form.</p>
        </div>
      </div>
    `

    const plainTextContent = `
New Contact Message

From: ${visitorName}
Email: ${visitorEmail}
Reason for Contact: ${contactReason}

Message:
${message}

---
This email was sent from your portfolio contact form.
    `.trim()

    // Send email to your personal email
    await transporter.sendMail({
      from: emailUser,
      to: recipientEmail,
      replyTo: visitorEmail,
      subject: `New Contact: ${contactReason} from ${visitorName}`,
      text: plainTextContent,
      html: htmlContent,
    })

    // Send confirmation email to visitor
    await transporter.sendMail({
      from: emailUser,
      to: visitorEmail,
      subject: "Thank you for reaching out",
      text: `Hi ${visitorName},\n\nThank you for getting in touch! I've received your message and will get back to you as soon as possible.\n\nBest regards,\nMurat Sahin`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px;">
          <h2 style="color: #4f46e5;">Thank you for reaching out!</h2>
          <p>Hi ${visitorName},</p>
          <p>I've received your message and will get back to you as soon as possible.</p>
          <p style="margin-top: 30px; color: #6b7280;">Best regards,<br><strong>Murat Sahin</strong></p>
        </div>
      `,
    })

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    )
  }
}
