import type { Metadata } from 'next'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedIn from './components/FeaturedIn'
import Process from './components/Process'
import Doctor from './components/Doctor'
import Tools from './components/Tools'
import Conditions from './components/Conditions'
import Benefits from './components/Benefits'
import Pricing from './components/Pricing'
import Compare from './components/Compare'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: { url: '/' },
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <FeaturedIn />
        <Process />
        <Doctor />
        <Tools />
        <Conditions />
        <Benefits />
        <Pricing />
        <Compare />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
