'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const resources = [
  { cat: 'ARTICLE',         catColor: '#2563EB', catBg: '#eff6ff', title: 'Unlocking Reservoir Potential Through Integrated Data',    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=320&h=180&fit=crop&q=85' },
  { cat: 'CASE STUDY',      catColor: '#22C55E', catBg: '#f0fdf4', title: 'Successful Geosteering in High Angle Wells',              img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=320&h=180&fit=crop&q=85' },
  { cat: 'TECHNICAL PAPER', catColor: '#0A2342', catBg: '#f1f5f9', title: 'Advanced Log Interpretation in Unconventional Reservoirs', img: 'https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?w=320&h=180&fit=crop&q=85' },
  { cat: 'LEARNING VIDEO',  catColor: '#F97316', catBg: '#fff7ed', title: 'Understanding Petrophysical Workflows',                    img: null },
]

export function KnowledgeHub() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="container-tight">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#F97316] block mb-2">Resources</span>
            <h2 className="font-display font-black text-[#0A2342]" style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)' }}>Knowledge Hub</h2>
          </div>
          <Link href="/knowledge" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#F97316] hover:underline">
            View all resources <ArrowRight size={14}/>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {resources.map((r, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              {r.img ? (
                <div className="relative h-36 overflow-hidden">
                  <img src={r.img} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"/>
                </div>
              ) : (
                <div className="h-36 bg-gray-900 flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#F97316]/20 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </div>
                </div>
              )}
              <div className="p-4">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full mb-2"
                  style={{ background: r.catBg, color: r.catColor }}>{r.cat}</span>
                <p className="font-bold text-sm text-[#0A2342] leading-snug">{r.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
