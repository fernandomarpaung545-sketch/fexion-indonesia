import type { Metadata } from 'next'
import { Providers } from '@/components/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'GEOFERA — Connecting Geoscience, Formation Evaluation, Drilling & Upstream Professionals',
  description: 'GEOFERA is the regional professional community platform for subsurface professionals.',
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
