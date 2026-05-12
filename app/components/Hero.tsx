import { SITE } from '../lib/site'

const trustPills = [
  {
    label: 'HIPAA Protected',
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M3 5V3.5a4 4 0 018 0V5M2.5 5h9v7a1 1 0 01-1 1h-7a1 1 0 01-1-1V5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Same-Day Appointment',
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="10" height="9" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2 6h10M5 1.5v3M9 1.5v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: '24/7 Support',
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 3.5V7l2 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-green-soft/60 via-white to-white">
      <div
        className="absolute inset-x-0 top-0 h-[700px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, rgba(16,185,129,0.18) 0%, rgba(16,185,129,0) 70%)',
        }}
      />
      <div className="absolute inset-0 bg-grid opacity-[0.35] pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-12 lg:pt-20 pb-16 lg:pb-24">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-xs text-brand-gray">
          <a href="#" className="hover:text-brand-green">Home</a>
          <span className="mx-2">»</span>
          <span className="text-brand-dark font-medium">{SITE.city} Medical Marijuana Card</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: copy */}
          <div className="lg:col-span-7 animate-fade-up">
            <h1 className="font-display font-extrabold tracking-tightest text-[36px] sm:text-[48px] lg:text-[58px] leading-[1.05] text-brand-dark">
              Apply For Your <span className="text-gradient">{SITE.city} Medical Marijuana Card</span> Online Today
            </h1>
            <p className="mt-5 text-lg lg:text-xl font-semibold text-brand-slate">
              Value You Expect, Support You Need, and Trust You Deserve.
            </p>
            <p className="mt-5 text-base lg:text-lg leading-relaxed text-brand-slate max-w-2xl">
              Consult with {SITE.state}-licensed medical professionals online for your medical cannabis card.
              Secure and HIPAA-compliant evaluations under IDPH guidelines.
            </p>

            {/* Trust pills */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              {trustPills.map((t) => (
                <span key={t.label} className="tag-pill">
                  {t.icon}
                  {t.label}
                </span>
              ))}
            </div>

            {/* Star rating */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center gap-0.5 text-brand-green">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                    <path d="M7 0l2 4.4 4.8.6-3.5 3.4.85 4.8L7 11l-4.15 2.2.85-4.8L.2 5l4.8-.6L7 0z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-brand-slate">
                <strong className="text-brand-dark font-bold">4.8/5</strong> rating from{' '}
                <strong className="text-brand-dark font-semibold">thousands</strong> of satisfied patients.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href="#book" className="btn-primary text-base">
                Get my card now
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#how-it-works" className="btn-ghost">
                See how it works
              </a>
            </div>

            {/* Review platforms */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {SITE.platformRatings.map((p) => (
                <div
                  key={p.name}
                  className="bg-white border border-brand-gray-line rounded-2xl p-4 flex items-center gap-3 card-lift"
                >
                  <span className="flex w-10 h-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-green-soft text-brand-green text-[11px] font-extrabold tracking-tight">
                    {p.name === 'Google' ? 'G' : p.name === 'BBB' ? 'BBB' : p.name === 'Trustpilot' ? '★' : 'RR'}
                  </span>
                  <div className="leading-tight min-w-0">
                    <div className="text-[11px] text-brand-gray font-medium truncate">{p.label}</div>
                    <div className="text-sm font-bold text-brand-dark flex items-center gap-1">
                      {p.score}
                      <span className="text-brand-green">/ 5</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: hero image with floating cards */}
          <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: '120ms' }}>
            <div className="relative aspect-[4/5] w-full max-w-[500px] mx-auto">
              <div className="absolute -inset-6 bg-brand-gradient opacity-20 blur-3xl rounded-[3rem]" aria-hidden="true" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80&auto=format&fit=crop"
                alt="Doctor consulting a patient via telehealth"
                className="relative w-full h-full object-cover rounded-[2rem] shadow-card-lg ring-1 ring-brand-gray-line"
                loading="eager"
              />

              <div className="absolute -left-4 sm:-left-8 top-8 bg-white rounded-2xl shadow-card-lg p-4 flex items-center gap-3 animate-float-slow max-w-[230px]">
                <span className="flex w-10 h-10 items-center justify-center rounded-xl bg-brand-green-soft text-brand-green">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10l4 4L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div className="leading-tight">
                  <div className="text-[13px] font-semibold text-brand-dark">IDPH approved</div>
                  <div className="text-[11px] text-brand-gray">Sent · 24m ago</div>
                </div>
              </div>

              <div
                className="absolute -right-4 sm:-right-8 bottom-10 bg-white rounded-2xl shadow-card-lg p-4 animate-float-slow max-w-[210px]"
                style={{ animationDelay: '1.5s' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-brand-green" />
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-brand-gray">
                    Approval rate
                  </span>
                </div>
                <div className="text-3xl font-extrabold text-brand-dark tabular">{SITE.stats.approval}</div>
                <div className="mt-2 h-1.5 w-full bg-brand-green-soft rounded-full overflow-hidden">
                  <div className="h-full bg-brand-gradient rounded-full" style={{ width: '98%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
