'use client'

import { useState } from 'react'

const BASE_URL = 'https://dashboard.case-factor.com/disenador-publico'

const editors = [
  {
    id: 'personalizada',
    label: 'Personalizada',
    icon: 'fa-solid fa-mobile-screen-button',
    url: `${BASE_URL}/personalizada`,
    desc: 'Funda Personalizada · 1 foto',
    price: '$350 MXN',
  },
  {
    id: 'lenticular',
    label: 'Lenticular 3D',
    icon: 'fa-solid fa-cube',
    url: `${BASE_URL}/lenticular`,
    desc: 'Funda Lenticular · 2 fotos · Efecto 3D',
    price: '$450 MXN',
  },
  {
    id: 'uso-rudo',
    label: 'Uso Rudo',
    icon: 'fa-solid fa-shield-halved',
    url: `${BASE_URL}/uso-rudo`,
    desc: 'Funda Uso Rudo · 1 foto · Protección militar',
    price: '$450 MXN',
  },
  {
    id: 'bumper',
    label: 'Bumper',
    icon: 'fa-solid fa-ring',
    url: `${BASE_URL}/bumper`,
    desc: 'Funda Bumper · 1 foto · Bordes reforzados',
    price: '$400 MXN',
  },
  {
    id: 'magsafe',
    label: 'MagSafe',
    icon: 'fa-solid fa-magnet',
    url: `${BASE_URL}/magsafe`,
    desc: 'Funda MagSafe · 1 foto · Imanes integrados',
    price: '$400 MXN',
  },
  {
    id: 'playera',
    label: 'Playera',
    icon: 'fa-solid fa-shirt',
    url: `${BASE_URL}/playera`,
    desc: 'Playera Personalizada · 1 foto · Algodón premium',
    price: '$390 MXN',
  },
]

export default function EditorSection() {
  const [active, setActive] = useState(0)
  const [loaded, setLoaded] = useState(false)

  return (
    <section id="personalizar" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-gold/[0.01] to-transparent" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-gold/[0.03] rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-rose/[0.03] rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-gold/20 bg-brand-gold/5 mb-6">
            <i className="fa-solid fa-wand-magic-sparkles text-brand-gold text-xs" />
            <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase">Editor en Vivo</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            Diseña Aquí, <span className="text-brand-gold">Ahora Mismo</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            Elige tu tipo de funda, sube tu foto y ve el resultado en tiempo real. Si te gusta, cómpralo directo.
          </p>
        </div>

        <div className="flex justify-start lg:justify-center gap-2 mb-8 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          {editors.map((ed, i) => (
            <button
              key={ed.id}
              onClick={() => { setActive(i); setLoaded(false) }}
              className={`
                flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 whitespace-nowrap shrink-0
                ${active === i
                  ? 'bg-brand-gold text-brand-dark shadow-[0_0_25px_rgba(201,169,110,0.2)]'
                  : 'bg-white/5 text-white/50 border border-white/10 hover:border-brand-gold/30 hover:text-white/80'
                }
              `}
            >
              <i className={ed.icon} />
              <span>{ed.label}</span>
              <span className="text-xs opacity-70">{ed.price}</span>
            </button>
          ))}
        </div>

        <div className="relative rounded-2xl border border-brand-gold/10 bg-brand-gold/[0.02] backdrop-blur-sm overflow-hidden shadow-2xl">
          {!loaded && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-brand-dark/90">
              <div className="w-12 h-12 border-2 border-brand-gold/30 border-t-brand-gold rounded-full animate-spin mb-4" />
              <p className="text-white/40 text-sm">Cargando editor...</p>
            </div>
          )}

          <div className="flex items-center justify-between px-3 sm:px-5 py-3 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden sm:flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-brand-muted-red/60" />
                <div className="w-3 h-3 rounded-full bg-brand-amber/60" />
                <div className="w-3 h-3 rounded-full bg-brand-cream/60" />
              </div>
              <span className="text-white/30 text-[10px] sm:text-xs font-mono truncate">{editors[active].desc}</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-brand-gold text-xs font-semibold">{editors[active].price}</span>
              <i className="fa-solid fa-lock text-brand-cream/60 text-xs" />
              <span className="hidden sm:inline text-white/30 text-xs">Pago seguro</span>
            </div>
          </div>

          {/* Cyber Neo CN-009 — sandbox para limitar privilegios si el iframe es comprometido. */}
          <iframe
            key={editors[active].id}
            src={editors[active].url}
            className="w-full border-0"
            style={{ height: 'min(700px, 80vh)', minHeight: '450px' }}
            onLoad={() => setLoaded(true)}
            allow="camera; clipboard-write"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            title={`Editor ${editors[active].label}`}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {[
            { icon: 'fa-solid fa-shield-halved', text: 'Pago 100% seguro' },
            { icon: 'fa-solid fa-wand-magic-sparkles', text: 'IA incluida gratis' },
            { icon: 'fa-solid fa-truck-fast', text: 'Envío 24-48h' },
            { icon: 'fa-solid fa-rotate-left', text: 'Garantía de calidad' },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-white/30 text-sm">
              <i className={`${badge.icon} text-brand-gold/50`} />
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
