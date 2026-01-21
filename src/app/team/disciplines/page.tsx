import Link from 'next/link'

export default function CompetitionDisciplinesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-usa-navy">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            Competition Disciplines
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Lead and Speed—the two formats of international ice climbing competition
          </p>
        </div>
      </section>

      {/* Lead Climbing */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-ice-200">
              <div className="absolute inset-0 bg-gradient-to-br from-ice-400 to-ice-600 flex items-center justify-center">
                <p className="text-white font-display text-xl">Lead Climbing Video/Image</p>
              </div>
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-ice-600 text-white text-sm font-semibold rounded-full mb-4">
                Lead
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-4">
                Lead Climbing
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Lead climbing tests endurance, technique, and problem-solving on complex overhanging routes. Athletes have a set time to climb as high as possible on routes they've never seen before.
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-ice-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Format:</strong> Athletes climb as high as possible within the time limit</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-ice-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Scoring:</strong> Height reached determines placement</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-ice-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Style:</strong> On-sight (routes unseen until competition)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Speed Climbing */}
      <section className="section-padding bg-ice-50">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-3 py-1 bg-usa-red text-white text-sm font-semibold rounded-full mb-4">
                Speed
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-4">
                Speed Climbing
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Speed climbing is a head-to-head race up a standardized route. Athletes compete in bracket-style elimination rounds, with races often decided by fractions of a second.
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-usa-red mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Format:</strong> Head-to-head races on identical routes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-usa-red mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Scoring:</strong> Fastest time wins, bracket elimination</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-usa-red mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Style:</strong> Known route, pure athleticism and precision</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-200 order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-usa-red to-red-700 flex items-center justify-center">
                <p className="text-white font-display text-xl">Speed Climbing Video/Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combined */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-6">
              Combined Format
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              In some competitions, athletes compete in both Lead and Speed, with their combined results determining the overall ranking. This format showcases the complete ice climbing skillset and is proposed for potential Olympic inclusion.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-usa-navy text-white">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Watch the Action
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            See Lead and Speed climbing in action at World Cup events streamed live on the UIAA YouTube channel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.youtube.com/playlist?list=PL0DMtATwEZ0jR6KC7LcrqljP-nZZGpqZG"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Watch World Cup Videos
            </a>
            <Link href="/events" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-usa-navy transition-colors">
              View Event Schedule
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}