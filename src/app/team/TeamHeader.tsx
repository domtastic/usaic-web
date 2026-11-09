import Link from 'next/link'

type Team = 'worldCup' | 'youth'

const teams: { id: Team; label: string; href: string }[] = [
  { id: 'worldCup', label: 'National Team', href: '/team' },
  { id: 'youth', label: 'Youth Team', href: '/team/youth' },
]

interface TeamHeaderProps {
  active: Team
  title: string
  subtitle: string
}

export default function TeamHeader({ active, title, subtitle }: TeamHeaderProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-usa-navy">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">{title}</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">{subtitle}</p>
        </div>
      </section>

      {/* Team switcher */}
      <nav aria-label="Teams" className="bg-white border-b sticky top-16 z-30">
        <div className="section-container">
          <div className="flex w-full md:justify-center md:gap-1">
            {teams.map((team) => (
              <Link
                key={team.id}
                href={team.href}
                aria-current={active === team.id ? 'page' : undefined}
                className={`flex-1 md:flex-none px-2 sm:px-4 md:px-6 py-3 md:py-4 font-semibold text-xs sm:text-sm text-center leading-snug transition-colors relative ${
                  active === team.id ? 'text-usa-navy' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {team.label}
                {active === team.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-usa-red" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}
