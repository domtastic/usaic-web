'use client'

import { useState, useEffect, useRef } from 'react'

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!

const EVENT_TYPES = [
  { value: 'world-cup', label: 'World Cup' },
  { value: 'continental-cup', label: 'Continental Cup' },
  { value: 'ice-festival', label: 'Ice Festival' },
  { value: 'local-competition', label: 'Local Competition' },
  { value: 'clinic', label: 'Clinic' },
]

const inputClasses =
  'w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ice-600 focus:border-transparent text-slate-700 placeholder-slate-400'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function EventSubmissionForm() {
  const [formData, setFormData] = useState({
    title: '',
    eventType: 'local-competition',
    startDate: '',
    endDate: '',
    venue: '',
    city: '',
    state: '',
    country: 'United States',
    description: '',
    eventLink: '',
    submitterName: '',
    submitterEmail: '',
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
      const response = await fetch('/api/submit-event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, turnstileToken }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to submit')
      }

      setStatus('success')
      setFormData({
        title: '',
        eventType: 'local-competition',
        startDate: '',
        endDate: '',
        venue: '',
        city: '',
        state: '',
        country: 'United States',
        description: '',
        eventLink: '',
        submitterName: '',
        submitterEmail: '',
      })
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
        <h3 className="font-display text-2xl text-usa-navy mb-2">Submission Received</h3>
        <p className="text-slate-500 mb-6">
          Thanks for the submission. Our team will review it and, once approved, it&apos;ll appear on the events page.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-ice-600 hover:text-ice-700 font-medium transition-colors"
        >
          Submit another event
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-1">
          Event Title <span className="text-usa-red">*</span>
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          value={formData.title}
          onChange={handleChange}
          className={inputClasses}
          placeholder="e.g. Winona Ice Climbing Festival"
        />
      </div>

      <div>
        <label htmlFor="eventType" className="block text-sm font-medium text-slate-700 mb-1">
          Event Type <span className="text-usa-red">*</span>
        </label>
        <select
          id="eventType"
          name="eventType"
          required
          value={formData.eventType}
          onChange={handleChange}
          className={inputClasses}
        >
          {EVENT_TYPES.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-slate-700 mb-1">
            Start Date <span className="text-usa-red">*</span>
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            required
            value={formData.startDate}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-slate-700 mb-1">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className={inputClasses}
          />
          <p className="text-xs text-slate-500 mt-1">Leave blank if single-day</p>
        </div>
      </div>

      <div>
        <label htmlFor="venue" className="block text-sm font-medium text-slate-700 mb-1">
          Venue Name
        </label>
        <input
          type="text"
          id="venue"
          name="venue"
          value={formData.venue}
          onChange={handleChange}
          className={inputClasses}
          placeholder="e.g. Sandstone Ice Park"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-1">
            City <span className="text-usa-red">*</span>
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-slate-700 mb-1">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1">
            Country <span className="text-usa-red">*</span>
          </label>
          <input
            type="text"
            id="country"
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={formData.description}
          onChange={handleChange}
          className={`${inputClasses} resize-vertical`}
          placeholder="What should climbers know about this event?"
        />
      </div>

      <div>
        <label htmlFor="eventLink" className="block text-sm font-medium text-slate-700 mb-1">
          Event Link
        </label>
        <input
          type="url"
          id="eventLink"
          name="eventLink"
          value={formData.eventLink}
          onChange={handleChange}
          className={inputClasses}
          placeholder="https://..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-slate-200">
        <div>
          <label htmlFor="submitterName" className="block text-sm font-medium text-slate-700 mb-1 mt-6">
            Your Name <span className="text-usa-red">*</span>
          </label>
          <input
            type="text"
            id="submitterName"
            name="submitterName"
            required
            value={formData.submitterName}
            onChange={handleChange}
            className={inputClasses}
            placeholder="So we can follow up with questions"
          />
        </div>
        <div>
          <label htmlFor="submitterEmail" className="block text-sm font-medium text-slate-700 mb-1 mt-6">
            Your Email <span className="text-usa-red">*</span>
          </label>
          <input
            type="email"
            id="submitterEmail"
            name="submitterEmail"
            required
            value={formData.submitterEmail}
            onChange={handleChange}
            className={inputClasses}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div ref={containerRef} />

      {status === 'error' && <p className="text-usa-red text-sm">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Submitting...' : 'Submit for Review'}
      </button>
    </form>
  )
}
