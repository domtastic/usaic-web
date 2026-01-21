import { client } from '@/lib/sanity'

interface Resource {
  _id: string
  title: string
  category: 'athlete' | 'competition' | 'media'
  description?: string
  file: {
    asset: {
      url: string
    }
  }
}

async function getResources(): Promise<Resource[]> {
  const query = `*[_type == "resource"] | order(category asc, order asc) {
    _id,
    title,
    category,
    description,
    "file": file {
      "asset": asset-> {
        url
      }
    }
  }`
  
  return client.fetch(query)
}

export default async function ResourcesPage() {
  const resources = await getResources()
  
  const athleteResources = resources.filter(r => r.category === 'athlete')
  const competitionResources = resources.filter(r => r.category === 'competition')
  const mediaResources = resources.filter(r => r.category === 'media')

  const ResourceCard = ({ resource }: { resource: Resource }) => (
    <a
      href={resource.file?.asset?.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow group"
    >
      <div className="w-12 h-12 bg-usa-red/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-usa-red/20 transition-colors">
        <svg className="w-6 h-6 text-usa-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <div>
        <h3 className="font-display text-lg text-usa-navy group-hover:text-usa-red transition-colors">
          {resource.title}
        </h3>
        {resource.description && (
          <p className="text-slate-500 text-sm mt-1">{resource.description}</p>
        )}
      </div>
    </a>
  )

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-usa-navy">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            Resources
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Documents and resources for athletes, officials, and media
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Athlete Documents */}
            {athleteResources.length > 0 && (
              <div>
                <h2 className="font-display text-2xl text-usa-navy mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-ice-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  Athlete Documents
                </h2>
                <div className="grid gap-4">
                  {athleteResources.map(resource => (
                    <ResourceCard key={resource._id} resource={resource} />
                  ))}
                </div>
              </div>
            )}

            {/* Competition Documents */}
            {competitionResources.length > 0 && (
              <div>
                <h2 className="font-display text-2xl text-usa-navy mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-ice-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </span>
                  Competition Documents
                </h2>
                <div className="grid gap-4">
                  {competitionResources.map(resource => (
                    <ResourceCard key={resource._id} resource={resource} />
                  ))}
                </div>
              </div>
            )}

            {/* Media Kit */}
            {mediaResources.length > 0 && (
              <div>
                <h2 className="font-display text-2xl text-usa-navy mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-ice-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </span>
                  Media Kit
                </h2>
                <div className="grid gap-4">
                  {mediaResources.map(resource => (
                    <ResourceCard key={resource._id} resource={resource} />
                  ))}
                </div>
              </div>
            )}

            {/* Empty State */}
            {resources.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl text-usa-navy mb-2">No Resources Yet</h3>
                <p className="text-slate-500">
                  Resources will be added soon. Check back later.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}