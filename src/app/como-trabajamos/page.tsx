import { Metadata } from 'next'
import FadeInView from '@/components/FadeInView'
import ProcessTimeline from '@/components/captacion/ProcessTimeline'

export const metadata: Metadata = {
  title: 'Como Trabajamos | Case Factor',
  description: 'Conoce el proceso de produccion de Case Factor: disena con IA, nosotros fabricamos y enviamos. Tecnologia lenticular 3D unica en Mexico.',
  openGraph: {
    title: 'Como Trabajamos | Case Factor',
    description: 'Disena con IA, nosotros fabricamos y enviamos. Tecnologia lenticular unica en Mexico.',
    type: 'website',
  },
}

const PROCESS_STEPS = [
  { number: 1, title: 'Disena', description: 'Usa nuestro editor con IA. Sube tu imagen o describe lo que quieres.', icon: 'fa-wand-magic-sparkles' },
  { number: 2, title: 'Confirmamos', description: 'Revisamos tu diseno y te enviamos una vista previa para aprobar.', icon: 'fa-check-double' },
  { number: 3, title: 'Producimos', description: 'Fabricamos tu funda con impresion UV de alta calidad en 1-3 dias.', icon: 'fa-industry' },
  { number: 4, title: 'Enviamos', description: 'Entrega a toda la Republica en 3-5 dias habiles con tracking.', icon: 'fa-truck-fast' },
]

const DIFFERENTIATORS = [
  {
    icon: 'fa-cube',
    title: 'Tecnologia Lenticular 3D',
    description: 'Somos la unica empresa en Mexico con esta tecnologia. La imagen cambia segun el angulo de vision.',
    color: 'text-purple-400',
    border: 'border-purple-400/20',
    bg: 'bg-purple-400/10',
  },
  {
    icon: 'fa-wand-magic-sparkles',
    title: 'Personalizacion con IA',
    description: 'Nuestro editor usa inteligencia artificial para crear disenos unicos. Tu solo subes tu foto.',
    color: 'text-brand-gold',
    border: 'border-brand-gold/20',
    bg: 'bg-brand-gold/10',
  },
  {
    icon: 'fa-shield-halved',
    title: 'Calidad UV Premium',
    description: 'Impresion UV que no se borra, no se despinta y resiste el uso diario. Colores vibrantes siempre.',
    color: 'text-brand-cream',
    border: 'border-brand-cream/20',
    bg: 'bg-brand-cream/10',
  },
]

const GUARANTEES = [
  { icon: 'fa-rotate-left', text: 'Garantia de satisfaccion' },
  { icon: 'fa-truck-fast', text: 'Envio a toda la Republica' },
  { icon: 'fa-headset', text: 'Atencion 24/7 por WhatsApp' },
  { icon: 'fa-lock', text: 'Pago seguro con Shopify' },
]

export default function ComoTrabajamosPage() {
  return (
    <main className="min-h-screen bg-brand-dark pt-28 pb-20">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 text-center mb-24">
        <FadeInView>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-gold/20 mb-6">
            <i className="fa-solid fa-cube text-brand-gold text-xs" />
            <span className="text-xs font-bold text-brand-gold/80 uppercase tracking-wider">Unico en Mexico</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Tecnologia que{' '}
            <span className="text-glow">transforma</span>
            <br />tus ideas en fundas
          </h1>
          <p className="text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">
            Desde el diseno hasta tu puerta. Conoce como hacemos posible que cualquier imagen, foto o idea se convierta en una funda premium personalizada.
          </p>
        </FadeInView>
      </section>

      {/* Process Timeline */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <FadeInView>
          <h2 className="text-2xl font-display font-bold text-white text-center mb-4">El proceso</h2>
          <p className="text-white/40 text-center mb-12 max-w-lg mx-auto">De tu idea a tu funda en 4 pasos simples</p>
          <ProcessTimeline steps={PROCESS_STEPS} accentColor="brand-gold" />
        </FadeInView>
      </section>

      {/* Differentiators */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <FadeInView>
          <h2 className="text-2xl font-display font-bold text-white text-center mb-4">Por que Case Factor</h2>
          <p className="text-white/40 text-center mb-12 max-w-lg mx-auto">Lo que nos hace diferentes de cualquier otra marca</p>
        </FadeInView>
        <div className="grid md:grid-cols-3 gap-6">
          {DIFFERENTIATORS.map((d, i) => (
            <FadeInView key={i} delay={i * 0.1}>
              <div className={`border ${d.border} rounded-2xl p-8 hover:bg-white/[0.02] transition h-full`}>
                <div className={`w-12 h-12 rounded-xl ${d.bg} flex items-center justify-center mb-5`}>
                  <i className={`fa-solid ${d.icon} ${d.color}`} />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{d.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{d.description}</p>
              </div>
            </FadeInView>
          ))}
        </div>
      </section>

      {/* Delivery Timeline */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <FadeInView>
          <div className="bg-white/[0.02] border border-white/8 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-display font-bold text-white text-center mb-8">Tiempos de entrega</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
              <div className="text-center px-8">
                <p className="text-3xl font-bold font-mono text-brand-gold">1-3</p>
                <p className="text-sm text-white/40 mt-1">dias de elaboracion</p>
              </div>
              <div className="hidden md:block w-24 h-px bg-gradient-to-r from-brand-gold/30 to-brand-cream/30" />
              <div className="md:hidden h-8 w-px bg-white/10" />
              <div className="text-center px-8">
                <p className="text-3xl font-bold font-mono text-brand-cream">3-5</p>
                <p className="text-sm text-white/40 mt-1">dias de envio</p>
              </div>
              <div className="hidden md:block w-24 h-px bg-gradient-to-r from-brand-cream/30 to-green-400/30" />
              <div className="md:hidden h-8 w-px bg-white/10" />
              <div className="text-center px-8">
                <p className="text-3xl font-bold font-mono text-green-400">4-8</p>
                <p className="text-sm text-white/40 mt-1">dias total</p>
              </div>
            </div>
          </div>
        </FadeInView>
      </section>

      {/* Guarantees */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <FadeInView>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GUARANTEES.map((g, i) => (
              <div key={i} className="text-center py-6 px-4 border border-white/5 rounded-xl">
                <i className={`fa-solid ${g.icon} text-brand-gold text-xl mb-3`} />
                <p className="text-xs text-white/40 font-medium">{g.text}</p>
              </div>
            ))}
          </div>
        </FadeInView>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <FadeInView>
          <h2 className="text-2xl font-display font-bold text-white mb-4">Listo para crear la tuya?</h2>
          <p className="text-white/40 mb-8">Disena tu funda personalizada ahora mismo. Es facil, rapido y el resultado es increible.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/#personalizar" className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark px-8 py-3.5 rounded-xl font-bold text-sm hover:shadow-[0_0_30px_rgba(0,219,255,0.15)] transition-all">
              <i className="fa-solid fa-palette" />
              Abrir el Editor
            </a>
            <a href="https://wa.me/528000000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/15 text-white/60 px-8 py-3.5 rounded-xl text-sm font-medium hover:border-green-400/30 hover:text-green-400 transition-all">
              <i className="fa-brands fa-whatsapp" />
              Escribenos por WhatsApp
            </a>
          </div>
        </FadeInView>
      </section>
    </main>
  )
}
