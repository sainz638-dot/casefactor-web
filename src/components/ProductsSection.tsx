'use client'

import { openEditorModal } from './EditorModal'
import { FEATURED_PRODUCTS } from '@/lib/products'
import FadeInView from './FadeInView'

export default function ProductsSection() {
  return (
    <section id="productos" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 luxury-grain" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-gold/15 mb-6">
            <i className="fa-solid fa-fire text-brand-amber text-xs" />
            <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">Lo Más Pedido</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Elige tu Producto, <span className="text-glow text-brand-gold">Sube tu Foto</span>
          </h2>
          <p className="text-lg text-white/40">
            Cada pieza fabricada bajo demanda, solo para ti. Calidad premium que se ve y se siente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURED_PRODUCTS.map((product, idx) => (
            <FadeInView key={product.id} delay={idx * 0.1}>
            <div className="group gradient-border p-5 hover:scale-[1.02] transition-all duration-300 relative flex flex-col h-full">
              {product.badge && (
                <div className={`absolute top-3 right-3 ${product.badgeColor} px-2.5 py-0.5 rounded-full text-[10px] font-bold text-brand-dark tracking-wider`}>
                  {product.badge}
                </div>
              )}

              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4`}>
                <i className={`fa-solid ${product.icon} text-white text-lg`} />
              </div>

              <h3 className="font-display text-base font-bold text-white mb-1">{product.name}</h3>
              <p className="text-[11px] text-white/30 mb-3">{product.subtitle}</p>

              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-2xl font-bold text-brand-gold">{product.price}</span>
                <span className="text-xs text-white/30">MXN</span>
              </div>

              <ul className="space-y-1.5 mb-5 flex-1">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-[11px] text-white/40">
                    <i className="fa-solid fa-check text-brand-cream text-[9px]" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openEditorModal(product.editorUrl)}
                className="w-full py-3 rounded-xl border border-white/10 text-sm font-bold text-white/60 group-hover:border-brand-gold/30 group-hover:text-brand-gold group-hover:bg-brand-gold/5 transition cursor-pointer"
              >
                <i className="fa-solid fa-wand-magic-sparkles mr-2 text-xs" />
                Diseñar mi Funda
              </button>
            </div>
            </FadeInView>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/catalogo"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg border border-white/10 text-white/60 hover:border-brand-gold/30 hover:text-brand-gold hover:bg-brand-gold/5 transition-all duration-300"
          >
            <i className="fa-solid fa-grid-2 text-base" />
            Ver Todo el Catálogo
            <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">8 productos</span>
          </a>
        </div>
      </div>
    </section>
  )
}
