import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        geo: {
          navy:   '#0A2342',
          blue:   '#2563EB',
          orange: '#F97316',
          green:  '#22C55E',
          purple: '#7C3AED',
          surface:'#F8FAFC',
          border: '#E5E7EB',
          muted:  '#6B7280',
        },
        navy: {
          950: '#040B18', 900: '#071428', 800: '#0A1E3C',
          700: '#0F2A52', 600: '#153565', 500: '#1A4080',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body:    ['system-ui', 'sans-serif'],
        mono:    ['ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem,5vw,4.25rem)', { lineHeight: '1.06', fontWeight: '900' }],
        'display-lg': ['clamp(1.875rem,3.5vw,3rem)', { lineHeight: '1.1',  fontWeight: '800' }],
        'display-md': ['clamp(1.25rem,2.5vw,1.875rem)', { lineHeight: '1.2', fontWeight: '700' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'card':    '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)',
        'card-lg': '0 4px 8px rgba(0,0,0,0.06), 0 16px 48px rgba(0,0,0,0.1)',
        'orange':  '0 4px 20px rgba(249,115,22,0.35)',
        'blue':    '0 4px 20px rgba(37,99,235,0.25)',
        'green':   '0 4px 20px rgba(34,197,94,0.25)',
        'inner-white': 'inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      animation: {
        'fade-up':    'fadeUp 0.55s ease-out forwards',
        'fade-in':    'fadeIn 0.4s ease-out forwards',
        'float':      'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'count-up':   'fadeIn 0.3s ease-out forwards',
        'shimmer':    'shimmer 2.5s infinite',
        'draw':       'draw 1.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        draw: {
          '0%':   { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      backgroundImage: {
        'geo-hero':    'linear-gradient(135deg,#0A2342 0%,#0d2a54 50%,#0A2342 100%)',
        'geo-card':    'linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))',
        'orange-glow': 'radial-gradient(ellipse at center,rgba(249,115,22,0.15),transparent 70%)',
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h48v1H0V0zm0 48h48v-1H0v1zM0 0v48h1V0H0zm48 0v48h-1V0h1z' fill='rgba(255,255,255,0.04)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

export default config
