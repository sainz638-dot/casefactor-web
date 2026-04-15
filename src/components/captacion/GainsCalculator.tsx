'use client'

import { useState } from 'react'

const PRODUCTS = [
  { name: 'TPU Personalizada', wholesale: 200, retail: 349 },
  { name: 'Bumper', wholesale: 230, retail: 399 },
  { name: 'Uso Rudo', wholesale: 260, retail: 449 },
  { name: 'MagSafe', wholesale: 230, retail: 399 },
  { name: 'TPU Lenticular 3D', wholesale: 260, retail: 449 },
  { name: 'Uso Rudo Lenticular', wholesale: 320, retail: 549 },
  { name: 'Playera', wholesale: 220, retail: 380 },
]

export default function GainsCalculator() {
  const [productIndex, setProductIndex] = useState(0)
  const [sellPrice, setSellPrice] = useState(PRODUCTS[0].retail)
  const [quantity, setQuantity] = useState(10)

  const product = PRODUCTS[productIndex]
  const margin = sellPrice - product.wholesale
  const totalGain = margin * quantity
  const marginPercent = sellPrice > 0 ? Math.round((margin / sellPrice) * 100) : 0

  return (
    <div className="max-w-xl mx-auto bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8">
      <h3 className="text-lg font-bold text-white mb-6 text-center">Calcula tus ganancias</h3>

      <div className="space-y-5">
        <div>
          <label className="block text-sm text-white/50 mb-2">Producto</label>
          <select
            value={productIndex}
            onChange={(e) => {
              const idx = Number(e.target.value)
              setProductIndex(idx)
              setSellPrice(PRODUCTS[idx].retail)
            }}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-brand-gold/40 focus:outline-none transition appearance-none"
          >
            {PRODUCTS.map((p, i) => (
              <option key={i} value={i} className="bg-brand-dark">{p.name} — Mayoreo ${p.wholesale}</option>
            ))}
          </select>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm text-white/50">Tu precio de venta</label>
            <span className="text-sm font-mono font-bold text-brand-gold">${sellPrice}</span>
          </div>
          <input
            type="range"
            min={product.wholesale}
            max={product.wholesale * 3}
            value={sellPrice}
            onChange={(e) => setSellPrice(Number(e.target.value))}
            className="w-full accent-[#00DBFF]"
          />
          <div className="flex justify-between text-xs text-white/20 mt-1">
            <span>${product.wholesale}</span>
            <span>${product.wholesale * 3}</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm text-white/50">Ventas por mes</label>
            <span className="text-sm font-mono font-bold text-white">{quantity}</span>
          </div>
          <input
            type="range"
            min={1}
            max={100}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full accent-[#00DBFF]"
          />
          <div className="flex justify-between text-xs text-white/20 mt-1">
            <span>1</span>
            <span>100</span>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-3">
        <div className="text-center bg-white/5 rounded-xl py-4 px-2">
          <p className="text-xs text-white/40 mb-1">Ganancia/unidad</p>
          <p className={`text-lg font-bold font-mono ${margin > 0 ? 'text-green-400' : 'text-red-400'}`}>
            ${margin}
          </p>
        </div>
        <div className="text-center bg-white/5 rounded-xl py-4 px-2">
          <p className="text-xs text-white/40 mb-1">Margen</p>
          <p className={`text-lg font-bold font-mono ${marginPercent > 0 ? 'text-green-400' : 'text-red-400'}`}>
            {marginPercent}%
          </p>
        </div>
        <div className="text-center bg-brand-gold/10 border border-brand-gold/20 rounded-xl py-4 px-2">
          <p className="text-xs text-brand-gold/60 mb-1">Total/mes</p>
          <p className="text-lg font-bold font-mono text-brand-gold">
            ${totalGain.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  )
}
