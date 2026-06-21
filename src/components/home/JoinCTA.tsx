'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function JoinCTA() {
  return (
    <section style={{ background: '#0A2342', padding: '4rem 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(37,99,235,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(249,115,22,0.1) 0%, transparent 60%)' }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', position: 'relative', textAlign: 'center' }}>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ fontWeight: 900, fontSize: 'clamp(1.75rem, 2.5vw, 2.75rem)', color: '#fff', marginBottom: '1rem' }}>
          Join the GEOFERA Community
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          style={{ color: '#94a3b8', fontSize: '1rem', marginBottom: '2.5rem' }}>
          Shape the future of technical excellence together.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/register" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#F97316', color: '#fff', fontWeight: 700, fontSize: '1rem', padding: '0.875rem 2rem', borderRadius: 10, textDecoration: 'none' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            Join GEOFERA
          </Link>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1.5px solid #334155', color: '#e2e8f0', fontWeight: 600, fontSize: '1rem', padding: '0.875rem 2rem', borderRadius: 10, textDecoration: 'none' }}>
            Become a Speaker
          </Link>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1.5px solid #334155', color: '#e2e8f0', fontWeight: 600, fontSize: '1rem', padding: '0.875rem 2rem', borderRadius: 10, textDecoration: 'none' }}>
            Become a Partner
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
