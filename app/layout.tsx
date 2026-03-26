import type { Metadata, Viewport } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins"
});

// NUEVA FUENTE EDITORIAL PARA TÍTULOS
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ['normal', 'italic'],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: 'Aura Beauty | Clínica de Estética Avanzada',
  description: 'Cosmetología, estética avanzada y bienestar en nuestro exclusivo salón. Reservá tu turno online.',
  keywords: ['estética integral', 'cosmetología', 'clínica estética', 'salón de belleza', 'spa premium'],
}

export const viewport: Viewport = {
  themeColor: '#0D1117',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} ${playfair.variable} font-sans antialiased bg-[#0B0F14]`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}