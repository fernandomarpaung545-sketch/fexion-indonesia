'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Clock, Video, Users } from 'lucide-react'

const events = [
  {
    type: 'WEBINAR',        typeColor: '#2563EB', typeBg: '#dbeafe',
    month: 'JUN', day: '12', year: '2026',
    title: 'Practical Insights on Formation Evaluation in Carbonate Reservoirs',
    speaker: 'Dr. Ahmad Fauzi, TotalEnergies',
    loc: 'Online', time: '14:00 – 16:00 WIB', isOnline: true, attendees: 180,
  },
  {
    type: 'WORKSHOP',       typeColor: '#22C55E', typeBg: '#dcfce7',
    month: 'JUN', day: '25', year: '2026',
    title: 'Geosteering for Complex Reservoirs — Hands-on Session',
    speaker: 'Reza Pratama, Halliburton',
    loc: 'Jakarta, Indonesia', time: '08:00 – 17:00 WIB', isOnline: false, attendees: 32,
  },
  {
    type: 'TECHNICAL TALK', typeColor: '#F97316', typeBg: '#ffedd5',
    month: 'JUL', day: '08', year: '2026',
    title: 'Drilling Optimization: Balancing Performance & Efficiency',
    speaker: 'Ir. Budi Santoso, Pertamina',
    loc: 'Online', time: '14:00 – 16:00 WIB', isOnline: true, attendees: 120,
  },
  {
    type: 'CONFERENCE',     typeColor: '#7C3AED', typeBg: '#ede9fe',
    month: 'JUL', day: '30', year: '2026',
    title: 'GEOFERA Annual Conference 2026 — Subsurface Innovation',
    speaker: 'Multiple Speakers',
    loc: 'Kuala Lumpur, Malaysia', time: '2-Day Event', isOnline: false, attendees: 400,
  },
]

export function UpcomingEvents() {
  return (
    <section className="section-py bg-white">
      <div className="container-geo">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="eyebrow block mb-3">Calendar</span>
            <h2 className="font-display font-black text-gray-900"
              style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>
              Upcoming Events
            </h2>
          </motion.div>
          <Link href="/events" className="btn btn-outline btn-sm">
            View all events <ArrowRight size={14} />
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {events.map((e, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.5 }}
              className="card p-5 flex items-start gap-5 hover:border-gray-300 transition-all"
            >
              {/* Date block */}
              <div className="flex-shrink-0 text-center w-14 hidden sm:block">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wide">{e.month}</div>
                <div className="font-display font-black text-3xl leading-none"
                  style={{ color: e.typeColor }}>{e.day}</div>
                <div className="text-xs text-gray-400">{e.year}</div>
              </div>

              {/* Divider */}
              <div className="w-px self-stretch bg-gray-100 flex-shrink-0 hidden sm:block" />

              {/* Body */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="badge text-xs" style={{ background: e.typeBg, color: e.typeColor }}>
                    {e.type}
                  </span>
                  {e.isOnline && (
                    <span className="badge badge-gray text-xs">
                      <Video size={9} className="mr-0.5" /> Online
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 mb-1 leading-snug text-sm sm:text-base">
                  {e.title}
                </h3>
                <p className="text-xs text-gray-500 mb-2">{e.speaker}</p>
                <div className="flex items-center flex-wrap gap-x-4 gap-y-1">
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <MapPin size={11} /> {e.loc}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock size={11} /> {e.time}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Users size={11} /> {e.attendees} registered
                  </span>
                </div>
              </div>

              {/* Register CTA */}
              <Link href="/events"
                className="flex-shrink-0 btn btn-sm btn-outline self-center"
                style={{ borderColor: e.typeColor, color: e.typeColor }}>
                Register
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
