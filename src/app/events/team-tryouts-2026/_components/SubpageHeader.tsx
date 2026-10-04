import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function SubpageHeader({
  eyebrow,
  title,
  description,
  compact = false,
}: {
  eyebrow: string
  title: string
  description?: string
  /** Shorter banner on phones, for pages where the content should start sooner. */
  compact?: boolean
}) {
  return (
    <section className={cn('bg-usa-navy', compact ? 'py-8 md:py-16' : 'py-14 md:py-20')}>
      <div className="section-container">
        <Link
          href="/events/team-tryouts-2026"
          className={cn(
            'inline-flex items-center gap-1.5 text-base uppercase tracking-widest text-white/50 hover:text-white/80 transition-colors',
            compact ? 'mb-4 md:mb-6' : 'mb-6'
          )}
        >
          ← Tryouts Overview
        </Link>

        <p className={cn('text-base font-semibold uppercase tracking-widest text-usa-red-light', compact ? 'mb-2 md:mb-3' : 'mb-3')}>
          {eyebrow}
        </p>
        <h1
          className={cn(
            'font-display text-white leading-tight max-w-2xl',
            compact ? 'text-3xl md:text-5xl mb-2 md:mb-4' : 'text-4xl md:text-5xl mb-4'
          )}
        >
          {title}
        </h1>

        {description && (
          <p className={cn('text-white/70 max-w-2xl leading-relaxed', compact && 'max-md:text-sm')}>{description}</p>
        )}
      </div>
    </section>
  )
}
