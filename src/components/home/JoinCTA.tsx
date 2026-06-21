'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function JoinCTA() {
  return (
    <section style={{ background: '#0d1b2e', padding: '2rem 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <h2 style={{ fontWeight: 800, fontSize: '1.375rem', color: '#fff', marginBottom: 4 }}>Join the GEOFERA Community</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9375rem' }}>Shape the future of technical excellence together.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', flexWrap: 'wrap' }}>
          <Link href="/register" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#f97316', color: '#fff', fontWeight: 700, fontSize: '0.9375rem', padding: '0.75rem 1.75rem', borderRadius: 8, textDecoration: 'none' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            Join GEOFERA
          </Link>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1.5px solid #334155', color: '#e2e8f0', fontWeight: 600, fontSize: '0.9375rem', padding: '0.75rem 1.75rem', borderRadius: 8, textDecoration: 'none' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/><path d="M19 8H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2z"/><path d="M12 16v6"/></svg>
            Become a Speaker
          </Link>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1.5px solid #334155', color: '#e2e8f0', fontWeight: 600, fontSize: '0.9375rem', padding: '0.75rem 1.75rem', borderRadius: 8, textDecoration: 'none' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            Become a Partner
          </Link>
        </div>
      </div>
    </section>
  )
}
