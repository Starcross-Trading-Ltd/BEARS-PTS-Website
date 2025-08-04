import React, { useState, useEffect } from 'react'
import { useLanguage } from '../components/language-provider'
import HeroSection from '../components/common/hero-section'

// Curated selection of Cubs images for better performance
const cubsImages = [
  { key: "fabrizoCeraldi", image: '/images/cubs/2025_BEARS_002.jpg' },
  { key: "mSheriff", image: '/images/cubs/2025_BEARS_008.jpg' },
  { key: "lyWilson", image: '/images/cubs/2025_BEARS_020.jpg' },
  { key: "iCiupag", image: '/images/cubs/2025_BEARS_042.jpg' },
  { key: "gKing", image: '/images/cubs/2025_BEARS_159.jpg' },
  { key: "tPatel", image: '/images/cubs/2025_BEARS_165.jpg' },
  { key: "nHuntely", image: '/images/cubs/2025_BEARS_183.jpg' },
  { key: "lPasca", image: '/images/cubs/2025_BEARS_189.jpg' },
  { key: "mTrifan", image: '/images/cubs/2025_BEARS_195.jpg' },
  { key: "vIsac", image: '/images/cubs/2025_BEARS_210.jpg' },
  { key: "gIndo", image: '/images/cubs/2025_BEARS_222.jpg' },
  { key: "tSuch", image: '/images/cubs/2025_BEARS_274.jpg' },
  { key: "lMarshall", image: '/images/cubs/2025_BEARS_256.jpg' },
  { key: "dKwarteng", image: '/images/cubs/2025_BEARS_280.jpg' },
  { key: "dSpence", image: '/images/cubs/2025_BEARS_301.jpg' },
  { key: "bHollis", image: '/images/cubs/2025_BEARS_304.jpg' },
  { key: "sParis", image: '/images/cubs/2025_BEARS_328.jpg' },
  { key: "lFalvey", image: '/images/cubs/2025_BEARS_265.jpg' },
  { key: "aManzor", image: '/images/cubs/2025_BEARS_661.jpg' },
  { key: "jFikus", image: '/images/cubs/2025_BEARS_460.jpg' },
  { key: "sWilliamson", image: '/images/cubs/2025_BEARS_514.jpg' },
  { key: "mAndrew", image: '/images/cubs/2025_BEARS_520.jpg' },
  { key: "eOranu", image: '/images/cubs/2025_BEARS_562.jpg' },
  { key: "cNewing", image: '/images/cubs/2025_BEARS_589.jpg' },
  { key: "iOkeke", image: '/images/cubs/2025_BEARS_601.jpg' },
  
]

// All remaining cubs images for the gallery
const allCubsImages = [
  '/images/cubs/2025_BEARS_036.jpg',
  '/images/cubs/2025_BEARS_048.jpg',
  '/images/cubs/2025_BEARS_177.jpg',
  '/images/cubs/2025_BEARS_189.jpg',
  '/images/cubs/2025_BEARS_216.jpg',
  '/images/cubs/2025_BEARS_228.jpg',
  '/images/cubs/2025_BEARS_234.jpg',
  '/images/cubs/2025_BEARS_242.jpg',
  '/images/cubs/2025_BEARS_265.jpg',
  '/images/cubs/2025_BEARS_267.jpg',
  '/images/cubs/2025_BEARS_274.jpg',
  '/images/cubs/2025_BEARS_292.jpg',
  '/images/cubs/2025_BEARS_304.jpg',
  '/images/cubs/2025_BEARS_313.jpg',
  '/images/cubs/2025_BEARS_325.jpg',
  '/images/cubs/2025_BEARS_334.jpg',
  '/images/cubs/2025_BEARS_343.jpg',
  '/images/cubs/2025_BEARS_358.jpg',
  '/images/cubs/2025_BEARS_364.jpg',
  '/images/cubs/2025_BEARS_465.jpg',
  '/images/cubs/2025_BEARS_472.jpg',
  '/images/cubs/2025_BEARS_478.jpg',
  '/images/cubs/2025_BEARS_484.jpg',
  '/images/cubs/2025_BEARS_487.jpg',
  '/images/cubs/2025_BEARS_532.jpg',
  '/images/cubs/2025_BEARS_538.jpg',
  '/images/cubs/2025_BEARS_544.jpg',
  '/images/cubs/2025_BEARS_550.jpg',
  '/images/cubs/2025_BEARS_556.jpg',
  '/images/cubs/2025_BEARS_562.jpg',
  '/images/cubs/2025_BEARS_565.jpg',
  '/images/cubs/2025_BEARS_571.jpg',
  '/images/cubs/2025_BEARS_577.jpg',
  '/images/cubs/2025_BEARS_583.jpg',
  '/images/cubs/2025_BEARS_589.jpg',
  '/images/cubs/2025_BEARS_598.jpg',
  '/images/cubs/2025_BEARS_601.jpg',
  '/images/cubs/2025_BEARS_643.jpg',
  '/images/cubs/2025_BEARS_649.jpg',
  '/images/cubs/2025_BEARS_654.jpg',
  '/images/cubs/2025_BEARS_661.jpg',
]

export default function CubsPage() {
  const { t } = useLanguage()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showGallery, setShowGallery] = useState(false)

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
            {cubsImages.map((member, index) => (
              <div
                key={member.key}
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
                      src={member.image}
                      alt={t(`cubs.${member.key}.name`, `Cubs Team Member ${index + 1}`)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  {/* Particle effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-2 left-2 w-2 h-2 bg-primary rounded-full animate-ping"></div>
                    <div className="absolute top-4 right-4 w-1 h-1 bg-blue-500 rounded-full animate-ping delay-100"></div>
                    <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping delay-200"></div>
                  </div>
                  {/* Name and Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 via-transparent to-transparent text-white">
                    <div className="flex flex-col items-start justify-end w-full">
                      <h3 className="text-[#3cb043] font-medium text-base mb-1">{t(`cubMembers.${member.key}.name`)}</h3>
                      <p className="text-[#00bfff] font-medium text-sm">{t(`cubMembers.${member.key}.title`)}</p>
                    </div>
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
            <button
              onClick={() => setShowGallery(true)}
              className="group px-8 py-4 bg-amber-500 text-white font-semibold rounded-xl shadow-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">Meet the Rest of the Cubs</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            <a
              href="/autumn-ball"
              className="group px-8 py-4 bg-blue-500 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">Autumn Ball Gallery</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
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

      {/* Cubs Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-7xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold">Meet the Rest of the Cubs</h3>
              <button
                onClick={() => setShowGallery(false)}
                className="text-white hover:text-gray-200 transition-colors duration-200"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Gallery Grid */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {allCubsImages.map((image, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={image}
                        alt={`BEARS Cubs Team Member ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
