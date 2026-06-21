'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, Mic, Handshake } from 'lucide-react'

export function JoinCTA() {
  return (
    <section className="relative py-20 overflow-hidden" style={{ background: '#0A2342' }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(ellipse 60% 80% at 20% 50%, rgba(37,99,235,0.18) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 80% 50%, rgba(249,115,22,0.12) 0%, transparent 70%)',
      }}/>

      <div className="container-tight relative z-10">
        <div className="text-center mb-10">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display font-black text-white mb-3"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}>
            Join the GEOFERA Community
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-base" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Shape the future of technical excellence together.
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/register"
            className="inline-flex items-center gap-2 font-bold text-white rounded-xl px-7 py-3.5 text-sm transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: '#F97316', boxShadow: '0 4px 24px rgba(249,115,22,0.4)' }}>
            <Users size={17}/> Join GEOFERA
          </Link>
          <Link href="/contact"
            className="inline-flex items-center gap-2 font-semibold rounded-xl px-7 py-3.5 text-sm transition-all hover:opacity-80"
            style={{ border: '1.5px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.85)', background: 'rgba(255,255,255,0.06)' }}>
            <Mic size={16}/> Become a Speaker
          </Link>
          <Link href="/contact"
            className="inline-flex items-center gap-2 font-semibold rounded-xl px-7 py-3.5 text-sm transition-all hover:opacity-80"
            style={{ border: '1.5px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.85)', background: 'rgba(255,255,255,0.06)' }}>
            <Handshake size={16}/> Become a Partner
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
