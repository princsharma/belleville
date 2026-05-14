import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { SITE } from './lib/site'
import GoogleTagManager from './components/GoogleTagManager'

const sans = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b6b4f',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Apply Your Medical Marijuana Card Belleville | Online MMJ Help',
    template: `%s | ${SITE.name}`,
  },
  description:
    'Get your Belleville medical marijuana card through secure online consultations, licensed physicians, and fast patient support.',
  keywords: [
    'Medical Marijuana Card Belleville',
    'Belleville medical marijuana card',
    'Belleville MMJ card',
    'Belleville medical cannabis card',
    'Belleville MMJ doctor',
    'medical marijuana card Belleville IL',
    'telehealth MMJ Belleville',
    'IDPH medical cannabis registry',
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: SITE.name,
    title: 'Apply Your Medical Marijuana Card Belleville | Online MMJ Help',
    description:
      'Get your Belleville medical marijuana card through secure online consultations, licensed physicians, and fast patient support.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apply Your Medical Marijuana Card Belleville | Online MMJ Help',
    description:
      'Get your Belleville medical marijuana card through secure online consultations, licensed physicians, and fast patient support.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'health',
  icons: {
    icon: [{ url: '/images/fav-icon.webp', type: 'image/webp' }],
    shortcut: '/images/fav-icon.webp',
    apple: '/images/fav-icon.webp',
  },
  verification: {
    google: 'M8HEARMV3CYZFdEApMen6gqrLHTkRkDMPm1d4cfishg',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      '@id': `${SITE.url}/#business`,
      name: SITE.name,
      url: `${SITE.url}/`,
      telephone: SITE.phone,
      email: SITE.email,
      priceRange: '$129–$149',
      areaServed: [
        { '@type': 'City', name: 'Belleville', containedInPlace: 'Belleville' },
        { '@type': 'State', name: 'Belleville' },
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Belleville',
        addressRegion: 'IL',
        addressCountry: 'US',
      },
      medicalSpecialty: 'Telehealth',
      availableService: {
        '@type': 'MedicalProcedure',
        name: 'Medical Cannabis Evaluation',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '1280',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: `${SITE.url}/`,
      name: SITE.name,
      publisher: { '@id': `${SITE.url}/#business` },
      inLanguage: 'en-US',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does the online evaluation take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Most evaluations take 15 to 30 minutes via secure video or phone. Many Belleville patients complete the entire process in under an hour.',
          },
        },
        {
          '@type': 'Question',
          name: 'What documents do I need for my appointment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'A valid Belleville ID and any supporting medical records for your qualifying condition. If you do not have records, our physicians can help determine next steps.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will my employer find out?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'No. Your information is protected under HIPAA and is never shared with employers, insurers, or third parties.',
          },
        },
        {
          '@type': 'Question',
          name: 'How quickly will I get my Belleville MMJ card?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Your physician certification is usually delivered within one hour. After you submit the IDPH application you receive a provisional approval that allows immediate dispensary access.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable}`}>
      <head>
        <link rel="icon" type="image/webp" href="/images/fav-icon.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-brand-dark bg-white">
        <GoogleTagManager />
        {children}
      </body>
    </html>
  )
}
