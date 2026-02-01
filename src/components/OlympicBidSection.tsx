import Link from 'next/link'
import Image from 'next/image'

export default function OlympicBidSection() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[70vh] lg:min-h-[80vh]">
        {/* Left: Full-bleed photo */}
        <div className="relative lg:order-1 h-[50vh] lg:h-auto">
          <Image
            src="/FrenchAlps2030-Photo.JPEG"
            alt="Stunning French Alps landscape – potential 2030 Winter Olympics venue for ice climbing"
            fill
            className="object-cover brightness-[0.92] contrast-[1.05]"
            sizes="(max-width: 1023px) 100vw, 50vw"
            priority
          />
          {/* Subtle overlay gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </div>

        {/* Right: Content – centered vertically with fixed background */}
        <div className="relative flex items-center justify-center px-6 py-16 md:px-12 lg:px-16 lg:py-0">
          {/* Fixed Background Image - stays in place while content scrolls */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(/parisOlympics.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}
          />
          
          {/* Very transparent overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-ice-50/95 to-white/20 z-[1]" />

          {/* Content */}
          <div className="relative z-10 max-w-xl">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-usa-navy leading-tight mb-6">
              On the Path to the 2030 Winter Olympics
            </h2>

            <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
              Ice climbing is gaining global recognition with its bid for inclusion in the 2030 French Alps Winter Olympics. This milestone would bring our sport to the world's biggest stage.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              By growing participation and building competitive excellence, we're proving that ice climbing belongs among the world's premier winter sports.
            </p>

            <Link
              href="/donate"
              className={`
                inline-flex items-center gap-3 px-8 py-4
                bg-usa-red text-white font-medium text-lg
                rounded-full transition-all duration-300
                hover:bg-red-700 hover:shadow-xl hover:shadow-usa-red/30
                focus:outline-none focus:ring-4 focus:ring-usa-red/40
                shadow-md
              `}
            >
              Support the Movement
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}