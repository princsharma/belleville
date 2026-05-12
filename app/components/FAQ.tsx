const faqs = [
  {
    q: 'How do I get a medical marijuana card in Belleville, Illinois?',
    a: 'Start by booking an evaluation with a state-registered Illinois MMJ doctor. Once certified, submit your application through the Illinois Department of Public Health (IDPH) Medical Cannabis Patient Program. After paying the state fee, you can download your digital card from your IDPH account.',
  },
  {
    q: 'Who can qualify for an Illinois medical marijuana card?',
    a: 'Illinois residents diagnosed with a qualifying condition recognised by IDPH — such as chronic pain, PTSD, cancer, epilepsy, MS, glaucoma, Crohn’s disease, fibromyalgia, migraines, severe nausea, and many others. Minors can qualify through a registered caregiver aged 21 or older.',
  },
  {
    q: 'How much does a medical marijuana card cost in Illinois?',
    a: 'Our physician evaluation starts at $149 for a new card and $129 for renewals. The IDPH state registration fee ($50–$100) is separate and paid directly to the state.',
  },
  {
    q: 'How long does it take to get a medical marijuana card in Belleville?',
    a: 'The online physician evaluation typically takes 15–30 minutes. Most Belleville patients receive their certification within an hour and a provisional IDPH approval within 24 hours.',
  },
  {
    q: 'How do I renew my Illinois medical marijuana card?',
    a: 'Renewal is a streamlined version of the evaluation. Book a renewal consultation with one of our IDPH-registered physicians; once re-certified, log into your IDPH MCPP account to renew your registration and pay the state fee.',
  },
  {
    q: 'How long is my Illinois medical marijuana card valid?',
    a: 'IDPH medical cannabis cards are typically valid for up to three years from the issue date, depending on the renewal term you select at the state level. You can re-certify and renew before expiration.',
  },
  {
    q: 'Is the Illinois medical marijuana card digital or physical?',
    a: 'As of June 22, 2021, IDPH issues only digital medical cannabis cards. Patients access their card through their MCPP account and present it digitally at licensed dispensaries.',
  },
  {
    q: 'Will having a medical marijuana card affect my job in Illinois?',
    a: 'Illinois law provides workplace protection against discrimination for lawful medical cannabis use (with limited exceptions, such as federal employees, safety-sensitive roles, or zero-tolerance workplace policies). Employers cannot view IDPH records.',
  },
  {
    q: 'Can out-of-state patients get a medical marijuana card in Illinois?',
    a: 'The Illinois Compassionate Use program requires proof of Illinois residency. However, Illinois honours valid out-of-state medical cards under its reciprocity rules for visiting patients at licensed dispensaries.',
  },
  {
    q: 'Can I legally own a gun with an Illinois medical marijuana card?',
    a: 'Under federal law, cannabis users — including registered medical patients — cannot legally purchase firearms from federally licensed dealers. Illinois state law is more permissive, but federal law applies. Consult an attorney for your situation.',
  },
  {
    q: 'What taxes do adult-use (recreational) cannabis buyers pay in Illinois?',
    a: 'Recreational cannabis is taxed at roughly 31–32% (combined state and local). Medical cardholders pay only 1%, leading to substantial savings — often hundreds of dollars per year.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="tag-pill">FAQ</span>
            <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-dark">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="mt-5 text-lg text-brand-slate leading-relaxed">
              Your guide to the most common questions about the Belleville and Illinois medical
              marijuana card.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-brand-green-soft/60 border border-brand-green-mint">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex w-10 h-10 items-center justify-center rounded-xl bg-white text-brand-green shadow-sm">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path
                      d="M14.5 11.5v2.5a1 1 0 01-1.1 1A12.5 12.5 0 011 3.6 1 1 0 012 2.5h2.5a1 1 0 011 .87c.08.6.22 1.2.4 1.78a1 1 0 01-.23 1.05L4.6 7.3a10 10 0 004.4 4.4l1.1-1.07a1 1 0 011.05-.23c.58.18 1.18.32 1.78.4a1 1 0 01.87 1z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-brand-dark">Contact Our Support Team</span>
              </div>
              <p className="text-sm text-brand-slate">
                Still have questions? Our team is here to help — usually within 15 minutes during business hours.
              </p>
              <a
                href="#book"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green hover:text-brand-green-dark"
              >
                Contact us
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group bg-white rounded-2xl border border-brand-gray-line open:border-brand-green/40 open:shadow-card transition-all"
                >
                  <summary className="flex items-start justify-between gap-6 p-6 cursor-pointer">
                    <h3 className="text-base lg:text-lg font-semibold text-brand-dark group-hover:text-brand-green transition-colors">
                      {f.q}
                    </h3>
                    <span
                      className="faq-icon flex-shrink-0 mt-0.5 flex w-7 h-7 items-center justify-center rounded-full bg-brand-green-soft text-brand-green"
                      aria-hidden="true"
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 1.5v9M1.5 6h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 -mt-1">
                    <p className="text-[15px] leading-relaxed text-brand-slate">{f.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
