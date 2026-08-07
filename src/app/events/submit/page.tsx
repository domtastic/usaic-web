import type { Metadata } from 'next'
import EventSubmissionForm from '@/components/EventSubmissionForm'

export const metadata: Metadata = {
  title: 'Submit an Event',
  description: 'Submit an ice climbing event, competition, or clinic for USA Ice Climbing to review and add to the events calendar.',
}

export default function SubmitEventPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-usa-navy">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            Submit an Event
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Running a competition, festival, or clinic? Let us know and we&apos;ll review it for the events calendar.
            Submissions are reviewed before they go live, so it may take a few days to appear.
          </p>
        </div>
      </section>

      {/* Submission Form Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <EventSubmissionForm />
          </div>
        </div>
      </section>
    </>
  )
}
