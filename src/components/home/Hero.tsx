'use client'
// GEOFERA Premium Hero 2026
// Dark navy hero with technical geological SVG illustration
// Left: text content | Right: composite technical visualization

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, BookOpen, Calendar, ArrowRight, Linkedin, Facebook, Youtube, Mail } from 'lucide-react'

/* ══ Geological + FE + Well + Network SVG ══════════════════════════════ */
function HeroVisualization() {
  return (
    <svg
      viewBox="0 0 600 520"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{ maxHeight: 520 }}
    >
      <defs>
        {/* Layer gradients */}
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d2b5e" />
          <stop offset="100%" stopColor="#0a2342" />
        </linearGradient>
        <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e3a6e" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1a3a70" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="quat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
        <linearGradient id="mio" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5b9bd5" />
          <stop offset="100%" stopColor="#3a7bbf" />
        </linearGradient>
        <linearGradient id="eoc" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a90c4" />
          <stop offset="100%" stopColor="#2e6ea6" />
        </linearGradient>
        <linearGradient id="res" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="pre" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#92400e" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
        <linearGradient id="bmt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#57534e" />
          <stop offset="100%" stopColor="#44403c" />
        </linearGradient>
        {/* FE log colors */}
        <linearGradient id="grGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
        <linearGradient id="resGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <linearGradient id="nphiGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="rhobGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#6d28d9" />
        </linearGradient>
        {/* Glow filter */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <clipPath id="mainClip">
          <rect width="600" height="520" rx="20" />
        </clipPath>
        <pattern id="resHatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(255,200,0,0.25)" strokeWidth="2" />
        </pattern>
      </defs>

      <g clipPath="url(#mainClip)">
        {/* ── Background ── */}
        <rect width="600" height="520" fill="url(#sky)" />

        {/* Subtle grid */}
        <g stroke="rgba(255,255,255,0.04)" strokeWidth="1">
          {[0,60,120,180,240,300,360,420,480,540,600].map(x => (
            <line key={x} x1={x} y1="0" x2={x} y2="520" />
          ))}
          {[0,60,120,180,240,300,360,420,480,520].map(y => (
            <line key={y} x1="0" y1={y} x2="600" y2={y} />
          ))}
        </g>

        {/* ── GEOLOGICAL CROSS SECTION (main area) ── */}
        {/* Offshore water column */}
        <motion.path
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          d="M0,120 Q100,115 200,118 Q300,121 400,116 Q500,112 600,118 L600,175 Q500,169 400,173 Q300,177 200,173 Q100,169 0,175 Z"
          fill="url(#water)" opacity="0.7"
        />
        {/* Wave lines */}
        {[125,135,145].map((y, i) => (
          <motion.path key={i}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + i * 0.08 }}
            d={`M0,${y} Q150,${y - 4} 300,${y} Q450,${y + 4} 600,${y}`}
            fill="none" stroke="rgba(147,197,253,0.25)" strokeWidth="1.5"
          />
        ))}

        {/* Layer 1 — Quaternary */}
        <motion.path
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
          d="M0,175 Q100,169 200,173 Q300,177 400,172 Q500,167 600,172 L600,215 Q500,209 400,213 Q300,218 200,213 Q100,208 0,215 Z"
          fill="url(#quat)" opacity="0.88"
        />
        {/* Layer 2 — Miocene */}
        <motion.path
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42, duration: 0.6 }}
          d="M0,215 Q100,208 200,213 Q300,218 400,212 Q500,206 600,212 L600,265 Q500,258 400,263 Q300,269 200,263 Q100,257 0,265 Z"
          fill="url(#mio)" opacity="0.85"
        />
        {/* Layer 3 — Eocene */}
        <motion.path
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.54, duration: 0.6 }}
          d="M0,265 Q100,257 200,263 Q300,269 400,262 Q500,255 600,262 L600,315 Q500,307 400,312 Q300,318 200,312 Q100,306 0,315 Z"
          fill="url(#eoc)" opacity="0.82"
        />
        {/* Layer 4 — RESERVOIR ★ */}
        <motion.path
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.66, duration: 0.6 }}
          d="M0,315 Q100,306 200,312 Q300,318 400,310 Q500,302 600,310 L600,370 Q500,362 400,367 Q300,374 200,367 Q100,361 0,370 Z"
          fill="url(#res)" opacity="0.92"
        />
        {/* Reservoir hatch overlay */}
        <motion.path
          initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 1.0 }}
          d="M0,315 Q100,306 200,312 Q300,318 400,310 Q500,302 600,310 L600,370 Q500,362 400,367 Q300,374 200,367 Q100,361 0,370 Z"
          fill="url(#resHatch)"
        />
        {/* Layer 5 — Pre-Tertiary */}
        <motion.path
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.78, duration: 0.5 }}
          d="M0,370 Q100,361 200,367 Q300,374 400,365 Q500,357 600,365 L600,420 Q500,412 400,417 Q300,422 200,417 Q100,412 0,420 Z"
          fill="url(#pre)" opacity="0.78"
        />
        {/* Layer 6 — Basement */}
        <motion.path
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.88 }}
          d="M0,420 Q100,412 200,417 Q300,422 400,415 Q500,408 600,415 L600,520 L0,520 Z"
          fill="url(#bmt)" opacity="0.7"
        />

        {/* ── LAYER LABELS ── */}
        {[
          { y: 198, label: 'QUATERNARY',  color: 'rgba(147,197,253,0.9)' },
          { y: 244, label: 'MIOCENE',     color: 'rgba(91,155,213,0.9)' },
          { y: 294, label: 'EOCENE',      color: 'rgba(74,144,196,0.9)' },
          { y: 346, label: 'RESERVOIR ★', color: 'rgba(251,191,36,1.0)' },
          { y: 397, label: 'PRE-TERTIARY',color: 'rgba(180,130,60,0.9)' },
          { y: 460, label: 'BASEMENT',    color: 'rgba(180,170,160,0.8)' },
        ].map((l, i) => (
          <motion.text key={i} x="12" y={l.y}
            fontSize="8.5" fill={l.color}
            fontFamily="ui-monospace,monospace" fontWeight="700" letterSpacing="0.8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.08 }}
          >
            {l.label}
          </motion.text>
        ))}

        {/* ── DEPTH SCALE ── */}
        <g opacity="0.5">
          {[0, 500, 1000, 1500, 2000, 2500].map((d, i) => (
            <g key={d}>
              <line x1="165" y1={175 + i * 57} x2="172" y2={175 + i * 57}
                stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
              <text x="163" y={179 + i * 57} fontSize="7.5"
                fill="rgba(255,255,255,0.5)" textAnchor="end"
                fontFamily="ui-monospace,monospace">
                {d}m
              </text>
            </g>
          ))}
          <text x="163" y="170" fontSize="7" fill="rgba(255,255,255,0.4)"
            textAnchor="end" fontFamily="ui-monospace,monospace">TVDss</text>
        </g>

        {/* ── WELL TRAJECTORY ── */}
        {/* Wellhead platform */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
          {/* Platform legs */}
          <line x1="290" y1="80" x2="270" y2="120" stroke="#94a3b8" strokeWidth="2.5" />
          <line x1="310" y1="80" x2="330" y2="120" stroke="#94a3b8" strokeWidth="2.5" />
          <rect x="265" y="70" width="70" height="12" rx="3" fill="#1e40af" stroke="#3b82f6" strokeWidth="1" />
          {/* Derrick */}
          <line x1="300" y1="70" x2="300" y2="30" stroke="#60a5fa" strokeWidth="2" />
          <line x1="285" y1="70" x2="300" y2="30" stroke="#60a5fa" strokeWidth="1.5" />
          <line x1="315" y1="70" x2="300" y2="30" stroke="#60a5fa" strokeWidth="1.5" />
          {/* Cross pieces */}
          {[42, 54, 62].map(y => (
            <line key={y} x1={300 - (70 - y)} y1={y} x2={300 + (70 - y)} y2={y}
              stroke="#60a5fa" strokeWidth="1" opacity="0.6" />
          ))}
        </motion.g>

        {/* Vertical well bore */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.6, ease: 'easeInOut' }}
          d="M300,120 L300,290 Q300,310 315,325 Q330,340 355,348 L430,355"
          fill="none" stroke="#F97316" strokeWidth="3"
          style={{ strokeDasharray: '1000', strokeDashoffset: '1000' }}
          filter="url(#softGlow)"
        />

        {/* Casing shoes */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
          {[{ x: 300, y: 175, r: 5 }, { x: 300, y: 250, r: 4 }].map((c, i) => (
            <g key={i}>
              <circle cx={c.x} cy={c.y} r={c.r + 2} fill="none" stroke="#F97316" strokeWidth="1.5" opacity="0.4" />
              <circle cx={c.x} cy={c.y} r={c.r} fill="#F97316" opacity="0.8" />
            </g>
          ))}
        </motion.g>

        {/* Perforation markers in reservoir */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>
          {[338, 348, 358, 368].map((y, i) => {
            const xBase = 315 + (y - 290) * 0.43
            return (
              <g key={i}>
                <line x1={xBase} y1={y} x2={xBase + 18} y2={y - 2}
                  stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx={xBase + 18} cy={y - 2} r="2" fill="#fbbf24" />
              </g>
            )
          })}
          {/* Perfs label */}
          <text x="340" y="395" fontSize="7" fill="rgba(251,191,36,0.8)"
            fontFamily="ui-monospace,monospace" fontWeight="700">PERFS</text>
        </motion.g>

        {/* ── FE LOG PANEL ── */}
        <rect x="432" y="150" width="155" height="320" fill="rgba(0,0,0,0.35)" rx="8" />
        <rect x="432" y="150" width="155" height="320" fill="none"
          stroke="rgba(255,255,255,0.08)" strokeWidth="1" rx="8" />

        {/* Log track headers */}
        {[
          { x: 440, color: '#22C55E', label: 'GR' },
          { x: 477, color: '#F97316', label: 'RES' },
          { x: 514, color: '#2563EB', label: 'NPHI' },
          { x: 551, color: '#7C3AED', label: 'RHOB' },
        ].map((t, i) => (
          <g key={i}>
            <rect x={t.x} y="152" width="30" height="316" fill="rgba(255,255,255,0.02)" rx="4" />
            <text x={t.x + 15} y="164" fontSize="6.5" fill={t.color}
              textAnchor="middle" fontFamily="ui-monospace,monospace" fontWeight="800">
              {t.label}
            </text>
            {/* Track divider */}
            <line x1={t.x + 30} y1="155" x2={t.x + 30} y2="465"
              stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          </g>
        ))}

        {/* GR curve */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ delay: 0.9, duration: 2.0 }}
          d="M455,168 L448,190 L460,212 L445,236 L455,258 L442,282 L458,306 L446,330 L462,352 L448,376 L458,400 L444,424 L456,448 L455,465"
          fill="none" stroke="#22C55E" strokeWidth="1.8"
        />
        {/* GR fill */}
        <motion.path
          initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} transition={{ delay: 1.5 }}
          d="M455,168 L448,190 L460,212 L445,236 L455,258 L442,282 L458,306 L446,330 L462,352 L448,376 L458,400 L444,424 L456,448 L455,465 L470,465 L470,168 Z"
          fill="#22C55E"
        />

        {/* RES curve */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ delay: 1.0, duration: 2.0 }}
          d="M492,168 L500,195 L488,220 L502,245 L490,270 L505,295 L492,318 L506,340 L490,365 L505,388 L490,410 L504,432 L490,455 L492,465"
          fill="none" stroke="#F97316" strokeWidth="1.8"
        />

        {/* NPHI curve */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ delay: 1.1, duration: 2.0 }}
          d="M528,168 L524,192 L532,218 L522,244 L530,268 L518,294 L528,318 L520,342 L530,368 L520,390 L532,414 L522,438 L528,465"
          fill="none" stroke="#2563EB" strokeWidth="1.8"
        />

        {/* RHOB curve */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ delay: 1.2, duration: 2.0 }}
          d="M565,168 L572,196 L560,222 L574,248 L562,274 L576,300 L564,324 L578,348 L562,374 L574,396 L560,418 L575,442 L562,465"
          fill="none" stroke="#7C3AED" strokeWidth="1.8"
        />

        {/* Reservoir highlight on FE panel */}
        <motion.rect
          x="434" y="315" width="151" height="55"
          fill="rgba(251,191,36,0.08)"
          stroke="rgba(251,191,36,0.3)" strokeWidth="1" rx="4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        />
        <motion.text x="511" y="310" fontSize="6" fill="rgba(251,191,36,0.8)"
          textAnchor="middle" fontFamily="ui-monospace,monospace" fontWeight="700"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }}>
          PAY ZONE
        </motion.text>

        {/* ── REGIONAL NETWORK (top-left) ── */}
        {/* SEA outline (simplified) */}
        <motion.g
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
        >
          <ellipse cx="90" cy="65" rx="80" ry="55"
            fill="none" stroke="rgba(37,99,235,0.25)" strokeWidth="1" strokeDasharray="3 2" />

          {/* Country blobs */}
          {[
            { d: "M55,45 L65,40 L75,44 L78,55 L70,62 L58,60 L52,52 Z", fill: "rgba(37,99,235,0.4)" },
            { d: "M80,58 L92,54 L100,58 L102,68 L94,74 L83,70 Z", fill: "rgba(37,99,235,0.35)" },
            { d: "M48,65 L60,62 L65,70 L62,80 L52,82 L44,74 Z", fill: "rgba(34,197,94,0.4)" },
            { d: "M100,42 L110,38 L118,44 L116,54 L106,56 L98,50 Z", fill: "rgba(34,197,94,0.35)" },
            { d: "M120,55 L130,52 L136,60 L132,70 L122,68 Z", fill: "rgba(37,99,235,0.3)" },
          ].map((s, i) => (
            <path key={i} d={s.d} fill={s.fill} stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
          ))}

          {/* Network nodes */}
          {[
            { cx: 62, cy: 52, c: '#22C55E' }, { cx: 90, cy: 62, c: '#F97316' },
            { cx: 55, cy: 72, c: '#2563EB' }, { cx: 108, cy: 46, c: '#22C55E' },
            { cx: 126, cy: 60, c: '#7C3AED' }, { cx: 75, cy: 85, c: '#F97316' },
          ].map((n, i) => (
            <motion.g key={i}
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1, type: 'spring' }}
            >
              <circle cx={n.cx} cy={n.cy} r={5} fill={n.c} opacity={0.9} filter="url(#softGlow)" />
              <circle cx={n.cx} cy={n.cy} r={8} fill={n.c} opacity={0.2} />
            </motion.g>
          ))}

          {/* Connection lines */}
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 1.4 }}>
            <line x1="62" y1="52"  x2="90" y2="62"  stroke="#22C55E" strokeWidth="1.2" />
            <line x1="90" y1="62"  x2="55" y2="72"  stroke="#F97316" strokeWidth="1.2" />
            <line x1="90" y1="62"  x2="108" y2="46" stroke="#22C55E" strokeWidth="1.2" />
            <line x1="108" y1="46" x2="126" y2="60" stroke="#F97316" strokeWidth="1.2" />
            <line x1="90" y1="62"  x2="75" y2="85"  stroke="#2563EB" strokeWidth="1.2" />
          </motion.g>

          <text x="90" y="108" fontSize="8" fill="rgba(255,255,255,0.45)"
            textAnchor="middle" fontFamily="system-ui" fontWeight="600" letterSpacing="0.5">
            REGIONAL NETWORK
          </text>
        </motion.g>

        {/* ── FLOATING DATA BADGES ── */}
        {/* Members badge */}
        <motion.g initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.0 }}>
          <rect x="12" y="130" width="145" height="36" rx="8"
            fill="rgba(10,35,66,0.85)" stroke="rgba(34,197,94,0.5)" strokeWidth="1"
            style={{ backdropFilter: 'blur(12px)' }} />
          <circle cx="30" cy="148" r="7" fill="rgba(34,197,94,0.2)" />
          <circle cx="30" cy="148" r="4" fill="#22C55E" />
          <text x="42" y="144" fontSize="9.5" fill="#fff" fontWeight="800"
            fontFamily="system-ui">3,000+</text>
          <text x="42" y="155" fontSize="7.5" fill="rgba(255,255,255,0.55)"
            fontFamily="system-ui">Members · 15+ Countries</text>
        </motion.g>

        {/* Well active badge */}
        <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.3, type: 'spring' }}>
          <rect x="352" y="380" width="74" height="26" rx="7"
            fill="rgba(10,35,66,0.9)" stroke="rgba(249,115,22,0.5)" strokeWidth="1" />
          <circle cx="364" cy="393" r="4" fill="#F97316">
            <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
          </circle>
          <text x="373" y="397" fontSize="7.5" fill="#fff" fontWeight="700"
            fontFamily="system-ui">LIVE WELL</text>
        </motion.g>

        {/* ── TOP GRADIENT ── */}
        <defs>
          <linearGradient id="topMask" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0A2342" stopOpacity="0.4" />
            <stop offset="15%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <rect width="600" height="520" fill="url(#topMask)" />
      </g>
    </svg>
  )
}

