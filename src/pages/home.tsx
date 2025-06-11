
import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../components/language-provider'

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#0a2240] mb-6">
                {t("home.heroTitle", "Providing Safety, Comfort and Care")}
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                {t("home.heroDescription", "We provide a high quality ambulance service taking great care and pride in our work with the highest priority on transporting patients with SAFETY, COMFORT and CARE.")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="inline-block px-8 py-3 bg-[#00855a] text-white font-medium rounded hover:bg-[#006e4a] transition-colors text-center"
                >
                  {t("home.getInTouch", "Get in touch")}
                </Link>
                <Link 
                  to="/about"
                  className="inline-block px-8 py-3 border border-[#4285f4] text-[#4285f4] font-medium rounded hover:bg-[#4285f4] hover:text-white transition-colors text-center"
                >
                  {t("home.learnMore", "Learn more")}
                </Link>
              </div>
            </div>
            <div>
              <img 
                src="/images/team-photo.jpg" 
                alt="BEARS team member smiling"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ambulance Image Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/fleet/ambulance-main.jpg" 
                alt="BEARS ambulance in London"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#0a2240] mb-6">{t("home.coreValuesTitle", "Our Core Values")}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t("home.coreValuesDescription", "BEARS core values are safety, comfort, and care, we ensure:")}
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#00855a] font-bold mr-2">•</span>
                  {t("home.highQualityService", "High-quality patient transport services")}
                </li>
                <li className="flex items-start">
                  <span className="text-[#00855a] font-bold mr-2">•</span>
                  {t("home.professionalCare", "Professional and compassionate care")}
                </li>
                <li className="flex items-start">
                  <span className="text-[#00855a] font-bold mr-2">•</span>
                  {t("home.safeTransportation", "Safe and comfortable transportation")}
                </li>
                <li className="flex items-start">
                  <span className="text-[#00855a] font-bold mr-2">•</span>
                  {t("home.excellenceInServices", "Excellence in emergency medical services")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0a2240] mb-8">{t("home.ourServicesTitle", "Our Services")}</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            {t("home.servicesDescription", "We provide comprehensive patient transport services across the UK, specializing in critical care, NEPTS, bariatric, mental health, and neonatal transport.")}
          </p>
          <Link 
            to="/services"
            className="inline-block px-8 py-3 bg-[#4285f4] text-white font-medium rounded hover:bg-blue-600 transition-colors"
          >
            {t("home.viewAllServices", "View All Services")}
          </Link>
        </div>
      </section>
    </div>
  )
}
