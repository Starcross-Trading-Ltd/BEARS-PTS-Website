
import React from 'react'
import { useLanguage } from '../../components/language-provider'

export default function ECMOServicePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-[#0a2240] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">ECMO - Extracorporeal Membrane Oxygenation</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-pink-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700">
                At BEARS, we are proud to offer a specialised ECMO (Extracorporeal Membrane 
                Oxygenation) Service, transporting patients with severe respiratory failure 
                for patients with severe respiratory or cardiac failure across the UK.
              </p>
            </div>

            <div className="mb-8">
              <img 
                src="/images/ecmo-service.jpg" 
                alt="ECMO Service Vehicle"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">What is ECMO?</h2>
                <p className="text-gray-700 mb-4">
                  ECMO (Extracorporeal Membrane Oxygenation) is a life-saving technique that 
                  provides heart and lung support by diverting blood from the patient's 
                  body through an external circuit where oxygen is added and carbon dioxide is removed, 
                  before returning the blood to the patient's circulation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Our Specialised ECMO Service</h2>
                <p className="text-gray-700 mb-4">
                  Our ECMO Service is delivered by a team of experienced ECMO-trained medical 
                  professionals, including ECMO specialists, intensive care nurses, and medical 
                  technicians. Our specialised vehicles are equipped with state-of-the-art ECMO 
                  machines, monitoring equipment and all the equipment necessary to provide 
                  life-sustaining treatment during transport.
                </p>
              </div>

              <div className="mb-8">
                <img 
                  src="/images/ecmo-team.jpg" 
                  alt="ECMO Team"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Advanced Equipment and Vehicles</h2>
                <p className="text-gray-700 mb-4">
                  Our specialised ECMO vehicles are equipped with advanced life support equipment 
                  including ECMO machines, ventilators, infusion pumps, and specialised monitoring 
                  devices. Our vehicles are climate controlled and shock-protected to ensure 
                  stable transport conditions during inter-hospital transfers. The specialist 
                  equipment also includes backup power supplies to ensure continuous care during transport.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">24/7 Availability</h2>
                <p className="text-gray-700 mb-4">
                  Understanding that critical care emergencies can occur at any time, our ECMO service is available 
                  24/7 providing rapid response and clinical intervention across the UK. Our specialised 
                  team is always ready to respond to urgent requests to provide ECMO transportation 
                  services where the receiving hospital is unable to support ECMO therapy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Personalised Care and Support</h2>
                <p className="text-gray-700 mb-4">
                  At BEARS we understand how overwhelming ECMO treatment can be for patients and families. 
                  ECMO clinical teams are available with compassion, professionalism, and understanding, 
                  providing clinical and emotional support to families during these difficult times and 
                  working collaboratively with existing care teams providing seamless clinical continuity.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Why Choose Us?</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-[#0a2240]">Safety:</h3>
                    <p className="text-gray-700">Our team of experienced professionals are trained in high dependency care, ensuring your loved ones are in safe, fully capable hands.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a2240]">Reliability:</h3>
                    <p className="text-gray-700">All service provision is punctual and reliable, ensuring seamless patient experience during their time with us.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a2240]">Comfort:</h3>
                    <p className="text-gray-700">We understand the importance of comfort during medical transport. Our vehicles are designed to prevent discomfort and maintain ECMO therapy during transport.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a2240]">Personalised Service:</h3>
                    <p className="text-gray-700">Our clinical teams are healthcare professionals, providing comprehensive patient care plans personalised and comprehensive support tailored during these challenging times.</p>
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
                For more information about our ECMO service or to make a booking, please contact our team.
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
                <li><a href="/services/nepts" className="text-[#4285f4] hover:underline">NEPTS</a></li>
                <li><a href="/services/bariatric" className="text-[#4285f4] hover:underline">Bariatric Service</a></li>
                <li><a href="/services/critical-retrieval" className="text-[#4285f4] hover:underline">Critical Care Retrieval</a></li>
                <li><a href="/services/neonatal" className="text-[#4285f4] hover:underline">Neonatal Transport</a></li>
                <li><a href="/services/mental-health" className="text-[#4285f4] hover:underline">Mental Health Transport</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
