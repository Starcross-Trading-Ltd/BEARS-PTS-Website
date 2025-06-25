import React from 'react'
import { useLanguage } from '../../components/language-provider'
import ContactInfo from '../../components/contact-info'
import ServicesList from '../../components/common/services-list'
import HeroSection from '../../components/common/hero-section'

export default function HighDependancePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <HeroSection
        title={t("services.highDependance.title", "High Dependence Service")}
        subtitle={t("services.highDependance.description", "Safe and reliable transport for high-dependency patients.")}
        image="/images/high-dependance.jpg"
        imageAlt={t("services.highDependance.imageAlt", "High Dependence Team")}
        imagePosition="right"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
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
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            <ContactInfo showGetInTouchButton={true} />
            <ServicesList 
              title={t("serviceDetails.ourServices", "Our Services")}
              excludeService="high-dependance"
            />
          </aside>
        </div>
      </div>
    </div>
  )
}
