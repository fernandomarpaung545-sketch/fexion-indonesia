'use client'
// src/components/home/Hero.tsx — pixel-perfect rebuild

import Link from 'next/link'
import { ArrowRight, Play, Search, LogIn } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="bg-white w-full flex flex-col" style={{ minHeight: '100vh' }}>

      {/* ── HERO BODY ─────────────────────────────────────────────────── */}
      <div className="relative flex-1 overflow-hidden" style={{ minHeight: '620px' }}>

        {/* === BACKGROUND IMAGE === */}
        <div className="absolute inset-0">
          <img
            src="/hero-bg.png"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* strong white fade from left — covers ~45% width */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, #ffffff 0%, #ffffff 38%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0.2) 62%, transparent 75%)',
            }}
          />
          {/* subtle top fade */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/40 to-transparent" />
          {/* bottom fade into white for cards */}
          <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-white via-white/60 to-transparent" />
        </div>

        {/* === CONTENT GRID === */}
        <div className="relative w-full h-full" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div className="flex items-start justify-between pt-14" style={{ minHeight: '580px' }}>

            {/* ── LEFT: Headline + sub + CTAs ── */}
            <div style={{ width: '38%', paddingTop: '1.5rem' }}>

              {/* Main headline */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                style={{
                  fontFamily: 'var(--font-display, system-ui)',
                  fontWeight: 900,
                  fontSize: 'clamp(2rem, 3.2vw, 3.2rem)',
                  lineHeight: 1.12,
                  color: '#0d1b2e',
                  marginBottom: '1.25rem',
                }}
              >
                Connecting{' '}
                <span style={{ color: '#16a34a' }}>Geoscience,</span>
                <br />
                <span style={{ color: '#1d4ed8' }}>Operations &amp;</span>
                <br />
                <span style={{ color: '#f97316' }}>Formation Evaluation</span>
                <br />
                Professionals
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.3 }}
                style={{
                  color: '#6b7280',
                  fontSize: '0.9375rem',
                  lineHeight: 1.65,
                  maxWidth: '22rem',
                  marginBottom: '2rem',
                }}
              >
                The leading community for subsurface professionals to share knowledge, collaborate, and grow together across the upstream industry.
              </motion.p>

              {/* CTA row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}
              >
                <Link
                  href="/register"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    background: '#1d4ed8', color: '#fff',
                    fontWeight: 600, fontSize: '0.875rem',
                    padding: '0.75rem 1.375rem', borderRadius: '0.5rem',
                    textDecoration: 'none', whiteSpace: 'nowrap',
                  }}
                >
                  Join the Community <ArrowRight size={15} />
                </Link>

                <Link
                  href="/events"
                  style={{
                    display: 'inline-flex', alignItems: 'center',
                    border: '1.5px solid #d1d5db', color: '#374151',
                    fontWeight: 600, fontSize: '0.875rem',
                    padding: '0.75rem 1.375rem', borderRadius: '0.5rem',
                    textDecoration: 'none', background: 'white', whiteSpace: 'nowrap',
                  }}
                >
                  Explore Events
                </Link>

                <Link
                  href="/events"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    color: '#6b7280', fontWeight: 500, fontSize: '0.8125rem',
                    textDecoration: 'none',
                  }}
                >
                  <span style={{
                    width: '2rem', height: '2rem', borderRadius: '50%',
                    border: '1.5px solid #d1d5db',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Play size={11} style={{ marginLeft: '2px', fill: '#6b7280', color: '#6b7280' }} />
                  </span>
                  View Upcoming Events
                </Link>
              </motion.div>
            </div>

            {/* ── RIGHT: Discipline icon list ── */}
            <div style={{ width: '22%', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {[
                {
                  bg: '#16a34a', textColor: '#16a34a', title: 'GEOSCIENCE',
                  sub: 'Understand the Earth.\nUncover Possibilities.',
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
                      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  ),
                },
                {
                  bg: '#1d4ed8', textColor: '#1d4ed8', title: 'FORMATION\nEVALUATION',
                  sub: 'Quantify Reservoir.\nReduce Uncertainty.',
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
                      <rect x="3" y="3" width="4" height="18" rx="1"/><rect x="10" y="8" width="4" height="13" rx="1"/><rect x="17" y="5" width="4" height="16" rx="1"/>
                    </svg>
                  ),
                },
                {
                  bg: '#f97316', textColor: '#f97316', title: 'DRILLING',
                  sub: 'Drill Smarter.\nOperate Safely.',
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
                      <path d="M12 2L8 6h8l-4-4z"/><rect x="10" y="6" width="4" height="12"/><path d="M8 18h8l2 4H6l2-4z"/>
                    </svg>
                  ),
                },
                {
                  bg: '#0f2744', textColor: '#0f2744', title: 'UPSTREAM',
                  sub: 'Optimize Performance.\nCreate Value.',
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
                    </svg>
                  ),
                },
              ].map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + i * 0.1 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    background: 'rgba(255,255,255,0.92)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '0.875rem',
                    padding: '0.625rem 0.875rem',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
                  }}
                >
                  <div style={{
                    width: '2.75rem', height: '2.75rem', borderRadius: '50%',
                    background: d.bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {d.svg}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.7rem', color: d.textColor, lineHeight: 1.3, whiteSpace: 'pre-line' }}>{d.title}</div>
                    <div style={{ fontSize: '0.65rem', color: '#9ca3af', lineHeight: 1.4, whiteSpace: 'pre-line', marginTop: '0.125rem' }}>{d.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* ── IMAGE CARDS ─────────────────────────────────────────── */}
        <div className="relative" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', paddingBottom: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
            {[
              { label: 'Geoscience',           accent: '#16a34a', img: 'https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?w=500&h=320&fit=crop&q=85' },
              { label: 'Formation\nEvaluation', accent: '#1d4ed8', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=320&fit=crop&q=85' },
              { label: 'Drilling',              accent: '#f97316', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=320&fit=crop&q=85' },
              { label: 'Upstream',              accent: '#6366f1', img: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=500&h=320&fit=crop&q=85' },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + i * 0.1 }}
                className="group"
                style={{
                  position: 'relative', borderRadius: '0.75rem',
                  overflow: 'hidden', height: '9rem', cursor: 'pointer',
                }}
              >
                <img
                  src={card.img}
                  alt={card.label}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', display: 'block' }}
                  className="group-hover:scale-105"
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)',
                }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0.75rem' }}>
                  <div style={{ width: '1.5rem', height: '2px', background: card.accent, marginBottom: '0.375rem' }} />
                  <div style={{ color: 'white', fontWeight: 700, fontSize: '0.875rem', lineHeight: 1.3, whiteSpace: 'pre-line' }}>{card.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* ── STATS BAR ─────────────────────────────────────────────── */}
      <div style={{
        borderTop: '1px solid #f3f4f6',
        background: '#ffffff',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* subtle world map bg */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 400'%3E%3Ccircle cx='100' cy='200' r='3' fill='%231d4ed8'/%3E%3Ccircle cx='300' cy='150' r='3' fill='%231d4ed8'/%3E%3Ccircle cx='500' cy='220' r='3' fill='%231d4ed8'/%3E%3Ccircle cx='700' cy='180' r='3' fill='%231d4ed8'/%3E%3Ccircle cx='900' cy='210' r='3' fill='%231d4ed8'/%3E%3Ccircle cx='1100' cy='160' r='3' fill='%231d4ed8'/%3E%3C/svg%3E")`,
        }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1.25rem 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem' }}>
            {[
              { icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" style={{ width: 28, height: 28 }}>
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                ), value: '2,800+', label: 'Members', color: '#16a34a' },
              { icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" style={{ width: 28, height: 28 }}>
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                ), value: '120+', label: 'Trainings', color: '#1d4ed8' },
              { icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" style={{ width: 28, height: 28 }}>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>
                  </svg>
                ), value: '60+', label: 'Events Hosted', color: '#f97316' },
              { icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#0f2744" strokeWidth="2" style={{ width: 28, height: 28 }}>
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                ), value: 'Regional', label: 'Community', color: '#0f2744' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderRight: i < 3 ? '1px solid #f3f4f6' : 'none', paddingRight: '1rem' }}
              >
                <div style={{ flexShrink: 0 }}>{s.icon}</div>
                <div>
                  <div style={{ fontWeight: 900, fontSize: '1.5rem', lineHeight: 1, color: s.color }}>{s.value}</div>
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.125rem' }}>{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
