import React, { useState, useEffect } from 'react'
import { useLanguage } from '../components/language-provider'
import HeroSection from '../components/common/hero-section'

// Autumn Ball images
const autumnBallImages = [
  '/images/autumn_ball/BEARSAutumnBall-4826.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4827.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4828.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4829.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4830.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4831.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4832.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4833.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4834.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4835.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4836.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4837.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4838.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4839.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4840.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4841.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4842.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4843.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4844.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4845.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4846.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4847.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4848.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4849.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4850.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4851.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4852.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4853.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4854.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4855.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4856.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4857.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4858.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4859.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4860.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4861.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4862.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4863.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4870.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4871.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4872.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4873.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4878.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4882.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4883.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4884.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4920.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4921.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4922.jpg',
  '/images/autumn_ball/BEARSAutumnBall-4923.jpg',
]

export default function AutumnBallPage() {
  const { t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === autumnBallImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === autumnBallImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? autumnBallImages.length - 1 : prevIndex - 1
    )
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <HeroSection
        title="BEARS Autumn Ball"
        subtitle="Celebrating our team and community with elegance and style"
        image="/images/autumn_ball/BEARSAutumnBall-4835.jpg"
        imageAlt="BEARS Autumn Ball"
        imagePosition="right"
        bgColor="#d97706"
      />

      {/* Introduction Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5"></div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-amber-600 mb-6 animate-fade-in-up">
            A Night to Remember
          </h2>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in-up delay-100 leading-relaxed">
            Join us in celebrating the BEARS Autumn Ball, where our dedicated team comes together 
            to celebrate our achievements, strengthen bonds, and create lasting memories. 
            Experience the elegance and camaraderie that makes BEARS truly special.
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in-up delay-200">
            <div className="w-4 h-4 bg-amber-500 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse delay-100"></div>
            <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </section>

      {/* Main Carousel Section */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-amber-600 mb-4">Gallery Highlights</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Relive the magical moments from our Autumn Ball celebration
            </p>
          </div>

          {/* Main Image Display */}
          <div className="relative mb-8">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                             <img
                 src={autumnBallImages[currentImageIndex]}
                 alt={`Autumn Ball ${currentImageIndex + 1}`}
                 className="w-full h-96 md:h-[600px] object-contain transition-all duration-1000 ease-in-out"
                 style={{
                   transform: isLoaded ? 'scale(1)' : 'scale(1.1)',
                   filter: isLoaded ? 'brightness(1)' : 'brightness(0.8)',
                   backgroundColor: '#f8f9fa'
                 }}
               />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {currentImageIndex + 1} / {autumnBallImages.length}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Play/Pause Button */}
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
              >
                {isAutoPlaying ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-2 md:gap-3">
            {autumnBallImages.slice(0, 24).map((image, index) => (
              <div
                key={index}
                className={`relative cursor-pointer transform transition-all duration-300 hover:scale-110 ${
                  currentImageIndex === index ? 'ring-4 ring-amber-500' : ''
                }`}
                onClick={() => goToImage(index)}
              >
                                 <img
                   src={image}
                   alt={`Thumbnail ${index + 1}`}
                   className="w-full h-16 md:h-20 object-contain rounded-lg shadow-md bg-gray-100"
                 />
                {currentImageIndex === index && (
                  <div className="absolute inset-0 bg-amber-500/20 rounded-lg"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5"></div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-l-4 border-amber-500 animate-fade-in-up delay-100">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-amber-600 mb-4">Annual Celebration</h3>
                <p className="text-gray-600">A special evening to honor our team's dedication and achievements.</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border-l-4 border-orange-500 animate-fade-in-up delay-200">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-orange-600 mb-4">Team Building</h3>
                <p className="text-gray-600">Strengthening bonds and fostering camaraderie among our team.</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border-l-4 border-red-500 animate-fade-in-up delay-300">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-red-600 mb-4">Memories</h3>
                <p className="text-gray-600">Creating lasting memories and celebrating our shared success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in-up">
            Join Our Next Celebration
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-100">
            Be part of our amazing team and join us for future celebrations and events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <a 
              href="/careers"
              className="px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              View Careers
            </a>
            <a 
              href="/contact"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-amber-600 transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 