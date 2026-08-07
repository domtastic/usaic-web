'use client'

import { useState, useEffect, useRef } from 'react'

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!

const EVENT_TYPES = [
  { value: 'ice-festival', label: 'Ice Festival' },
  { value: 'local-competition', label: 'Local Competition' },
  { value: 'clinic', label: 'Clinic' },
]

const inputClasses =
  'w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ice-600 focus:border-transparent text-slate-700 placeholder-slate-400'

const MAX_POSTER_SIZE = 4 * 1024 * 1024 // 4MB

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function EventSubmissionForm() {
  const [formData, setFormData] = useState({
    title: '',
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
  const [eventType, setEventType] = useState<string[]>([])
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [turnstileToken, setTurnstileToken] = useState('')
  const [scriptReady, setScriptReady] = useState(false)
  const [posterImage, setPosterImage] = useState<File | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

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

  const handleEventTypeToggle = (value: string) => {
    setEventType((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  const handlePosterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null

    if (file && !file.type.startsWith('image/')) {
      setStatus('error')
      setErrorMessage('Poster must be an image file.')
      e.target.value = ''
      setPosterImage(null)
      return
    }
    if (file && file.size > MAX_POSTER_SIZE) {
      setStatus('error')
      setErrorMessage('Poster image must be under 4MB.')
      e.target.value = ''
      setPosterImage(null)
      return
    }

    setPosterImage(file)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (eventType.length === 0) {
      setStatus('error')
      setErrorMessage('Please select at least one event type.')
      return
    }

    if (!turnstileToken) {
      setStatus('error')
      setErrorMessage('Please complete the verification checkbox.')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      const submitData = new FormData()
      Object.entries(formData).forEach(([key, value]) => submitData.set(key, value))
      eventType.forEach((type) => submitData.append('eventType', type))
      submitData.set('turnstileToken', turnstileToken)
      if (posterImage) submitData.set('posterImage', posterImage)

      const response = await fetch('/api/submit-event', {
        method: 'POST',
        body: submitData,
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to submit')
      }

      setStatus('success')
      setFormData({
        title: '',
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
      setEventType([])
      setPosterImage(null)
      if (fileInputRef.current) fileInputRef.current.value = ''
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
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Event Type <span className="text-usa-red">*</span>
        </label>
        <p className="text-xs text-slate-500 mb-2">Select all that apply — e.g. a festival that also includes a clinic.</p>
        <div className="flex flex-wrap gap-4">
          {EVENT_TYPES.map((type) => (
            <label key={type.value} className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                name="eventType"
                value={type.value}
                checked={eventType.includes(type.value)}
                onChange={() => handleEventTypeToggle(type.value)}
                className="w-4 h-4 rounded border-slate-300 text-ice-600 focus:ring-ice-600"
              />
              {type.label}
            </label>
          ))}
        </div>
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

      <div>
        <label htmlFor="posterImage" className="block text-sm font-medium text-slate-700 mb-1">
          Event Poster / Image
        </label>
        <input
          type="file"
          id="posterImage"
          name="posterImage"
          accept="image/*"
          ref={fileInputRef}
          onChange={handlePosterChange}
          className="w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-ice-50 file:text-ice-700 file:font-medium hover:file:bg-ice-100"
        />
        <p className="text-xs text-slate-500 mt-1">Optional — flyer or poster image, up to 4MB</p>
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
