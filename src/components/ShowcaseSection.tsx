'use client'

import { useState, useEffect, useRef } from 'react'
import FadeInView from './FadeInView'

const showcaseItems = [
  {
    id: 1,
    title: 'Atardecer en Cancún',
    category: 'Funda Premium',
    description: 'Foto de viaje convertida en funda personalizada',
    gradient: 'from-amber-500 via-orange-400 to-rose-500',
    icon: 'fa-solid fa-sun',
    patternIcon: 'fa-solid fa-umbrella-beach',
  },
  {
    id: 2,
    title: 'Mascota Favorita',
    category: 'Funda 3D Lenticular',
    description: 'Retrato de mascota con efecto 3D lenticular',
    gradient: 'from-brand-gold via-amber-400 to-brand-rose',
    icon: 'fa-solid fa-paw',
    patternIcon: 'fa-solid fa-heart',
  },
  {
    id: 3,
    title: 'Arte Digital',
    category: 'Funda Tough',
    description: 'Ilustración artística con protección resistente',
    gradient: 'from-brand-cream via-amber-300 to-yellow-600',
    icon: 'fa-solid fa-palette',
    patternIcon: 'fa-solid fa-star',
  },
  {
    id: 4,
    title: 'Logo de Negocio',
    category: 'Playera Premium',
    description: 'Branding personal en playera de alta calidad',
    gradient: 'from-brand-rose via-rose-400 to-amber-500',
    icon: 'fa-solid fa-briefcase',
    patternIcon: 'fa-solid fa-crown',
  },
  {
    id: 5,
    title: 'Foto Familiar',
    category: 'Funda Premium',
    description: 'Momentos especiales siempre contigo',
    gradient: 'from-yellow-400 via-amber-500 to-brand-gold',
    icon: 'fa-solid fa-users',
    patternIcon: 'fa-solid fa-camera',
  },
  {
    id: 6,
    title: 'Diseño Geométrico',
    category: 'Funda 3D Lenticular',
    description: 'Patrones creativos con profundidad 3D',
    gradient: 'from-brand-gold via-brand-rose to-rose-600',
    icon: 'fa-solid fa-shapes',
    patternIcon: 'fa-solid fa-diamond',
  },
]

function PhoneMockup({ item, index }: { item: typeof showcaseItems[0]; index: number }) {
  return (
    <div className="group relative">
      <div
        className="relative mx-auto w-[200px] h-[400px] rounded-[2.5rem] border-[3px] border-white/10 overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-brand-gold/30"
        style={{ animationDelay: `${index * 150}ms` }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}>
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="grid grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <i key={i} className={`${item.patternIcon} text-white text-2xl`} />
              ))}
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <i className={`${item.icon} text-white text-3xl`} />
            </div>
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black/40 rounded-b-2xl" />
        </div>

        <div className="absolute inset-0 bg-brand-gold/0 group-hover:bg-brand-gold/5 transition-all duration-500" />
      </div>

      <div className="text-center mt-5">
        <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-gold bg-brand-gold/10 rounded-full mb-2">
          {item.category}
        </span>
        <h3 className="text-white font-bold text-sm">{item.title}</h3>
        <p className="text-white/30 text-xs mt-1">{item.description}</p>
      </div>
    </div>
  )
}

export default function ShowcaseSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (!scrollRef.current) return
    const el = scrollRef.current
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  useEffect(() => {
    checkScroll()
    const el = scrollRef.current
    if (el) el.addEventListener('scroll', checkScroll)
    return () => { if (el) el.removeEventListener('scroll', checkScroll) }
  }, [])

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = 280
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-gold/[0.01] to-transparent" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-gold/[0.03] rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-gold/20 bg-brand-gold/5 mb-6">
            <i className="fa-solid fa-fire text-brand-amber text-xs" />
            <span className="text-brand-amber text-xs font-semibold tracking-widest uppercase">Casos Reales</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            Creados por Gente <span className="text-brand-gold">Como Tú</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            Cada producto es único. Tu foto, tu diseño, tu estilo — hecho realidad en minutos.
          </p>
        </div>

        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-brand-dark/90 border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-gold hover:border-brand-gold/30 transition-all -ml-2 backdrop-blur-sm"
            >
              <i className="fa-solid fa-chevron-left" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-brand-dark/90 border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-gold hover:border-brand-gold/30 transition-all -mr-2 backdrop-blur-sm"
            >
              <i className="fa-solid fa-chevron-right" />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-6 px-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {showcaseItems.map((item, i) => (
              <div key={item.id} className="snap-center shrink-0 w-[220px]">
                <PhoneMockup item={item} index={i} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { value: '2,847+', label: 'Productos creados', icon: 'fa-solid fa-box' },
            { value: '4.9/5', label: 'Calificación promedio', icon: 'fa-solid fa-star' },
            { value: '98%', label: 'Clientes satisfechos', icon: 'fa-solid fa-face-smile' },
            { value: '24-48h', label: 'Tiempo de entrega', icon: 'fa-solid fa-truck-fast' },
          ].map((stat, i) => (
            <FadeInView key={i} delay={i * 0.1}>
              <div className="text-center p-4 sm:p-5 rounded-2xl border border-white/5 bg-white/[0.02] h-full">
                <i className={`${stat.icon} text-brand-gold/50 text-lg mb-3 block`} />
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-[10px] sm:text-xs text-white/30">{stat.label}</div>
              </div>
            </FadeInView>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#personalizar"
            className="btn-glow relative inline-flex items-center gap-3 bg-brand-gold text-brand-dark px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-[0_0_50px_rgba(201,169,110,0.2)] transition-all"
          >
            <i className="fa-solid fa-wand-magic-sparkles" />
            Crea el Tuyo
          </a>
          <p className="text-xs text-white/25 mt-3">Diseñar es gratis · Solo pagas si te encanta</p>
        </div>
      </div>
    </section>
  )
}
