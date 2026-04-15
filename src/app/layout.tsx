import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Case Factor | Crea, Personaliza y Vende Productos Premium',
  description: 'Plataforma de personalización y print-on-demand #1 en México. Fundas, playeras y más con tu diseño. IA generativa, editor profesional, envío a todo México.',
  keywords: 'fundas personalizadas, print on demand mexico, playeras personalizadas, case factor',
  openGraph: {
    title: 'Case Factor | Tu Marca, Nuestro Producto',
    description: 'Crea fundas y playeras premium personalizadas con IA. Sin inventario, sin límites.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Cyber Neo CN-006 — SRI para proteger contra manipulación del CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
