
import React from 'react'
import { useLanguage } from '../components/language-provider'

export default function CareersPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0a2240] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("careers.vacanciesTitle", "Vacancies")}</h1>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0a2240] mb-8">{t("careers.currentOpenings", "Current openings")}</h2>
          
          <div className="mb-8">
            <p className="text-lg text-gray-700 mb-6">
              {t("careers.bearsEstablished", "BEARS was established in 2009, on the principles of Safety, Comfort and Care. We specialise in hospital logistics patient transport service. Supporting the NHS with paramedic, paediatric and neonatal, critical care, high dependency, bariatric, mental health and ECMO transfers alongside regular patient transport services.")}
            </p>
            
            <p className="text-lg text-gray-700">
              {t("careers.qualityFocus", "At every level, BEARS focuses on quality, which defines the company and differentiates it from its peers. Our emphasis remains to provide high quality service, training, and generous package to our staff as well as providing them with appropriate tools, to enable them to deliver the highest standards of patient care. The return for this strategy is easily demonstrated by our Key Performance Indicators (KPI's) and the level of retention on our contracts from existing NHS customers.")}
            </p>
          </div>

          {/* Job Listings would go here - currently no specific openings shown in the image */}
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold text-[#0a2240] mb-4">{t("careers.noCurrentVacancies", "No Current Vacancies")}</h3>
            <p className="text-gray-700 mb-6">
              {t("careers.noVacanciesDescription", "We currently don't have any open positions, but we're always interested in hearing from qualified healthcare professionals who share our commitment to safety, comfort, and care.")}
            </p>
            <div className="space-y-2">
              <p className="text-gray-600">
                <strong>{t("careers.emailCV", "Email us your CV:")}</strong> careers@bearsambulance.com
              </p>
              <p className="text-gray-600">
                <strong>{t("careers.phone", "Phone:")}</strong> +44 123 456 7890
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0a2240] mb-8 text-center">{t("careers.whyWorkWithBears", "Why Work With BEARS?")}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4285f4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h3 className="text-xl font-bold text-[#0a2240] mb-3">{t("about.safety", "Safety")}</h3>
              <p className="text-gray-700">
                {t("careers.safetyBenefit", "We prioritise the safety of our patients and staff with comprehensive training and state-of-the-art equipment.")}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4285f4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h3 className="text-xl font-bold text-[#0a2240] mb-3">{t("about.comfort", "Comfort")}</h3>
              <p className="text-gray-700">
                {t("careers.comfortBenefit", "We provide a supportive work environment that values work-life balance and professional development.")}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4285f4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h3 className="text-xl font-bold text-[#0a2240] mb-3">{t("about.care", "Care")}</h3>
              <p className="text-gray-700">
                {t("careers.careBenefit", "Join a team that genuinely cares about making a difference in patients' lives every day.")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
