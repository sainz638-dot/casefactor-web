'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import EditorModal, { openEditorModal } from '@/components/EditorModal'
import Footer from '@/components/Footer'
import { ALL_PRODUCTS, type Product } from '@/lib/products'

function ProductGallery({ images }: { images: string[] }) {
  const [active, setActive] = useState(0)
  const [hasError, setHasError] = useState<Record<number, boolean>>({})

  return (
    <div>
      {/* Main image */}
      <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-white/[0.03] border border-white/5 mb-2">
        {hasError[active] ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <i className="fa-solid fa-image text-white/10 text-4xl mb-2" />
            <p className="text-[10px] text-white/20">Foto próximamente</p>
          </div>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={images[active]}
            alt="Producto"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            onError={() => setHasError(prev => ({ ...prev, [active]: true }))}
          />
        )}
      </div>
      {/* Thumbnails */}
      <div className="flex gap-1.5">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex-1 aspect-square rounded-lg overflow-hidden border-2 transition-all ${
              active === i ? 'border-brand-gold' : 'border-white/5 hover:border-white/15'
            }`}
          >
            {hasError[i] ? (
              <div className="w-full h-full bg-white/[0.03] flex items-center justify-center">
                <i className="fa-solid fa-image text-white/10 text-xs" />
              </div>
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={img}
                alt={`Vista ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                onError={() => setHasError(prev => ({ ...prev, [i]: true }))}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="gradient-border p-0 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Left: Gallery */}
        <div className="p-5">
          <ProductGallery images={product.images} />
        </div>

        {/* Right: Info */}
        <div className="p-5 md:pl-2 flex flex-col">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                <i className={`fa-solid ${product.icon} text-white text-base`} />
              </div>
              <div>
                <h2 className="font-display text-lg font-bold text-white">{product.name}</h2>
                <p className="text-xs text-white/30">{product.subtitle}</p>
              </div>
            </div>
            {product.badge && (
              <span className={`${product.badgeColor} px-2.5 py-0.5 rounded-full text-[10px] font-bold text-brand-dark tracking-wider`}>
                {product.badge}
              </span>
            )}
          </div>

          <div className="flex items-baseline gap-2 mb-4 mt-2">
            <span className="text-3xl font-bold text-brand-gold">{product.price}</span>
            <span className="text-sm text-white/30">MXN</span>
          </div>

          <p className="text-sm text-white/40 leading-relaxed mb-5">{product.description}</p>

          <ul className="space-y-2 mb-6 flex-1">
            {product.features.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-white/50">
                <i className="fa-solid fa-check text-brand-cream text-xs" />
                {f}
              </li>
            ))}
          </ul>

          <button
            onClick={() => openEditorModal(product.editorUrl)}
            className="w-full py-4 rounded-xl bg-brand-gold text-brand-dark font-bold text-base hover:shadow-[0_0_30px_rgba(201,169,110,0.2)] transition-all cursor-pointer"
          >
            <i className="fa-solid fa-wand-magic-sparkles mr-2" />
            Diseñar mi Funda
          </button>

          <div className="flex items-center justify-center gap-4 mt-4">
            <span className="text-[11px] text-white/25"><i className="fa-solid fa-shield-check text-brand-cream/50 mr-1" />Pago seguro</span>
            <span className="text-[11px] text-white/25"><i className="fa-solid fa-truck-fast text-brand-gold/50 mr-1" />Envío 24-48h</span>
            <span className="text-[11px] text-white/25"><i className="fa-solid fa-rotate-left text-brand-amber/50 mr-1" />Garantía</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CatalogoPage() {
  return (
    <main>
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 luxury-grain" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <a href="/" className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-brand-gold transition mb-6">
              <i className="fa-solid fa-arrow-left text-xs" />
              Volver al inicio
            </a>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Nuestro <span className="text-glow text-brand-gold">Catálogo</span>
            </h1>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              8 tipos de producto, cada uno fabricado bajo demanda con tu diseño. Elige el tuyo y personalízalo al instante.
            </p>
          </div>

          <div className="space-y-6">
            {ALL_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-white/30 text-sm mb-4">¿No encuentras lo que buscas?</p>
            <a
              href="https://wa.me/5218000000000"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-green-400/30 text-green-400 text-sm font-bold hover:bg-green-400/5 transition"
            >
              <i className="fa-brands fa-whatsapp text-lg" />
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <EditorModal />
    </main>
  )
}
