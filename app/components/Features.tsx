import { SITE } from '../lib/site'

const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2l8 3v7c0 5-3.5 9-8 10-4.5-1-8-5-8-10V5l8-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const DoctorIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
    <path d="M4 21c0-4 4-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)
const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 7v5l3.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)
const LaptopIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M2 20h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)
const RefundIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 12a9 9 0 1015 -6.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M18 2v4h-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 8v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)
const DocIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 3h9l4 4v14H6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M9 13h7M9 17h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

const features = [
  {
    icon: <ShieldIcon />,
    title: 'HIPAA-compliant platform',
    body:
      'Records protected under federal law and encrypted end-to-end. Never shared with employers, insurers, or third parties.',
  },
  {
    icon: <DoctorIcon />,
    title: 'IDFPR-licensed physicians',
    body:
      'Every visit is conducted by an Belleville-licensed doctor with specialized training in cannabis medicine — no PA gatekeepers.',
  },
  {
    icon: <ClockIcon />,
    title: 'Same-day appointments',
    body:
      'Evening and weekend slots open daily. Book in the morning and finish your evaluation by lunchtime.',
  },
  {
    icon: <LaptopIcon />,
    title: '100% online process',
    body:
      'Consultation, certification, and IDPH paperwork — handled from your living room. No travel, no waiting room.',
  },
  {
    icon: <RefundIcon />,
    title: 'Money-back guarantee',
    body:
      'You only pay if a physician certifies you. If you don’t qualify, the evaluation is refunded in full.',
  },
  {
    icon: <DocIcon />,
    title: 'State application support',
    body:
      'We walk you through every field of the IDPH application. Most patients receive provisional approval within 24 hours.',
  },
]

export default function Features() {
  return (
    <section id="why" className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <span className="tag-pill">Why patients choose us</span>
          <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-dark">
            Everything you need for a{' '}
            <span className="text-gradient">stress-free certification.</span>
          </h2>
          <p className="mt-5 text-lg text-brand-slate leading-relaxed">
            We&apos;ve removed the clinic-style theatrics. Just an honest conversation
            with a licensed {SITE.state} physician — on your schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <article
              key={f.title}
              className="group relative bg-white rounded-2xl border border-brand-gray-line p-7 card-lift"
            >
              <div className="flex w-12 h-12 items-center justify-center rounded-xl bg-brand-green-soft text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors">
                {f.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-brand-dark">{f.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-brand-slate">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
