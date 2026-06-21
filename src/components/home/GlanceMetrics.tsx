'use client'
// GEOFERA at a Glance — animated counters
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const start = performance.now()
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1)
            const ease = 1 - Math.pow(1 - p, 3)
            setCount(Math.floor(ease * end))
            if (p < 1) requestAnimationFrame(tick)
            else setCount(end)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [end])

  return (
    <div ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </div>
  )
}

const stats = [
  {
    value: 3000, suffix: '+',
    label: 'Members',
    sub: 'Growing community of professionals',
    color: '#0A2342', bg: '#e8edf5',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0A2342" strokeWidth="1.8" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    value: 150, suffix: '+',
    label: 'Technical Sessions',
    sub: 'Knowledge sharing and learning',
    color: '#22C55E', bg: '#dcfce7',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="1.8" strokeLinecap="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    value: 80, suffix: '+',
    label: 'Events Hosted',
    sub: 'Webinars, workshops & conferences',
    color: '#F97316', bg: '#ffedd5',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>
      </svg>
    ),
  },
  {
    value: 15, suffix: '+',
    label: 'Countries Represented',
    sub: 'Regional reach, global impact',
    color: '#7C3AED', bg: '#ede9fe',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
]

export function GlanceMetrics() {
  return (
    <section className="bg-white section-py-sm" style={{ borderBottom: '1px solid #f1f5f9' }}>
      <div className="container-geo">
        <div className="text-center mb-10">
          <span className="eyebrow">GEOFERA at a Glance</span>
        </div>
        <div className="grid-responsive-4">
          {stats.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card p-7 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: s.bg }}>
                {s.icon}
              </div>
              <div className="font-display font-black mb-1"
                style={{ fontSize: '2.25rem', lineHeight: 1, color: s.color }}>
                <Counter end={s.value} suffix={s.suffix} />
              </div>
              <div className="font-bold text-sm text-gray-900 mb-1">{s.label}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
