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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0a2240] mb-8 leading-tight">
              Providing Safety,<br />
              Comfort and<br />
              Care
            </h1>
            <p className="text-2xl text-[#334155] mb-12 max-w-2xl">
              We provide a high quality ambulance service taking great care and pride in our work with the highest priority on transporting patients with SAFETY, COMFORT and CARE.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/contact"
                className="inline-block px-8 py-3 bg-[#388e6c] text-white text-lg font-medium rounded transition-colors text-center hover:bg-[#2e7358]"
              >
                Get in touch
              </Link>
              <Link 
                to="/about"
                className="inline-block px-8 py-3 border-2 border-[#3b82f6] text-[#3b82f6] text-lg font-medium rounded transition-colors text-center hover:bg-[#3b82f6] hover:text-white"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2">
            <img
              src="/images/Home_one.png"
              alt={t("home.hero.imageAlt")}
              className="w-full h-full object-cover rounded-l-lg"
            />
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
