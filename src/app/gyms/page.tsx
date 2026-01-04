export default function GymsPage() {
    return (
      <>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-usa-navy">
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative section-container text-center text-white">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
              Find a Gym
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Locate ice climbing and drytooling gyms across the United States
            </p>
          </div>
        </section>
  
        {/* Coming Soon */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-ice-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="font-display text-2xl text-usa-navy mb-4">
                Gym Directory Coming Soon
              </h2>
              <p className="text-slate-600 mb-8">
                We&apos;re building an interactive map and directory of ice climbing and drytooling 
                facilities across the country. Check back soon!
              </p>
              <p className="text-slate-500 text-sm">
                Know of a gym that should be listed? Contact us at{' '}
                <a href="mailto:usaiceclimbing@gmail.com" className="text-usa-red hover:underline">
                  usaiceclimbing@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </>
    )
  }