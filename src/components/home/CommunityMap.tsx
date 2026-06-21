'use client'
import { motion } from 'framer-motion'

const nodes = [
  { label: 'Indonesia',   color: '#F97316', x: '68%', y: '62%', size: 14, members: 1800 },
  { label: 'Malaysia',    color: '#22C55E', x: '60%', y: '55%', size: 10, members: 420 },
  { label: 'Singapore',   color: '#2563EB', x: '62%', y: '59%', size: 8,  members: 180 },
  { label: 'Thailand',    color: '#22C55E', x: '57%', y: '48%', size: 8,  members: 140 },
  { label: 'Vietnam',     color: '#F97316', x: '63%', y: '47%', size: 8,  members: 150 },
  { label: 'Philippines', color: '#2563EB', x: '73%', y: '50%', size: 8,  members: 120 },
  { label: 'Australia',   color: '#7C3AED', x: '72%', y: '75%', size: 9,  members: 95  },
  { label: 'UAE',         color: '#22C55E', x: '44%', y: '42%', size: 7,  members: 80  },
  { label: 'Norway',      color: '#2563EB', x: '48%', y: '20%', size: 6,  members: 55  },
  { label: 'UK',          color: '#7C3AED', x: '45%', y: '24%', size: 6,  members: 48  },
]

const connections = [
  [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,2],[1,3],[4,3],[0,7],[7,8],[8,9],
]

export function CommunityMap() {
  return (
    <section className="section-py" style={{ background: 'var(--geo-navy)', overflow: 'hidden' }}>
      <div className="container-geo">
        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="eyebrow block mb-4" style={{ color: '#F97316' }}>
            Regional Presence
          </span>
          <h2 className="font-display font-black text-white mb-4"
            style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>
            Community Across the Region
          </h2>
          <p className="leading-relaxed max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            From Southeast Asia to the Middle East and beyond — GEOFERA connects professionals across 15+ countries.
          </p>
        </motion.div>

        {/* Map visualization */}
        <motion.div className="relative mx-auto rounded-2xl overflow-hidden"
          style={{ maxWidth: 900, height: 400, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}>

          {/* World map SVG background */}
          <svg width="100%" height="100%" viewBox="0 0 900 400" style={{ position: 'absolute', inset: 0 }}>
            {/* Grid */}
            <g stroke="rgba(255,255,255,0.04)" strokeWidth="1">
              {[0,9,18,27,36,45,54,63,72,81,90].map(x => (
                <line key={x} x1={`${x}%`} y1="0" x2={`${x}%`} y2="100%" />
              ))}
              {[0,25,50,75,100].map(y => (
                <line key={y} x1="0" y1={`${y}%`} x2="100%" y2={`${y}%`} />
              ))}
            </g>

            {/* Connection lines between nodes */}
            {connections.map(([a, b], i) => {
              const nA = nodes[a], nB = nodes[b]
              const x1 = parseFloat(nA.x) / 100 * 900
              const y1 = parseFloat(nA.y) / 100 * 400
              const x2 = parseFloat(nB.x) / 100 * 900
              const y2 = parseFloat(nB.y) / 100 * 400
              return (
                <motion.line key={i}
                  x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="rgba(249,115,22,0.25)" strokeWidth="1.2"
                  strokeDasharray="3 3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                />
              )
            })}
          </svg>

          {/* Node markers */}
          {nodes.map((n, i) => (
            <motion.div key={i}
              className="absolute"
              style={{ left: n.x, top: n.y, transform: 'translate(-50%,-50%)' }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.08, type: 'spring' }}
            >
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-full animate-ping opacity-20"
                style={{ background: n.color, width: n.size * 2.5, height: n.size * 2.5,
                  top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              {/* Node */}
              <div className="rounded-full flex items-center justify-center font-bold text-white relative z-10"
                style={{ width: n.size * 2, height: n.size * 2, background: n.color,
                  boxShadow: `0 0 ${n.size}px ${n.color}60`, fontSize: n.size * 0.6 }}>
              </div>
              {/* Label */}
              <div className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap"
                style={{ top: n.size * 2 + 4, fontSize: 9, color: 'rgba(255,255,255,0.7)',
                  fontWeight: 600, letterSpacing: 0.3 }}>
                {n.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
          {[
            { v: '15+',     l: 'Countries' },
            { v: '3,000+',  l: 'Members' },
            { v: '6',       l: 'Regional Hubs' },
            { v: '50+',     l: 'Corporate Partners' },
          ].map((s, i) => (
            <motion.div key={i} className="text-center"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="font-display font-black text-2xl text-white mb-1">{s.v}</div>
              <div className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
