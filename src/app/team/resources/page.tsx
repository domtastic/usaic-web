import type { Metadata } from 'next'
import { client } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

export const metadata: Metadata = {
  title: 'Team Resources',
  description: 'Resources and information for USA Ice Climbing team members and athletes.',
}

// Custom components for PortableText rendering
const portableTextComponents = {
  block: {
    h2: ({ children }: any) => (
      <h2 className="font-display text-2xl md:text-3xl text-usa-navy mb-4 mt-8 first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="font-display text-xl md:text-2xl text-usa-navy mb-3 mt-6">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="font-semibold text-lg text-usa-navy mb-2 mt-4">
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 mb-4 ml-4">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 ml-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="leading-relaxed">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold text-usa-navy">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic">{children}</em>
    ),
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-usa-red hover:underline"
      >
        {children}
      </a>
    ),
  },
}

interface TeamResourcesData {
  title?: string
  heroSubtitle?: string
  requiredDocuments?: {
    title: string
    description?: string
    file: {
      asset: {
        url: string
        originalFilename: string
      }
    }
    required?: boolean
  }[]
  additionalResources?: {
    title: string
    description?: string
    file?: {
      asset: {
        url: string
        originalFilename: string
      }
    }
  }[]
  tryoutsSection?: {
    enabled?: boolean
    title?: string
    content?: any[]
    selectionCriteria?: {
      criterion: string
      description?: string
    }[]
    tryoutDocument?: {
      asset: {
        url: string
        originalFilename: string
      }
    }
  }
  importantDates?: {
    title: string
    date: string
    description?: string
  }[]
}

async function getTeamResources(): Promise<TeamResourcesData | null> {
  const query = `*[_type == "teamResources"][0] {
    title,
    heroSubtitle,
    requiredDocuments[] {
      title,
      description,
      "file": file.asset-> {
        url,
        originalFilename
      },
      required
    },
    additionalResources[] {
      title,
      description,
      "file": file.asset-> {
        url,
        originalFilename
      }
    },
    tryoutsSection {
      enabled,
      title,
      content,
      selectionCriteria[] {
        criterion,
        description
      },
      "tryoutDocument": tryoutDocument.asset-> {
        url,
        originalFilename
      }
    },
    importantDates[] {
      title,
      date,
      description
    }
  }`

  return client.fetch(query)
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

export default async function TeamResourcesPage() {
  const data = await getTeamResources()

  const DocumentCard = ({ doc }: { doc: any }) => (
    <a
      href={doc.file?.url}
      download
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all group border-2 border-transparent hover:border-usa-red"
    >
      <div className="w-12 h-12 bg-usa-red/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-usa-red/20 transition-colors">
        <svg className="w-6 h-6 text-usa-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <div className="flex-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-lg text-usa-navy group-hover:text-usa-red transition-colors mb-1">
              {doc.title}
              {doc.required && (
                <span className="ml-2 inline-block px-2 py-0.5 bg-usa-red text-white text-xs font-semibold rounded">
                  Required
                </span>
              )}
            </h3>
            {doc.description && (
              <p className="text-slate-600 text-sm">{doc.description}</p>
            )}
          </div>
        </div>
        <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
          </svg>
          <span>Download</span>
        </div>
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
            {data?.title || 'National Team Resources'}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {data?.heroSubtitle || 'Essential documents, forms, and information for USA Ice Climbing national team athletes'}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto space-y-16">

            {/* Required Documents */}
            {data?.requiredDocuments && data.requiredDocuments.length > 0 && (
              <div>
                <div className="mb-8">
                  <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-3 flex items-center gap-3">
                    <span className="w-12 h-12 bg-usa-red rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    Required Documents
                  </h2>
                  <p className="text-slate-600 text-lg">
                    All national team athletes must complete and submit these documents
                  </p>
                </div>
                <div className="grid gap-4">
                  {data.requiredDocuments.map((doc, index) => (
                    <DocumentCard key={index} doc={doc} />
                  ))}
                </div>
              </div>
            )}

            {/* Tryouts & Selection */}
            {data?.tryoutsSection?.enabled !== false && data?.tryoutsSection && (
              <div className="bg-ice-50 rounded-2xl p-8 md:p-12">
                <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-6">
                  {data.tryoutsSection.title || 'Tryouts & Selection'}
                </h2>

                {data.tryoutsSection.content && (
                  <div className="max-w-none mb-8 text-slate-700">
                    <PortableText
                      value={data.tryoutsSection.content}
                      components={portableTextComponents}
                    />
                  </div>
                )}

                {data.tryoutsSection.selectionCriteria && data.tryoutsSection.selectionCriteria.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-display text-2xl text-usa-navy mb-6">Selection Criteria</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {data.tryoutsSection.selectionCriteria.map((criterion, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-usa-red rounded-full flex items-center justify-center shrink-0 mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-usa-navy mb-2">{criterion.criterion}</h4>
                              {criterion.description && (
                                <p className="text-slate-600 text-sm">{criterion.description}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {data.tryoutsSection.tryoutDocument && (
                  <a
                    href={data.tryoutsSection.tryoutDocument.asset.url}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-usa-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-usa-red transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Tryout Information
                  </a>
                )}
              </div>
            )}

            {/* Important Dates */}
            {data?.importantDates && data.importantDates.length > 0 && (
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-8">
                  Important Dates
                </h2>
                <div className="grid gap-4">
                  {data.importantDates.map((date, index) => (
                    <div key={index} className="flex gap-6 p-6 bg-white rounded-xl shadow-md">
                      <div className="shrink-0">
                        <div className="w-20 h-20 bg-ice-100 rounded-xl flex flex-col items-center justify-center">
                          <span className="text-2xl font-bold text-usa-navy">
                            {new Date(date.date).getDate()}
                          </span>
                          <span className="text-xs text-slate-600 uppercase">
                            {new Date(date.date).toLocaleDateString('en-US', { month: 'short' })}
                          </span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-display text-xl text-usa-navy mb-2">{date.title}</h3>
                        <p className="text-slate-500 text-sm mb-2">{formatDate(date.date)}</p>
                        {date.description && (
                          <p className="text-slate-600">{date.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Resources */}
            {data?.additionalResources && data.additionalResources.length > 0 && (
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-8">
                  Additional Resources
                </h2>
                <div className="grid gap-4">
                  {data.additionalResources.map((doc, index) => (
                    <DocumentCard key={index} doc={doc} />
                  ))}
                </div>
              </div>
            )}

            {/* Empty State */}
            {(!data || (!data.requiredDocuments?.length && !data.additionalResources?.length && !data.tryoutsSection && !data.importantDates?.length)) && (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl text-usa-navy mb-2">No Resources Yet</h3>
                <p className="text-slate-500 mb-4">
                  Team resources will be added soon. Check back later or configure them in Sanity Studio.
                </p>
                <a
                  href="/studio"
                  className="inline-flex items-center gap-2 text-usa-red hover:underline"
                >
                  Go to Sanity Studio
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
