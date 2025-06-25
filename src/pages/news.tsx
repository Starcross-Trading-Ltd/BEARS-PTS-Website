import React from 'react'
import { useLanguage } from '../components/language-provider'
import TestimonialsSection from '../components/news/testimonials-section'
import NewsGrid from '../components/news/news-grid'
import HeroSection from '../components/common/hero-section'

export default function NewsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={t("navigation.news")}
        subtitle={t("testimonials.whatPeopleSay")}
      />

      <TestimonialsSection />
      <NewsGrid />
    </div>
  )
}
