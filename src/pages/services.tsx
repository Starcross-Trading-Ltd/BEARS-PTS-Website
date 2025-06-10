
import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../components/language-provider'

export default function ServicesPage() {
  const { t } = useLanguage()

  const services = [
    {
      title: "High Dependance",
      description: "We provide specialised high-dependency care services designed for adult patients requiring complex care during transport.",
      link: "/services/high-dependance",
      color: "blue"
    },
    {
      title: "Specialist Critical Retrieval Response Service",
      description: "24/7 availability providing critical care services all of whom are received with high standards in response care units.",
      link: "/services/critical-retrieval", 
      color: "blue"
    },
    {
      title: "ECMO - Extracorporeal Membrane Oxygenation",
      description: "At BEARS we are proud to offer a specialist ECMO (Extracorporeal Membrane Oxygenation) Service, delivering advanced life support throughout transportation.",
      link: "/services/ecmo",
      color: "purple"
    },
    {
      title: "Mental Health Service",
      description: "We understand that mental health conditions require specialised care and support for individuals, ensuring they receive mental and non-emergency transport.",
      link: "/services/mental-health",
      color: "green"
    },
    {
      title: "Non Emergency Patient Transport Service (NEPTS)",
      description: "At BEARS, we specialise in providing reliable and compassionate non-emergency Patient Transport (NEPT) services across the UK.",
      link: "/services/nepts",
      color: "green"
    },
    {
      title: "Bariatric Service",
      description: "We understand the unique challenges and specialised care required for the transportation of bariatric patients.",
      link: "/services/bariatric",
      color: "orange"
    },
    {
      title: "Paramedic Service",
      description: "At BEARS, we understand that some patients require specialised care and support during transportation.",
      link: "/services/paramedic",
      color: "red"
    },
    {
      title: "Neonatal and Paediatric Intensive care transfer service",
      description: "At BEARS we recognize the critical nature of neonatal transportation for newborn and neonate patients requiring urgent care and specialist support.",
      link: "/services/neonatal",
      color: "pink"
    },
    {
      title: "BEARS Clinical Helpline",
      description: "At BEARS, we strive to support our staff and provide 24/7 access to clinical support through our on-call clinical and specialist staff.",
      link: "/services/clinical-helpline",
      color: "gray"
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'border-l-4 border-blue-500'
      case 'purple':
        return 'border-l-4 border-purple-500'
      case 'green':
        return 'border-l-4 border-green-500'
      case 'orange':
        return 'border-l-4 border-orange-500'
      case 'red':
        return 'border-l-4 border-red-500'
      case 'pink':
        return 'border-l-4 border-pink-500'
      case 'gray':
        return 'border-l-4 border-gray-500'
      default:
        return 'border-l-4 border-blue-500'
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0a2240] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <div className="mb-8">
            <img 
              src="/images/patient-transport.jpg" 
              alt="Patient Transport Service"
              className="w-32 h-32 mx-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${getColorClasses(service.color)}`}>
                <h3 className="text-lg font-bold text-[#0a2240] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-[#4285f4] hover:underline text-sm"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
