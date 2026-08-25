import type { Metadata } from 'next'
import { FileText } from 'lucide-react'
import ComingSoon from '../_components/ComingSoon'
import TryoutsSubNav from '../TryoutsSubNav'

export const metadata: Metadata = {
  title: 'Technical Meeting Notes — 2026 Team Tryouts',
  description: 'Technical meeting notes for the 2026 USA Ice Climbing team tryouts.',
}

export default function TechnicalMeetingNotesPage() {
  return (
    <>
      <TryoutsSubNav />
      <ComingSoon
        icon={FileText}
        title="Technical Meeting Notes"
        message="Technical meeting notes will be posted here before the event."
      />
    </>
  )
}
