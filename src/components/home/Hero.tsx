'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, BookOpen, Calendar, Linkedin, Facebook, Youtube, Mail } from 'lucide-react'

/* ═══════════════════════════════════════════════════════════════
   GEOFERA TECHNICAL VISUALIZATION SVG
   - Geological cross-section (6 stratigraphic layers)
   - Formation evaluation log tracks (GR, RES, NPHI, RHOB)
   - Well trajectory with casing shoes & perforations
   - Offshore platform / derrick
   - Regional SEA network map
   - Floating data badges
═══════════════════════════════════════════════════════════════ */
function TechViz() {
  return (
    <svg
      viewBox="0 0 620 540"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
      aria-label="GEOFERA Technical Visualization"
    >
      <defs>
        {/* ── Geological layer fills ── */}
        <linearGradient id="g-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e3a6e" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#1a3670" stopOpacity="0.45" />
        </linearGradient>
        <linearGradient id="g-quat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bfdbfe" />
          <stop offset="100%" stopColor="#93c5fd" />
        </linearGradient>
        <linearGradient id="g-mio" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6ea8d8" />
          <stop offset="100%" stopColor="#4a86be" />
        </linearGradient>
        <linearGradient id="g-eoc" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a7ab4" />
          <stop offset="100%" stopColor="#2e5e96" />
        </linearGradient>
        <linearGradient id="g-res" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="g-pre" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a16207" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
        <linearGradient id="g-bmt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#57534e" />
          <stop offset="100%" stopColor="#3d3935" />
        </linearGradient>

        {/* ── Background ── */}
        <linearGradient id="g-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d2654" />
          <stop offset="100%" stopColor="#0a2342" />
        </linearGradient>

        {/* ── Reservoir hatch pattern ── */}
        <pattern id="p-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(255,200,0,0.22)" strokeWidth="2.5" />
        </pattern>

        {/* ── Subtle dot grid ── */}
        <pattern id="p-dot" width="36" height="36" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.06)" />
        </pattern>

        {/* ── Filters ── */}
        <filter id="f-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="f-soft" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="1.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>

        {/* ── Clip ── */}
        <clipPath id="c-main"><rect width="620" height="540" rx="20" /></clipPath>

        {/* ── Top fade ── */}
        <linearGradient id="g-topfade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a2342" stopOpacity="0.55" />
          <stop offset="20%" stopColor="transparent" />
        </linearGradient>
      </defs>

      <g clipPath="url(#c-main)">

        {/* ══ BACKGROUND ══ */}
        <rect width="620" height="540" fill="url(#g-bg)" />
        <rect width="620" height="540" fill="url(#p-dot)" />

        {/* ══ GEOLOGICAL CROSS-SECTION ══ */}

        {/* Water column */}
        <motion.path
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
          d="M0,118 Q155,112 310,116 Q465,120 620,113 L620,162 Q465,168 310,163 Q155,158 0,165 Z"
          fill="url(#g-water)"
        />
        {/* Wave lines */}
        {[124, 135, 146].map((y, i) => (
          <path key={i}
            d={`M0,${y} Q155,${y - 5 + i * 2} 310,${y} Q465,${y + 4 - i * 2} 620,${y}`}
            fill="none" stroke="rgba(147,197,253,0.2)" strokeWidth="1.5"
          />
        ))}

        {/* Layer 1 — Quaternary */}
        <motion.path
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22, duration: 0.5 }}
          d="M0,165 Q155,158 310,163 Q465,168 620,161 L620,208 Q465,215 310,209 Q155,203 0,210 Z"
          fill="url(#g-quat)" opacity="0.9"
        />
        {/* Layer 2 — Miocene */}
        <motion.path
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.34, duration: 0.5 }}
          d="M0,210 Q155,203 310,209 Q465,215 620,208 L620,260 Q465,267 310,261 Q155,255 0,262 Z"
          fill="url(#g-mio)" opacity="0.88"
        />
        {/* Layer 3 — Eocene */}
        <motion.path
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.46, duration: 0.5 }}
          d="M0,262 Q155,255 310,261 Q465,267 620,260 L620,315 Q465,322 310,315 Q155,308 0,315 Z"
          fill="url(#g-eoc)" opacity="0.86"
        />
        {/* Layer 4 — RESERVOIR ★ */}
        <motion.path
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.58, duration: 0.5 }}
          d="M0,315 Q155,308 310,315 Q465,322 620,315 L620,375 Q465,382 310,375 Q155,368 0,375 Z"
          fill="url(#g-res)" opacity="0.95"
        />
        {/* Reservoir hatch */}
        <motion.path
          initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 0.85 }}
          d="M0,315 Q155,308 310,315 Q465,322 620,315 L620,375 Q465,382 310,375 Q155,368 0,375 Z"
          fill="url(#p-hatch)"
        />
        {/* Layer 5 — Pre-Tertiary */}
        <motion.path
          initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.45 }}
          d="M0,375 Q155,368 310,375 Q465,382 620,375 L620,430 Q465,437 310,430 Q155,423 0,430 Z"
          fill="url(#g-pre)" opacity="0.8"
        />
        {/* Layer 6 — Basement */}
        <motion.path
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          d="M0,430 Q155,423 310,430 Q465,437 620,430 L620,540 L0,540 Z"
          fill="url(#g-bmt)" opacity="0.72"
        />

        {/* ── LAYER LABELS ── */}
        {[
          { y: 189, text: 'QUATERNARY',   col: 'rgba(191,219,254,0.85)' },
          { y: 237, text: 'MIOCENE',      col: 'rgba(110,168,216,0.85)' },
          { y: 290, text: 'EOCENE',       col: 'rgba(100,145,195,0.85)' },
          { y: 347, text: '★  RESERVOIR', col: 'rgba(251,191,36,1.0)'   },
          { y: 405, text: 'PRE-TERTIARY', col: 'rgba(185,135,65,0.85)'  },
          { y: 468, text: 'BASEMENT',     col: 'rgba(175,165,155,0.75)' },
        ].map((l, i) => (
          <motion.text key={i} x="12" y={l.y}
            fontSize="8.5" fill={l.col}
            fontFamily="ui-monospace,Consolas,monospace" fontWeight="700" letterSpacing="0.6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + i * 0.08 }}
          >
            {l.text}
          </motion.text>
        ))}

        {/* ── DEPTH SCALE ── */}
        {[0, 500, 1000, 1500, 2000, 2500].map((d, i) => (
          <g key={d} opacity="0.45">
            <line x1="170" y1={165 + i * 53} x2="178" y2={165 + i * 53}
              stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
            <text x="168" y={169 + i * 53} fontSize="7.5" fill="rgba(255,255,255,0.5)"
              textAnchor="end" fontFamily="ui-monospace,monospace">{d}m</text>
          </g>
        ))}
        <text x="168" y="160" fontSize="7" fill="rgba(255,255,255,0.35)"
          textAnchor="end" fontFamily="ui-monospace,monospace">TVDss</text>

        {/* ══ OFFSHORE PLATFORM & DERRICK ══ */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
          {/* Platform deck */}
          <rect x="268" y="72" width="80" height="11" rx="2" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="1" />
          {/* Platform legs */}
          <line x1="276" y1="83" x2="260" y2="118" stroke="#94a3b8" strokeWidth="2.2" />
          <line x1="348" y1="83" x2="364" y2="118" stroke="#94a3b8" strokeWidth="2.2" />
          <line x1="295" y1="83" x2="290" y2="118" stroke="#64748b" strokeWidth="1.5" />
          <line x1="320" y1="83" x2="328" y2="118" stroke="#64748b" strokeWidth="1.5" />
          {/* Derrick */}
          <line x1="308" y1="72" x2="308" y2="28" stroke="#60a5fa" strokeWidth="2" />
          <line x1="294" y1="72" x2="308" y2="28" stroke="#60a5fa" strokeWidth="1.5" />
          <line x1="322" y1="72" x2="308" y2="28" stroke="#60a5fa" strokeWidth="1.5" />
          {/* Derrick crossbars */}
          {[36, 48, 58, 66].map(y => (
            <line key={y}
              x1={308 - (72 - y) * 0.95} y1={y}
              x2={308 + (72 - y) * 0.95} y2={y}
              stroke="#60a5fa" strokeWidth="1" opacity="0.55"
            />
          ))}
          {/* Crane arm */}
          <line x1="308" y1="32" x2="330" y2="28" stroke="#93c5fd" strokeWidth="1.2" opacity="0.7" />
          <line x1="330" y1="28" x2="330" y2="52" stroke="#93c5fd" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
        </motion.g>

        {/* ══ WELL TRAJECTORY ══ */}
        {/* Vertical section then deviated */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 1.1, duration: 1.8, ease: 'easeInOut' }}
          d="M308,118 L308,294 Q308,318 326,335 Q345,352 372,360 L455,370"
          fill="none" stroke="#F97316" strokeWidth="3.2"
          filter="url(#f-glow)"
        />

        {/* Casing shoes */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }}>
          {[{ x: 308, y: 165, r: 5 }, { x: 308, y: 248, r: 4 }].map((c, i) => (
            <g key={i}>
              <circle cx={c.x} cy={c.y} r={c.r + 3} fill="none" stroke="#F97316" strokeWidth="1.3" opacity="0.38" />
              <circle cx={c.x} cy={c.y} r={c.r} fill="#F97316" opacity="0.9" />
            </g>
          ))}
        </motion.g>

        {/* Perforation guns in reservoir zone */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>
          {[0, 1, 2, 3, 4].map(i => {
            const px = 340 + i * 2.8
            const py = 342 + i * 8
            return (
              <g key={i}>
                <line x1={px} y1={py} x2={px + 20} y2={py - 2}
                  stroke="#fbbf24" strokeWidth="2.4" strokeLinecap="round" />
                <circle cx={px + 20} cy={py - 2} r="2.2" fill="#fbbf24" />
              </g>
            )
          })}
          <text x="368" y="395" fontSize="7" fill="rgba(251,191,36,0.75)"
            fontFamily="ui-monospace,monospace" fontWeight="700">PERFS</text>
        </motion.g>

        {/* Well TD marker */}
        <motion.g initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.4, type: 'spring' }}>
          <circle cx="455" cy="370" r="6" fill="none" stroke="#F97316" strokeWidth="2" opacity="0.6" />
          <circle cx="455" cy="370" r="3" fill="#F97316" />
          <text x="465" y="374" fontSize="7" fill="rgba(249,115,22,0.75)"
            fontFamily="ui-monospace,monospace" fontWeight="700">TD</text>
        </motion.g>

        {/* ══ FE LOG PANEL ══ */}
        {/* Panel background */}
        <rect x="466" y="148" width="144" height="348" rx="8"
          fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />

        {/* Log tracks: GR, RES, NPHI, RHOB */}
        {[
          {
            x: 473, color: '#22C55E', label: 'GR',
            path: 'M488,155 L480,177 L493,200 L478,224 L491,249 L477,274 L492,299 L479,324 L494,349 L480,374 L493,399 L479,424 L490,449 L488,490',
          },
          {
            x: 509, color: '#F97316', label: 'RES',
            path: 'M524,155 L533,180 L519,205 L535,230 L520,255 L536,280 L521,305 L537,330 L520,355 L536,380 L519,405 L535,430 L521,455 L524,490',
          },
          {
            x: 545, color: '#2563EB', label: 'NPHI',
            path: 'M560,155 L554,180 L563,207 L552,233 L562,259 L550,285 L562,311 L551,337 L563,363 L551,389 L562,415 L551,441 L560,467 L560,490',
          },
          {
            x: 581, color: '#7C3AED', label: 'RHOB',
            path: 'M596,155 L604,182 L590,209 L605,236 L590,263 L606,290 L590,317 L605,344 L589,371 L604,398 L589,425 L604,452 L596,479 L596,490',
          },
        ].map((tr, i) => (
          <g key={i}>
            {/* Track bg */}
            <rect x={tr.x} y="150" width="30" height="340" rx="4" fill="rgba(255,255,255,0.025)" />
            {/* Track divider */}
            <line x1={tr.x + 30} y1="152" x2={tr.x + 30} y2="488"
              stroke="rgba(255,255,255,0.055)" strokeWidth="1" />
            {/* Label */}
            <text x={tr.x + 15} y="162" fontSize="7" fill={tr.color}
              textAnchor="middle" fontFamily="ui-monospace,monospace" fontWeight="800">
              {tr.label}
            </text>
            {/* Curve */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.9 }}
              transition={{ delay: 0.8 + i * 0.15, duration: 2.2 }}
              d={tr.path} fill="none" stroke={tr.color} strokeWidth="1.8"
            />
            {/* Shaded fill under GR only */}
            {i === 0 && (
              <motion.path
                initial={{ opacity: 0 }} animate={{ opacity: 0.12 }} transition={{ delay: 1.5 }}
                d={`${tr.path} L503,490 L503,155 Z`}
                fill={tr.color}
              />
            )}
          </g>
        ))}

        {/* Reservoir highlight on log panel */}
        <motion.rect x="468" y="315" width="140" height="60"
          fill="rgba(251,191,36,0.07)" stroke="rgba(251,191,36,0.28)" strokeWidth="1" rx="3"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.85 }}
        />
        <motion.text x="538" y="310" fontSize="6.5" fill="rgba(251,191,36,0.72)"
          textAnchor="middle" fontFamily="ui-monospace,monospace" fontWeight="700"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }}>
          PAY ZONE
        </motion.text>

        {/* ══ REGIONAL NETWORK (top-left) ══ */}
        <motion.g
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
          {/* Globe outline */}
          <ellipse cx="88" cy="62" rx="76" ry="54"
            fill="rgba(37,99,235,0.08)"
            stroke="rgba(37,99,235,0.22)" strokeWidth="1" strokeDasharray="3 2" />

          {/* SEA landmasses (simplified) */}
          {[
            { d: 'M54,42 L67,36 L79,42 L82,55 L70,63 L55,59 Z',           f: 'rgba(37,99,235,0.42)' },
            { d: 'M82,53 L97,48 L106,55 L103,68 L90,72 L80,63 Z',         f: 'rgba(37,99,235,0.36)' },
            { d: 'M45,60 L58,56 L64,66 L59,79 L46,80 L38,70 Z',           f: 'rgba(34,197,94,0.4)'  },
            { d: 'M104,38 L117,33 L126,41 L123,54 L110,55 L102,46 Z',     f: 'rgba(34,197,94,0.34)' },
            { d: 'M122,54 L135,51 L142,60 L137,71 L125,69 Z',             f: 'rgba(37,99,235,0.28)' },
            { d: 'M68,78 L80,74 L88,82 L85,93 L71,94 Z',                  f: 'rgba(37,99,235,0.3)'  },
          ].map((s, i) => (
            <path key={i} d={s.d} fill={s.f} stroke="rgba(255,255,255,0.14)" strokeWidth="0.7" />
          ))}

          {/* Network nodes */}
          {[
            { cx: 62,  cy: 50,  c: '#22C55E' },
            { cx: 91,  cy: 60,  c: '#F97316' },
            { cx: 50,  cy: 68,  c: '#2563EB' },
            { cx: 112, cy: 44,  c: '#22C55E' },
            { cx: 130, cy: 60,  c: '#7C3AED' },
            { cx: 76,  cy: 86,  c: '#F97316' },
          ].map((n, i) => (
            <motion.g key={i}
              initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.75 + i * 0.1, type: 'spring' }}>
              <circle cx={n.cx} cy={n.cy} r={8} fill={n.c} opacity={0.18} />
              <circle cx={n.cx} cy={n.cy} r={4.5} fill={n.c} opacity={0.92} filter="url(#f-soft)" />
            </motion.g>
          ))}

          {/* Connections */}
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.45 }} transition={{ delay: 1.35 }}>
            {[
              [62, 50, 91, 60], [91, 60, 50, 68], [91, 60, 112, 44],
              [112, 44, 130, 60], [91, 60, 76, 86], [76, 86, 50, 68],
            ].map(([x1, y1, x2, y2], i) => (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#F97316" strokeWidth="1.1" strokeDasharray="2.5 2" />
            ))}
          </motion.g>

          <text x="88" y="110" fontSize="8" fill="rgba(255,255,255,0.38)"
            textAnchor="middle" fontFamily="system-ui" fontWeight="600" letterSpacing="0.3">
            REGIONAL NETWORK
          </text>
        </motion.g>

        {/* ══ FLOATING BADGES ══ */}

        {/* Members badge */}
        <motion.g initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.0 }}>
          <rect x="10" y="122" width="155" height="34" rx="7"
            fill="rgba(10,35,66,0.88)" stroke="rgba(34,197,94,0.5)" strokeWidth="1" />
          <circle cx="28" cy="139" r="7" fill="rgba(34,197,94,0.2)" />
          <circle cx="28" cy="139" r="4" fill="#22C55E">
            <animate attributeName="opacity" values="1;0.4;1" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <text x="40" y="134" fontSize="10" fill="#fff" fontWeight="800" fontFamily="system-ui">3,000+</text>
          <text x="40" y="146" fontSize="7.5" fill="rgba(255,255,255,0.5)" fontFamily="system-ui">Members · 15+ Countries</text>
        </motion.g>

        {/* Live well badge */}
        <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.3, type: 'spring' }}>
          <rect x="368" y="390" width="78" height="26" rx="7"
            fill="rgba(10,35,66,0.92)" stroke="rgba(249,115,22,0.55)" strokeWidth="1" />
          <circle cx="381" cy="403" r="4" fill="#F97316">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
          </circle>
          <text x="390" y="407" fontSize="7.5" fill="#fff" fontWeight="700" fontFamily="system-ui">LIVE WELL</text>
        </motion.g>

        {/* Pay zone badge on geo cross-section */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }}>
          <rect x="194" y="334" width="88" height="22" rx="5"
            fill="rgba(251,191,36,0.14)" stroke="rgba(251,191,36,0.45)" strokeWidth="1" />
          <text x="238" y="349" fontSize="7.5" fill="rgba(251,191,36,0.9)"
            textAnchor="middle" fontFamily="ui-monospace,monospace" fontWeight="700">
            PAY ZONE ★
          </text>
        </motion.g>

        {/* ══ TOP VIGNETTE ══ */}
        <rect width="620" height="540" fill="url(#g-topfade)" />

      </g>
    </svg>
  )
}

