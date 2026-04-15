'use client'

const features = [
  {
    icon: 'fa-wand-magic-sparkles',
    title: 'IA Generativa',
    description: 'Nuestra IA rellena automáticamente los espacios vacíos de tu diseño para un ajuste perfecto al producto.',
    color: 'brand-cream',
  },
  {
    icon: 'fa-cube',
    title: 'Lenticular 3D',
    description: 'Crea fundas con efecto 3D real. Dos imágenes que cambian según el ángulo de visión. Único en México.',
    color: 'brand-rose',
  },
  {
    icon: 'fa-truck-fast',
    title: 'Envío en 24-48h',
    description: 'Fabricamos y enviamos a todo México. Cada producto es creado bajo demanda con calidad premium.',
    color: 'brand-gold',
  },
  {
    icon: 'fa-tags',
    title: 'Etiqueta Tu Marca',
    description: 'Con membresía Pro puedes crear etiquetas personalizadas. Tu marca, nuestro producto.',
    color: 'brand-amber',
  },
  {
    icon: 'fa-link',
    title: 'Sistema de Afiliados',
    description: 'Genera links únicos, comparte y gana comisiones de hasta 40% por cada venta referida.',
    color: 'brand-gold',
  },
  {
    icon: 'fa-crown',
    title: 'Membresías',
    description: 'Desde gratis hasta Empire. Accede a más herramientas, mejores márgenes y funciones exclusivas.',
    color: 'brand-amber',
  },
]

export default function FeaturesSection() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
            <i className="fa-solid fa-bolt text-brand-amber text-xs" />
            <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">Tecnología</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            No es Solo una Tienda.<br />
            <span className="text-glow text-brand-gold">Es un Ecosistema.</span>
          </h2>
          <p className="text-lg text-white/40">
            Herramientas profesionales que ninguna otra plataforma de print-on-demand ofrece.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="gradient-border p-8 hover:scale-[1.01] transition-transform duration-300">
              <div className={`w-12 h-12 rounded-2xl bg-${feature.color}/10 border border-${feature.color}/20 flex items-center justify-center mb-5`}>
                <i className={`fa-solid ${feature.icon} text-${feature.color} text-lg`} />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
