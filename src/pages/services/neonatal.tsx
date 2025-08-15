import React, { useState } from 'react'
import { useLanguage } from '../../components/language-provider'
import ContactInfo from '../../components/contact-info'
import ServicesList from '../../components/common/services-list'
import HeroSection from '../../components/common/hero-section'

// Paediatric/Neonatal vehicle images
const neonatalImages = [
  '/images/paed_additional/processed-6F2A76E3-2DF7-4310-884B-34FDE1532C35.jpeg',
  '/images/paed_additional/processed-59A013CE-D5E8-46C3-B483-CCC4EAAEA647.jpeg',
  '/images/paed_additional/original-98E905BC-3894-47A6-9271-511B73AEA9F9.jpeg',
  '/images/paed_additional/original-5BC91563-2F80-4388-9AC4-FA1579E88EB6.jpeg',
]

export default function NeonatalPage() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="min-h-screen">
      <HeroSection
        title={t("services.neonatal.title", "Neonatal Service")}
        subtitle={t("services.neonatal.description", "Specialist neonatal transport with advanced care and equipment.")}
        image="/images/neo_1.png"
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
                  src="/images/2025_BEARS_333.jpg" 
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
                  <h2 className="text-2xl font-bold text-primary mb-4">{t("neonatal.availability.title", "24/7 Availability")}</h2>
                  <p className="text-gray-700 mb-4">
                    {t("neonatal.availability.description", "Medical emergencies for newborns and paediatric patients can arise at any time. Our team of highly trained medical professionals is available 24 hours a day, seven days a week, ensuring that critical emergencies are responded to promptly with our experienced medical staff available to provide assistance during critical times.")}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">{t("neonatal.equipment.title", "Advanced Critical Care Support Equipment")}</h2>
                  <p className="text-gray-700 mb-4">
                    {t("neonatal.equipment.description", "Equipment and technology are crucial to the safe and effective transportation of critically ill newborns and children. Our neonatal and paediatric intensive care ambulances are designed to function as mobile intensive care units, equipped with state-of-the-art medical monitoring, life support systems and specialized paediatric and neonatal equipment.")}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">{t("neonatal.guidance.title", "Experienced Clinical Guidance")}</h2>
                  <p className="text-gray-700 mb-4">
                    {t("neonatal.guidance.description", "Our team consists of dedicated neonatal and paediatric healthcare professionals, including neonatal nurses, paediatric nurses, and medical specialists. From neonatal resuscitation to complex cardiac support, our experienced and qualified team is trained to provide comprehensive care.")}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">{t("neonatal.compassionate.title", "Personalised and Compassionate Care")}</h2>
                  <p className="text-gray-700 mb-4">
                    {t("neonatal.compassionate.description", "We understand the emotional and physical challenges that families face during these critical moments. Our team is committed to providing not only expert medical care but also emotional support and clear communication throughout the transportation process, providing caring, professional service to families.")}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">{t("neonatal.reliable.title", "Reliable and Trustworthy Service")}</h2>
                  <p className="text-gray-700 mb-4">
                    {t("neonatal.reliable.description", "In critical situations, every moment counts. Our commitment to reliability means that families can trust us to provide rapid response times and safe, efficient transportation. We understand the urgency of neonatal and paediatric emergencies and are committed to providing transportation solutions that families can rely on during the most challenging times.")}
                  </p>
                </div>

                {/* Neonatal Vehicle Gallery */}
                <div className="my-12">
                  <h2 className="text-2xl font-bold text-primary mb-6">Our Neonatal Transport Vehicles</h2>
                  <p className="text-gray-700 mb-6">
                    Our specialised neonatal and paediatric transport vehicles are equipped with state-of-the-art medical equipment designed specifically for the care of critically ill newborns and children.
                  </p>
                  
                  {/* Main Image Display */}
                  <div className="relative mb-6">
                    <div className="relative overflow-hidden rounded-xl shadow-lg">
                      <img
                        src={neonatalImages[selectedImage]}
                        alt={`Neonatal Transport Vehicle ${selectedImage + 1}`}
                        className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                        <div className="text-sm font-semibold text-gray-800">Vehicle {selectedImage + 1} of {neonatalImages.length}</div>
                        <div className="text-xs text-gray-600">Specialised transport</div>
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail Gallery */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {neonatalImages.map((image, index) => (
                      <div
                        key={index}
                        className={`group relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                          selectedImage === index ? 'ring-4 ring-primary' : ''
                        }`}
                        onClick={() => setSelectedImage(index)}
                      >
                        <img
                          src={image}
                          alt={`Neonatal Transport Vehicle ${index + 1}`}
                          className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-2 left-2 right-2 text-center">
                          <div className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Vehicle {index + 1}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Air Ambulance Transport for Children */}
                <div className="my-12 bg-gradient-to-r from-blue-50 to-pink-50 rounded-2xl p-8 border-l-4 border-primary">
                  <h2 className="text-2xl font-bold text-primary mb-6">Transport to Air Ambulance Services</h2>
                  <p className="text-gray-700 mb-6">
                    For critically ill children requiring air ambulance transfer to specialist paediatric centres, our specialised ground transport service ensures safe and timely transfer to air ambulance facilities. We work closely with air ambulance providers to coordinate seamless patient transfers.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">Rapid Response</h3>
                      </div>
                      <p className="text-gray-600">
                        Our teams respond quickly to transport children to air ambulance facilities, ensuring no delays in critical care transfers.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">Specialist Equipment</h3>
                      </div>
                      <p className="text-gray-600">
                        Our vehicles are equipped with paediatric-specific medical equipment to maintain patient stability during transport to air ambulance facilities.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">Expert Team</h3>
                      </div>
                      <p className="text-gray-600">
                        Experienced paediatric critical care teams ensure safe ground transport and smooth handover to air ambulance services.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">Family Support</h3>
                      </div>
                      <p className="text-gray-600">
                        Compassionate care for families during the transport process, with clear communication about the transfer to air ambulance services.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-lg font-semibold text-primary mb-4">When Transport to Air Ambulance is Needed</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">Critical paediatric emergencies requiring air ambulance transfer</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">Long-distance transfers to specialist paediatric centres</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">Neonatal intensive care unit transfers</span>
                        </li>
                      </ul>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">Paediatric cardiac surgery transfers</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">Complex trauma cases requiring specialist intervention</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">Time-critical transfers where air ambulance is required</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-pink-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-4">{t("neonatal.whyChoose.title", "Why Choose Us?")}</h3>
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
                  src="/images/neo_3.png" 
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
