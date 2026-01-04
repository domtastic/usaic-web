export default function DisciplinesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-ice-gradient-dark">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            Ice Climbing Disciplines
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Discover the two competitive disciplines in ice climbing
          </p>
        </div>
      </section>

      {/* Lead Climbing */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="aspect-video md:aspect-[4/3] bg-ice-100 rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-ice-gradient flex items-center justify-center">
                <p className="text-white font-display text-xl">Lead Climbing Image</p>
              </div>
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-usa-red text-white text-sm font-semibold rounded-full mb-4">
                Lead Climbing
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-ice-900 mb-4">
                The Art of Difficulty
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Lead climbing is all about reaching the highest point on a challenging route within a time limit. 
                Athletes must navigate overhanging ice structures, demonstrating technical skill, power, and 
                problem-solving ability.
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-ice-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Athletes have 6-8 minutes to climb as high as possible</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-ice-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Routes feature artificial ice structures up to 20 meters tall</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-ice-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Judged on height reached and style of climbing</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-ice-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Requires technical precision and endurance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Speed Climbing */}
      <section className="section-padding bg-ice-50">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="inline-block px-3 py-1 bg-usa-red text-white text-sm font-semibold rounded-full mb-4">
                Speed Climbing
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-ice-900 mb-4">
                Racing Against Time
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Speed climbing is a head-to-head race up a standardized ice wall. Two athletes compete 
                side by side, racing to touch the finish buzzer at the top. The fastest times are measured 
                in seconds.
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-ice-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Head-to-head bracket-style competition</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-ice-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Standardized wall height of approximately 15 meters</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-ice-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>World-class times under 10 seconds</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-ice-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Explosive power and technique are essential</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 aspect-video md:aspect-[4/3] bg-ice-100 rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-ice-gradient-dark flex items-center justify-center">
                <p className="text-white font-display text-xl">Speed Climbing Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
