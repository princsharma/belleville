const tools = [
  {
    cta: 'Check',
    title: 'Marijuana Legality in Belleville',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2l8 3v7c0 5-3.5 9-8 10-4.5-1-8-5-8-10V5l8-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    cta: 'Find out',
    title: 'Do I Qualify in Belleville',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 9a3 3 0 116 0c0 2-3 2-3 4M12 17h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    cta: 'Calculate',
    title: 'Tax Savings in Belleville',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 7h6M9 11h6M9 15h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    cta: 'Calculate',
    title: 'Edible Dosage in Belleville',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 8h16l-2 12H6L4 8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M8 8a4 4 0 118 0" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    cta: 'View',
    title: 'Possession Laws in Belleville',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 3h9l4 4v14H6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M14 3v5h5M9 13h7M9 17h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Tools() {
  return (
    <section id="tools" className="relative bg-gradient-to-b from-white to-brand-green-soft/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <div className="text-center mb-12">
          <span className="tag-pill">Free tools</span>
          <h2 className="mt-5 text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-dark">
            Belleville MMJ <span className="text-gradient">resources & tools</span>
          </h2>
          <p className="mt-4 text-base text-brand-slate max-w-xl mx-auto">
            Free utilities to help you understand your rights, savings, and dosing.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {tools.map((t) => (
            <a
              key={t.title}
              href="#"
              className="group bg-white rounded-2xl border border-brand-gray-line p-5 text-left card-lift"
            >
              <div className="flex w-11 h-11 items-center justify-center rounded-xl bg-brand-green-soft text-brand-green group-hover:bg-brand-gradient group-hover:text-white transition-all">
                {t.icon}
              </div>
              <p className="mt-4 text-xs uppercase tracking-wider font-semibold text-brand-green">
                {t.cta}
              </p>
              <p className="mt-1 text-sm font-semibold text-brand-dark leading-snug">{t.title}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-slate group-hover:text-brand-green transition-colors">
                Open tool
                <svg width="10" height="10" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
