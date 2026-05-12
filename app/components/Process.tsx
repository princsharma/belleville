const steps = [
  {
    n: '01',
    title: 'Book Your Appointment',
    body:
      'Provide your basic details, a valid Belleville ID, and a brief health history through our HIPAA-compliant form. Schedule your online consultation for $149 with an Belleville-licensed doctor.',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&q=80&auto=format&fit=crop',
    alt: 'Online appointment booking',
  },
  {
    n: '02',
    title: 'Attend Your Consultation',
    body:
      'Connect via secure video or phone call with an IDPH-registered doctor who will evaluate your medical condition and determine your eligibility for medical cannabis certification.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80&auto=format&fit=crop',
    alt: 'Doctor in a telehealth video consultation with a patient',
  },
  {
    n: '03',
    title: 'Receive Your MMJ Certification',
    body:
      'If clinically approved, your state-registered physician submits your certification to the IDPH system. Log in to the Medical Cannabis Patient Program (MCPP) portal, pay the state fee, and download your digital Belleville medical cannabis card.',
    image:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=900&q=80&auto=format&fit=crop',
    alt: 'Approved patient receiving digital MMJ certificate on phone',
  },
]

export default function Process() {
  return (
    <section id="how-it-works" className="relative bg-gradient-to-b from-brand-green-soft/40 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="tag-pill">How it works</span>
          <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-dark">
            Three Simple Steps to Get Your{' '}
            <span className="text-gradient">Belleville Medical Cannabis Card</span>
          </h2>
          <p className="mt-5 text-lg text-brand-slate leading-relaxed">
            Obtain your medical marijuana recommendation through licensed Belleville physicians in full
            compliance with the Belleville Department of Public Health (IDPH) Medical Cannabis Patient
            Program. Here&apos;s how it works:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          <div
            className="hidden md:block absolute top-[110px] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-brand-green/30 to-transparent pointer-events-none"
            aria-hidden="true"
          />
          {steps.map((s) => (
            <article
              key={s.n}
              className="relative bg-white rounded-3xl border border-brand-gray-line overflow-hidden card-lift"
            >
              <div className="relative aspect-[5/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.image} alt={s.alt} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute top-4 left-4 flex w-11 h-11 items-center justify-center rounded-xl bg-white text-brand-green font-extrabold text-lg shadow-card">
                  {s.n}
                </span>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-semibold text-brand-dark">
                  Step {parseInt(s.n)}: {s.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-brand-slate">{s.body}</p>
              </div>
            </article>
          ))}
        </div>

        {/* IDPH note */}
        <div className="mt-10 max-w-3xl mx-auto p-5 rounded-2xl bg-brand-green-soft/60 border border-brand-green-mint flex items-start gap-3">
          <span className="flex-shrink-0 mt-0.5 flex w-7 h-7 items-center justify-center rounded-full bg-white text-brand-green">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.4" />
              <path d="M7 4v4M7 10v0.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
          <p className="text-sm text-brand-slate leading-relaxed">
            <strong className="text-brand-dark font-semibold">Note:</strong> As of June 22, 2021, IDPH
            issues only digital medical cannabis cards. For verification or renewal, visit the official
            IDPH Medical Cannabis Patient Program portal.
          </p>
        </div>

        {/* CTA + guarantee */}
        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <a href="#book" className="btn-primary text-base py-3.5 px-7">
            Book Your Appointment Now
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <p className="text-sm font-semibold text-brand-slate">
            Not Approved? Get a <span className="text-brand-green">100% Money-Back Guarantee.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
