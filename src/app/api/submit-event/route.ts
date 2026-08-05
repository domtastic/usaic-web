import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createClient } from '@sanity/client'

const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const {
      title,
      eventType,
      startDate,
      endDate,
      venue,
      city,
      state,
      country,
      description,
      eventLink,
      submitterName,
      submitterEmail,
      turnstileToken,
    } = await request.json()

    if (
      !title ||
      !eventType ||
      !startDate ||
      !city ||
      !country ||
      !submitterName ||
      !submitterEmail ||
      !turnstileToken
    ) {
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

    await writeClient.create({
      _type: 'eventSubmission',
      status: 'pending',
      title,
      eventType,
      startDate,
      endDate: endDate || undefined,
      location: { venue, city, state, country },
      description,
      eventLink: eventLink || undefined,
      submitterName,
      submitterEmail,
    })

    await resend.emails.send({
      from: 'USAIC Event Submissions <noreply@usaiceclimbing.org>',
      to: [process.env.CONTACT_EMAIL!, process.env.CONTACT_EMAIL_CC!].filter(Boolean),
      replyTo: submitterEmail,
      subject: `[USAIC Event Submission] ${title}`,
      html: `
        <h2>New Event Submission</h2>
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Type:</strong> ${eventType}</p>
        <p><strong>Dates:</strong> ${startDate}${endDate ? ` – ${endDate}` : ''}</p>
        <p><strong>Location:</strong> ${[venue, city, state, country].filter(Boolean).join(', ')}</p>
        ${description ? `<p><strong>Description:</strong> ${description}</p>` : ''}
        ${eventLink ? `<p><strong>Event Link:</strong> ${eventLink}</p>` : ''}
        <p><strong>Submitted by:</strong> ${submitterName} (${submitterEmail})</p>
        <p>Review it in Sanity Studio under "Event Submissions" → "Needs Review."</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Event submission API error:', err)
    return NextResponse.json({ error: 'Failed to submit event' }, { status: 500 })
  }
}
