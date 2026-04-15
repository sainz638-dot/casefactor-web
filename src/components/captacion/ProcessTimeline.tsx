interface Step {
  number: number
  title: string
  description: string
  icon: string
}

interface Props {
  steps: Step[]
  accentColor?: string
}

export default function ProcessTimeline({ steps, accentColor = 'brand-gold' }: Props) {
  return (
    <>
      {/* Desktop: horizontal */}
      <div className="hidden md:flex items-start justify-between relative">
        {/* Connector line */}
        <div className="absolute top-6 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center relative z-10" style={{ width: `${100 / steps.length}%` }}>
            <div className={`w-12 h-12 rounded-full bg-${accentColor}/10 border border-${accentColor}/30 flex items-center justify-center mb-4`}>
              <i className={`fa-solid ${step.icon} text-${accentColor}`} />
            </div>
            <span className={`text-xs font-bold text-${accentColor}/60 uppercase tracking-wider mb-1`}>Paso {step.number}</span>
            <h4 className="text-sm font-bold text-white mb-1">{step.title}</h4>
            <p className="text-xs text-white/40 leading-relaxed max-w-[180px]">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Mobile: vertical */}
      <div className="md:hidden space-y-6">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full bg-${accentColor}/10 border border-${accentColor}/30 flex items-center justify-center flex-shrink-0`}>
                <i className={`fa-solid ${step.icon} text-sm text-${accentColor}`} />
              </div>
              {i < steps.length - 1 && <div className="w-px h-full bg-white/10 mt-2" />}
            </div>
            <div className="pb-6">
              <span className={`text-xs font-bold text-${accentColor}/60 uppercase tracking-wider`}>Paso {step.number}</span>
              <h4 className="text-sm font-bold text-white mt-0.5">{step.title}</h4>
              <p className="text-xs text-white/40 leading-relaxed mt-1">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
