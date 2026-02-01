export default function IndoorGuidelinesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-usa-navy">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            Indoor Drytooling: A Framework for Gyms
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            A comprehensive guide for gym owners to safely incorporate drytooling
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="section-container max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-xl text-slate-600 leading-relaxed">
              Drytooling and mixed climbing are growing sports in the USA. As a natural progression in climbing, these sports are increasingly being brought inside to the climbing gym. With a little bit of effort, most gyms can create an environment safe for both drytoolers and other users.
            </p>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden bg-ice-200 mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-ice-400 to-ice-600 flex items-center justify-center">
              <p className="text-white font-display text-xl">A UMD student competing at a UMD RSOP drytooling competition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="section-padding bg-ice-50">
        <div className="section-container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-4">
              Safety
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Safety is often one of the major concerns for gyms who are considering offering drytooling. These safety concerns can be mitigated with a few simple policies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Helmets */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-usa-navy rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-usa-navy">Helmets</h3>
              </div>

              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-usa-red mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Mandatory</strong> for all climbers drytooling on a rope (toproping or leading)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-usa-red mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Recommended</strong> for bouldering (not mandatory)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-usa-red mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Not necessary for belayers when tethers are used</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-usa-red mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Mandatory</strong> for belayers when tools drop to floor</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-usa-red mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>All helmets must be rated for climbing</span>
                </li>
              </ul>
            </div>

            {/* Falling Tools */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-usa-navy rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-usa-navy">Falling Tools</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-usa-navy mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-ice-100 rounded-full flex items-center justify-center text-xs">1</span>
                    Tethers (Recommended)
                  </h4>
                  <p className="text-slate-700 text-sm mb-2">
                    One of the easiest solutions to prevent tools from hurting people or damaging floors.
                  </p>
                  <ul className="space-y-1 text-sm text-slate-600 ml-8">
                    <li className="flex items-start gap-2">
                      <span className="text-usa-red">•</span>
                      <span><strong>Toproping:</strong> Connect tethers to rope (not harness) using small locking carabiner above tie-in knot</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-usa-red">•</span>
                      <span><strong>Leading:</strong> Connect tethers directly to harness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-usa-red">•</span>
                      <span>Prevents tools from slingshotting toward climber on falls</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-usa-navy mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-ice-100 rounded-full flex items-center justify-center text-xs">2</span>
                    Nets
                  </h4>
                  <p className="text-slate-700 text-sm">
                    Can be used to stop tools from hitting floors and people below. Most commonly used in competition settings.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-usa-navy mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-ice-100 rounded-full flex items-center justify-center text-xs">3</span>
                    Free Falling Tools
                  </h4>
                  <p className="text-slate-700 text-sm">
                    Safest option for climbers. Cordon off helmet-only area below routes. Tools typically bounce only a few inches on gym floors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protecting the Wall */}
      <section className="section-padding">
        <div className="section-container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-4">
              Protecting the Climbing Wall
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Backer plates protect your wall from tool picks and extend the life of your climbing surface
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="font-display text-2xl text-usa-navy mb-4">What Are Backer Plates?</h3>
              <p className="text-lg text-slate-700 mb-6">
                Backer plates are protective materials placed between climbing holds and the wall. They prevent ice tool picks from touching and damaging the climbing surface.
              </p>

              <div className="space-y-4">
                <div className="bg-ice-50 rounded-lg p-4">
                  <h4 className="font-semibold text-usa-navy mb-2">Materials</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-ice-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Plywood (¼" recommended)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-ice-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Hardwood</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-ice-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Plastic (HDPE)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-ice-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Carpet</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-ice-50 rounded-lg p-4">
                  <h4 className="font-semibold text-usa-navy mb-2">Common Sizes</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-ice-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>6" × 6"</strong> squares with ⅜" center hole (standard holds)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-ice-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>6" × 9"</strong> rectangles (steins, Yang-Gaps)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-ice-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Variety of shapes and sizes for different hold types</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200">
                <div className="absolute inset-0 bg-gradient-to-br from-ice-400 to-ice-600 flex items-center justify-center">
                  <p className="text-white font-display text-center px-4">An example of a plywood backer plate</p>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200">
                <div className="absolute inset-0 bg-gradient-to-br from-usa-navy to-slate-700 flex items-center justify-center">
                  <p className="text-white font-display text-center px-4">Climbing hold that does not require a backer plate due to geometry</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-ice-50 rounded-2xl p-8 text-center">
            <p className="text-lg text-slate-700">
              <strong>Pro Tip:</strong> Volumes designated specifically for drytooling can eliminate the need for backer plates. When crampons are allowed, volumes are essential for kicking into.
            </p>
          </div>
        </div>
      </section>

      {/* Route Setting */}
      <section className="section-padding bg-slate-50">
        <div className="section-container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-4">
              Route Setting Considerations
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Holds */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="font-display text-2xl text-usa-navy mb-6 flex items-center gap-3">
                <svg className="w-8 h-8 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                Holds
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-usa-navy mb-2">Standard Climbing Holds</h4>
                  <p className="text-slate-700 text-sm">
                    Normal climbing holds work well but softer plastics wear faster than drytooling-specific holds. Harder plastic holds last longer.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-usa-navy mb-2">Drytooling-Specific Holds</h4>
                  <p className="text-slate-700 text-sm mb-3">Available from specialized manufacturers:</p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-ice-600 rounded-full"></span>
                      Spire Equipment (US)
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-ice-600 rounded-full"></span>
                      Atomik (US)
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-ice-600 rounded-full"></span>
                      Top Point (Russia)
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-ice-600 rounded-full"></span>
                      Sam Holds (Switzerland)
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-ice-600 rounded-full"></span>
                      Discovery (Korea)
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-usa-navy mb-2">Creative Options</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-ice-600 mt-1">•</span>
                      <span>Drill holes into large or unfeatured holds for tool picks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ice-600 mt-1">•</span>
                      <span>Hockey pucks, Ice Holdz, high-density foam</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ice-600 mt-1">•</span>
                      <span>Homemade wood holds</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-ice-50 rounded-lg p-4">
                <p className="text-sm text-slate-700">
                  <strong>Note:</strong> Creative holds add fun and uniqueness but don't always translate to outdoor mixed climbing skills.
                </p>
              </div>
            </div>

            {/* Wall Angle & Difficulty */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="font-display text-2xl text-usa-navy mb-6 flex items-center gap-3">
                <svg className="w-8 h-8 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Wall Angle & Difficulty
              </h3>

              <div className="space-y-6">
                <div className="bg-ice-50 rounded-lg p-6">
                  <h4 className="font-semibold text-usa-navy mb-3 text-lg">Overhanging Terrain</h4>
                  <p className="text-slate-700 mb-4">
                    Moderate to difficult drytooling routes often require overhanging walls.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-display text-ice-600 mb-1">10°</div>
                      <div className="text-xs text-slate-600">Minimum</div>
                    </div>
                    <div className="flex-1 h-2 bg-gradient-to-r from-ice-200 via-ice-400 to-ice-600 rounded-full"></div>
                    <div className="text-center">
                      <div className="text-3xl font-display text-ice-600 mb-1">60°</div>
                      <div className="text-xs text-slate-600">Maximum</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-usa-navy mb-3">Beginner Routes</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Place holds close together</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Include good footholds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Help climbers learn to trust the tools</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-usa-navy mb-3">Advanced Routes</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-usa-red mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Place holds far apart (drytoolers have significant reach)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-usa-red mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Larger moves increase difficulty</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-usa-red mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Utilize steeper overhangs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-200">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center">
              <p className="text-white font-display text-xl text-center px-4">Bouldering with ice tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternatives */}
      <section className="section-padding">
        <div className="section-container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-4">
              Alternatives to Drytooling
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Lower-impact options for gyms concerned about wall damage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Rubbering */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="mb-6">
                <h3 className="font-display text-2xl text-usa-navy mb-2">Rubbering</h3>
                <p className="text-slate-600 text-sm">Using ice tool picks with flat rubber surfaces</p>
              </div>

              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-200 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-ice-400 to-ice-600 flex items-center justify-center">
                  <p className="text-white font-display text-center px-4">A climber using tethers with rubbering picks</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-usa-navy mb-2 text-sm">Pros</h4>
                  <ul className="space-y-1 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>No wall damage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Builds some strength for ice climbing</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-usa-navy mb-2 text-sm">Cons</h4>
                  <ul className="space-y-1 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-usa-red mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>Does little for technique development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-usa-red mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>Body movement significantly different from real drytooling</span>
                    </li>
                  </ul>
                </div>

                <p className="text-xs text-slate-600 italic">
                  Most common picks: Escape Climbing
                </p>
              </div>
            </div>

            {/* Looping */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="mb-6">
                <h3 className="font-display text-2xl text-usa-navy mb-2">Looping</h3>
                <p className="text-slate-600 text-sm">Using tools with cord or rubber loops</p>
              </div>

              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-200 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center">
                  <p className="text-white font-display text-center px-4">Loop-style training tools</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-usa-navy mb-2 text-sm">Pros</h4>
                  <ul className="space-y-1 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Zero wall damage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Can use regular climbing holds</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-usa-navy mb-2 text-sm">Cons</h4>
                  <ul className="space-y-1 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-usa-red mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>No technique development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-usa-red mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>Requires specific hold types (loops must fit over)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-usa-red mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>Often requires dedicated routes</span>
                    </li>
                  </ul>
                </div>

                <p className="text-xs text-slate-600 italic">
                  Manufacturers: Alpkit, Furnace Industries
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-usa-navy rounded-2xl p-8 text-white text-center">
            <p className="text-lg">
              <strong>Bottom Line:</strong> While alternatives reduce wall wear, true drytooling with proper backer plates provides the most authentic training and technique development for outdoor ice climbing.
            </p>
          </div>
        </div>
      </section>

      {/* Gyms That Offer Drytooling */}
      <section className="section-padding bg-ice-50">
        <div className="section-container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-4">
              Gyms That Offer Indoor Drytooling
            </h2>
            <p className="text-xl text-slate-600">
              Join the growing community of climbing gyms supporting ice climbing training
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* USA */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-usa-navy rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-usa-navy">United States</h3>
              </div>

              <div className="space-y-3 text-slate-700">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-usa-red mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Alaska Rock Gym</strong> - Anchorage, AK</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-usa-red mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>City Rock</strong> - Colorado Springs, CO</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-usa-red mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Midwest Mountaineering</strong> - Minneapolis, MN</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-usa-red mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Northern Michigan University</strong> - Marquette, MI</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-usa-red mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Petra Cliffs</strong> - VT</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-usa-red mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Portland Rock Gym</strong> - Portland, OR</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-usa-red mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Roca Climbing & Fitness</strong> - Rochester, MN <span className="text-slate-500 text-sm">(Special events)</span></span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-usa-red mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Rock Climb Fairfield</strong> - CT</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-usa-red mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>The Mountaineers</strong> - Seattle, WA</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-usa-red mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>The Rock Lounge</strong> - Durango, CO</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-usa-red mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>UMD Sports and Recreation</strong> - Duluth, MN</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-usa-red mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Vertical Endeavors</strong> - Duluth, MN <span className="text-slate-500 text-sm">(Special events)</span></span>
                </div>
              </div>
            </div>

            {/* Canada */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-usa-red rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-usa-navy">Canada</h3>
              </div>

              <div className="space-y-3 text-slate-700 mb-8">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-usa-red mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Canmore Bouldering Cave</strong> - Canmore, AB</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-usa-red mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Délire Escalade</strong> - QC</span>
                </div>
              </div>

              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-200">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center">
                  <p className="text-white font-display text-center px-4">Drytool bouldering area at Délire Escalade with crampon-friendly plywood</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 relative aspect-video rounded-2xl overflow-hidden bg-slate-200">
            <div className="absolute inset-0 bg-gradient-to-br from-usa-navy to-slate-800 flex items-center justify-center">
              <p className="text-white font-display text-xl text-center px-4">A climber on World Cup style hanging boxes at the City Rock Ice Night in Colorado Springs, CO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-usa-navy text-white">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Ready to Add Drytooling to Your Gym?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Contact USA Ice Climbing for consultation, resources, and support in implementing drytooling at your facility.
          </p>
          <a
            href="mailto:usaiceclimbing@gmail.com?subject=Indoor%20Drytooling%20Guidelines%20Inquiry"
            className="btn-primary"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  )
}
