import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour
const MAX_REQUESTS = 5
// Cyber Neo CN-004 — limitador en memoria. Aceptable para dev/localhost.
// En producción migrar a @upstash/ratelimit + Redis (compartido entre instancias).
const ipRequests = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = ipRequests.get(ip)
  if (!entry || now > entry.resetAt) {
    ipRequests.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    return true
  }
  if (entry.count >= MAX_REQUESTS) return false
  entry.count++
  return true
}

const VALID_ROLES = ['artista', 'creador', 'vendedor', 'proveedor', 'general'] as const

// Cyber Neo CN-007 — orígenes permitidos para protección CSRF.
const ALLOWED_ORIGINS = [
  'https://case-factor.com',
  'https://www.case-factor.com',
  'http://localhost:3000',
]

// Cyber Neo CN-010 — límites de longitud para validación server-side.
const MAX_NAME = 120
const MAX_EMAIL = 254
const MAX_PHONE = 30
const MAX_URL = 500
const MAX_MESSAGE = 2000
const MAX_SOCIAL = 1000

function safeUrl(value: unknown): string | null {
  if (typeof value !== 'string' || !value.trim()) return null
  if (value.length > MAX_URL) return null
  try {
    const u = new URL(value)
    if (u.protocol !== 'http:' && u.protocol !== 'https:') return null
    return u.toString()
  } catch {
    return null
  }
}

export async function POST(req: NextRequest) {
  // Cyber Neo CN-007 — validar Origin para prevenir CSRF.
  const origin = req.headers.get('origin') ?? ''
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return NextResponse.json({ error: 'Origen no permitido.' }, { status: 403 })
  }

  // Cyber Neo CN-003 — usar x-real-ip (firmado por Vercel) en lugar de x-forwarded-for (spoofeable).
  const ip =
    req.headers.get('x-real-ip') ??
    (req as unknown as { ip?: string }).ip ??
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    'unknown'

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Demasiados intentos. Intenta de nuevo en una hora.' },
      { status: 429 }
    )
  }

  try {
    const body = await req.json()
    const { name, email, phone, role, portfolio_url, social_links, message } = body

    if (!name || !email || !role) {
      return NextResponse.json(
        { error: 'Nombre, email y rol son requeridos.' },
        { status: 400 }
      )
    }

    if (!VALID_ROLES.includes(role)) {
      return NextResponse.json(
        { error: 'Rol no valido.' },
        { status: 400 }
      )
    }

    // Cyber Neo CN-010 — validación server-side de longitud y formato.
    if (typeof name !== 'string' || name.length > MAX_NAME) {
      return NextResponse.json({ error: 'Nombre invalido.' }, { status: 400 })
    }
    if (typeof email !== 'string' || email.length > MAX_EMAIL) {
      return NextResponse.json({ error: 'Email invalido.' }, { status: 400 })
    }
    if (phone && (typeof phone !== 'string' || phone.length > MAX_PHONE)) {
      return NextResponse.json({ error: 'Telefono invalido.' }, { status: 400 })
    }
    if (message && (typeof message !== 'string' || message.length > MAX_MESSAGE)) {
      return NextResponse.json({ error: 'Mensaje demasiado largo.' }, { status: 400 })
    }
    if (social_links && (typeof social_links !== 'string' || social_links.length > MAX_SOCIAL)) {
      return NextResponse.json({ error: 'Social links invalidos.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email no valido.' },
        { status: 400 }
      )
    }

    const cleanPortfolio = portfolio_url ? safeUrl(portfolio_url) : null
    if (portfolio_url && !cleanPortfolio) {
      return NextResponse.json({ error: 'Portfolio URL invalido.' }, { status: 400 })
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )
    const { data, error } = await supabase
      .from('registrations')
      .upsert(
        {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone?.trim() || null,
          role,
          portfolio_url: cleanPortfolio,
          social_links: social_links?.trim() || null,
          message: message?.trim() || null,
        },
        { onConflict: 'email,role', ignoreDuplicates: true }
      )
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Error al registrar. Intenta de nuevo.' },
        { status: 500 }
      )
    }

    const isNew = data && data.length > 0
    return NextResponse.json({
      success: true,
      isNew,
      message: isNew
        ? 'Registro exitoso. Te contactamos pronto.'
        : 'Ya tienes un registro con este email. Te contactamos pronto.'
    })
  } catch (err) {
    // Cyber Neo CN-011 — loguear el error real (no silenciarlo).
    console.error('register endpoint error:', err)
    return NextResponse.json(
      { error: 'Error procesando la solicitud.' },
      { status: 500 }
    )
  }
}
