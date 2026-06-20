'use client'
// src/components/home/TestimonialsSection.tsx

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/data/dummy'

export function TestimonialsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-padding bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-crimson-500/5 blur-[100px] rounded-full" />

      <div className="relative container-tight">
        <div className="text-center mb-14">
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            What Our Members Say
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            GOFEW members are at the forefront of Indonesia's subsurface industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-dark rounded-2xl p-6 flex flex-col"
            >
              {/* Quote icon */}
              <Quote size={24} className="text-crimson-500/40 mb-4" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} size={12} className="fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-white/60 leading-relaxed flex-1 mb-5">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div className="w-9 h-9 rounded-full bg-crimson-gradient flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white leading-none mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-[11px] text-white/40 leading-tight">
                    {testimonial.title}
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
