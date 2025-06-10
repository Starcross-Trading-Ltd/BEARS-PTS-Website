
import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../components/language-provider'

export default function ParamedicServicePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-[#0a2240] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Paramedic Service</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-red-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700">
                At BEARS, we understand that some patients require specialised care and support 
                during transportation.
              </p>
            </div>

            <div className="mb-8">
              <img 
                src="/images/paramedic-service.jpg" 
                alt="Paramedic Service Team"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-gray-700 mb-4">
                  At BEARS, we understand that some patients require specialised care and 
                  support during transportation. Our experienced and professional team is 
                  dedicated to identifying individual needs and catering for medical and 
                  care requirements whilst also ensuring a safe and comfortable journey.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">What is Paramedic Transport?</h2>
                <p className="text-gray-700 mb-4">
                  Paramedic transport involves the safe movement of patients and clinical 
                  intervention by qualified Paramedics. Our experienced crew provide advanced 
                  care and life support to critically ill patients. Our paramedics provide 
                  emergency care and advanced procedures, delivering interventions and 
                  monitoring throughout transport, ensuring continued care is provided.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Our Commitment to Safety and Care</h2>
                <p className="text-gray-700 mb-4">
                  We take pride in ensuring the safety and comfort of patients during their 
                  transport. Our qualified paramedics are experienced with advanced 
                  life support care, critical care medicine, and emergency interventions. 
                  We are equipped to provide continuous care, monitoring vital signs 
                  and providing medication or equipment as needed.
                </p>
              </div>

              <div className="mb-8">
                <img 
                  src="/images/paramedic-care.jpg" 
                  alt="Paramedic providing care"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Specialised Vehicles and Equipment</h2>
                <p className="text-gray-700 mb-4">
                  We utilise specialist emergency equipped with advanced medical 
                  equipment and facilities to ensure the highest standards of care during 
                  transport. Our equipment is contemporary and represents the highest 
                  standard of medical technology and our paramedics have advanced level 
                  training with continuous professional development to provide the most 
                  complex interventions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Personalised Care Plans</h2>
                <p className="text-gray-700 mb-4">
                  Each transport begins with comprehensive care planning and collaboration 
                  with the patient and their healthcare team including family members. Our 
                  qualified paramedics work with patients and families to identify individual 
                  health care needs to provide personalised care during transport and 
                  improve patients' overall experience during their journey.
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
                    <p className="text-gray-700">We work closely with healthcare providers and their families to create personalised care plans that meet the unique needs of each individual.</p>
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
                For more information about our paramedic service or to make a booking, please contact our team.
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
                <li><Link to="/services/nepts" className="text-[#4285f4] hover:underline">NEPTS</Link></li>
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
