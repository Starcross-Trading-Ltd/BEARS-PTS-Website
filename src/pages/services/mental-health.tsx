
import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../components/language-provider'

export default function MentalHealthPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-[#0a2240] mb-6">Mental Health Service</h1>
              <p className="text-lg text-gray-700 mb-8">
                At BEARS, we recognise the importance of specialised care and support for 
                individuals requiring from clinical and non-emergency transport due to mental 
                health challenges.
              </p>

              <div className="space-y-8">
                <div>
                  <p className="text-gray-700 mb-6">
                    At BEARS, we recognise the importance of specialised care and support for 
                    individuals requiring from clinical and non-emergency transport due to mental 
                    health challenges. Our experienced clinical staff, Service is designed to provide 
                    compassionate, respectful, and safe transportation for individuals experiencing 
                    mental health challenges.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Understanding Mental Health Transport</h2>
                  <p className="text-gray-700 mb-4">
                    Transporting individuals with mental health conditions requires specific skills and 
                    understanding. Our team of qualified medical professionals recognises the 
                    complexities and challenges associated with mental health and is equipped with 
                    the knowledge and expertise to provide safe and compassionate support.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Specialised Training and Expertise</h2>
                  <p className="text-gray-700 mb-4">
                    Our Mental Health Transport team comprises of mental health professionals 
                    including mental health nurses, healthcare assistants, and other qualified staff. 
                    All our staff members are fully trained in mental health care strategies and de-
                    escalation techniques, ensuring patients receive appropriate and supportive care 
                    throughout their journey.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Safe and Comfortable Transportation</h2>
                  <p className="text-gray-700 mb-4">
                    Our vehicle fleet features purpose-designed vehicles equipped specifically for mental 
                    health transport. These vehicles are secure, comfortable, and equipped with 
                    necessary safety features to ensure that travelling is safe and comfortable for 
                    patients with diverse mental health needs.
                  </p>
                </div>

                <div className="my-8">
                  <img 
                    src="/images/mental-health-vehicle-1.jpg" 
                    alt="Mental Health Transport Vehicle"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Collaborative Approach to Care</h2>
                  <p className="text-gray-700 mb-4">
                    We work closely with healthcare professionals, social services, and families to 
                    ensure that transport management services align with the individual's 
                    treatment plan and specific needs. Our collaborative approach ensures 
                    continuity of care and support from collection to delivery destination, providing 
                    peace of mind for patients and their families.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Personalised Care Plans</h2>
                  <p className="text-gray-700 mb-4">
                    Every individual has unique needs, and we recognise this by creating 
                    personalised care plans that address specific requirements. From pre-transport 
                    consultations with the patient, their mental health team, medical or 
                    behavioural requirements to post-delivery follow-up, our services are designed 
                    to provide comprehensive support that prioritises patient well-being and safety 
                    throughout the entire journey, caring and understanding service.
                  </p>
                </div>

                <div className="my-8">
                  <img 
                    src="/images/mental-health-vehicle-2.jpg" 
                    alt="Mental Health Transport Interior"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#0a2240] mb-4">Why Choose Us?</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">Expertise:</h4>
                      <p className="text-gray-700">Our team of medical professionals are trained in high dependency care, ensuring your loved ones are in safe and capable hands.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Empathy:</h4>
                      <p className="text-gray-700">We approach every individual with empathy and understanding, ensuring they feel respected and supported throughout their journey.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Safety:</h4>
                      <p className="text-gray-700">Our vehicles and staff are dedicated to providing safe and comfortable transportation for all our patients.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Collaboration:</h4>
                      <p className="text-gray-700">We work seamlessly with healthcare providers, families, and social services to ensure coordinated and effective care.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Personalised Service:</h4>
                      <p className="text-gray-700">Each journey is tailored to the individual's specific needs, ensuring personalised care that respects their dignity and medical requirements.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                <img 
                  src="/images/mental-health.jpg" 
                  alt="Mental Health Transport"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#0a2240] mb-3">Contact Us</h3>
                  <p className="text-gray-700 mb-4">
                    For more information about our Mental Health Transport service or to 
                    arrange a transfer, please contact our operations team. Our expert advisors 
                    are here to assist you with all your non-emergency transport needs.
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-block px-6 py-3 bg-[#00855a] text-white font-medium rounded hover:bg-[#006e4a] transition-colors"
                  >
                    Get In Touch
                  </Link>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-bold text-[#0a2240] mb-3">Our Services</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/services/high-dependance" className="text-[#4285f4] hover:underline">High Dependance</Link></li>
                    <li><Link to="/services/critical-retrieval" className="text-[#4285f4] hover:underline">Critical Care Retrieval Response Service</Link></li>
                    <li><Link to="/services/ecmo" className="text-[#4285f4] hover:underline">ECMO - Extracorporeal Membrane Oxygenation</Link></li>
                    <li><Link to="/services/mental-health" className="text-[#4285f4] hover:underline">Mental Health Service</Link></li>
                    <li><Link to="/services/neonatal" className="text-[#4285f4] hover:underline">Non-Emergency Clients Transport Service (NEPTS)</Link></li>
                    <li><Link to="/services/bariatric" className="text-[#4285f4] hover:underline">Bariatric Service</Link></li>
                    <li><Link to="/services" className="text-[#4285f4] hover:underline">Paediatric Service</Link></li>
                    <li><Link to="/services" className="text-[#4285f4] hover:underline">General and Repatriation intensive care transfer</Link></li>
                    <li><Link to="/services" className="text-[#4285f4] hover:underline">Event Medical</Link></li>
                    <li><Link to="/services" className="text-[#4285f4] hover:underline">BEARS Clinical Helpline</Link></li>
                  </ul>
                </div>

                <div className="border-t pt-6 mt-6">
                  <h3 className="text-lg font-bold text-[#0a2240] mb-3">Company Details</h3>
                  <p className="text-sm text-gray-600 mb-2">BEARS Patient Transport Service Ltd</p>
                  <p className="text-sm text-gray-600 mb-2">Ambulance Service - Company No: 4269 3936</p>
                  <p className="text-sm text-gray-600 mb-2">Experience London SE1 9RT</p>
                  <Link to="/contact" className="text-[#4285f4] hover:underline text-sm">
                    Company and Office Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
