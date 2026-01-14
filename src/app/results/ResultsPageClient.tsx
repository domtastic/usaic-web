'use client'

import { useState } from 'react'
import type { EventResult } from './page'

// Generate season options (e.g., "2025-26", "2024-25")
function getSeasons(events: EventResult[]): string[] {
  const seasons = new Set<string>()
  
  events.forEach(event => {
    const date = new Date(event.startDate)
    const year = date.getFullYear()
    const month = date.getMonth()
    
    // Season runs Oct - Apr, so Oct-Dec is start of season, Jan-Apr is end
    if (month >= 9) { // Oct-Dec
      seasons.add(`${year}-${(year + 1).toString().slice(-2)}`)
    } else { // Jan-Sept
      seasons.add(`${year - 1}-${year.toString().slice(-2)}`)
    }
  })
  
  return Array.from(seasons).sort().reverse()
}

function getSeasonFromDate(dateStr: string): string {
  const date = new Date(dateStr)
  const year = date.getFullYear()
  const month = date.getMonth()
  
  if (month >= 9) {
    return `${year}-${(year + 1).toString().slice(-2)}`
  } else {
    return `${year - 1}-${year.toString().slice(-2)}`
  }
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function formatLocation(location: EventResult['location']): string {
  const parts = [location.city]
  if (location.state) parts.push(location.state)
  return parts.join(', ')
}

export default function ResultsPageClient({ events }: { events: EventResult[] }) {
  const seasons = getSeasons(events)
  const [selectedSeason, setSelectedSeason] = useState(seasons[0] || '2025-26')
  
  const filteredEvents = events.filter(
    event => getSeasonFromDate(event.startDate) === selectedSeason
  )

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-usa-navy">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            US Competition Results
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Results from USA Circuit and local ice climbing competitions
          </p>
        </div>
      </section>

      {/* Season Filter */}
      <section className="py-8 bg-slate-50 border-b">
        <div className="section-container">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-slate-600 font-medium">Season:</span>
            <div className="flex flex-wrap gap-2">
              {seasons.map((season) => (
                <button
                  key={season}
                  onClick={() => setSelectedSeason(season)}
                  className={`px-5 py-2 rounded-full font-semibold transition-all ${
                    selectedSeason === season
                      ? 'bg-usa-navy text-white shadow-md'
                      : 'bg-white text-usa-navy hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {season}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results List */}
      <section className="section-padding">
        <div className="section-container">
          {filteredEvents.length > 0 ? (
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {filteredEvents.map((event) => (
                  <div
                    key={event._id}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                  >
                    <div className="p-6 flex flex-col md:flex-row md:items-center gap-4">
                      {/* Date Badge */}
                      <div className="md:w-32 shrink-0">
                        <div className="inline-flex md:flex flex-col items-center justify-center bg-usa-navy text-white rounded-lg px-4 py-2 md:w-full">
                          <span className="text-sm font-medium opacity-80">
                            {new Date(event.startDate).toLocaleDateString('en-US', { month: 'short' })}
                          </span>
                          <span className="text-2xl font-display">
                            {new Date(event.startDate).getDate()}
                          </span>
                        </div>
                      </div>

                      {/* Event Info */}
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-display text-xl text-usa-navy">
                            {event.title}
                          </h3>
                          {event.isUsaCircuit && (
                            <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-usa-red text-white">
                              🇺🇸 USA Circuit
                            </span>
                          )}
                        </div>
                        <p className="text-slate-500">
                          {event.location.venue && `${event.location.venue} • `}
                          {formatLocation(event.location)}
                        </p>
                      </div>

                      {/* Results Button */}
                      <div className="shrink-0">
                        {event.resultsPdf?.url ? (
                          <a
                            href={event.resultsPdf.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-usa-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Results PDF
                          </a>
                        ) : event.resultsLink ? (
                          <a
                            href={event.resultsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-usa-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            View Results
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-usa-navy mb-2">No Results Yet</h3>
              <p className="text-slate-500">
                Results for the {selectedSeason} season will be posted as competitions are completed.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* World Cup Results Link */}
      <section className="section-padding bg-slate-50">
        <div className="section-container text-center">
          <h2 className="font-display text-2xl md:text-3xl text-usa-navy mb-4">
            Looking for World Cup Results?
          </h2>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            View complete results from UIAA Ice Climbing World Cup and Continental Cup events.
          </p>
          <a
            href="https://iceclimbing.sport/results"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View on UIAA Website →
          </a>
        </div>
      </section>
    </>
  )
}