'use client'
// CTA Banner — dark navy, 3 buttons matching mockup
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, Mic, Handshake } from 'lucide-react'

export function CTABanner() {
  return (
    <section style={{
      background: '#0A2342',
      padding: '1.75rem 0',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(ellipse 50% 120% at 50% 50%, rgba(37,99,235,0.12) 0%, transparent 70%)',
      }}/>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', position: 'relative',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>

        {/* Left: text */}
        <div>
          <h2 style={{ fontWeight: 800, fontSize: '1.3125rem', color: '#fff', marginBottom: 3 }}>
            Join the GEOFERA Community
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
            Shape the future of technical excellence together.
          </p>
        </div>

        {/* Right: 3 buttons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}
        >
          <Link href="/register" style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: '#F97316', color: '#fff',
            fontWeight: 700, fontSize: '0.9rem',
            padding: '0.75rem 1.625rem', borderRadius: 8,
            textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(249,115,22,0.4)',
          }}>
            <Users size={16}/> Join GEOFERA
          </Link>
          <Link href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            border: '1.5px solid rgba(255,255,255,0.2)',
            color: '#e2e8f0', fontWeight: 600, fontSize: '0.9rem',
            padding: '0.75rem 1.625rem', borderRadius: 8,
            textDecoration: 'none', background: 'rgba(255,255,255,0.06)',
          }}>
            <Mic size={15}/> Become a Speaker
          </Link>
          <Link href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            border: '1.5px solid rgba(255,255,255,0.2)',
            color: '#e2e8f0', fontWeight: 600, fontSize: '0.9rem',
            padding: '0.75rem 1.625rem', borderRadius: 8,
            textDecoration: 'none', background: 'rgba(255,255,255,0.06)',
          }}>
            <Handshake size={15}/> Become a Partner
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
