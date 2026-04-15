'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface Props {
  items: FAQItem[]
  accentColor?: string
}

export default function FAQAccordion({ items, accentColor = 'brand-gold' }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className={`border rounded-xl transition-all duration-300 ${
              isOpen ? `border-${accentColor}/20 bg-white/[0.02]` : 'border-white/8 hover:border-white/15'
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left"
            >
              <span className="text-sm font-medium text-white/80">{item.question}</span>
              <i className={`fa-solid fa-chevron-down text-xs text-white/30 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: isOpen ? '500px' : '0', opacity: isOpen ? 1 : 0 }}
            >
              <p className="px-6 pb-4 text-sm text-white/40 leading-relaxed">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
