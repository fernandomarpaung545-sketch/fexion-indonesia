'use client'
import Link from 'next/link'
import { Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const cols = [
  { title: 'About GEOFERA', links: ['Our Mission','Our Vision','Our Team','Careers'].map(l=>({label:l,href:'/about'})) },
  { title: 'Training',      links: ['Courses','Learning Paths','Certification','Training Calendar'].map(l=>({label:l,href:'/training'})) },
  { title: 'Events',        links: ['Webinars','Workshops','Conferences','Event Calendar'].map(l=>({label:l,href:'/events'})) },
  { title: 'Community',     links: ['Membership','Chapters','Directory','Forums'].map(l=>({label:l,href:'/community'})) },
  { title: 'Knowledge Hub', links: ['Articles','Case Studies','Technical Papers','Videos'].map(l=>({label:l,href:'/knowledge'})) },
  { title: 'Membership',    links: ['Membership Benefits','Membership Types','Join Now'].map(l=>({label:l,href:'/register'})) },
]

const LS = { color: '#64748B', textDecoration: 'none', fontSize: '0.78rem', transition: 'color 0.12s' }

export function Footer() {
  return (
    <footer style={{ background: '#0A2342' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '2.75rem 1.5rem 1.5rem' }}>
        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr repeat(6,1fr) 1.4fr', gap: '1.5rem', marginBottom: '2.25rem' }}>
          {/* Brand */}
          <div>
            <img src="/geofera-logo.png" alt="GEOFERA"
              style={{ height: 38, width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)', marginBottom: '1rem' }} />
            <p style={{ fontSize: '0.78rem', lineHeight: 1.7, color: '#64748B', maxWidth: '14rem', marginBottom: '0.875rem' }}>
              Connecting Geoscience, Formation Evaluation, Drilling &amp; Upstream Professionals Across the Region.
            </p>
            <div style={{ display: 'flex', gap: 6 }}>
              {[{Icon:Linkedin,href:'#'},{Icon:Youtube,href:'#'},{Icon:Mail,href:'mailto:info@geofera.olinesia.com'}].map(({Icon,href},i)=>(
                <a key={i} href={href} style={{ width:28,height:28,borderRadius:'50%',border:'1px solid #1E293B',
                  display:'flex',alignItems:'center',justifyContent:'center',color:'#64748B',textDecoration:'none' }}>
                  <Icon size={12} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col=>(
            <div key={col.title}>
              <h4 style={{ fontWeight:700,fontSize:'0.78rem',color:'#E2E8F0',marginBottom:'0.875rem' }}>{col.title}</h4>
              <ul style={{ listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:'0.45rem' }}>
                {col.links.map(link=>(
                  <li key={link.label}>
                    <Link href={link.href} style={LS}
                      onMouseEnter={e=>(e.currentTarget.style.color='#F97316')}
                      onMouseLeave={e=>(e.currentTarget.style.color='#64748B')}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 style={{ fontWeight:700,fontSize:'0.78rem',color:'#E2E8F0',marginBottom:'0.875rem' }}>Contact Us</h4>
            <div style={{ display:'flex',flexDirection:'column',gap:'0.5rem' }}>
              {[
                {Icon:Mail,  text:'info@geofera.olinesia.com',href:'mailto:info@geofera.olinesia.com'},
                {Icon:Phone, text:'+62 21 1234 5678',href:'tel:+622112345678'},
                {Icon:MapPin,text:'Jakarta, Indonesia',href:'#'},
              ].map(({Icon,text,href})=>(
                <a key={text} href={href} style={{ display:'flex',alignItems:'flex-start',gap:5,...LS }}
                  onMouseEnter={e=>(e.currentTarget.style.color='#F97316')}
                  onMouseLeave={e=>(e.currentTarget.style.color='#64748B')}>
                  <Icon size={11} style={{ marginTop:1,flexShrink:0 }} /> {text}
                </a>
              ))}
            </div>
            <div style={{ display:'flex',gap:6,marginTop:'0.875rem' }}>
              {[{Icon:Linkedin,href:'#'},{Icon:Youtube,href:'#'},{Icon:Mail,href:'mailto:info@geofera.olinesia.com'}].map(({Icon,href},i)=>(
                <a key={i} href={href} style={{ width:28,height:28,borderRadius:'50%',border:'1px solid #1E293B',
                  display:'flex',alignItems:'center',justifyContent:'center',color:'#64748B',textDecoration:'none' }}>
                  <Icon size={12} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop:'1px solid #1E293B',paddingTop:'1.125rem',
          display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'0.75rem' }}>
          <p style={{ fontSize:'0.78rem',color:'#475569' }}>© 2024 GEOFERA by OliNesia. All Rights Reserved.</p>
          <div style={{ display:'flex',gap:'1.5rem' }}>
            {['Privacy Policy','Terms of Use'].map(l=>(
              <Link key={l} href="#" style={{ fontSize:'0.78rem',color:'#475569',textDecoration:'none' }}
                onMouseEnter={e=>(e.currentTarget.style.color='#F97316')}
                onMouseLeave={e=>(e.currentTarget.style.color='#475569')}>
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
