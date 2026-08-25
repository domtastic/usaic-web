import type { Metadata } from 'next'
import Link from 'next/link'
import { Ticket } from 'lucide-react'
import ComingSoon from '../_components/ComingSoon'
import TryoutsSubNav from '../TryoutsSubNav'

export const metadata: Metadata = {
  title: 'Register — 2026 Team Tryouts',
  description: 'Registration for the 2026 USA Ice Climbing team tryouts.',
}

export default function RegisterPage() {
  return (
    <>
      <TryoutsSubNav />
      <ComingSoon
        icon={Ticket}
        title="Register for Tryouts"
        message="Registration isn't open yet — check back for the link once it's live."
      >
        <p className="text-base text-slate-400">
          Questions in the meantime?{' '}
          <Link href="/contact" className="text-usa-red font-semibold hover:text-usa-red-dark">
            Contact us
          </Link>
        </p>
      </ComingSoon>
    </>
  )
}
