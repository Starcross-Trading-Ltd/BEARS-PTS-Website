import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../language-provider'

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full min-h-[500px] lg:pr-0">
          <div className="z-10">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#0a2240] mb-10 leading-tight drop-shadow-md"
              dangerouslySetInnerHTML={{ __html: t("home.hero.title", "Providing Safety,<br />Comfort and<br />Care") }}
            />
            <p className="text-2xl text-[#334155] mb-12 max-w-2xl drop-shadow-sm">
              {t("home.hero.description", "We provide a high quality ambulance service taking great care and pride in our work with the highest priority on transporting patients with SAFETY, COMFORT and CARE.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <Link 
                to="/contact"
                className="inline-block px-10 py-4 bg-[#388e6c] text-white text-xl font-semibold rounded-lg shadow hover:bg-[#2e7358] transition-colors text-center"
              >
                {t("home.hero.cta.primary", "Get in touch")}
              </Link>
              <Link 
                to="/about"
                className="inline-block px-10 py-4 border-2 border-[#3b82f6] text-[#3b82f6] text-xl font-semibold rounded-lg shadow hover:bg-[#3b82f6] hover:text-white transition-colors text-center"
              >
                {t("home.hero.cta.secondary", "Learn more")}
              </Link>
            </div>
          </div>
          <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2">
            <div className="relative w-full h-full">
              <img
                src="/images/Home_one.png"
                alt={t("home.hero.imageAlt")}
                className="w-full h-full object-cover rounded-l-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-white/80 to-transparent rounded-l-lg" />
            </div>
          </div>
          <div className="block lg:hidden h-[500px] w-full flex items-center">
            <img 
              src="/images/Home_one.png" 
              alt={t("home.hero.imageAlt")}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
