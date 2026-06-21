'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, BarChart2 } from 'lucide-react'

const programs = [
  { tag: 'Formation Evaluation', tagColor: '#2563EB', tagBg: '#eff6ff', title: 'Formation Evaluation Fundamentals',   desc: 'Build a solid foundation in log interpretation and reservoir evaluation.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=480&h=280&fit=crop&q=85', duration: '3 Days', level: 'Beginner' },
  { tag: 'Wellsite Geology',     tagColor: '#22C55E', tagBg: '#f0fdf4', title: 'Wellsite Geology Excellence',          desc: 'Practical workflows and operational best practices for wellsite professionals.', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=480&h=280&fit=crop&q=85', duration: '2 Days', level: 'Intermediate' },
  { tag: 'Petrophysics',         tagColor: '#F97316', tagBg: '#fff7ed', title: 'Petrophysics & Log Analysis',          desc: 'Advanced interpretation techniques for subsurface professionals.', img: 'https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?w=480&h=280&fit=crop&q=85', duration: '4 Days', level: 'Advanced' },
  { tag: 'Drilling',             tagColor: '#0A2342', tagBg: '#f1f5f9', title: 'Drilling Optimization Workshop',       desc: 'Enhance safety, efficiency, and operational excellence in well delivery.', img: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=480&h=280&fit=crop&q=85', duration: '2 Days', level: 'Intermediate' },
]

export function FeaturedPrograms() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="container-tight">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#F97316] block mb-2">Learn &amp; Grow</span>
            <h2 className="font-display font-black text-[#0A2342]" style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)' }}>Featured Programs</h2>
          </div>
          <Link href="/training" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#F97316] hover:underline">
            View all programs <ArrowRight size={14}/>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-40 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"/>
                <span className="absolute top-3 left-3 text-[11px] font-bold px-3 py-1 rounded-full"
                  style={{ background: p.tagBg, color: p.tagColor }}>{p.tag}</span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-sm text-[#0A2342] mb-2 leading-snug">{p.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">{p.desc}</p>
                <div className="flex gap-2">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                    <Clock size={10}/> {p.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                    <BarChart2 size={10}/> {p.level}
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
