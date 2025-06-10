
import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../components/language-provider'

export default function ServicesPage() {
  const { t } = useLanguage()

  const services = [
    {
      title: "NEPTS",
      description: "Non-Emergency Patient Transport Service",
      link: "/services/nepts",
      image: "/images/nepts.jpg"
    },
    {
      title: "Bariatric Service", 
      description: "Specialist transport for bariatric patients",
      link: "/services/bariatric",
      image: "/images/bariatric.jpg"
    },
    {
      title: "Critical Care Retrieval",
      description: "Specialist Critical Retrieval Response Service",
      link: "/services/critical-retrieval",
      image: "/images/critical-retrieval.jpg"
    },
    {
      title: "ECMO Service",
      description: "Extracorporeal Membrane Oxygenation transport",
      link: "/services/ecmo",
      image: "/images/ecmo-service.jpg"
    },
    {
      title: "High Dependance",
      description: "High dependency care transport service",
      link: "/services/high-dependance",
      image: "/images/high-dependance.jpg"
    },
    {
      title: "Mental Health Transport",
      description: "Secure mental health patient transport",
      link: "/services/mental-health",
      image: "/images/mental-health.jpg"
    },
    {
      title: "Neonatal Transport",
      description: "Specialist neonatal and paediatric transport",
      link: "/services/neonatal",
      image: "/images/neonatal.jpg"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0a2240] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            BEARS provides a comprehensive range of patient transport services, specializing in safety, comfort and care across all our operations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0a2240] mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-[#4285f4] hover:underline"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0a2240] mb-6">Need Our Services?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your patient transport requirements. Our team is available 24/7 to provide the highest quality care.
          </p>
          <Link 
            to="/contact"
            className="inline-block px-8 py-3 bg-[#00855a] text-white font-medium rounded hover:bg-[#006e4a] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
