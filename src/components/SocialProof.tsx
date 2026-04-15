'use client'

import FadeInView from './FadeInView'

const reviews = [
  { name: 'María G.', location: 'CDMX', text: 'La funda quedó increíble, la foto se ve perfecta y la calidad es de otro nivel. Ya pedí 3 más para regalo.', stars: 5, product: 'Funda Premium' },
  { name: 'Carlos R.', location: 'Monterrey', text: 'El efecto 3D de la lenticular está LOCO. La gente no para de preguntar dónde la compré.', stars: 5, product: 'Funda Lenticular 3D' },
  { name: 'Ana L.', location: 'Guadalajara', text: 'Pedí una playera con el dibujo de mi hija y llegó perfecta. La impresión no se ha cuarteado nada.', stars: 5, product: 'Playera Premium' },
  { name: 'Roberto M.', location: 'Puebla', text: 'Regalé fundas personalizadas en la oficina. El pedido llegó en 2 días. Todos encantados.', stars: 5, product: 'Funda Tough' },
  { name: 'Sofía T.', location: 'Querétaro', text: 'El editor es facilísimo de usar, subí mi foto y en segundos vi cómo quedaba. La compré al instante.', stars: 5, product: 'Funda Premium' },
  { name: 'Diego H.', location: 'Cancún', text: 'Llegó más rápido de lo que esperaba y la calidad superó mis expectativas. 100% recomendado.', stars: 5, product: 'Funda Premium' },
]

const guarantees = [
  { icon: 'fa-shield-check', title: 'Pago 100% Seguro', desc: 'Stripe & SSL cifrado' },
  { icon: 'fa-truck-fast', title: 'Envío Express', desc: '24-48h a todo México' },
  { icon: 'fa-medal', title: 'Garantía de Calidad', desc: 'Te reponemos si no es perfecto' },
  { icon: 'fa-headset', title: 'Soporte Real', desc: 'WhatsApp directo con nosotros' },
]

export default function SocialProof() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 luxury-grain" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {guarantees.map((g, i) => (
            <FadeInView key={i} delay={i * 0.08}>
              <div className="gradient-border p-5 text-center h-full">
                <i className={`fa-solid ${g.icon} text-brand-gold text-xl mb-3 block`} />
                <p className="text-sm font-bold text-white mb-0.5">{g.title}</p>
                <p className="text-xs text-white/30">{g.desc}</p>
              </div>
            </FadeInView>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-gold/20 mb-6">
            <i className="fa-solid fa-star text-brand-gold text-xs" />
            <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider">+2,400 Clientes Felices</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Lo que Dicen <span className="text-glow text-brand-gold">Nuestros Clientes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <FadeInView key={i} delay={i * 0.1}>
            <div className="gradient-border p-6">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.stars)].map((_, j) => (
                  <i key={j} className="fa-solid fa-star text-brand-gold text-xs" />
                ))}
              </div>

              <p className="text-sm text-white/60 leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-brand-gold">{review.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/80">{review.name}</p>
                    <p className="text-[10px] text-white/30">{review.location}</p>
                  </div>
                </div>
                <span className="text-[10px] text-white/20 bg-white/5 px-2 py-1 rounded-md">{review.product}</span>
              </div>
            </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
