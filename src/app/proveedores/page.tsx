import { Metadata } from 'next'
import FadeInView from '@/components/FadeInView'
import ProcessTimeline from '@/components/captacion/ProcessTimeline'
import FAQAccordion from '@/components/captacion/FAQAccordion'
import RegistrationForm from '@/components/captacion/RegistrationForm'

export const metadata: Metadata = {
  title: 'Para Proveedores | Case Factor',
  description: 'Unete a la red de proveedores de Case Factor. Materiales, impresion, empaques y logistica. Volumen garantizado y pagos puntuales.',
  openGraph: {
    title: 'Para Proveedores | Case Factor',
    description: 'Unete a la cadena de produccion mas innovadora de Mexico.',
    type: 'website',
  },
}

const SUPPLIER_TYPES = [
  { icon: 'fa-layer-group', title: 'Materiales', description: 'TPU, policarbonato, lenticular, MagSafe rings. Materia prima para fundas.', color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20' },
  { icon: 'fa-print', title: 'Impresion', description: 'Impresion UV, sublimacion, lenticular. Capacidad de produccion a escala.', color: 'text-orange-400', bg: 'bg-orange-400/10', border: 'border-orange-400/20' },
  { icon: 'fa-box-open', title: 'Empaques', description: 'Cajas, bolsas, etiquetas, inserts. Empaque premium para producto premium.', color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/20' },
  { icon: 'fa-truck', title: 'Logistica', description: 'Paqueteria, fulfillment, almacenamiento. Cobertura nacional.', color: 'text-red-400', bg: 'bg-red-400/10', border: 'border-red-400/20' },
]

const PROCESS_STEPS = [
  { number: 1, title: 'Aplica', description: 'Llena el formulario con la informacion de tu empresa y servicios.', icon: 'fa-file-lines' },
  { number: 2, title: 'Revision', description: 'Evaluamos calidad, capacidad y precios. Te contactamos en 3-5 dias.', icon: 'fa-magnifying-glass' },
  { number: 3, title: 'Prueba', description: 'Pedido de prueba para validar calidad y tiempos de entrega.', icon: 'fa-flask' },
  { number: 4, title: 'Onboarding', description: 'Si todo sale bien, te integramos a la cadena de produccion.', icon: 'fa-handshake' },
]

const BENEFITS = [
  { icon: 'fa-chart-line', title: 'Volumen garantizado', text: 'Demanda constante y creciente. No dependes de pedidos esporadicos.' },
  { icon: 'fa-calendar-check', title: 'Pagos puntuales', text: 'Pagos a 15 o 30 dias segun acuerdo. Sin retrasos.' },
  { icon: 'fa-arrow-up-right-dots', title: 'Crecimiento conjunto', text: 'Creces con nosotros. Mas ventas = mas pedidos para ti.' },
]

const REQUIREMENTS = [
  'Capacidad de produccion minima segun categoria',
  'Cumplimiento de tiempos de entrega acordados',
  'Control de calidad documentado',
  'Facturacion vigente (persona fisica o moral)',
  'Disponibilidad para pedidos de prueba',
]

const FAQ = [
  { question: 'Que volumenes manejan actualmente?', answer: 'Producimos cientos de fundas semanales con tendencia creciente. El volumen varia por temporada, con picos en Navidad, San Valentin y regreso a clases.' },
  { question: 'Como son los terminos de pago?', answer: 'Negociables segun el tipo de servicio. Generalmente 15-30 dias despues de entrega. Para nuevos proveedores puede ser contra entrega hasta establecer relacion.' },
  { question: 'Necesito estar en Guadalajara?', answer: 'No necesariamente. Trabajamos con proveedores en toda la Republica. Lo importante es que cumplan tiempos de entrega y calidad.' },
  { question: 'Que pasa si no cumplo con un pedido?', answer: 'Trabajamos con comunicacion abierta. Si hay un problema, avisanos con anticipacion. Penalizaciones solo aplican en incumplimientos repetidos sin aviso.' },
]

export default function ProveedoresPage() {
  return (
    <main className="min-h-screen bg-brand-dark pt-28 pb-20">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 text-center mb-24">
        <FadeInView>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-amber-400/20 mb-6">
            <i className="fa-solid fa-truck text-amber-400 text-xs" />
            <span className="text-xs font-bold text-amber-400/80 uppercase tracking-wider">Red de Proveedores</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Se parte de la cadena
            <br /><span className="text-amber-400">mas innovadora</span>
          </h1>
          <p className="text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">
            Case Factor busca proveedores de materiales, impresion, empaques y logistica. Volumen garantizado, pagos puntuales y crecimiento conjunto.
          </p>
        </FadeInView>
      </section>

      {/* Supplier Types */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <FadeInView>
          <h2 className="text-2xl font-display font-bold text-white text-center mb-4">Que proveedores buscamos</h2>
          <p className="text-white/40 text-center mb-10 max-w-lg mx-auto">Cuatro categorias clave para nuestra cadena de produccion</p>
          <div className="grid md:grid-cols-2 gap-4">
            {SUPPLIER_TYPES.map((type, i) => (
              <div key={i} className={`border ${type.border} rounded-2xl p-6 hover:bg-white/[0.02] transition`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${type.bg} flex items-center justify-center flex-shrink-0`}>
                    <i className={`fa-solid ${type.icon} ${type.color}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">{type.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">{type.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeInView>
      </section>

      {/* Process */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <FadeInView>
          <h2 className="text-2xl font-display font-bold text-white text-center mb-4">Proceso de evaluacion</h2>
          <p className="text-white/40 text-center mb-12 max-w-lg mx-auto">Transparente y directo</p>
          <ProcessTimeline steps={PROCESS_STEPS} accentColor="amber-400" />
        </FadeInView>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <FadeInView>
          <div className="grid md:grid-cols-3 gap-6">
            {BENEFITS.map((b, i) => (
              <div key={i} className="border border-amber-400/10 rounded-2xl p-8 hover:border-amber-400/20 transition">
                <i className={`fa-solid ${b.icon} text-amber-400 text-xl mb-4`} />
                <h3 className="text-base font-bold text-white mb-2">{b.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </FadeInView>
      </section>

      {/* Requirements */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <FadeInView>
          <div className="bg-white/[0.02] border border-white/8 rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
            <h2 className="text-xl font-display font-bold text-white text-center mb-6">Requisitos basicos</h2>
            <ul className="space-y-3">
              {REQUIREMENTS.map((req, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/50">
                  <i className="fa-solid fa-circle-check text-amber-400 text-xs mt-1 flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </FadeInView>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <FadeInView>
          <h2 className="text-2xl font-display font-bold text-white text-center mb-10">Preguntas frecuentes</h2>
          <FAQAccordion items={FAQ} accentColor="amber-400" />
        </FadeInView>
      </section>

      {/* Registration */}
      <section id="registro" className="max-w-5xl mx-auto px-6 lg:px-8">
        <FadeInView>
          <div className="bg-white/[0.02] border border-amber-400/15 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-display font-bold text-white text-center mb-2">Contactanos</h2>
            <p className="text-white/40 text-center mb-8">Cuentanos sobre tu empresa y como podemos trabajar juntos</p>
            <RegistrationForm role="proveedor" accentColor="amber-400" />
          </div>
        </FadeInView>
      </section>
    </main>
  )
}
