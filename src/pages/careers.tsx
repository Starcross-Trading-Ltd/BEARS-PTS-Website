
import React from 'react'
import { useLanguage } from '../components/language-provider'

export default function CareersPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0a2240] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("careers.hero.title")}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            {t("careers.hero.description")}
          </p>
        </div>
      </section>

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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t("careers.benefits.items", []).map((benefit: any, index: number) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#4285f4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">
                    {benefit.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0a2240] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">
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
