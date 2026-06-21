'use client'
import Link from 'next/link'
import { Linkedin, Youtube, Mail } from 'lucide-react'

const footerCols = [
  { heading: 'About GEOFERA', links: [
    { label: 'Our Mission',   href: '/about' },
    { label: 'Our Vision',    href: '/about' },
    { label: 'Our Team',      href: '/about' },
    { label: 'Careers',       href: '/contact' },
  ]},
  { heading: 'Training', links: [
    { label: 'Courses',          href: '/training' },
    { label: 'Learning Paths',   href: '/training' },
    { label: 'Certification',    href: '/training' },
    { label: 'Training Calendar',href: '/training' },
  ]},
  { heading: 'Events', links: [
    { label: 'Webinars',      href: '/events' },
    { label: 'Workshops',     href: '/events' },
    { label: 'Conferences',   href: '/events' },
    { label: 'Event Calendar',href: '/events' },
  ]},
  { heading: 'Community', links: [
    { label: 'Membership', href: '/community' },
    { label: 'Chapters',   href: '/community' },
    { label: 'Directory',  href: '/community' },
    { label: 'Forums',     href: '/community' },
  ]},
  { heading: 'Knowledge Hub', links: [
    { label: 'Articles',        href: '/knowledge' },
    { label: 'Case Studies',    href: '/knowledge' },
    { label: 'Technical Papers',href: '/knowledge' },
    { label: 'Videos',          href: '/knowledge' },
  ]},
  { heading: 'Membership', links: [
    { label: 'Benefits',  href: '/register' },
    { label: 'Tiers',     href: '/register' },
    { label: 'Join Now',  href: '/register' },
  ]},
  { heading: 'Contact Us', links: [
    { label: 'info@geofera.olinesia.com', href: 'mailto:info@geofera.olinesia.com' },
    { label: '+62 21 1234 5678',          href: 'tel:+622112345678' },
    { label: 'Jakarta, Indonesia',        href: '#' },
  ]},
]

export function Footer() {
  return (
    <footer style={{ background: '#0A2342', color: '#94a3b8' }}>
      <div className="container-tight py-12">
        {/* Main grid */}
        <div className="grid gap-8" style={{ gridTemplateColumns: '1.5fr repeat(7, 1fr)' }}>
          {/* Brand */}
          <div>
            <img src="/geofera-logo.png" alt="GEOFERA"
              className="object-contain mb-4"
              style={{ height: 40, width: 'auto', filter: 'brightness(0) invert(1)' }}/>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748b', maxWidth: '15rem' }}>
              Connecting Geoscience, Formation Evaluation, Drilling &amp; Upstream Professionals Across the Region.
            </p>
            <div className="flex gap-2">
              {[Linkedin, Youtube, Mail].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:border-[#F97316] hover:text-[#F97316]"
                  style={{ border: '1px solid #1e293b', color: '#64748b' }}>
                  <Icon size={14}/>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerCols.map((col) => (
            <div key={col.heading}>
              <h4 className="font-bold text-xs mb-4" style={{ color: '#e2e8f0', letterSpacing: '0.02em' }}>{col.heading}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}
                      className="text-xs transition-colors hover:text-[#F97316]"
                      style={{ color: '#64748b' }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between flex-wrap gap-3 mt-10 pt-6"
          style={{ borderTop: '1px solid #1e293b' }}>
          <p className="text-xs" style={{ color: '#475569' }}>© 2024 GEOFERA by OliNesia. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="text-xs hover:text-[#F97316] transition-colors" style={{ color: '#475569' }}>Privacy Policy</Link>
            <Link href="#" className="text-xs hover:text-[#F97316] transition-colors" style={{ color: '#475569' }}>Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
