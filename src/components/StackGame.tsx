'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

// ============================================================
// DISCOUNT TIERS — warm gold progression
// ============================================================
const TIERS = [
  { level: 5,  discount: 5,  label: '5% OFF',  color: '#00DBFF', glowColor: 'rgba(0,219,255,', code: 'CF5' },
  { level: 10, discount: 10, label: '10% OFF', color: '#00E676', glowColor: 'rgba(0,230,118,', code: 'CF10' },
  { level: 15, discount: 15, label: '15% OFF', color: '#B76E79', glowColor: 'rgba(183,110,121,', code: 'CF15' },
  { level: 25, discount: 30, label: '30% OFF', color: '#FF9100', glowColor: 'rgba(255,145,0,', code: 'CF30' },
  { level: 35, discount: 50, label: '50% OFF', color: '#C4616C', glowColor: 'rgba(196,97,108,', code: 'CF50' },
]

function getCurrentTier(level: number) {
  let current = null
  for (const t of TIERS) {
    if (level >= t.level) current = t
  }
  return current
}

function getNextTier(level: number) {
  for (const t of TIERS) {
    if (level < t.level) return t
  }
  return null
}

// ============================================================
// GAME
// ============================================================
interface Block {
  x: number
  width: number
  y: number
  height: number
  color: string
}

const CANVAS_W = 320
const CANVAS_H = 500
const BLOCK_H = 20
const BASE_SPEED = 1.8
const SPEED_INCREMENT = 0.18
const PERFECT_THRESHOLD = 3

