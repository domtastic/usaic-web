import Image from 'next/image'
import { client, urlFor } from '@/lib/sanity'

interface Gym {
  _key?: string
  name: string
  location: string
  country: string
  note?: string
}

interface Alternative {
  _key?: string
  title: string
  subtitle?: string
  image?: { asset: { _ref: string } }
  imageCaption?: string
  pros?: string[]
  cons?: string[]
  note?: string
}

interface FallingToolOption {
  _key?: string
  title: string
  description?: string
  details?: string[]
}

interface Manufacturer {
  _key?: string
  name: string
  country?: string
}

interface IndoorGuidelinesData {
  heroTitle?: string
  heroSubtitle?: string
  introText?: string
  introImage?: { asset: { _ref: string } }
  introImageCaption?: string
  safetyIntro?: string
  helmetRules?: { _key?: string; text: string }[]
  fallingToolsOptions?: FallingToolOption[]
  safetyImageHelmet?: { asset: { _ref: string }; caption?: string }
  safetyImageTethers?: { asset: { _ref: string }; caption?: string }
  safetyImageCordon?: { asset: { _ref: string }; caption?: string }
  wallProtectionIntro?: string
  wallOverviewImage?: { asset: { _ref: string }; caption?: string }
  backerPlateDescription?: string
  backerPlateMaterials?: string[]
  backerPlateSizes?: string[]
  wallImages?: { _key?: string; asset: { _ref: string }; caption?: string }[]
  drytoolingHoldsIntro?: string
  standardHoldsDescription?: string
  drytoolingHoldManufacturers?: Manufacturer[]
  creativeHoldOptions?: string[]
  creativeHoldsNote?: string
  overhangMin?: number
  overhangMax?: number
  overhangDescription?: string
  beginnerTips?: string[]
  advancedTips?: string[]
  routeSettingImage?: { asset: { _ref: string }; caption?: string }
  alternativesIntro?: string
  alternatives?: Alternative[]
  alternativesBottomLine?: string
  gymsTitle?: string
  gymsSubtitle?: string
  gymsList?: Gym[]
  gymsImage?: { asset: { _ref: string }; caption?: string }
  ctaTitle?: string
  ctaText?: string
  ctaEmail?: string
}

async function getIndoorGuidelines(): Promise<IndoorGuidelinesData> {
  const query = `*[_type == "indoorGuidelines"][0] {
    heroTitle, heroSubtitle,
    introText, introImage, introImageCaption,
    safetyIntro, helmetRules, fallingToolsOptions, safetyImageHelmet, safetyImageTethers, safetyImageCordon,
    wallProtectionIntro, wallOverviewImage, backerPlateDescription, backerPlateMaterials, backerPlateSizes, wallImages,
    drytoolingHoldsIntro, standardHoldsDescription, drytoolingHoldManufacturers, creativeHoldOptions, creativeHoldsNote,
    overhangMin, overhangMax, overhangDescription, beginnerTips, advancedTips, routeSettingImage,
    alternativesIntro, alternatives, alternativesBottomLine,
    gymsTitle, gymsSubtitle, gymsList, gymsImage,
    ctaTitle, ctaText, ctaEmail
  }`
  return (await client.fetch(query)) || {}
}

