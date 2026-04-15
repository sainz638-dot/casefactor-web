'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-brand-dark/90 backdrop-blur-xl border-b border-brand-gold/10 py-3' : 'py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center group-hover:border-brand-gold/60 transition">
            <span className="font-display font-bold text-brand-gold text-lg">CF</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-display font-bold text-white text-sm tracking-[0.2em]">CASE FACTOR</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {[
            { label: 'Productos', href: '#productos' },
            { label: 'Cómo Funciona', href: '/como-trabajamos' },
            { label: 'Personalizar', href: '#personalizar' },
          ].map(item => (
            <a key={item.label} href={item.href}
               className="px-4 py-2 text-sm text-white/50 font-medium hover:text-brand-gold transition rounded-xl hover:bg-brand-gold/[0.03]">
              {item.label}
            </a>
          ))}

          {/* Ecosistema dropdown */}
          <div className="relative group">
            <button className="px-4 py-2 text-sm text-white/50 font-medium hover:text-brand-gold transition rounded-xl hover:bg-brand-gold/[0.03] flex items-center gap-1.5">
              Ecosistema
              <i className="fa-solid fa-chevron-down text-[10px] transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-brand-deep/95 backdrop-blur-xl border border-white/10 rounded-xl p-2 min-w-[200px] shadow-xl">
                {[
                  { label: 'Para Artistas', href: '/artistas', icon: 'fa-palette', color: 'text-purple-400' },
                  { label: 'Para Creadores', href: '/creadores', icon: 'fa-video', color: 'text-green-400' },
                  { label: 'Para Vendedores', href: '/vendedores', icon: 'fa-store', color: 'text-cyan-400' },
                  { label: 'Para Proveedores', href: '/proveedores', icon: 'fa-truck', color: 'text-amber-400' },
                ].map(item => (
                  <a key={item.label} href={item.href}
                     className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition">
                    <i className={`fa-solid ${item.icon} text-xs w-4 text-center ${item.color}`} />
                    <span className="text-sm">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a href="/catalogo" className="hidden md:inline-flex items-center gap-2 border border-brand-gold/20 text-brand-cream/60 px-4 py-2.5 rounded-xl text-sm font-medium hover:border-brand-gold/40 transition">
            <i className="fa-solid fa-box text-xs" />
            Catálogo
          </a>
          <a href="#personalizar"
             className="inline-flex items-center gap-2 border border-brand-gold text-brand-gold px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-brand-gold hover:text-brand-dark hover:shadow-[0_0_25px_rgba(201,169,110,0.2)] transition-all duration-300">
            <i className="fa-solid fa-palette text-xs" />
            <span className="hidden sm:inline">Crear</span> Diseño
          </a>

          <button onClick={() => setMobileOpen(!mobileOpen)}
                  className="md:hidden w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition">
            <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'}`} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-dark/98 backdrop-blur-xl border-b border-brand-gold/10 p-6 space-y-2 animate-[fade-in-up_0.3s_ease-out]">
          {[
            { label: 'Productos', href: '#productos', icon: 'fa-box' },
            { label: 'Cómo Funciona', href: '/como-trabajamos', icon: 'fa-circle-question' },
            { label: 'Personalizar', href: '#personalizar', icon: 'fa-palette' },
          ].map(item => (
            <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)}
               className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-brand-gold hover:bg-brand-gold/5 transition">
              <i className={`fa-solid ${item.icon} text-sm w-5 text-center`} />
              <span className="text-sm font-medium">{item.label}</span>
            </a>
          ))}
          <div className="border-t border-white/5 pt-2 mt-2">
            <p className="px-4 py-2 text-xs font-bold text-white/20 uppercase tracking-wider">Ecosistema</p>
            {[
              { label: 'Para Artistas', href: '/artistas', icon: 'fa-palette', color: 'text-purple-400' },
              { label: 'Para Creadores', href: '/creadores', icon: 'fa-video', color: 'text-green-400' },
              { label: 'Para Vendedores', href: '/vendedores', icon: 'fa-store', color: 'text-cyan-400' },
              { label: 'Para Proveedores', href: '/proveedores', icon: 'fa-truck', color: 'text-amber-400' },
            ].map(item => (
              <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)}
                 className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition">
                <i className={`fa-solid ${item.icon} text-sm w-5 text-center ${item.color}`} />
                <span className="text-sm font-medium">{item.label}</span>
              </a>
            ))}
          </div>
          <a href="#personalizar" onClick={() => setMobileOpen(false)} className="block text-center bg-brand-gold text-brand-dark px-6 py-3 rounded-xl font-bold text-sm mt-4">
            Diseña la Tuya
          </a>
        </div>
      )}
    </nav>
  )
}
