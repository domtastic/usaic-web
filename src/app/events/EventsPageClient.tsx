'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Event } from './page'
import { EVENT_TYPE_LABELS, COMPETITIVE_EVENT_TYPES, toEventTypeArray } from '@/lib/eventTypes'
import { parseLocalDate } from '@/lib/utils'
import { urlFor } from '@/lib/sanity'
import { CalendarDays } from 'lucide-react'

type TimeFilter = 'upcoming' | 'past'
type EventTypeFilter = 'all' | 'world-cup' | 'continental-cup' | 'ice-festival' | 'local-competition' | 'clinic'

const eventTypeLabels: Record<EventTypeFilter, string> = {
  'all': 'All Events',
  ...EVENT_TYPE_LABELS,
}

const eventTypeBadgeColors: Record<string, string> = {
  'world-cup': 'bg-yellow-500 text-slate-900',
  'continental-cup': 'bg-ice-600 text-white',
  'ice-festival': 'bg-purple-600 text-white',
  'local-competition': 'bg-slate-500 text-white',
  'clinic': 'bg-emerald-600 text-white',
}

// Used as the card media panel for events without a featuredImage, so the
// listing still reads as intentional rather than "missing a photo."
const eventTypeFallbackGradients: Record<string, string> = {
  'world-cup': 'from-slate-900 via-usa-navy to-slate-800',
  'continental-cup': 'from-ice-800 to-ice-950',
  'ice-festival': 'from-purple-800 to-purple-950',
  'local-competition': 'from-slate-700 to-slate-900',
  'clinic': 'from-emerald-800 to-emerald-950',
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

  const [selectedSeason, setSelectedSeason] = useState(availableSeasons[0] || '2025-2026')
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('upcoming')
  const [typeFilter, setTypeFilter] = useState<EventTypeFilter>('all')

  // Season only applies to World Cup / Continental Cup events — everything
  // else just uses upcoming/past, no season concept to filter by.
  const isCompFilter = (COMPETITIVE_EVENT_TYPES as string[]).includes(typeFilter)

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  // Filter by season (only when viewing competitive event types)
  const seasonEvents = isCompFilter ? events.filter(event => event.season === selectedSeason) : events

  // Filter by upcoming/past
  const timeFilteredEvents = seasonEvents.filter(event => {
    const eventEndDate = event.endDate ? parseLocalDate(event.endDate) : parseLocalDate(event.startDate)
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
    return timeFilteredEvents.filter(e => toEventTypeArray(e.eventType).includes(typeFilter))
  })()

  // Sort: upcoming = ascending (soonest first), past = descending (most recent first)
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    const dateA = parseLocalDate(a.startDate).getTime()
    const dateB = parseLocalDate(b.startDate).getTime()
    return timeFilter === 'upcoming' ? dateA - dateB : dateB - dateA
  })

  const formatDate = (start: string, end?: string) => {
    const startDate = parseLocalDate(start)
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' }

    if (end && end !== start) {
      const endDate = parseLocalDate(end)
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
    const eventStart = parseLocalDate(event.startDate)
    eventStart.setHours(0, 0, 0, 0)
    return today >= eventStart
  }

  const formatSeasonDisplay = (season: string) => {
    if (season.startsWith('summer-')) return `Summer ${season.replace('summer-', '')}`
    return season.replace('-', '/')
  }

  return (
    <>
      <section className="relative py-24 md:py-36 overflow-hidden bg-usa-navy">
        <Image
          src="/SpeedIceClimbingPhoto.jpg"
          alt="Athletes racing head-to-head at a UIAA Ice Climbing World Cup speed event"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-usa-navy/70 to-usa-navy/95" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-4">
            Events
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
            {isCompFilter
              ? `${formatSeasonDisplay(selectedSeason)} Ice Climbing Season`
              : 'Upcoming and past ice climbing events, competitions, and festivals'}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          {/* Season Selector — only relevant for World Cup / Continental Cup */}
          {isCompFilter && (
            <div className="flex justify-center mb-4">
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
          )}

          <div className="text-center mb-6">
            <Link
              href="/events/submit"
              className="text-ice-600 hover:text-ice-700 font-medium text-sm transition-colors"
            >
              Have an event to add? Submit it →
            </Link>
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
          <div className="space-y-5">
            {sortedEvents.map((event) => {
              const primaryType = toEventTypeArray(event.eventType)[0]
              return (
                <div
                  key={event._id}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Media */}
                    <div className="relative w-full h-44 sm:h-auto sm:w-64 shrink-0 overflow-hidden">
                      {event.featuredImage ? (
                        <Image
                          src={urlFor(event.featuredImage).width(500).height(500).fit('crop').url()}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(min-width: 640px) 256px, 100vw"
                        />
                      ) : (
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${
                            eventTypeFallbackGradients[primaryType] || 'from-slate-700 to-slate-900'
                          } flex items-center justify-center`}
                        >
                          <CalendarDays className="w-10 h-10 text-white/15" strokeWidth={1.25} />
                        </div>
                      )}
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg shadow-sm">
                        <p className="text-usa-navy font-display text-sm leading-none whitespace-nowrap">
                          {formatDate(event.startDate, event.endDate)}
                        </p>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="flex-grow min-w-0">
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
                          {toEventTypeArray(event.eventType).map((type) => (
                            <span
                              key={type}
                              className={`px-2 py-0.5 text-xs font-semibold rounded-full ${eventTypeBadgeColors[type]}`}
                            >
                              {eventTypeLabels[type as EventTypeFilter] || type}
                            </span>
                          ))}
                        </div>
                        <p className="text-slate-500 text-sm mb-2">
                          {formatLocation(event.location)}
                        </p>
                        {event.description && (
                          <p className="text-slate-600 line-clamp-2">
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
                </div>
              )
            })}
          </div>

          {sortedEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500">
                No {timeFilter} events found for this category{isCompFilter ? ' and season' : ''}.
              </p>
              <p className="text-sm text-slate-400 mt-2">Add events in the Sanity Studio at /studio</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
