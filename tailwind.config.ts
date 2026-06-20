// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // GOFEW Brand Palette
        navy: {
          950: '#040B18',
          900: '#071428',
          800: '#0A1E3C',
          700: '#0F2A52',
          600: '#153565',
          500: '#1A4080',
          400: '#2B5FA3',
          300: '#4A7EC8',
          200: '#7DAEDE',
          100: '#B8D4EF',
          50:  '#EBF3FA',
        },
        crimson: {
          700: '#A50E1A',
          600: '#C41120',
          500: '#E63946',
          400: '#EF6570',
          300: '#F5959C',
          200: '#FAC2C6',
          100: '#FDE8EA',
        },
        gold: {
          700: '#9A7000',
          600: '#B8880A',
          500: '#D4A017',
          400: '#E4B835',
          300: '#EFD06A',
          200: '#F7E5A4',
          100: '#FDF5DC',
        },
        slate: {
          950: '#0A0F1A',
          900: '#111827',
        },
      },
      fontFamily: {
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #040B18 0%, #0A1E3C 40%, #0F2A52 70%, #040B18 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
        'crimson-gradient': 'linear-gradient(135deg, #E63946 0%, #A50E1A 100%)',
        'gold-gradient': 'linear-gradient(135deg, #E4B835 0%, #9A7000 100%)',
        'mesh-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glass: '0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'glass-lg': '0 8px 48px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.07)',
        crimson: '0 4px 20px rgba(230, 57, 70, 0.35)',
        'crimson-lg': '0 8px 32px rgba(230, 57, 70, 0.45)',
        gold: '0 4px 20px rgba(212, 160, 23, 0.3)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'slide-left': 'slideLeft 0.5s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(230, 57, 70, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(230, 57, 70, 0.6)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}

export default config
