'use client'
import Link from 'next/link'
import { Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const cols = [
  { title:'About GEOFERA', links:[{l:'Our Mission',h:'/about'},{l:'Our Vision',h:'/about'},{l:'Our Team',h:'/about'},{l:'Careers',h:'/contact'}] },
  { title:'Training',      links:[{l:'Courses',h:'/training'},{l:'Learning Paths',h:'/training'},{l:'Certification',h:'/training'},{l:'Training Calendar',h:'/training'}] },
  { title:'Events',        links:[{l:'Webinars',h:'/events'},{l:'Workshops',h:'/events'},{l:'Conferences',h:'/events'},{l:'Event Calendar',h:'/events'}] },
  { title:'Community',     links:[{l:'Membership',h:'/community'},{l:'Chapters',h:'/community'},{l:'Directory',h:'/community'},{l:'Forums',h:'/community'}] },
  { title:'Knowledge Hub', links:[{l:'Articles',h:'/knowledge'},{l:'Case Studies',h:'/knowledge'},{l:'Technical Papers',h:'/knowledge'},{l:'Videos',h:'/knowledge'}] },
  { title:'Membership',    links:[{l:'Membership Benefits',h:'/register'},{l:'Membership Types',h:'/register'},{l:'Join Now',h:'/register'}] },
]

const LS = { color:'#64748b', textDecoration:'none', fontSize:'0.78rem' }

export function Footer() {
  return (
    <footer style={{ background:'#0A2342' }}>
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'2.75rem 1.5rem 1.5rem' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1.5fr repeat(6,1fr) 1.4fr', gap:'1.5rem', marginBottom:'2.25rem' }}>

          {/* Brand */}
          <div>
            <img src="/geofera-logo.png" alt="GEOFERA"
              style={{ height:38, width:'auto', objectFit:'contain',
                filter:'brightness(0) invert(1)', marginBottom:'1rem' }}/>
            <p style={{ fontSize:'0.78rem', lineHeight:1.7, color:'#64748b', maxWidth:'14rem', marginBottom:'0.875rem' }}>
              Connecting Geoscience, Formation Evaluation, Drilling &amp; Upstream Professionals Across the Region.
            </p>
            <div style={{ display:'flex', gap:6 }}>
              {[Linkedin,Youtube,Mail].map((Icon,i) => (
                <a key={i} href="#" style={{ width:28, height:28, borderRadius:'50%',
                  border:'1px solid #1e293b', display:'flex', alignItems:'center',
                  justifyContent:'center', color:'#64748b', textDecoration:'none' }}>
                  <Icon size={12}/>
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {cols.map(col => (
            <div key={col.title}>
              <h4 style={{ fontWeight:700, fontSize:'0.78rem', color:'#e2e8f0', marginBottom:'0.875rem' }}>{col.title}</h4>
              <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'0.45rem' }}>
                {col.links.map(link => (
                  <li key={link.l}>
                    <Link href={link.h} style={LS}
                      onMouseEnter={e=>(e.currentTarget.style.color='#F97316')}
                      onMouseLeave={e=>(e.currentTarget.style.color='#64748b')}>
                      {link.l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 style={{ fontWeight:700, fontSize:'0.78rem', color:'#e2e8f0', marginBottom:'0.875rem' }}>Contact Us</h4>
            <div style={{ display:'flex', flexDirection:'column', gap:'0.5rem' }}>
              {[
                {Icon:Mail,  text:'info@geofera.org',        href:'mailto:info@geofera.org'},
                {Icon:Phone, text:'+62 21 1234 5678',        href:'tel:+622112345678'},
                {Icon:MapPin,text:'Jakarta, Indonesia',       href:'#'},
              ].map(({Icon,text,href}) => (
                <a key={text} href={href} style={{ display:'flex', alignItems:'flex-start', gap:5, ...LS }}
                  onMouseEnter={e=>(e.currentTarget.style.color='#F97316')}
                  onMouseLeave={e=>(e.currentTarget.style.color='#64748b')}>
                  <Icon size={11} style={{ marginTop:1, flexShrink:0 }}/> {text}
                </a>
              ))}
            </div>
            <div style={{ display:'flex', gap:6, marginTop:'0.875rem' }}>
              {[Linkedin,Youtube,Mail].map((Icon,i) => (
                <a key={i} href="#" style={{ width:28, height:28, borderRadius:'50%',
                  border:'1px solid #1e293b', display:'flex', alignItems:'center',
                  justifyContent:'center', color:'#64748b', textDecoration:'none' }}>
                  <Icon size={12}/>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop:'1px solid #1e293b', paddingTop:'1.125rem',
          display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'0.75rem' }}>
          <p style={{ fontSize:'0.78rem', color:'#475569' }}>© 2024 GEOFERA by OliNesia. All Rights Reserved.</p>
          <div style={{ display:'flex', gap:'1.5rem' }}>
            {['Privacy Policy','Terms of Use'].map(l => (
              <Link key={l} href="#" style={{ fontSize:'0.78rem', color:'#475569', textDecoration:'none' }}
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
