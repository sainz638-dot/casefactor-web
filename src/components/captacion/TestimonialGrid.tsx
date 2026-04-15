interface Testimonial {
  name: string
  role: string
  quote: string
  avatar?: string
}

interface Props {
  testimonials: Testimonial[]
  emptyMessage?: string
  emptyCTA?: string
  emptyCTAHref?: string
  accentColor?: string
}

export default function TestimonialGrid({
  testimonials,
  emptyMessage = 'Se el primero en unirte',
  emptyCTA = 'Registrate ahora',
  emptyCTAHref = '#registro',
  accentColor = 'brand-gold',
}: Props) {
  if (testimonials.length === 0) {
    return (
      <div className="grid md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border border-dashed border-white/10 rounded-xl p-8 text-center">
            <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-${accentColor}/10 border border-${accentColor}/20 flex items-center justify-center`}>
              <i className={`fa-solid fa-user-plus text-${accentColor}/40`} />
            </div>
            <p className="text-sm text-white/30 mb-3">{emptyMessage}</p>
            <a
              href={emptyCTAHref}
              className={`inline-block text-xs font-bold text-${accentColor} hover:underline`}
            >
              {emptyCTA} &rarr;
            </a>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {testimonials.map((t, i) => (
        <div key={i} className="border border-white/8 rounded-xl p-6 hover:border-white/15 transition">
          <div className="flex items-center gap-3 mb-4">
            {t.avatar ? (
              <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
            ) : (
              <div className={`w-10 h-10 rounded-full bg-${accentColor}/10 flex items-center justify-center`}>
                <span className={`text-sm font-bold text-${accentColor}`}>{t.name[0]}</span>
              </div>
            )}
            <div>
              <p className="text-sm font-medium text-white">{t.name}</p>
              <p className="text-xs text-white/30">{t.role}</p>
            </div>
          </div>
          <p className="text-sm text-white/50 leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
        </div>
      ))}
    </div>
  )
}
