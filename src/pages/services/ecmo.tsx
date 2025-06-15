import React from 'react'
import { useLanguage } from '../../components/language-provider'
import ContactInfo from '../../components/contact-info'
import ServicesList from '../../components/common/services-list'

export default function ECMOServicePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-[#0a2240] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">{t("services.ecmo.title", "ECMO - Extracorporeal Membrane Oxygenation")}</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-pink-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700">
                {t("services.ecmo.description", "At BEARS we are proud to offer a specialist ECMO (Extracorporeal Membrane Oxygenation) Service, delivering advanced life support throughout transportation.")}
              </p>
            </div>

            <div className="mb-8">
              <img 
                src="/images/ecmo-service.jpg" 
                alt={t("services.ecmo.imageAlt", "ECMO Service Vehicle")}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">{t("services.ecmo.whatIsTitle", "What is ECMO?")}</h2>
                <p className="text-gray-700 mb-4">
                  {t("services.ecmo.whatIsDescription", "ECMO (Extracorporeal Membrane Oxygenation) is a life-saving technique that provides heart and lung support by diverting blood from the patient's body through an external circuit where oxygen is added and carbon dioxide is removed, before returning the blood to the patient's circulation.")}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">{t("services.ecmo.ourServiceTitle", "Our Specialised ECMO Service")}</h2>
                <p className="text-gray-700 mb-4">
                  {t("services.ecmo.ourServiceDescription", "Our ECMO Service is delivered by a team of experienced ECMO-trained medical professionals, including ECMO specialists, intensive care nurses, and medical technicians. Our specialised vehicles are equipped with state-of-the-art ECMO machines, monitoring equipment and all the equipment necessary to provide life-sustaining treatment during transport.")}
                </p>
              </div>

              <div className="mb-8">
                <img 
                  src="/images/ecmo-team.jpg" 
                  alt={t("services.ecmo.teamImageAlt", "ECMO Team")}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">{t("services.ecmo.equipmentTitle", "Advanced Equipment and Vehicles")}</h2>
                <p className="text-gray-700 mb-4">
                  {t("services.ecmo.equipmentDescription", "Our specialised ECMO vehicles are equipped with advanced life support equipment including ECMO machines, ventilators, infusion pumps, and specialised monitoring devices. Our vehicles are climate controlled and shock-protected to ensure stable transport conditions during inter-hospital transfers. The specialist equipment also includes backup power supplies to ensure continuous care during transport.")}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">{t("services.ecmo.availabilityTitle", "24/7 Availability")}</h2>
                <p className="text-gray-700 mb-4">
                  {t("services.ecmo.availabilityDescription", "Understanding that critical care emergencies can occur at any time, our ECMO service is available 24/7 providing rapid response and clinical intervention across the UK. Our specialised team is always ready to respond to urgent requests to provide ECMO transportation services where the receiving hospital is unable to support ECMO therapy.")}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">{t("services.ecmo.personalisedCareTitle", "Personalised Care and Support")}</h2>
                <p className="text-gray-700 mb-4">
                  {t("services.ecmo.personalisedCareDescription", "At BEARS we understand how overwhelming ECMO treatment can be for patients and families. ECMO clinical teams are available with compassion, professionalism, and understanding, providing clinical and emotional support to families during these difficult times and working collaboratively with existing care teams providing seamless clinical continuity.")}
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
                    <p className="text-gray-700">{t("services.ecmo.comfortDescription", "We understand the importance of comfort during medical transport. Our vehicles are designed to prevent discomfort and maintain ECMO therapy during transport.")}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a2240]">{t("serviceDetails.personalisedService", "Personalised Service:")}</h3>
                    <p className="text-gray-700">{t("services.ecmo.personalisedServiceDescription", "Our clinical teams are healthcare professionals, providing comprehensive patient care plans personalised and comprehensive support tailored during these challenging times.")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <ContactInfo showGetInTouchButton={true} className="mb-8" />
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ServicesList 
                title={t("serviceDetails.ourServices", "Our Services")}
                excludeService="ecmo"
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
