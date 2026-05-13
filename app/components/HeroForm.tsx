'use client'

import { useState, type FormEvent } from 'react'
import {
  CheckCircle2,
  User,
  Mail,
  Phone,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react'

const STATE = {
  stateAbbr: 'IL',
  stateName: 'Illinois',
  city: 'Belleville',
  timezone: 'CST',
} as const

const UTM_SOURCE = 'medicalmarijuanacardbelleville'

const HEALLY_PREFILL_URL = 'https://mymmj.getheally.com/patient_admin/prefill'

type FormState = {
  fullName: string
  email: string
  phone: string
  agreeTerms: boolean
  marketingOptIn: boolean
}

type Errors = Partial<Record<'fullName' | 'email' | 'phone' | 'agreeTerms', string>>

const initial: FormState = {
  fullName: '',
  email: '',
  phone: '',
  agreeTerms: false,
  marketingOptIn: false,
}

function base64UrlEncode(json: string): string {
  return btoa(json).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function validate(values: FormState): Errors {
  const errors: Errors = {}
  if (!values.fullName.trim() || values.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name.'
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  const digits = values.phone.replace(/\D/g, '')
  if (digits.length < 10) {
    errors.phone = 'Please enter a valid phone number.'
  }
  if (!values.agreeTerms) {
    errors.agreeTerms = 'You must agree to the Terms & Conditions.'
  }
  return errors
}

export default function HeroForm() {
  const [values, setValues] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [submitting, setSubmitting] = useState(false)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }))
    if (errors[key as keyof Errors]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[key as keyof Errors]
        return next
      })
    }
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (submitting) return

    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setSubmitting(true)

    const nameParts = values.fullName.trim().split(/\s+/)
    const firstName = nameParts[0]
    const lastName = nameParts.slice(1).join(' ') || ''

    const payload = {
      first_name: firstName,
      last_name: lastName,
      email: values.email.trim(),
      phone: values.phone.trim(),
      state: STATE.stateAbbr,
      state_of_evaluation: STATE.stateAbbr,
      timezone: STATE.timezone,
      city: STATE.city,
      extra_data: {
        'contact[contact_type]': 'Web Form',
        'product[name]': 'Eva',
        utm_source: UTM_SOURCE,
        marketing_opt_in: values.marketingOptIn,
      },
    }

    const preset = base64UrlEncode(JSON.stringify(payload))

    if (typeof window !== 'undefined') {
      const w = window as Window & { dataLayer?: Record<string, unknown>[] }
      w.dataLayer = w.dataLayer || []
      w.dataLayer.push({
        event: 'heallyValidatedSubmit',
        utm_source: UTM_SOURCE,
      })
    }

    window.location.assign(
      `${HEALLY_PREFILL_URL}?redirect=sched&preset=${preset}&utm_source=${UTM_SOURCE}`,
    )
  }

  const inputBase =
    'w-full bg-white border rounded-xl pl-11 pr-4 py-3 text-[15px] text-brand-dark placeholder:text-brand-gray/70 focus:outline-none transition-all'
  const inputOk =
    'border-brand-gray-line focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green'
  const inputErr =
    'border-red-500 focus:ring-2 focus:ring-red-500/30 focus:border-red-500'

  return (
    <div className="relative">
      <div
        className="absolute -inset-2 bg-brand-gradient opacity-30 blur-2xl rounded-3xl"
        aria-hidden="true"
      />
      <form
        onSubmit={onSubmit}
        noValidate
        className="relative bg-white rounded-3xl border border-brand-gray-line shadow-card-lg overflow-hidden"
      >
        {/* Gradient header */}
        <div className="bg-brand-gradient p-6 sm:p-7 text-white">
          <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
            Get Started
          </span>
          <h2 className="mt-3 text-2xl sm:text-[26px] font-bold leading-tight">
            Get Started Today
          </h2>
          <p className="mt-1.5 text-sm text-white/90">
            Begin your evaluation by completing the form below.
          </p>
        </div>

        <div className="p-6 sm:p-7 space-y-4">
          {/* Full name */}
          <div>
            <label
              htmlFor="hf-fullName"
              className="block text-sm font-semibold text-brand-dark mb-1.5"
            >
              Full Name <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <User
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="hf-fullName"
                type="text"
                autoComplete="name"
                placeholder="John Doe"
                value={values.fullName}
                onChange={(e) => update('fullName', e.target.value)}
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? 'hf-fullName-error' : undefined}
                className={`${inputBase} ${errors.fullName ? inputErr : inputOk}`}
              />
            </div>
            {errors.fullName && (
              <p
                id="hf-fullName-error"
                role="alert"
                className="mt-1.5 text-xs font-medium text-red-600 flex items-center gap-1"
              >
                <AlertCircle className="w-3 h-3" aria-hidden="true" />
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="hf-email"
              className="block text-sm font-semibold text-brand-dark mb-1.5"
            >
              Email Address <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <Mail
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="hf-email"
                type="email"
                autoComplete="email"
                placeholder="john@example.com"
                value={values.email}
                onChange={(e) => update('email', e.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'hf-email-error' : undefined}
                className={`${inputBase} ${errors.email ? inputErr : inputOk}`}
              />
            </div>
            {errors.email && (
              <p
                id="hf-email-error"
                role="alert"
                className="mt-1.5 text-xs font-medium text-red-600 flex items-center gap-1"
              >
                <AlertCircle className="w-3 h-3" aria-hidden="true" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="hf-phone"
              className="block text-sm font-semibold text-brand-dark mb-1.5"
            >
              Phone Number <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <Phone
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="hf-phone"
                type="tel"
                autoComplete="tel"
                inputMode="numeric"
                placeholder="(555) 123-4567"
                maxLength={14}
                value={values.phone}
                onChange={(e) => {
                  const digits = e.target.value.replace(/\D/g, '').slice(0, 10)
                  let formatted = digits
                  if (digits.length > 6) {
                    formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
                  } else if (digits.length > 3) {
                    formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`
                  } else if (digits.length > 0) {
                    formatted = `(${digits}`
                  }
                  update('phone', formatted)
                }}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'hf-phone-error' : undefined}
                className={`${inputBase} ${errors.phone ? inputErr : inputOk}`}
              />
            </div>
            {errors.phone && (
              <p
                id="hf-phone-error"
                role="alert"
                className="mt-1.5 text-xs font-medium text-red-600 flex items-center gap-1"
              >
                <AlertCircle className="w-3 h-3" aria-hidden="true" />
                {errors.phone}
              </p>
            )}
          </div>

          {/* Terms */}
          <div className="pt-1">
            <label className="flex items-start gap-3 text-sm text-brand-dark cursor-pointer">
              <input
                type="checkbox"
                checked={values.agreeTerms}
                onChange={(e) => update('agreeTerms', e.target.checked)}
                aria-invalid={Boolean(errors.agreeTerms)}
                className="mt-0.5 accent-[#059669] w-4 h-4 flex-shrink-0"
              />
              <span>
                I agree to the{' '}
                <a
                  href="/terms/"
                  className="text-brand-green underline underline-offset-2 font-medium"
                >
                  Terms &amp; Conditions
                </a>
              </span>
            </label>
            {errors.agreeTerms && (
              <p
                role="alert"
                className="mt-1.5 ml-7 text-xs font-medium text-red-600 flex items-center gap-1"
              >
                <AlertCircle className="w-3 h-3" aria-hidden="true" />
                {errors.agreeTerms}
              </p>
            )}
          </div>

          {/* Marketing opt-in */}
          <label className="flex items-start gap-3 text-sm text-brand-slate cursor-pointer">
            <input
              type="checkbox"
              checked={values.marketingOptIn}
              onChange={(e) => update('marketingOptIn', e.target.checked)}
              className="mt-0.5 accent-[#059669] w-4 h-4 flex-shrink-0"
            />
            <span>Send me updates and special offers</span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            aria-busy={submitting}
            className="btn-primary w-full justify-center mt-1 text-base py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? 'Redirecting…' : 'Continue to Next Step'}
            {!submitting && <ArrowRight className="w-4 h-4" aria-hidden="true" />}
          </button>

          <p className="text-xs text-brand-gray text-center mt-2 leading-relaxed flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
            Your information is encrypted and HIPAA compliant
          </p>
        </div>
      </form>
    </div>
  )
}
