
import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../components/language-provider'

export default function NEPTSServicePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-[#0a2240] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Non Emergency Patient Transport Service (NEPTS)</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700">
                At BEARS, we specialise in providing reliable and compassionate non-emergency 
                Patient Transport (NEPT) services across the UK.
              </p>
            </div>

            <div className="mb-8">
              <img 
                src="/images/nepts.jpg" 
                alt="NEPTS Service Team"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-gray-700 mb-4">
                  At BEARS, we understand that every patient requires specialised care and 
                  support. Our compassionate and professional team is dedicated to 
                  providing excellent care and patient advocacy throughout each journey, 
                  ensuring individual needs are identified and catered for when required.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">What is Non-Emergency Patient Transport?</h2>
                <p className="text-gray-700 mb-4">
                  Non-Emergency Patient Transport refers to the movement of patients 
                  who require medical supervision during transport but do not need 
                  emergency care. This service is designed to safely transport patients 
                  providing safe and reliable transportation, whilst maintaining the highest 
                  levels of care and comfort.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Our NEPT Service</h2>
                <p className="text-gray-700 mb-4">
                  Our NEPT service is delivered by teams of experienced professionals, including 
                  qualified ambulance technicians, trained crew members, and qualified healthcare 
                  support workers. Our service is always delivered with compassion and dignity.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Specialised Vehicles and Equipment</h2>
                <p className="text-gray-700 mb-4">
                  We utilise specially equipped modern emergency ambulances with lifesaving 
                  interventions readily available should the patient require this level 
                  of care. The vehicles are equipped with comfortable seating, climate 
                  control, and a full range of basic medical equipment for safe transport 
                  ensuring clinical needs are met whilst providing comfort wherever possible.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Personalised Care and Support</h2>
                <p className="text-gray-700 mb-4">
                  We believe in person-centred care where each patient's specific needs 
                  are our priority. We work closely with healthcare providers and patients to understand their 
                  medical history, any specific mobility requirements or conditions, 
                  as required, maintaining the dignity and comfort of each individual. Our 
                  comprehensive care plans ensure healthcare needs of patients are 
                  understood and they receive compassionate, attentive care during transport.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Why Choose Us?</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-[#0a2240]">Expertise:</h3>
                    <p className="text-gray-700">Our team of medical professionals are trained in high dependency care, ensuring your loved ones are in safe hands from start to finish.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a2240]">Reliability:</h3>
                    <p className="text-gray-700">We pride ourselves on punctuality and reliability, ensuring timely and efficient transportation for all our patients.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a2240]">Comfort:</h3>
                    <p className="text-gray-700">We understand the importance of comfort during medical transport. Our vehicles are designed to provide a comfortable and stress-free environment for patients and their families.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a2240]">Personalised Service:</h3>
                    <p className="text-gray-700">We work closely with healthcare providers, patients, and their families to create personalised care plans that meet the unique needs of each individual.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-[#0a2240] mb-4">Contact Us</h3>
              <p className="text-sm text-gray-600 mb-4">
                For more information about our NEPTS service or to make a booking, please contact our team.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Phone:</strong> +44 123 456 7890</p>
                <p><strong>Email:</strong> info@bearsambulance.com</p>
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-[#00855a] text-white rounded hover:bg-[#006e4a] transition-colors">
                Get in touch
              </button>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#0a2240] mb-4">Our Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services/bariatric" className="text-[#4285f4] hover:underline">Bariatric Service</Link></li>
                <li><Link to="/services/critical-retrieval" className="text-[#4285f4] hover:underline">Critical Care Retrieval</Link></li>
                <li><Link to="/services/ecmo" className="text-[#4285f4] hover:underline">ECMO Service</Link></li>
                <li><Link to="/services/high-dependance" className="text-[#4285f4] hover:underline">High Dependance</Link></li>
                <li><Link to="/services/mental-health" className="text-[#4285f4] hover:underline">Mental Health Transport</Link></li>
                <li><Link to="/services/neonatal" className="text-[#4285f4] hover:underline">Neonatal Transport</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
