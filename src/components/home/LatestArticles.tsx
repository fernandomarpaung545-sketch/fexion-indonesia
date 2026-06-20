'use client'
// src/components/home/LatestArticles.tsx

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { ArrowRight, Clock, Eye } from 'lucide-react'
import { format } from 'date-fns'
import { featuredArticles } from '@/data/dummy'

export function LatestArticles() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-padding bg-[var(--bg-secondary)] dark:bg-navy-900">
      <div className="container-tight">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="section-eyebrow">Knowledge Center</span>
            <h2 className="section-title mb-2">Latest Technical Articles</h2>
          </div>
          <Link href="/knowledge" className="flex-shrink-0 flex items-center gap-2 text-sm font-semibold text-crimson-500 hover:text-crimson-400 transition-colors group">
            All Articles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredArticles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="card-base card-hover group overflow-hidden"
            >
              <div className="h-40 bg-gradient-to-br from-navy-800 to-navy-900 overflow-hidden">
                {article.coverImage ? (
                  <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
                ) : null}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="tag-navy text-[10px]">{article.category?.replace('_', ' ')}</span>
                  {article.tags?.slice(0, 1).map(tag => (
                    <span key={tag} className="tag-base text-[10px] bg-[var(--bg-tertiary)] text-[var(--text-muted)]">{tag}</span>
                  ))}
                </div>
                <h3 className="font-display font-bold text-sm text-[var(--text-primary)] leading-snug mb-2 line-clamp-3 group-hover:text-crimson-500 transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)] line-clamp-2 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                  <span>{article.author?.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Eye size={11} /> {article.viewCount}</span>
                    {article.publishedAt && (
                      <span>{format(new Date(article.publishedAt), 'dd MMM yyyy')}</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
