'use client'

import { useState, useEffect, useRef } from 'react'

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [turnstileToken, setTurnstileToken] = useState('')
  const [scriptReady, setScriptReady] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)

  // Step 1: Load the Turnstile script
  useEffect(() => {
    if (document.querySelector('script[data-turnstile]')) {
      setScriptReady(true)
      return
    }
    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.defer = true
    script.dataset.turnstile = 'true'
    script.onload = () => setScriptReady(true)
    document.body.appendChild(script)
  }, [])

  // Step 2: Render the widget once the script is ready and container is mounted
  useEffect(() => {
    if (!scriptReady || !containerRef.current) return
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const turnstile = (window as any).turnstile
    if (!turnstile) return

    widgetIdRef.current = turnstile.render(containerRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      callback: (token: string) => setTurnstileToken(token),
      'error-callback': () => setTurnstileToken(''),
      'expired-callback': () => setTurnstileToken(''),
    })
  }, [scriptReady])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!turnstileToken) {
      setStatus('error')
      setErrorMessage('Please complete the verification checkbox.')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, turnstileToken }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to send')
      }

      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      // Reset the widget so the user can verify again
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const turnstile = (window as any).turnstile
      if (turnstile && widgetIdRef.current) {
        turnstile.reset(widgetIdRef.current)
      }
      setTurnstileToken('')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl text-usa-navy mb-2">Message Sent</h3>
        <p className="text-slate-500 mb-6">
          Thanks for reaching out. We&apos;ll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-ice-600 hover:text-ice-700 font-medium transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
            Name <span className="text-usa-red">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ice-600 focus:border-transparent text-slate-700 placeholder-slate-400"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
            Email <span className="text-usa-red">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ice-600 focus:border-transparent text-slate-700 placeholder-slate-400"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ice-600 focus:border-transparent text-slate-700 placeholder-slate-400"
          placeholder="What is this regarding?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
          Message <span className="text-usa-red">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ice-600 focus:border-transparent text-slate-700 placeholder-slate-400 resize-vertical"
          placeholder="Your message..."
        />
      </div>

      <div ref={containerRef} />

      {status === 'error' && (
        <p className="text-usa-red text-sm">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
