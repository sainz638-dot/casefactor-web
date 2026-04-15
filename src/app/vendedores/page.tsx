import { Metadata } from 'next'
import FadeInView from '@/components/FadeInView'
import GainsCalculator from '@/components/captacion/GainsCalculator'
import PricingTable from '@/components/captacion/PricingTable'
import FAQAccordion from '@/components/captacion/FAQAccordion'
import RegistrationForm from '@/components/captacion/RegistrationForm'

export const metadata: Metadata = {
  title: 'Para Vendedores | Case Factor',
  description: 'Revende fundas personalizadas premium con tu propio markup. Precios de mayoreo, sin inventario, dashboard de gestion. Tiers: Acceso, Pro, Elite.',
  openGraph: {
    title: 'Para Vendedores | Case Factor',
    description: 'Tu negocio de fundas premium sin inventario. Precios de mayoreo.',
    type: 'website',
  },
}

const WHOLESALE_TIERS = [
  { volume: '1-9 piezas', price: 'Precio publico', savings: '—' },
  { volume: '10-24 piezas', price: 'Desde $200/pieza', savings: 'Ahorra 40%' },
  { volume: '25-49 piezas', price: 'Desde $180/pieza', savings: 'Ahorra 48%', highlighted: true },
  { volume: '50-99 piezas', price: 'Desde $160/pieza', savings: 'Ahorra 54%' },
  { volume: '100+ piezas', price: 'Precio especial', savings: 'Contactanos' },
]

const TIERS = [
  {
    name: 'Acceso',
    price: 'Gratis',
    color: 'white',
    border: 'border-white/10',
    features: ['Precios de mayoreo base', 'Catalogo completo', 'Soporte por WhatsApp', 'Materiales de venta basicos'],
  },
  {
    name: 'Pro',
    price: '$499/mes',
    color: 'brand-gold',
    border: 'border-brand-gold/30',
    tag: 'Popular',
    features: ['Mejores precios de mayoreo', 'Prioridad en produccion', 'Dashboard de ventas', 'Kit de marketing premium', 'Asesor dedicado'],
  },
  {
    name: 'Elite',
    price: '$999/mes',
    color: 'brand-cream',
    border: 'border-brand-cream/30',
    features: ['Los mejores precios', 'Produccion express', 'Marca propia en productos', 'API de integracion', 'Account manager VIP', 'Productos exclusivos'],
  },
]

const FAQ = [
  { question: 'Necesito comprar inventario?', answer: 'No. Trabajamos bajo demanda. Tu vendes, nosotros fabricamos y enviamos directamente a tu cliente con tu marca si lo deseas.' },
  { question: 'Puedo poner mi marca en los productos?', answer: 'Si, en el tier Elite. Incluye empaque personalizado y etiquetas con tu marca. En Pro y Acceso se envian con marca Case Factor.' },
  { question: 'Como funcionan los envios?', answer: 'Nosotros manejamos toda la logistica. Envio directo al cliente final con tracking. Puedes usar nuestra guia o la tuya.' },
  { question: 'Que pasa si un cliente quiere devolucion?', answer: 'Manejamos las devoluciones. Si el producto tiene defecto, lo reemplazamos sin costo. Nuestra garantia de calidad te protege.' },
  { question: 'Puedo vender en marketplaces como Mercado Libre?', answer: 'Si. Muchos de nuestros vendedores venden en ML, Amazon, Shopify y redes sociales. Te damos fotos y descripciones listas.' },
]

export default function VendedoresPage() {
  return (
    <main className="min-h-screen bg-brand-dark pt-28 pb-20">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 text-center mb-24">
        <FadeInView>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-400/20 mb-6">
            <i className="fa-solid fa-store text-cyan-400 text-xs" />
            <span className="text-xs font-bold text-cyan-400/80 uppercase tracking-wider">Programa de Vendedores</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Tu negocio de fundas
            <br /><span className="text-brand-gold">sin inventario</span>
          </h1>
          <p className="text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">
            Compra a precios de mayoreo, vende al precio que quieras. Nosotros fabricamos y enviamos. Tu solo vendes.
          </p>
        </FadeInView>
      </section>

      {/* Gains Calculator — Section 2 (moved up per design review) */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <FadeInView>
          <GainsCalculator />
        </FadeInView>
      </section>

      {/* Wholesale Pricing */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <FadeInView>
          <h2 className="text-2xl font-display font-bold text-white text-center mb-4">Precios de mayoreo</h2>
          <p className="text-white/40 text-center mb-10 max-w-lg mx-auto">Entre mas compras, mejores precios. Todos los productos.</p>
          <PricingTable tiers={WHOLESALE_TIERS} accentColor="brand-gold" />
        </FadeInView>
      </section>

      {/* Tiers */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <FadeInView>
          <h2 className="text-2xl font-display font-bold text-white text-center mb-4">Niveles de vendedor</h2>
          <p className="text-white/40 text-center mb-10 max-w-lg mx-auto">Elige el nivel que mejor se adapte a tu volumen de ventas</p>
          <div className="grid md:grid-cols-3 gap-6">
            {TIERS.map((tier, i) => (
              <div key={i} className={`border ${tier.border} rounded-2xl p-8 relative ${
                tier.tag ? 'bg-brand-gold/[0.03]' : ''
              }`}>
                {tier.tag && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand-gold text-brand-dark text-xs font-bold">
                    {tier.tag}
                  </div>
                )}
                <h3 className={`text-lg font-bold text-${tier.color} mb-1`}>{tier.name}</h3>
                <p className="text-2xl font-bold font-mono text-white mb-6">{tier.price}</p>
                <ul className="space-y-3">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-white/50">
                      <i className={`fa-solid fa-check text-xs text-${tier.color} mt-1 flex-shrink-0`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeInView>
      </section>

      {/* Sales Kit */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <FadeInView>
          <div className="bg-white/[0.02] border border-white/8 rounded-2xl p-8 md:p-12">
            <h2 className="text-xl font-display font-bold text-white text-center mb-2">Kit de ventas incluido</h2>
            <p className="text-white/40 text-center mb-8">Todo lo que necesitas para empezar a vender desde el dia 1</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: 'fa-images', label: 'Fotos HD de productos' },
                { icon: 'fa-file-lines', label: 'Descripciones listas' },
                { icon: 'fa-tags', label: 'Precios sugeridos' },
                { icon: 'fa-bullhorn', label: 'Material publicitario' },
              ].map((item, i) => (
                <div key={i} className="text-center py-4">
                  <i className={`fa-solid ${item.icon} text-brand-gold text-lg mb-2`} />
                  <p className="text-xs text-white/40">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInView>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <FadeInView>
          <h2 className="text-2xl font-display font-bold text-white text-center mb-10">Preguntas frecuentes</h2>
          <FAQAccordion items={FAQ} accentColor="brand-gold" />
        </FadeInView>
      </section>

      {/* Registration */}
      <section id="registro" className="max-w-5xl mx-auto px-6 lg:px-8">
        <FadeInView>
          <div className="bg-white/[0.02] border border-brand-gold/15 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-display font-bold text-white text-center mb-2">Empieza a vender</h2>
            <p className="text-white/40 text-center mb-8">Registrate y un asesor te contacta para activar tu cuenta</p>
            <RegistrationForm role="vendedor" accentColor="brand-gold" />
          </div>
        </FadeInView>
      </section>
    </main>
  )
}
