'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

const FEED_ITEMS = [
  { img: '/images/cases/case-1.jpg', title: 'Mi viaje a Cancún', user: '@travel_mx', likes: '1.5k', badge: 'Funda Premium', badgeColor: 'bg-brand-gold' },
  { img: '/images/cases/case-5.jpg', title: 'Mi ciudad', user: '@maria_art', likes: '5.7k', badge: null, badgeColor: '' },
  { img: '/images/cases/case-7.jpg', title: 'Mi compañero', user: '@dog_lover', likes: '8.2k', badge: null, badgeColor: '' },
  { img: '/images/cases/case-6.jpg', title: 'El amor de mi vida', user: '@new_mom', likes: '6.3k', badge: null, badgeColor: '' },
  { img: '/images/cases/case-2.jpg', title: 'El logo de mi empresa', user: '@apex_ceo', likes: '2.1k', badge: 'Uso Rudo', badgeColor: 'bg-brand-amber' },
  { img: '/images/cases/case-3.jpg', title: 'Galaxia', user: '@cosmic_style', likes: '4.5k', badge: 'Playera', badgeColor: 'bg-brand-rose' },
  { img: '/images/cases/case-4.jpg', title: 'Lo que me representa', user: '@good_vibes', likes: '3.8k', badge: 'Playera', badgeColor: 'bg-brand-rose' },
  { img: '/images/cases/case-8.jpg', title: 'Mi familia', user: '@mama_hija', likes: '9.1k', badge: null, badgeColor: '' },
]

