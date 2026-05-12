const reviews = [
  {
    quote: 'It was quick, easy and I got the recommendation in minutes.',
    author: 'David Bristow',
    when: '9 months ago',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&q=80',
  },
  {
    quote: 'Quick easy and pain free.',
    author: 'Kevin Stewart',
    when: '9 months ago',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&q=80',
  },
  {
    quote: 'Super easy, great customer service! Highly recommend.',
    author: 'Tay Dunahoo',
    when: '10 months ago',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&h=160&fit=crop&q=80',
  },
  {
    quote:
      'I went to the site, chose document format, scheduled the appointment, and received the consultation call within 2–3 minutes. Spent 5 min on the interview and had a recommendation within minutes!',
    author: 'Juan R Delgado II',
    when: '10 months ago',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=160&h=160&fit=crop&q=80',
  },
  {
    quote:
      'I’ve been getting my license through them for a while now — easy, convenient, and quick. The price is average, and everything else makes this the one I go back to.',
    author: 'Lauren Schenck',
    when: '10 months ago',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&q=80',
  },
  {
    quote:
      'A highly professional practice — my experience was seamless. The website and application were a snap to fill out, I received several reminders for my appointment. The doctor was prompt and friendly. Overall OUTSTANDING!',
    author: 'Randal B',
    when: '10 months ago',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=160&h=160&fit=crop&q=80',
  },
]

function Stars({ n }: { n: number }) {
  return (
    <span aria-label={`${n} out of 5 stars`} className="text-brand-green inline-flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
          <path d="M7 0l2 4.4 4.8.6-3.5 3.4.85 4.8L7 11l-4.15 2.2.85-4.8L.2 5l4.8-.6L7 0z" />
        </svg>
      ))}
    </span>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="tag-pill">Patient reviews</span>
          <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-dark">
            Hear From <span className="text-gradient">Our Patients</span>
          </h2>
          <p className="mt-5 text-lg text-brand-slate leading-relaxed">
            Trusted by Belleville and Belleville patients for their medical marijuana recommendations.
            See what they have to say and start your journey with confidence today.
          </p>
        </div>

        {/* Trust ribbon */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-brand-green-soft/60 via-white to-brand-green-soft/60 border border-brand-green-mint rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center mb-12">
          <div>
            <div className="text-xs uppercase tracking-wider font-bold text-brand-green">EXCELLENT</div>
            <Stars n={5} />
          </div>
          <div className="hidden sm:block h-10 w-px bg-brand-gray-line" />
          <div className="text-sm text-brand-slate">
            Based on <strong className="text-brand-dark font-semibold">31+ reviews</strong> on Google
          </div>
          <div className="hidden sm:block h-10 w-px bg-brand-gray-line" />
          <div className="text-sm">
            <span className="font-bold text-brand-dark">Verified</span>{' '}
            <span className="text-brand-gray">by Trustindex</span>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <article
              key={r.author}
              className="relative bg-white rounded-3xl border border-brand-gray-line p-7 flex flex-col card-lift"
            >
              <svg
                width="36"
                height="28"
                viewBox="0 0 36 28"
                fill="none"
                aria-hidden="true"
                className="text-brand-green-mint mb-4"
              >
                <path
                  d="M0 28V18C0 8 5 2 14 0v6c-4 1-7 5-7 9h7v13H0zm22 0V18C22 8 27 2 36 0v6c-4 1-7 5-7 9h7v13H22z"
                  fill="currentColor"
                />
              </svg>

              <blockquote className="flex-1">
                <p className="text-[15px] leading-relaxed text-brand-dark">{r.quote}</p>
              </blockquote>

              <div className="mt-5">
                <Stars n={r.rating} />
              </div>

              <footer className="mt-5 pt-5 border-t border-brand-gray-line flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={r.avatar}
                  alt=""
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-brand-green-soft"
                  loading="lazy"
                />
                <div className="flex-1">
                  <div className="text-sm font-semibold text-brand-dark">{r.author}</div>
                  <div className="text-xs text-brand-gray flex items-center gap-1.5">
                    <span>{r.when}</span>
                    <span className="text-brand-green font-bold">· Google</span>
                  </div>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
