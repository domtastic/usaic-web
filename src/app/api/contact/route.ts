import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { name, email, subject, message, turnstileToken } = await request.json()

    if (!name || !email || !message || !turnstileToken) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Verify Cloudflare Turnstile token
    const turnstileResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${turnstileToken}`,
    })
    const turnstileData = await turnstileResponse.json()

    if (!turnstileData.success) {
      return NextResponse.json({ error: 'Bot verification failed' }, { status: 403 })
    }

    await resend.emails.send({
      from: 'USAIC Contact Form <noreply@usaiceclimbing.org>',
      to: [process.env.CONTACT_EMAIL!, process.env.CONTACT_EMAIL_CC!].filter(Boolean),
      replyTo: email,
      subject: subject ? `[USAIC Contact] ${subject}` : `[USAIC Contact] Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
