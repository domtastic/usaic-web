'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  gold: number
  silver: number
  bronze: number
}

const MEDAL_HISTORY = [
  { season: '2025/2026', place: 2, athlete: 'Catalina Shirley', location: 'Cheongsong, Korea',            discipline: 'Lead Women'  },
  { season: '2025/2026', place: 3, athlete: 'Catalina Shirley', location: 'Cheongsong, Korea',            discipline: 'Speed Women' },
  { season: '2025/2026', place: 3, athlete: 'Catalina Shirley', location: 'Longmont, USA',                discipline: 'Lead Women'  },
  { season: '2025/2026', place: 3, athlete: 'Catalina Shirley', location: 'Longmont, USA',                discipline: 'Speed Women' },
  { season: '2025/2026', place: 3, athlete: 'Catalina Shirley', location: 'Edmonton, Canada',             discipline: 'Lead Women'  },
  { season: '2024/2025', place: 1, athlete: 'Catalina Shirley', location: 'Cheongsong, Korea',            discipline: 'Speed Women' },
  { season: '2024/2025', place: 2, athlete: 'Catalina Shirley', location: 'Champagny-en-Vanoise, France', discipline: 'Speed Women' },
  { season: '2024/2025', place: 2, athlete: 'Catalina Shirley', location: 'Longmont, USA',                discipline: 'Speed Women' },
  { season: '2024/2025', place: 2, athlete: 'Catalina Shirley', location: 'Edmonton, Canada',             discipline: 'Lead Women'  },
  { season: '2024/2025', place: 3, athlete: 'Catalina Shirley', location: 'Champagny-en-Vanoise, France', discipline: 'Lead Women'  },
  { season: '2024/2025', place: 3, athlete: 'Sam Serra',        location: 'Longmont, USA',                discipline: 'Speed Men'   },
  { season: '2023/2024', place: 2, athlete: 'Catalina Shirley', location: 'Cheongsong, Korea',            discipline: 'Lead Women'  },
  { season: '2023/2024', place: 2, athlete: 'Catalina Shirley', location: 'Cheongsong, Korea',            discipline: 'Speed Women' },
  { season: '2023/2024', place: 2, athlete: 'Keenan Griscom',   location: 'Edmonton, Canada',             discipline: 'Lead Men'    },
  { season: '2022/2023', place: 3, athlete: 'Catalina Shirley', location: 'Cheongsong, South Korea',      discipline: 'Speed Women' },
  { season: '2014/2015', place: 1, athlete: 'Kendra Stritch',   location: 'Bozeman, USA',                 discipline: 'Speed Women' },
]

const SEASONS = [...new Set(MEDAL_HISTORY.map((m) => m.season))]

function placeConfig(place: number) {
  if (place === 1) return {
    ordinal: '1st',
    textGradient: 'from-[#F9E04B] via-amber-300 to-[#B8730A]',
    rule: 'bg-amber-400/50',
  }
  if (place === 2) return {
    ordinal: '2nd',
    textGradient: 'from-slate-100 via-gray-300 to-slate-500',
    rule: 'bg-slate-300/40',
  }
  return {
    ordinal: '3rd',
    textGradient: 'from-[#E8A87C] via-[#CD7F32] to-[#7B4A1E]',
    rule: 'bg-[#CD7F32]/50',
  }
}

function useCountUp(target: number, active: boolean, delay: number) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    const t = setTimeout(() => {
      const duration = 2200
      const start = performance.now()
      const tick = (now: number) => {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setValue(Math.round(eased * target))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, delay)
    return () => clearTimeout(t)
  }, [active, target, delay])

  return value
}

