import React from 'react'
import { useLanguage } from '../../components/language-provider'
import ContactInfo from '../../components/contact-info'
import ServicesList from '../../components/common/services-list'
import HeroSection from '../../components/common/hero-section'

export default function ParamedicServicePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <HeroSection
        title={t("services.paramedic.title", "Paramedic Service")}
        subtitle={t("services.paramedic.description", "Professional paramedic transport for urgent and planned care.")}
        image="/images/paramedic.jpg"
        imageAlt={t("services.paramedic.imageAlt", "Paramedic Team")}
        imagePosition="right"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-8">
                <img 
                  src="/images/paramedic-service.jpg" 
                  alt={t("services.paramedic.imageAlt", "Paramedic Service Team")}
                  className="w-full h-auto object-cover rounded-xl shadow-lg border-4 border-white"
                />
              </div>
              <div className="space-y-8">
                <div>
                  <p className="text-gray-700 mb-4">
                    {t("services.paramedic.intro", "At BEARS, we understand that some patients require specialised care and support during transportation. Our experienced and professional team is dedicated to identifying individual needs and catering for medical and care requirements whilst also ensuring a safe and comfortable journey.")}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0a2240] mb-4">{t("services.paramedic.whatIsTitle", "What is Paramedic Transport?")}</h2>
                  <p className="text-gray-700 mb-4">
                    {t("services.paramedic.whatIsDescription", "Paramedic transport involves the safe movement of patients and clinical intervention by qualified Paramedics. Our experienced crew provide advanced care and life support to critically ill patients. Our paramedics provide emergency care and advanced procedures, delivering interventions and monitoring throughout transport, ensuring continued care is provided.")}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0a2240] mb-4">{t("services.paramedic.commitmentTitle", "Our Commitment to Safety and Care")}</h2>
                  <p className="text-gray-700 mb-4">
                    {t("services.paramedic.commitmentDescription", "We take pride in ensuring the safety and comfort of patients during their transport. Our qualified paramedics are experienced with advanced life support care, critical care medicine, and emergency interventions. We are equipped to provide continuous care, monitoring vital signs and providing medication or equipment as needed.")}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0a2240] mb-4">{t("services.paramedic.equipmentTitle", "Specialised Vehicles and Equipment")}</h2>
                  <p className="text-gray-700 mb-4">
                    {t("services.paramedic.equipmentDescription", "We utilise specialist emergency equipped with advanced medical equipment and facilities to ensure the highest standards of care during transport. Our equipment is contemporary and represents the highest standard of medical technology and our paramedics have advanced level training with continuous professional development to provide the most complex interventions.")}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0a2240] mb-4">{t("services.paramedic.carePlansTitle", "Personalised Care Plans")}</h2>
                  <p className="text-gray-700 mb-4">
                    {t("services.paramedic.carePlansDescription", "Each transport begins with comprehensive care planning and collaboration with the patient and their healthcare team including family members. Our qualified paramedics work with patients and families to identify individual health care needs to provide personalised care during transport and improve patients' overall experience during their journey.")}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0a2240] mb-4">{t("serviceDetails.whyChooseUs", "Why Choose Us?")}</h2>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-[#0a2240]">{t("serviceDetails.expertise", "Expertise:")}</h3>
                      <p className="text-gray-700">{t("serviceDetails.expertiseDescription", "Our team of medical professionals are trained in high dependency care, ensuring your loved ones are in safe hands from start to finish.")}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0a2240]">{t("serviceDetails.reliability", "Reliability:")}</h3>
                      <p className="text-gray-700">{t("services.paramedic.reliabilityDescription", "We pride ourselves on punctuality and reliability, ensuring timely and efficient transportation for all our patients.")}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0a2240]">{t("serviceDetails.comfort", "Comfort:")}</h3>
                      <p className="text-gray-700">{t("services.paramedic.comfortDescription", "We understand the importance of comfort during medical transport. Our vehicles are designed to provide a comfortable and stress-free environment for patients and their families.")}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0a2240]">{t("serviceDetails.personalisedService", "Personalised Service:")}</h3>
                      <p className="text-gray-700">{t("services.paramedic.personalisedServiceDescription", "We work closely with healthcare providers and their families to create personalised care plans that meet the unique needs of each individual.")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <img 
                  src="/images/paramedic-care.jpg" 
                  alt={t("services.paramedic.careImageAlt", "Paramedic providing care")}
                  className="w-full h-auto object-cover rounded-xl shadow-lg border-4 border-white"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            <ContactInfo showGetInTouchButton={true} />
            <ServicesList 
              title={t("serviceDetails.ourServices", "Our Services")}
              excludeService="paramedic"
            />
          </aside>
        </div>
      </div>
    </div>
  )
}
