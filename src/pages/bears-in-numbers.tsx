
import React from 'react'
import { useLanguage } from '../components/language-provider'

export default function BearsInNumbersPage() {
  const { t } = useLanguage()

  const stats = [
    { number: "15+", label: "Years of Service", description: "Providing patient transport since 2009" },
    { number: "50+", label: "Qualified Staff", description: "Experienced healthcare professionals" },
    { number: "24/7", label: "Service Availability", description: "Round-the-clock patient care" },
    { number: "1000+", label: "Patients Transported", description: "Monthly patient transfers" },
    { number: "99%", label: "Customer Satisfaction", description: "High-quality service delivery" },
    { number: "8", label: "Service Categories", description: "Specialized transport services" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0a2240] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">BEARS in Numbers</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Our commitment to excellence is reflected in our track record of successful patient transports and healthcare partnerships.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-[#4285f4] mb-4">{stat.number}</div>
                <h3 className="text-xl font-bold text-[#0a2240] mb-2">{stat.label}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0a2240] mb-8">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-bold text-[#0a2240] mb-4">Healthcare Partnerships</h3>
                <p className="text-gray-700 mb-4">
                  We work closely with NHS trusts, private hospitals, and healthcare facilities across the UK to provide seamless patient transport services.
                </p>
                <p className="text-gray-700">
                  Our partnerships ensure that patients receive the highest standard of care during transport, maintaining continuity of treatment.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0a2240] mb-4">Quality Commitment</h3>
                <p className="text-gray-700 mb-4">
                  Every transport is conducted with our core values of Safety, Comfort, and Care at the forefront, ensuring patient wellbeing throughout their journey.
                </p>
                <p className="text-gray-700">
                  Our team undergoes continuous training and professional development to maintain the highest standards of patient care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
