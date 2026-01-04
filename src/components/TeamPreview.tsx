import Link from 'next/link'

// Placeholder athletes - will be replaced with Sanity data
const placeholderAthletes = [
  { id: 1, name: 'Athlete Name', discipline: 'Lead' },
  { id: 2, name: 'Athlete Name', discipline: 'Speed' },
  { id: 3, name: 'Athlete Name', discipline: 'Lead' },
  { id: 4, name: 'Athlete Name', discipline: 'Speed' },
]

export default function TeamPreview() {
  return (
    <section className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-ice-900 mb-4">
            Meet Team USA
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our athletes represent the best of American ice climbing, competing at the highest 
            levels on the world stage.
          </p>
        </div>

        {/* Athlete Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
          {placeholderAthletes.map((athlete) => (
            <div 
              key={athlete.id}
              className="card group cursor-pointer"
            >
              {/* Photo placeholder */}
              <div className="aspect-[3/4] bg-ice-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-ice-gradient-dark flex items-center justify-center">
                  <svg 
                    className="w-16 h-16 text-white/50" 
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
                <h3 className="font-display text-lg text-ice-900">{athlete.name}</h3>
                <p className="text-sm text-slate-500">{athlete.discipline}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/team" className="btn-outline">
            View Full Team
          </Link>
        </div>
      </div>
    </section>
  )
}
