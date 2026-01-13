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
    <section className="py-16 md:py-24 bg-gradient-to-b from-usa-red to-usa-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-ice-200 to-white">
            {data.heading || 'USA on the Ice World Stage'}
          </h2>
          {data.subheading && (
            <p className="mt-4 text-xl text-white/70 max-w-3xl mx-auto">
              {data.subheading}
            </p>
          )}
        </div>

        {/* Circular Medal Display */}
        <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-4xl mx-auto mb-16 animate-fade-in-up animation-delay-200">
          {/* Gold */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-amber-600/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/15 rounded-full aspect-square w-full max-w-[180px] mx-auto flex flex-col items-center justify-center shadow-2xl shadow-black/30 transition-all duration-500 group-hover:scale-110 group-hover:shadow-yellow-500/30 group-hover:ring-2 group-hover:ring-yellow-400/50">
              <div className="text-6xl md:text-7xl lg:text-8xl font-display font-black text-yellow-300 drop-shadow-lg">
                {data.goldMedals ?? 0}
              </div>
              <p className="mt-2 text-lg font-semibold uppercase tracking-wide text-yellow-200/90">Gold</p>
            </div>
          </div>

          {/* Silver */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-300/20 to-slate-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/15 rounded-full aspect-square w-full max-w-[180px] mx-auto flex flex-col items-center justify-center shadow-2xl shadow-black/30 transition-all duration-500 group-hover:scale-110 group-hover:shadow-slate-400/30 group-hover:ring-2 group-hover:ring-slate-300/50">
              <div className="text-6xl md:text-7xl lg:text-8xl font-display font-black text-slate-200 drop-shadow-lg">
                {data.silverMedals ?? 0}
              </div>
              <p className="mt-2 text-lg font-semibold uppercase tracking-wide text-slate-300/90">Silver</p>
            </div>
          </div>

          {/* Bronze */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-700/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/15 rounded-full aspect-square w-full max-w-[180px] mx-auto flex flex-col items-center justify-center shadow-2xl shadow-black/30 transition-all duration-500 group-hover:scale-110 group-hover:shadow-orange-500/30 group-hover:ring-2 group-hover:ring-orange-400/50">
              <div className="text-6xl md:text-7xl lg:text-8xl font-display font-black text-orange-300 drop-shadow-lg">
                {data.bronzeMedals ?? 0}
              </div>
              <p className="mt-2 text-lg font-semibold uppercase tracking-wide text-orange-200/90">Bronze</p>
            </div>
          </div>
        </div>

        {/* Total & CTA */}
        <div className="text-center animate-fade-in-up animation-delay-400">
          <p className="text-2xl md:text-3xl font-display mb-6">
            <span className="text-white font-bold">{totalMedals}</span>
            <span className="text-white/60"> World Cup medals & counting</span>
          </p>

          <Link
            href="/results"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-ice-300 hover:text-white font-semibold text-lg transition-all duration-500 hover:bg-white/15 hover:shadow-xl hover:shadow-ice-500/20 hover:scale-105"
          >
            Explore Full Results
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}