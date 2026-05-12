import { SITE } from '../lib/site'

export default function Footer() {
  return (
    <>
      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-brand-dark text-white">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(60% 50% at 50% 0%, rgba(16,185,129,0.5) 0%, rgba(16,185,129,0) 70%)',
          }}
        />
        <div className="absolute inset-0 bg-grid opacity-[0.08] pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[11px] uppercase tracking-wider font-semibold">
              <span className="w-2 h-2 rounded-full bg-brand-green" />
              Start today
            </span>
            <h2 className="mt-6 text-4xl lg:text-5xl font-extrabold tracking-tight">
              Receive Your <span className="text-gradient">{SITE.city} Medical Marijuana Card</span> Safely
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-white/75 leading-relaxed">
              Start your {SITE.city} medical cannabis evaluation online today and receive your MMJ card
              once approved by a licensed provider and IDPH.
            </p>
            <div className="mt-8">
              <a href="#book" className="btn-primary text-base py-3.5 px-7">
                Book My Consultation
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <p className="mt-4 text-sm text-white/60">
                Complete your evaluation in just 15–30 minutes. No in-person visit needed.
              </p>
            </div>
          </div>

          {/* Triple contact cards: Call / Email / Chat */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <a
              href={SITE.phoneHref}
              className="group bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-2xl p-6 transition-colors"
            >
              <span className="flex w-11 h-11 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M21 16.5v3a1.5 1.5 0 01-1.6 1.5A18 18 0 013 4.6 1.5 1.5 0 014.5 3h3a1.5 1.5 0 011.5 1.3c.1.8.3 1.6.6 2.3a1.5 1.5 0 01-.3 1.6L8 9.6a14 14 0 006.4 6.4l1.4-1.3a1.5 1.5 0 011.6-.3c.7.3 1.5.5 2.3.6a1.5 1.5 0 011.3 1.5z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3 className="mt-4 text-lg font-bold text-white">Call Now</h3>
              <p className="mt-1 text-sm text-white/60">Talk to our friendly team instantly.</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-green group-hover:text-white transition-colors">
                Call Us
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>

            <a
              href={SITE.emailHref}
              className="group bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-2xl p-6 transition-colors"
            >
              <span className="flex w-11 h-11 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="mt-4 text-lg font-bold text-white">Email</h3>
              <p className="mt-1 text-sm text-white/60">Get answers to your medical cannabis questions.</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-green group-hover:text-white transition-colors">
                Email Us
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>

            <a
              href="#book"
              className="group bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-2xl p-6 transition-colors"
            >
              <span className="flex w-11 h-11 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M21 11.5a8.5 8.5 0 11-3.6-7l3.6-1-1 3.6A8.5 8.5 0 0121 11.5z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3 className="mt-4 text-lg font-bold text-white">Live Chat</h3>
              <p className="mt-1 text-sm text-white/60">Connect 24/7 with our support anytime.</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-green group-hover:text-white transition-colors">
                Chat With Us
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>

          <p className="mt-12 text-xs text-white/50 max-w-xl mx-auto leading-relaxed text-center">
            By starting an evaluation, you agree to our Terms of Service and Privacy Policy.
            We do not guarantee state approval, which is subject to IDPH review.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white/70 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="inline-flex w-9 h-9 items-center justify-center rounded-xl bg-brand-gradient">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 3c4 4 6 7 6 11a6 6 0 11-12 0c0-4 2-7 6-11z" fill="white" fillOpacity="0.95" />
                  </svg>
                </span>
                <span className="text-lg font-bold text-white">
                  {SITE.city}<span className="text-brand-green">MMJ</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs">
                {SITE.city}, {SITE.state}&apos;s trusted telehealth service for medical cannabis evaluations.
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#pricing" className="hover:text-brand-green transition-colors">New MMJ card</a></li>
                <li><a href="#pricing" className="hover:text-brand-green transition-colors">Card renewal</a></li>
                <li><a href="#conditions" className="hover:text-brand-green transition-colors">Qualifying conditions</a></li>
                <li><a href="#how-it-works" className="hover:text-brand-green transition-colors">How it works</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#doctor" className="hover:text-brand-green transition-colors">Meet the doctor</a></li>
                <li><a href="#reviews" className="hover:text-brand-green transition-colors">Patient reviews</a></li>
                <li><a href="#why" className="hover:text-brand-green transition-colors">Why us?</a></li>
                <li><a href="#faq" className="hover:text-brand-green transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href={SITE.phoneHref} className="hover:text-brand-green transition-colors">{SITE.phone}</a></li>
                <li><a href={SITE.emailHref} className="hover:text-brand-green transition-colors break-all">{SITE.email}</a></li>
                <li><a href="#tools" className="hover:text-brand-green transition-colors">Tools &amp; resources</a></li>
              </ul>
            </div>
          </div>

          <div className="h-px bg-white/10 my-12" />

          <div className="text-xs text-white/50 leading-relaxed max-w-4xl">
            <strong className="text-white/80">Medical Disclaimer:</strong> This is a telehealth service
            that connects patients with licensed physicians. We do not dispense cannabis or guarantee
            state approval. All evaluations are conducted by independently licensed Illinois physicians.
            Cannabis remains federally controlled.
          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-white/50">
            <div>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">HIPAA Notice</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
