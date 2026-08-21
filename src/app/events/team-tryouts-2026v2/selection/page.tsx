import type { Metadata } from 'next'
import SubpageHeader from '../_components/SubpageHeader'
import TryoutsSubNav from '../TryoutsSubNav'

export const metadata: Metadata = {
  title: 'Team Selection Ceremony — 2026 Team Tryouts',
  description: 'How and when the 2026 USA Ice Climbing team will be announced.',
}

export default function SelectionPage() {
  return (
    <>
      <SubpageHeader
        eyebrow="Sunday"
        title="Team Selection Ceremony"
        description="The 2026 USA Ice Climbing team will be announced Sunday, right before the Picks and Pitons Finals. Location TBD."
      />
      <TryoutsSubNav />
    </>
  )
}
