import { client } from '@/lib/sanity'
import EventsPageClient from './EventsPageClient'

export interface Event {
  _id: string
  title: string
  slug: { current: string }
  eventType: 'world-cup' | 'continental-cup' | 'ice-festival' | 'local-competition'
  season: string
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
}

async function getEvents(): Promise<Event[]> {
  const query = `*[_type == "event"] | order(startDate desc) {
    _id,
    title,
    slug,
    eventType,
    season,
    startDate,
    endDate,
    location,
    description,
    eventLink,
    resultsLink,
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