import React from 'react'
import { useLanguage } from '../../components/language-provider'
import ContactInfo from '../../components/contact-info'
import ServicesList from '../../components/services-list'
import HeroSection from '../../components/common/hero-section'

const MentalHealthPage: React.FC = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <HeroSection
        title={t("services.mentalHealth.title", "Mental Health Service")}
        subtitle={t("services.mentalHealth.description", "Compassionate and secure transport for mental health patients.")}
        image="/images/mental-health.jpg"
        imageAlt={t("services.mentalHealth.imageAlt", "Mental Health Vehicle")}
        imagePosition="right"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
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
          </div>

          <aside className="lg:col-span-1 space-y-8">
            <ContactInfo showGetInTouchButton={true} />
            <ServicesList 
              title={t("serviceDetails.ourServices", "Our Services")}
            />
          </aside>
        </div>
      </div>
    </div>
  )
}

export default MentalHealthPage
