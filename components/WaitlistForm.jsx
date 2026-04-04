'use client'
import { useState } from 'react'

export default function WaitlistForm({ dark = false }) {
  const [email, setEmail] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')

    // TODO: Replace with your actual email capture endpoint
    // Options: Mailchimp, ConvertKit, Resend, or a simple /api/waitlist route
    // Example with a Next.js API route:
    // await fetch('/api/waitlist', { method: 'POST', body: JSON.stringify({ email, businessName }) })

    // Simulated success for now
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
    setEmail('')
    setBusinessName('')
  }

  if (status === 'success') {
    return (
      <div className={`flex items-center gap-3 px-5 py-3.5 rounded-xl border ${
        dark
          ? 'bg-forest-900/60 border-forest-700 text-forest-300'
          : 'bg-forest-50 border-forest-200 text-forest-700'
      }`}>
        <svg className="w-5 h-5 text-forest-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="font-semibold font-sans text-sm">You're on the list — we'll be in touch soon!</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          placeholder="Business name"
          className={`flex-1 px-4 py-3 rounded-xl border font-sans text-sm focus:outline-none focus:ring-2 focus:ring-forest-500/40 transition-all ${
            dark
              ? 'bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/15'
              : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400'
          }`}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Work email"
          required
          className={`flex-1 px-4 py-3 rounded-xl border font-sans text-sm focus:outline-none focus:ring-2 focus:ring-forest-500/40 transition-all ${
            dark
              ? 'bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/15'
              : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400'
          }`}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary whitespace-nowrap w-full justify-center"
      >
        {status === 'loading' ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Joining...
          </>
        ) : (
          'Get Early Access'
        )}
      </button>
    </form>
  )
}
