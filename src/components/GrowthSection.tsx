import { client } from '@/lib/sanity'

interface GrowthData {
  gymCount: number
  gymLabel: string
  stateCount: number
  stateLabel: string
  growthPercent: number
  growthLabel: string
  olympicYear: number
  olympicLabel: string
}

async function getGrowthData(): Promise<GrowthData> {
  const query = `*[_type == "growthMetrics"][0]`
  return await client.fetch(query) || {
    gymCount: 25,
    gymLabel: 'Gyms Nationwide',
    stateCount: 30,
    stateLabel: 'States with Access',
    growthPercent: 150,
    growthLabel: 'Growth Since 2020',
    olympicYear: 2030,
    olympicLabel: 'Olympic Bound',
  }
}

export default async function GrowthSection() {
  const data = await getGrowthData()

  const metrics = [
    {
      value: `${data.gymCount}+`,
      label: data.gymLabel,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      value: `${data.stateCount}+`,
      label: data.stateLabel,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      value: `${data.growthPercent}%`,
      label: data.growthLabel,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      value: data.olympicYear.toString(),
      label: data.olympicLabel,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="section-padding bg-usa-navy text-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Why Ice Climbing is Growing
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            From gyms to competitions, ice climbing is expanding across the country
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur"
            >
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-ice-300">
                {metric.icon}
              </div>
              <p className="font-display text-4xl md:text-5xl text-white mb-2">
                {metric.value}
              </p>
              <p className="text-white/70 text-sm md:text-base">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}