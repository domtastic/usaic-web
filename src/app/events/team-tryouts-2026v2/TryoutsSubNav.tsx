'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/events/team-tryouts-2026v2', label: 'Overview' },
  { href: '/events/team-tryouts-2026v2/schedule', label: 'Schedule' },
  { href: '/events/team-tryouts-2026v2/lead', label: 'Lead' },
  { href: '/events/team-tryouts-2026v2/speed', label: 'Speed' },
  { href: '/events/team-tryouts-2026v2/youth', label: 'Youth' },
  { href: '/events/team-tryouts-2026v2/selection', label: 'Selection' },
  { href: '/events/team-tryouts-2026v2/route-preview', label: 'Route Preview' },
  { href: '/events/team-tryouts-2026v2/technical-meeting-notes', label: 'Tech Notes' },
  { href: '/events/team-tryouts-2026v2/register', label: 'Register' },
]

export default function TryoutsSubNav() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-[120px] md:top-[132px] z-30 bg-white border-b border-slate-200 overflow-x-auto">
      <div className="section-container flex gap-6 py-3 text-xs whitespace-nowrap">
        {navItems.map((item) => {
          const active = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'font-semibold uppercase tracking-wide transition-colors',
                active ? 'text-usa-red' : 'text-usa-navy/70 hover:text-usa-red'
              )}
            >
              {item.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
