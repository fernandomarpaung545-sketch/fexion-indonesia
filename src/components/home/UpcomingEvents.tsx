'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Clock } from 'lucide-react'

const events = [
  { type: 'WEBINAR',        typeColor: '#2563EB', typeBg: '#eff6ff', month: 'JUN', day: '12', title: 'Practical Insights on Formation Evaluation in Carbonate Reservoirs', loc: 'Online', time: '14:00 – 16:00 WIB' },
  { type: 'WORKSHOP',       typeColor: '#22C55E', typeBg: '#f0fdf4', month: 'JUN', day: '25', title: 'Geosteering for Complex Reservoirs',                                 loc: 'Jakarta, Indonesia', time: null },
  { type: 'TECHNICAL TALK', typeColor: '#F97316', typeBg: '#fff7ed', month: 'JUL', day: '08', title: 'Drilling Optimization: Balancing Performance & Efficiency',           loc: 'Online', time: '14:00 – 16:00 WIB' },
  { type: 'CONFERENCE',     typeColor: '#0A2342', typeBg: '#f1f5f9', month: 'JUL', day: '30', title: 'GEOFERA Annual Conference 2025',                                      loc: 'Kuala Lumpur, Malaysia', time: null },
]

export function UpcomingEvents() {
  return (
    <section className="bg-white py-20">
      <div className="container-tight">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#F97316] block mb-2">Events</span>
            <h2 className="font-display font-black text-[#0A2342]" style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)' }}>Upcoming Events</h2>
          </div>
          <Link href="/events" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#F97316] hover:underline">
            View all events <ArrowRight size={14}/>
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {events.map((e, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09 }}
              className="flex items-center gap-5 p-5 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 bg-white"
            >
              {/* Date */}
              <div className="text-center min-w-[52px] flex-shrink-0">
                <div className="text-[10px] font-bold uppercase text-gray-400">{e.month}</div>
                <div className="text-3xl font-black leading-none text-[#0A2342]">{e.day}</div>
              </div>

              <div className="w-px h-12 bg-gray-100 flex-shrink-0"/>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full mb-1.5"
                  style={{ background: e.typeBg, color: e.typeColor }}>{e.type}</span>
                <div className="font-bold text-sm text-[#0A2342] leading-snug mb-2 truncate">{e.title}</div>
                <div className="flex items-center flex-wrap gap-x-4 gap-y-1">
                  <span className="flex items-center gap-1 text-xs text-gray-400"><MapPin size={11}/>{e.loc}</span>
                  {e.time && <span className="flex items-center gap-1 text-xs text-gray-400"><Clock size={11}/>{e.time}</span>}
                </div>
              </div>

              <Link href="/events"
                className="flex-shrink-0 px-4 py-2 border border-gray-200 rounded-xl text-xs font-bold text-gray-600 hover:border-[#F97316] hover:text-[#F97316] transition-colors">
                Register
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