/* ══ Counter component ════════════════════════════════════════════════ */
function LiveCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  return (
    <span className="tabular-nums">
      {target.toLocaleString()}{suffix}
    </span>
  )
}

/* ══ Main Hero ════════════════════════════════════════════════════════ */
export function Hero() {
  const socials = [
    { Icon: Linkedin, href: 'https://linkedin.com/company/geofera-indonesia', label: 'LinkedIn' },
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Youtube,  href: '#', label: 'YouTube' },
    { Icon: Mail,     href: 'mailto:info@geofera.olinesia.com', label: 'Email' },
  ]

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--geo-navy)', minHeight: 760, paddingTop: 64 }}
    >
      {/* Subtle mesh grid */}
      <div className="absolute inset-0 opacity-30 bg-grid-pattern pointer-events-none" />

      {/* Orange glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(249,115,22,0.08) 0%,transparent 70%)' }} />

      <div className="container-geo relative z-10 flex items-center"
        style={{ minHeight: 696, paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center w-full">

          {/* ── LEFT: Content ── */}
          <div className="order-2 lg:order-1">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="eyebrow mb-5"
            >
              Regional Professional Community
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="font-display font-black text-white mb-5 leading-[1.07]"
              style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}
            >
              Connecting{' '}
              <span style={{ color: '#22C55E' }}>Geoscience,</span>
              <br />
              <span style={{ color: '#60a5fa' }}>Formation Evaluation,</span>
              <br />
              Drilling &amp;{' '}
              <span style={{ color: '#F97316' }}>Upstream</span>
              <br />
              <span className="text-white">Professionals</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.33 }}
              className="text-base leading-relaxed mb-8 max-w-md"
              style={{ color: 'rgba(255,255,255,0.62)' }}
            >
              A regional platform advancing technical excellence through knowledge sharing,
              professional development, collaboration, and innovation across the energy sector.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.46 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <Link href="/register" className="btn btn-primary btn-lg">
                <Users size={16} /> Join GEOFERA <ArrowRight size={14} />
              </Link>
              <Link href="/training" className="btn btn-secondary btn-lg">
                <BookOpen size={15} /> Explore Training
              </Link>
              <Link href="/events" className="btn btn-secondary btn-lg">
                <Calendar size={15} /> Upcoming Events
              </Link>
            </motion.div>

            {/* Social row */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.62 }}
              className="flex items-center gap-2.5"
            >
              <span className="text-xs font-medium mr-1" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Follow us on
              </span>
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.6)',
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Technical visualization ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="order-1 lg:order-2 relative"
            style={{
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: '0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)',
              height: 'clamp(340px,50vw,520px)',
            }}
          >
            <HeroVisualization />
          </motion.div>

        </div>
      </div>

      {/* Bottom wave into white */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 52" preserveAspectRatio="none" className="w-full" style={{ height: 52 }}>
          <path d="M0,52 L0,28 Q360,4 720,28 Q1080,52 1440,28 L1440,52 Z" fill="#fff" />
        </svg>
      </div>
    </section>
  )
}
