'use client'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <section className="section-padding">
      <div className="section-container max-w-2xl text-center">
        <h1 className="font-display text-6xl md:text-8xl text-usa-navy mb-4">500</h1>
        <h2 className="font-display text-2xl md:text-3xl text-usa-navy mb-4">
          Something Went Wrong
        </h2>
        <p className="text-lg text-slate-600 mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <button onClick={() => reset()} className="btn-primary">
          Try Again
        </button>
      </div>
    </section>
  )
}
