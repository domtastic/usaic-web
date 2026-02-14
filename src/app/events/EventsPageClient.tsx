'use client'

import { useState, useMemo } from 'react'
import type { Event } from './page'

type TimeFilter = 'upcoming' | 'past'
type EventTypeFilter = 'all' | 'world-cup' | 'continental-cup' | 'ice-festival' | 'local-competition'

const eventTypeLabels: Record<EventTypeFilter, string> = {
  'all': 'All Events',
  'world-cup': 'World Cup',
  'continental-cup': 'Continental Cup',
  'ice-festival': 'Ice Festival',
  'local-competition': 'Local Competition',
}

const eventTypeBadgeColors: Record<string, string> = {
  'world-cup': 'bg-yellow-500 text-slate-900',
  'continental-cup': 'bg-ice-600 text-white',
  'ice-festival': 'bg-purple-600 text-white',
  'local-competition': 'bg-slate-500 text-white',
}

export default function EventsPageClient({ events }: { events: Event[] }) {
  // Get available seasons from events
  const availableSeasons = useMemo(() => {
    const seasons = new Set<string>()
    events.forEach(event => {
      if (event.season) seasons.add(event.season)
    })
    return Array.from(seasons).sort().reverse()
  }, [events])

  const [selectedSeason, setSelectedSeason] = useState(availableSeasons[0] || '2025-26')
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('upcoming')
  const [typeFilter, setTypeFilter] = useState<EventTypeFilter>('all')

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  // Filter by season
  const seasonEvents = events.filter(event => event.season === selectedSeason)

  // Filter by upcoming/past
  const timeFilteredEvents = seasonEvents.filter(event => {
    const eventEndDate = event.endDate ? new Date(event.endDate) : new Date(event.startDate)
    eventEndDate.setHours(23, 59, 59, 999)

    if (timeFilter === 'upcoming') {
      return eventEndDate >= today
    } else {
      return eventEndDate < today
    }
  })

  // Filter by event type
  const filteredEvents = (() => {
    if (typeFilter === 'all') return timeFilteredEvents
    return timeFilteredEvents.filter(e => e.eventType === typeFilter)
  })()

  // Sort: upcoming = ascending (soonest first), past = descending (most recent first)
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    const dateA = new Date(a.startDate).getTime()
    const dateB = new Date(b.startDate).getTime()
    return timeFilter === 'upcoming' ? dateA - dateB : dateB - dateA
  })

  const formatDate = (start: string, end?: string) => {
    const startDate = new Date(start)
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' }

    if (end && end !== start) {
      const endDate = new Date(end)
      if (startDate.getMonth() === endDate.getMonth() && startDate.getFullYear() === endDate.getFullYear()) {
        return `${startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${endDate.getDate()}, ${endDate.getFullYear()}`
      }
      return `${startDate.toLocaleDateString('en-US', options)} - ${endDate.toLocaleDateString('en-US', options)}`
    }
    return startDate.toLocaleDateString('en-US', options)
  }

  const formatLocation = (location: Event['location']) => {
    const parts = []
    if (location.venue) parts.push(location.venue)
    if (location.city) parts.push(location.city)
    if (location.state) parts.push(location.state)
    if (location.country && location.country !== 'USA' && location.country !== 'United States') {
      parts.push(location.country)
    }
    return parts.join(', ')
  }

  const isEventStartedOrCompleted = (event: Event) => {
    const eventStart = new Date(event.startDate)
    eventStart.setHours(0, 0, 0, 0)
    return today >= eventStart
  }

  // Format season for display (e.g., "2025-26" -> "2025/26")
  const formatSeasonDisplay = (season: string) => season.replace('-', '/')

  return (
    <>
      <section className="relative py-20 md:py-28 bg-usa-navy">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            Events
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {formatSeasonDisplay(selectedSeason)} Ice Climbing Season
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          {/* Season Selector */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3">
              <span className="text-slate-600 font-medium">Season:</span>
              <select
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-usa-navy font-semibold focus:outline-none focus:ring-2 focus:ring-ice-500"
              >
                {availableSeasons.map((season) => (
                  <option key={season} value={season}>
                    {formatSeasonDisplay(season)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Time Filter Toggle */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex bg-slate-100 rounded-lg p-1">
              <button
                onClick={() => setTimeFilter('upcoming')}
                className={`px-6 py-3 rounded-md font-semibold transition-all ${
                  timeFilter === 'upcoming'
                    ? 'bg-usa-navy text-white shadow-md'
                    : 'text-usa-navy hover:bg-slate-200'
                }`}
              >
                Upcoming
              </button>
              <button
                onClick={() => setTimeFilter('past')}
                className={`px-6 py-3 rounded-md font-semibold transition-all ${
                  timeFilter === 'past'
                    ? 'bg-usa-navy text-white shadow-md'
                    : 'text-usa-navy hover:bg-slate-200'
                }`}
              >
                Past
              </button>
            </div>
          </div>

          {/* Event Type Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {(Object.keys(eventTypeLabels) as EventTypeFilter[]).map((type) => (
              <button
                key={type}
                onClick={() => setTypeFilter(type)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  typeFilter === type
                    ? 'bg-usa-navy text-white'
                    : 'bg-slate-100 text-usa-navy hover:bg-slate-200'
                }`}
              >
                {eventTypeLabels[type]}
              </button>
            ))}
          </div>

          {/* Events List */}
          <div className="space-y-4">
            {sortedEvents.map((event) => (
              <div
                key={event._id}
                className="card p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  {/* Date */}
                  <div className="md:w-44 shrink-0">
                    <div className="text-usa-navy font-semibold">
                      {formatDate(event.startDate, event.endDate)}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {event.eventLink ? (
                        <a
                          href={event.eventLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-display text-xl text-usa-navy hover:text-usa-red transition-colors"
                        >
                          {event.title}
                        </a>
                      ) : (
                        <h3 className="font-display text-xl text-usa-navy">
                          {event.title}
                        </h3>
                      )}
                      <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${eventTypeBadgeColors[event.eventType]}`}>
                        {eventTypeLabels[event.eventType]}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm mb-2">
                      {formatLocation(event.location)}
                    </p>
                    {event.description && (
                      <p className="text-slate-600">
                        {event.description}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 shrink-0">
                    {event.eventLink && (
                      <a
                        href={event.eventLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-sm px-4 py-2"
                      >
                        Event Info
                      </a>
                    )}
                    {isEventStartedOrCompleted(event) && (event.resultsLink || event.resultsPdf) && (
                      <a
                        href={event.resultsPdf?.url || event.resultsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm px-4 py-2"
                      >
                        Results
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {sortedEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500">No {timeFilter} events found for this season and category.</p>
              <p className="text-sm text-slate-400 mt-2">Add events in the Sanity Studio at /studio</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
