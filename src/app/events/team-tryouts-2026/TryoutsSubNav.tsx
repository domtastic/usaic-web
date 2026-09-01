'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/events/team-tryouts-2026', label: 'Overview' },
  { href: '/events/team-tryouts-2026/schedule', label: 'Schedule' },
  { href: '/events/team-tryouts-2026/lead', label: 'Lead' },
  { href: '/events/team-tryouts-2026/speed', label: 'Speed' },
  { href: '/events/team-tryouts-2026/youth', label: 'Youth' },
  { href: '/events/team-tryouts-2026/selection', label: 'Selection' },
  { href: '/events/team-tryouts-2026/faq', label: 'FAQ' },
  { href: '/events/team-tryouts-2026/register', label: 'Register' },
]

export default function TryoutsSubNav() {
  const pathname = usePathname()
  const [headerHeight, setHeaderHeight] = useState(120)

  useEffect(() => {
    const header = document.querySelector('header')
    if (!header) return

    const updateHeight = () => setHeaderHeight(header.getBoundingClientRect().height)
    updateHeight()

    const observer = new ResizeObserver(updateHeight)
    observer.observe(header)
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className="sticky z-30 bg-white border-b border-slate-200 overflow-x-auto"
      style={{ top: headerHeight }}
    >
      <div className="section-container flex gap-7 py-3.5 text-base whitespace-nowrap">
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
