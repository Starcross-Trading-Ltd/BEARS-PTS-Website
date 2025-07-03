import React from 'react'
import { useLanguage } from '../../components/language-provider'
import ContactInfo from '../../components/contact-info'
import ServicesList from '../../components/common/services-list'
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
        bgColor="rgba(34,197,94,0.85)"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
              <section>
                <p className="text-lg text-gray-700 mb-6">
                  At BEARS, we recognise the importance of specialised care and support for individuals requiring time critical and non-emergency transport due to mental health challenges. Our dedicated Mental Health Service is designed to provide compassionate, respectful, and safe transportation for patients experiencing a range of mental health conditions across the UK.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-primary mb-2">Understanding Mental Health Transport</h2>
                <p className="text-gray-700">
                  Transporting individuals with mental health needs requires a sensitive and tailored approach. Our Mental Health Service is delivered by a team of trained professionals who understand the complexities and sensitivities involved in providing care for individuals experiencing mental health crises or requiring psychiatric assessments.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-primary mb-2">Specialised Training and Expertise</h2>
                <p className="text-gray-700">
                  Our Mental Health Service team consists of mental health nurses, trained paramedics, and support staff who have undergone specialised training in mental health awareness, crisis intervention, and de-escalation techniques. This ensures that our team is well-equipped to manage and support patients with compassion, empathy, and professionalism.
                </p>
              </section>
              <div className="flex justify-center my-8">
                <img
                  src="/images/mental-health-vehicle-1.jpg"
                  alt="BEARS Mental Health Transport Vehicle"
                  className="rounded-xl shadow-lg w-full max-w-md object-cover"
                />
              </div>
              <section>
                <h2 className="text-xl font-bold text-primary mb-2">Safe and Comfortable Transportation</h2>
                <p className="text-gray-700">
                  We utilise discreet and unbranded vehicles to ensure privacy and confidentiality for our mental health patients. Our vehicles are equipped with secure seating options and safety features to ensure the well-being and comfort of our passengers during transit.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-primary mb-2">Collaborative Approach to Care</h2>
                <p className="text-gray-700">
                  We work closely with registered mental health professionals, hospitals, and care providers to coordinate transportation services that align with the individual's treatment plan and specific needs. Our collaborative approach ensures seamless communication and continuity of care for our patients, promoting positive outcomes and overall well-being.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-primary mb-2">Personalised Care Plans</h2>
                <p className="text-gray-700">
                  Each Mental Health Service journey is accompanied by a personalised care plan developed in consultation with the patient, their mental health team, and any involved family members or advocates. This plan outlines the specific support and interventions required during transport, ensuring a compassionate and tailored approach to care.
                </p>
              </section>
            </div>
            <div className="bg-green-100 border-l-8 border-green-500 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Why Choose Us?</h2>
              <ul className="space-y-3 text-lg text-green-900 list-disc list-inside">
                <li><span className="font-semibold">Expertise:</span> Our team of medical professionals are trained in high dependency care, ensuring your loved ones are in safe and capable hands.</li>
                <li><span className="font-semibold">Reliability:</span> We pride ourselves on punctuality and reliability, ensuring timely and efficient transportation for all our patients.</li>
                <li><span className="font-semibold">Comfort:</span> We understand the importance of comfort during medical transport. Our vehicles are designed to provide a comfortable and stress-free environment for patients and their families.</li>
                <li><span className="font-semibold">Personalised Service:</span> We work closely with healthcare providers, patients, and their families to create personalised care plans that meet the unique needs of each individual.</li>
              </ul>
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
