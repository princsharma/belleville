import { SITE } from '../lib/site'

export default function Pricing() {
  const newCard = [
    'Licensed Doctor Consultation',
    'Same-Day Evaluation',
    'Digital Certificate',
    'HIPAA-Compliant Process',
    '100% Money-Back Guarantee',
    '24/7 Customer Support',
  ]
  const renewal = [
    'Secure Renewal Process',
    'Licensed Doctor Review',
    'Same-Day Processing',
    'Updated Digital Certificate',
    'Continued Legal Protection',
    'Priority Customer Support',
  ]

  return (
    <section id="pricing" className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="tag-pill">Transparent pricing</span>
          <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-dark">
            Transparent Pricing with <span className="text-gradient">Trusted Service</span>
          </h2>
          <p className="mt-5 text-lg text-brand-slate leading-relaxed">
            We make your {SITE.city} medical marijuana certification and renewal simple, secure, and
            stress-free. Clear pricing, fast results, and reliable support from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* New patient — featured */}
          <div className="relative">
            <div className="absolute -inset-0.5 bg-brand-gradient rounded-3xl opacity-80 blur-sm" aria-hidden="true" />
            <div className="relative bg-white rounded-3xl border border-brand-green/20 p-8 lg:p-10 shadow-card-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-green">New patient</span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-white bg-brand-gradient px-2.5 py-1 rounded-full">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
                    <path d="M5 0l1.5 3.2L10 3.6 7.4 6l.7 3.4L5 7.8 1.9 9.4 2.6 6 0 3.6 3.5 3.2z" />
                  </svg>
                  Most popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">New MMJ Card</h3>
              <p className="mt-1 text-sm text-brand-slate">Get your first {SITE.city} MMJ card.</p>
              <div className="flex items-baseline gap-2 mt-5">
                <span className="text-6xl font-extrabold text-brand-dark tabular tracking-tight">
                  ${SITE.pricing.newCard}
                </span>
                <span className="text-sm text-brand-gray">one-time</span>
              </div>
              <p className="mt-3 text-sm text-brand-slate">
                Only charged if a physician certifies you.
              </p>

              <ul className="mt-7 space-y-3.5">
                {newCard.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-brand-dark">
                    <span className="flex-shrink-0 mt-0.5 flex w-5 h-5 items-center justify-center rounded-full bg-brand-green-soft text-brand-green">
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                        <path d="M1.5 5.5l2.5 2.5L9.5 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {i}
                  </li>
                ))}
              </ul>
              <a href="#book" className="btn-primary w-full justify-center mt-8 text-base py-3.5">
                Get Your New Card
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Renewal */}
          <div className="bg-white rounded-3xl border border-brand-gray-line p-8 lg:p-10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-gray">Returning patient</span>
            </div>
            <h3 className="text-2xl font-bold text-brand-dark">Card Renewal</h3>
            <p className="mt-1 text-sm text-brand-slate">Renew your existing medical marijuana card.</p>
            <div className="flex items-baseline gap-2 mt-5">
              <span className="text-6xl font-extrabold text-brand-dark tabular tracking-tight">
                ${SITE.pricing.renewal}
              </span>
              <span className="text-sm text-brand-gray">per year</span>
            </div>
            <p className="mt-3 text-sm text-brand-slate">
              Only charged if a physician re-certifies you.
            </p>

            <ul className="mt-7 space-y-3.5">
              {renewal.map((i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-brand-dark">
                  <span className="flex-shrink-0 mt-0.5 flex w-5 h-5 items-center justify-center rounded-full bg-brand-green-soft text-brand-green">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                      <path d="M1.5 5.5l2.5 2.5L9.5 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {i}
                </li>
              ))}
            </ul>
            <a href="#book" className="btn-ghost w-full justify-center mt-8 text-base py-3.5">
              Renew Your Card
            </a>
          </div>
        </div>

        <p className="text-center text-sm text-brand-gray mt-10 max-w-2xl mx-auto leading-relaxed">
          The Belleville state registration fee ($50–$100) is separate and paid directly to the IDPH.
          Our physician fee is independent of the state fee.
        </p>
      </div>
    </section>
  )
}
