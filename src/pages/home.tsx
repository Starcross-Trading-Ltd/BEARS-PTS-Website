
import React from 'react'
import { useLanguage } from '../components/language-provider'
import HeroSection from '../components/home/hero-section'
import ValuesSection from '../components/home/values-section'
import ServicesPreview from '../components/home/services-preview'

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValuesSection />
      <ServicesPreview />
    </div>
  )
}
