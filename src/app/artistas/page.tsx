import { Metadata } from 'next'
import FadeInView from '@/components/FadeInView'
import ProcessTimeline from '@/components/captacion/ProcessTimeline'
import FAQAccordion from '@/components/captacion/FAQAccordion'
import TestimonialGrid from '@/components/captacion/TestimonialGrid'
import RegistrationForm from '@/components/captacion/RegistrationForm'

export const metadata: Metadata = {
  title: 'Para Artistas | Case Factor',
  description: 'Sube tus disenos, gana comision por cada venta. Unete al programa de artistas de Case Factor y monetiza tu arte en fundas premium.',
  openGraph: {
    title: 'Para Artistas | Case Factor',
    description: 'Monetiza tu arte en fundas premium. Comision por cada venta.',
    type: 'website',
  },
}

const COMMISSION_TIERS = [
  { range: '1-10 ventas/mes', rate: '15%', note: 'Inicio' },
  { range: '11-50 ventas/mes', rate: '20%', note: 'Crecimiento' },
  { range: '51+ ventas/mes', rate: '25%', note: 'Top Artista' },
]

const STEPS = [
  { number: 1, title: 'Sube tus disenos', description: 'Envia tus archivos. Aceptamos PNG, JPG y vectores.', icon: 'fa-cloud-arrow-up' },
  { number: 2, title: 'Aprobacion', description: 'Revisamos calidad y compatibilidad. Respuesta en 24-48h.', icon: 'fa-check-circle' },
  { number: 3, title: 'Gana por cada venta', description: 'Tu diseno se publica. Cada vez que alguien lo compra, ganas comision.', icon: 'fa-coins' },
]

const BENEFITS = [
  { icon: 'fa-paintbrush', title: 'Libertad creativa', text: 'Tu decides que disenas. Sin restricciones de estilo o tema.' },
  { icon: 'fa-money-bill-trend-up', title: 'Ingreso pasivo', text: 'Ganas cada vez que alguien compra tu diseno. Sin limite.' },
  { icon: 'fa-users', title: 'Exposicion', text: 'Tu arte llega a miles de clientes en toda la Republica.' },
  { icon: 'fa-people-group', title: 'Comunidad', text: 'Unete a una comunidad de artistas y creadores mexicanos.' },
]

const FAQ = [
  { question: 'Que tipo de disenos aceptan?', answer: 'Aceptamos ilustraciones, fotografias, disenos graficos, patrones y arte digital. El formato ideal es PNG a 300 DPI minimo. No aceptamos contenido ofensivo o con derechos de autor de terceros.' },
  { question: 'Cuanto tarda la aprobacion?', answer: 'Revisamos cada diseno en 24-48 horas habiles. Si necesitamos ajustes te contactamos directamente.' },
  { question: 'Como y cuando me pagan?', answer: 'Pagos mensuales por transferencia bancaria o PayPal. Recibes un reporte detallado de ventas cada mes.' },
  { question: 'Puedo subir disenos ilimitados?', answer: 'Si, no hay limite. Entre mas disenos tengas en el catalogo, mas oportunidades de venta.' },
  { question: 'Conservo los derechos de mi arte?', answer: 'Si. Tu conservas todos los derechos de autor. Solo nos autorizas a reproducir el diseno en nuestros productos.' },
]

const GALLERY_ITEMS = [
  { name: 'Case Factor', role: 'Diseno de ejemplo', quote: 'Nuestros disenos de muestra para que veas la calidad de impresion.' },
]

export default function ArtistasPage() {
  return (
    <main className="min-h-screen bg-brand-dark pt-28 pb-20">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 text-center mb-24">
        <FadeInView>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-400/20 mb-6">
            <i className="fa-solid fa-palette text-purple-400 text-xs" />
            <span className="text-xs font-bold text-purple-400/80 uppercase tracking-wider">Programa de Artistas</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Tu arte en las manos
            <br /><span className="text-purple-400">de miles</span>
          </h1>
          <p className="text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">
            Sube tus disenos al catalogo de Case Factor. Cada vez que alguien compra una funda con tu arte, tu ganas. Sin inversion, sin riesgo.
          </p>
        </FadeInView>
      </section>

      {/* Commission Model — Section 2 (moved up per design review) */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <FadeInView>
          <h2 className="text-2xl font-display font-bold text-white text-center mb-4">Cuanto ganas</h2>
          <p className="text-white/40 text-center mb-10 max-w-lg mx-auto">Comision por cada funda vendida con tu diseno. Entre mas vendes, mas ganas.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {COMMISSION_TIERS.map((tier, i) => (
              <div key={i} className={`text-center border rounded-2xl p-8 transition ${
                i === 2 ? 'border-purple-400/30 bg-purple-400/5' : 'border-white/8 hover:border-white/15'
              }`}>
                <p className="text-xs text-white/30 uppercase tracking-wider mb-2">{tier.note}</p>
                <p className={`text-4xl font-bold font-mono mb-2 ${i === 2 ? 'text-purple-400' : 'text-white'}`}>{tier.rate}</p>
                <p className="text-sm text-white/40">{tier.range}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-white/20 mt-4">Comision sobre el precio de venta del producto. Pagos mensuales.</p>
        </FadeInView>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <FadeInView>
          <h2 className="text-2xl font-display font-bold text-white text-center mb-4">Como funciona</h2>
          <p className="text-white/40 text-center mb-12 max-w-lg mx-auto">3 pasos. Sin complicaciones.</p>
          <ProcessTimeline steps={STEPS} accentColor="purple-400" />
        </FadeInView>
      </section>

      {/* Gallery */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <FadeInView>
          <h2 className="text-2xl font-display font-bold text-white text-center mb-4">Galeria de artistas</h2>
          <p className="text-white/40 text-center mb-10 max-w-lg mx-auto">Los disenos que ya viven en nuestras fundas</p>
          <TestimonialGrid
            testimonials={[]}
            emptyMessage="Se de los primeros artistas en el catalogo"
            emptyCTA="Registrate como artista"
            emptyCTAHref="#registro"
            accentColor="purple-400"
          />
        </FadeInView>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <FadeInView>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BENEFITS.map((b, i) => (
              <div key={i} className="text-center py-6 px-4 border border-purple-400/10 rounded-xl hover:border-purple-400/20 transition">
                <i className={`fa-solid ${b.icon} text-purple-400 text-xl mb-3`} />
                <h4 className="text-sm font-bold text-white mb-1">{b.title}</h4>
                <p className="text-xs text-white/30">{b.text}</p>
              </div>
            ))}
          </div>
        </FadeInView>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <FadeInView>
          <h2 className="text-2xl font-display font-bold text-white text-center mb-10">Preguntas frecuentes</h2>
          <FAQAccordion items={FAQ} accentColor="purple-400" />
        </FadeInView>
      </section>

      {/* Registration */}
      <section id="registro" className="max-w-5xl mx-auto px-6 lg:px-8">
        <FadeInView>
          <div className="bg-white/[0.02] border border-purple-400/15 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-display font-bold text-white text-center mb-2">Unete como artista</h2>
            <p className="text-white/40 text-center mb-8">Registrate y empieza a ganar con tu arte</p>
            <RegistrationForm role="artista" accentColor="purple-400" />
          </div>
        </FadeInView>
      </section>
    </main>
  )
}
