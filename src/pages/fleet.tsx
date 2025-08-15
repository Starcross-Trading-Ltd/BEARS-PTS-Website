import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../components/language-provider'
import HeroSection from '../components/common/hero-section'

// Fleet images from the directory (excluding the hero image 2025_BEARS_052.jpg)
const fleetImages = [
  '/images/fleet/2025_BEARS_056.jpg',
  '/images/fleet/2025_BEARS_062.jpg',
  '/images/fleet/2025_BEARS_064.jpg',
  '/images/fleet/2025_BEARS_632.jpg',
  '/images/fleet/original-E15BD410-82F4-44C9-AF70-12D3E4D165D8.jpeg',
  '/images/fleet/original-C6A150DF-069F-4555-AF01-757EFF59C771.jpeg',
  '/images/fleet/original-A5B66F32-0F38-47E1-9A01-6076FECF761A.jpeg',
  '/images/fleet/original-69023335-26B2-468B-99B2-F089F37B16ED.jpeg',
  '/images/fleet/original-4E046D93-CE51-4B51-BBB7-81F7C3FFC7A8.jpeg',
  '/images/fleet/original-2F256508-506C-432F-BAA5-AD89DC6D0050.jpeg',
]

export default function FleetPage() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-cycling effect
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % fleetImages.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % fleetImages.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + fleetImages.length) % fleetImages.length)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

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
            {/* Main Fleet Image with Controls */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={fleetImages[selectedImage]}
                  alt={`BEARS Fleet Vehicle ${selectedImage + 1}`}
                  className="w-full h-96 md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Navigation Controls */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Auto-play Toggle */}
                <button
                  onClick={toggleAutoPlay}
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-300"
                >
                  {isAutoPlaying ? (
                    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </button>

                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-sm font-semibold text-gray-800">Vehicle {selectedImage + 1} of {fleetImages.length}</div>
                  <div className="text-xs text-gray-600">State-of-the-art patient transport</div>
                </div>
              </div>

              {/* Image Counter Dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {fleetImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      selectedImage === index ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
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
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
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

      {/* Contact Us Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5"></div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-l-4 border-primary text-center">
            <h3 className="text-3xl font-bold text-primary mb-6">Get in Touch</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to experience our exceptional fleet and services? Contact our team to learn more about our capabilities and how we can serve your needs.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300 text-lg"
            >
              Contact Us
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
