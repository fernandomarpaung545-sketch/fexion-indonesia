'use client'
// GEOFERA at a Glance
import { motion } from 'framer-motion'

const metrics = [
  { value: '3,000+', label: 'Members',              sub: 'Growing community of professionals',   color: '#0A2342', icon: '👥' },
  { value: '150+',   label: 'Technical Sessions',   sub: 'Knowledge sharing and learning',        color: '#22C55E', icon: '🎓' },
  { value: '80+',    label: 'Events Hosted',        sub: 'Webinars, workshops & conferences',     color: '#F97316', icon: '📅' },
  { value: '15+',    label: 'Countries',            sub: 'Regional reach, global impact',         color: '#2563EB', icon: '🌏' },
]

export function GlanceMetrics() {
  return (
    <section className="bg-white py-0">
      <div className="container-tight">
        <div className="grid grid-cols-2 lg:grid-cols-4 -mt-6 relative z-10">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 bg-white px-6 py-5 shadow-lg"
              style={{
                borderRadius: i === 0 ? '0 0 0 16px' : i === 3 ? '0 0 16px 0' : 0,
                borderRight: i < 3 ? '1px solid #f1f5f9' : 'none',
                boxShadow: '0 8px 32px rgba(10,35,66,0.10)',
              }}
            >
              <div className="text-3xl">{m.icon}</div>
              <div>
                <div className="font-black text-2xl leading-none" style={{ color: m.color }}>{m.value}</div>
                <div className="font-bold text-sm text-gray-800 mt-0.5">{m.label}</div>
                <div className="text-xs text-gray-400 mt-0.5 leading-tight">{m.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section label */}
        <div className="text-center pt-10 pb-2">
          <span className="text-xs font-bold tracking-widest uppercase text-gray-300">GEOFERA at a Glance</span>
        </div>
      </div>
    </section>
  )
}
