import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

export interface Athlete {
  _id: string
  name: string
  slug: { current: string }
  photo?: {
    asset: {
      _ref: string
    }
  }
  discipline?: string[]
}

interface AthleteGridProps {
  athletes: Athlete[]
  showDiscipline?: boolean
  emptyMessage: string
}

export default function AthleteGrid({ athletes, showDiscipline = false, emptyMessage }: AthleteGridProps) {
  if (athletes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {athletes.map((athlete) => (
        <Link
          key={athlete._id}
          href={`/team/${athlete.slug.current}`}
          className="card group"
        >
          <div className="aspect-[3/4] bg-slate-100 relative overflow-hidden">
            {athlete.photo ? (
              <Image
                src={urlFor(athlete.photo).width(400).height(533).auto('format').quality(80).url()}
                alt={athlete.name}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
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
            {showDiscipline && athlete.discipline?.length ? (
              <p className="text-sm text-slate-500">
                {athlete.discipline.map((d) => d.charAt(0).toUpperCase() + d.slice(1)).join(' & ')}
              </p>
            ) : null}
          </div>
        </Link>
      ))}
    </div>
  )
}
