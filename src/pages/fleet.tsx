import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../components/language-provider'
import HeroSection from '../components/common/hero-section'

// Fleet images from the directory
const fleetImages = [
  '/images/fleet/2025_BEARS_056.jpg',
  '/images/fleet/2025_BEARS_062.jpg',
  '/images/fleet/2025_BEARS_064.jpg',
  '/images/fleet/2025_BEARS_632.jpg',
]

export default function FleetPage() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-white">
      {/* Hero Section */}
      <HeroSection
        title={t('fleet.ourFleetTitle', 'Our Fleet')}
        subtitle={t('fleet.fleetDescription', 'State-of-the-art vehicles designed for patient comfort and safety')}
        image="/images/fleet/2025_BEARS_052.jpg"
        imageAlt="BEARS Fleet"
        imagePosition="right"
        bgColor="#388e6c"
      />

      {/* Fleet Overview Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in-up">
              Our Modern Fleet
            </h2>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-up delay-100 max-w-4xl mx-auto leading-relaxed">
              Our fleet of state-of-the-art vehicles is designed to provide the highest level of comfort, 
              safety, and reliability for our patients and healthcare partners.
            </p>
            <div className="flex justify-center space-x-6 animate-fade-in-up delay-200">
              <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-100"></div>
              <div className="w-4 h-4 bg-amber-500 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Fleet Gallery */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Main Fleet Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={fleetImages[selectedImage]}
                  alt={`BEARS Fleet Vehicle ${selectedImage + 1}`}
                  className="w-full h-96 md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-sm font-semibold text-gray-800">Vehicle {selectedImage + 1}</div>
                  <div className="text-xs text-gray-600">State-of-the-art patient transport</div>
                </div>
              </div>
            </div>

            {/* Fleet Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-primary">
                <h3 className="text-3xl font-bold text-primary mb-4">Fleet Features</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Advanced Medical Equipment</h4>
                      <p className="text-gray-600">State-of-the-art monitoring and life support systems</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Patient Comfort</h4>
                      <p className="text-gray-600">Ergonomic seating and climate control for optimal comfort</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Safety Standards</h4>
                      <p className="text-gray-600">Rigorous safety protocols and regular maintenance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">24/7 Availability</h4>
                      <p className="text-gray-600">Round-the-clock service with rapid response times</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fleet Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-gray-600">CQC Regulated</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/10 to-primary/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Reliability Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Gallery Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Fleet Showcase</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Click on any vehicle to view it in detail and learn about our fleet's capabilities and features.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {fleetImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  selectedImage === index ? 'ring-4 ring-primary' : ''
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  alt={`BEARS Fleet Vehicle ${index + 1}`}
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2 text-center">
                  <div className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Vehicle {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5"></div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-l-4 border-primary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">{t('fleet.companyDetailsTitle', 'Company Details')}</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <strong className="text-gray-800">{t('fleet.companyTradingNumber', 'Trading Number')}:</strong>
                    <br />
                    <span className="text-lg">{t('fleet.tradingNumber', '12345678')}</span>
                  </div>
                  <div>
                    <strong className="text-gray-800">{t('fleet.address', 'Address')}:</strong>
                    <br />
                    <span className="text-lg">{t('fleet.companyAddress', '123 Fleet Street, London, UK')}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-primary mb-4">Need More Information?</h4>
                  <p className="text-gray-600 mb-6">
                    Contact our team to learn more about our fleet capabilities and how we can serve your needs.
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300"
                  >
                    {t('fleet.contactForMoreInfo', 'Contact Us')}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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
