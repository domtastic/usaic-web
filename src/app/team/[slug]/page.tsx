import { client, urlFor } from '@/lib/sanity'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface Athlete {
  _id: string
  name: string
  slug: { current: string }
  photo?: { asset: { _ref: string } }
  dateOfBirth?: string
  residence?: string
  discipline: string[]
  category: 'adult' | 'youth'
  funFacts?: string
  socialMedia?: {
    instagram?: string
    facebook?: string
    twitter?: string
    website?: string
  }
}

async function getAthlete(slug: string): Promise<Athlete | null> {
  const query = `*[_type == "athlete" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    photo,
    dateOfBirth,
    residence,
    discipline,
    category,
    funFacts,
    socialMedia
  }`
  
  return client.fetch(query, { slug })
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function AthletePage({ params }: PageProps) {
  const { slug } = await params
  const athlete = await getAthlete(slug)

  if (!athlete) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <>
      {/* Back Navigation */}
      <div className="bg-slate-50 py-4">
        <div className="section-container">
          <Link 
            href="/team" 
            className="inline-flex items-center text-usa-navy hover:text-usa-red transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Team
          </Link>
        </div>
      </div>

      {/* Athlete Profile */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Photo */}
            <div className="aspect-[3/4] bg-slate-100 rounded-2xl overflow-hidden relative">
              {athlete.photo ? (
                <Image
                  src={urlFor(athlete.photo).width(600).height(800).url()}
                  alt={athlete.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-usa-navy flex items-center justify-center">
                  <svg 
                    className="w-32 h-32 text-white/50" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                    />
                  </svg>
                </div>
              )}
            </div>

            {/* Info */}
            <div>    
              <h1 className="font-display text-4xl md:text-5xl text-usa-navy mb-6">
                {athlete.name}
              </h1>

              {/* Details */}
              <div className="space-y-4 mb-8">
              {athlete.dateOfBirth && (
  <div className="flex items-start gap-4">
    <div className="w-32 text-slate-500 font-medium">D.O.B.</div>
    <div className="text-usa-navy">{athlete.dateOfBirth}</div>
  </div>
)}
                {athlete.residence && (
                  <div className="flex items-start gap-4">
                    <div className="w-32 text-slate-500 font-medium">Residence</div>
                    <div className="text-usa-navy">{athlete.residence}</div>
                  </div>
                )}
                <div className="flex items-start gap-4">
                  <div className="w-32 text-slate-500 font-medium">Discipline</div>
                  <div className="flex gap-2 flex-wrap">
                    {athlete.discipline?.map((d) => (
                      <span 
                        key={d}
                        className="px-3 py-1 bg-usa-red text-white text-sm font-medium rounded-full"
                      >
                        {d.charAt(0).toUpperCase() + d.slice(1)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fun Facts */}
              {athlete.funFacts && (
                <div>
                  <h2 className="font-display text-xl text-usa-navy mb-3">About</h2>
                  <p className="text-slate-600 leading-relaxed">
                    {athlete.funFacts}
                  </p>
                </div>
              )}

              {/* Social Media */}
              {athlete.socialMedia && (
                <div className="mt-8 flex gap-4">
                  {athlete.socialMedia.instagram && (
                    <a
                      href={athlete.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-usa-red transition-colors"
                      aria-label="Instagram"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                      </svg>
                    </a>
                  )}
                  {athlete.socialMedia.facebook && (
                    <a
                      href={athlete.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-usa-red transition-colors"
                      aria-label="Facebook"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                  )}
                  {athlete.socialMedia.website && (
                    <a
                      href={athlete.socialMedia.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-usa-red transition-colors"
                      aria-label="Website"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}