const defaults = {
  heroTitle: 'Indoor Drytooling: A Framework for Gyms',
  heroSubtitle: 'A comprehensive guide for gym owners to safely incorporate drytooling',
  introText: 'Drytooling and mixed climbing are growing sports in the USA. As a natural progression in climbing, these sports are increasingly being brought inside to the climbing gym. With a little bit of effort, most gyms can create an environment safe for both drytoolers and other users.',
  introImageCaption: 'A UMD student competing at a UMD RSOP drytooling competition',
  safetyIntro: 'Safety is often one of the major concerns for gyms who are considering offering drytooling. These safety concerns can be mitigated with a few simple policies.',
  helmetRules: [
    { text: 'Mandatory for all climbers drytooling on a rope (toproping or leading)' },
    { text: 'Recommended for bouldering (not mandatory)' },
    { text: 'Not necessary for belayers when tethers are used' },
    { text: 'Mandatory for belayers when tools drop to floor' },
    { text: 'All helmets must be rated for climbing' },
  ] as { _key?: string; text: string }[],
  fallingToolsOptions: [
    {
      title: 'Tethers (Recommended)',
      description: 'One of the easiest solutions to prevent tools from hurting people or damaging floors.',
      details: [
        'Toproping: Connect tethers to rope (not harness) using small locking carabiner above tie-in knot',
        'Leading: Connect tethers directly to harness',
        'Prevents tools from slingshotting toward climber on falls',
      ],
    },
    {
      title: 'Nets',
      description: 'Can be used to stop tools from hitting floors and people below. Most commonly used in competition settings.',
    },
    {
      title: 'Free Falling Tools',
      description: 'Safest option for climbers. Cordon off helmet-only area below routes. Tools typically bounce only a few inches on gym floors.',
    },
  ] as FallingToolOption[],
  wallProtectionIntro: 'Backer plates protect your wall from tool picks and extend the life of your climbing surface',
  backerPlateDescription: 'Backer plates are protective materials placed between climbing holds and the wall. They prevent ice tool picks from touching and damaging the climbing surface.',
  backerPlateMaterials: ['Plywood (¼" recommended)', 'Hardwood', 'Plastic (HDPE)', 'Carpet'],
  backerPlateSizes: [
    '6" × 6" squares with ⅜" center hole (standard holds)',
    '6" × 9" rectangles (steins, Yang-Gaps)',
    'Variety of shapes and sizes for different hold types',
  ],
  drytoolingHoldsIntro: 'Drytooling holds come in many forms. From standard climbing holds to purpose-built options, choosing the right holds impacts both the climbing experience and the longevity of your setup.',
  standardHoldsDescription: 'Normal climbing holds work well but softer plastics wear faster than drytooling-specific holds. Harder plastic holds last longer.',
  drytoolingHoldManufacturers: [
    { name: 'Spire Equipment', country: 'US' },
    { name: 'Atomik', country: 'US' },
    { name: 'Top Point', country: 'Russia' },
    { name: 'Sam Holds', country: 'Switzerland' },
    { name: 'Discovery', country: 'Korea' },
  ] as Manufacturer[],
  creativeHoldOptions: [
    'Drill holes into large or unfeatured holds for tool picks',
    'Hockey pucks, Ice Holdz, high-density foam',
    'Homemade wood holds',
  ],
  creativeHoldsNote: 'Creative holds add fun and uniqueness but don\'t always translate to outdoor mixed climbing skills.',
  overhangMin: 10,
  overhangMax: 60,
  overhangDescription: 'Moderate to difficult drytooling routes often require overhanging walls.',
  beginnerTips: [
    'Place holds close together',
    'Include good footholds',
    'Help climbers learn to trust the tools',
  ],
  advancedTips: [
    'Place holds far apart (drytoolers have significant reach)',
    'Larger moves increase difficulty',
    'Utilize steeper overhangs',
  ],
  alternativesIntro: 'Lower-impact options for gyms concerned about wall damage',
  alternatives: [
    {
      title: 'Rubbering',
      subtitle: 'Using ice tool picks with flat rubber surfaces',
      imageCaption: 'A climber using tethers with rubbering picks',
      pros: ['No wall damage', 'Builds some strength for ice climbing'],
      cons: ['Does little for technique development', 'Body movement significantly different from real drytooling'],
      note: 'Most common picks: Escape Climbing',
    },
    {
      title: 'Looping',
      subtitle: 'Using tools with cord or rubber loops',
      imageCaption: 'Loop-style training tools',
      pros: ['Zero wall damage', 'Can use regular climbing holds'],
      cons: ['No technique development', 'Requires specific hold types (loops must fit over)', 'Often requires dedicated routes'],
      note: 'Manufacturers: Alpkit, Furnace Industries',
    },
  ] as Alternative[],
  alternativesBottomLine: 'While alternatives reduce wall wear, true drytooling with proper backer plates provides the most authentic training and technique development for outdoor ice climbing.',
  gymsTitle: 'Gyms That Offer Indoor Drytooling',
  gymsSubtitle: 'Join the growing community of climbing gyms supporting ice climbing training',
  gymsList: [
    { name: 'Alaska Rock Gym', location: 'Anchorage, AK', country: 'USA' },
    { name: 'City Rock', location: 'Colorado Springs, CO', country: 'USA' },
    { name: 'Midwest Mountaineering', location: 'Minneapolis, MN', country: 'USA' },
    { name: 'Northern Michigan University', location: 'Marquette, MI', country: 'USA' },
    { name: 'Petra Cliffs', location: 'VT', country: 'USA' },
    { name: 'Portland Rock Gym', location: 'Portland, OR', country: 'USA' },
    { name: 'Roca Climbing & Fitness', location: 'Rochester, MN', country: 'USA', note: 'Special events' },
    { name: 'Rock Climb Fairfield', location: 'CT', country: 'USA' },
    { name: 'The Mountaineers', location: 'Seattle, WA', country: 'USA' },
    { name: 'The Rock Lounge', location: 'Durango, CO', country: 'USA' },
    { name: 'UMD Sports and Recreation', location: 'Duluth, MN', country: 'USA' },
    { name: 'Vertical Endeavors', location: 'Duluth, MN', country: 'USA', note: 'Special events' },
    { name: 'Canmore Bouldering Cave', location: 'Canmore, AB', country: 'Canada' },
    { name: 'Délire Escalade', location: 'QC', country: 'Canada' },
  ] as Gym[],
  gymsImageCaption: 'A climber on World Cup style hanging boxes at the City Rock Ice Night in Colorado Springs, CO',
  ctaTitle: 'Ready to Add Drytooling to Your Gym?',
  ctaText: 'Contact USA Ice Climbing for consultation, resources, and support in implementing drytooling at your facility.',
  ctaEmail: 'usaiceclimbing@gmail.com',
}

