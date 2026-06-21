'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

const tiers = [
  {
    name: 'Associate', price: 'Free', period: '',
    color: '#22C55E', border: '#bbf7d0', bg: '#f0fdf4',
    features: ['Community forum access', 'Public webinars', 'Newsletter & updates', 'Member directory'],
  },
  {
    name: 'Professional', price: 'USD 99', period: '/year',
    color: '#2563EB', border: '#2563EB', bg: '#eff6ff',
    featured: true,
    features: ['All Associate benefits', 'Technical library access', 'Discounted training (20%)', 'CPD certificate tracking', 'Chapter & SIG access', 'Exclusive job board'],
  },
  {
    name: 'Corporate', price: 'USD 499', period: '/year',
    color: '#0A2342', border: '#cbd5e1', bg: '#f8fafc',
    features: ['All Professional benefits', '5 team seats included', 'Custom in-house training', 'Brand visibility package', 'Speaker slot priority', 'Partnership recognition'],
  },
]

export function MembershipBenefits() {
  return (
    <section className="bg-white py-20">
      <div className="container-tight">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-[#F97316] block mb-3">Membership</span>
          <h2 className="font-display font-black text-[#0A2342] mb-4" style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)' }}>
            Membership Benefits
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto">
            Choose the membership tier that fits your professional journey and unlock GEOFERA&apos;s full ecosystem.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 items-start">
          {tiers.map((t, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-7 relative"
              style={{
                background: t.featured ? '#fff' : t.bg,
                border: `${t.featured ? '2px' : '1.5px'} solid ${t.border}`,
                boxShadow: t.featured ? '0 16px 48px rgba(37,99,235,0.14)' : '0 2px 8px rgba(0,0,0,0.04)',
              }}
            >
              {t.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold text-white px-4 py-1 rounded-full bg-[#2563EB]">
                  MOST POPULAR
                </div>
              )}

              <h3 className="font-display font-black text-lg mb-1" style={{ color: t.color }}>{t.name}</h3>
              <div className="mb-5">
                <span className="font-black text-2xl text-[#0A2342]">{t.price}</span>
                <span className="text-gray-400 text-sm">{t.period}</span>
              </div>

              <ul className="space-y-2.5 mb-7">
                {t.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <Check size={14} className="mt-0.5 flex-shrink-0" style={{ color: t.color }}/>
                    {f}
                  </li>
                ))}
              </ul>

              <Link href="/register"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold transition-all hover:opacity-90"
                style={{
                  background: t.featured ? t.color : 'transparent',
                  color: t.featured ? '#fff' : t.color,
                  border: `2px solid ${t.color}`,
                }}
              >
                Get Started <ArrowRight size={14}/>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
