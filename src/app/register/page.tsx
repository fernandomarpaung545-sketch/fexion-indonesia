'use client'
// src/app/register/page.tsx

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, UserPlus, Linkedin, Chrome } from 'lucide-react'
import toast from 'react-hot-toast'
import { signIn } from 'next-auth/react'

export default function RegisterPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)
  const [form, setForm] = useState({
    fullName: '', email: '', password: '', company: '', jobTitle: '', phone: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.password.length < 8) {
      toast.error('Password must be at least 8 characters.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Registration failed')
      toast.success(`Welcome to GEOFERA, ${form.fullName.split(' ')[0]}!`)
      router.push('/login?registered=1')
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-navy-950 flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-navy-900 to-navy-800 relative overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-crimson-500/10 blur-[100px] rounded-full" />
        <div className="relative text-center max-w-md">
          <div className="w-16 h-16 rounded-2xl bg-crimson-gradient mx-auto mb-6 flex items-center justify-center shadow-crimson-lg">
            <span className="font-display font-black text-3xl text-white">G</span>
          </div>
          <h2 className="font-display font-black text-3xl text-white mb-4">Join GEOFERA Indonesia</h2>
          <p className="text-white/55 leading-relaxed">
            Connect with 2,847+ formation evaluation, petrophysics, and geoscience professionals across Indonesia.
          </p>
          <div className="mt-8 space-y-3">
            {[
              'Free membership for individual professionals',
              'Access to technical training & events',
              'Industry knowledge base & case studies',
              'Direct networking with operators & service companies',
            ].map((p, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm text-white/50">
                <div className="w-5 h-5 rounded-full bg-crimson-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-crimson-400 text-xs">✓</span>
                </div>
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 overflow-y-auto">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg bg-crimson-gradient flex items-center justify-center">
              <span className="text-white font-display font-black text-sm">G</span>
            </div>
            <span className="font-display font-bold text-white">GEOFERA Indonesia</span>
          </div>

          <h1 className="font-display font-bold text-2xl text-white mb-1">Create your account</h1>
          <p className="text-white/40 text-sm mb-7">
            Already a member?{' '}
            <Link href="/login" className="text-crimson-400 hover:text-crimson-300 transition-colors">
              Sign in
            </Link>
          </p>

          {/* OAuth */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-all"
            >
              <Chrome size={16} /> Google
            </button>
            <button
              onClick={() => signIn('linkedin', { callbackUrl: '/dashboard' })}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-all"
            >
              <Linkedin size={16} /> LinkedIn
            </button>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-white/[0.08]" />
            <span className="text-xs text-white/25">or register with email</span>
            <div className="flex-1 h-px bg-white/[0.08]" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-white/50 mb-1.5">Full Name *</label>
              <input type="text" value={form.fullName} onChange={e => setForm(p => ({ ...p, fullName: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 text-sm focus:outline-none focus:ring-2 focus:ring-crimson-500/30 focus:border-crimson-500/60 transition-all"
                placeholder="Agus Santoso" required />
            </div>
            <div>
              <label className="block text-xs font-semibold text-white/50 mb-1.5">Email Address *</label>
              <input type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 text-sm focus:outline-none focus:ring-2 focus:ring-crimson-500/30 focus:border-crimson-500/60 transition-all"
                placeholder="you@company.com" required />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-white/50 mb-1.5">Company</label>
                <input type="text" value={form.company} onChange={e => setForm(p => ({ ...p, company: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 text-sm focus:outline-none focus:ring-2 focus:ring-crimson-500/30 focus:border-crimson-500/60 transition-all"
                  placeholder="Pertamina EP" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/50 mb-1.5">Job Title</label>
                <input type="text" value={form.jobTitle} onChange={e => setForm(p => ({ ...p, jobTitle: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 text-sm focus:outline-none focus:ring-2 focus:ring-crimson-500/30 focus:border-crimson-500/60 transition-all"
                  placeholder="Petrophysicist" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-white/50 mb-1.5">Password *</label>
              <div className="relative">
                <input type={show ? 'text' : 'password'} value={form.password} onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
                  className="w-full px-4 py-3 pr-10 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 text-sm focus:outline-none focus:ring-2 focus:ring-crimson-500/30 focus:border-crimson-500/60 transition-all"
                  placeholder="Minimum 8 characters" required />
                <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60">
                  {show ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button type="submit" disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-crimson-500 hover:bg-crimson-600 text-white font-semibold text-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-crimson mt-2">
              {loading ? 'Creating account...' : <><UserPlus size={16} /> Create Free Account</>}
            </button>
          </form>

          <p className="text-center text-xs text-white/25 mt-5">
            By registering you agree to GEOFERA's{' '}
            <Link href="/terms" className="text-white/40 hover:text-white/60 transition-colors">Terms of Service</Link>
            {' '}and{' '}
            <Link href="/privacy" className="text-white/40 hover:text-white/60 transition-colors">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