export default function MedalPanel({ gold, silver, bronze }: Props) {
  const [active, setActive]     = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); observer.disconnect() } },
      { threshold: 0.7 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setModalOpen(false) }
    if (modalOpen) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [modalOpen])

  const goldCount   = useCountUp(gold,   active, 0)
  const silverCount = useCountUp(silver, active, 160)
  const bronzeCount = useCountUp(bronze, active, 320)
  const total = gold + silver + bronze

  return (
    <>
      <div className="relative h-full overflow-hidden section-padding px-6 bg-[#040b14]">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(12,165,235,0.9) 1px, transparent 1px)',
            backgroundSize: '26px 26px',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[radial-gradient(ellipse_70%_60%_at_40%_100%,rgba(12,165,235,0.07),transparent)]" />

        <div className="relative max-w-lg mx-auto lg:ml-auto lg:mr-12">

          {/* Status indicator */}
          <div className="flex items-center gap-2.5 mb-8">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ice-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-ice-400" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-ice-400/60">
              UIAA World Cup · Medal Count
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl text-white leading-tight mb-10">
            US Athletes<br />Making History
          </h2>

          {/* Medal columns */}
          <div ref={ref} className="flex items-start gap-8 md:gap-10 mb-8">

            <div>
              <div className="h-px w-10 mb-5 bg-gradient-to-r from-amber-300 via-yellow-400 to-transparent" />
              <div className="relative">
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-16 blur-3xl bg-amber-400/20 -z-10" />
                <span
                  className="font-display leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#F9E04B] via-amber-300 to-[#B8730A] tabular-nums"
                  style={{ fontSize: 'clamp(56px, 8vw, 100px)' }}
                >
                  {String(goldCount).padStart(2, '0')}
                </span>
              </div>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-400/50">Gold</p>
            </div>

            <div>
              <div className="h-px w-10 mb-5 bg-gradient-to-r from-slate-300 via-gray-400 to-transparent" />
              <div className="relative">
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-16 blur-3xl bg-slate-400/15 -z-10" />
                <span
                  className="font-display leading-none text-transparent bg-clip-text bg-gradient-to-b from-slate-100 via-gray-300 to-slate-500 tabular-nums"
                  style={{ fontSize: 'clamp(56px, 8vw, 100px)' }}
                >
                  {String(silverCount).padStart(2, '0')}
                </span>
              </div>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-400/50">Silver</p>
            </div>

            <div>
              <div className="h-px w-10 mb-5 bg-gradient-to-r from-[#E8A87C] via-[#CD7F32] to-transparent" />
              <div className="relative">
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-16 blur-3xl bg-[#CD7F32]/15 -z-10" />
                <span
                  className="font-display leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#E8A87C] via-[#CD7F32] to-[#7B4A1E] tabular-nums"
                  style={{ fontSize: 'clamp(56px, 8vw, 100px)' }}
                >
                  {String(bronzeCount).padStart(2, '0')}
                </span>
              </div>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#CD7F32]/60">Bronze</p>
            </div>

          </div>

          {/* Total + trigger */}
          <div className="pt-5 border-t border-white/[0.07] flex items-center justify-between gap-4">
            <p className="font-display text-lg text-white/25">
              <span className="text-white/80">{total}</span> World Cup medals &amp; counting
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="group flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-ice-400/60 hover:text-ice-300 transition-colors duration-200 shrink-0"
            >
              View all
              <span className="block h-px w-4 bg-current transition-all duration-300 group-hover:w-6" />
            </button>
          </div>

        </div>
      </div>

      {/* ── Modal ── */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-6 bg-black/85 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full sm:max-w-md max-h-[88vh] sm:max-h-[78vh] flex flex-col bg-[#030a12] border border-ice-500/[0.14] shadow-[0_0_80px_rgba(0,0,0,0.9)] animate-fade-in-up overflow-hidden"
            style={{ animationDuration: '0.35s' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top accent line */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-ice-500/40 to-transparent shrink-0" />

            {/* Header */}
            <div className="shrink-0 flex items-start justify-between px-6 pt-5 pb-4 border-b border-white/[0.06]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.45em] text-ice-400/50 mb-1.5">
                  UIAA Ice Climbing World Cup
                </p>
                <h3 className="font-display text-2xl text-white leading-none">Medal History</h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                aria-label="Close"
                className="mt-0.5 w-7 h-7 flex items-center justify-center text-white/20 hover:text-white/70 transition-colors duration-200 border border-white/10 hover:border-white/25"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto flex-1 px-6 py-5 space-y-8">
              {SEASONS.map((season) => {
                const rows = MEDAL_HISTORY.filter((m) => m.season === season)
                const ghostYear = season.split('/')[1]

                return (
                  <div key={season} className="relative">
                    {/* Ghost year watermark */}
                    <span
                      aria-hidden="true"
                      className="absolute -top-4 -left-1 font-display leading-none text-white/[0.03] pointer-events-none select-none"
                      style={{ fontSize: 'clamp(52px, 12vw, 80px)' }}
                    >
                      {ghostYear}
                    </span>

                    {/* Season label */}
                    <div className="relative flex items-center gap-3 mb-3">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/30 shrink-0">
                        {season}
                      </span>
                      <div className="flex-1 h-px bg-white/[0.07]" />
                      <span className="text-[11px] text-white/20 shrink-0">
                        {rows.length} medal{rows.length !== 1 ? 's' : ''}
                      </span>
                    </div>

                    {/* Rows */}
                    <div>
                      {rows.map((m, i) => {
                        const cfg = placeConfig(m.place)
                        return (
                          <div
                            key={i}
                            className="flex items-center gap-3.5 py-2.5 border-b border-white/[0.045] last:border-0 animate-fade-in-up"
                            style={{ animationDelay: `${i * 45}ms`, animationFillMode: 'both', animationDuration: '0.4s' }}
                          >
                            {/* Ordinal */}
                            <span
                              className={`shrink-0 font-display text-sm leading-none text-transparent bg-clip-text bg-gradient-to-b ${cfg.textGradient} w-7 text-right`}
                            >
                              {cfg.ordinal}
                            </span>

                            {/* Colored rule */}
                            <div className={`shrink-0 self-stretch w-px ${cfg.rule}`} />

                            {/* Details */}
                            <div className="min-w-0 flex-1">
                              <p className="font-display text-[15px] text-white/85 leading-snug truncate">
                                {m.athlete}
                              </p>
                              <p className="text-xs uppercase tracking-wider text-white/28 mt-0.5 truncate">
                                {m.location} &middot; {m.discipline}
                              </p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Bottom fade */}
            <div className="shrink-0 h-6 bg-gradient-to-t from-[#030a12] to-transparent pointer-events-none" />
          </div>
        </div>
      )}
    </>
  )
}
