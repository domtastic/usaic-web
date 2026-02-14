import { client } from '@/lib/sanity'
import ResultsPageClient from './ResultsPageClient'

export interface EventResult {
    _id: string
    title: string
    eventType: string
    startDate: string
    endDate?: string
    location: {
      venue?: string
      city: string
      state?: string
      country: string
    }
    resultsLink?: string
    resultsPdf?: {
      url: string
    }
  }

async function getResultsEvents(): Promise<EventResult[]> {
  const query = `*[_type == "event" && eventType in ["local-competition", "ice-festival"] && (defined(resultsLink) || defined(resultsPdf))] | order(startDate desc) {
    _id,
    title,
    eventType,
    startDate,
    endDate,
    location,
    resultsLink,
    "resultsPdf": resultsPdf {
      "url": asset->url
    }
  }`

  return client.fetch(query)
}

export default async function ResultsPage() {
  const events = await getResultsEvents()
  
  return <ResultsPageClient events={events} />
}