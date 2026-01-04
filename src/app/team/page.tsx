'use client'

import { useState } from 'react'
import Link from 'next/link'

// Placeholder athletes - will be replaced with Sanity data
const placeholderAthletes = {
  adult: [
    { id: 1, name: 'John Smith', discipline: ['lead'], slug: 'john-smith' },
    { id: 2, name: 'Jane Doe', discipline: ['speed'], slug: 'jane-doe' },
    { id: 3, name: 'Mike Johnson', discipline: ['lead', 'speed'], slug: 'mike-johnson' },
    { id: 4, name: 'Sarah Williams', discipline: ['lead'], slug: 'sarah-williams' },
    { id: 5, name: 'Chris Brown', discipline: ['speed'], slug: 'chris-brown' },
    { id: 6, name: 'Emily Davis', discipline: ['lead'], slug: 'emily-davis' },
  ],
  youth: [
    { id: 7, name: 'Alex Turner', discipline: ['lead'], slug: 'alex-turner' },
    { id: 8, name: 'Jordan Lee', discipline: ['speed'], slug: 'jordan-lee' },
    { id: 9, name: 'Casey Martinez', discipline: ['lead', 'speed'], slug: 'casey-martinez' },
    { id: 10, name: 'Taylor Anderson', discipline: ['lead'], slug: 'taylor-anderson' },
  ],
}

export default function TeamPage() {
  const [activeCategory, setActiveCategory] = useState<'adult' | 'youth'>('adult')

  const athletes = placeholderAthletes[activeCategory]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-ice-gradient-dark">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            Team USA
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Meet the athletes representing the United States in international ice climbing competitions
          </p>
        </div>
      </section>

      {/* Team Content */}
      <section className="section-padding">
        <div className="section-container">
          {/* Category Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-ice-100 rounded-lg p-1">
              <button
                onClick={() => setActiveCategory('adult')}
                className={`px-6 py-3 rounded-md font-semibold transition-all ${
                  activeCategory === 'adult'
                    ? 'bg-ice-700 text-white shadow-md'
                    : 'text-ice-700 hover:bg-ice-200'
                }`}
              >
                Adult Team
              </button>
              <button
                onClick={() => setActiveCategory('youth')}
                className={`px-6 py-3 rounded-md font-semibold transition-all ${
                  activeCategory === 'youth'
                    ? 'bg-ice-700 text-white shadow-md'
                    : 'text-ice-700 hover:bg-ice-200'
                }`}
              >
                Youth Team
              </button>
            </div>
          </div>

          {/* Athletes Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {athletes.map((athlete) => (
              <Link
                key={athlete.id}
                href={`/team/${athlete.slug}`}
                className="card group"
              >
                {/* Photo placeholder */}
                <div className="aspect-[3/4] bg-ice-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-ice-gradient-dark flex items-center justify-center">
                    <svg 
                      className="w-20 h-20 text-white/50" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                      />
                    </svg>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-usa-red/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-semibold">View Profile</span>
                  </div>
                </div>
                
                {/* Info */}
                <div className="p-4 text-center">
                  <h3 className="font-display text-lg text-ice-900 group-hover:text-usa-red transition-colors">
                    {athlete.name}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {athlete.discipline.map(d => d.charAt(0).toUpperCase() + d.slice(1)).join(' & ')}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State (if no athletes) */}
          {athletes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500">No athletes found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
