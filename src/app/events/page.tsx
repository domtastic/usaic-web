'use client'

import { useState } from 'react'

type EventType = 'all' | 'world-cup' | 'continental-cup' | 'ice-festival'

const placeholderEvents = [
  {
    id: 1,
    title: 'UIAA Ice Climbing World Cup - Saas-Fee',
    eventType: 'world-cup' as const,
    startDate: '2025-01-18',
    endDate: '2025-01-19',
    location: { city: 'Saas-Fee', country: 'Switzerland' },
    description: 'The first World Cup event of the 2025 season.',
  },
  {
    id: 2,
    title: 'UIAA Ice Climbing World Cup - Champagny',
    eventType: 'world-cup' as const,
    startDate: '2025-01-25',
    endDate: '2025-01-26',
    location: { city: 'Champagny-en-Vanoise', country: 'France' },
    description: 'Second stop on the World Cup tour.',
  },
  {
    id: 3,
    title: 'North American Continental Cup',
    eventType: 'continental-cup' as const,
    startDate: '2025-02-08',
    endDate: '2025-02-09',
    location: { city: 'Ouray', country: 'USA' },
    description: 'Continental championship event in Colorado.',
  },
  {
    id: 4,
    title: 'Ouray Ice Festival',
    eventType: 'ice-festival' as const,
    startDate: '2025-01-23',
    endDate: '2025-01-26',
    location: { city: 'Ouray', country: 'USA' },
    description: 'The largest ice climbing festival in North America.',
  },
]

const eventTypeLabels: Record<EventType, string> = {
  'all': 'All Events',
  'world-cup': 'World Cup',
  'continental-cup': 'Continental Cup',
  'ice-festival': 'Ice Festival',
}

const eventTypeBadgeColors: Record<string, string> = {
  'world-cup': 'bg-gold text-slate-900',
  'continental-cup': 'bg-ice-600 text-white',
  'ice-festival': 'bg-usa-red text-white',
}

export default function EventsPage() {
  const [filter, setFilter] = useState<EventType>('all')

  const filteredEvents = filter === 'all' 
    ? placeholderEvents 
    : placeholderEvents.filter(e => e.eventType === filter)

  const sortedEvents = [...filteredEvents].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  )

  const formatDate = (start: string, end?: string) => {
    const startDate = new Date(start)
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' }
    
    if (end && end !== start) {
      const endDate = new Date(end)
      if (startDate.getMonth() === endDate.getMonth()) {
        return `${startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${endDate.getDate()}, ${endDate.getFullYear()}`
      }
      return `${startDate.toLocaleDateString('en-US', options)} - ${endDate.toLocaleDateString('en-US', options)}`
    }
    return startDate.toLocaleDateString('en-US', options)
  }

  return (
    <>
      <section className="relative py-20 md:py-28 bg-ice-gradient-dark">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            Events
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            World Cup competitions, Continental Cups, and Ice Festivals
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {(Object.keys(eventTypeLabels) as EventType[]).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  filter === type
                    ? 'bg-ice-700 text-white'
                    : 'bg-ice-100 text-ice-700 hover:bg-ice-200'
                }`}
              >
                {eventTypeLabels[type]}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {sortedEvents.map((event) => (
              <div 
                key={event.id}
                className="card p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
              >
                <div className="md:w-40 shrink-0">
                  <div className="text-ice-700 font-semibold">
                    {formatDate(event.startDate, event.endDate)}
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-display text-xl text-ice-900">
                      {event.title}
                    </h3>
                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${eventTypeBadgeColors[event.eventType]}`}>
                      {eventTypeLabels[event.eventType]}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm mb-2">
                    {event.location.city}, {event.location.country}
                  </p>
                  <p className="text-slate-600">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {sortedEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500">No events found for this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
