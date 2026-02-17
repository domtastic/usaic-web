import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Find a Gym',
  description: 'Find climbing gyms that offer drytooling and ice climbing training near you.',
}

export default function FindGymsPage() {
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

      {/* Interactive Map */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-4">
                Ice Climbing & Drytooling Gyms
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Explore gyms across the United States offering ice climbing and drytooling facilities
              </p>
            </div>

            {/* Google Map Embed */}
            <div className="relative w-full h-[600px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1dgEyDxhJq0sgSjyjAn2iZ0YUjNq__4s&ehbc=2E312F&ll=44.580762747843075%2C-101.36713416250007&z=4"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-8 text-center">
              <p className="text-slate-600 mb-4">
                Click on the markers to see gym details and contact information
              </p>
              <p className="text-slate-500 text-sm">
                Know of a gym that should be listed? Contact us at{' '}
                <a href="mailto:usaiceclimbing@gmail.com" className="text-usa-red hover:underline">
                  usaiceclimbing@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
