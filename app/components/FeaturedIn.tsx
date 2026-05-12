const outlets = [
  'Forbes',
  'Healthline',
  'WebMD',
  'Yahoo News',
  'Marijuana Times',
  'NBC',
  'High Times',
  'USA Today',
]

export default function FeaturedIn() {
  return (
    <section className="relative bg-white border-y border-brand-gray-line/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-14">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-shrink-0 text-center lg:text-left">
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-brand-gray">
              As Featured On
            </p>
            <p className="text-sm text-brand-slate mt-1">Trusted by the press</p>
          </div>
          <div className="flex-1 w-full overflow-hidden relative">
            <div className="flex items-center gap-12 lg:gap-16 marquee" style={{ width: 'max-content' }}>
              {[...outlets, ...outlets].map((o, i) => (
                <span
                  key={`${o}-${i}`}
                  className="text-lg lg:text-xl font-bold text-brand-gray hover:text-brand-dark transition-colors whitespace-nowrap"
                  style={{ letterSpacing: '0.02em' }}
                >
                  {o}
                </span>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
