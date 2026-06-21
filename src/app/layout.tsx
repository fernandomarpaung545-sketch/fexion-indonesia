// src/app/layout.tsx
import type { Metadata } from 'next'
import { Providers } from '@/components/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'GEOFERA — Connecting Geoscience, Formation Evaluation, Drilling & Upstream Professionals',
    template: '%s | GEOFERA',
  },
  description: 'GEOFERA is the regional professional platform for geoscience, formation evaluation, drilling and upstream professionals.',
  keywords: ['GEOFERA', 'Formation Evaluation', 'Geoscience', 'Drilling', 'Upstream', 'Petrophysics', 'Subsurface'],
  authors: [{ name: 'GEOFERA' }],
  creator: 'GEOFERA by OliNesia',
  openGraph: {
    type: 'website',
    url: 'https://geofera.olinesia.com',
    siteName: 'GEOFERA',
    title: 'GEOFERA — Professional Subsurface Community',
    description: 'Connecting Geoscience, Formation Evaluation, Drilling & Upstream Professionals',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ fontFamily: 'system-ui, -apple-system, sans-serif', margin: 0, padding: 0 }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
