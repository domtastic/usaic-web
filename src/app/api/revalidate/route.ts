import { revalidatePath } from 'next/cache'
import { NextResponse, type NextRequest } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

// Called by a Sanity webhook whenever content is published, so pages refresh
// right away instead of re-rendering on a short timer (which used up Vercel's
// free ISR write allowance). Pages keep a 1-hour `revalidate` as a fallback.
export async function POST(req: NextRequest) {
  try {
    const secret = process.env.SANITY_REVALIDATE_SECRET
    if (!secret) {
      console.error('SANITY_REVALIDATE_SECRET is not set')
      return NextResponse.json({ message: 'Not configured' }, { status: 500 })
    }

    // parseBody also waits a few seconds so the published change is readable.
    const { isValidSignature, body } = await parseBody<{ _type?: string }>(req, secret)
    if (isValidSignature !== true) {
      return NextResponse.json({ message: 'Invalid signature' }, { status: 401 })
    }

    // Content is shared across pages (events show on the homepage, events page,
    // results, …), so refresh the whole site. Publishes are rare, so this is cheap.
    revalidatePath('/', 'layout')
    return NextResponse.json({ revalidated: true, type: body?._type ?? null })
  } catch (err) {
    console.error('Revalidate webhook failed', err)
    return NextResponse.json({ message: 'Error' }, { status: 500 })
  }
}
