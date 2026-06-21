// src/app/about/page.tsx

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { committeeMembers } from '@/data/dummy'
import { Target, Eye, Users, BookOpen, Globe, Award, Linkedin } from 'lucide-react'

const objectives = [
  { icon: Users,    title: 'Professional Networking',   desc: 'Foster meaningful connections among geoscience and formation evaluation practitioners across Indonesia.' },
  { icon: BookOpen, title: 'Technical Excellence',       desc: 'Elevate the quality of subsurface practice through rigorous, relevant, and accessible technical training.' },
  { icon: Globe,    title: 'Knowledge Sharing',          desc: 'Create and curate a regional knowledge base addressing Indonesian basin-specific challenges.' },
  { icon: Award,    title: 'Industry Recognition',       desc: 'Recognize outstanding technical contributions through awards, certifications, and publications.' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg-primary)]">
        {/* Hero */}
        <div className="bg-navy-950 pt-28 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 hero-grid opacity-30" />
          <div className="container-tight relative text-center max-w-3xl mx-auto">
            <span className="tag-crimson mb-5 inline-flex">About Us</span>
            <h1 className="font-display font-black text-5xl md:text-6xl text-white mb-5 leading-tight">
              About GEOFERA Indonesia
            </h1>
            <p className="text-xl text-white/55 leading-relaxed">
              GEOFERA stands for Geology Operation & Formation Evaluation Indonesia. We are Indonesia's premier professional community for Geology, Formation Evaluation, Petrophysics & Subsurface Integration — built by practitioners, for practitioners.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="container-tight py-20">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="card-base p-8 border-l-4 border-crimson-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-crimson-500/15 flex items-center justify-center">
                  <Eye size={20} className="text-crimson-500" />
                </div>
                <h2 className="font-display font-bold text-xl text-[var(--text-primary)]">Our Vision</h2>
              </div>
              <p className="text-[var(--text-muted)] leading-relaxed">
                To be Indonesia's most trusted and impactful professional community for formation evaluation, wellsite geology, and subsurface science — recognized nationally and respected internationally.
              </p>
            </div>

            <div className="card-base p-8 border-l-4 border-gold-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gold-500/15 flex items-center justify-center">
                  <Target size={20} className="text-gold-600" />
                </div>
                <h2 className="font-display font-bold text-xl text-[var(--text-primary)]">Our Mission</h2>
              </div>
              <p className="text-[var(--text-muted)] leading-relaxed">
                To connect, educate, and elevate the geoscience and formation evaluation workforce through professional development, technical collaboration, knowledge sharing, and community building across the Indonesian oil & gas, geothermal, and CCS sectors.
              </p>
            </div>
          </div>

          {/* Objectives */}
          <div className="mb-20">
            <h2 className="section-title text-center mb-3">Community Objectives</h2>
            <p className="section-subtitle text-center mx-auto mb-12">
              Four pillars that drive everything we do.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {objectives.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="card-base p-6 text-center group hover:border-crimson-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-crimson-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-crimson-500/20 transition-colors">
                    <Icon size={22} className="text-crimson-500" />
                  </div>
                  <h3 className="font-display font-bold text-sm text-[var(--text-primary)] mb-2">{title}</h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Committee */}
          <div>
            <h2 className="section-title text-center mb-3">Steering Committee</h2>
            <p className="section-subtitle text-center mx-auto mb-12">
              Experienced practitioners guiding GEOFERA's strategic direction.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
              {committeeMembers.map((member) => (
                <div key={member.id} className="card-base p-5 text-center group hover:border-crimson-500/20 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-crimson-gradient flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg shadow-crimson">
                    {member.name.charAt(0)}
                  </div>
                  <div className="font-semibold text-xs text-[var(--text-primary)] leading-snug mb-0.5">{member.name}</div>
                  <div className="text-[10px] text-crimson-500 font-bold mb-0.5">{member.role}</div>
                  <div className="text-[10px] text-[var(--text-muted)]">{member.company}</div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-blue-500 transition-colors"
                  >
                    <Linkedin size={12} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
