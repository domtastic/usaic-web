'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import type { Athlete } from './page'

export default function TeamPageClient({ athletes }: { athletes: Athlete[] }) {
  const [activeCategory, setActiveCategory] = useState<'adult' | 'youth'>('adult')

  const filteredAthletes = athletes.filter(a => a.category === activeCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-usa-navy">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            USA National Team
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Meet the athletes representing the United States in international World Cup ice climbing competitions
          </p>
        </div>
      </section>

      {/* Team Content */}
      <section className="section-padding">
        <div className="section-container">
          {/* Category Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-slate-100 rounded-lg p-1">
              <button
                onClick={() => setActiveCategory('adult')}
                className={`px-6 py-3 rounded-md font-semibold transition-all ${
                  activeCategory === 'adult'
                    ? 'bg-usa-navy text-white shadow-md'
                    : 'text-usa-navy hover:bg-slate-200'
                }`}
              >
                Adult Team
              </button>
              <button
                onClick={() => setActiveCategory('youth')}
                className={`px-6 py-3 rounded-md font-semibold transition-all ${
                  activeCategory === 'youth'
                    ? 'bg-usa-navy text-white shadow-md'
                    : 'text-usa-navy hover:bg-slate-200'
                }`}
              >
                Youth Team
              </button>
            </div>
          </div>

          {/* Athletes Grid */}
          {filteredAthletes.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredAthletes.map((athlete) => (
                <Link
                  key={athlete._id}
                  href={`/team/${athlete.slug.current}`}
                  className="card group"
                >
                  
                  
                  <div className="aspect-[3/4] bg-slate-100 relative overflow-hidden">
                    {/* Photo */}
                    {athlete.photo ? (
                      <Image
                        src={urlFor(athlete.photo).width(400).height(533).url()}
                        alt={athlete.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-usa-navy flex items-center justify-center">
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
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-usa-red/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-semibold">View Profile</span>
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="p-4 text-center">
                    <h3 className="font-display text-lg text-usa-navy group-hover:text-usa-red transition-colors">
                      {athlete.name}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {athlete.discipline?.map(d => d.charAt(0).toUpperCase() + d.slice(1)).join(' & ')}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-500">No athletes found in this category.</p>
              <p className="text-sm text-slate-400 mt-2">Add athletes in the Sanity Studio at /studio</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}