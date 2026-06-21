'use client'
import Link from 'next/link'
import { Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const cols = [
  {
    title: 'Quick Links',
    links: [
      { label: 'About GEOFERA', href: '/about' },
      { label: 'Training Programs', href: '/training' },
      { label: 'Events & Webinars', href: '/events' },
      { label: 'Community', href: '/community' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Knowledge Hub', href: '/knowledge' },
      { label: 'Technical Articles', href: '/knowledge' },
      { label: 'Case Studies', href: '/knowledge' },
      { label: 'Learning Videos', href: '/knowledge' },
    ],
  },
  {
    title: 'Contact',
    links: [],
    contact: [
      { Icon: Mail, text: 'info@geofera.olinesia.com', href: 'mailto:info@geofera.olinesia.com' },
      { Icon: Phone, text: '+62 21 1234 5678', href: 'tel:+622112345678' },
      { Icon: MapPin, text: 'Jakarta, Indonesia', href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer style={{ background: '#0A2342' }}>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand col */}
          <div>
            <img src="/geofera-logo.png" alt="GEOFERA by OliNesia"
              style={{ height: 42, width: 'auto', objectFit: 'contain',
                filter: 'brightness(0) invert(1)', marginBottom: '1.25rem' }} />
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#64748b', maxWidth: '17rem' }}>
              Connecting Geoscience, Formation Evaluation, Drilling &amp; Upstream Professionals across the region.
            </p>
            <div className="flex gap-2">
              {[
                { Icon: Linkedin, href: 'https://linkedin.com/company/geofera-indonesia', label: 'LinkedIn' },
                { Icon: Youtube,  href: '#', label: 'YouTube' },
                { Icon: Mail,     href: 'mailto:info@geofera.olinesia.com', label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#64748b' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#F97316')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '0.8125rem', marginBottom: '1rem' }}>
                {col.title}
              </h4>
              {col.links.length > 0 && (
                <ul className="space-y-2.5">
                  {col.links.map(link => (
                    <li key={link.label}>
                      <Link href={link.href}
                        className="text-sm transition-colors"
                        style={{ color: '#64748b' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#F97316')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {col.contact && (
                <ul className="space-y-3">
                  {col.contact.map(({ Icon, text, href }) => (
                    <li key={text}>
                      <a href={href}
                        className="flex items-start gap-2.5 text-sm transition-colors"
                        style={{ color: '#64748b' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#F97316')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
                      >
                        <Icon size={13} className="flex-shrink-0 mt-0.5" />
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <p className="text-xs" style={{ color: '#475569' }}>
            © 2026 GEOFERA by OliNesia. All Rights Reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Use'].map(l => (
              <Link key={l} href="#" className="text-xs transition-colors" style={{ color: '#475569' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F97316')}
                onMouseLeave={e => (e.currentTarget.style.color = '#475569' )}>
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
