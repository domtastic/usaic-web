import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createClient } from '@sanity/client'

const MAX_POSTER_SIZE = 4 * 1024 * 1024 // 4MB

// World Cups and Continental Cups are scheduled by USAIC directly, not submitted publicly.
const ALLOWED_EVENT_TYPES = ['ice-festival', 'local-competition', 'clinic']

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
    const formData = await request.formData()

    const title = formData.get('title') as string
    const eventType = formData.getAll('eventType') as string[]
    const startDate = formData.get('startDate') as string
    const endDate = formData.get('endDate') as string
    const venue = formData.get('venue') as string
    const city = formData.get('city') as string
    const state = formData.get('state') as string
    const country = formData.get('country') as string
    const description = formData.get('description') as string
    const eventLink = formData.get('eventLink') as string
    const submitterName = formData.get('submitterName') as string
    const submitterEmail = formData.get('submitterEmail') as string
    const turnstileToken = formData.get('turnstileToken') as string
    const posterImage = formData.get('posterImage')

    if (
      !title ||
      !eventType.length ||
      !startDate ||
      !city ||
      !country ||
      !submitterName ||
      !submitterEmail ||
      !turnstileToken
    ) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (!eventType.every((t) => ALLOWED_EVENT_TYPES.includes(t))) {
      return NextResponse.json({ error: 'Invalid event type' }, { status: 400 })
    }

    let posterFile: File | null = null
    if (posterImage instanceof File && posterImage.size > 0) {
      if (!posterImage.type.startsWith('image/')) {
        return NextResponse.json({ error: 'Poster must be an image file' }, { status: 400 })
      }
      if (posterImage.size > MAX_POSTER_SIZE) {
        return NextResponse.json({ error: 'Poster image must be under 4MB' }, { status: 400 })
      }
      posterFile = posterImage
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

    let posterImageField: { _type: 'image'; asset: { _type: 'reference'; _ref: string } } | undefined
    if (posterFile) {
      const asset = await writeClient.assets.upload('image', Buffer.from(await posterFile.arrayBuffer()), {
        filename: posterFile.name,
      })
      posterImageField = { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
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
      posterImage: posterImageField,
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
        <p><strong>Type:</strong> ${eventType.join(', ')}</p>
        <p><strong>Dates:</strong> ${startDate}${endDate ? ` – ${endDate}` : ''}</p>
        <p><strong>Location:</strong> ${[venue, city, state, country].filter(Boolean).join(', ')}</p>
        ${description ? `<p><strong>Description:</strong> ${description}</p>` : ''}
        ${eventLink ? `<p><strong>Event Link:</strong> ${eventLink}</p>` : ''}
        ${posterFile ? `<p><strong>Poster attached:</strong> yes</p>` : ''}
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
