import Link from 'next/link'
import { client } from '@/lib/sanity'

interface MedalData {
  goldMedals: number
  silverMedals: number
  bronzeMedals: number
}

async function getMedalData(): Promise<MedalData> {
  const query = `*[_type == "medalCount"][0] {
    goldMedals,
    silverMedals,
    bronzeMedals
  }`
  
  return await client.fetch(query) || {
    goldMedals: 0,
    silverMedals: 0,
    bronzeMedals: 0,
  }
}

export default async function MedalDonateSection() {
  const data = await getMedalData()
  const totalMedals = (data.goldMedals || 0) + (data.silverMedals || 0) + (data.bronzeMedals || 0)

  return (
    <section className="bg-slate-900">
      <div className="grid lg:grid-cols-2">
        {/* Left: Medal Count */}
        <div className="section-padding text-white">
          <div className="max-w-lg mx-auto lg:ml-auto lg:mr-12">
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              US Athletes Making History
            </h2>
            <p className="text-white/70 mb-8">
              Our athletes continue to achieve on the international stage, bringing home medals from World Cup competitions.
            </p>

            {/* Medal Display */}
            <div className="flex items-center gap-6 mb-8">
              {/* Gold */}
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg">
                  <span className="font-display text-2xl md:text-3xl text-yellow-900">
                    {data.goldMedals || 0}
                  </span>
                </div>
                <p className="text-white/70 text-sm mt-2">Gold</p>
              </div>

              {/* Silver */}
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 flex items-center justify-center shadow-lg">
                  <span className="font-display text-2xl md:text-3xl text-slate-700">
                    {data.silverMedals || 0}
                  </span>
                </div>
                <p className="text-white/70 text-sm mt-2">Silver</p>
              </div>

              {/* Bronze */}
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-orange-300 via-orange-400 to-orange-600 flex items-center justify-center shadow-lg">
                  <span className="font-display text-2xl md:text-3xl text-orange-900">
                    {data.bronzeMedals || 0}
                  </span>
                </div>
                <p className="text-white/70 text-sm mt-2">Bronze</p>
              </div>
            </div>

            <p className="text-white/50 text-sm">
              {totalMedals} World Cup medals and counting
            </p>
          </div>
        </div>

        {/* Right: Donate */}
        <div className="section-padding bg-usa-red text-white">
          <div className="max-w-lg mx-auto lg:mr-auto lg:ml-12">
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              Help Grow the Sport
            </h2>
            <p className="text-white/90 mb-6">
              Your donation fuels the future of ice climbing in the United States. From expanding gym access and youth programs to supporting elite athletes at World Cup competitions, every contribution strengthens our community.
            </p>
            <p className="text-white/80 mb-8">
              As a 501(c)(3) nonprofit, your donation is tax-deductible.
            </p>

            <Link
              href="/donate"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-usa-red font-semibold text-lg rounded-full hover:bg-slate-100 transition-colors shadow-lg"
            >
              Donate Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}