import Link from 'next/link'
import { client } from '@/lib/sanity'
import MedalPanel from './MedalPanel'

interface MedalData {
  goldMedals: number
  silverMedals: number
  bronzeMedals: number
}

async function getMedalData(): Promise<MedalData> {
  const query = `*[_type == "medalCount"][0] {
    goldMedals,
    silverMedals,
    bronzeMedals
  }`

  return await client.fetch(query) || {
    goldMedals: 0,
    silverMedals: 0,
    bronzeMedals: 0,
  }
}

export default async function MedalDonateSection() {
  const data = await getMedalData()

  return (
    <section className="grid lg:grid-cols-2 min-h-[520px]">

      {/* Left — medal data display */}
      <MedalPanel
        gold={data.goldMedals || 0}
        silver={data.silverMedals || 0}
        bronze={data.bronzeMedals || 0}
      />

      {/* Right — donate */}
      <div className="relative section-padding px-6 bg-usa-red overflow-hidden">
        {/* Subtle depth gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_110%_120%,rgba(0,0,0,0.35),transparent)]" />
        {/* Fine diagonal texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 12px)',
          }}
        />

        <div className="relative max-w-lg mx-auto lg:mr-auto lg:ml-12">

          <div className="border-l-2 border-white/30 pl-4 mb-8">
            <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-white/50 mb-1">
              Support the Mission
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-white leading-tight">
              Help Grow<br />the Sport.
            </h2>
          </div>

          <p className="text-white/80 mb-4 leading-relaxed">
            Your donation fuels the future of ice climbing in the United States — from expanding gym access and youth programs to sending elite athletes to World Cup competitions.
          </p>
          <p className="text-white/50 text-sm mb-10">
            501(c)(3) nonprofit · All donations are tax-deductible.
          </p>

          <Link
            href="/donate"
            className="group inline-flex items-center gap-4 px-8 py-4 bg-white text-usa-red font-semibold text-sm uppercase tracking-widest rounded-sm hover:bg-white/90 transition-colors duration-300 shadow-xl shadow-black/20"
          >
            Donate Now
            <span className="block h-px w-6 bg-usa-red transition-all duration-500 group-hover:w-10" />
          </Link>

        </div>
      </div>

    </section>
  )
}
