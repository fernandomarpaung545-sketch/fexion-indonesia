'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

const tiers = [
  {
    name: 'Individual', price: 'Free', period: '',
    color: '#22C55E', border: '#bbf7d0', bg: '#f0fdf4',
    tag: '',
    features: [
      'Community forum & discussions',
      'Public webinar access',
      'Monthly newsletter',
      'Member directory access',
      'Regional chapter membership',
    ],
  },
  {
    name: 'Professional', price: 'USD 99', period: '/year',
    color: '#2563EB', border: '#2563EB', bg: '#fff',
    tag: 'Most Popular',
    features: [
      'All Individual benefits',
      'Full technical library',
      '20% training discount',
      'CPD certificate tracking',
      'SIG & chapter leadership',
      'Exclusive job board access',
      'Priority event registration',
    ],
  },
  {
    name: 'Corporate', price: 'USD 499', period: '/year',
    color: '#0A2342', border: '#cbd5e1', bg: '#f8fafc',
    tag: '',
    features: [
      'All Professional (5 seats)',
      'Custom in-house training',
      'Brand visibility package',
      'Speaking slot priority',
      'Recruitment opportunities',
      'Partnership recognition',
      'Executive roundtable access',
    ],
  },
  {
    name: 'Student', price: 'Free', period: '',
    color: '#7C3AED', border: '#ddd6fe', bg: '#f5f3ff',
    tag: '',
    features: [
      'Learning resources library',
      'Mentorship programme',
      'Career development tools',
      'Student webinar series',
      'Alumni network access',
    ],
  },
]

export function MembershipBenefits() {
  return (
    <section className="section-py bg-white">
      <div className="container-geo">
        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="eyebrow block mb-4">Membership</span>
          <h2 className="font-display font-black text-gray-900 mb-4"
            style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>
            Membership Benefits
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-xl mx-auto">
            Choose the membership that fits your professional journey and unlock GEOFERA&apos;s full ecosystem.
          </p>
        </motion.div>

        <div className="grid-responsive-4">
          {tiers.map((t, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl p-7 relative flex flex-col"
              style={{
                background: t.bg,
                border: i === 1 ? `2px solid ${t.color}` : `1.5px solid ${t.border}`,
                boxShadow: i === 1 ? `0 16px 48px ${t.color}1a` : '0 2px 8px rgba(0,0,0,0.04)',
              }}
            >
              {t.tag && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 badge text-white px-4"
                  style={{ background: t.color }}>
                  {t.tag}
                </span>
              )}
              <h3 className="font-display font-black text-lg mb-1" style={{ color: t.color }}>{t.name}</h3>
              <div className="mb-5">
                <span className="font-display font-black text-2xl" style={{ color: '#111827' }}>{t.price}</span>
                <span className="text-gray-400 text-sm">{t.period}</span>
              </div>
              <ul className="space-y-2.5 mb-8 flex-1">
                {t.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <Check size={14} className="flex-shrink-0 mt-0.5" style={{ color: t.color }} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/register"
                className="btn w-full justify-center"
                style={
                  i === 1
                    ? { background: t.color, color: '#fff', boxShadow: `0 4px 16px ${t.color}35` }
                    : { background: 'transparent', color: t.color, border: `2px solid ${t.color}` }
                }
              >
                Get Started <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
