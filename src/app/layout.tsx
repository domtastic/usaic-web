import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import CookieBanner from '@/components/CookieBanner'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'

const GA_ID = 'G-EY1RQHRMTN'

export const metadata: Metadata = {
  title: {
    default: 'USA Ice Climbing',
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
      <head>
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
      </head>
<body className="min-h-screen flex flex-col pt-[120px] md:pt-[132px]">
<Header />
        <ScrollToTop />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <Analytics />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
      </body>
    </html>
  )
}