export default async function IndoorGuidelinesPage() {
  const data = await getIndoorGuidelines()

  const heroTitle = data.heroTitle || defaults.heroTitle
  const heroSubtitle = data.heroSubtitle || defaults.heroSubtitle
  const introText = data.introText || defaults.introText
  const introImageCaption = data.introImageCaption || defaults.introImageCaption
  const safetyIntro = data.safetyIntro || defaults.safetyIntro
  const helmetRules = data.helmetRules?.length ? data.helmetRules : defaults.helmetRules
  const fallingToolsOptions = data.fallingToolsOptions?.length ? data.fallingToolsOptions : defaults.fallingToolsOptions
  const wallProtectionIntro = data.wallProtectionIntro || defaults.wallProtectionIntro
  const backerPlateDescription = data.backerPlateDescription || defaults.backerPlateDescription
  const backerPlateMaterials = data.backerPlateMaterials?.length ? data.backerPlateMaterials : defaults.backerPlateMaterials
  const backerPlateSizes = data.backerPlateSizes?.length ? data.backerPlateSizes : defaults.backerPlateSizes
  const drytoolingHoldsIntro = data.drytoolingHoldsIntro || defaults.drytoolingHoldsIntro
  const standardHoldsDescription = data.standardHoldsDescription || defaults.standardHoldsDescription
  const manufacturers = data.drytoolingHoldManufacturers?.length ? data.drytoolingHoldManufacturers : defaults.drytoolingHoldManufacturers
  const creativeHoldOptions = data.creativeHoldOptions?.length ? data.creativeHoldOptions : defaults.creativeHoldOptions
  const creativeHoldsNote = data.creativeHoldsNote || defaults.creativeHoldsNote
  const overhangMin = data.overhangMin || defaults.overhangMin
  const overhangMax = data.overhangMax || defaults.overhangMax
  const overhangDescription = data.overhangDescription || defaults.overhangDescription
  const beginnerTips = data.beginnerTips?.length ? data.beginnerTips : defaults.beginnerTips
  const advancedTips = data.advancedTips?.length ? data.advancedTips : defaults.advancedTips
  const alternativesIntro = data.alternativesIntro || defaults.alternativesIntro
  const alternativesList = data.alternatives?.length ? data.alternatives : defaults.alternatives
  const alternativesBottomLine = data.alternativesBottomLine || defaults.alternativesBottomLine
  const gymsTitle = data.gymsTitle || defaults.gymsTitle
  const gymsSubtitle = data.gymsSubtitle || defaults.gymsSubtitle
  const gymsList = data.gymsList?.length ? data.gymsList : defaults.gymsList
  const ctaTitle = data.ctaTitle || defaults.ctaTitle
  const ctaText = data.ctaText || defaults.ctaText
  const ctaEmail = data.ctaEmail || defaults.ctaEmail

  const usaGyms = gymsList.filter((g) => g.country === 'USA')
  const canadaGyms = gymsList.filter((g) => g.country === 'Canada')

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-usa-navy">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            {heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {heroSubtitle}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="section-container max-w-4xl">
          <p className="text-xl text-slate-600 leading-relaxed text-center mb-12">
            {introText}
          </p>

          {data.introImage ? (
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-ice-200">
              <Image
                src={urlFor(data.introImage).width(1200).height(675).url()}
                alt={introImageCaption}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-ice-200">
              <div className="absolute inset-0 bg-gradient-to-br from-ice-400 to-ice-600 flex items-center justify-center">
                <p className="text-white font-display text-xl">{introImageCaption}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Safety Section */}
      <section className="section-padding bg-slate-50">
        <div className="section-container max-w-5xl">
          <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-4 text-center">
            Safety
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto text-center mb-16">
            {safetyIntro}
          </p>

          <div className="space-y-16">
            {/* Helmets — text left, photo right */}
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="font-display text-xl text-usa-navy mb-4 uppercase tracking-wide">Helmets</h3>
                <ul className="space-y-3">
                  {helmetRules.map((rule, i) => (
                    <li key={rule._key || i} className="pl-4 border-l-2 border-slate-200 text-slate-700">
                      <span dangerouslySetInnerHTML={{ __html: rule.text }} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200">
                {data.safetyImageHelmet ? (
                  <Image
                    src={urlFor(data.safetyImageHelmet).width(800).height(600).url()}
                    alt={data.safetyImageHelmet.caption || 'Lead climbing with helmet'}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
                    <p className="text-white font-display text-center px-4">Lead climbing with helmet</p>
                  </div>
                )}
              </div>
            </div>

            {/* Tethers — photo left, text right */}
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 lg:order-first">
                {data.safetyImageTethers ? (
                  <Image
                    src={urlFor(data.safetyImageTethers).width(800).height(600).url()}
                    alt={data.safetyImageTethers.caption || 'Tethers attached to toprope with carabiner'}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
                    <p className="text-white font-display text-center px-4">Tethers attached to toprope with carabiner</p>
                  </div>
                )}
              </div>
              <div>
                <h3 className="font-display text-xl text-usa-navy mb-6 uppercase tracking-wide">Falling Tools</h3>
                <div className="space-y-6">
                  {fallingToolsOptions.map((option, i) => (
                    <div key={option._key || i} className="pl-4 border-l-2 border-ice-300">
                      <h4 className="font-semibold text-usa-navy mb-1">{option.title}</h4>
                      {option.description && (
                        <p className="text-slate-600 text-sm mb-2">{option.description}</p>
                      )}
                      {option.details && option.details.length > 0 && (
                        <ul className="space-y-1 text-sm text-slate-500">
                          {option.details.map((detail, j) => (
                            <li key={j}>{detail}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cordoned area — full width photo with caption */}
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-slate-200">
              {data.safetyImageCordon ? (
                <>
                  <Image
                    src={urlFor(data.safetyImageCordon).width(1200).height(514).url()}
                    alt={data.safetyImageCordon.caption || 'Cordoned off area with helmet-required signage'}
                    fill
                    className="object-cover"
                  />
                  {data.safetyImageCordon.caption && (
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <p className="text-white text-sm">{data.safetyImageCordon.caption}</p>
                    </div>
                  )}
                </>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
                  <p className="text-white font-display text-center px-4">Cordoned off area with helmet-required signage</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Protecting the Wall */}
      <section className="section-padding">
        <div className="section-container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-4 text-center">
            Protecting the Climbing Wall
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto text-center mb-12">
            {wallProtectionIntro}
          </p>

          {data.wallOverviewImage ? (
            <div className="flex justify-center mb-12">
              <div className="relative max-w-lg w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200">
                <Image
                  src={urlFor(data.wallOverviewImage).width(800).height(600).url()}
                  alt={data.wallOverviewImage.caption || 'Drytooling wall with volumes and plywood'}
                  fill
                  className="object-cover"
                />
                {data.wallOverviewImage.caption && (
                  <p className="absolute bottom-0 inset-x-0 bg-black/50 text-white text-xs text-center py-1.5 px-2">
                    {data.wallOverviewImage.caption}
                  </p>
                )}
              </div>
            </div>
          ) : null}

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <h3 className="font-display text-xl text-usa-navy mb-3">What Are Backer Plates?</h3>
              <p className="text-slate-700 mb-8 leading-relaxed">
                {backerPlateDescription}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Materials</h4>
                  <ul className="space-y-2 text-slate-700">
                    {backerPlateMaterials.map((material, i) => (
                      <li key={i} className="pl-4 border-l-2 border-slate-200">{material}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Common Sizes</h4>
                  <ul className="space-y-2 text-slate-700">
                    {backerPlateSizes.map((size, i) => (
                      <li key={i} className="pl-4 border-l-2 border-slate-200">{size}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {data.wallImages && data.wallImages.length > 0 ? (
                data.wallImages.map((img, i) => (
                  <div key={img._key || i} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200">
                    <Image
                      src={urlFor(img).width(800).height(600).url()}
                      alt={img.caption || 'Backer plate example'}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>


        </div>
      </section>

      {/* Route Setting */}
      <section className="section-padding bg-slate-50">
        <div className="section-container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-12 text-center">
            Route Setting Considerations
          </h2>

          <div className="space-y-12 mb-12">
            {/* Holds */}
            <div>
              <h3 className="font-display text-xl text-usa-navy mb-6 uppercase tracking-wide">Holds</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-usa-navy mb-2">Standard Climbing Holds</h4>
                  <p className="text-slate-600">{standardHoldsDescription}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-usa-navy mb-3">Drytooling-Specific Holds</h4>
                  <p className="text-slate-600 mb-3">{drytoolingHoldsIntro}</p>
                  <p className="text-slate-600 mb-3">Available from specialized manufacturers:</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {manufacturers.map((m, i) => (
                      <div key={m._key || i} className="text-sm text-slate-700">
                        <span className="font-medium">{m.name}</span>
                        <span className="text-slate-400 ml-1">({m.country})</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-usa-navy mb-3">Creative Options</h4>
                  <ul className="space-y-2 text-slate-600">
                    {creativeHoldOptions.map((option, i) => (
                      <li key={i} className="pl-4 border-l-2 border-slate-200">{option}</li>
                    ))}
                  </ul>
                  <p className="text-sm text-slate-500 mt-3 italic">{creativeHoldsNote}</p>
                </div>
              </div>
            </div>

            {/* Wall Angle & Difficulty */}
            <div>
              <h3 className="font-display text-xl text-usa-navy mb-6 uppercase tracking-wide">Wall Angle & Difficulty</h3>

              <div className="space-y-8">
                <div>
                  <h4 className="font-semibold text-usa-navy mb-2">Overhanging Terrain</h4>
                  <p className="text-slate-600 mb-4">{overhangDescription}</p>
                  <div className="flex items-center gap-4 max-w-sm">
                    <div className="text-center">
                      <div className="text-2xl font-display text-usa-navy">{overhangMin}&deg;</div>
                      <div className="text-xs text-slate-500">Min</div>
                    </div>
                    <div className="flex-1 h-1 bg-gradient-to-r from-slate-200 to-usa-navy rounded-full"></div>
                    <div className="text-center">
                      <div className="text-2xl font-display text-usa-navy">{overhangMax}&deg;</div>
                      <div className="text-xs text-slate-500">Max</div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-usa-navy mb-3">Beginner Routes</h4>
                    <ul className="space-y-2 text-slate-600">
                      {beginnerTips.map((tip, i) => (
                        <li key={i} className="pl-4 border-l-2 border-slate-200">{tip}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-usa-navy mb-3">Advanced Routes</h4>
                    <ul className="space-y-2 text-slate-600">
                      {advancedTips.map((tip, i) => (
                        <li key={i} className="pl-4 border-l-2 border-slate-200">{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            {data.routeSettingImage ? (
              <div className="relative max-w-md w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200">
                <Image
                  src={urlFor(data.routeSettingImage).width(800).height(600).url()}
                  alt={data.routeSettingImage.caption || 'Bouldering with ice tools'}
                  fill
                  className="object-cover"
                />
                {data.routeSettingImage.caption && (
                  <p className="absolute bottom-0 inset-x-0 bg-black/50 text-white text-xs text-center py-1.5 px-2">
                    {data.routeSettingImage.caption}
                  </p>
                )}
              </div>
            ) : (
              <div className="relative max-w-md w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center">
                  <p className="text-white font-display text-sm text-center px-4">Bouldering with ice tools</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Alternatives */}
      <section className="section-padding">
        <div className="section-container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-4 text-center">
            Alternatives to Drytooling
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto text-center mb-12">
            {alternativesIntro}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {alternativesList.map((alt, i) => (
              <div key={alt._key || i} className="border border-slate-200 rounded-xl overflow-hidden">
                {alt.image ? (
                  <div className="relative aspect-[4/3] bg-slate-200">
                    <Image
                      src={urlFor(alt.image).width(800).height(600).url()}
                      alt={alt.imageCaption || alt.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="relative aspect-[4/3] bg-slate-200">
                    <div className={`absolute inset-0 bg-gradient-to-br ${i === 0 ? 'from-ice-400 to-ice-600' : 'from-slate-500 to-slate-700'} flex items-center justify-center`}>
                      <p className="text-white font-display text-center px-4">{alt.imageCaption || alt.title}</p>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <h3 className="font-display text-xl text-usa-navy mb-1">{alt.title}</h3>
                  {alt.subtitle && <p className="text-slate-500 text-sm mb-4">{alt.subtitle}</p>}

                  <div className="space-y-4">
                    {alt.pros && alt.pros.length > 0 && (
                      <div>
                        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Pros</h4>
                        <ul className="space-y-1.5 text-slate-600 text-sm">
                          {alt.pros.map((pro, j) => (
                            <li key={j} className="pl-3 border-l-2 border-ice-300">{pro}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {alt.cons && alt.cons.length > 0 && (
                      <div>
                        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Cons</h4>
                        <ul className="space-y-1.5 text-slate-600 text-sm">
                          {alt.cons.map((con, j) => (
                            <li key={j} className="pl-3 border-l-2 border-slate-300">{con}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {alt.note && (
                      <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">{alt.note}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-usa-navy rounded-xl p-6 text-white text-center">
            <p className="text-base">
              <span className="font-semibold">Bottom Line</span> &mdash; {alternativesBottomLine}
            </p>
          </div>
        </div>
      </section>

      {/* Gyms That Offer Drytooling */}
      <section className="section-padding bg-slate-50">
        <div className="section-container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-4 text-center">
            {gymsTitle}
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12">
            {gymsSubtitle}
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {usaGyms.length > 0 && (
              <div>
                <h3 className="font-display text-lg text-usa-navy mb-4 uppercase tracking-wide">United States</h3>
                <div className="space-y-3">
                  {usaGyms.map((gym, i) => (
                    <div key={gym._key || i} className="text-slate-700">
                      <span className="font-medium">{gym.name}</span>
                      <span className="text-slate-400"> &mdash; {gym.location}</span>
                      {gym.note && <span className="text-slate-400 text-sm"> ({gym.note})</span>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {canadaGyms.length > 0 && (
              <div>
                <h3 className="font-display text-lg text-usa-navy mb-4 uppercase tracking-wide">Canada</h3>
                <div className="space-y-3">
                  {canadaGyms.map((gym, i) => (
                    <div key={gym._key || i} className="text-slate-700">
                      <span className="font-medium">{gym.name}</span>
                      <span className="text-slate-400"> &mdash; {gym.location}</span>
                      {gym.note && <span className="text-slate-400 text-sm"> ({gym.note})</span>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {data.gymsImage ? (
            <div className="mt-10 relative aspect-video rounded-2xl overflow-hidden bg-slate-200">
              <Image
                src={urlFor(data.gymsImage).width(1200).height(675).url()}
                alt={data.gymsImage.caption || 'Indoor drytooling'}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="mt-10 relative aspect-video rounded-2xl overflow-hidden bg-slate-200">
              <div className="absolute inset-0 bg-gradient-to-br from-usa-navy to-slate-800 flex items-center justify-center">
                <p className="text-white font-display text-xl text-center px-4">{defaults.gymsImageCaption}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-usa-navy text-white">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            {ctaTitle}
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            {ctaText}
          </p>
          <a
            href={`mailto:${ctaEmail}?subject=Indoor%20Drytooling%20Guidelines%20Inquiry`}
            className="btn-primary"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  )
}
