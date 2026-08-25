import Link from 'next/link'

export default function SubpageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <section className="bg-usa-navy py-14 md:py-20">
      <div className="section-container">
        <Link
          href="/events/team-tryouts-2026"
          className="inline-flex items-center gap-1.5 text-base uppercase tracking-widest text-white/50 hover:text-white/80 transition-colors mb-6"
        >
          ← Tryouts Overview
        </Link>

        <p className="text-base font-semibold uppercase tracking-widest text-usa-red-light mb-3">{eyebrow}</p>
        <h1 className="font-display text-4xl md:text-5xl text-white leading-tight mb-4 max-w-2xl">{title}</h1>

        {description && (
          <p className="text-white/70 max-w-2xl leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  )
}
