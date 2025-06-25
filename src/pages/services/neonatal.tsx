import React from 'react'
import { useLanguage } from '../../components/language-provider'
import ContactInfo from '../../components/contact-info'
import ServicesList from '../../components/common/services-list'
import HeroSection from '../../components/common/hero-section'

export default function NeonatalPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <HeroSection
        title={t("services.neonatal.title", "Neonatal Service")}
        subtitle={t("services.neonatal.description", "Specialist neonatal transport with advanced care and equipment.")}
        image="/images/neonatal.jpg"
        imageAlt={t("services.neonatal.imageAlt", "Neonatal Team")}
        imagePosition="right"
        bgColor="rgba(236,72,153,0.85)"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="my-8">
                <img 
                  src="/images/neonatal-team.jpg" 
                  alt={t("neonatal.teamImageAlt", "Neonatal Transport Team")}
                  className="w-full h-auto object-cover rounded-xl shadow-lg border-4 border-white"
                />
              </div>
              <div className="space-y-8">
                <div>
                  <p className="text-gray-700 mb-6">
                    {t("neonatal.description", "At BEARS we recognise the critical nature of neonatal transportation, for newborn and paediatric patients requiring urgent care and specialised support. Our Neonatal Transport Service is committed to ensuring the safe transfer of critically ill newborns, infants, and young children to specialised paediatric and neonatal intensive care units, where they can receive the expert care they require.")}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0a2240] mb-4">{t("neonatal.availability.title", "24/7 Availability")}</h2>
                  <p className="text-gray-700 mb-4">
                    {t("neonatal.availability.description", "Medical emergencies for newborns and paediatric patients can arise at any time. Our team of highly trained medical professionals is available 24 hours a day, seven days a week, ensuring that critical emergencies are responded to promptly with our experienced medical staff available to provide assistance during critical times.")}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0a2240] mb-4">{t("neonatal.equipment.title", "Advanced Critical Care Support Equipment")}</h2>
                  <p className="text-gray-700 mb-4">
                    {t("neonatal.equipment.description", "Equipment and technology are crucial to the safe and effective transportation of critically ill newborns and children. Our neonatal and paediatric intensive care ambulances are designed to function as mobile intensive care units, equipped with state-of-the-art medical monitoring, life support systems and specialized paediatric and neonatal equipment.")}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0a2240] mb-4">{t("neonatal.guidance.title", "Experienced Clinical Guidance")}</h2>
                  <p className="text-gray-700 mb-4">
                    {t("neonatal.guidance.description", "Our team consists of dedicated neonatal and paediatric healthcare professionals, including neonatal nurses, paediatric nurses, and medical specialists. From neonatal resuscitation to complex cardiac support, our experienced and qualified team is trained to provide comprehensive care.")}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0a2240] mb-4">{t("neonatal.compassionate.title", "Personalised and Compassionate Care")}</h2>
                  <p className="text-gray-700 mb-4">
                    {t("neonatal.compassionate.description", "We understand the emotional and physical challenges that families face during these critical moments. Our team is committed to providing not only expert medical care but also emotional support and clear communication throughout the transportation process, providing caring, professional service to families.")}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0a2240] mb-4">{t("neonatal.reliable.title", "Reliable and Trustworthy Service")}</h2>
                  <p className="text-gray-700 mb-4">
                    {t("neonatal.reliable.description", "In critical situations, every moment counts. Our commitment to reliability means that families can trust us to provide rapid response times and safe, efficient transportation. We understand the urgency of neonatal and paediatric emergencies and are committed to providing transportation solutions that families can rely on during the most challenging times.")}
                  </p>
                </div>

                <div className="bg-pink-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#0a2240] mb-4">{t("neonatal.whyChoose.title", "Why Choose Us?")}</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{t("neonatal.whyChoose.expertise.title", "Expertise:")}</h4>
                      <p className="text-gray-700">{t("neonatal.whyChoose.expertise.description", "Our team of medical professionals are trained in high dependency care, ensuring your loved ones are in safe and capable hands.")}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{t("neonatal.whyChoose.equipment.title", "Advanced Equipment:")}</h4>
                      <p className="text-gray-700">{t("neonatal.whyChoose.equipment.description", "State-of-the-art medical technology and specialised neonatal transport equipment ensure the highest standards of care during transport.")}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{t("neonatal.whyChoose.compassion.title", "Compassion:")}</h4>
                      <p className="text-gray-700">{t("neonatal.whyChoose.compassion.description", "We understand the emotional challenges families face and provide compassionate support throughout the journey.")}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{t("neonatal.whyChoose.reliability.title", "Reliability:")}</h4>
                      <p className="text-gray-700">{t("neonatal.whyChoose.reliability.description", "Our round-the-clock availability and rapid response times ensure that critical care is delivered when it's needed most.")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-8">
                <img 
                  src="/images/neonatal-vehicle.jpg" 
                  alt={t("neonatal.vehicleImageAlt", "Neonatal Transport Vehicle")}
                  className="w-full h-auto object-cover rounded-xl shadow-lg border-4 border-white"
                />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-1 space-y-8">
            <ContactInfo showGetInTouchButton={true} />
            <ServicesList 
              title={t("home.ourServicesTitle", "Our Services")}
              excludeService="neonatal"
            />
          </aside>
        </div>
      </div>
    </div>
  )
}
