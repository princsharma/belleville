import { SITE } from '../lib/site'

const rows = [
  { feature: 'Licensed Doctors', us: true, providers: true, clinics: true },
  { feature: 'HIPAA Compliant', us: true, providers: true, clinics: false },
  { feature: 'Same-Day Evaluation', us: true, providers: false, clinics: false },
  { feature: 'Affordable Pricing', us: true, providers: false, clinics: false },
  { feature: 'Money-Back Guarantee', us: true, providers: false, clinics: false },
  { feature: '24/7 Customer Support', us: true, providers: false, clinics: false },
]

const stats = [
  { v: SITE.stats.experience, l: 'Years of Experience' },
  { v: SITE.stats.patients, l: 'Patients Served' },
  { v: SITE.stats.doctors, l: 'Licensed Doctors' },
  { v: `${SITE.stats.rating}★`, l: 'Customer Rating' },
]

function CheckIcon() {
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand-green-soft text-brand-green">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

function MinusIcon() {
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand-gray-soft text-brand-gray">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M3 7h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  )
}

export default function Compare() {
  return (
    <section id="why" className="relative bg-gradient-to-b from-white to-brand-green-soft/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="tag-pill">Why patients choose us</span>
          <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-dark">
            Why {SITE.city} Patients Prefer <span className="text-gradient">{SITE.shortName}?</span>
          </h2>
          <p className="mt-5 text-lg text-brand-slate leading-relaxed">
            Experience professional telehealth care that combines medical integrity, patient convenience,
            and transparent pricing. All evaluations are conducted by IDPH-registered doctors in accordance
            with the Illinois Compassionate Use of Medical Cannabis Program Act (410 ILCS 130/).
          </p>
        </div>

        {/* Comparison table */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-brand-gray-line shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-brand-gray-soft/60">
                  <th className="p-5 text-sm font-semibold text-brand-gray uppercase tracking-wider">
                    Features
                  </th>
                  <th className="p-5 text-center bg-brand-gradient text-white relative">
                    <div className="flex flex-col items-center gap-0.5">
                      <span className="text-xs uppercase tracking-wider opacity-80 font-medium">Best choice</span>
                      <span className="text-base font-bold">{SITE.shortName}</span>
                    </div>
                  </th>
                  <th className="p-5 text-center text-sm font-semibold text-brand-dark">
                    Other Providers
                  </th>
                  <th className="p-5 text-center text-sm font-semibold text-brand-dark">
                    Other Clinics
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr
                    key={r.feature}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-brand-gray-soft/30'}
                  >
                    <td className="p-4 lg:p-5 text-[15px] font-semibold text-brand-dark">
                      {r.feature}
                    </td>
                    <td className="p-4 lg:p-5 text-center">
                      {r.us ? <CheckIcon /> : <MinusIcon />}
                    </td>
                    <td className="p-4 lg:p-5 text-center">
                      {r.providers ? <CheckIcon /> : <MinusIcon />}
                    </td>
                    <td className="p-4 lg:p-5 text-center">
                      {r.clinics ? <CheckIcon /> : <MinusIcon />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-brand-dark">
            {SITE.city}&apos;s Top Choice for{' '}
            <span className="text-gradient">Medical Cannabis Recommendations</span>
          </h3>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {stats.map((s) => (
            <div
              key={s.l}
              className="bg-white rounded-2xl border border-brand-gray-line p-6 text-center card-lift"
            >
              <div className="text-3xl lg:text-4xl font-extrabold text-brand-dark tabular tracking-tight">
                {s.v}
              </div>
              <div className="mt-2 text-xs uppercase tracking-wider font-semibold text-brand-gray">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
