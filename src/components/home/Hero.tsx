'use client'
// Hero Section — exact match to mockup
// White left side with text, right side = hero-bg.png (the composite image)
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, BookOpen, Calendar, Linkedin, Facebook, Youtube, Mail } from 'lucide-react'

export function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: 720,
      paddingTop: 64,
      background: '#fff',
      overflow: 'hidden',
    }}>
      {/* Right side background image — fills ~58% from right */}
      <div style={{
        position: 'absolute',
        top: 0, bottom: 0,
        left: '38%', right: 0,
      }}>
        <img src="/hero-bg.png" alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'left center' }} />
        {/* Gradient fade from white on left edge of image */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.7) 15%, rgba(255,255,255,0.2) 35%, transparent 55%)',
        }} />
      </div>

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem',
        display: 'flex', alignItems: 'center',
        minHeight: 'calc(720px - 64px)',
        paddingTop: '2.5rem', paddingBottom: '2.5rem',
      }}>
        <div style={{ maxWidth: 500 }}>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{ color: '#F97316', fontWeight: 700, fontSize: '0.6875rem',
              letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Regional Professional Community
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.55 }}
            style={{ fontWeight: 900, color: '#0A2342', lineHeight: 1.1, marginBottom: '1.125rem',
              fontSize: 'clamp(1.875rem, 3.2vw, 3rem)' }}>
            Connecting Geoscience,<br />
            Formation Evaluation,<br />
            Drilling &amp; Upstream<br />
            Professionals
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            style={{ color: '#6B7280', fontSize: '0.9375rem', lineHeight: 1.7,
              maxWidth: '28rem', marginBottom: '1.875rem' }}>
            Advancing technical excellence through knowledge sharing, professional development,
            industry collaboration, and innovation across the energy sector.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.625rem', marginBottom: '1.625rem' }}>
            <Link href="/register" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: '#F97316', color: '#fff', fontWeight: 700,
              fontSize: '0.875rem', padding: '0.6875rem 1.25rem',
              borderRadius: 7, textDecoration: 'none',
              boxShadow: '0 3px 12px rgba(249,115,22,0.38)',
            }}>
              <Users size={15} /> Join GEOFERA
            </Link>
            <Link href="/training" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: '#fff', color: '#374151', fontWeight: 600,
              fontSize: '0.875rem', padding: '0.6875rem 1.25rem',
              borderRadius: 7, textDecoration: 'none',
              border: '1.5px solid #D1D5DB',
            }}>
              <BookOpen size={14} /> Explore Training
            </Link>
            <Link href="/events" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: '#fff', color: '#374151', fontWeight: 600,
              fontSize: '0.875rem', padding: '0.6875rem 1.25rem',
              borderRadius: 7, textDecoration: 'none',
              border: '1.5px solid #D1D5DB',
            }}>
              <Calendar size={14} /> Upcoming Events
            </Link>
          </motion.div>

          {/* Social row */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.56 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.8125rem', color: '#9CA3AF', fontWeight: 500, marginRight: '0.25rem' }}>
              Follow us on
            </span>
            {[
              { Icon: Linkedin, href: '#', color: '#0077B5' },
              { Icon: Facebook, href: '#', color: '#1877F2' },
              { Icon: Youtube,  href: '#', color: '#FF0000' },
              { Icon: Mail,     href: 'mailto:info@geofera.olinesia.com', color: '#6B7280' },
            ].map(({ Icon, href, color }, i) => (
              <a key={i} href={href} style={{
                width: 32, height: 32, borderRadius: '50%',
                border: '1.5px solid #E5E7EB',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color, textDecoration: 'none', background: '#fff', flexShrink: 0,
              }}>
                <Icon size={14} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
