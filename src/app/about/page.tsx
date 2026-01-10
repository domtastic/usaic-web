export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-usa-navy">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            Mission
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          USA Ice Climbing is committed to growing ice climbing, mixed climbing, and drytooling across the United States by supporting athletes, building a strong competitive circuit, and advocating for the sport’s future on the world stage — including its inclusion in the Olympic Games.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-6">
  About Us
</h2>

<p className="text-xl text-left text-slate-600 leading-relaxed mb-6">
  USA Ice Climbing (USAIC) is the national governing body for competitive ice climbing, mixed climbing, and drytooling in the United States. As a 501(c)(3) nonprofit organization, we are dedicated to growing and advancing these sports at every level — from grassroots participation to elite international competition.
</p>

<p className="text-xl text-left text-slate-600 leading-relaxed mb-6">
  We support American athletes with essential resources including training opportunities, financial assistance, high-quality competition experiences, and rigorous safety standards. USAIC proudly represents the United States on the global stage.
</p>

<p className="text-xl text-left text-slate-600 leading-relaxed mb-6">
  Our work focuses on:
</p>

<ul className="text-xl text-left text-slate-600 leading-relaxed list-disc pl-8 mb-6 space-y-3">
  <li>Developing a strong annual U.S. competition circuit</li>
  <li>Establishing consistent World Cup–level events on American soil</li>
  <li>Representing the United States in international competitions</li>
  <li>Expanding acceptance of indoor drytooling in climbing gyms nationwide</li>
  <li>Advocating for ice climbing’s inclusion in the Olympic Games</li>
</ul>

<p className="text-xl text-left text-slate-600 leading-relaxed">
  Through leadership, collaboration, and a shared passion for the sport, USA Ice Climbing inspires climbers of all backgrounds and elevates ice, mixed, and drytooling to new heights of excellence, safety, and global recognition.
</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-ice-50">
        <div className="section-container">
          <h2 className="font-display text-3xl md:text-4xl text-usa-navy text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-ice-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-usa-navy mb-3">Excellence</h3>
              <p className="text-slate-600">
                We strive for excellence in competition, training, and representation of our athletes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-ice-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-usa-navy mb-3">Community</h3>
              <p className="text-slate-600">
                We build and support a welcoming community of climbers at all skill levels and backgrounds.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-ice-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-usa-navy mb-3">Growth</h3>
              <p className="text-slate-600">
                We champion the growth of ice climbing and its recognition as an Olympic sport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UIAA */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text- mb-6 text-center">
              UIAA Affiliated
            </h2>
            <p className="text-lg text-slate-600 text-center mb-8">
              USA Ice Climbing is proudly affiliated with the International Climbing and 
              Mountaineering Federation (UIAA), the international governing body for ice 
              climbing competitions. This affiliation allows our athletes to compete in 
              World Cup events and represent the United States on the global stage.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding bg-slate-900 text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Have questions about USA Ice Climbing, interested in sponsorship opportunities, 
              or want to learn more about how you can get involved?
            </p>
            <a 
              href="mailto:info@usaiceclimbing.org" 
              className="inline-flex items-center gap-2 text-xl text-ice-400 hover:text-ice-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              usaiceclimbing@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
