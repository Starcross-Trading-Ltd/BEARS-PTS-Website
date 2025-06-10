
import React from 'react'
import { useLanguage } from '../../components/language-provider'

export default function CriticalRetrievalPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-[#0a2240] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Specialist Critical Retrieval Response Service</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700">
                At BEARS, we are proud to offer a specialised ECMO (Extracorporeal Membrane 
                Oxygenation) Service, transporting critically ill neonates from locations 
                across London to specialist centres.
              </p>
            </div>

            <div className="mb-8">
              <img 
                src="/images/critical-retrieval.jpg" 
                alt="Critical Retrieval Vehicle"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">24/7 Availability</h2>
                <p className="text-gray-700 mb-4">
                  Understanding that critical care cannot wait, our specialist critical care retrieval 
                  service is available around the clock. The coordination that marks all of the points in our rapid 
                  mobilisation sequence, and related medical teams and logistics, work together 
                  to provide immediate response when critical interventions are required.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Advanced Critical Care Support Equipment</h2>
                <p className="text-gray-700 mb-4">
                  Equipment we utilise will be current and state of the art including but not limited to 
                  our specialised vehicles like integrated comprehensive critical care systems, 
                  including advanced vital sign monitoring and respiratory equipment, as these 
                  sophisticated and complex machines are administered by our experienced, 
                  dedicated health care teams with highly specialist knowledge to enable us to 
                  guarantee reliability and performance.
                </p>
              </div>

              <div className="mb-8">
                <img 
                  src="/images/critical-vehicles.jpg" 
                  alt="Critical Care Vehicles"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Experienced Clinical Guidance</h2>
                <p className="text-gray-700 mb-4">
                  Using only qualified, HCPC registered paramedics on our team who support 
                  advanced clinical teams we deliver expert care and monitoring throughout the retrieval 
                  mission. Our teams work seamlessly together transitioning between clinical centre, 
                  creating clinically appropriate and comprehensive patient management planning 
                  and adapting in real time during transport.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Personalised and Compassionate Care</h2>
                <p className="text-gray-700 mb-4">
                  At BEARS we understand every retrieval is an extreme life or death situation 
                  where families are involved and our holistic approach includes providing 
                  emotional and psychological support to families throughout this difficult journey 
                  experienced at each individual providing consistent support and 
                  information to patients and families during these challenging times.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Reliable and Trustworthy Service</h2>
                <p className="text-gray-700 mb-4">
                  We are confident about our profession-style specialists, technical excellence in 
                  service management and to stay committed to the highest quality of care 
                  provided to our patients and their families. Service confidence is important to us 
                  providing choice for healthcare providers, healthcare, and choice in respect of 
                  information management trusted improvement.
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
                    <p className="text-gray-700">We understand the importance of comfort during medical transport. Our vehicles are designed to prevent discomfort and maintain patient care during transport.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a2240]">Personalised Service:</h3>
                    <p className="text-gray-700">Our clinical teams are healthcare professionals, administering each patient personal care plans that meet individuated personalised care plans that meet your individual care needs that are most responsive during challenging times.</p>
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
                For more information about our critical retrieval service or to make a booking, please contact our team.
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
                <li><a href="/services/ecmo" className="text-[#4285f4] hover:underline">ECMO Service</a></li>
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
