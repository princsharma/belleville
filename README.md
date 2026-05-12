# Belleville MMJ Card Doctor — Next.js 14

Production-ready landing site for `medicalmarijuanacardbelleville.com`, built as a child of the Naperville site with a deliberately different, sober editorial design.

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm run start
```

Requires Node 18.17+.

## Design direction

Where the Naperville site leans **SaaS / card-heavy / vibrant**, this one leans **editorial / clinical / restrained** — the goal is to feel like a doctor's office, not a tech startup.

- **Typography:** `Fraunces` (variable serif) for headlines, `Geist` (modern sans) for body. Both loaded via `next/font/google` so the layout never shifts during paint.
- **Color:** the three brand colors you supplied — `#0b6b4f` (green accent), `#111827` (ink), `#6b7280` (mute). Green is used sparingly: as an accent on emphasised words, in stat bars, in the closing CTA. Backgrounds stay white/off-white.
- **Layout:** asymmetric 12-column editorial grid, hairline dividers, numbered Roman numerals on the process steps, generous whitespace.
- **Motion:** very restrained — a small fade-up on hero load. Respects `prefers-reduced-motion`.

## What's in the box

```
app/
├── layout.tsx             # Root layout: metadata, fonts, JSON-LD structured data
├── page.tsx               # Home page (Server Component) composing all sections
├── globals.css            # CSS variables, button styles, editorial utilities
├── sitemap.ts             # Auto-generated sitemap.xml
├── robots.ts              # Auto-generated robots.txt
├── lib/site.ts            # Single source of truth: phone, email, prices, stats
└── components/
    ├── Header.tsx         # Sticky minimal nav with primary CTA
    ├── Hero.tsx           # Editorial masthead + headline + stat bar
    ├── Features.tsx       # 6 features in 3-col, numbered, no icon boxes
    ├── Process.tsx        # 4 steps as vertical list with Roman numerals
    ├── Conditions.tsx     # Qualifying conditions in clean numbered list
    ├── Benefits.tsx       # 3 benefits in bordered grid
    ├── Pricing.tsx        # 2 plans side-by-side, "Most popular" badge
    ├── Reviews.tsx        # 3 quote cards with star ratings
    ├── FAQ.tsx            # Accessible details/summary accordion
    ├── BookingForm.tsx    # Client component — the only one, for form state
    └── Footer.tsx         # Dark green CTA + dark footer
```

Everything except `BookingForm.tsx` is a **React Server Component**, so the HTML is fully rendered on the server. That means Googlebot sees the complete page on the first request — no client-side hydration required to read content.

## SEO checklist (what's already wired up)

- ✅ Per-page `Metadata` export with title template, description, keywords, OG tags, Twitter cards
- ✅ Canonical URL via `alternates.canonical`
- ✅ `robots` directive set to index/follow with `max-image-preview: large`
- ✅ `sitemap.xml` auto-generated at `/sitemap.xml`
- ✅ `robots.txt` auto-generated at `/robots.txt`
- ✅ JSON-LD structured data for **MedicalBusiness**, **WebSite**, and **FAQPage** (live in `app/layout.tsx`)
- ✅ Semantic HTML: one `<h1>`, hierarchical `<h2>`/`<h3>`, `<article>`, `<nav>`, `<section>`, `<footer>`
- ✅ All sections have `id` anchors for fragment links and sitemap entries
- ✅ Server-rendered HTML — no JS required to read the page
- ✅ Lighthouse-friendly: fonts via `next/font` (no FOUT), no layout shift, `display: swap`
- ✅ Security headers (CSP-friendly defaults, X-Frame-Options, Referrer-Policy)
- ✅ Image dimensions / aspect ratios reserved with viewBox on SVGs to avoid CLS
- ✅ Accessibility: focus-visible styles, `aria-label`/`aria-hidden` on icons, keyboard-reachable disclosure FAQ
- ✅ `prefers-reduced-motion` respected

## Before you launch — placeholders to replace

Open `app/lib/site.ts` and update:

| Field | Current value | Replace with |
|---|---|---|
| `phone` / `phoneHref` | `(618) 555-0199` | Real Belleville number |
| `email` / `emailHref` | `contact@medicalmarijuanacardbelleville.com` | Real inbox |
| `stats.patients` | `18K+` | Real number |
| `stats.rating` | `4.9` | Real average |
| `pricing.newCard` / `renewal` | `$149` / `$129` | Real prices |

Also replace:
- `public/og-image.png` — 1200×630 social preview (referenced in `layout.tsx`)
- `public/favicon.ico` — site icon
- Reviews in `app/components/Reviews.tsx` — currently fictional Belleville-area testimonials

The booking form in `BookingForm.tsx` currently fakes a submission with `setTimeout`. Wire it to your real endpoint inside `handleSubmit`.

## Why this is good for conversion

- **One clear CTA** repeated 5 times: header → hero → conditions → pricing → final. Same copy ("Start my evaluation") so the brain recognises it.
- **Form above the fold of its section**, asking for only name/email/phone — minimum friction.
- **Money-back guarantee** mentioned in hero, features, pricing, and booking form — it's the single biggest objection-killer.
- **Trust bar** (patients certified / rating / approval / time) sits immediately under the hero — answers "is this legit?" before they have to ask.
- **Pricing exposed**, not gated — removes the "what does it cost?" friction.
- **FAQ** answers the privacy/employer/qualifying questions that typically stall conversion.
- **Same-day urgency** ("limited slots today") without being aggressive.
- **Sticky header CTA** so the conversion path is always one click away.

## Tech notes

- Next.js 14 / App Router
- Tailwind CSS 3.4
- TypeScript strict mode
- No client-side data fetching, no analytics scripts shipped by default (add your own GA4 / Posthog in `layout.tsx`)
