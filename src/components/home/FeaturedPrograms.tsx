'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, BarChart2, Users } from 'lucide-react'

const programs = [
  {
    cat: 'Formation Evaluation', catColor: '#2563EB', catBg: '#dbeafe',
    title: 'Formation Evaluation Fundamentals',
    desc: 'Build a solid foundation in log interpretation, petrophysical analysis, and reservoir evaluation.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=480&h=280&fit=crop&q=85',
    duration: '3 Days', level: 'Beginner', seats: 24,
  },
  {
    cat: 'Wellsite Geology', catColor: '#22C55E', catBg: '#dcfce7',
    title: 'Wellsite Geology Excellence',
    desc: 'Master practical wellsite workflows, mud logging interpretation, and operational best practices.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=480&h=280&fit=crop&q=85',
    duration: '2 Days', level: 'Intermediate', seats: 18,
  },
  {
    cat: 'Petrophysics', catColor: '#F97316', catBg: '#ffedd5',
    title: 'Petrophysics & Log Analysis',
    desc: 'Advanced interpretation techniques combining core data, log responses, and reservoir characterization.',
    img: 'https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?w=480&h=280&fit=crop&q=85',
    duration: '4 Days', level: 'Advanced', seats: 16,
  },
  {
    cat: 'Geosteering', catColor: '#7C3AED', catBg: '#ede9fe',
    title: 'Geosteering Workshop',
    desc: 'Improve well placement decisions using real-time LWD data and geological interpretation.',
    img: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=480&h=280&fit=crop&q=85',
    duration: '2 Days', level: 'Intermediate', seats: 20,
  },
  {
    cat: 'Drilling', catColor: '#F97316', catBg: '#ffedd5',
    title: 'Drilling Optimization',
    desc: 'Enhance drilling performance, reduce NPT, and improve well delivery through systematic optimization.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=480&h=280&fit=crop&q=85',
    duration: '2 Days', level: 'Intermediate', seats: 20,
  },
  {
    cat: 'Integration', catColor: '#0A2342', catBg: '#e2e8f0',
    title: 'Integrated Subsurface Studies',
    desc: 'Connect geology, petrophysics, drilling, and reservoir disciplines in field development workflows.',
    img: 'https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?w=480&h=280&fit=crop&q=85',
    duration: '3 Days', level: 'Advanced', seats: 14,
  },
]

export function FeaturedPrograms() {
  return (
    <section className="py-14 sm:py-20" style={{ background: 'var(--geo-surface)' }}>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8 sm:mb-12 flex-wrap gap-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="eyebrow block mb-3">Learn &amp; Grow</span>
            <h2 className="font-display font-black text-gray-900"
              style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>
              Featured Programs
            </h2>
          </motion.div>
          <Link href="/training" className="btn btn-outline btn-sm">
            View all programs <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.5 }}
              className="card overflow-hidden group"
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: 168 }}>
                <img src={p.img} alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-3 left-3 badge text-xs"
                  style={{ background: p.catBg, color: p.catColor }}>
                  {p.cat}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-gray-900 mb-2 leading-snug" style={{ fontSize: '0.9375rem' }}>
                  {p.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{p.desc}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="badge badge-gray">
                    <Clock size={9} className="mr-0.5" /> {p.duration}
                  </span>
                  <span className="badge badge-gray">
                    <BarChart2 size={9} className="mr-0.5" /> {p.level}
                  </span>
                  <span className="badge badge-gray">
                    <Users size={9} className="mr-0.5" /> {p.seats} seats
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
