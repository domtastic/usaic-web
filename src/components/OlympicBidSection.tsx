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
            alt="French Alps mountain landscape"
            fill
            className="object-cover brightness-[0.92] contrast-[1.05]"
            sizes="(max-width: 1023px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </div>

        {/* Right: Content */}
        <div className="relative flex items-center justify-center px-6 py-16 md:px-12 lg:px-16 lg:py-0">
          {/* Background with more consistent coverage given the updated messaging */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(/parisOlympics.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ice-50/98 to-ice-50/85 z-[1]" />

          {/* Content */}
          <div className="relative z-10 max-w-xl">
            {/* Eyebrow — border-l-2 accent signals "official update" */}
            <div className="border-l-2 border-usa-red pl-3 mb-6">
              <span className="text-usa-red font-semibold text-sm uppercase tracking-widest">
                2030 Olympics Update
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-usa-navy leading-tight mb-6">
              Our Olympic Journey Continues
            </h2>

            <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
              Ice climbing will not be part of the 2030 French Alps Winter Olympics. While disappointing, the UIAA confirmed the bid demonstrated &ldquo;compelling strengths&rdquo; — and our commitment to growing this sport has never been stronger.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              We&rsquo;re focused on what matters most: expanding competition venues, building youth pathways, and developing the next generation of American ice climbers.
            </p>

            <div className="mb-8">
              <a
                href="https://iceclimbing.sport/statement-on-ice-climbing-and-the-olympic-winter-games-french-alps-2030/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-slate-500 hover:text-usa-navy transition-colors border-b border-slate-300 hover:border-usa-navy pb-0.5"
              >
                Read the UIAA statement
              </a>
            </div>

            <div>
              <Link
                href="/donate"
                className="inline-flex items-center px-8 py-4 bg-usa-red text-white font-medium text-lg rounded-full transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:shadow-usa-red/30 focus:outline-none focus:ring-4 focus:ring-usa-red/40 shadow-md"
              >
                Help Us Grow
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
