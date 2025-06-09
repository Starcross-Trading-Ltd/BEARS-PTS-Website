
import React from 'react'
import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import { useLanguage } from '../components/language-provider'

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0a2240] mb-6">
                {t("home.heroTitle", "Providing Safety, Comfort and Care")}
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                {t("home.heroDescription", "We provide a high quality ambulance service taking great care and pride in our work with the highest priority on transporting patients with SAFETY, COMFORT and CARE.")}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="px-6 py-3 bg-[#00855a] text-white font-medium rounded hover:bg-[#006e4a] transition-colors"
                >
                  {t("home.getInTouch", "Get in touch")}
                </a>
                <a
                  href="/about"
                  className="px-6 py-3 border border-[#0a2240] text-[#0a2240] font-medium rounded hover:bg-gray-50 transition-colors"
                >
                  {t("home.learnMore", "Learn more")}
                </a>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <img
                src="/images/paramedic.jpg"
                alt="BEARS Paramedic"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] md:h-[400px]">
              <img src="/images/ambulance.jpg" alt="BEARS Ambulance" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a2240] mb-6">
                {t("home.coreValuesTitle", "Our Core Values")}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {t("home.coreValuesDescription", "BEARS core values are safety, comfort, and care, we ensure:")}
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4285f4] flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">
                    {t("home.serviceQuality", "We get our service quality right the first time")}
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4285f4] flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">
                    {t("home.efficientCare", "We are efficient with passion for patient care")}
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4285f4] flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">{t("home.bestValue", "We ensure best value for money")}</p>
                </div>
              </div>

              <a href="/about/values" className="inline-flex items-center text-[#4285f4] mt-6 hover:underline">
                {t("home.moreAboutValues", "More about our core values")} <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
