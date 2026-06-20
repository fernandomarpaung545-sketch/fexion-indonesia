// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import { Providers } from '@/components/Providers'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'FEXION — Formation Evaluation, Petrophysics & Subsurface Excellence through Integrated OliNesia Network',
    template: '%s | FEXION Indonesia',
  },
  description:
    'The premier professional community for Formation Evaluation, Petrophysics, Wellsite Geology, Mud Logging, Geosteering, and Subsurface Integration professionals in Indonesia.',
  keywords: [
    'FEXION Indonesia',
    'Formation Evaluation',
    'Petrophysics',
    'Wellsite Geology',
    'Mud Logging',
    'Geosteering',
    'Reservoir Evaluation',
    'Indonesian Oil Gas',
    'Geology Community',
    'CCS Indonesia',
  ],
  authors: [{ name: 'FEXION Indonesia' }],
  creator: 'FEXION Indonesia',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://fexion-indonesia.org',
    siteName: 'FEXION Indonesia',
    title: 'FEXION Indonesia — Professional Geoscience Community',
    description: 'Indonesia Community for Geology, Formation Evaluation, Petrophysics and Subsurface Integration.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FEXION Indonesia',
    description: 'Indonesia Community for Geology, Formation Evaluation, Petrophysics and Subsurface Integration.',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-body antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