function FeedCard({ item }: { item: typeof FEED_ITEMS[0] }) {
  return (
    <div className="relative flex-shrink-0 rounded-xl overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.img} alt="" className="w-full h-[140px] object-cover" loading="eager" />
      {/* Badge overlay */}
      {item.badge && (
        <div className={`absolute top-2 right-2 ${item.badgeColor} px-2 py-0.5 rounded-md`}>
          <span className="text-[8px] font-bold text-brand-dark tracking-wide">{item.badge}</span>
        </div>
      )}
      {/* Title + user overlay */}
      {item.title && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 pt-6">
          <p className="text-[10px] font-bold text-white leading-tight">{item.title}</p>
          <div className="flex items-center justify-between mt-0.5">
            <span className="text-[8px] text-white/50">{item.user}</span>
            <span className="text-[8px] text-red-400 flex items-center gap-0.5">
              <i className="fa-solid fa-heart" style={{ fontSize: '6px' }} />
              {item.likes}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)
  const badge1Ref = useRef<HTMLDivElement>(null)
  const badge2Ref = useRef<HTMLDivElement>(null)
  const badge3Ref = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.matchMedia('(hover: none)').matches || window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Clamp helper
  const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(max, val))

  // Reset phone to default position
  const resetPhone = useCallback(() => {
    if (phoneRef.current) {
      phoneRef.current.style.transform = 'perspective(1000px) rotateY(-5deg) rotateX(3deg)'
    }
    if (badge1Ref.current) badge1Ref.current.style.transform = 'translate(0px, 0px)'
    if (badge2Ref.current) badge2Ref.current.style.transform = 'translate(0px, 0px)'
    if (badge3Ref.current) badge3Ref.current.style.transform = 'translate(0px, 0px)'
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()

    // Only apply parallax when mouse is within the hero section
    if (e.clientY < rect.top || e.clientY > rect.bottom) return

    const x = clamp((e.clientX - rect.left) / rect.width, 0, 1)
    const y = clamp((e.clientY - rect.top) / rect.height, 0, 1)

    if (phoneRef.current) {
      // Max rotation: ±8deg Y, ±6deg X — subtle and controlled
      const rotateY = clamp((x - 0.5) * 16, -8, 8)
      const rotateX = clamp(-(y - 0.5) * 12, -6, 6)
      phoneRef.current.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
    }

    const offsetX = (x - 0.5) * -12
    const offsetY = (y - 0.5) * -8
    if (badge1Ref.current) badge1Ref.current.style.transform = `translate(${offsetX * 1.2}px, ${offsetY * 1.2}px)`
    if (badge2Ref.current) badge2Ref.current.style.transform = `translate(${offsetX * 0.8}px, ${offsetY * 0.8}px)`
    if (badge3Ref.current) badge3Ref.current.style.transform = `translate(${offsetX * 1.5}px, ${offsetY * 1.5}px)`
  }, [])

  useEffect(() => {
    if (isMobile) return
    const section = sectionRef.current
    window.addEventListener('mousemove', handleMouseMove)
    // Reset when mouse leaves the hero section
    const handleLeave = () => resetPhone()
    if (section) section.addEventListener('mouseleave', handleLeave)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (section) section.removeEventListener('mouseleave', handleLeave)
    }
  }, [handleMouseMove, resetPhone, isMobile])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-brand-dark" />
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-gold/[0.05] rounded-full blur-[200px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-brand-rose/[0.03] rounded-full blur-[150px]" />
      <div className="absolute inset-0 luxury-grain" />

      <div className="absolute top-[20%] right-[15%] w-px h-32 bg-gradient-to-b from-transparent via-brand-gold/15 to-transparent hidden lg:block z-[2]" />
      <div className="absolute bottom-[25%] right-[20%] w-24 h-px bg-gradient-to-r from-transparent via-brand-gold/15 to-transparent hidden lg:block z-[2]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/25 bg-brand-gold/5 mb-8">
              <i className="fa-solid fa-gem text-brand-gold text-xs" />
              <span className="text-xs font-semibold text-brand-gold tracking-[0.15em] uppercase">Personalización Premium</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Tu Estilo,
              <br />
              Nuestra <span className="text-shimmer">Artesanía.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#E8E4DF]/50 max-w-lg mb-10 leading-relaxed font-sans">
              Fundas y accesorios premium, personalizados con tu imagen. Fabricados bajo demanda en México con calidad que se siente.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a href="#personalizar"
                 className="btn-glow relative inline-flex items-center gap-3 bg-brand-gold text-brand-dark px-8 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_40px_rgba(0,219,255,0.35)] transition-all duration-300">
                <i className="fa-solid fa-palette" />
                Diseña la Tuya
              </a>
              <a href="#como-funciona"
                 className="inline-flex items-center gap-2 text-white/40 hover:text-brand-gold transition text-sm font-medium">
                Cómo funciona
                <i className="fa-solid fa-arrow-right text-xs" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-10 text-xs text-[#E8E4DF]/30">
              <span className="flex items-center gap-1.5">
                <i className="fa-solid fa-circle text-brand-gold/60" style={{ fontSize: '5px' }} />
                Envío a todo México
              </span>
              <span className="flex items-center gap-1.5">
                <i className="fa-solid fa-circle text-brand-gold/60" style={{ fontSize: '5px' }} />
                Pago 100% seguro
              </span>
              <span className="flex items-center gap-1.5">
                <i className="fa-solid fa-circle text-brand-gold/60" style={{ fontSize: '5px' }} />
                Garantía de calidad
              </span>
            </div>
          </div>

          {/* Right: Phone mockup — exact replica of original */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 scale-[1.3] bg-brand-gold/[0.06] rounded-[3rem] blur-[100px]" />

              {/* Phone with mouse-tracking 3D */}
              <div
                ref={phoneRef}
                className="relative"
                style={{
                  transform: 'perspective(1000px) rotateY(-5deg) rotateX(3deg)',
                  transition: 'transform 0.3s ease-out',
                  willChange: 'transform',
                }}
              >
                <div className="relative w-[300px] h-[600px] rounded-[2.8rem] border-[3px] border-white/10 overflow-hidden shadow-2xl bg-[#0D0D0D]"
                     style={{ boxShadow: '0 0 40px rgba(0,219,255,0.08), 0 20px 60px rgba(0,0,0,0.5)' }}>

                  {/* ===== STATUS BAR ===== */}
                  <div className="relative z-20 flex items-center justify-between px-6 pt-3 pb-1">
                    <span className="text-[11px] text-white font-semibold">12:04</span>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/60" />
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/30" />
                    </div>
                  </div>

                  {/* ===== APP HEADER — CF Diseños Recientes ===== */}
                  <div className="relative z-20 px-4 pt-1 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center">
                        <span className="text-[9px] font-bold text-brand-gold">CF</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-[11px] font-bold text-white leading-tight">Diseños Recientes</p>
                        <p className="text-[8px] text-white/35">@juan_designs</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <i className="fa-solid fa-heart text-red-400" style={{ fontSize: '9px' }} />
                        <span className="text-[9px] text-red-400 font-semibold">1.5k</span>
                      </div>
                    </div>
                  </div>

                  {/* ===== SCROLLING FEED ===== */}
                  <div className="absolute top-[72px] left-0 right-0 bottom-0 overflow-hidden">
                    <div className="scroll-cases flex flex-col gap-2.5 px-3">
                      {/* First set */}
                      {FEED_ITEMS.map((item, i) => (
                        <FeedCard key={`a-${i}`} item={item} />
                      ))}
                      {/* Duplicate for seamless loop */}
                      {FEED_ITEMS.map((item, i) => (
                        <FeedCard key={`b-${i}`} item={item} />
                      ))}
                    </div>
                  </div>

                  {/* Bottom gradient fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0D0D0D] to-transparent z-[15]" />
                </div>
              </div>

              {/* ===== FLOATING NOTIFICATION BADGES (popping out of phone) ===== */}
              {/* IA Ajusta Tu Foto — left side */}
              <div
                ref={badge1Ref}
                className="absolute top-[35%] -left-[60px] z-30 flex items-center gap-2 bg-brand-deep/90 backdrop-blur-md px-3 py-2 rounded-xl border border-brand-gold/20 shadow-lg"
                style={{ transition: 'transform 0.2s ease-out', boxShadow: '0 4px 20px rgba(0,0,0,0.4), 0 0 15px rgba(0,219,255,0.1)' }}
              >
                <div className="w-6 h-6 rounded-lg bg-brand-gold/15 flex items-center justify-center">
                  <i className="fa-solid fa-wand-magic-sparkles text-brand-gold" style={{ fontSize: '9px' }} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-white leading-tight">IA Ajusta</p>
                  <p className="text-[8px] text-brand-gold">Tu Foto</p>
                </div>
              </div>

              {/* Impresión HD Premium — left side lower */}
              <div
                ref={badge2Ref}
                className="absolute bottom-[20%] -left-[50px] z-30 flex items-center gap-2 bg-brand-deep/90 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 shadow-lg"
                style={{ transition: 'transform 0.2s ease-out', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}
              >
                <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center">
                  <i className="fa-solid fa-print text-white/60" style={{ fontSize: '9px' }} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-white leading-tight">Impresión</p>
                  <p className="text-[8px] text-white/50">HD Premium</p>
                </div>
              </div>

              {/* Llega a Tu Puerta — right side */}
              <div
                ref={badge3Ref}
                className="absolute bottom-[30%] -right-[55px] z-30 flex items-center gap-2 bg-brand-deep/90 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 shadow-lg"
                style={{ transition: 'transform 0.2s ease-out', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}
              >
                <div className="w-6 h-6 rounded-lg bg-brand-gold/10 flex items-center justify-center">
                  <i className="fa-solid fa-truck-fast text-brand-gold" style={{ fontSize: '9px' }} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-white leading-tight">Llega a</p>
                  <p className="text-[8px] text-brand-gold font-semibold">Tu Puerta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-10">
        <i className="fa-solid fa-chevron-down text-brand-gold/40 animate-subtle-pulse block mb-1" />
        <span className="text-[10px] text-[#E8E4DF]/20">Descubre más</span>
      </div>
    </section>
  )
}
