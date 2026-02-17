'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import type { Athlete, YouthRoster, HistoricalRoster } from './page'

interface TeamPageClientProps {
  athletes: Athlete[]
  youthRoster: YouthRoster | null
  historicalRosters: HistoricalRoster[]
}

type TabType = 'national' | 'youth' | 'historical'

export default function TeamPageClient({ athletes, youthRoster, historicalRosters }: TeamPageClientProps) {
  const [activeTab, setActiveTab] = useState<TabType>('national')
  const [selectedSeason, setSelectedSeason] = useState<string>(
    historicalRosters[0]?.season || ''
  )
  const [historicalCategory, setHistoricalCategory] = useState<'adult' | 'youth'>('adult')

  const filteredAthletes = athletes.filter(a => a.category === 'adult')

  const tabs: { id: TabType; label: string }[] = [
    { id: 'national', label: 'National Team' },
    { id: 'youth', label: 'Youth Team' },
    { id: 'historical', label: 'Past Rosters' },
  ]

  const selectedHistoricalRoster = historicalRosters.find(r => r.season === selectedSeason)
  const filteredHistoricalAthletes = selectedHistoricalRoster?.athletes?.filter(
    a => a.category === historicalCategory
  ) || []

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

      {/* Tabs */}
      <section className="bg-white border-b sticky top-16 z-30">
        <div className="section-container">
          <div className="flex justify-center gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-semibold text-sm whitespace-nowrap transition-colors relative ${
                  activeTab === tab.id
                    ? 'text-usa-navy'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-usa-red" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="section-padding">
        <div className="section-container">
          {/* National Team Tab */}
          {activeTab === 'national' && (
            <>
              {filteredAthletes.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {filteredAthletes.map((athlete) => (
                    <Link
                      key={athlete._id}
                      href={`/team/${athlete.slug.current}`}
                      className="card group"
                    >
                      <div className="aspect-[3/4] bg-slate-100 relative overflow-hidden">
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
                        <div className="absolute inset-0 bg-usa-red/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-white font-semibold">View Profile</span>
                        </div>
                      </div>
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
            </>
          )}

          {/* Youth Team Tab */}
          {activeTab === 'youth' && (
            <>
              {youthRoster && youthRoster.athletes?.length > 0 ? (
                <div className="max-w-md mx-auto text-center">
                  <p className="text-slate-500 text-sm mb-8">
                    {youthRoster.season} Season · {youthRoster.athletes.length} athletes
                  </p>
                  <div className="space-y-3">
                    {youthRoster.athletes.map((athlete, index) => (
                      <div key={index}>
                        <span className="font-medium text-usa-navy">{athlete.name}</span>
                        {athlete.disciplines && athlete.disciplines.length > 0 && (
                          <span className="text-slate-400 text-sm"> · {athlete.disciplines.join(', ')}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-slate-500">Youth roster not yet available.</p>
                  <p className="text-sm text-slate-400 mt-2">Add youth roster in the Sanity Studio at /studio</p>
                </div>
              )}
            </>
          )}

          {/* Historical Rosters Tab */}
          {activeTab === 'historical' && (
            <>
              {historicalRosters.length > 0 ? (
                <div className="max-w-3xl mx-auto">
                  {/* Season Selector & Category Toggle */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <div className="flex items-center gap-2">
                      <label htmlFor="season-select" className="font-medium text-slate-700">
                        Season:
                      </label>
                      <select
                        id="season-select"
                        value={selectedSeason}
                        onChange={(e) => setSelectedSeason(e.target.value)}
                        className="px-4 py-2 border border-slate-300 rounded-lg bg-white text-usa-navy font-medium focus:outline-none focus:ring-2 focus:ring-ice-500 focus:border-ice-500"
                      >
                        {historicalRosters.map((roster) => (
                          <option key={roster._id} value={roster.season}>
                            {roster.season}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Adult/Youth Toggle */}
                    <div className="flex rounded-lg border border-slate-300 overflow-hidden">
                      <button
                        onClick={() => setHistoricalCategory('adult')}
                        className={`px-4 py-2 text-sm font-medium transition-colors ${
                          historicalCategory === 'adult'
                            ? 'bg-usa-navy text-white'
                            : 'bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        Adult
                      </button>
                      <button
                        onClick={() => setHistoricalCategory('youth')}
                        className={`px-4 py-2 text-sm font-medium transition-colors ${
                          historicalCategory === 'youth'
                            ? 'bg-usa-navy text-white'
                            : 'bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        Youth
                      </button>
                    </div>
                  </div>

                  {filteredHistoricalAthletes.length > 0 ? (
                    <div className="max-w-md mx-auto text-center">
                      <p className="text-slate-500 text-sm mb-8">
                        {selectedHistoricalRoster?.season} {historicalCategory === 'youth' ? 'Youth' : 'Adult'} Roster · {filteredHistoricalAthletes.length} athletes
                      </p>
                      <div className="space-y-3">
                        {filteredHistoricalAthletes.map((athlete, index) => (
                          <div key={index}>
                            <span className="font-medium text-usa-navy">{athlete.name}</span>
                            {athlete.disciplines && athlete.disciplines.length > 0 && (
                              <span className="text-slate-400 text-sm"> · {athlete.disciplines.join(', ')}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-slate-500">No {historicalCategory} athletes found for this season.</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-slate-500">No historical rosters available.</p>
                  <p className="text-sm text-slate-400 mt-2">Add historical rosters in the Sanity Studio at /studio</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}
