'use client'
import Link from 'next/link'
import { Linkedin, Youtube, Mail } from 'lucide-react'

const footerLinks = [
  { heading: 'About GEOFERA', links: [{ label: 'Our Mission', href: '/about' }, { label: 'Our Vision', href: '/about' }, { label: 'Our Team', href: '/about' }, { label: 'Careers', href: '/contact' }] },
  { heading: 'Training', links: [{ label: 'Courses', href: '/training' }, { label: 'Learning Paths', href: '/training' }, { label: 'Certification', href: '/training' }, { label: 'Training Calendar', href: '/training' }] },
  { heading: 'Events', links: [{ label: 'Webinars', href: '/events' }, { label: 'Workshops', href: '/events' }, { label: 'Conferences', href: '/events' }, { label: 'Event Calendar', href: '/events' }] },
  { heading: 'Community', links: [{ label: 'Membership', href: '/community' }, { label: 'Chapters', href: '/community' }, { label: 'Directory', href: '/community' }, { label: 'Forums', href: '/community' }] },
  { heading: 'Knowledge Hub', links: [{ label: 'Articles', href: '/knowledge' }, { label: 'Case Studies', href: '/knowledge' }, { label: 'Technical Papers', href: '/knowledge' }, { label: 'Videos', href: '/knowledge' }] },
  { heading: 'Membership', links: [{ label: 'Membership Benefits', href: '/register' }, { label: 'Membership Types', href: '/register' }, { label: 'Join Now', href: '/register' }] },
  { heading: 'Contact Us', links: [
    { label: 'info@geofera.olinesia.com', href: 'mailto:info@geofera.olinesia.com' },
    { label: '+62 21 1234 5678', href: 'tel:+622112345678' },
    { label: 'Jakarta, Indonesia', href: '#' },
  ]},
]

export function Footer() {
  return (
    <footer style={{ background: '#0d1b2e', color: '#94a3b8' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '3rem 1.5rem 1.5rem' }}>
        {/* Top: logo + columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(7, 1fr)', gap: '2rem', marginBottom: '2.5rem' }}>
          {/* Brand */}
          <div>
            <img src="/geofera-logo.png" alt="GEOFERA" style={{ height: 44, width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)', marginBottom: '1rem' }} />
            <p style={{ fontSize: '0.8125rem', lineHeight: 1.7, color: '#64748b', maxWidth: '16rem' }}>
              Connecting Geoscience, Formation Evaluation, Drilling &amp; Upstream Professionals Across the Region.
            </p>
            <div style={{ display: 'flex', gap: '0.625rem', marginTop: '1rem' }}>
              {[Linkedin, Youtube, Mail].map((Icon, i) => (
                <a key={i} href="#" style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid #1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', textDecoration: 'none' }}>
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 style={{ fontWeight: 700, fontSize: '0.8125rem', color: '#e2e8f0', marginBottom: '0.875rem' }}>{col.heading}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} style={{ fontSize: '0.8125rem', color: '#64748b', textDecoration: 'none' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#f97316')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
                    >{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #1e293b', paddingTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p style={{ fontSize: '0.8125rem', color: '#475569' }}>© 2024 GEOFERA by OliNesia. All Rights Reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="#" style={{ fontSize: '0.8125rem', color: '#475569', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="#" style={{ fontSize: '0.8125rem', color: '#475569', textDecoration: 'none' }}>Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
