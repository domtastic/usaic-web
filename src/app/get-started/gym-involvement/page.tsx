import Link from 'next/link'

export default function GymInvolvementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-usa-navy">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            Get Your Gym Involved
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Bring drytooling to your climbing gym and help grow the sport
          </p>
        </div>
      </section>

      {/* Why Add Drytooling */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-6">
              Why Add Drytooling?
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Drytooling is one of the fastest-growing disciplines in climbing. Adding it to your gym creates a unique offering, attracts new members, and helps develop the next generation of ice climbers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-14 h-14 bg-ice-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-display text-lg text-usa-navy mb-2">Growing Sport</h3>
              <p className="text-slate-600 text-sm">
                Ice climbing is on the path to Olympic inclusion, driving increasing interest.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-14 h-14 bg-ice-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-display text-lg text-usa-navy mb-2">New Members</h3>
              <p className="text-slate-600 text-sm">
                Attract climbers looking for unique training and new challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-14 h-14 bg-ice-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-display text-lg text-usa-navy mb-2">Community</h3>
              <p className="text-slate-600 text-sm">
                Build a dedicated community of ice climbing enthusiasts at your gym.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-14 h-14 bg-ice-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-display text-lg text-usa-navy mb-2">Competition Host</h3>
              <p className="text-slate-600 text-sm">
                Opportunity to host USA Circuit competitions and events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Needed */}
      <section className="section-padding bg-ice-50">
        <div className="section-container">
          <h2 className="font-display text-3xl md:text-4xl text-usa-navy text-center mb-12">
            What's Needed
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-display text-xl text-usa-navy mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-ice-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </span>
                Wall Space
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Dedicated section or full wall
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Overhanging terrain preferred (30-50°)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Can retrofit existing walls in many cases
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-display text-xl text-usa-navy mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-ice-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                Equipment
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Drytooling-specific holds
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Rental ice tools (gym-safe picks)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Standard climbing safety gear
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-display text-xl text-usa-navy mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-ice-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                Safety
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Staff training on drytooling protocols
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Clear rules for tool handling
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Helmet requirements
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-display text-xl text-usa-navy mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-ice-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                Insurance
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Most climbing gym policies cover drytooling
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Verify with your provider
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Updated waivers for tool use
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* USAIC Support */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-6">
              How USAIC Can Help
            </h2>
            <p className="text-xl text-slate-600">
              We're here to support gyms in adding drytooling to their offerings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-usa-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-usa-navy mb-2">Consultation</h3>
              <p className="text-slate-600">
                Free guidance on setup, equipment sourcing, and best practices
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-usa-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-usa-navy mb-2">Promotion</h3>
              <p className="text-slate-600">
                Feature your gym on our website and social media channels
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-usa-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-usa-navy mb-2">Events</h3>
              <p className="text-slate-600">
                Opportunity to host USA Circuit competitions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-usa-navy text-white">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Let's Talk
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Interested in bringing drytooling to your gym? We'd love to hear from you and help you get started.
          </p>
          <a 
            href="mailto:usaiceclimbing@gmail.com?subject=Gym%20Drytooling%20Inquiry"
            className="btn-primary"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  )
}