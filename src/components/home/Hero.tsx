'use client'
import Link from 'next/link'
import { ArrowRight, Calendar, Linkedin, Facebook, Youtube, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section style={{ background: '#fff', paddingTop: 64, minHeight: '90vh', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center', minHeight: 'calc(90vh - 64px)', paddingTop: '3rem', paddingBottom: '3rem' }}>

        {/* LEFT */}
        <div style={{ zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{ color: '#f97316', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Regional Professional Community
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ fontWeight: 900, fontSize: 'clamp(2rem, 3.5vw, 3.25rem)', lineHeight: 1.12, color: '#0d1b2e', marginBottom: '1.25rem' }}>
            Connecting Geoscience,<br />
            Formation Evaluation,<br />
            Drilling &amp; Upstream<br />
            Professionals
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            style={{ color: '#6b7280', fontSize: '1rem', lineHeight: 1.7, maxWidth: '28rem', marginBottom: '2rem' }}>
            Advancing technical excellence through knowledge sharing, professional development, industry collaboration, and innovation across the energy sector.
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <Link href="/register" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#f97316', color: '#fff', fontWeight: 700, fontSize: '0.9375rem', padding: '0.75rem 1.5rem', borderRadius: 8, textDecoration: 'none' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              Join GEOFERA
            </Link>
            <Link href="/training" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1.5px solid #d1d5db', color: '#374151', fontWeight: 600, fontSize: '0.9375rem', padding: '0.75rem 1.5rem', borderRadius: 8, textDecoration: 'none', background: '#fff' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              Explore Training
            </Link>
            <Link href="/events" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1.5px solid #d1d5db', color: '#374151', fontWeight: 600, fontSize: '0.9375rem', padding: '0.75rem 1.5rem', borderRadius: 8, textDecoration: 'none', background: '#fff' }}>
              <Calendar size={16} />
              Upcoming Events
            </Link>
          </motion.div>

          {/* Social */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.8125rem', color: '#9ca3af', fontWeight: 500 }}>Follow us on</span>
            {[
              { Icon: Linkedin, href: '#', color: '#0077b5' },
              { Icon: Facebook, href: '#', color: '#1877f2' },
              { Icon: Youtube,  href: '#', color: '#ff0000' },
              { Icon: Mail,     href: 'mailto:info@geofera.olinesia.com', color: '#6b7280' },
            ].map(({ Icon, href, color }, i) => (
              <a key={i} href={href} style={{ width: 34, height: 34, borderRadius: '50%', border: '1.5px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color, textDecoration: 'none' }}>
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — hero image */}
        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7 }}
          style={{ position: 'relative', height: '75vh', maxHeight: 620, borderRadius: 16, overflow: 'hidden' }}>
          <img src="/hero-bg.png" alt="GEOFERA Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(13,27,46,0.15) 0%, transparent 60%)' }} />
        </motion.div>
      </div>
    </section>
  )
}
