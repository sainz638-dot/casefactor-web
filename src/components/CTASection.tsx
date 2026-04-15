'use client'

export default function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-gold/[0.02] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-gold/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="gradient-border p-12 md:p-16">
          <div className="w-20 h-20 rounded-3xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mx-auto mb-8">
            <i className="fa-solid fa-wand-magic-sparkles text-brand-gold text-3xl" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Tu Producto Único<br/>Está a un Clic
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto mb-10">
            Diseñar es gratis. Sube tu foto, ve cómo queda, y si te encanta — nosotros lo hacemos realidad y te lo enviamos.
          </p>

          <a href="#personalizar"
             className="btn-glow relative inline-flex items-center gap-3 bg-brand-gold text-brand-dark px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-[0_0_50px_rgba(201,169,110,0.2)] transition-all">
            <i className="fa-solid fa-wand-magic-sparkles" />
            Diseña el Tuyo
          </a>
          <p className="text-xs text-white/30 mt-4">Sin registro · Sin compromiso · Envío a todo México</p>
        </div>
      </div>
    </section>
  )
}
