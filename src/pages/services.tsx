import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../components/language-provider'
import HeroSection from '../components/common/hero-section'

export default function ServicesPage() {
  const { t } = useLanguage()

  const services = [
    {
      title: t("services.highDependance.title", "High Dependance"),
      description: t("services.highDependance.description", "We provide specialised high-dependency care services designed for adult patients requiring complex care during transport."),
      link: "/services/high-dependance",
      color: "blue"
    },
    {
      title: t("services.criticalRetrieval.title", "Specialist Critical Retrieval Response Service"),
      description: t("services.criticalRetrieval.description", "24/7 availability providing critical care services all of whom are received with high standards in response care units."),
      link: "/services/critical-retrieval", 
      color: "blue"
    },
    {
      title: t("services.ecmo.title", "ECMO - Extracorporeal Membrane Oxygenation"),
      description: t("services.ecmo.description", "At BEARS we are proud to offer a specialist ECMO (Extracorporeal Membrane Oxygenation) Service, delivering advanced life support throughout transportation."),
      link: "/services/ecmo",
      color: "purple"
    },
    {
      title: t("services.mentalHealth.title", "Mental Health Service"),
      description: t("services.mentalHealth.description", "We understand that mental health conditions require specialised care and support for individuals, ensuring they receive mental and non-emergency transport."),
      link: "/services/mental-health",
      color: "green"
    },
    {
      title: t("services.nepts.title", "Non Emergency Patient Transport Service (NEPTS)"),
      description: t("services.nepts.description", "At BEARS, we specialise in providing reliable and compassionate non-emergency Patient Transport (NEPT) services across the UK."),
      link: "/services/nepts",
      color: "green"
    },
    {
      title: t("services.bariatric.title", "Bariatric Service"),
      description: t("services.bariatric.description", "We understand the unique challenges and specialised care required for the transportation of bariatric patients."),
      link: "/services/bariatric",
      color: "orange"
    },
    {
      title: t("services.paramedic.title", "Paramedic Service"),
      description: t("services.paramedic.description", "At BEARS, we understand that some patients require specialised care and support during transportation."),
      link: "/services/paramedic",
      color: "red"
    },
    {
      title: t("services.neonatal.title", "Neonatal and Paediatric Intensive care transfer service"),
      description: t("services.neonatal.description", "At BEARS we recognize the critical nature of neonatal transportation for newborn and neonate patients requiring urgent care and specialist support."),
      link: "/services/neonatal",
      color: "pink"
    },
    {
      title: t("services.clinicalHelpline.title", "BEARS Clinical Helpline"),
      description: t("services.clinicalHelpline.description", "At BEARS, we strive to support our staff and provide 24/7 access to clinical support through our on-call clinical and specialist staff."),
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
      <HeroSection
        title={t("services.ourServicesTitle", "Our Services")}
        subtitle={t("services.ourServicesDescription", "Explore our full range of patient transport and specialist care services.")}
        image="/images/service-header.jpg"
        imageAlt="BEARS Services"
        imagePosition="right"
      />

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 ${getColorClasses(service.color)}`}>
                <h3 className="text-2xl font-bold text-[#0a2240] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-base">{service.description}</p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center px-6 py-3 bg-[#4285f4] text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition text-lg"
                >
                  {t("services.learnMore", "Learn more")} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
