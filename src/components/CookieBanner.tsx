'use client'

import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookie-consent')) {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-usa-navy text-white px-4 py-4 md:py-3">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/90 text-center sm:text-left">
          Our site uses cookies to enhance your browsing experience. If you continue to use this site, you consent to our use of cookies.
        </p>
        <button
          onClick={handleAccept}
          className="shrink-0 px-6 py-2 bg-usa-red text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-colors"
        >
          OK, I understand
        </button>
      </div>
    </div>
  )
}
