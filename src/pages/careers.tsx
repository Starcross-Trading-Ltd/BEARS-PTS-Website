import React from 'react'
import { useLanguage } from '../components/language-provider'
import HeroSection from '../components/common/hero-section'

export default function CareersPage() {
  const { t } = useLanguage()

  // Define benefits directly since they need complex structure
  const benefits = [
    {
      title: t("careers.benefits.safety.title"),
      description: t("careers.benefits.safety.description")
    },
    {
      title: t("careers.benefits.comfort.title"),
      description: t("careers.benefits.comfort.description")
    },
    {
      title: t("careers.benefits.care.title"),
      description: t("careers.benefits.care.description")
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={t("careers.careersTitle", "Careers at BEARS")}
        subtitle={t("careers.careersDescription", "Join our team and make a difference in patient care and transport.")}
      />

      {/* Current Openings Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0a2240] mb-8">
            {t("careers.openings.title")}
          </h2>
          
          <div className="mb-8">
            <p className="text-lg text-gray-700 whitespace-pre-line">
              {t("careers.openings.description")}
            </p>
          </div>

          {/* Job Listings */}
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold text-[#0a2240] mb-4">
              {t("careers.openings.noVacancies.title")}
            </h3>
            <p className="text-gray-700 mb-6">
              {t("careers.openings.noVacancies.message")}
            </p>
            <div className="space-y-2">
              <p className="text-gray-600">
                <strong>Email us your CV:</strong> {t("careers.openings.noVacancies.contact.email")}
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> {t("careers.openings.noVacancies.contact.phone")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0a2240] mb-8 text-center">
            {t("careers.benefits.title")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map((benefit, index: number) => (
              <div key={index} className="text-center bg-white rounded-2xl shadow-xl p-8">
                <div className="w-20 h-20 bg-[#4285f4] rounded-full flex items-center justify-center mx-auto mb-6 shadow">
                  <span className="text-white font-extrabold text-3xl">
                    {benefit.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#0a2240] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 text-lg">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
