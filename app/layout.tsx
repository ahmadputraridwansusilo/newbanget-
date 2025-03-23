import type { Metadata } from 'next'
import './globals.css'
import ParticleBackground from '@/components/particle-background'

export const metadata: Metadata = {
  title: "bufAI",
  description: "Created with ahmad",
  generator: "ahmad",
  icons: {
    icon: "/gila.png", // Path diperbarui ke file favicon yang benar
    shortcut: "/gila.png",
    apple: "/gila.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ParticleBackground/>
      <body>
        {children}</body>
    </html>
  )
}