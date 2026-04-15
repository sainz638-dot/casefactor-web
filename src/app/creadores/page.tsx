import { Metadata } from 'next'
import FadeInView from '@/components/FadeInView'
import FAQAccordion from '@/components/captacion/FAQAccordion'
import TestimonialGrid from '@/components/captacion/TestimonialGrid'
import RegistrationForm from '@/components/captacion/RegistrationForm'

export const metadata: Metadata = {
  title: 'Para Creadores de Contenido | Case Factor',
  description: 'Monetiza tu audiencia con fundas personalizadas. Link de afiliado, codigo de descuento exclusivo y comision por cada venta referida.',
  openGraph: {
    title: 'Para Creadores | Case Factor',
    description: 'Monetiza tu audiencia con fundas personalizadas premium.',
    type: 'website',
  },
}

const HOW_IT_WORKS = [
  { icon: 'fa-user-plus', title: 'Registrate', description: 'Llena el formulario y recibiras tu kit de creador en 24 horas.' },
  { icon: 'fa-link', title: 'Recibe tu link y codigo', description: 'Link de afiliado personalizado + codigo de descuento exclusivo para tu audiencia.' },
  { icon: 'fa-share-nodes', title: 'Comparte', description: 'Crea contenido con nuestros productos. Stories, reels, TikToks, unboxings.' },
  { icon: 'fa-sack-dollar', title: 'Gana', description: 'Comision por cada venta que venga de tu link o codigo. Sin limite.' },
]

const PERKS = [
  { icon: 'fa-gift', title: 'Producto gratis', text: 'Recibe fundas gratis para crear contenido y review.' },
  { icon: 'fa-percent', title: 'Codigo exclusivo', text: 'Tu audiencia recibe descuento. Tu ganas comision.' },
  { icon: 'fa-chart-line', title: 'Dashboard', text: 'Ve tus ventas, clicks y comisiones en tiempo real.' },
  { icon: 'fa-handshake', title: 'Soporte dedicado', text: 'Un asesor te ayuda con contenido y estrategia.' },
]

const CONTENT_KIT = [
  { icon: 'fa-camera', label: 'Fotos de producto', desc: 'Pack de imagenes HD para posts y stories' },
  { icon: 'fa-video', label: 'Videos de unboxing', desc: 'Templates de TikTok y Reels listos para usar' },
  { icon: 'fa-image', label: 'Templates para stories', desc: 'Disenos editables con tu link y codigo' },
]

const FAQ = [
  { question: 'Cuanta comision gano por venta?', answer: 'La comision base es 10% sobre el precio de venta. Creadores con alto volumen pueden negociar tasas hasta 20%.' },
  { question: 'Necesito muchos seguidores?', answer: 'No hay minimo de seguidores. Buscamos creadores autenticos que conecten con su audiencia, sin importar el tamano.' },
  { question: 'Como me pagan?', answer: 'Pagos mensuales por transferencia bancaria. Minimo de retiro: $500 MXN. Recibes reporte de ventas detallado.' },
  { question: 'Que tipo de contenido debo crear?', answer: 'Lo que mejor conecte con tu audiencia. Unboxings, reviews, styling, TikToks creativos, stories. Te damos ideas y templates.' },
  { question: 'Puedo combinar con mi codigo de descuento?', answer: 'Si. Tu audiencia usa tu codigo para obtener descuento y tu ganas comision sobre esa venta.' },
]

