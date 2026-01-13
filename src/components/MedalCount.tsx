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
  
  return await client.fetch(query) || {
    goldMedals: 0,
    silverMedals: 0,
    bronzeMedals: 0,
  }
}

export default async function MedalCount() {
  const data = await getMedalData()
  
  const totalMedals = (data.goldMedals || 0) + (data.silverMedals || 0) + (data.bronzeMedals || 0)
  
  if (totalMedals === 0) {
    return null // Don't show section if no medals
  }

  return (
    <section className="section-padding bg-usa-navy text-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            {data.heading || 'US Athletes on the World Stage'}
          </h2>
          {data.subheading && (
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {data.subheading}
            </p>
          )}
        </div>

        {/* Medal Display */}
        <div className="flex flex-wrap justify-center items-end gap-8 md:gap-16 mb-10">
          {/* Gold */}
          <div className="text-center">
            <div className="relative inline-block mb-3">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg shadow-yellow-500/30">
                <span className="font-display text-4xl md:text-5xl text-yellow-900">
                  {data.goldMedals || 0}
                </span>
              </div>
            </div>
            <p className="font-semibold text-lg">Gold</p>
          </div>

          {/* Silver */}
          <div className="text-center">
            <div className="relative inline-block mb-3">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 flex items-center justify-center shadow-lg shadow-slate-400/30">
                <span className="font-display text-4xl md:text-5xl text-slate-700">
                  {data.silverMedals || 0}
                </span>
              </div>
            </div>
            <p className="font-semibold text-lg">Silver</p>
          </div>

          {/* Bronze */}
          <div className="text-center">
            <div className="relative inline-block mb-3">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-orange-300 via-orange-400 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30">
                <span className="font-display text-4xl md:text-5xl text-orange-900">
                  {data.bronzeMedals || 0}
                </span>
              </div>
            </div>
            <p className="font-semibold text-lg">Bronze</p>
          </div>
        </div>

        {/* Total & CTA */}
        <div className="text-center">
          <p className="text-white/70 mb-4">
            <span className="font-display text-2xl text-white">{totalMedals}</span> World Cup medals and counting
          </p>
          <Link 
            href="/results" 
            className="inline-flex items-center text-ice-300 hover:text-white font-semibold transition-colors"
          >
            View Competition Results
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}