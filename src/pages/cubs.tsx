import React, { useState, useEffect } from 'react'
import { useLanguage } from '../components/language-provider'
import HeroSection from '../components/common/hero-section'

// Curated selection of Cubs images for better performance
const cubsImages = [
  '/images/cubs/2025_BEARS_002.jpg',
  '/images/cubs/2025_BEARS_008.jpg',
  '/images/cubs/2025_BEARS_020.jpg',
  '/images/cubs/2025_BEARS_030.jpg',
  '/images/cubs/2025_BEARS_042.jpg',
  '/images/cubs/2025_BEARS_159.jpg',
  '/images/cubs/2025_BEARS_165.jpg',
  '/images/cubs/2025_BEARS_171.jpg',
  '/images/cubs/2025_BEARS_183.jpg',
  '/images/cubs/2025_BEARS_195.jpg',
  '/images/cubs/2025_BEARS_210.jpg',
  '/images/cubs/2025_BEARS_222.jpg',
  '/images/cubs/2025_BEARS_240.jpg',
  '/images/cubs/2025_BEARS_256.jpg',
  '/images/cubs/2025_BEARS_280.jpg',
  '/images/cubs/2025_BEARS_301.jpg',
  '/images/cubs/2025_BEARS_328.jpg',
  '/images/cubs/2025_BEARS_349.jpg',
  '/images/cubs/2025_BEARS_460.jpg',
  '/images/cubs/2025_BEARS_496.jpg',
  '/images/cubs/2025_BEARS_502.jpg',
  '/images/cubs/2025_BEARS_508.jpg',
  '/images/cubs/2025_BEARS_514.jpg',
  '/images/cubs/2025_BEARS_520.jpg',
  '/images/cubs/2025_BEARS_526.jpg',
]

export default function CubsPage() {
  const { t } = useLanguage()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-white">
      {/* Hero Section */}
      <HeroSection
        title={t('cubs.cubsTitle', 'BEARS Cubs')}
        subtitle={t('cubs.cubsDescription', 'Supporting our youngest patients and their families with care and compassion.')}
        image="/images/cubs_one.png"
        imageAlt="BEARS Cubs"
        imagePosition="right"
        bgColor="#388e6c"
      />

      {/* Dynamic Introduction */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-bold text-primary mb-6 animate-fade-in-up">
              Meet Our Cubs
            </h2>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-up delay-100 max-w-4xl mx-auto leading-relaxed">
              Our dedicated team of Cubs specialists provide exceptional care for our youngest patients, 
              ensuring every journey is safe, comfortable, and filled with compassion.
            </p>
            <div className="flex justify-center space-x-6 animate-fade-in-up delay-200">
              <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-100"></div>
              <div className="w-4 h-4 bg-amber-500 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Grid Gallery */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
            {cubsImages.map((image, index) => (
              <div
                key={index}
                className={`group relative transform transition-all duration-700 ease-out ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: hoveredIndex === index ? 'scale(1.1) rotateY(10deg) rotateX(5deg)' : 'scale(1) rotateY(0deg) rotateX(0deg)',
                  zIndex: hoveredIndex === index ? 50 : 10
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-[0_20px_50px_rgba(0,133,90,0.3)] transition-all duration-500">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={image}
                      alt={`BEARS Cubs Team Member ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ objectPosition: 'center 20%' }}
                      loading={index < 8 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(0,133,90,0.5)] transition-all duration-500"></div>
                  
                  {/* Floating info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-white text-center">
                      <div className="text-sm font-semibold">Cubs Specialist</div>
                      <div className="text-xs text-blue-200">Dedicated Care</div>
                    </div>
                  </div>
                  
                  {/* Particle effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-2 left-2 w-2 h-2 bg-primary rounded-full animate-ping"></div>
                    <div className="absolute top-4 right-4 w-1 h-1 bg-blue-500 rounded-full animate-ping delay-100"></div>
                    <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping delay-200"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5"></div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-500 transform hover:scale-105">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-700 font-semibold">Care Available</div>
                <div className="text-gray-500 text-sm mt-2">Round the Clock Support</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500/10 to-primary/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 transform hover:scale-105">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-700 font-semibold">Patient Satisfaction</div>
                <div className="text-gray-500 text-sm mt-2">Excellence in Care</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-blue-500/5 to-amber-500/5"></div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-12 border-l-4 border-primary shadow-xl animate-fade-in-up">
              <div className="mb-8">
                <svg className="w-12 h-12 text-primary mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-6 leading-relaxed">
                "Crew were brilliant, came on time. Driver was very good and the journey was comfortable. The staff member that stayed in the back, kept me entertained and chatted with me all the way home, putting me at ease. Excellent service, 10/10!"
              </blockquote>
              <div className="text-lg font-semibold text-primary">
                St Bartholomew's Hospital
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-[#006e4a] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Join Our Cubs Team
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-100">
            Ready to make a difference in children's lives? Join our dedicated Cubs team and help us provide exceptional care for our youngest patients.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-200">
            <a
              href="/careers"
              className="group px-8 py-4 bg-white text-primary font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">View Careers</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            <a
              href="/autumn-ball"
              className="group px-8 py-4 bg-amber-500 text-white font-semibold rounded-xl shadow-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">Autumn Ball Gallery</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            <a
              href="/contact"
              className="group px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
