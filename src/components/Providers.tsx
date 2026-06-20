'use client'
// src/components/Providers.tsx

import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#0A1E3C',
              color: '#F8FAFC',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
            },
            success: {
              iconTheme: { primary: '#10B981', secondary: '#F8FAFC' },
            },
            error: {
              iconTheme: { primary: '#E63946', secondary: '#F8FAFC' },
            },
          }}
        />
      </ThemeProvider>
    </SessionProvider>
  )
}
