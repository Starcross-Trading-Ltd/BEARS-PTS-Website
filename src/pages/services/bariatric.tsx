import React from 'react'
import { useLanguage } from '../../components/language-provider'
import ContactInfo from '../../components/contact-info'
import ServicesList from '../../components/common/services-list'
import HeroSection from '../../components/common/hero-section'

export default function BariatricServicePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Header */}
      <HeroSection
        title={t("services.bariatric.title", "Bariatric Service")}
        subtitle={t("services.bariatric.description", "We understand the unique challenges and specialised care required for the transportation of bariatric patients.")}
        image="/images/para_2.png"
        imageAlt={t("services.bariatric.imageAlt", "Bariatric Service Team")}
        imagePosition="right"
        bgColor="rgba(251,146,60,0.85)"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-8">
                <img 
                  src="/images/nepts_1.png" 
                  alt={t("services.bariatric.imageAlt", "Bariatric Service Team")}
                  className="w-full h-auto object-cover rounded-xl shadow-lg border-4 border-white"
                />
              </div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    {t("services.bariatric.whatIsTitle", "What is Bariatric Transport?")}
                  </h2>
                  <p className="text-gray-700 mb-4">
                    {t("services.bariatric.whatIsDescription",
                      "Bariatric transport refers to the safe transport of patients who may require additional support due to their weight, mobility issues, or medical conditions. Our service ensures dignity, comfort, and safety during transportation."
                    )}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    {t("services.bariatric.ourServiceTitle", "Our Bariatric Service")}
                  </h2>
                  <p className="text-gray-700 mb-4">
                    {t("services.bariatric.ourServiceDescription",
                      "Our Bariatric Service is delivered by a team of experienced professionals, including qualified ambulance technicians, trained crew members, and registered nurses where required. Our vehicles are specially equipped to accommodate bariatric patients with dignity and comfort."
                    )}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    {t("services.bariatric.equipmentTitle", "Specialised Vehicles and Equipment")}
                  </h2>
                  <p className="text-gray-700 mb-4">
                    {t("services.bariatric.equipmentDescription",
                      "Our bariatric ambulances feature specialist equipment including wide-access doors, reinforced floors, heavy-duty stretchers, and lifting equipment. Our vehicles are equipped with state-of-the-art medical equipment and comfortable seating areas to ensure patient comfort throughout the journey."
                    )}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    {t("services.bariatric.personalisedCareTitle", "Personalised Care and Support")}
                  </h2>
                  <p className="text-gray-700 mb-4">
                    {t("services.bariatric.personalisedCareDescription",
                      "Our dedicated team works closely with patients, their families, and healthcare providers to ensure personalised care before, during, and after transport. We prioritise patient dignity while providing comprehensive support and maintaining the highest clinical care standards."
                    )}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    {t("serviceDetails.whyChooseUs", "Why Choose Us?")}
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-primary">
                        {t("serviceDetails.safety", "Safety:")}
                      </h3>
                      <p className="text-gray-700">
                        {t("serviceDetails.safetyDescription", "Our team of experienced professionals are trained in high dependency care, ensuring your loved ones are in safe, fully capable hands.")}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">
                        {t("serviceDetails.reliability", "Reliability:")}
                      </h3>
                      <p className="text-gray-700">
                        {t("serviceDetails.reliabilityDescription", "All service provision is punctual and reliable, ensuring seamless patient experience during their time with us.")}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">
                        {t("serviceDetails.comfort", "Comfort:")}
                      </h3>
                      <p className="text-gray-700">
                        {t("serviceDetails.comfortDescription", "We understand the importance of comfort during medical transport. Our vehicles are designed to prevent discomfort and maintain the patient's well-being during transport.")}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">
                        {t("serviceDetails.personalisedService", "Personalised Service:")}
                      </h3>
                      <p className="text-gray-700">
                        {t("serviceDetails.personalisedServiceDescription", "Our clinical teams are healthcare professionals, working collaboratively with patients and their families to ensure personalised care plans that meet your individual care needs throughout the journey.")}
                      </p>
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
              excludeService="bariatric"
            />
          </aside>
        </div>
      </div>
    </div>
  )
}
