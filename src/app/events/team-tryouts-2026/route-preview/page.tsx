import type { Metadata } from 'next'
import SubpageHeader from '../_components/SubpageHeader'
import TryoutsSubNav from '../TryoutsSubNav'

export const metadata: Metadata = {
  title: 'Route Preview — 2026 Team Tryouts',
  description: 'Video route previews for the 2026 USA Ice Climbing team tryouts.',
}

const videos = [
  { title: 'Day 1 — Top Rope Left', youtubeId: 'FrErSEj1oCo' },
  { title: 'Day 1 — Top Rope Right', youtubeId: 'Xq9J3OL4duc' },
]

export default function RoutePreviewPage() {
  return (
    <>
      <SubpageHeader
        eyebrow="Route Preview"
        title="Route Preview"
        description="Preview videos for Friday's top rope routes."
      />
      <TryoutsSubNav />

      <section className="py-14 md:py-20 bg-white">
        <div className="section-container max-w-3xl">
          <div className="grid sm:grid-cols-2 gap-8">
            {videos.map((v) => (
              <div key={v.youtubeId}>
                <p className="font-display text-xl text-usa-navy mb-3">{v.title}</p>
                <div className="relative aspect-video overflow-hidden rounded-lg border border-slate-200">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.youtubeId}`}
                    title={v.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
