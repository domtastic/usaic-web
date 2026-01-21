import Image from 'next/image'
import Link from 'next/link'

export default function WhatIsDrytoolingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-usa-navy">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            What is Drytooling?
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Understanding ice climbing, mixed climbing, and drytooling—three disciplines united by ice tools
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-slate-600 leading-relaxed">
              Ice climbing encompasses several disciplines that share a common thread: the use of ice axes and crampons to ascend vertical terrain. Whether you're climbing frozen waterfalls, scaling rock in winter conditions, or training year-round in a gym, these sports offer incredible physical and mental challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Ice Climbing */}
      <section className="section-padding bg-ice-50">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-ice-200">
              <div className="absolute inset-0 bg-gradient-to-br from-ice-400 to-ice-600 flex items-center justify-center">
                <p className="text-white font-display text-xl">Ice Climbing Image</p>
              </div>
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-ice-600 text-white text-sm font-semibold rounded-full mb-4">
                Outdoor • Seasonal
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-4">
                Ice Climbing
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                Ice climbing is the art of ascending frozen waterfalls, ice-covered rock faces, and glacial formations using specialized ice axes and crampons. It's a seasonal pursuit, typically practiced during winter months when conditions create climbable ice.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-ice-600 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Climb frozen waterfalls and ice formations
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-ice-600 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Seasonal activity (winter months)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-ice-600 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Popular destinations: Ouray (CO), Hyalite Canyon (MT), Adirondacks (NY)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mixed Climbing */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-3 py-1 bg-slate-700 text-white text-sm font-semibold rounded-full mb-4">
                Outdoor • Seasonal
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-4">
                Mixed Climbing
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                Mixed climbing combines ice climbing and rock climbing techniques on routes that feature both ice and rock. Climbers use ice tools to hook, torque, and pull on rock features while also climbing sections of ice—often in the same pitch.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-700 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Combination of ice and rock terrain
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-700 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Requires both ice and rock climbing skills
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-700 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Often features steep, overhanging terrain
                </li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center">
                <p className="text-white font-display text-xl">Mixed Climbing Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drytooling */}
      <section className="section-padding bg-usa-navy text-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-usa-red to-red-700 flex items-center justify-center">
                <p className="text-white font-display text-xl">Drytooling Image</p>
              </div>
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-usa-red text-white text-sm font-semibold rounded-full mb-4">
                Indoor & Outdoor • Year-Round
              </span>
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Drytooling
              </h2>
              <p className="text-lg text-white/90 mb-4">
                Drytooling is the practice of climbing rock or artificial holds using ice tools—without any ice. Originally developed as training for mixed climbing, it has evolved into its own discipline and is the format used in international competitions.
              </p>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-usa-red mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No ice required—climb year-round
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-usa-red mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Train indoors at climbing gyms
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-usa-red mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Official format for World Cup competitions
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-usa-red mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Most accessible entry point for beginners
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Drytooling Matters */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-4">
              Why Drytooling Matters
            </h2>
            <p className="text-lg text-slate-600">
              Drytooling is the key to growing ice climbing as a sport
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-ice-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-usa-navy mb-3">Year-Round Access</h3>
              <p className="text-slate-600">
                Unlike ice climbing, drytooling can be practiced any time of year at indoor climbing gyms.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-ice-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-usa-navy mb-3">Geographic Reach</h3>
              <p className="text-slate-600">
                Gyms across the country can offer drytooling, bringing the sport to regions without natural ice.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-ice-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-usa-navy mb-3">Pathway to Competition</h3>
              <p className="text-slate-600">
                Drytooling is the format for international competitions, including the push for Olympic inclusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ice-50">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Whether you want to try drytooling at a gym, experience ice climbing at a festival, or train for competition, we can help you find your path.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started/learn" className="btn-primary">
              Learn to Ice Climb
            </Link>
            <Link href="/get-started/gyms" className="btn-secondary">
              Find a Gym
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}