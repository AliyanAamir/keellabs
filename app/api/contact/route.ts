import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const { name, email, company, service, budget, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: "Keel lab Contact <faizan@keellab.com>",
      to: ["faizan@keellab.com"],
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` — ${company}` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #ea580c; margin-bottom: 24px;">New Contact Form Submission</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; width: 120px; vertical-align: top;">Name</td>
              <td style="padding: 8px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #ea580c;">${email}</a></td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Company</td>
              <td style="padding: 8px 0;">${company}</td>
            </tr>` : ""}
            ${service ? `
            <tr>
              <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Service</td>
              <td style="padding: 8px 0;">${service}</td>
            </tr>` : ""}
            ${budget ? `
            <tr>
              <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Budget</td>
              <td style="padding: 8px 0;">${budget}</td>
            </tr>` : ""}
          </table>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />

          <h3 style="color: #111827; margin-bottom: 12px;">Message</h3>
          <p style="color: #374151; line-height: 1.6; white-space: pre-wrap;">${message}</p>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
          <p style="color: #9ca3af; font-size: 12px;">Sent via Keel lab contact form</p>
        </div>
      `,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
  }
}
