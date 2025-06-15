
import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../components/language-provider'

export default function HighDependancePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-[#0a2240] mb-6">{t("services.highDependance.title", "High Dependance")}</h1>
              <p className="text-lg text-gray-700 mb-8">
                {t("services.highDependance.description", "We provide specialised high-dependency care services designed for adult patients requiring complex care during transport.")}
              </p>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-[#0a2240] mb-4">{t("services.highDependance.ourServiceTitle", "Our High Dependency Service")}</h2>
                  <p className="text-gray-700 mb-4">
                    {t("services.highDependance.ourServiceDescription", "Our High Dependency Service provides specialised care for patients requiring complex medical support during transport.")}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0a2240] mb-4">{t("serviceDetails.whyChooseUs", "Why Choose Us?")}</h2>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-[#0a2240]">{t("serviceDetails.safety", "Safety:")}</h3>
                      <p className="text-gray-700">{t("serviceDetails.safetyDescription", "Our team of experienced professionals are trained in high dependency care, ensuring your loved ones are in safe, fully capable hands.")}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0a2240]">{t("serviceDetails.reliability", "Reliability:")}</h3>
                      <p className="text-gray-700">{t("serviceDetails.reliabilityDescription", "All service provision is punctual and reliable, ensuring seamless patient experience during their time with us.")}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0a2240]">{t("serviceDetails.comfort", "Comfort:")}</h3>
                      <p className="text-gray-700">{t("serviceDetails.comfortDescription", "We understand the importance of comfort during medical transport. Our vehicles are designed to prevent discomfort and maintain patient care during transport.")}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0a2240]">{t("serviceDetails.personalisedService", "Personalised Service:")}</h3>
                      <p className="text-gray-700">{t("serviceDetails.personalisedServiceDescription", "Our clinical teams are healthcare professionals, working collaboratively with patients and their families to ensure personalised care plans that meet your individual care needs throughout the journey.")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h3 className="text-lg font-bold text-[#0a2240] mb-4">{t("serviceDetails.contactUs", "Contact Us")}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {t("serviceDetails.contactDescription", "For more information about our services or to make a booking, please contact our team.")}
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>{t("serviceDetails.phone", "Phone:")}</strong> {t("contact.phoneNumber", "+44 123 456 7890")}</p>
                  <p><strong>{t("serviceDetails.email", "Email:")}</strong> {t("contact.emailAddress", "info@bearsambulance.com")}</p>
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-[#00855a] text-white rounded hover:bg-[#006e4a] transition-colors">
                  {t("serviceDetails.getInTouch", "Get in touch")}
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-[#0a2240] mb-4">{t("serviceDetails.ourServices", "Our Services")}</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/services/nepts" className="text-[#4285f4] hover:underline">{t("services.nepts.title", "NEPTS")}</Link></li>
                  <li><Link to="/services/bariatric" className="text-[#4285f4] hover:underline">{t("services.bariatric.title", "Bariatric Service")}</Link></li>
                  <li><Link to="/services/critical-retrieval" className="text-[#4285f4] hover:underline">{t("services.criticalRetrieval.title", "Critical Care Retrieval")}</Link></li>
                  <li><Link to="/services/ecmo" className="text-[#4285f4] hover:underline">{t("services.ecmo.title", "ECMO Service")}</Link></li>
                  <li><Link to="/services/mental-health" className="text-[#4285f4] hover:underline">{t("services.mentalHealth.title", "Mental Health Transport")}</Link></li>
                  <li><Link to="/services/neonatal" className="text-[#4285f4] hover:underline">{t("services.neonatal.title", "Neonatal Transport")}</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
