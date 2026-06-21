// src/app/layout.tsx
import type { Metadata } from 'next'
import { Providers } from '@/components/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'GEOFERA — Connecting Geoscience, Formation Evaluation, Drilling & Upstream Professionals',
    template: '%s | GEOFERA',
  },
  description: 'GEOFERA is the regional professional platform for subsurface professionals. Join 3,000+ members across 15+ countries.',
  keywords: ['GEOFERA','Formation Evaluation','Geoscience','Drilling','Upstream','Petrophysics','Subsurface','Indonesia'],
  authors: [{ name: 'GEOFERA by OliNesia' }],
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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
