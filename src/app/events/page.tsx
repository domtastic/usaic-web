import { client } from '@/lib/sanity'
import EventsPageClient from './EventsPageClient'

export interface Event {
  _id: string
  title: string
  slug: { current: string }
  eventType: 'world-cup' | 'continental-cup' | 'ice-festival' | 'local-competition'
  isUsaCircuit?: boolean
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
}

async function getEvents(): Promise<Event[]> {
  const query = `*[_type == "event"] | order(startDate desc) {
    _id,
    title,
    slug,
    eventType,
    isUsaCircuit,
    startDate,
    endDate,
    location,
    description,
    eventLink,
    resultsLink
  }`
  
  return client.fetch(query)
}

export default async function EventsPage() {
  const events = await getEvents()
  
  return <EventsPageClient events={events} />
}