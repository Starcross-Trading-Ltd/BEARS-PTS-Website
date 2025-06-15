
import React from 'react'
import { useLanguage } from '../components/language-provider'
import TestimonialsSection from '../components/news/testimonials-section'
import NewsGrid from '../components/news/news-grid'

export default function NewsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0a2240] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("navigation.news")}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            {t("testimonials.whatPeopleSay")}
          </p>
        </div>
      </section>

      <TestimonialsSection />
      <NewsGrid />
    </div>
  )
}
