import React from 'react'
import { useLanguage } from '../../components/language-provider'
import ContactInfo from '../../components/contact-info'
import ServicesList from '../../components/common/services-list'
import HeroSection from '../../components/common/hero-section'

export default function NEPTSServicePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <HeroSection
        title={t("services.nepts.title", "NEPTS Service")}
        subtitle={t("services.nepts.description", "Non-emergency patient transport with care and comfort.")}
        image="/images/nepts_1.png"
        imageAlt={t("services.nepts.imageAlt", "NEPTS Vehicle")}
        imagePosition="right"
        bgColor="rgba(34,197,94,0.85)"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-8">
                <img 
                  src="/images/ambulance.png" 
                  alt={t("services.nepts.imageAlt", "NEPTS Service Team")}
                  className="w-full h-auto object-cover rounded-xl shadow-lg border-4 border-white"
                />
              </div>
              <div className="space-y-8">
                <div>
                  <p className="text-gray-700 mb-4">
                    {t("services.nepts.intro", "At BEARS, we understand that every patient requires specialised care and support. Our compassionate and professional team is dedicated to providing excellent care and patient advocacy throughout each journey, ensuring individual needs are identified and catered for when required.")}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">{t("services.nepts.whatIsTitle", "What is Non-Emergency Patient Transport?")}</h2>
                  <p className="text-gray-700 mb-4">
                    {t("services.nepts.whatIsDescription", "Non-Emergency Patient Transport refers to the movement of patients who require medical supervision during transport but do not need emergency care. This service is designed to safely transport patients providing safe and reliable transportation, whilst maintaining the highest levels of care and comfort.")}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">{t("services.nepts.ourServiceTitle", "Our NEPT Service")}</h2>
                  <p className="text-gray-700 mb-4">
                    {t("services.nepts.ourServiceDescription", "Our NEPT service is delivered by teams of experienced professionals, including qualified ambulance technicians, trained crew members, and qualified healthcare support workers. Our service is always delivered with compassion and dignity.")}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">{t("services.nepts.equipmentTitle", "Specialised Vehicles and Equipment")}</h2>
                  <p className="text-gray-700 mb-4">
                    {t("services.nepts.equipmentDescription", "We utilise specially equipped modern emergency ambulances with lifesaving interventions readily available should the patient require this level of care. The vehicles are equipped with comfortable seating, climate control, and a full range of basic medical equipment for safe transport ensuring clinical needs are met whilst providing comfort wherever possible.")}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">{t("services.nepts.personalisedCareTitle", "Personalised Care and Support")}</h2>
                  <p className="text-gray-700 mb-4">
                    {t("services.nepts.personalisedCareDescription", "We believe in person-centred care where each patient's specific needs are our priority. We work closely with healthcare providers and patients to understand their medical history, any specific mobility requirements or conditions, as required, maintaining the dignity and comfort of each individual. Our comprehensive care plans ensure healthcare needs of patients are understood and they receive compassionate, attentive care during transport.")}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">{t("serviceDetails.whyChooseUs", "Why Choose Us?")}</h2>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-primary">{t("serviceDetails.expertise", "Expertise:")}</h3>
                      <p className="text-gray-700">{t("serviceDetails.expertiseDescription", "Our team of medical professionals are trained in high dependency care, ensuring your loved ones are in safe hands from start to finish.")}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">{t("serviceDetails.reliability", "Reliability:")}</h3>
                      <p className="text-gray-700">{t("services.nepts.reliabilityDescription", "We pride ourselves on punctuality and reliability, ensuring timely and efficient transportation for all our patients.")}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">{t("serviceDetails.comfort", "Comfort:")}</h3>
                      <p className="text-gray-700">{t("services.nepts.comfortDescription", "We understand the importance of comfort during medical transport. Our vehicles are designed to provide a comfortable and stress-free environment for patients and their families.")}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">{t("serviceDetails.personalisedService", "Personalised Service:")}</h3>
                      <p className="text-gray-700">{t("services.nepts.personalisedServiceDescription", "We work closely with healthcare providers, patients, and their families to create personalised care plans that meet the unique needs of each individual.")}</p>
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
              excludeService="nepts"
            />
          </aside>
        </div>
      </div>
    </div>
  )
}
