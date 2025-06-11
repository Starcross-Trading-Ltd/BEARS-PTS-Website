
import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../components/language-provider'

export default function MentalHealthPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-[#0a2240] mb-6">
                {t("serviceNames.mentalHealth", "Mental Health Service")}
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                {t("services.mentalHealth.description", "We understand that mental health conditions require specialised care and support for individuals, ensuring they receive mental and non-emergency transport.")}
              </p>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-[#0a2240] mb-4">{t("serviceDetails.whyChooseUs", "Why Choose Us?")}</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{t("serviceDetails.safety", "Safety:")}</h3>
                      <p className="text-gray-700">{t("serviceDetails.safetyDescription", "Our team of experienced professionals are trained in high dependency care, ensuring your loved ones are in safe, fully capable hands.")}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{t("serviceDetails.comfort", "Comfort:")}</h3>
                      <p className="text-gray-700">{t("serviceDetails.comfortDescription", "We understand the importance of comfort during medical transport. Our vehicles are designed to prevent discomfort and maintain patient care during transport.")}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{t("serviceDetails.personalisedService", "Personalised Service:")}</h3>
                      <p className="text-gray-700">{t("serviceDetails.personalisedServiceDescription", "Our clinical teams are healthcare professionals, working collaboratively with patients and their families to ensure personalised care plans that meet your individual care needs throughout the journey.")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#0a2240] mb-3">{t("serviceDetails.contactUs", "Contact Us")}</h3>
                  <p className="text-gray-700 mb-4">
                    {t("serviceDetails.contactDescription", "For more information about our services or to make a booking, please contact our team.")}
                  </p>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-600">
                      <strong>{t("serviceDetails.phone", "Phone:")}</strong> +44 123 456 7890
                    </p>
                    <p className="text-gray-600">
                      <strong>{t("serviceDetails.email", "Email:")}</strong> info@bearsambulance.com
                    </p>
                  </div>
                  <Link 
                    to="/contact"
                    className="inline-block px-6 py-3 bg-[#00855a] text-white font-medium rounded hover:bg-[#006e4a] transition-colors"
                  >
                    {t("serviceDetails.getInTouch", "Get in touch")}
                  </Link>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-bold text-[#0a2240] mb-3">{t("serviceDetails.ourServices", "Our Services")}</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/services/high-dependance" className="text-[#4285f4] hover:underline">{t("serviceNames.highDependance", "High Dependance")}</Link></li>
                    <li><Link to="/services/critical-retrieval" className="text-[#4285f4] hover:underline">{t("serviceNames.specialistCritical", "Critical Care Retrieval")}</Link></li>
                    <li><Link to="/services/ecmo" className="text-[#4285f4] hover:underline">{t("serviceNames.ecmo", "ECMO Service")}</Link></li>
                    <li><Link to="/services/mental-health" className="text-[#4285f4] hover:underline">{t("serviceNames.mentalHealth", "Mental Health Service")}</Link></li>
                    <li><Link to="/services/nepts" className="text-[#4285f4] hover:underline">{t("serviceNames.nepts", "NEPTS")}</Link></li>
                    <li><Link to="/services/bariatric" className="text-[#4285f4] hover:underline">{t("serviceNames.bariatric", "Bariatric Service")}</Link></li>
                    <li><Link to="/services/paramedic" className="text-[#4285f4] hover:underline">{t("serviceNames.paramedic", "Paramedic Service")}</Link></li>
                    <li><Link to="/services/neonatal" className="text-[#4285f4] hover:underline">{t("serviceNames.neonatal", "Neonatal Transport")}</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
