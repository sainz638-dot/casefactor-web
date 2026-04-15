interface PricingTier {
  volume: string
  price: string
  savings: string
  highlighted?: boolean
}

interface Props {
  tiers: PricingTier[]
  accentColor?: string
}

export default function PricingTable({ tiers, accentColor = 'brand-gold' }: Props) {
  return (
    <>
      {/* Desktop: table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full max-w-2xl mx-auto">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left text-xs font-bold text-white/40 uppercase tracking-wider py-3 px-4">Volumen</th>
              <th className="text-center text-xs font-bold text-white/40 uppercase tracking-wider py-3 px-4">Precio por unidad</th>
              <th className="text-center text-xs font-bold text-white/40 uppercase tracking-wider py-3 px-4">Ahorro</th>
            </tr>
          </thead>
          <tbody>
            {tiers.map((tier, i) => (
              <tr
                key={i}
                className={`border-b border-white/5 transition ${
                  tier.highlighted ? `bg-${accentColor}/5` : 'hover:bg-white/[0.02]'
                }`}
              >
                <td className="py-4 px-4 text-sm text-white/70 font-medium">{tier.volume}</td>
                <td className={`py-4 px-4 text-center text-sm font-bold ${tier.highlighted ? `text-${accentColor}` : 'text-white'}`}>
                  {tier.price}
                </td>
                <td className="py-4 px-4 text-center text-sm text-green-400">{tier.savings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: cards */}
      <div className="md:hidden space-y-3">
        {tiers.map((tier, i) => (
          <div
            key={i}
            className={`border rounded-xl px-5 py-4 ${
              tier.highlighted
                ? `border-${accentColor}/30 bg-${accentColor}/5`
                : 'border-white/8'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-white/70 font-medium">{tier.volume}</span>
              <span className="text-xs text-green-400 font-medium">{tier.savings}</span>
            </div>
            <p className={`text-lg font-bold ${tier.highlighted ? `text-${accentColor}` : 'text-white'}`}>
              {tier.price}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}
