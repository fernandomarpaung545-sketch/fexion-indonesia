'use client'
// src/components/home/Hero.tsx — GEOFERA Premium Hero
// Features: geological cross-section SVG, FE log animation, well trajectory, regional network

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Linkedin, Facebook, Youtube, Mail, Users, BookOpen, Globe } from 'lucide-react'

// ── Animated geological cross-section SVG ────────────────────────────
function GeologicalVisual() {
  const layers = [
    { y: 0,   h: 60,  color: '#bfdbfe', label: 'Quaternary',    opacity: 0.9 },
    { y: 60,  h: 50,  color: '#93c5fd', label: 'Miocene',       opacity: 0.85 },
    { y: 110, h: 70,  color: '#6ea8d8', label: 'Eocene',        opacity: 0.8 },
    { y: 180, h: 60,  color: '#4a7fa8', label: 'Paleocene',     opacity: 0.75 },
    { y: 240, h: 80,  color: '#d4a057', label: 'Reservoir',     opacity: 0.9 },
    { y: 320, h: 55,  color: '#c17a3a', label: 'Pre-Tertiary',  opacity: 0.7 },
    { y: 375, h: 65,  color: '#8B5A2B', label: 'Basement',      opacity: 0.65 },
  ]

  return (
    <svg viewBox="0 0 520 440" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <clipPath id="heroClip">
          <rect x="0" y="0" width="520" height="440" rx="20"/>
        </clipPath>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="reservoirGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#d97706" stopOpacity="0.7"/>
        </linearGradient>
        <pattern id="crosshatch" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M0,8 L8,0 M-1,1 L1,-1 M7,9 L9,7" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8"/>
        </pattern>
      </defs>

      <g clipPath="url(#heroClip)">
        {/* Sky / Water */}
        <rect x="0" y="0" width="520" height="440" fill="#0A2342"/>

        {/* Geological layers with wavy boundaries */}
        {layers.map((layer, i) => (
          <g key={i}>
            <motion.path
              initial={{ opacity: 0, scaleX: 0.8 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
              d={`M0,${layer.y} Q130,${layer.y - 8 + (i % 3) * 5} 260,${layer.y + 4 - (i % 2) * 6} Q390,${layer.y - 4 + (i % 4) * 4} 520,${layer.y + 2} L520,${layer.y + layer.h} Q390,${layer.y + layer.h + 3} 260,${layer.y + layer.h - 2} Q130,${layer.y + layer.h + 5} 0,${layer.y + layer.h} Z`}
              fill={layer.color}
              fillOpacity={layer.opacity}
            />
            {/* Crosshatch overlay on reservoir */}
            {layer.label === 'Reservoir' && (
              <motion.path
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                d={`M0,${layer.y} Q130,${layer.y - 8} 260,${layer.y + 4} Q390,${layer.y - 4} 520,${layer.y + 2} L520,${layer.y + layer.h} Q390,${layer.y + layer.h + 3} 260,${layer.y + layer.h - 2} Q130,${layer.y + layer.h + 5} 0,${layer.y + layer.h} Z`}
                fill="url(#crosshatch)"
              />
            )}
            {/* Layer label */}
            <motion.text
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              x="14"
              y={layer.y + layer.h / 2 + 4}
              fontSize="9"
              fill="rgba(255,255,255,0.85)"
              fontFamily="system-ui"
              fontWeight="600"
              letterSpacing="0.5"
            >
              {layer.label.toUpperCase()}
            </motion.text>
          </g>
        ))}

        {/* ── Well trajectory ── */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 1.4, duration: 1.8, ease: 'easeInOut' }}
          d="M260,0 L260,180 Q260,210 275,230 Q290,250 310,260 L380,280"
          fill="none"
          stroke="#F97316"
          strokeWidth="3"
          strokeDasharray="6 3"
          filter="url(#glow)"
        />
        {/* Well head */}
        <motion.circle
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.3, type: 'spring' }}
          cx="260" cy="8" r="6" fill="#F97316"
        />
        {/* Perforation zone */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
          {[0,1,2,3].map(i => (
            <line key={i} x1="303" y1={256 + i * 7} x2="322" y2={254 + i * 7}
              stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round"/>
          ))}
        </motion.g>

        {/* ── FE Log tracks (right side) ── */}
        <g transform="translate(390, 0)">
          {/* Track backgrounds */}
          {['GR','RES','NPHI','RHOB'].map((log, i) => (
            <g key={log} transform={`translate(${i * 32}, 0)`}>
              <rect x="2" y="0" width="26" height="440" fill="rgba(255,255,255,0.04)" rx="2"/>
              <text x="15" y="10" fontSize="6" fill="rgba(255,255,255,0.5)" textAnchor="middle" fontFamily="monospace">{log}</text>
              {/* Animated log curve */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.9 }}
                transition={{ delay: 1.0 + i * 0.2, duration: 2.0 }}
                d={log === 'GR'
                  ? 'M15,20 L8,45 L18,70 L6,95 L14,120 L9,145 L16,170 L7,200 L20,230 L8,260 L19,290 L6,320 L15,350 L10,380 L15,440'
                  : log === 'RES'
                  ? 'M15,20 L22,50 L18,80 L24,110 L14,140 L26,170 L15,200 L24,235 L8,265 L26,300 L12,335 L24,360 L16,440'
                  : log === 'NPHI'
                  ? 'M15,20 L12,55 L16,85 L11,115 L17,145 L10,180 L18,210 L9,245 L17,275 L12,310 L16,345 L11,380 L15,440'
                  : 'M15,20 L19,52 L13,82 L21,112 L15,145 L20,178 L14,212 L22,245 L13,280 L21,315 L14,350 L20,385 L15,440'
                }
                fill="none"
                stroke={['#22C55E','#F97316','#2563EB','#a78bfa'][i]}
                strokeWidth="1.5"
              />
            </g>
          ))}
        </g>

        {/* ── Regional network dots ── */}
        {[
          {cx:80,  cy:60,  r:4,  delay:2.0},
          {cx:160, cy:100, r:3,  delay:2.1},
          {cx:200, cy:50,  r:5,  delay:2.2},
          {cx:100, cy:160, r:3,  delay:2.3},
          {cx:300, cy:80,  r:4,  delay:2.4},
          {cx:340, cy:150, r:3,  delay:2.5},
        ].map((dot, i) => (
          <motion.circle key={i} cx={dot.cx} cy={dot.cy} r={dot.r}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ delay: dot.delay, type: 'spring' }}
            fill="#22C55E"
          />
        ))}
        {/* Connection lines between network dots */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ delay: 2.8 }}>
          <line x1="80" y1="60" x2="160" y2="100" stroke="#22C55E" strokeWidth="1"/>
          <line x1="160" y1="100" x2="200" y2="50" stroke="#22C55E" strokeWidth="1"/>
          <line x1="160" y1="100" x2="100" y2="160" stroke="#22C55E" strokeWidth="1"/>
          <line x1="300" y1="80" x2="340" y2="150" stroke="#22C55E" strokeWidth="1"/>
          <line x1="200" y1="50" x2="300" y2="80" stroke="#22C55E" strokeWidth="1"/>
        </motion.g>

        {/* Depth scale */}
        {[0,100,200,300,400].map(d => (
          <g key={d}>
            <line x1="375" y1={d+20} x2="385" y2={d+20} stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
            <text x="372" y={d+24} fontSize="7" fill="rgba(255,255,255,0.4)" textAnchor="end" fontFamily="monospace">{d}</text>
          </g>
        ))}
        <text x="372" y="16" fontSize="7" fill="rgba(255,255,255,0.5)" textAnchor="end" fontFamily="monospace">mMD</text>

        {/* Gradient overlay at top */}
        <defs>
          <linearGradient id="topFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0A2342" stopOpacity="0.6"/>
            <stop offset="20%" stopColor="transparent" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="520" height="440" fill="url(#topFade)"/>
      </g>
    </svg>
  )
}

