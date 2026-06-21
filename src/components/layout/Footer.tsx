'use client'
// Footer — pixel match to mockup
import Link from 'next/link'
import { Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const cols = [
  { heading: 'About GEOFERA', links: [
    { label: 'Our Mission',  href: '/about' },
    { label: 'Our Vision',   href: '/about' },
    { label: 'Our Team',     href: '/about' },
    { label: 'Careers',      href: '/contact' },
  ]},
  { heading: 'Training', links: [
    { label: 'Courses',           href: '/training' },
    { label: 'Learning Paths',    href: '/training' },
    { label: 'Certification',     href: '/training' },
    { label: 'Training Calendar', href: '/training' },
  ]},
  { heading: 'Events', links: [
    { label: 'Webinars',       href: '/events' },
    { label: 'Workshops',      href: '/events' },
    { label: 'Conferences',    href: '/events' },
    { label: 'Event Calendar', href: '/events' },
  ]},
  { heading: 'Community', links: [
    { label: 'Membership', href: '/community' },
    { label: 'Chapters',   href: '/community' },
    { label: 'Directory',  href: '/community' },
    { label: 'Forums',     href: '/community' },
  ]},
  { heading: 'Knowledge Hub', links: [
    { label: 'Articles',         href: '/knowledge' },
    { label: 'Case Studies',     href: '/knowledge' },
    { label: 'Technical Papers', href: '/knowledge' },
    { label: 'Videos',           href: '/knowledge' },
  ]},
  { heading: 'Membership', links: [
    { label: 'Membership Benefits', href: '/register' },
    { label: 'Membership Types',    href: '/register' },
    { label: 'Join Now',            href: '/register' },
  ]},
]

export function Footer() {
  return (
    <footer style={{ background: '#0A2342', color: '#94a3b8' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '3rem 1.5rem 1.5rem' }}>

        {/* ── Main grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr repeat(6, 1fr) 1.4fr',
          gap: '1.5rem',
          marginBottom: '2.5rem',
        }}>
          {/* Brand col */}
          <div>
            <img src="/geofera-logo.png" alt="GEOFERA"
              style={{ height: 40, width: 'auto', objectFit: 'contain',
                filter: 'brightness(0) invert(1)', marginBottom: '1rem' }}/>
            <p style={{ fontSize: '0.78rem', lineHeight: 1.7, color: '#64748b', maxWidth: '14rem' }}>
              Connecting Geoscience, Formation Evaluation, Drilling &amp; Upstream Professionals
              Across the Region.
            </p>
            <div style={{ display: 'flex', gap: 6, marginTop: '0.875rem' }}>
              {[Linkedin, Youtube, Mail].map((Icon, i) => (
                <a key={i} href="#" style={{
                  width: 30, height: 30, borderRadius: '50%',
                  border: '1px solid #1e293b',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#64748b', textDecoration: 'none',
                  transition: 'border-color 0.15s, color 0.15s',
                }}>
                  <Icon size={13}/>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.heading}>
              <h4 style={{ fontWeight: 700, fontSize: '0.78rem', color: '#e2e8f0', marginBottom: '0.875rem', letterSpacing: '0.01em' }}>
                {col.heading}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} style={{ fontSize: '0.78rem', color: '#64748b', textDecoration: 'none', transition: 'color 0.12s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#F97316')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
                    >{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact col */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '0.78rem', color: '#e2e8f0', marginBottom: '0.875rem' }}>
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="mailto:info@geofera.olinesia.com" style={{
                display: 'flex', alignItems: 'flex-start', gap: 6,
                fontSize: '0.78rem', color: '#64748b', textDecoration: 'none',
              }}>
                <Mail size={12} style={{ marginTop: 2, flexShrink: 0 }}/> info@geofera.olinesia.com
              </a>
              <a href="tel:+622112345678" style={{
                display: 'flex', alignItems: 'center', gap: 6,
                fontSize: '0.78rem', color: '#64748b', textDecoration: 'none',
              }}>
                <Phone size={12} style={{ flexShrink: 0 }}/> +62 21 1234 5678
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.78rem', color: '#64748b' }}>
                <MapPin size={12} style={{ flexShrink: 0 }}/> Jakarta, Indonesia
              </div>
            </div>
            {/* Social in contact col */}
            <div style={{ display: 'flex', gap: 6, marginTop: '0.875rem' }}>
              {[Linkedin, Youtube, Mail].map((Icon, i) => (
                <a key={i} href="#" style={{
                  width: 28, height: 28, borderRadius: '50%',
                  border: '1px solid #1e293b',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#64748b', textDecoration: 'none',
                }}>
                  <Icon size={12}/>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{
          borderTop: '1px solid #1e293b', paddingTop: '1.25rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '0.75rem',
        }}>
          <p style={{ fontSize: '0.78rem', color: '#475569' }}>
            © 2024 GEOFERA by OliNesia. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Use'].map(label => (
              <Link key={label} href="#"
                style={{ fontSize: '0.78rem', color: '#475569', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F97316')}
                onMouseLeave={e => (e.currentTarget.style.color = '#475569')}
              >{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
