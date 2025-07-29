import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Heart, Clock, Users, Car, Stethoscope, Baby, Brain } from 'lucide-react'
import { useLanguage } from '../components/language-provider'
import HeroSection from '../components/common/hero-section'

export default function ServicesPage() {
  const { t } = useLanguage()
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      title: t("services.highDependance.title", "High Dependance"),
      description: t("services.highDependance.description", "We provide specialised high-dependency care services designed for adult patients requiring complex care during transport."),
      link: "/services/high-dependance",
      icon: Shield,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: t("services.criticalRetrieval.title", "Specialist Critical Retrieval Response Service"),
      description: t("services.criticalRetrieval.description", "24/7 availability providing critical care services all of whom are received with high standards in response care units."),
      link: "/services/critical-retrieval", 
      icon: Heart,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      title: t("services.ecmo.title", "ECMO - Extracorporeal Membrane Oxygenation"),
      description: t("services.ecmo.description", "At BEARS we are proud to offer a specialist ECMO (Extracorporeal Membrane Oxygenation) Service, delivering advanced life support throughout transportation."),
      link: "/services/ecmo",
      icon: Stethoscope,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      title: t("services.mentalHealth.title", "Mental Health Service"),
      description: t("services.mentalHealth.description", "We understand that mental health conditions require specialised care and support for individuals, ensuring they receive mental and non-emergency transport."),
      link: "/services/mental-health",
      icon: Brain,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      title: t("services.nepts.title", "Non Emergency Patient Transport Service (NEPTS)"),
      description: t("services.nepts.description", "At BEARS, we specialise in providing reliable and compassionate non-emergency Patient Transport (NEPT) services across the UK."),
      link: "/services/nepts",
      icon: Car,
      color: "from-primary to-[#006e4a]",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/20"
    },
    {
      title: t("services.bariatric.title", "Bariatric Service"),
      description: t("services.bariatric.description", "We understand the unique challenges and specialised care required for the transportation of bariatric patients."),
      link: "/services/bariatric",
      icon: Users,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      title: t("services.paramedic.title", "Paramedic Service"),
      description: t("services.paramedic.description", "At BEARS, we understand that some patients require specialised care and support during transportation."),
      link: "/services/paramedic",
      icon: Shield,
      color: "from-red-600 to-red-700",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      title: t("services.neonatal.title", "Neonatal and Paediatric Intensive care transfer service"),
      description: t("services.neonatal.description", "At BEARS we recognize the critical nature of neonatal transportation for newborn and neonate patients requiring urgent care and specialist support."),
      link: "/services/neonatal",
      icon: Baby,
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <HeroSection
        title={t("services.ourServicesTitle", "Our Services")}
        subtitle={t("services.ourServicesDescription", "Explore our comprehensive range of patient transport and specialist care services designed to meet the highest standards of healthcare.")}
        image="/images/2025_BEARS_077.jpg"
        imageAlt="BEARS Services"
        imagePosition="right"
        bgColor="#388e6c"
      />

      {/* Services Overview Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in-up">
              Comprehensive Care Services
            </h2>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-up delay-100 max-w-3xl mx-auto leading-relaxed">
              From emergency response to specialized patient transport, our services are designed to provide 
              the highest level of care, comfort, and safety for patients across all healthcare needs.
            </p>
            <div className="flex justify-center space-x-6 animate-fade-in-up delay-200">
              <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-100"></div>
              <div className="w-4 h-4 bg-amber-500 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Link
                  key={index}
                  to={service.link}
                  className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 ${service.borderColor} overflow-hidden ${service.bgColor} min-h-[400px] block cursor-pointer`}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  onClick={() => console.log('Navigating to:', service.link)}
                >
                  {/* Service Icon */}
                  <div className="absolute top-8 right-8">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-10 pt-20">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-8 text-base leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Learn More Button */}
                    <div 
                      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-base`}
                    >
                      {t("services.learnMore", "Learn More")} 
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose BEARS Services Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Why Choose BEARS Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is reflected in every aspect of our service delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-[#006e4a] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">CQC Regulated</h3>
              <p className="text-gray-600 text-sm">Fully compliant with Care Quality Commission standards</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Availability</h3>
              <p className="text-gray-600 text-sm">Round-the-clock service for emergency and non-emergency needs</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">Qualified healthcare professionals with specialized training</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Patient-Centered</h3>
              <p className="text-gray-600 text-sm">Compassionate care focused on patient comfort and dignity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-[#006e4a] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience BEARS Care?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our services and how we can support your healthcare transport needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/bookings"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
            >
              Book Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
