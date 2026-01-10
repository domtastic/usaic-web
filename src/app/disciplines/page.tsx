export default function DisciplinesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-usa-navy">
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
      {/* Fixed image container – added better alt text, lazy loading & object-cover for nice fit */}
      <div className="aspect-video md:aspect-[4/3] bg-ice-100 rounded-2xl overflow-hidden">
        <img
          src="/LeadClimbingPhoto.jpg"           // ← This is the key fix!
          alt="Athlete performing lead ice climbing on a tall artificial ice structure"
          className="w-full h-full object-cover" // Ensures it fills nicely without distortion
          loading="lazy"                         // Improves initial page load speed
        />
      </div>

      <div>
        <span className="inline-block px-3 py-1 bg-usa-red text-white text-sm font-semibold rounded-full mb-4">
          Lead Climbing
        </span>
        <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-4">
          The Art of Difficulty
        </h2>
        <p className="text-lg text-slate-600 mb-6">
          Lead climbing is all about reaching the highest point on a challenging route within a time limit. 
          Athletes must navigate overhanging ice structures, demonstrating technical skill, power, and 
          problem-solving ability.
        </p>
        <ul className="space-y-3 text-usa-navy">
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
            <span>Judged on on the highest hold reached and time (if-tied)</span>
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
        <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-4">
          Racing Against Time
        </h2>
        <p className="text-lg text-slate-600 mb-6">
          Speed climbing is a head-to-head, or single lane timed race up a standardized ice wall. Athletes race to touch the finish buzzer at the top. The fastest times are measured 
          to the thousands of a second.
        </p>
        <ul className="space-y-3 text-slate-600">
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-ice-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Head-to-head bracket-style competition, or single lane best timed run</span>
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
            <span>Explosive power and hand-eye coordination are essential</span>
          </li>
        </ul>
      </div>

      <div className="order-1 md:order-2 aspect-video md:aspect-[4/3] bg-ice-100 rounded-2xl overflow-hidden">
        <img
          src="/SpeedIceClimbingPhoto.jpg"
          alt="Athlete racing in speed ice climbing competition, sprinting up standardized 15m ice wall to hit the top buzzer"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>
    </>
  )
}
