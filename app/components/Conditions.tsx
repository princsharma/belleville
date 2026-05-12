const conditions = [
  'Chronic pain', 'PTSD', 'Anxiety disorder', 'Cancer',
  'Multiple sclerosis', 'Epilepsy & seizures', 'Glaucoma', 'Crohn’s disease',
  'HIV / AIDS', 'Fibromyalgia', 'Parkinson’s disease', 'Lupus',
  'Rheumatoid arthritis', 'Spinal cord injury', 'Migraines', 'Severe nausea',
  'Cachexia', 'Hepatitis C', 'Tourette syndrome', 'ALS',
  'Sickle cell anemia', 'Autism spectrum', 'Osteoarthritis', 'Spinal stenosis',
]

export default function Conditions() {
  return (
    <section id="conditions" className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] max-w-md lg:max-w-none">
              <div className="absolute -inset-4 bg-brand-green-mint/40 rounded-[2rem] blur-2xl" aria-hidden="true" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=900&q=80&auto=format&fit=crop"
                alt="Doctor reviewing a patient's medical history"
                className="relative w-full h-full object-cover rounded-3xl shadow-card-lg ring-1 ring-brand-gray-line"
                loading="lazy"
              />
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl shadow-card-lg p-5 max-w-[220px]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="flex w-8 h-8 items-center justify-center rounded-lg bg-brand-green-soft text-brand-green">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M2 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-xs font-semibold text-brand-gray uppercase tracking-wider">Qualifying</span>
                </div>
                <div className="text-2xl font-extrabold text-brand-dark">40+ conditions</div>
                <div className="text-xs text-brand-slate mt-1">covered by Belleville law</div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="lg:col-span-7">
            <span className="tag-pill">Do you qualify?</span>
            <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-dark">
              Belleville recognises <span className="text-gradient">over 40 conditions.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-brand-slate max-w-prose">
              The state&apos;s Compassionate Use program covers a wide range of debilitating and
              chronic conditions. If you don&apos;t see yours below, our physicians will review
              your full medical history during the evaluation.
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {conditions.map((c) => (
                <li key={c} className="flex items-center gap-2.5 text-[15px] text-brand-dark">
                  <span className="flex-shrink-0 flex w-5 h-5 items-center justify-center rounded-full bg-brand-green-soft text-brand-green">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M1.5 5l2 2L8.5 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-10 p-5 rounded-2xl bg-brand-green-soft/60 border border-brand-green-mint flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
              <p className="text-sm text-brand-dark">
                <strong className="font-semibold">Not sure if you qualify?</strong> Our doctors will review your full medical history.
              </p>
              <a href="#book" className="btn-primary text-sm flex-shrink-0">
                Check my eligibility
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
