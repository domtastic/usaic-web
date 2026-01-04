import Link from 'next/link'

export default function DonateSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-ice-gradient-dark" />
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      {/* Content */}
      <div className="relative section-container text-center text-white">
        <h2 className="font-display text-3xl md:text-5xl mb-6">
          Support Team USA
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
          Your contribution helps our athletes train, compete internationally, and represent 
          the United States at World Cup events. Every dollar makes a difference in their journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/donate" className="btn-primary text-lg px-8">
            Donate Now
          </Link>
          <Link 
            href="/about" 
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-ice-900 transition-colors"
          >
            Learn About Our Mission
          </Link>
        </div>
        <p className="mt-8 text-sm text-white/60">
          USA Ice Climbing is a 501(c)(3) nonprofit organization. All donations are tax-deductible.
        </p>
      </div>
    </section>
  )
}
