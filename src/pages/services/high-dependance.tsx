
import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../components/language-provider'

export default function HighDependancePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-[#0a2240] mb-6">High Dependance</h1>
              <p className="text-lg text-gray-700 mb-8">
                The transportation of critically ill patients who require specialist care during their 
                journey to and from hospital.
              </p>

              <div className="space-y-8">
                <div>
                  <p className="text-gray-700 mb-6">
                    At BEARS, we understand that some patients require specialised care and 
                    support during transportation. Our High Dependance Transport service is 
                    designed to cater to individuals who need a higher level of medical supervision 
                    and assistance during non-emergency journeys.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0a2240] mb-4">What is High Dependency Transport?</h2>
                  <p className="text-gray-700 mb-4">
                    High dependency transport involves the safe and comfortable transport of 
                    patients who require a higher level of care and monitoring than standard non-
                    emergency transport. This service is tailored to meet the specific needs of 
                    patients who may have complex medical conditions, require specialised 
                    equipment, or need medical supervision during travel.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Our Commitment to Safety and Care</h2>
                  <p className="text-gray-700 mb-4">
                    At BEARS, the safety, comfort, and well-being of all patients are our top priorities. 
                    Our high dependency transport service is delivered by highly trained and 
                    experienced medical professionals who are equipped to provide continuous 
                    care monitoring and support throughout the journey.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Specialised Vehicles and Equipment</h2>
                  <p className="text-gray-700 mb-4">
                    We utilise specially designed vehicles equipped with advanced medical 
                    equipment and facilities to ensure the highest standards of care during 
                    transportation. Our vehicles are maintained to the highest standards and 
                    equipped with state-of-the-art medical equipment to support patient needs.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Personalised Care Plans</h2>
                  <p className="text-gray-700 mb-4">
                    Each High Dependency transport journey is accompanied by a personalised 
                    care plan developed in consultation with the patient, their healthcare team, and 
                    our medical professionals. This ensures that every aspect of the patient's care is 
                    considered and appropriately managed throughout the journey, ensuring a 
                    stress-free experience for both the patient and their family.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#0a2240] mb-4">Why Choose Us?</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">Expertise:</h4>
                      <p className="text-gray-700">Our team of medical professionals are trained in high dependency care, ensuring your loved ones are in safe and capable hands.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Reliability:</h4>
                      <p className="text-gray-700">We provide efficient transportation for all our patients, ensuring they arrive at their destination on time and in comfort during medical transport.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Comfort:</h4>
                      <p className="text-gray-700">Our vehicles are designed to provide a comfortable and stress-free environment for patients and their families.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Personalised Service:</h4>
                      <p className="text-gray-700">We work closely with healthcare providers, patients, and their families to create personalised care plans that meet individual needs and preferences.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                <img 
                  src="/images/high-dependance.jpg" 
                  alt="High Dependance Transport"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#0a2240] mb-3">Contact Us</h3>
                  <p className="text-gray-700 mb-4">
                    For more information about our High Dependance Transport service or to 
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
                    <li><Link to="/services" className="text-[#4285f4] hover:underline">High Dependance</Link></li>
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
