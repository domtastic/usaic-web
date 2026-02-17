import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'USA Ice Climbing | Team USA',
    template: '%s | USA Ice Climbing',
  },
  description: 'USA Ice Climbing (USAIC) - Promoting ice climbing in America, supporting Team USA athletes, and championing the sport\'s inclusion in the 2030 Winter Olympics.',
  keywords: ['ice climbing', 'Team USA', 'winter sports', '2030 Olympics', 'lead climbing', 'speed climbing'],
  authors: [{ name: 'USA Ice Climbing' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'USA Ice Climbing',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
<body className="min-h-screen flex flex-col pt-[120px] md:pt-[132px]">
<Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
