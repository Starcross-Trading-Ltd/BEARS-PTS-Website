import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../language-provider'

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0a2240] mb-6">
              {t("home.hero.title")}
            </h1>
            <p className="text-xl text-gray-900 mb-8 max-w-3xl mx-aut">
              {t("home.hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact"
                className="inline-block px-8 py-3 bg-[#00855a] text-white font-medium rounded hover:bg-[#006e4a] transition-colors text-center"
              >
                {t("home.hero.cta.primary")}
              </Link>
              <Link 
                to="/about"
                className="inline-block px-8 py-3 border border-[#4285f4] text-[#4285f4] font-medium rounded hover:bg-[#4285f4] hover:text-white transition-colors text-center"
              >
                {t("home.hero.cta.secondary")}
              </Link>
            </div>
          </div>
          <div>
            <img 
              src="/images/Home_one.png" 
              alt={t("home.hero.imageAlt")}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
