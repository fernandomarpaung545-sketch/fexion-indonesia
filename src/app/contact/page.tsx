'use client'
// src/app/contact/page.tsx

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube, Send, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate send
    await new Promise(r => setTimeout(r, 1200))
    toast.success('Message sent! We\'ll respond within 1-2 business days.')
    setForm({ name: '', email: '', subject: '', message: '' })
    setLoading(false)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg-primary)]">
        {/* Header */}
        <div className="bg-navy-950 pt-28 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 hero-grid opacity-30" />
          <div className="container-tight relative text-center max-w-2xl mx-auto">
            <span className="tag-crimson mb-4 inline-flex">Get in Touch</span>
            <h1 className="font-display font-black text-4xl md:text-5xl text-white mb-4">Contact GEOFERA</h1>
            <p className="text-lg text-white/55">
              Questions about membership, training, events, or partnership? We'd love to hear from you.
            </p>
          </div>
        </div>

        <div className="container-tight py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'info@geofera.olinesia.com', href: 'mailto:info@geofera.olinesia.com' },
                { icon: Phone, label: 'WhatsApp', value: '+62 812-XXXX-XXXX', href: 'https://wa.me/628120000000' },
                { icon: MapPin, label: 'Location', value: 'Jakarta, Indonesia', href: undefined },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 card-base p-5">
                  <div className="w-10 h-10 rounded-xl bg-crimson-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-crimson-500" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-1">{label}</div>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[var(--text-primary)] hover:text-crimson-500 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-[var(--text-primary)]">{value}</span>
                    )}
                  </div>
                </div>
              ))}

              {/* Social */}
              <div className="card-base p-5">
                <div className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-4">Follow Us</div>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, href: '#', label: 'LinkedIn' },
                    { icon: Instagram, href: '#', label: 'Instagram' },
                    { icon: Youtube, href: '#', label: 'YouTube' },
                    { icon: MessageCircle, href: '#', label: 'WhatsApp Group' },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-10 h-10 rounded-xl card-base flex items-center justify-center text-[var(--text-muted)] hover:text-crimson-500 hover:border-crimson-500/30 transition-all"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="card-base overflow-hidden h-48 bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-crimson-500/40 mx-auto mb-2" />
                  <p className="text-xs text-white/30">Jakarta, Indonesia</p>
                  <a
                    href="https://maps.google.com/?q=Jakarta,Indonesia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-crimson-500/60 hover:text-crimson-500 transition-colors mt-1 inline-block"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="card-base p-8">
                <h2 className="font-display font-bold text-xl text-[var(--text-primary)] mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="label-base">Full Name</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                        className="input-base"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="label-base">Email Address</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                        className="input-base"
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="label-base">Subject</label>
                    <select
                      value={form.subject}
                      onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                      className="input-base"
                      required
                    >
                      <option value="">Select topic...</option>
                      <option>Membership Inquiry</option>
                      <option>Training Registration</option>
                      <option>Event Sponsorship</option>
                      <option>Technical Collaboration</option>
                      <option>Media & Press</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="label-base">Message</label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      className="input-base resize-none"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : (
                      <>Send Message <Send size={16} /></>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
