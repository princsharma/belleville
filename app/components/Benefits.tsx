const benefits = [
  {
    title: 'Legal Protection',
    body:
      'Enjoy peace of mind knowing you’re fully compliant with Belleville cannabis laws and IDPH guidelines.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2l8 3v7c0 5-3.5 9-8 10-4.5-1-8-5-8-10V5l8-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Minor Access',
    body:
      'Qualified patients under 18 may access medical cannabis through a registered caregiver aged 21 or older.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 19c0-3 3-5 6-5s6 2 6 5M13 19c0-2 2-3.5 4-3.5s4 1.5 4 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Higher Purchase Limit',
    body:
      'Buy up to 2.5 ounces of flower (or equivalent) every 14 days, far more than standard adult-use limits.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 7h16l-2 13H6L4 7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 7V5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    badge: '2.5 oz / 14 days',
  },
  {
    title: 'Tax Savings',
    body:
      'Medical cannabis is taxed at just 1%, while recreational buyers often face total taxes reaching roughly 31–32%.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 17l10-10M9 8h.01M15 16h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="9" cy="8" r="2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="15" cy="16" r="2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
    badge: '1% vs 31–32%',
  },
  {
    title: 'Home Cultivation Rights',
    body:
      'Legally cultivate up to five cannabis plants per residence, as permitted under Belleville law.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 21v-6M12 15c-3 0-5-2-5-5 0 0 5 0 5 5zM12 15c3 0 5-2 5-5 0 0-5 0-5 5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 10c0-3 2-5 5-5M12 10c0-3-2-5-5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    badge: 'Up to 5 plants',
  },
  {
    title: 'Employment Protection',
    body:
      'Gain workplace protection from discrimination for lawful medical cannabis use (except for federal employees).',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="relative bg-gradient-to-b from-white via-brand-green-soft/40 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="tag-pill">Why get certified</span>
          <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-dark">
            Benefits of a <span className="text-gradient">Belleville Medical Cannabis Card</span>
          </h2>
          <p className="mt-5 text-lg text-brand-slate leading-relaxed">
            Your Belleville MMJ card gives you benefits that recreational users don&apos;t have — saving you
            money, expanding access, and protecting your rights under Belleville law. Here&apos;s what you can expect:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <article
              key={b.title}
              className="group relative bg-white rounded-3xl border border-brand-gray-line p-7 card-lift"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex w-14 h-14 items-center justify-center rounded-2xl bg-brand-green-soft text-brand-green group-hover:bg-brand-gradient group-hover:text-white transition-all">
                  {b.icon}
                </div>
                {b.badge && (
                  <span className="tag-pill text-[10px]">{b.badge}</span>
                )}
              </div>
              <h3 className="text-xl font-bold text-brand-dark">{b.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-brand-slate">{b.body}</p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 max-w-4xl mx-auto bg-white rounded-3xl border border-brand-gray-line shadow-card p-8 lg:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h3 className="text-xl lg:text-2xl font-bold text-brand-dark">
              Explore the benefits available to qualifying Belleville patients.
            </h3>
            <p className="mt-2 text-brand-slate">
              Thousands of patients are already taking advantage of an MMJ card. Now, it&apos;s your turn.
            </p>
          </div>
          <a href="#book" className="btn-primary justify-center md:justify-end">
            Book Your Appointment
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
