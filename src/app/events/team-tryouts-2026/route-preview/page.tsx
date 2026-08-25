import type { Metadata } from 'next'
import { Video } from 'lucide-react'
import ComingSoon from '../_components/ComingSoon'
import TryoutsSubNav from '../TryoutsSubNav'

export const metadata: Metadata = {
  title: 'Route Preview — 2026 Team Tryouts',
  description: 'Video route previews for the 2026 USA Ice Climbing team tryouts.',
}

export default function RoutePreviewPage() {
  return (
    <>
      <TryoutsSubNav />
      <ComingSoon
        icon={Video}
        title="Route Preview"
        message="Video route previews will be posted here closer to the event."
      />
    </>
  )
}
