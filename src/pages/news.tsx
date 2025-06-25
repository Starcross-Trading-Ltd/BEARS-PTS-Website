import React from 'react'
import { useLanguage } from '../components/language-provider'
import TestimonialsSection from '../components/news/testimonials-section'
import NewsGrid from '../components/news/news-grid'
import HeroSection from '../components/common/hero-section'

export default function NewsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dramatic News Hero Section with animated badge and floating icons */}
      <section className="relative py-20 bg-gradient-to-br from-[#0a2240] to-[#3b82f6] text-white text-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center justify-center">
            <span className="inline-block px-6 py-2 bg-[#3b82f6] text-white rounded-full shadow-lg text-lg font-bold border-4 border-white animate-bob mb-6">
              {t('news.hero.title')}
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
              {t('navigation.news')}
            </h1>
            <p className="text-2xl text-blue-100 max-w-2xl mx-auto mb-8 drop-shadow-md">
              {t('news.hero.description')}
            </p>
          </div>
        </div>
        {/* Subtle abstract wave at the bottom for continuity */}
        <div className="absolute left-0 right-0 bottom-0 w-screen z-0 pointer-events-none" style={{ height: '120px', minWidth: '100vw' }} aria-hidden="true">
          <svg width="100%" height="100%" viewBox="0 0 1920 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,60 C480,140 1440,0 1920,80 L1920,120 L0,120 Z" fill="#fff" fillOpacity="0.10" />
            <path d="M0,100 C533,60 1387,180 1920,40 L1920,120 L0,120 Z" fill="#fff" fillOpacity="0.07" />
          </svg>
        </div>
      </section>

      {/* Section intro with CTA */}
      <section className="py-8 text-center animate-fade-in-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2240] mb-4">
            {t('news.articles.title')}
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            {t('news.hero.description')}
          </p>
          <a href="/compliments" className="inline-block px-8 py-3 bg-[#3b82f6] text-white text-lg font-semibold rounded-lg shadow hover:bg-[#2563eb] transition-colors">
            {t('testimonials.readMoreCompliments')}
          </a>
        </div>
      </section>

      {/* Staggered fade-in for testimonials and news grid */}
      <div className="space-y-24">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <TestimonialsSection />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <NewsGrid />
        </div>
      </div>
    </div>
  )
}