export default function CreadoresPage() {
  return (
    <main className="min-h-screen bg-brand-dark pt-28 pb-20">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 text-center mb-24">
        <FadeInView>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-400/20 mb-6">
            <i className="fa-solid fa-video text-green-400 text-xs" />
            <span className="text-xs font-bold text-green-400/80 uppercase tracking-wider">Programa de Creadores</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Monetiza tu
            <br /><span className="text-green-400">audiencia</span>
          </h1>
          <p className="text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">
            Crea contenido con fundas unicas. Tu audiencia compra con tu codigo, tu ganas comision por cada venta. Producto gratis incluido.
          </p>
        </FadeInView>
      </section>

      {/* How you earn — Section 2 */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <FadeInView>
          <h2 className="text-2xl font-display font-bold text-white text-center mb-4">Como ganas</h2>
          <p className="text-white/40 text-center mb-10 max-w-lg mx-auto">Tu link + tu codigo = comision por cada venta</p>
          <div className="grid md:grid-cols-4 gap-4">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={i} className="text-center border border-white/8 rounded-2xl p-6 hover:border-green-400/20 transition">
                <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-green-400/10 border border-green-400/20 flex items-center justify-center">
                  <i className={`fa-solid ${step.icon} text-green-400 text-sm`} />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{step.title}</h4>
                <p className="text-xs text-white/40 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </FadeInView>
      </section>

      {/* Dashboard Preview */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <FadeInView>
          <div className="bg-white/[0.02] border border-green-400/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-display font-bold text-white text-center mb-2">Tu dashboard de creador</h2>
            <p className="text-white/40 text-center mb-8">Monitorea tus ventas, clicks y ganancias en tiempo real</p>
            {/* Mockup dashboard */}
            <div className="max-w-2xl mx-auto grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-white/30 mb-1">Ventas este mes</p>
                <p className="text-2xl font-bold font-mono text-green-400">47</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-white/30 mb-1">Comision ganada</p>
                <p className="text-2xl font-bold font-mono text-brand-gold">$2,350</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-white/30 mb-1">Clicks en tu link</p>
                <p className="text-2xl font-bold font-mono text-white">1,284</p>
              </div>
            </div>
            <p className="text-center text-xs text-white/20">Vista previa. Los datos son de ejemplo.</p>
          </div>
        </FadeInView>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <FadeInView>
          <h2 className="text-2xl font-display font-bold text-white text-center mb-10">Creadores que ya ganan</h2>
          <TestimonialGrid
            testimonials={[]}
            emptyMessage="Se de los primeros creadores en el programa"
            emptyCTA="Unete ahora"
            emptyCTAHref="#registro"
            accentColor="green-400"
          />
        </FadeInView>
      </section>

      {/* Content Kit */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <FadeInView>
          <h2 className="text-2xl font-display font-bold text-white text-center mb-4">Kit de contenido</h2>
          <p className="text-white/40 text-center mb-10 max-w-lg mx-auto">Te damos todo lo que necesitas para crear contenido profesional</p>
          <div className="grid md:grid-cols-3 gap-4">
            {CONTENT_KIT.map((item, i) => (
              <div key={i} className="border border-white/8 rounded-xl p-6 hover:border-green-400/15 transition">
                <i className={`fa-solid ${item.icon} text-green-400 text-xl mb-3`} />
                <h4 className="text-sm font-bold text-white mb-1">{item.label}</h4>
                <p className="text-xs text-white/40">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeInView>
      </section>

      {/* Perks */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <FadeInView>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PERKS.map((p, i) => (
              <div key={i} className="text-center py-6 px-4 border border-green-400/10 rounded-xl hover:border-green-400/20 transition">
                <i className={`fa-solid ${p.icon} text-green-400 text-xl mb-3`} />
                <h4 className="text-sm font-bold text-white mb-1">{p.title}</h4>
                <p className="text-xs text-white/30">{p.text}</p>
              </div>
            ))}
          </div>
        </FadeInView>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <FadeInView>
          <h2 className="text-2xl font-display font-bold text-white text-center mb-10">Preguntas frecuentes</h2>
          <FAQAccordion items={FAQ} accentColor="green-400" />
        </FadeInView>
      </section>

      {/* Registration */}
      <section id="registro" className="max-w-5xl mx-auto px-6 lg:px-8">
        <FadeInView>
          <div className="bg-white/[0.02] border border-green-400/15 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-display font-bold text-white text-center mb-2">Unete como creador</h2>
            <p className="text-white/40 text-center mb-8">Registrate y recibe tu kit de creador en 24 horas</p>
            <RegistrationForm role="creador" accentColor="green-400" />
          </div>
        </FadeInView>
      </section>
    </main>
  )
}
