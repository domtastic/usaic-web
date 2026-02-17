import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="section-container max-w-2xl text-center">
        <h1 className="font-display text-6xl md:text-8xl text-usa-navy mb-4">404</h1>
        <h2 className="font-display text-2xl md:text-3xl text-usa-navy mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-slate-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <Link href="/events" className="btn-secondary">
            View Events
          </Link>
        </div>
      </div>
    </section>
  )
}
