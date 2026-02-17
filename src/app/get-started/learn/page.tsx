import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Learn to Ice Climb',
  description: 'Everything you need to know to start ice climbing — find gyms, festivals, guides, and courses.',
}

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
        <div className="section-container max-w-3xl">
          <p className="text-xl text-slate-600 leading-relaxed text-center">
            Ice climbing might look intimidating, but with the right guidance, anyone can learn. Whether you start at a local gym, attend an ice festival, or hire a guide, there are many paths into this incredible sport.
          </p>
        </div>
      </section>

      {/* Ways to Get Started */}
      <section className="section-padding bg-slate-50">
        <div className="section-container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-usa-navy text-center mb-12">
            Ways to Get Started
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Gyms */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col">
              <h3 className="font-display text-xl text-usa-navy mb-2">
                Gyms with Drytooling
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                The most accessible way to start. Indoor drytooling walls let you learn ice tool techniques year-round in a controlled, safe environment.
              </p>
              <ul className="space-y-1.5 text-slate-600 text-sm mb-5">
                <li className="pl-3 border-l-2 border-ice-300">Year-round availability</li>
                <li className="pl-3 border-l-2 border-ice-300">Gear often available to rent</li>
                <li className="pl-3 border-l-2 border-ice-300">Instruction and community</li>
              </ul>
              <div className="mt-auto">
                <Link href="/get-started/gyms" className="btn-primary inline-block text-sm">
                  Find a Gym
                </Link>
              </div>
            </div>

            {/* Ice Festivals */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col">
              <h3 className="font-display text-xl text-usa-navy mb-2">
                Ice Festivals
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                Ice climbing festivals offer beginner clinics, gear demos, and guided climbing. An immersive way to experience the sport surrounded by an enthusiastic community.
              </p>
              <ul className="space-y-1.5 text-slate-600 text-sm mb-5">
                <li className="pl-3 border-l-2 border-ice-300">Beginner-friendly clinics</li>
                <li className="pl-3 border-l-2 border-ice-300">Gear provided or available to rent</li>
                <li className="pl-3 border-l-2 border-ice-300">Meet the climbing community</li>
              </ul>
              <div className="mt-auto">
                <Link href="/events" className="btn-primary inline-block text-sm">
                  View Upcoming Festivals
                </Link>
              </div>
            </div>

            {/* Guided Experiences */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col">
              <h3 className="font-display text-xl text-usa-navy mb-2">
                Guided Experiences
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                Professional mountain guides offer one-on-one and small group instruction. The fastest way to get on real ice with expert coaching tailored to your skill level.
              </p>
              <ul className="space-y-1.5 text-slate-600 text-sm mb-5">
                <li className="pl-3 border-l-2 border-ice-300">Personalized instruction</li>
                <li className="pl-3 border-l-2 border-ice-300">All gear typically provided</li>
                <li className="pl-3 border-l-2 border-ice-300">Climb real ice with expert safety</li>
              </ul>
              <div className="mt-auto">
                <a
                  href="https://amga.com/hire-a-guide/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-block text-sm"
                >
                  Find an AMGA Guide
                </a>
              </div>
            </div>

            {/* Clinics & Courses */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col">
              <h3 className="font-display text-xl text-usa-navy mb-2">
                Clinics & Courses
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                Many gyms and outdoor programs offer structured courses from intro sessions to multi-day clinics. Progressive skill building in a group setting.
              </p>
              <ul className="space-y-1.5 text-slate-600 text-sm mb-5">
                <li className="pl-3 border-l-2 border-ice-300">Structured curriculum</li>
                <li className="pl-3 border-l-2 border-ice-300">Learn with others at your level</li>
                <li className="pl-3 border-l-2 border-ice-300">Often more affordable than private guiding</li>
              </ul>
              <div className="mt-auto">
                <Link href="/get-started/gyms" className="btn-secondary inline-block text-sm">
                  Find Gyms Offering Clinics
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl text-usa-navy text-center mb-12">
            What to Expect Your First Time
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2">Step 1</h3>
              <h4 className="font-display text-xl text-usa-navy mb-2">Gear Introduction</h4>
              <p className="text-slate-600 pl-4 border-l-2 border-slate-200">
                You'll be introduced to ice tools, crampons (for ice) or approach shoes (for drytooling), a helmet, and harness. Don't worry — instruction is always provided on proper use.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2">Step 2</h3>
              <h4 className="font-display text-xl text-usa-navy mb-2">Basic Technique</h4>
              <p className="text-slate-600 pl-4 border-l-2 border-slate-200">
                Learn how to swing and place your tools, position your body, and move efficiently. Most people are surprised how quickly they pick up the fundamentals.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2">Step 3</h3>
              <h4 className="font-display text-xl text-usa-navy mb-2">Top-Rope Climbing</h4>
              <p className="text-slate-600 pl-4 border-l-2 border-slate-200">
                Beginners climb on top-rope, meaning you're always connected to a rope from above. It's safe, and you can focus on technique without worrying about falls.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2">Step 4</h3>
              <h4 className="font-display text-xl text-usa-navy mb-2">The Pump</h4>
              <p className="text-slate-600 pl-4 border-l-2 border-slate-200">
                Your forearms will get tired — that's normal! Ice climbing is a full-body workout. Take breaks, shake out your arms, and enjoy the process of building strength.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-slate-50">
        <div className="section-container max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl text-usa-navy text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-6">
              <h3 className="font-display text-lg text-usa-navy mb-2">
                Do I need to be in great shape?
              </h3>
              <p className="text-slate-600">
                Not at all! Ice climbing is accessible to a wide range of fitness levels. While it is physical, good technique matters more than raw strength. You'll build fitness as you climb more.
              </p>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <h3 className="font-display text-lg text-usa-navy mb-2">
                Do I need rock climbing experience?
              </h3>
              <p className="text-slate-600">
                No prior climbing experience is necessary. While rock climbing experience can help, ice climbing uses different techniques and many people start directly with ice tools.
              </p>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <h3 className="font-display text-lg text-usa-navy mb-2">
                What should I wear?
              </h3>
              <p className="text-slate-600">
                For gym drytooling: athletic clothes you can move in. For outdoor ice: layered clothing, waterproof outer layer, warm gloves, and insulated boots (guides often provide mountaineering boots).
              </p>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <h3 className="font-display text-lg text-usa-navy mb-2">
                Is it dangerous?
              </h3>
              <p className="text-slate-600">
                Like any climbing sport, there are inherent risks, but with proper instruction, equipment, and safety practices, ice climbing is a manageable adventure sport. Always learn from qualified instructors.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg text-usa-navy mb-2">
                Do I need to buy gear?
              </h3>
              <p className="text-slate-600">
                Not to start! Gyms rent gear, festivals provide it, and guides include it. Once you're hooked and climbing regularly, you can start investing in your own equipment.
              </p>
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
