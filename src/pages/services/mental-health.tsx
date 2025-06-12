
import React from 'react'
import { useLanguage } from '../../components/language-provider'
import ContactInfo from '../../components/contact-info'
import ServicesList from '../../components/services-list'

const MentalHealthPage: React.FC = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <header>
                <h1 className="text-4xl md:text-5xl font-bold text-[#0a2240] mb-6">
                  {t("serviceNames.mentalHealth", "Mental Health Service")}
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  {t("services.mentalHealth.description", "We understand that mental health conditions require specialised care and support for individuals, ensuring they receive mental and non-emergency transport.")}
                </p>
              </header>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-[#0a2240] mb-4">
                    {t("serviceDetails.whyChooseUs", "Why Choose Us?")}
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t("serviceDetails.safety", "Safety:")}
                      </h3>
                      <p className="text-gray-700">
                        {t("serviceDetails.safetyDescription", "Our team of experienced professionals are trained in high dependency care, ensuring your loved ones are in safe, fully capable hands.")}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t("serviceDetails.comfort", "Comfort:")}
                      </h3>
                      <p className="text-gray-700">
                        {t("serviceDetails.comfortDescription", "We understand the importance of comfort during medical transport. Our vehicles are designed to prevent discomfort and maintain patient care during transport.")}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t("serviceDetails.personalisedService", "Personalised Service:")}
                      </h3>
                      <p className="text-gray-700">
                        {t("serviceDetails.personalisedServiceDescription", "Our clinical teams are healthcare professionals, working collaboratively with patients and their families to ensure personalised care plans that meet your individual care needs throughout the journey.")}
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <ContactInfo showGetInTouchButton={true} className="mb-8" />
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <ServicesList 
                  title={t("serviceDetails.ourServices", "Our Services")}
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MentalHealthPage
