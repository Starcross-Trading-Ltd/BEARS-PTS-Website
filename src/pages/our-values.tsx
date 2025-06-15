
import React from 'react'
import { useLanguage } from '../components/language-provider'

export default function OurValuesPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0a2240] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">{t("about.ourValues")}</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            {t("about.valuesDescription")}
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4285f4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h3 className="text-xl font-bold text-[#0a2240] mb-3">{t("about.safety")}</h3>
              <div className="text-gray-700 space-y-3">
                <p>{t("about.safetyDescription1")}</p>
                <p>{t("about.safetyDescription2")}</p>
                <p>{t("about.safetyDescription3")}</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4285f4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h3 className="text-xl font-bold text-[#0a2240] mb-3">{t("about.comfort")}</h3>
              <div className="text-gray-700 space-y-3">
                <p>{t("about.comfortDescription1")}</p>
                <p>{t("about.comfortDescription2")}</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4285f4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h3 className="text-xl font-bold text-[#0a2240] mb-3">{t("about.care")}</h3>
              <div className="text-gray-700 space-y-3">
                <p>{t("about.careDescription1")}</p>
                <p>{t("about.careDescription2")}</p>
                <p>{t("about.careDescription3")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