export default function StackGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const gameStateRef = useRef({
    blocks: [] as Block[],
    current: null as Block | null,
    direction: 1,
    speed: BASE_SPEED,
    score: 0,
    gameOver: false,
    started: false,
    perfectStreak: 0,
    cameraY: 0,
    particles: [] as Array<{x:number;y:number;vx:number;vy:number;life:number;color:string;size:number}>,
    flashAlpha: 0,
  })
  const animRef = useRef<number>(0)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [started, setStarted] = useState(false)
  const [showPrize, setShowPrize] = useState(false)
  const [discountCode, setDiscountCode] = useState('')
  const [copied, setCopied] = useState(false)
  const [justUnlocked, setJustUnlocked] = useState<number | null>(null)

  const getBlockColor = (index: number) => {
    const hue = (index * 8 + 30) % 60 + 20
    return `hsl(${hue}, 55%, 50%)`
  }

  const spawnParticles = (x: number, y: number, w: number, color: string, count: number) => {
    const gs = gameStateRef.current
    for (let i = 0; i < count; i++) {
      gs.particles.push({
        x: x + Math.random() * w,
        y: y,
        vx: (Math.random() - 0.5) * 4,
        vy: -Math.random() * 3 - 1,
        life: 1,
        color,
        size: Math.random() * 3 + 1,
      })
    }
  }

  // Check if a tier was just unlocked
  useEffect(() => {
    for (const t of TIERS) {
      if (score === t.level) {
        setJustUnlocked(t.level)
        const timer = setTimeout(() => setJustUnlocked(null), 1500)
        return () => clearTimeout(timer)
      }
    }
  }, [score])

  const initGame = useCallback(() => {
    const gs = gameStateRef.current
    const baseBlock: Block = {
      x: CANVAS_W / 2 - 60,
      width: 120,
      y: CANVAS_H - BLOCK_H - 10,
      height: BLOCK_H,
      color: getBlockColor(0),
    }
    gs.blocks = [baseBlock]
    gs.current = {
      x: 0,
      width: baseBlock.width,
      y: baseBlock.y - BLOCK_H,
      height: BLOCK_H,
      color: getBlockColor(1),
    }
    gs.direction = 1
    gs.speed = BASE_SPEED
    gs.score = 0
    gs.gameOver = false
    gs.started = true
    gs.perfectStreak = 0
    gs.cameraY = 0
    gs.particles = []
    gs.flashAlpha = 0
    setScore(0)
    setGameOver(false)
    setStarted(true)
    setShowPrize(false)
    setCopied(false)
    setJustUnlocked(null)
  }, [])

  const placeBlock = useCallback(() => {
    const gs = gameStateRef.current
    if (gs.gameOver || !gs.current) return

    const prev = gs.blocks[gs.blocks.length - 1]
    const curr = gs.current

    const overlapStart = Math.max(prev.x, curr.x)
    const overlapEnd = Math.min(prev.x + prev.width, curr.x + curr.width)
    const overlapWidth = overlapEnd - overlapStart

    if (overlapWidth <= 0) {
      gs.gameOver = true
      setGameOver(true)
      spawnParticles(curr.x, curr.y, curr.width, '#C4616C', 20)

      const tier = getCurrentTier(gs.score)
      if (tier) {
        setDiscountCode(tier.code)
        setTimeout(() => setShowPrize(true), 800)
      } else {
        setTimeout(() => setShowPrize(true), 800)
      }
      return
    }

    const isPerfect = Math.abs(curr.x - prev.x) < PERFECT_THRESHOLD
    if (isPerfect) {
      gs.perfectStreak++
      gs.flashAlpha = 0.5
      spawnParticles(prev.x, curr.y, prev.width, '#00DBFF', 15)
    } else {
      gs.perfectStreak = 0
    }

    const placed: Block = {
      x: overlapStart,
      width: isPerfect ? prev.width : overlapWidth,
      y: curr.y,
      height: BLOCK_H,
      color: curr.color,
    }
    gs.blocks.push(placed)

    if (!isPerfect) {
      const cutSide = curr.x < prev.x ? 'left' : 'right'
      const debrisX = cutSide === 'left' ? curr.x : overlapEnd
      const debrisW = curr.width - overlapWidth
      spawnParticles(debrisX, curr.y, debrisW, curr.color, 8)
    }

    gs.score++
    setScore(gs.score)

    gs.speed = BASE_SPEED + gs.score * SPEED_INCREMENT

    const blockScreenY = placed.y - gs.cameraY
    if (blockScreenY < CANVAS_H * 0.4) {
      gs.cameraY -= BLOCK_H
    }

    const nextWidth = isPerfect ? prev.width : overlapWidth
    gs.current = {
      x: gs.direction > 0 ? -nextWidth : CANVAS_W,
      width: nextWidth,
      y: placed.y - BLOCK_H,
      height: BLOCK_H,
      color: getBlockColor(gs.score + 1),
    }
  }, [])

  // Game loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const draw = () => {
      const gs = gameStateRef.current
      ctx.clearRect(0, 0, CANVAS_W, CANVAS_H)

      const bgGrad = ctx.createLinearGradient(0, 0, 0, CANVAS_H)
      bgGrad.addColorStop(0, '#0A0A0A')
      bgGrad.addColorStop(1, '#141414')
      ctx.fillStyle = bgGrad
      ctx.fillRect(0, 0, CANVAS_W, CANVAS_H)

      ctx.strokeStyle = 'rgba(0, 219, 255, 0.03)'
      ctx.lineWidth = 1
      for (let x = 0; x < CANVAS_W; x += 40) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, CANVAS_H); ctx.stroke()
      }
      for (let y = 0; y < CANVAS_H; y += 40) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(CANVAS_W, y); ctx.stroke()
      }

      // Tier markers
      TIERS.forEach(tier => {
        const markerY = (CANVAS_H - BLOCK_H - 10) - tier.level * BLOCK_H - gs.cameraY
        if (markerY > -20 && markerY < CANVAS_H + 20) {
          ctx.save()
          ctx.strokeStyle = tier.color + '30'
          ctx.lineWidth = 1
          ctx.setLineDash([4, 4])
          ctx.beginPath()
          ctx.moveTo(0, markerY + BLOCK_H / 2)
          ctx.lineTo(CANVAS_W, markerY + BLOCK_H / 2)
          ctx.stroke()
          ctx.setLineDash([])
          ctx.fillStyle = tier.color
          ctx.font = 'bold 10px "Playfair Display", serif'
          ctx.textAlign = 'right'
          ctx.fillText(tier.label, CANVAS_W - 8, markerY + BLOCK_H / 2 + 3)
          ctx.restore()
        }
      })

      // Placed blocks
      gs.blocks.forEach((block) => {
        const screenY = block.y - gs.cameraY
        if (screenY > -BLOCK_H && screenY < CANVAS_H + BLOCK_H) {
          ctx.fillStyle = block.color
          ctx.fillRect(block.x, screenY, block.width, block.height - 1)
          ctx.fillStyle = 'rgba(255,255,255,0.15)'
          ctx.fillRect(block.x, screenY, block.width, 2)
          ctx.fillStyle = 'rgba(0,0,0,0.2)'
          ctx.fillRect(block.x, screenY + block.height - 3, block.width, 2)
        }
      })

      // Current block
      if (gs.current && !gs.gameOver) {
        const curr = gs.current
        const screenY = curr.y - gs.cameraY
        ctx.fillStyle = curr.color
        ctx.fillRect(curr.x, screenY, curr.width, curr.height - 1)
        ctx.fillStyle = 'rgba(255,255,255,0.2)'
        ctx.fillRect(curr.x, screenY, curr.width, 2)

        ctx.strokeStyle = 'rgba(0, 219, 255, 0.15)'
        ctx.lineWidth = 1
        ctx.setLineDash([2, 4])
        ctx.beginPath()
        ctx.moveTo(curr.x, screenY + curr.height)
        ctx.lineTo(curr.x, CANVAS_H)
        ctx.moveTo(curr.x + curr.width, screenY + curr.height)
        ctx.lineTo(curr.x + curr.width, CANVAS_H)
        ctx.stroke()
        ctx.setLineDash([])
      }

      // Particles
      gs.particles = gs.particles.filter(p => {
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.08
        p.life -= 0.02
        if (p.life <= 0) return false
        const screenY = p.y - gs.cameraY
        ctx.globalAlpha = p.life
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, screenY, p.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
        return true
      })

      // Perfect flash
      if (gs.flashAlpha > 0) {
        ctx.fillStyle = `rgba(0, 219, 255, ${gs.flashAlpha * 0.1})`
        ctx.fillRect(0, 0, CANVAS_W, CANVAS_H)
        gs.flashAlpha -= 0.02
      }

      // Move current block
      if (gs.current && gs.started && !gs.gameOver) {
        gs.current.x += gs.speed * gs.direction
        if (gs.current.x + gs.current.width > CANVAS_W) {
          gs.direction = -1
        } else if (gs.current.x < 0) {
          gs.direction = 1
        }
      }

      animRef.current = requestAnimationFrame(draw)
    }

    animRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(animRef.current)
  }, [])

  const handleClick = () => {
    const gs = gameStateRef.current
    if (!gs.started) {
      initGame()
      return
    }
    if (gs.gameOver) {
      initGame()
      return
    }
    placeBlock()
  }

  const tier = getCurrentTier(score)
  const nextTier = getNextTier(score)

  const copyCode = () => {
    navigator.clipboard.writeText(discountCode).then(() => setCopied(true))
  }

  // Dynamic color for game frame based on current tier
  const frameColor = tier ? tier.color : '#00DBFF'
  const frameGlow = tier ? tier.glowColor : 'rgba(0,219,255,'

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-gold/20 mb-6">
            <i className="fa-solid fa-gamepad text-brand-gold text-xs" />
            <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider">Desafío Case Factor</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Juega y Gana <span className="text-glow text-brand-gold">Descuentos Reales</span>
          </h2>
          <p className="text-lg text-white/40">
            Apila los bloques con precisión. Entre más alto llegues, mayor tu descuento. ¿Puedes llegar al 50%?
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 max-w-full overflow-hidden">
          {/* Game Canvas with FRAME */}
          <div className="relative">
            {/* Outer glow layers */}
            <div
              className="absolute -inset-[3px] rounded-3xl transition-all duration-700"
              style={{
                background: `linear-gradient(135deg, ${frameColor}, ${frameColor}80, transparent, ${frameColor}80, ${frameColor})`,
                filter: `blur(1px)`,
                opacity: 0.8,
              }}
            />
            <div
              className="absolute -inset-[6px] rounded-[1.6rem] transition-all duration-700"
              style={{
                boxShadow: `0 0 20px ${frameGlow}0.3), 0 0 60px ${frameGlow}0.15), inset 0 0 20px ${frameGlow}0.05)`,
              }}
            />
            {/* Animated pulse ring */}
            <div
              className="absolute -inset-[10px] rounded-[1.8rem] transition-all duration-700 animate-pulse"
              style={{
                boxShadow: `0 0 40px ${frameGlow}0.1), 0 0 80px ${frameGlow}0.05)`,
              }}
            />

            {/* Canvas container */}
            <div className="relative rounded-3xl overflow-hidden" style={{ border: `2px solid ${frameColor}60` }}>
              <canvas
                ref={canvasRef}
                width={CANVAS_W}
                height={CANVAS_H}
                className="cursor-pointer block"
                style={{ borderRadius: '1.3rem' }}
                onClick={handleClick}
                onTouchStart={(e) => { e.preventDefault(); handleClick() }}
              />
            </div>

            {/* Overlay: Start / Game Over */}
            {!started && (
              <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-black/60 backdrop-blur-sm cursor-pointer" onClick={handleClick}>
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center mx-auto mb-4">
                    <i className="fa-solid fa-play text-brand-gold text-2xl ml-1" />
                  </div>
                  <p className="font-display text-xl font-bold text-white mb-2">Toca para Jugar</p>
                  <p className="text-xs text-white/40">Apila los bloques con precisión</p>
                </div>
              </div>
            )}

            {showPrize && (
              <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-black/70 backdrop-blur-md">
                <div className="text-center p-8 max-w-[280px]">
                  {tier ? (
                    <>
                      <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 animate-subtle-pulse" style={{ background: `${tier.color}15`, border: `2px solid ${tier.color}50`, boxShadow: `0 0 30px ${tier.glowColor}0.4)` }}>
                        <span className="font-display text-2xl font-bold" style={{ color: tier.color }}>{tier.discount}%</span>
                      </div>
                      <p className="font-display text-2xl font-bold text-white mb-1">Nivel {score}</p>
                      <p className="text-sm text-white/50 mb-5">Ganaste <span className="font-bold" style={{ color: tier.color }}>{tier.discount}% de descuento</span></p>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-4" style={{ boxShadow: `0 0 20px ${tier.glowColor}0.15)` }}>
                        <p className="text-[10px] text-white/30 uppercase tracking-wider mb-1">Tu código</p>
                        <p className="font-mono text-2xl font-bold tracking-widest" style={{ color: tier.color }}>{discountCode}</p>
                      </div>
                      <button onClick={copyCode}
                              className="w-full py-3 rounded-xl font-bold text-sm transition mb-3"
                              style={{ background: copied ? '#B76E79' : tier.color, color: '#0A0A0A', boxShadow: `0 0 25px ${tier.glowColor}0.4)` }}>
                        {copied ? <><i className="fa-solid fa-check mr-2" />Copiado</> : <><i className="fa-solid fa-copy mr-2" />Copiar Código</>}
                      </button>
                      <a href="#personalizar" className="block w-full py-3 rounded-xl border border-white/10 text-white/60 text-sm font-bold hover:border-brand-gold/30 transition text-center">
                        Usar Ahora <i className="fa-solid fa-arrow-right ml-1" />
                      </a>
                    </>
                  ) : (
                    <>
                      <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">😅</span>
                      </div>
                      <p className="font-display text-xl font-bold text-white mb-1">Nivel {score}</p>
                      <p className="text-sm text-white/40 mb-5">Necesitas llegar al nivel 5 para ganar descuento</p>
                    </>
                  )}
                  <button onClick={() => { setShowPrize(false); initGame() }}
                          className="mt-2 text-xs text-white/30 hover:text-brand-gold transition">
                    <i className="fa-solid fa-rotate-right mr-1" /> Intentar de nuevo
                  </button>
                </div>
              </div>
            )}

            {/* Score overlay */}
            {started && !showPrize && (
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="bg-black/40 backdrop-blur-sm rounded-xl px-3 py-2">
                  <p className="text-[10px] text-white/40">NIVEL</p>
                  <p className="font-display text-2xl font-bold text-white">{score}</p>
                </div>
                {tier && (
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl px-3 py-2 text-right" style={{ boxShadow: `0 0 15px ${tier.glowColor}0.2)` }}>
                    <p className="text-[10px] text-white/40">DESCUENTO</p>
                    <p className="font-display text-lg font-bold" style={{ color: tier.color }}>{tier.discount}%</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Side: Tier Progress */}
          <div className="w-full lg:w-72 space-y-3">
            <h3 className="font-display text-lg font-bold text-white mb-6">
              <i className="fa-solid fa-trophy text-brand-amber mr-2" />
              Niveles de Descuento
            </h3>

            {TIERS.map((t, i) => {
              const reached = score >= t.level
              const isNext = nextTier?.level === t.level
              const wasJustUnlocked = justUnlocked === t.level

              return (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-xl transition-all duration-700"
                  style={{
                    border: reached
                      ? `2px solid ${t.color}90`
                      : isNext
                        ? '2px solid rgba(255,255,255,0.08)'
                        : '2px solid rgba(255,255,255,0.04)',
                    boxShadow: reached
                      ? `0 0 ${12 + i * 5}px ${t.glowColor}${wasJustUnlocked ? '0.6' : '0.25'}), inset 0 0 ${8 + i * 3}px ${t.glowColor}0.08)`
                      : 'none',
                    background: reached
                      ? `linear-gradient(135deg, ${t.glowColor}0.08), transparent)`
                      : 'rgba(255,255,255,0.015)',
                  }}
                >
                  {/* Blur overlay for locked tiers */}
                  {!reached && (
                    <div
                      className="absolute inset-0 z-10 backdrop-blur-[6px] bg-white/[0.02] transition-all duration-700"
                      style={{
                        backdropFilter: isNext ? 'blur(3px)' : 'blur(6px)',
                      }}
                    />
                  )}

                  {/* Unlock flash animation */}
                  {wasJustUnlocked && (
                    <div
                      className="absolute inset-0 z-20 animate-ping rounded-xl"
                      style={{
                        background: `${t.glowColor}0.3)`,
                        animationDuration: '0.8s',
                        animationIterationCount: '2',
                      }}
                    />
                  )}

                  <div className="relative flex items-center gap-4 p-4">
                    {/* Icon circle */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-700"
                      style={{
                        background: reached ? `${t.glowColor}0.15)` : 'rgba(255,255,255,0.03)',
                        border: `2px solid ${reached ? t.color + '60' : 'rgba(255,255,255,0.06)'}`,
                        boxShadow: reached ? `0 0 ${10 + i * 4}px ${t.glowColor}0.3)` : 'none',
                      }}
                    >
                      {reached
                        ? <i className="fa-solid fa-unlock text-base" style={{ color: t.color }} />
                        : <i className="fa-solid fa-lock text-white/15 text-sm" />
                      }
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span
                          className="text-base font-bold transition-all duration-700"
                          style={{
                            color: reached ? t.color : 'rgba(255,255,255,0.15)',
                            textShadow: reached ? `0 0 10px ${t.glowColor}0.5)` : 'none',
                          }}
                        >
                          {t.label}
                        </span>
                        <span
                          className="text-xs font-mono transition-all duration-700"
                          style={{ color: reached ? `${t.color}99` : 'rgba(255,255,255,0.1)' }}
                        >
                          Nv.{t.level}
                        </span>
                      </div>

                      {/* Progress bar for next tier */}
                      {isNext && !gameOver && started && (
                        <div className="mt-2">
                          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-300"
                              style={{
                                width: `${Math.min(100, (score / t.level) * 100)}%`,
                                background: `linear-gradient(90deg, ${t.color}80, ${t.color})`,
                                boxShadow: `0 0 8px ${t.glowColor}0.5)`,
                              }}
                            />
                          </div>
                          <p className="text-[10px] mt-1" style={{ color: `${t.color}60` }}>
                            {t.level - score} niveles más
                          </p>
                        </div>
                      )}

                      {/* Reached state */}
                      {reached && !isNext && (
                        <p className="text-[10px] mt-1 font-semibold" style={{ color: `${t.color}80` }}>
                          <i className="fa-solid fa-circle-check mr-1" />Desbloqueado
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}

            <div className="pt-4 border-t border-white/5">
              <p className="text-xs text-white/20 leading-relaxed">
                <i className="fa-solid fa-info-circle mr-1 text-brand-gold/40" />
                El código es válido por 24 horas. Aplica en cualquier producto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
