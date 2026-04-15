const BASE_URL = 'https://dashboard.case-factor.com/disenador-publico'

export interface Product {
  id: string
  name: string
  subtitle: string
  price: string
  priceNum: number
  editorUrl: string
  icon: string
  gradient: string
  features: string[]
  badge?: string
  badgeColor?: string
  description: string
  images: string[] // 3 photos per product: 1.webp, 2.webp, 3.webp
}

export const ALL_PRODUCTS: Product[] = [
  {
    id: 'personalizada',
    name: 'Funda Personalizada',
    subtitle: '1 foto',
    price: '$350',
    priceNum: 350,
    editorUrl: `${BASE_URL}/personalizada`,
    icon: 'fa-mobile-screen',
    gradient: 'from-brand-gold/20 to-amber-600/20',
    features: ['Impresión HD que no se pela', 'Compatible con carga inalámbrica', '+200 modelos de celular'],
    badge: 'Más vendida',
    badgeColor: 'bg-brand-gold',
    description: 'Tu foto impresa en alta definición sobre una funda de TPU flexible. Protege sin agregar grosor, compatible con carga inalámbrica. La impresión no se pela ni se desvanece.',
    images: ['/images/productos/personalizada/1.webp', '/images/productos/personalizada/2.webp', '/images/productos/personalizada/3.webp'],
  },
  {
    id: 'lenticular',
    name: 'Funda Lenticular',
    subtitle: '2 fotos · Efecto 3D',
    price: '$450',
    priceNum: 450,
    editorUrl: `${BASE_URL}/lenticular`,
    icon: 'fa-cube',
    gradient: 'from-brand-rose/20 to-rose-600/20',
    features: ['Efecto 3D real al girar', '2 fotos en 1 funda', 'Tecnología exclusiva en México'],
    badge: '3D',
    badgeColor: 'bg-brand-rose',
    description: 'Efecto lenticular 3D REAL que cambia según el ángulo. Sube 2 fotos y ve cómo se transforman en una sola funda. Tecnología única en México.',
    images: ['/images/productos/lenticular/1.webp', '/images/productos/lenticular/2.webp', '/images/productos/lenticular/3.webp'],
  },
  {
    id: 'uso-rudo',
    name: 'Funda Uso Rudo',
    subtitle: '1 foto · Protección militar',
    price: '$450',
    priceNum: 450,
    editorUrl: `${BASE_URL}/uso-rudo`,
    icon: 'fa-shield-halved',
    gradient: 'from-brand-cream/20 to-amber-600/20',
    features: ['Protección grado militar', 'Doble capa anti-impacto', 'Bordes elevados para pantalla'],
    description: 'Protección militar con doble capa que absorbe impactos + tu diseño personalizado. Bordes elevados protegen pantalla y cámara.',
    images: ['/images/productos/uso-rudo/1.webp', '/images/productos/uso-rudo/2.webp', '/images/productos/uso-rudo/3.webp'],
  },
  {
    id: 'uso-rudo-lenticular',
    name: 'Funda Uso Rudo Lenticular',
    subtitle: '2 fotos · 3D + Protección',
    price: '$550',
    priceNum: 550,
    editorUrl: `${BASE_URL}/uso-rudo-lenticular`,
    icon: 'fa-shield-halved',
    gradient: 'from-brand-cream/20 to-rose-600/20',
    features: ['Protección militar + Efecto 3D', 'Doble capa anti-impacto', '2 fotos en 1 funda'],
    badge: '3D',
    badgeColor: 'bg-brand-rose',
    description: 'Lo mejor de ambos mundos: protección grado militar con doble capa + efecto 3D lenticular con 2 fotos.',
    images: ['/images/productos/uso-rudo-lenticular/1.webp', '/images/productos/uso-rudo-lenticular/2.webp', '/images/productos/uso-rudo-lenticular/3.webp'],
  },
  {
    id: 'bumper',
    name: 'Funda Bumper',
    subtitle: '1 foto · Bordes reforzados',
    price: '$400',
    priceNum: 400,
    editorUrl: `${BASE_URL}/bumper`,
    icon: 'fa-ring',
    gradient: 'from-brand-amber/20 to-yellow-700/20',
    features: ['Bordes bumper reforzados', 'Agarre antideslizante', 'Diseño personalizado HD'],
    description: 'Bordes bumper ultra reforzados con agarre antideslizante. Tu diseño personalizado en impresión HD que no se desgasta.',
    images: ['/images/productos/bumper/1.webp', '/images/productos/bumper/2.webp', '/images/productos/bumper/3.webp'],
  },
  {
    id: 'bumper-lenticular',
    name: 'Funda Bumper Lenticular',
    subtitle: '2 fotos · 3D + Bumper',
    price: '$500',
    priceNum: 500,
    editorUrl: `${BASE_URL}/bumper-lenticular`,
    icon: 'fa-ring',
    gradient: 'from-brand-amber/20 to-rose-600/20',
    features: ['Bumper + Efecto 3D real', 'Bordes reforzados', '2 fotos en 1 funda'],
    badge: '3D',
    badgeColor: 'bg-brand-rose',
    description: 'Bordes bumper reforzados con efecto 3D lenticular. Sube 2 fotos y obtén protección + diseño único.',
    images: ['/images/productos/bumper-lenticular/1.webp', '/images/productos/bumper-lenticular/2.webp', '/images/productos/bumper-lenticular/3.webp'],
  },
  {
    id: 'magsafe',
    name: 'Funda MagSafe',
    subtitle: '1 foto · Compatible MagSafe',
    price: '$400',
    priceNum: 400,
    editorUrl: `${BASE_URL}/magsafe`,
    icon: 'fa-magnet',
    gradient: 'from-brand-gold/20 to-brand-rose/20',
    features: ['Compatible con MagSafe', 'Imanes integrados', 'Carga inalámbrica perfecta'],
    description: 'Diseño personalizado con imanes MagSafe integrados. Compatible con todos los accesorios MagSafe y carga inalámbrica.',
    images: ['/images/productos/magsafe/1.webp', '/images/productos/magsafe/2.webp', '/images/productos/magsafe/3.webp'],
  },
  {
    id: 'playera',
    name: 'Playera Personalizada',
    subtitle: '1 foto · Algodón premium',
    price: '$390',
    priceNum: 390,
    editorUrl: `${BASE_URL}/playera`,
    icon: 'fa-shirt',
    gradient: 'from-brand-amber/20 to-amber-600/20',
    features: ['Algodón peinado suave', 'Impresión DTF que no se cuartea', 'Tallas S a XXL'],
    badge: 'NUEVO',
    badgeColor: 'bg-brand-amber',
    description: 'Algodón peinado 100% con impresión DTF de alta calidad. No se cuartea, no se desvanece con las lavadas. Tallas de S a XXL.',
    images: ['/images/productos/playera/1.webp', '/images/productos/playera/2.webp', '/images/productos/playera/3.webp'],
  },
]

// The 4 featured products shown on the homepage
export const FEATURED_IDS = ['personalizada', 'lenticular', 'playera', 'uso-rudo']
export const FEATURED_PRODUCTS = ALL_PRODUCTS.filter(p => FEATURED_IDS.includes(p.id))
