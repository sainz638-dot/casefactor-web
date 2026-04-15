'use client'

const tiers = [
  {
    name: 'Gratis',
    price: '$0',
    period: '',
    description: 'Prueba el editor y crea tu primer diseño.',
    features: [
      'Acceso al editor básico',
      '1 diseño de funda por mes',
      'Marca de agua Case Factor',
    ],
    cta: 'Empezar Gratis',
    highlight: false,
    color: 'white/20',
  },
  {
    name: 'Starter',
    price: '$149',
    period: '/mes',
    description: 'Para creadores que están empezando a monetizar.',
    features: [
      'Editor completo sin marca de agua',
      '10 diseños por mes',
      'IA Relleno Generativo',
      '5 plantillas de etiqueta',
      'Link de afiliado',
      'Soporte por email',
    ],
    cta: 'Elegir Starter',
    highlight: false,
    color: 'brand-gold',
  },
  {
    name: 'Pro',
    price: '$349',
    period: '/mes',
    tag: 'MÁS POPULAR',
    description: 'Todo lo que necesitas para escalar tu negocio.',
    features: [
      'Diseños ilimitados',
      'IA Relleno Generativo Pro',
      'Editor Lenticular 3D',
      'Etiquetas ilimitadas + marca propia',
      'Prioridad en fabricación',
      'Dashboard de ventas avanzado',
      'Comisiones hasta 35%',
    ],
    cta: 'Elegir Pro',
    highlight: true,
    color: 'brand-gold',
  },
  {
    name: 'Empire',
    price: '$799',
    period: '/mes',
    description: 'Para marcas y emprendedores serios.',
    features: [
      'Todo de Pro incluido',
      'API de integración directa',
      'Fulfillment automático',
      'Soporte prioritario 24/7',
      'Página de marca personalizada',
      'Comisiones máximas (40%)',
      'Account manager dedicado',
    ],
    cta: 'Contactar Ventas',
    highlight: false,
    color: 'brand-cream',
  },
]

export default function MembershipSection() {
  return (
    <section id="membresias" className="relative py-32">
      <div className="absolute inset-0 luxury-grain" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-gold/20 mb-6">
            <i className="fa-solid fa-crown text-brand-gold text-xs" />
            <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider">Membresías</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Elige Tu Nivel de <span className="text-glow text-brand-gold">Poder</span>
          </h2>
          <p className="text-lg text-white/40">
            Desde hobbyista hasta imperio. Cada plan desbloquea herramientas más potentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name}
                 className={`relative gradient-border p-8 flex flex-col ${
                   tier.highlight ? 'ring-2 ring-brand-gold/50 scale-[1.02]' : ''
                 }`}>
              {tier.tag && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold px-4 py-1 rounded-full text-[10px] font-bold text-brand-dark tracking-wider whitespace-nowrap">
                  {tier.tag}
                </div>
              )}

              <h3 className="font-display text-xl font-bold text-white mb-1">{tier.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">{tier.price}</span>
                <span className="text-sm text-white/30">{tier.period} MXN</span>
              </div>
              <p className="text-sm text-white/40 mb-6">{tier.description}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                    <i className={`fa-solid fa-check text-${tier.color} text-xs mt-1 flex-shrink-0`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a href={`/memberships?plan=${tier.name.toLowerCase()}`}
                 className={`block text-center py-3.5 rounded-xl font-bold text-sm transition-all ${
                   tier.highlight
                     ? 'bg-brand-gold text-brand-dark hover:shadow-[0_0_30px_rgba(201,169,110,0.2)]'
                     : 'border border-white/10 text-white/60 hover:border-brand-gold/30 hover:text-brand-gold'
                 }`}>
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
