import './globals.css'
import { ReactNode } from 'react'
import { Poppins } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import ThemeRegistry from '@/app/components/ThemeRegistry'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={poppins.className}>
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}
