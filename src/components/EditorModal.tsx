'use client'

import { useEffect, useState } from 'react'

// Cyber Neo CN-008 — solo se acepta este origen para URLs del editor.
const ALLOWED_EDITOR_ORIGIN = 'https://dashboard.case-factor.com'

// Custom event to open editor modal from anywhere
export function openEditorModal(url: string) {
  window.dispatchEvent(new CustomEvent('cf-open-editor', { detail: { url } }))
}

export default function EditorModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [url, setUrl] = useState('')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail
      // Cyber Neo CN-008 — validar que la URL pertenezca al dominio autorizado.
      try {
        const u = new URL(detail?.url ?? '')
        if (u.origin !== ALLOWED_EDITOR_ORIGIN) return
        setUrl(u.toString())
      } catch {
        return
      }
      setIsOpen(true)
      setLoaded(false)
      document.body.style.overflow = 'hidden'
    }
    window.addEventListener('cf-open-editor', handler)
    return () => window.removeEventListener('cf-open-editor', handler)
  }, [])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    if (isOpen) window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen])

  const close = () => {
    setIsOpen(false)
    setUrl('')
    document.body.style.overflow = ''
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm">
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 h-14 flex items-center justify-between px-4 z-10">
        <a href="/" className="flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 rounded-xl px-4 py-2 text-sm font-bold text-brand-gold hover:bg-brand-gold/15 transition">
          <i className="fa-solid fa-house text-xs" /> Inicio
        </a>
        <button onClick={close} className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition">
          <i className="fa-solid fa-xmark text-lg" />
        </button>
      </div>

      {/* Loading */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center z-5">
          <div className="text-center">
            <div className="w-12 h-12 border-2 border-brand-gold/30 border-t-brand-gold rounded-full animate-spin mx-auto mb-4" />
            <p className="text-white/40 text-sm">Cargando editor...</p>
          </div>
        </div>
      )}

      {/* Iframe */}
      {/* Cyber Neo CN-009 — sandbox para defensa en profundidad. */}
      <iframe
        src={url}
        className="w-full h-full border-0 pt-14"
        onLoad={() => setLoaded(true)}
        allow="camera; clipboard-write"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
        title="Editor Case Factor"
      />
    </div>
  )
}
