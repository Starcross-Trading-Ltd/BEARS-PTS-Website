
import React from 'react'
import { useLanguage } from '../../components/language-provider'

export default function BariatricServicePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-[#0a2240] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">
            {t("services.bariatric.title", "Bariatric Service")}
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-orange-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700">
                {t("services.bariatric.description", "We understand the unique challenges and specialised care required for the transportation of bariatric patients.")}
              </p>
            </div>

            <div className="mb-8">
              <img 
                src="/images/bariatric.jpg" 
                alt={t("services.bariatric.imageAlt", "Bariatric Service Team")}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">
                  {t("services.bariatric.whatIsTitle", "What is Bariatric Transport?")}
                </h2>
                <p className="text-gray-700 mb-4">
                  {t("services.bariatric.whatIsDescription",
                    "Bariatric transport refers to the safe transport of patients who may require additional support due to their weight, mobility issues, or medical conditions. Our service ensures dignity, comfort, and safety during transportation."
                  )}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">
                  {t("services.bariatric.ourServiceTitle", "Our Bariatric Service")}
                </h2>
                <p className="text-gray-700 mb-4">
                  {t("services.bariatric.ourServiceDescription",
                    "Our Bariatric Service is delivered by a team of experienced professionals, including qualified ambulance technicians, trained crew members, and registered nurses where required. Our vehicles are specially equipped to accommodate bariatric patients with dignity and comfort."
                  )}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">
                  {t("services.bariatric.equipmentTitle", "Specialised Vehicles and Equipment")}
                </h2>
                <p className="text-gray-700 mb-4">
                  {t("services.bariatric.equipmentDescription",
                    "Our bariatric ambulances feature specialist equipment including wide-access doors, reinforced floors, heavy-duty stretchers, and lifting equipment. Our vehicles are equipped with state-of-the-art medical equipment and comfortable seating areas to ensure patient comfort throughout the journey."
                  )}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">
                  {t("services.bariatric.personalisedCareTitle", "Personalised Care and Support")}
                </h2>
                <p className="text-gray-700 mb-4">
                  {t("services.bariatric.personalisedCareDescription",
                    "Our dedicated team works closely with patients, their families, and healthcare providers to ensure personalised care before, during, and after transport. We prioritise patient dignity while providing comprehensive support and maintaining the highest clinical care standards."
                  )}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">
                  {t("serviceDetails.whyChooseUs", "Why Choose Us?")}
                </h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-[#0a2240]">
                      {t("serviceDetails.safety", "Safety:")}
                    </h3>
                    <p className="text-gray-700">
                      {t("serviceDetails.safetyDescription", "Our team of experienced professionals are trained in high dependency care, ensuring your loved ones are in safe, fully capable hands.")}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a2240]">
                      {t("serviceDetails.reliability", "Reliability:")}
                    </h3>
                    <p className="text-gray-700">
                      {t("serviceDetails.reliabilityDescription", "All service provision is punctual and reliable, ensuring seamless patient experience during their time with us.")}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a2240]">
                      {t("serviceDetails.comfort", "Comfort:")}
                    </h3>
                    <p className="text-gray-700">
                      {t("serviceDetails.comfortDescription", "We understand the importance of comfort during medical transport. Our vehicles are designed to prevent discomfort and maintain the patient's well-being during transport.")}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a2240]">
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

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-[#0a2240] mb-4">
                {t("serviceDetails.contactUs", "Contact Us")}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {t("serviceDetails.contactDescription", "For more information about our services or to make a booking, please contact our team.")}
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>{t("serviceDetails.phone", "Phone:")}</strong> {t("contact.phoneNumber", "+44 123 456 7890")}
                </p>
                <p>
                  <strong>{t("serviceDetails.email", "Email:")}</strong> {t("contact.emailAddress", "info@bearsambulance.com")}
                </p>
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-[#00855a] text-white rounded hover:bg-[#006e4a] transition-colors">
                {t("serviceDetails.getInTouch", "Get in touch")}
              </button>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#0a2240] mb-4">
                {t("serviceDetails.ourServices", "Our Services")}
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/services/nepts" className="text-[#4285f4] hover:underline">
                    {t("services.nepts.title", "NEPTS")}
                  </a>
                </li>
                <li>
                  <a href="/services/critical-retrieval" className="text-[#4285f4] hover:underline">
                    {t("services.criticalRetrieval.title", "Critical Care Retrieval")}
                  </a>
                </li>
                <li>
                  <a href="/services/ecmo" className="text-[#4285f4] hover:underline">
                    {t("services.ecmo.title", "ECMO Service")}
                  </a>
                </li>
                <li>
                  <a href="/services/neonatal" className="text-[#4285f4] hover:underline">
                    {t("services.neonatal.title", "Neonatal Transport")}
                  </a>
                </li>
                <li>
                  <a href="/services/mental-health" className="text-[#4285f4] hover:underline">
                    {t("services.mentalHealth.title", "Mental Health Transport")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

