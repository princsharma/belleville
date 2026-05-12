export default function Doctor() {
  return (
    <section id="doctor" className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="tag-pill">Meet your doctor</span>
          <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-dark">
            Meet Our <span className="text-gradient">Trusted MMJ Doctor</span>
          </h2>
          <p className="mt-5 text-lg text-brand-slate leading-relaxed">
            Consult online with our experienced, state-certified MMJ doctors for secure, private
            evaluations. Each consultation follows IDPH guidelines to ensure safe, compliant care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-5xl mx-auto">
          {/* Doctor image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] max-w-sm mx-auto">
              <div className="absolute -inset-4 bg-brand-green-mint/50 rounded-[2.5rem] blur-2xl" aria-hidden="true" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=800&q=80&auto=format&fit=crop"
                alt="Dr. Johnathan Miller, MD — Medical Cannabis Evaluating Physician"
                className="relative w-full h-full object-cover rounded-3xl shadow-card-lg ring-1 ring-brand-gray-line"
                loading="lazy"
              />
              {/* Years experience badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-card-lg px-5 py-4 text-center">
                <div className="text-3xl font-extrabold text-brand-dark tabular leading-none">12</div>
                <div className="text-[10px] uppercase tracking-wider font-semibold text-brand-gray mt-1">
                  Years experience
                </div>
              </div>
              {/* HIPAA badge */}
              <div className="absolute -top-3 left-3 bg-white rounded-xl shadow-card-lg px-3 py-2 flex items-center gap-2">
                <span className="flex w-6 h-6 items-center justify-center rounded-md bg-brand-green text-white">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6l2.5 2.5L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-[11px] font-bold tracking-wider text-brand-dark">HIPAA</span>
              </div>
            </div>
          </div>

          {/* Doctor details */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl lg:text-3xl font-bold text-brand-dark">Dr. Johnathan Miller, MD</h3>
            <p className="mt-1 text-brand-green font-semibold">
              Medical Cannabis Evaluating Physician (Illinois)
            </p>

            <dl className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-brand-gray-soft rounded-2xl p-4">
                <dt className="text-[11px] uppercase tracking-wider font-semibold text-brand-gray">
                  NPI
                </dt>
                <dd className="mt-1 text-sm font-bold text-brand-dark tabular">1235623372</dd>
              </div>
              <div className="bg-brand-gray-soft rounded-2xl p-4">
                <dt className="text-[11px] uppercase tracking-wider font-semibold text-brand-gray">
                  Illinois License
                </dt>
                <dd className="mt-1 text-sm font-bold text-brand-dark tabular">36156953</dd>
              </div>
              <div className="bg-brand-gray-soft rounded-2xl p-4">
                <dt className="text-[11px] uppercase tracking-wider font-semibold text-brand-gray">
                  Experience
                </dt>
                <dd className="mt-1 text-sm font-bold text-brand-dark">8 Years</dd>
              </div>
            </dl>

            <p className="mt-6 text-[15px] leading-relaxed text-brand-slate">
              A licensed general physician in Illinois who applies a holistic, patient-focused approach
              while conducting thorough, state-compliant medical marijuana evaluations, ensuring each
              assessment prioritizes patient safety, clear communication, and adherence to established
              medical standards and regulatory guidelines.
            </p>

            <div className="mt-7">
              <a href="#book" className="btn-primary">
                Speak With Your Illinois Doctor
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
