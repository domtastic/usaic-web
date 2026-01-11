import Link from 'next/link'
import Image from 'next/image'

export default function TeamPreview() {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] md:h-[85vh] overflow-hidden">
      {/* Full-bleed background image */}
      <Image
        src="/Team-USA-Photo-2025.jpg"
        alt="Team USA Ice Climbing national team – powerful group action shot on ice"
        fill
        className="object-cover brightness-[0.88] contrast-[1.1] scale-105"
        priority
        sizes="100vw"
      />

      {/* Dark gradient overlay – stronger at bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/70" />

      {/* CTA and text grouped at bottom center */}
      <div className="absolute bottom-0 left-0 right-0 pb-12 md:pb-16 px-6 flex flex-col items-center text-center z-10">
        {/* Minimal text overlay – now positioned just above button */}
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight drop-shadow-2xl mb-3 md:mb-4">
          Team USA
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl text-white/95 font-light max-w-3xl mb-8 md:mb-10 drop-shadow-lg">
          Meet the team representing USA at international World Cup competitions.
        </p>

        {/* Button */}
        <Link
          href="/team"
          className={`
            inline-flex items-center gap-3 
            px-8 py-4 md:px-10 md:py-5
            bg-usa-red/95 backdrop-blur-sm text-white 
            font-display font-bold uppercase tracking-wider text-base md:text-lg
            rounded-full 
            border border-white/30
            shadow-2xl shadow-black/50
            transition-all duration-300 
            hover:bg-usa-red hover:scale-105 hover:shadow-2xl hover:shadow-black/60
            active:scale-95
            focus:outline-none focus:ring-4 focus:ring-white/40
          `}
        >
          View Full Team
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  )
}