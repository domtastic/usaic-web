import Link from 'next/link'

export default function LearnToIceClimbPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-usa-navy">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            Learn to Ice Climb
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Your journey into ice climbing and drytooling starts here
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-6">
              Your Journey Starts Here
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Ice climbing might look intimidating, but with the right guidance, anyone can learn. Whether you start at a local gym, attend an ice festival, or hire a guide, there are many paths into this incredible sport.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Started */}
      <section className="section-padding bg-ice-50">
        <div className="section-container">
          <h2 className="font-display text-3xl md:text-4xl text-usa-navy text-center mb-12">
            Ways to Get Started
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Gyms */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-ice-400 to-ice-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-usa-navy mb-3">
                  Gyms with Drytooling
                </h3>
                <p className="text-slate-600 mb-4">
                  The most accessible way to start. Indoor drytooling walls let you learn ice tool techniques year-round in a controlled, safe environment. Many gyms offer intro classes and rent gear.
                </p>
                <ul className="space-y-2 text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Year-round availability
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Gear often available to rent
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Instruction and community
                  </li>
                </ul>
                <Link href="/get-started/gyms" className="btn-primary w-full text-center">
                  Find a Gym
                </Link>
              </div>
            </div>

            {/* Ice Festivals */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-usa-navy mb-3">
                  Ice Festivals
                </h3>
                <p className="text-slate-600 mb-4">
                  Ice climbing festivals across the country offer beginner clinics, gear demos, and guided climbing. It's an immersive way to experience the sport surrounded by an enthusiastic community.
                </p>
                <ul className="space-y-2 text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Beginner-friendly clinics
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Gear provided or available to rent
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Meet the climbing community
                  </li>
                </ul>
                <Link href="/events" className="btn-primary w-full text-center">
                  View Upcoming Festivals
                </Link>
              </div>
            </div>

            {/* Guided Experiences */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-usa-navy mb-3">
                  Guided Experiences
                </h3>
                <p className="text-slate-600 mb-4">
                  Professional mountain guides offer one-on-one and small group ice climbing instruction. This is the fastest way to get on real ice with expert coaching tailored to your skill level.
                </p>
                <ul className="space-y-2 text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Personalized instruction
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    All gear typically provided
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Climb real ice with expert safety
                  </li>
                </ul>
                <a 
                  href="https://amga.com/hire-a-guide/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-center"
                >
                  Find an AMGA Guide →
                </a>
              </div>
            </div>

            {/* Clinics & Courses */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-usa-navy mb-3">
                  Clinics & Courses
                </h3>
                <p className="text-slate-600 mb-4">
                  Many gyms and outdoor programs offer structured courses ranging from intro sessions to multi-day clinics. These provide progressive skill building in a group setting.
                </p>
                <ul className="space-y-2 text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Structured curriculum
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Learn with others at your level
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Often more affordable than private guiding
                  </li>
                </ul>
                <Link href="/get-started/gyms" className="btn-secondary w-full text-center">
                  Find Gyms Offering Clinics
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-usa-navy text-center mb-12">
              What to Expect Your First Time
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-ice-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="font-display text-xl text-ice-600">1</span>
                </div>
                <div>
                  <h3 className="font-display text-xl text-usa-navy mb-2">Gear Introduction</h3>
                  <p className="text-slate-600">
                    You'll be introduced to ice tools, crampons (for ice) or approach shoes (for drytooling), a helmet, and harness. Don't worry—instruction is always provided on proper use.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-ice-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="font-display text-xl text-ice-600">2</span>
                </div>
                <div>
                  <h3 className="font-display text-xl text-usa-navy mb-2">Basic Technique</h3>
                  <p className="text-slate-600">
                    Learn how to swing and place your tools, position your body, and move efficiently. Most people are surprised how quickly they pick up the fundamentals.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-ice-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="font-display text-xl text-ice-600">3</span>
                </div>
                <div>
                  <h3 className="font-display text-xl text-usa-navy mb-2">Top-Rope Climbing</h3>
                  <p className="text-slate-600">
                    Beginners climb on top-rope, meaning you're always connected to a rope from above. It's safe, and you can focus on technique without worrying about falls.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-ice-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="font-display text-xl text-ice-600">4</span>
                </div>
                <div>
                  <h3 className="font-display text-xl text-usa-navy mb-2">The Pump</h3>
                  <p className="text-slate-600">
                    Your forearms will get tired—that's normal! Ice climbing is a full-body workout. Take breaks, shake out your arms, and enjoy the process of building strength.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-ice-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-usa-navy text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-display text-lg text-usa-navy mb-2">
                  Do I need to be in great shape?
                </h3>
                <p className="text-slate-600">
                  Not at all! Ice climbing is accessible to a wide range of fitness levels. While it is physical, good technique matters more than raw strength. You'll build fitness as you climb more.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-display text-lg text-usa-navy mb-2">
                  Do I need rock climbing experience?
                </h3>
                <p className="text-slate-600">
                  No prior climbing experience is necessary. While rock climbing experience can help, ice climbing uses different techniques and many people start directly with ice tools.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-display text-lg text-usa-navy mb-2">
                  What should I wear?
                </h3>
                <p className="text-slate-600">
                  For gym drytooling: athletic clothes you can move in. For outdoor ice: layered clothing, waterproof outer layer, warm gloves, and insulated boots (guides often provide mountaineering boots).
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-display text-lg text-usa-navy mb-2">
                  Is it dangerous?
                </h3>
                <p className="text-slate-600">
                  Like any climbing sport, there are inherent risks, but with proper instruction, equipment, and safety practices, ice climbing is a manageable adventure sport. Always learn from qualified instructors.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-display text-lg text-usa-navy mb-2">
                  Do I need to buy gear?
                </h3>
                <p className="text-slate-600">
                  Not to start! Gyms rent gear, festivals provide it, and guides include it. Once you're hooked and climbing regularly, you can start investing in your own equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-usa-navy text-white">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Take the First Step
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Find a gym near you or check out upcoming ice festivals and clinics to start your ice climbing journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started/gyms" className="btn-primary">
              Find a Gym
            </Link>
            <Link href="/events" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-usa-navy transition-colors">
              View Events
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}