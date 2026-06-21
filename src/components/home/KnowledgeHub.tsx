'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

const resources = [
  {
    cat: 'ARTICLE', catColor: '#2563EB', catBg: '#dbeafe',
    title: 'Unlocking Reservoir Potential Through Integrated Petrophysical Workflows',
    excerpt: 'A systematic approach combining core data, log analysis, and production history for better reservoir characterization.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop&q=85',
    readTime: '8 min read',
  },
  {
    cat: 'CASE STUDY', catColor: '#22C55E', catBg: '#dcfce7',
    title: 'Successful Geosteering in High-Angle Wells: Natuna Basin Experience',
    excerpt: 'How real-time LWD interpretation and geological modelling improved landing accuracy from 62% to 94%.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=240&fit=crop&q=85',
    readTime: '12 min read',
  },
  {
    cat: 'TECHNICAL PAPER', catColor: '#7C3AED', catBg: '#ede9fe',
    title: 'Advanced Log Interpretation Methods for Unconventional Reservoirs in SE Asia',
    excerpt: 'Application of advanced machine learning algorithms in formation evaluation for tight carbonate plays.',
    img: 'https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?w=400&h=240&fit=crop&q=85',
    readTime: '15 min read',
  },
  {
    cat: 'LEARNING VIDEO', catColor: '#F97316', catBg: '#ffedd5',
    title: 'Understanding Petrophysical Workflows: From Raw Logs to Reservoir Parameters',
    excerpt: 'Step-by-step video series covering key petrophysical concepts for formation evaluation professionals.',
    img: null,
    readTime: '45 min video',
    isVideo: true,
  },
]

export function KnowledgeHub() {
  return (
    <section className="py-14 sm:py-20" style={{ background: 'var(--geo-surface)' }}>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8 sm:mb-12 flex-wrap gap-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="eyebrow block mb-3">Resources</span>
            <h2 className="font-display font-black text-gray-900"
              style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>
              Knowledge Hub
            </h2>
          </motion.div>
          <Link href="/knowledge" className="btn btn-outline btn-sm">
            View all resources <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {resources.map((r, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card overflow-hidden group cursor-pointer"
            >
              {/* Thumbnail */}
              {r.img ? (
                <div className="relative overflow-hidden" style={{ height: 148 }}>
                  <img src={r.img} alt={r.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              ) : (
                <div className="relative flex items-center justify-center bg-gray-900 group-hover:bg-gray-800 transition-colors"
                  style={{ height: 148 }}>
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center
                    border-2 border-white/20 group-hover:scale-110 transition-transform">
                    <Play size={22} className="text-white ml-1" />
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="badge" style={{ background: r.catBg, color: r.catColor }}>
                      {r.cat}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-4">
                {r.img && (
                  <span className="badge mb-2" style={{ background: r.catBg, color: r.catColor }}>
                    {r.cat}
                  </span>
                )}
                <h3 className="font-bold text-gray-900 leading-snug mb-2"
                  style={{ fontSize: '0.8125rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {r.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-3"
                  style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {r.excerpt}
                </p>
                <span className="text-xs font-semibold" style={{ color: r.catColor }}>
                  {r.readTime}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
