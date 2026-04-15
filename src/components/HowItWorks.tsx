'use client'

const steps = [
  {
    number: '01',
    title: 'Elige tu Producto',
    description: 'Funda, playera o lenticular 3D. Selecciona tu modelo exacto de celular entre +200 opciones.',
    icon: 'fa-hand-pointer',
    color: '#C9A96E',
    bgColor: 'rgba(201, 169, 110, 0.08)',
    borderColor: 'rgba(201, 169, 110, 0.15)',
  },
  {
    number: '02',
    title: 'Sube tu Foto',
    description: 'Sube cualquier imagen. Nuestra IA la ajusta perfectamente al producto, rellenando espacios vacíos automáticamente.',
    icon: 'fa-cloud-arrow-up',
    color: '#D4A853',
    bgColor: 'rgba(212, 168, 83, 0.08)',
    borderColor: 'rgba(212, 168, 83, 0.15)',
  },
  {
    number: '03',
    title: 'Previsualiza en Vivo',
    description: 'Ve exactamente cómo quedará tu producto antes de comprarlo. Ajusta posición y tamaño en tiempo real.',
    icon: 'fa-eye',
    color: '#F5E6C8',
    bgColor: 'rgba(245, 230, 200, 0.08)',
    borderColor: 'rgba(245, 230, 200, 0.15)',
  },
  {
    number: '04',
    title: 'Recíbelo en tu Puerta',
    description: 'Fabricamos tu producto bajo demanda y lo enviamos a cualquier parte de México en 24-48 horas.',
    icon: 'fa-box-open',
    color: '#B76E79',
    bgColor: 'rgba(183, 110, 121, 0.08)',
    borderColor: 'rgba(183, 110, 121, 0.15)',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-gold/15 mb-6">
            <i className="fa-solid fa-bolt text-brand-gold text-xs" />
            <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">Así de Fácil</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            De tu Celular a <span className="text-glow text-brand-gold">tu Puerta</span>
          </h2>
          <p className="text-lg text-white/40">
            Sin complicaciones. Sin mínimos. Sin esperas eternas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center group">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-brand-gold/15 to-transparent" />
              )}

              <div className="relative mx-auto mb-6">
                <div
                  className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
                  style={{ background: step.bgColor, border: `1px solid ${step.borderColor}` }}
                >
                  <i className={`fa-solid ${step.icon} text-2xl`} style={{ color: step.color }} />
                </div>
                <span
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center"
                  style={{ background: step.color, color: '#0A0A0A' }}
                >
                  {step.number}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#personalizar"
             className="btn-glow relative inline-flex items-center gap-3 bg-brand-gold text-brand-dark px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-[0_0_40px_rgba(201,169,110,0.2)] transition-all duration-300">
            <i className="fa-solid fa-wand-magic-sparkles" />
            Empieza Ahora — Es Gratis Diseñar
          </a>
          <p className="text-xs text-white/30 mt-3">Solo pagas cuando decides comprar</p>
        </div>
      </div>
    </section>
  )
}
