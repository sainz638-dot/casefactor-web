import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-06-20',
  typescript: true,
})

// Membership tiers
export const MEMBERSHIP_TIERS = {
  free: {
    name: 'Gratis',
    price: 0,
    stripePriceId: null,
    features: [
      'Acceso al editor básico',
      '1 diseño de funda por mes',
      'Marca de agua Case Factor',
    ],
    limits: { designsPerMonth: 1, hasWatermark: true, hasAI: false, labelTemplates: 0 },
  },
  starter: {
    name: 'Starter',
    price: 149,
    stripePriceId: process.env.STRIPE_PRICE_STARTER,
    features: [
      'Editor completo sin marca de agua',
      '10 diseños por mes',
      'IA Relleno Generativo',
      '5 plantillas de etiqueta',
      'Link de afiliado',
    ],
    limits: { designsPerMonth: 10, hasWatermark: false, hasAI: true, labelTemplates: 5 },
  },
  pro: {
    name: 'Pro',
    price: 349,
    stripePriceId: process.env.STRIPE_PRICE_PRO,
    features: [
      'Diseños ilimitados',
      'IA Relleno Generativo Pro',
      'Etiquetas ilimitadas + marca propia',
      'Editor lenticular 3D',
      'Prioridad en fabricación',
      'Dashboard de ventas avanzado',
    ],
    limits: { designsPerMonth: Infinity, hasWatermark: false, hasAI: true, labelTemplates: Infinity },
  },
  empire: {
    name: 'Empire',
    price: 799,
    stripePriceId: process.env.STRIPE_PRICE_EMPIRE,
    features: [
      'Todo de Pro',
      'API de integración directa',
      'Fulfillment automático',
      'Soporte prioritario 24/7',
      'Página de marca personalizada',
      'Comisiones máximas (40%)',
    ],
    limits: { designsPerMonth: Infinity, hasWatermark: false, hasAI: true, labelTemplates: Infinity },
  },
} as const

export type MembershipTier = keyof typeof MEMBERSHIP_TIERS
