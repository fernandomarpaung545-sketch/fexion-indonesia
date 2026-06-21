'use client'
// src/components/layout/Footer.tsx

import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube, ExternalLink } from 'lucide-react'

const footerLinks = {
  'Platform': [
    { label: 'About GEOFERA', href: '/about' },
    { label: 'Community', href: '/community' },
    { label: 'Knowledge Center', href: '/knowledge' },
    { label: 'Gallery', href: '/gallery' },
  ],
  'Programs': [
    { label: 'All Trainings', href: '/training' },
    { label: 'Upcoming Events', href: '/events' },
    { label: 'Conferences', href: '/events?type=CONFERENCE' },
    { label: 'Webinars', href: '/events?type=WEBINAR' },
  ],
  'Disciplines': [
    { label: 'Formation Evaluation', href: '/training?cat=FORMATION_EVALUATION' },
    { label: 'Petrophysics', href: '/training?cat=PETROPHYSICS' },
    { label: 'Wellsite Geology', href: '/training?cat=WELLSITE_GEOLOGY' },
    { label: 'Geosteering', href: '/training?cat=GEOSTEERING' },
    { label: 'CCS & Energy Transition', href: '/training?cat=CCS_ENERGY_TRANSITION' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/[0.06]">
      {/* Main Footer */}
      <div className="container-tight py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-5 group">
              <img src="/geofera-logo.png" alt="GEOFERA" className="h-20 w-auto object-contain brightness-0 invert" />
            </Link>

            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-xs">
              Formation Evaluation, Petrophysics & Subsurface Excellence through Integrated OliNesia Network — Indonesia's community for Geology, Formation Evaluation, Petrophysics & Subsurface Integration.
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-white/50">
                <Mail size={14} className="text-crimson-500 flex-shrink-0" />
                <a href="mailto:info@geofera.olinesia.com" className="hover:text-white transition-colors">
                  info@geofera.olinesia.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <Phone size={14} className="text-crimson-500 flex-shrink-0" />
                <a href="tel:+6221XXXXXXXX" className="hover:text-white transition-colors">
                  +62 21 XXXX XXXX
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/50">
                <MapPin size={14} className="text-crimson-500 flex-shrink-0 mt-0.5" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, href: 'https://linkedin.com/company/geofera-indonesia', label: 'LinkedIn' },
                { icon: Instagram, href: 'https://instagram.com/geofera.indonesia', label: 'Instagram' },
                { icon: Youtube, href: 'https://youtube.com/@geofera-indonesia', label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-4">{group}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Affiliation Bar */}
      <div className="border-t border-white/[0.04] py-5">
        <div className="container-tight flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
            <span>Member of:</span>
            <a href="https://iatmi.or.id" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors flex items-center gap-1">
              IATMI <ExternalLink size={10} />
            </a>
            <span className="opacity-30">•</span>
            <a href="https://iagi.or.id" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors flex items-center gap-1">
              IAGI <ExternalLink size={10} />
            </a>
            <span className="opacity-30">•</span>
            <span>Recognized by SKK Migas</span>
          </div>
          <div className="text-center sm:text-right">
            © {new Date().getFullYear()} GEOFERA Indonesia. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
