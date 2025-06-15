
import React from 'react'
import { useLanguage } from '../components/language-provider'

export default function OurValuesPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0a2240] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">{t("about.ourValues", "Our Values")}</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            {t("about.valuesDescription", "BEARS values underpin everything we do, guiding our decisions and ensuring we provide exceptional care and service to all our patients and healthcare partners throughout their journey with us.")}
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
              <h3 className="text-xl font-bold text-[#0a2240] mb-3">{t("about.safety", "Safety")}</h3>
              <div className="text-gray-700 space-y-3">
                <p>{t("about.safetyDescription1", "We always put safety first in everything we do, designed and built service levels with robust oversight at all key registered locations.")}</p>
                <p>{t("about.safetyDescription2", "Our vehicles maintain robust and healthy levels of monitoring including systems, our safety systems are designed to be 100% safe, and the emergency services.")}</p>
                <p>{t("about.safetyDescription3", "Our safety drivers adopt comprehensive approach to administering safety in monitoring and auditing covering that experience and through education.")}</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4285f4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h3 className="text-xl font-bold text-[#0a2240] mb-3">{t("about.comfort", "Comfort")}</h3>
              <div className="text-gray-700 space-y-3">
                <p>{t("about.comfortDescription1", "Consistent comfort and guidance through understanding and state of the art equipment drivers efficient clinical treatment and improvement opportunities to support local healthcare.")}</p>
                <p>{t("about.comfortDescription2", "Enabling patients at family can take to make properly individualized plans with us by following appropriate emergency or direct support ensuring our service offering is right for them and supports their health.")}</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4285f4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h3 className="text-xl font-bold text-[#0a2240] mb-3">{t("about.care", "Care")}</h3>
              <div className="text-gray-700 space-y-3">
                <p>{t("about.careDescription1", "BEARS Improvement project which enables us to understand what each person will understand in considering improvement and making work programmes to a higher standards where there is opportunity to improvement for long-term and improvement to include all communities and continue to achieve the greatest.")}</p>
                <p>{t("about.careDescription2", "Our patients have taken and professionals guidance whilst providing timely and prompt access to these additional supports for clinical quality for the appropriate clinical.")}</p>
                <p>{t("about.careDescription3", "We believe that our leadership strategy that could live precondition that we promote the clinical tool advice over medical care through direct and guidance medical improvement.")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
