'use client'

import Link from 'next/link'
import { useState } from 'react'
import { SITE } from '../lib/site'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-brand-gray-line/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link href="/" aria-label={SITE.name} className="flex items-center gap-2.5 group">
          <span className="relative inline-flex w-9 h-9 items-center justify-center rounded-xl bg-brand-gradient shadow-glow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 3c4 4 6 7 6 11a6 6 0 11-12 0c0-4 2-7 6-11z"
                fill="white"
                fillOpacity="0.95"
              />
            </svg>
          </span>
          <span className="font-bold text-[17px] tracking-tight text-brand-dark">
            {SITE.city}<span className="text-brand-green">MMJ</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-1 text-[14px] font-medium text-brand-slate">
          {[
            { href: '#how-it-works', label: 'How it works' },
            { href: '#doctor', label: 'Doctor' },
            { href: '#pricing', label: 'Pricing' },
            { href: '#why', label: 'Why us?' },
            { href: '#faq', label: 'FAQ' },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 rounded-lg hover:text-brand-green hover:bg-brand-green-soft transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SITE.phoneHref}
            className="hidden lg:inline-flex items-center gap-1.5 text-sm font-medium text-brand-slate hover:text-brand-dark transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M11.5 9.5v2a1 1 0 01-1.1 1A10 10 0 011 3.6 1 1 0 012 2.5h2a1 1 0 011 .87c.07.5.2 1 .35 1.46a1 1 0 01-.23 1.05l-.85.85a8 8 0 003.5 3.5l.85-.85a1 1 0 011.05-.23 6.5 6.5 0 001.46.35 1 1 0 01.87 1z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {SITE.phone}
          </a>
          <a href="#book" className="hidden md:inline-flex btn-primary text-sm">
            Get started
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-brand-gray-line"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              {open ? (
                <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-brand-gray-line bg-white shadow-card">
          <nav
            aria-label="Mobile primary"
            className="px-6 py-4 flex flex-col gap-1 text-[15px] font-medium text-brand-slate"
          >
            {[
              { href: '#how-it-works', label: 'How it works' },
              { href: '#doctor', label: 'Doctor' },
              { href: '#pricing', label: 'Pricing' },
              { href: '#why', label: 'Why us?' },
              { href: '#faq', label: 'FAQ' },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg hover:bg-brand-green-soft hover:text-brand-green"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="px-6 pb-5 pt-3 border-t border-brand-gray-line/70 flex flex-col gap-3">
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="btn-primary w-full justify-center text-base py-3"
            >
              Get started
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href={SITE.phoneHref}
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-brand-slate hover:text-brand-dark"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M11.5 9.5v2a1 1 0 01-1.1 1A10 10 0 011 3.6 1 1 0 012 2.5h2a1 1 0 011 .87c.07.5.2 1 .35 1.46a1 1 0 01-.23 1.05l-.85.85a8 8 0 003.5 3.5l.85-.85a1 1 0 011.05-.23 6.5 6.5 0 001.46.35 1 1 0 01.87 1z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Call {SITE.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
