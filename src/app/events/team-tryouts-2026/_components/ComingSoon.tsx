import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'

export default function ComingSoon({
  icon: Icon,
  title,
  message,
  children,
}: {
  icon: LucideIcon
  title: string
  message: string
  children?: React.ReactNode
}) {
  return (
    <section className="py-14 md:py-20">
      <div className="section-container text-center">
        <Link
          href="/events/team-tryouts-2026"
          className="inline-flex items-center gap-1.5 text-base uppercase tracking-widest text-slate-500 hover:text-usa-red transition-colors mb-8"
        >
          ← Tryouts Overview
        </Link>

        <div className="w-16 h-16 rounded-full bg-usa-navy/5 flex items-center justify-center mx-auto mb-6">
          <Icon className="w-7 h-7 text-usa-navy" strokeWidth={1.75} />
        </div>

        <p className="text-base font-semibold uppercase tracking-widest text-usa-red mb-3">Coming Soon</p>
        <h1 className="font-display text-3xl md:text-4xl text-usa-navy mb-4">{title}</h1>
        <p className="text-slate-500 max-w-md mx-auto leading-relaxed">{message}</p>
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  )
}
