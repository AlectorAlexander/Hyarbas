// src/app/layout.tsx
'use client'

import './globals.css'
import { ReactNode } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from '@/app/styles/theme'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
