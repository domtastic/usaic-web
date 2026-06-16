import Link from 'next/link'
import { client } from '@/lib/sanity'

interface MedalData {
  goldMedals: number
  silverMedals: number
  bronzeMedals: number
  heading?: string
  subheading?: string
}

async function getMedalData(): Promise<MedalData> {
  const query = `*[_type == "medalCount"][0] {
    goldMedals,
    silverMedals,
    bronzeMedals,
    heading,
    subheading
  }`

  return (await client.fetch(query)) || {
    goldMedals: 0,
    silverMedals: 0,
    bronzeMedals: 0,
  }
}

export default async function MedalCount() {
  const data = await getMedalData()
  const totalMedals = (data.goldMedals ?? 0) + (data.silverMedals ?? 0) + (data.bronzeMedals ?? 0)

  if (totalMedals === 0) return null

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-[#050d1f]">
      {/* Atmospheric depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_110%,rgba(12,165,235,0.10),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_15%_15%,rgba(197,38,48,0.07),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <div className="border-l-2 border-usa-red pl-5 mb-16 md:mb-24 animate-fade-in">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-usa-red mb-2">
            World Cup Results
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-white leading-tight">
            {data.heading || 'USA on the Ice World Stage'}
          </h2>
          {data.subheading && (
            <p className="mt-3 text-base text-white/50 max-w-xl">{data.subheading}</p>
          )}
        </div>

        {/* Medal stats — typographic hero */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-16 md:mb-24">

          {/* Gold */}
          <div className="animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
            <div className="h-px w-12 mb-5 bg-gradient-to-r from-yellow-300 via-amber-400 to-transparent" />
            <div
              className="font-display leading-none text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 via-amber-300 to-yellow-600 select-none"
              style={{ fontSize: 'clamp(64px, 11vw, 136px)' }}
            >
              {data.goldMedals ?? 0}
            </div>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-amber-400/60">
              Gold
            </p>
          </div>

          {/* Silver */}
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
            <div className="h-px w-12 mb-5 bg-gradient-to-r from-slate-200 via-gray-400 to-transparent" />
            <div
              className="font-display leading-none text-transparent bg-clip-text bg-gradient-to-b from-slate-100 via-gray-300 to-slate-500 select-none"
              style={{ fontSize: 'clamp(64px, 11vw, 136px)' }}
            >
              {data.silverMedals ?? 0}
            </div>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400/60">
              Silver
            </p>
          </div>

          {/* Bronze */}
          <div className="animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
            <div className="h-px w-12 mb-5 bg-gradient-to-r from-orange-200 via-amber-500 to-transparent" />
            <div
              className="font-display leading-none text-transparent bg-clip-text bg-gradient-to-b from-orange-200 via-amber-400 to-orange-600 select-none"
              style={{ fontSize: 'clamp(64px, 11vw, 136px)' }}
            >
              {data.bronzeMedals ?? 0}
            </div>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-orange-400/60">
              Bronze
            </p>
          </div>
        </div>

        {/* Total + CTA */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-8 border-t border-white/10 animate-fade-in-up"
          style={{ animationDelay: '400ms', animationFillMode: 'both' }}
        >
          <p className="font-display text-xl md:text-2xl text-white/30">
            <span className="text-white">{totalMedals}</span> World Cup medals &amp; counting
          </p>
          <Link
            href="/results"
            className="group inline-flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-ice-300 hover:text-white transition-colors duration-300"
          >
            Explore Full Results
            <span className="block h-px w-8 bg-current transition-all duration-500 group-hover:w-14" />
          </Link>
        </div>

      </div>
    </section>
  )
}
