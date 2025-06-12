
import React from 'react'
import { useLanguage } from '../components/language-provider'

export default function CareersPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0a2240] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("careers.pageTitle")}</h1>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0a2240] mb-8">{t("careers.sectionTitle")}</h2>
          
          <div className="mb-8">
            <p className="text-lg text-gray-700 mb-6">
              {t("careers.companyDescription")}
            </p>
            
            <p className="text-lg text-gray-700">
              {t("careers.qualityStatement")}
            </p>
          </div>

          {/* Job Listings */}
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold text-[#0a2240] mb-4">{t("careers.noVacanciesTitle")}</h3>
            <p className="text-gray-700 mb-6">
              {t("careers.noVacanciesMessage")}
            </p>
            <div className="space-y-2">
              <p className="text-gray-600">
                <strong>{t("careers.emailLabel")}</strong> careers@bearsambulance.com
              </p>
              <p className="text-gray-600">
                <strong>{t("careers.phoneLabel")}</strong> +44 123 456 7890
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0a2240] mb-8 text-center">{t("careers.benefitsTitle")}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4285f4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h3 className="text-xl font-bold text-[#0a2240] mb-3">{t("careers.safetyTitle")}</h3>
              <p className="text-gray-700">
                {t("careers.safetyDescription")}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4285f4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h3 className="text-xl font-bold text-[#0a2240] mb-3">{t("careers.comfortTitle")}</h3>
              <p className="text-gray-700">
                {t("careers.comfortDescription")}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4285f4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h3 className="text-xl font-bold text-[#0a2240] mb-3">{t("careers.careTitle")}</h3>
              <p className="text-gray-700">
                {t("careers.careDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
