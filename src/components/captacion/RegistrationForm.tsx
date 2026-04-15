'use client'

import { useState, FormEvent } from 'react'

type Role = 'artista' | 'creador' | 'vendedor' | 'proveedor' | 'general'

interface FieldConfig {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'url' | 'textarea'
  required?: boolean
  placeholder?: string
}

const ROLE_FIELDS: Record<Role, FieldConfig[]> = {
  artista: [
    { name: 'name', label: 'Nombre completo', type: 'text', required: true, placeholder: 'Tu nombre' },
    { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'tu@email.com' },
    { name: 'portfolio_url', label: 'Portafolio o Instagram', type: 'url', placeholder: 'https://instagram.com/tu_arte' },
  ],
  creador: [
    { name: 'name', label: 'Nombre o marca', type: 'text', required: true, placeholder: 'Tu nombre o canal' },
    { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'tu@email.com' },
    { name: 'social_links', label: 'Link principal (TikTok, Instagram, YouTube)', type: 'url', placeholder: 'https://tiktok.com/@tucuenta' },
  ],
  vendedor: [
    { name: 'name', label: 'Nombre completo', type: 'text', required: true, placeholder: 'Tu nombre' },
    { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'tu@email.com' },
    { name: 'phone', label: 'WhatsApp', type: 'tel', placeholder: '55 1234 5678' },
    { name: 'message', label: 'Cuantanos sobre tu negocio', type: 'textarea', placeholder: 'Tipo de negocio, experiencia vendiendo...' },
  ],
  proveedor: [
    { name: 'name', label: 'Nombre / Empresa', type: 'text', required: true, placeholder: 'Empresa o nombre' },
    { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'contacto@empresa.com' },
    { name: 'phone', label: 'Telefono', type: 'tel', placeholder: '33 1234 5678' },
    { name: 'message', label: 'Que tipo de proveedor eres?', type: 'textarea', placeholder: 'Materiales, impresion, empaques, logistica...' },
  ],
  general: [
    { name: 'name', label: 'Nombre', type: 'text', required: true, placeholder: 'Tu nombre' },
    { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'tu@email.com' },
    { name: 'message', label: 'Mensaje', type: 'textarea', placeholder: 'En que te podemos ayudar?' },
  ],
}

const ROLE_SUCCESS: Record<Role, string> = {
  artista: 'Tu registro como artista fue recibido. Revisamos tu portafolio y te contactamos en 24-48 horas.',
  creador: 'Bienvenido al programa de creadores! Te enviamos los detalles a tu email en las proximas 24 horas.',
  vendedor: 'Registro recibido! Un asesor te contacta por WhatsApp para activar tu cuenta de vendedor.',
  proveedor: 'Solicitud enviada. Nuestro equipo de operaciones revisa tu perfil y te contacta pronto.',
  general: 'Mensaje recibido. Te contactamos pronto.',
}

interface Props {
  role: Role
  accentColor?: string
}

export default function RegistrationForm({ role, accentColor = 'brand-gold' }: Props) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'duplicate' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const fields = ROLE_FIELDS[role]

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'loading') return

    setStatus('loading')
    setErrorMsg('')

    const formData = new FormData(e.currentTarget)
    const payload: Record<string, string | null> = { role }

    for (const field of fields) {
      const val = formData.get(field.name) as string
      if (field.name === 'social_links' && val) {
        payload.social_links = JSON.stringify([val])
      } else {
        payload[field.name] = val || null
      }
    }

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setErrorMsg(data.error || 'Error al registrar.')
        return
      }

      setStatus(data.isNew ? 'success' : 'duplicate')
    } catch {
      setStatus('error')
      setErrorMsg('Error de conexion. Intenta de nuevo.')
    }
  }

  if (status === 'success' || status === 'duplicate') {
    return (
      <div className="text-center py-12 px-6">
        <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${accentColor}/10 border border-${accentColor}/30 flex items-center justify-center`}>
          <i className={`fa-solid fa-check text-2xl text-${accentColor}`} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">
          {status === 'success' ? 'Registro exitoso!' : 'Ya estas registrado!'}
        </h3>
        <p className="text-white/50 max-w-md mx-auto">
          {status === 'success' ? ROLE_SUCCESS[role] : 'Ya tienes un registro con este email. Te contactamos pronto.'}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      {fields.map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-medium text-white/60 mb-1.5">{field.label}</label>
          {field.type === 'textarea' ? (
            <textarea
              name={field.name}
              required={field.required}
              placeholder={field.placeholder}
              rows={3}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:border-brand-gold/40 focus:outline-none focus:ring-1 focus:ring-brand-gold/20 transition resize-none"
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              required={field.required}
              placeholder={field.placeholder}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:border-brand-gold/40 focus:outline-none focus:ring-1 focus:ring-brand-gold/20 transition"
            />
          )}
        </div>
      ))}

      {status === 'error' && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-sm text-red-400">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
          status === 'loading'
            ? 'bg-white/10 text-white/40 cursor-wait'
            : `bg-${accentColor} text-brand-dark hover:shadow-[0_0_30px_rgba(0,219,255,0.15)] hover:scale-[1.01]`
        }`}
      >
        {status === 'loading' ? (
          <span className="flex items-center justify-center gap-2">
            <i className="fa-solid fa-spinner fa-spin" />
            Enviando...
          </span>
        ) : (
          'Registrarme'
        )}
      </button>
    </form>
  )
}
