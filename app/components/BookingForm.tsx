'use client'

import { useState } from 'react'
import { z } from 'zod'
import { SITE } from '../lib/site'

const bookingSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Please enter your full name (at least 2 characters).')
    .max(80, 'Name is too long.')
    .regex(
      /^[A-Za-zÀ-ÿ' .\-]+$/,
      'Use only letters, spaces, hyphens, and apostrophes.',
    ),
  email: z
    .string()
    .trim()
    .min(1, 'Email is required.')
    .email('Enter a valid email address.'),
  phone: z
    .string()
    .trim()
    .min(1, 'Phone number is required.')
    .refine((v) => {
      const digits = v.replace(/\D/g, '')
      return digits.length === 10 || (digits.length === 11 && digits.startsWith('1'))
    }, 'Enter a valid 10-digit US phone number.'),
  terms: z.literal(true, {
    message: 'You must accept the Terms and Conditions to continue.',
  }),
  updates: z.boolean().optional(),
})

type BookingValues = {
  name: string
  email: string
  phone: string
  terms: boolean
  updates: boolean
}

type BookingErrors = Partial<Record<keyof BookingValues, string>>

const initialValues: BookingValues = {
  name: '',
  email: '',
  phone: '',
  terms: false,
  updates: false,
}

export default function BookingForm() {
  const [values, setValues] = useState<BookingValues>(initialValues)
  const [errors, setErrors] = useState<BookingErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof BookingValues, boolean>>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function validateField<K extends keyof BookingValues>(field: K, next: BookingValues) {
    const result = bookingSchema.safeParse(next)
    if (result.success) {
      setErrors((prev) => {
        const { [field]: _drop, ...rest } = prev
        return rest
      })
      return
    }
    const issue = result.error.issues.find((i) => i.path[0] === field)
    setErrors((prev) => ({ ...prev, [field]: issue?.message }))
  }

  function setField<K extends keyof BookingValues>(field: K, value: BookingValues[K]) {
    const next = { ...values, [field]: value }
    setValues(next)
    if (touched[field] || errors[field]) {
      validateField(field, next)
    }
  }

  function handleBlur<K extends keyof BookingValues>(field: K) {
    setTouched((t) => ({ ...t, [field]: true }))
    validateField(field, values)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const result = bookingSchema.safeParse(values)
    if (!result.success) {
      const nextErrors: BookingErrors = {}
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof BookingValues
        if (!nextErrors[key]) nextErrors[key] = issue.message
      }
      setErrors(nextErrors)
      setTouched({ name: true, email: true, phone: true, terms: true })
      return
    }

    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 700))
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section
      id="book"
      className="relative overflow-hidden bg-gradient-to-b from-white via-brand-green-soft/30 to-brand-green-soft/60"
    >
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left copy */}
          <div className="lg:col-span-6">
            <span className="tag-pill">Get started today</span>
            <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-dark">
              Book Your MMJ Evaluation
            </h2>
            <p className="mt-3 text-base font-semibold text-brand-slate">
              Evaluation fee starts at ${SITE.pricing.newCard}.
            </p>
            <p className="mt-5 text-lg text-brand-slate leading-relaxed max-w-prose">
              Same-day appointments available. Fill out the form and we&apos;ll connect you with a
              licensed {SITE.state} physician serving {SITE.city} right away.
            </p>

            <ul className="mt-8 space-y-3.5">
              {[
                'Secure, HIPAA-compliant process',
                '100% money-back if not approved',
                `Evaluation from $${SITE.pricing.newCard} — no hidden fees`,
                'Certification typically within 1 hour',
              ].map((i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-brand-dark">
                  <span className="flex-shrink-0 mt-0.5 flex w-6 h-6 items-center justify-center rounded-full bg-brand-green text-white">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6l2.5 2.5L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {i}
                </li>
              ))}
            </ul>

            {/* Doctor photo + trust */}
            <div className="mt-10 flex items-center gap-4 p-5 rounded-2xl bg-white border border-brand-gray-line shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=200&h=200&fit=crop&q=80"
                alt="Dr. Reyes, IDFPR-licensed physician"
                className="w-14 h-14 rounded-full object-cover ring-2 ring-brand-green-soft"
                loading="lazy"
              />
              <div className="flex-1">
                <div className="text-sm font-semibold text-brand-dark">Dr. Reyes, MD &amp; team</div>
                <div className="text-xs text-brand-slate">IDFPR-licensed · cannabis medicine specialists</div>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-green bg-brand-green-soft px-2.5 py-1 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                Online now
              </span>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-2 bg-brand-gradient opacity-30 blur-2xl rounded-3xl" aria-hidden="true" />
              <div className="relative bg-white rounded-3xl border border-brand-gray-line shadow-card-lg overflow-hidden">
                {/* Gradient header */}
                <div className="bg-brand-gradient p-6 lg:p-8 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Book your MMJ evaluation</h3>
                    <span className="text-[11px] uppercase tracking-wider font-semibold bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      From ${SITE.pricing.newCard}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-white/90">
                    A patient coordinator will reach out within 15 minutes.
                  </p>
                </div>

                <div className="p-6 lg:p-8">
                  {submitted ? (
                    <div className="py-10 text-center">
                      <div className="inline-flex w-14 h-14 items-center justify-center rounded-full bg-brand-green-soft text-brand-green mb-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12l5 5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <p className="text-xl font-bold text-brand-dark">Thanks — we&apos;ll be in touch.</p>
                      <p className="mt-2 text-sm text-brand-slate">
                        A patient coordinator will reach out within 15 minutes during business hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      <Field
                        label="Full name"
                        name="name"
                        placeholder="Full name as per ID"
                        autoComplete="name"
                        value={values.name}
                        error={errors.name}
                        onChange={(e) => setField('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                      />
                      <Field
                        label="Email address"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        helper="We'll send your evaluation details here."
                        autoComplete="email"
                        value={values.email}
                        error={errors.email}
                        onChange={(e) => setField('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                      />
                      <Field
                        label="Phone number"
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        helper="Used only to schedule your evaluation."
                        autoComplete="tel"
                        value={values.phone}
                        error={errors.phone}
                        onChange={(e) => setField('phone', e.target.value)}
                        onBlur={() => handleBlur('phone')}
                      />

                      {/* Terms */}
                      <div>
                        <label className="flex items-start gap-3 text-sm text-brand-dark pt-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={values.terms}
                            onChange={(e) => setField('terms', e.target.checked)}
                            onBlur={() => handleBlur('terms')}
                            aria-invalid={errors.terms ? 'true' : undefined}
                            aria-describedby={errors.terms ? 'terms-error' : undefined}
                            className="mt-1 accent-[#059669] w-4 h-4"
                          />
                          <span>
                            I accept the{' '}
                            <a
                              href="#"
                              className="text-brand-green underline underline-offset-2 font-medium"
                            >
                              Terms and Conditions
                            </a>
                          </span>
                        </label>
                        {errors.terms && (
                          <p id="terms-error" className="mt-1.5 ml-7 text-xs font-medium text-red-600">
                            {errors.terms}
                          </p>
                        )}
                      </div>

                      <label className="flex items-start gap-3 text-sm text-brand-slate cursor-pointer">
                        <input
                          type="checkbox"
                          checked={values.updates}
                          onChange={(e) => setField('updates', e.target.checked)}
                          className="mt-1 accent-[#059669] w-4 h-4"
                        />
                        <span>Send me helpful updates (optional)</span>
                      </label>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn-primary w-full justify-center mt-2 text-base py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {submitting ? 'Securing your slot…' : 'Continue to Doctor Evaluation'}
                        {!submitting && (
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                            <path
                              d="M2 7h10M8 3l4 4-4 4"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </button>

                      <p className="text-xs text-brand-gray text-center mt-3 leading-relaxed flex items-center justify-center gap-1.5">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path
                            d="M3 5V3.5a3 3 0 016 0V5M2.5 5h7v6h-7z"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Reviewed by a licensed physician · HIPAA-secure
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  helper,
  error,
  name,
  ...props
}: {
  label: string
  helper?: string
  error?: string
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const errorId = error ? `${name}-error` : undefined
  const helperId = helper ? `${name}-helper` : undefined
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-brand-dark mb-1.5">
        {label}
      </label>
      <input
        id={name}
        name={name}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={errorId || helperId}
        {...props}
        className={`w-full bg-white border rounded-xl px-4 py-3 text-[15px] text-brand-dark placeholder:text-brand-gray/70 focus:outline-none transition-all ${
          error
            ? 'border-red-500 focus:ring-2 focus:ring-red-500/30 focus:border-red-500'
            : 'border-brand-gray-line focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green'
        }`}
      />
      {error ? (
        <p id={errorId} className="mt-1.5 text-xs font-medium text-red-600 flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.4" />
            <path d="M6 3v3.5M6 8.5v.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          {error}
        </p>
      ) : helper ? (
        <p id={helperId} className="mt-1.5 text-xs text-brand-gray">
          {helper}
        </p>
      ) : null}
    </div>
  )
}