/* ═══════════════════════════════════════════════════════════════
   MAIN HERO COMPONENT
═══════════════════════════════════════════════════════════════ */
export function Hero() {
  const socials = [
    { Icon: Linkedin, href: '#',                                   color: '#0077B5', label: 'LinkedIn' },
    { Icon: Facebook, href: '#',                                   color: '#1877F2', label: 'Facebook' },
    { Icon: Youtube,  href: '#',                                   color: '#FF0000', label: 'YouTube'  },
    { Icon: Mail,     href: 'mailto:info@geofera.olinesia.com',   color: '#6B7280', label: 'Email'    },
  ]

  return (
    <section style={{
      position: 'relative',
      background: '#0A2342',
      minHeight: 760,
      paddingTop: 64,
      overflow: 'hidden',
    }}>
      {/* Dot grid background */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        opacity: 0.25,
      }} />

      {/* Orange glow orb top-right */}
      <div style={{
        position: 'absolute', top: '10%', right: '20%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Blue glow orb bottom-left */}
      <div style={{
        position: 'absolute', bottom: '0%', left: '15%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'center',
        minHeight: 'calc(760px - 64px)',
        paddingTop: '2.5rem',
        paddingBottom: '2rem',
      }}>

        {/* ── LEFT: Text ── */}
        <div>
          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(249,115,22,0.12)',
              border: '1px solid rgba(249,115,22,0.28)',
              borderRadius: 999, padding: '0.3125rem 0.875rem',
              marginBottom: '1.375rem',
            }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%', background: '#F97316',
              display: 'inline-block',
              animation: 'pulse 2s infinite',
            }} />
            <span style={{
              color: '#F97316', fontWeight: 700, fontSize: '0.6875rem',
              letterSpacing: '0.13em', textTransform: 'uppercase',
            }}>
              Regional Professional Community
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontWeight: 900, color: '#fff', lineHeight: 1.08,
              fontSize: 'clamp(1.875rem, 3.6vw, 3.25rem)',
              marginBottom: '1.25rem', letterSpacing: '-0.01em',
            }}>
            Connecting{' '}
            <span style={{ color: '#22C55E' }}>Geoscience,</span>
            <br />
            <span style={{ color: '#60a5fa' }}>Formation Evaluation,</span>
            <br />
            Drilling &amp;{' '}
            <span style={{ color: '#F97316' }}>Upstream</span>
            <br />
            <span style={{ color: '#fff' }}>Professionals</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
            style={{
              color: 'rgba(255,255,255,0.6)', fontSize: '1rem',
              lineHeight: 1.72, maxWidth: '28rem', marginBottom: '2rem',
            }}>
            A regional platform advancing technical excellence through knowledge sharing,
            professional development, collaboration, and innovation across the energy sector.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.875rem' }}>

            <Link href="/register" style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: '#F97316', color: '#fff',
              fontWeight: 700, fontSize: '0.9375rem',
              padding: '0.75rem 1.5rem', borderRadius: 9,
              textDecoration: 'none',
              boxShadow: '0 4px 18px rgba(249,115,22,0.42)',
              transition: 'all 0.2s',
            }}>
              <Users size={16} /> Join GEOFERA
            </Link>

            <Link href="/training" style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: 'rgba(255,255,255,0.07)',
              color: 'rgba(255,255,255,0.88)',
              fontWeight: 600, fontSize: '0.9375rem',
              padding: '0.75rem 1.5rem', borderRadius: 9,
              textDecoration: 'none',
              border: '1.5px solid rgba(255,255,255,0.16)',
              backdropFilter: 'blur(8px)',
            }}>
              <BookOpen size={15} /> Explore Training
            </Link>

            <Link href="/events" style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: 'rgba(255,255,255,0.07)',
              color: 'rgba(255,255,255,0.88)',
              fontWeight: 600, fontSize: '0.9375rem',
              padding: '0.75rem 1.5rem', borderRadius: 9,
              textDecoration: 'none',
              border: '1.5px solid rgba(255,255,255,0.16)',
              backdropFilter: 'blur(8px)',
            }}>
              <Calendar size={15} /> Upcoming Events
            </Link>
          </motion.div>

          {/* Social row */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.58 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{
              fontSize: '0.8125rem', color: 'rgba(255,255,255,0.35)',
              fontWeight: 500, marginRight: '0.25rem',
            }}>
              Follow us on
            </span>
            {socials.map(({ Icon, href, color, label }) => (
              <a key={label} href={href} aria-label={label} style={{
                width: 34, height: 34, borderRadius: '50%',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color, textDecoration: 'none', flexShrink: 0,
                transition: 'transform 0.2s',
              }}>
                <Icon size={14} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: SVG Visualization ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.75 }}
          style={{
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: '0 24px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)',
            height: 'clamp(320px, 46vw, 540px)',
          }}>
          <TechViz />
        </motion.div>
      </div>

      {/* Wave transition to white */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, pointerEvents: 'none' }}>
        <svg viewBox="0 0 1440 52" preserveAspectRatio="none"
          style={{ width: '100%', height: 52, display: 'block' }}>
          <path d="M0,52 L0,28 Q360,4 720,28 Q1080,52 1440,28 L1440,52 Z" fill="#fff" />
        </svg>
      </div>
    </section>
  )
}
