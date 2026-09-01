import type { Metadata } from 'next'
import { client } from '@/lib/sanity'
import EventsPageClient from './EventsPageClient'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Events',
  description: 'Upcoming and past ice climbing events, competitions, and festivals.',
}

export interface Event {
  _id: string
  title: string
  slug: { current: string }
  eventType: ('world-cup' | 'continental-cup' | 'ice-festival' | 'local-competition' | 'clinic')[]
  featured?: boolean
  season?: string
  year?: number
  startDate: string
  endDate?: string
  location: {
    venue?: string
    city: string
    state?: string
    country: string
  }
  description?: string
  eventLink?: string
  resultsLink?: string
  resultsPdf?: {
    url: string
  }
  featuredImage?: {
    asset: { _ref: string }
  }
}

async function getEvents(): Promise<Event[]> {
  const query = `*[_type == "event"] | order(startDate desc) {
    _id,
    title,
    slug,
    eventType,
    season,
    year,
    startDate,
    endDate,
    location,
    description,
    eventLink,
    featured,
    resultsLink,
    featuredImage,
    "resultsPdf": resultsPdf {
      "url": asset->url
    }
  }`

  return client.fetch(query)
}

export default async function EventsPage() {
  const events = await getEvents()
  
  return <EventsPageClient events={events} />
}