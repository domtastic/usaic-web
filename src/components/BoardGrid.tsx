'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

interface BoardMemberCard {
  _id: string
  name: string
  role: string
  bio?: string
  photoUrl?: string
}

function getInitials(name: string) {
  return name.split(' ').map((n) => n[0]).slice(0, 2).join('').toUpperCase()
}

export default function BoardGrid({ members }: { members: BoardMemberCard[] }) {
  const [selected, setSelected] = useState<BoardMemberCard | null>(null)

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setSelected(null)
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <>
      {/* Card Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {members.map((member) => (
          <button
            key={member._id}
            onClick={() => setSelected(member)}
            className="group text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-usa-red focus-visible:ring-offset-2 rounded-xl"
          >
            {/* Photo */}
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-100 mb-3 shadow-sm group-hover:shadow-md transition-shadow duration-300">
              {member.photoUrl ? (
                <Image
                  src={member.photoUrl}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-ice-50">
                  <span className="font-display text-3xl text-ice-600">{getInitials(member.name)}</span>
                </div>
              )}
              <div className="absolute inset-0 bg-usa-navy/0 group-hover:bg-usa-navy/25 transition-colors duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                <span className="text-white text-xs font-semibold uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                  View Bio
                </span>
              </div>
            </div>

            {/* Name & Role */}
            <p className="text-xs font-semibold uppercase tracking-widest text-usa-red mb-0.5">{member.role}</p>
            <h3 className="font-display text-base text-usa-navy group-hover:text-usa-red transition-colors duration-200 leading-snug">
              {member.name}
            </h3>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selected.name}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-usa-navy/75 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-white rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors duration-200"
            >
              <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col sm:flex-row">
              {/* Photo panel */}
              <div className="relative w-full sm:w-48 sm:shrink-0 aspect-square sm:aspect-auto bg-ice-50 sm:min-h-[300px]">
                {selected.photoUrl ? (
                  <Image
                    src={selected.photoUrl}
                    alt={selected.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-display text-5xl text-ice-600">{getInitials(selected.name)}</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col justify-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-usa-red mb-1">{selected.role}</p>
                <h2 className="font-display text-2xl md:text-3xl text-usa-navy mb-4 leading-tight">{selected.name}</h2>
                {selected.bio ? (
                  <>
                    <div className="w-8 h-0.5 bg-usa-red mb-4" />
                    <p className="text-slate-600 leading-relaxed text-sm">{selected.bio}</p>
                  </>
                ) : (
                  <p className="text-slate-400 text-sm italic">No bio available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
