import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '2030 Olympics',
  description: "Ice climbing's path to the 2030 Winter Olympics and USAIC's role in the Olympic bid.",
}

const timeline = [
  {
    year: '2014',
    title: 'First UIAA World Cup',
    description: 'Ice climbing becomes an official UIAA sport with sanctioned competitions.',
    completed: true,
  },
  {
    year: '2020',
    title: 'Olympic Recognition',
    description: 'Ice climbing gains provisional recognition from the IOC.',
    completed: true,
  },
  {
    year: '2024',
    title: 'French Alps Bid Announced',
    description: 'The 2030 French Alps Winter Olympics announces ice climbing as a potential sport.',
    completed: true,
  },
  {
    year: '2025',
    title: 'Final Decision',
    description: 'IOC to make final decision on ice climbing inclusion for 2030.',
    completed: false,
  },
  {
    year: '2030',
    title: 'Olympic Debut',
    description: 'Ice climbing makes its Olympic debut in the French Alps.',
    completed: false,
  },
]

export default function Olympics2030Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-ice-gradient-dark" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative section-container text-center text-white">
          <span className="inline-block px-4 py-2 bg-usa-red text-white font-semibold rounded-full mb-6">
            2030 Winter Olympics
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Road to the Olympics
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Ice climbing is on the path to Olympic inclusion. Join us in supporting our athletes 
            and the global movement to bring this incredible sport to the world stage.
          </p>
        </div>
      </section>

      {/* About the Bid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-ice-900 mb-6">
              Ice Climbing&apos;s Olympic Journey
            </h2>
            <p className="text-lg text-slate-600">
              The International Climbing and Mountaineering Federation (UIAA) has been working 
              tirelessly to bring ice climbing to the Olympic Games. The 2030 French Alps Winter 
              Olympics represents our best opportunity yet to showcase this thrilling sport to 
              a global audience.
            </p>
          </div>

          {/* Image placeholder */}
          <div className="aspect-video max-w-4xl mx-auto bg-ice-100 rounded-2xl overflow-hidden mb-16">
            <div className="w-full h-full bg-ice-gradient flex items-center justify-center">
              <p className="text-white font-display text-xl">Olympic Bid Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-ice-50">
        <div className="section-container">
          <h2 className="font-display text-3xl md:text-4xl text-ice-900 text-center mb-12">
            Timeline to 2030
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-ice-200 -translate-x-1/2" />

              {/* Timeline items */}
              {timeline.map((item, index) => (
                <div 
                  key={item.year}
                  className={`relative flex items-start gap-6 md:gap-0 mb-12 last:mb-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      item.completed 
                        ? 'bg-ice-600 text-white' 
                        : 'bg-white border-4 border-ice-300 text-ice-600'
                    }`}>
                      {item.completed ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="text-xs font-bold">{item.year.slice(-2)}</span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <span className="text-usa-red font-bold">{item.year}</span>
                      <h3 className="font-display text-xl text-ice-900 mt-1 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl text-ice-900 mb-6">
            Support the Journey
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Your support helps our athletes train and compete at the highest levels, 
            bringing us one step closer to Olympic inclusion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="btn-primary">
              Donate Now
            </Link>
            <Link href="/team" className="btn-outline">
              Meet the Athletes
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
