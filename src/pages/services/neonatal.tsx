
import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../components/language-provider'

export default function NeonatalPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-[#0a2240] mb-6">
                Neonatal and Paediatric intensive care transfer service
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                At BEARS we recognise the critical nature of neonatal transportation, for newborn 
                and paediatric patients requiring urgent care and specialised support.
              </p>

              <div className="space-y-8">
                <div>
                  <p className="text-gray-700 mb-6">
                    At BEARS we recognise the critical nature of neonatal transportation, for newborn 
                    and paediatric patients requiring urgent care and specialised support. Our 
                    Neonatal Transport Service is committed to ensuring the safe transfer of critically ill 
                    newborns, infants, and young children to specialised paediatric and neonatal 
                    intensive care units, where they can receive the expert care they require.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0a2240] mb-4">24/7 Availability</h2>
                  <p className="text-gray-700 mb-4">
                    Medical emergencies for newborns and paediatric professionals in available around 
                    the clock. Our team of highly trained medical professionals is available 24 hours 
                    a day, seven days a week, ensuring that no emergency that arise at the neonatal 
                    and our other experienced medical unit are promptly of in our round-the-clock and 
                    other highly trained professionals able to be assistance during critical times.
                  </p>
                </div>

                <div className="my-8">
                  <img 
                    src="/images/neonatal-team.jpg" 
                    alt="Neonatal Transport Team"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Advanced Critical Care Support Equipment</h2>
                  <p className="text-gray-700 mb-4">
                    Equipment and technology are crucial to the safe and effective transportation of 
                    critically ill newborns and children. Our neonatal and paediatric intensive 
                    ambulances are/vehicle are designed to function as mobile intensive care units, 
                    equipped with state-of-the-art medical monitoring, life support systems and 
                    equipment with a full range of life support measures and specialised paediatric and 
                    neonatal and ventilatory support, other services in processes neonatal care.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Experienced Clinical Guidance</h2>
                  <p className="text-gray-700 mb-4">
                    Our team consists of dedicated neonatal and paediatric or dual support 
                    team for quality paediatric and experienced neonatal treatment team 
                    professionals, including neonatal nurses, paediatric nurses, and medical 
                    equipment in a variety. From neonatal resuscitation to complex cardiac 
                    support, our team operating or experienced and know qualified and trained in 
                    for support clients care for.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Personalised and Compassionate Care</h2>
                  <p className="text-gray-700 mb-4">
                    We understand the emotional and physical challenges that families face during 
                    these critical moments. Our team is committed to providing not only expert medical 
                    care but also emotional support and clear communication throughout the 
                    transportation process providing, and their families, caring, professional service.
                  </p>
                </div>

                <div className="my-8">
                  <img 
                    src="/images/neonatal-vehicle.jpg" 
                    alt="Neonatal Transport Vehicle"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Reliable and Trustworthy Service</h2>
                  <p className="text-gray-700 mb-4">
                    In critical situations, every moment counts. Our commitment to reliability means 
                    that families can trust us to provide rapid response times and safe, efficient 
                    transportation. We understand the urgency of neonatal and paediatric 
                    emergencies and are committed to providing transportation solutions that families 
                    can rely on during the most challenging times.
                  </p>
                </div>

                <div className="bg-pink-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#0a2240] mb-4">Why Choose Us?</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">Expertise:</h4>
                      <p className="text-gray-700">Our team of medical professionals are trained in high dependency care, ensuring your loved ones are in safe and capable hands.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Advanced Equipment:</h4>
                      <p className="text-gray-700">State-of-the-art medical technology and specialised neonatal transport equipment ensure the highest standards of care during transport.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Compassion:</h4>
                      <p className="text-gray-700">We understand the emotional challenges families face and provide compassionate support throughout the journey.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Reliability:</h4>
                      <p className="text-gray-700">Our round-the-clock availability and rapid response times ensure that critical care is delivered when it's needed most.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                <img 
                  src="/images/neonatal.jpg" 
                  alt="Neonatal Transport"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#0a2240] mb-3">Contact Us</h3>
                  <p className="text-gray-700 mb-4">
                    For more information about our Neonatal and Paediatric Intensive Care Transfer service or to 
                    arrange a transfer, please contact our operations team. Our expert advisors 
                    are here to assist you with all your emergency transport needs.
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