// ── Main Hero ─────────────────────────────────────────────────────────
export function Hero() {
  return (
    <section className="relative bg-[#0A2342] overflow-hidden" style={{ minHeight: 720, paddingTop: 64 }}>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
      }}/>

      <div className="container-tight relative z-10 flex items-center" style={{ minHeight: 656 }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-12">

          {/* LEFT: Text content */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase"
              style={{ background: 'rgba(249,115,22,0.15)', color: '#F97316', border: '1px solid rgba(249,115,22,0.3)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse"/>
              Regional Professional Community
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display font-black text-white leading-[1.08] mb-6"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}
            >
              Connecting{' '}
              <span style={{ color: '#22C55E' }}>Geoscience,</span>
              <br/>
              <span style={{ color: '#2563EB' }}>Formation Evaluation,</span>
              <br/>
              Drilling &amp;{' '}
              <span style={{ color: '#F97316' }}>Upstream</span>
              <br/>
              Professionals
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="text-base leading-relaxed mb-8 max-w-md"
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              Advancing technical excellence through knowledge sharing, professional development, industry collaboration, and innovation across the energy sector.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.48 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <Link href="/register" className="inline-flex items-center gap-2 font-bold text-white rounded-xl px-6 py-3 text-sm transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: '#F97316', boxShadow: '0 4px 20px rgba(249,115,22,0.4)' }}>
                <Users size={16}/> Join GEOFERA <ArrowRight size={14}/>
              </Link>
              <Link href="/training" className="inline-flex items-center gap-2 font-semibold rounded-xl px-6 py-3 text-sm transition-all hover:opacity-90"
                style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.9)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}>
                <BookOpen size={15}/> Explore Training
              </Link>
              <Link href="/events" className="inline-flex items-center gap-2 font-semibold rounded-xl px-6 py-3 text-sm transition-all hover:opacity-90"
                style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.9)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}>
                <Calendar size={15}/> Upcoming Events
              </Link>
            </motion.div>

            {/* Social follow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex items-center gap-3"
            >
              <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>Follow us on</span>
              {[
                { Icon: Linkedin, color: '#0077b5', href: '#' },
                { Icon: Facebook, color: '#1877f2', href: '#' },
                { Icon: Youtube,  color: '#ff0000', href: '#' },
                { Icon: Mail,     color: 'rgba(255,255,255,0.5)', href: 'mailto:info@geofera.olinesia.com' },
              ].map(({ Icon, color, href }, i) => (
                <a key={i} href={href}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color }}>
                  <Icon size={14}/>
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Geological visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
            style={{ height: 440, borderRadius: 20, overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}
          >
            <GeologicalVisual/>

            {/* Floating badge: Active Members */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0 }}
              className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold"
              style={{ background: 'rgba(10,35,66,0.85)', backdropFilter: 'blur(12px)', border: '1px solid rgba(34,197,94,0.4)', color: '#fff' }}
            >
              <Globe size={12} className="text-[#22C55E]"/> 3,000+ Members · 15+ Countries
            </motion.div>

            {/* Floating badge: Live indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.2, type: 'spring' }}
              className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold"
              style={{ background: 'rgba(10,35,66,0.85)', backdropFilter: 'blur(12px)', border: '1px solid rgba(249,115,22,0.4)', color: '#fff' }}
            >
              <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse"/> Well Active
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full" style={{ height: 48 }}>
          <path d="M0,48 L0,24 Q360,0 720,24 Q1080,48 1440,24 L1440,48 Z" fill="#fff"/>
        </svg>
      </div>
    </section>
  )
}
