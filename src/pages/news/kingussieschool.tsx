import React, { useState, useEffect } from 'react'
import { useLanguage } from '../../components/language-provider'
import HeroSection from '../../components/common/hero-section'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const KingussieImages = [
    '/images/news/kingussie/1000005345.jpg',
    '/images/news/kingussie/1000005346.jpg',
    '/images/news/kingussie/1000005347.jpg',
    '/images/news/kingussie/1000005355.jpg',
    '/images/news/kingussie/1000005357.jpg',
    '/images/news/kingussie/1000005362.jpg',
    '/images/news/kingussie/1000005365.jpg',
    '/images/news/kingussie/1000005368.jpg',
    '/images/news/kingussie/1000005374.jpg',
    '/images/news/kingussie/1000005377.jpg',
    '/images/news/kingussie/1000005380.jpg',
    '/images/news/kingussie/1000005383.jpg',
    '/images/news/kingussie/1000005389.jpg',
    '/images/news/kingussie/1000005392.jpg',
    '/images/news/kingussie/1000005398.jpg',
    '/images/news/kingussie/1000005401.jpg',
    '/images/news/kingussie/1000005404.jpg',
    '/images/news/kingussie/1000005407.jpg',
    '/images/news/kingussie/1000005413.jpg',
    '/images/news/kingussie/1000005440.jpg',
    '/images/news/kingussie/1000005452.jpg',
    '/images/news/kingussie/1000005455.jpg',
    '/images/news/kingussie/1000005458.jpg',
    '/images/news/kingussie/1000005461.jpg',
    '/images/news/kingussie/1000005464.jpg',
    '/images/news/kingussie/1000005467.jpg',
    '/images/news/kingussie/1000005470.jpg',
    '/images/news/kingussie/1000005473.jpg',
    '/images/news/kingussie/1000005476.jpg',
    '/images/news/kingussie/1000005479.jpg',
    '/images/news/kingussie/1000005482.jpg',
    '/images/news/kingussie/1000005485.jpg',
    '/images/news/kingussie/1000005488.jpg',
    '/images/news/kingussie/1000005491.jpg',
    '/images/news/kingussie/1000005494.jpg',
    '/images/news/kingussie/1000005497.jpg',
    '/images/news/kingussie/1000005500.jpg',
    '/images/news/kingussie/1000005503.jpg',
    '/images/news/kingussie/1000005506.jpg',
    '/images/news/kingussie/1000005509.jpg',
    '/images/news/kingussie/1000005512.jpg',
    '/images/news/kingussie/1000005515.jpg',
    '/images/news/kingussie/1000005518.jpg',
    '/images/news/kingussie/1000005521.jpg',
    '/images/news/kingussie/1000005524.jpg',
    '/images/news/kingussie/1000005527.jpg',
    '/images/news/kingussie/1000005530.jpg',
    '/images/news/kingussie/1000005533.jpg',
    '/images/news/kingussie/1000005536.jpg',
  ]

export default function KingussieNewsPage() {
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
          prevIndex === KingussieImages.length - 1 ? 0 : prevIndex + 1
        )
      }, 3000) // Change image every 3 seconds
  
      return () => clearInterval(interval)
    }, [isAutoPlaying])
  
    const goToNext = () => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === KingussieImages.length - 1 ? 0 : prevIndex + 1
      )
    }
  
    const goToPrevious = () => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? KingussieImages.length - 1 : prevIndex - 1
      )
    }
  
    const goToImage = (index: number) => {
      setCurrentImageIndex(index)
    }

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      {/* Hero Section */}
      <HeroSection
        title="BEARS Inspires Future Heroes at Kingussie High School"
        subtitle="November 2025 - Kingussie High School Uniform and Emergency Services Event"
        image="/images/news/kingussie/1000005401.jpg"
        imageAlt="BEARS Inspires Future Heroes at Kingussie High School"
        imagePosition="right"
        bgColor="#045f30ff"
        imageStyle={{ objectPosition: 'center 10%' }}
      />

      {/* Main Content */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5"></div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          {/* Back to News Link */}
          <div className="mb-8">
            <Link 
              to="/news"
              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to News
            </Link>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-4xl font-bold text-primary mb-6">
                BEARS Inspires Future Heroes at Kingussie High School Uniform and Emergency Services Event
              </h1>
                <div className="text-xl text-gray-600 mb-4">November 2025</div>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-green-500 mx-auto mb-8"></div>
            </div>

            <div className="mb-12">
              <p className="text-xl text-black-700 leading-relaxed mb-8">
                   
                 BEARS proudly participated in the Uniform and Emergency Services Event hosted by Kingussie High School, joining forces with the Army, Navy, Police, and RAF to inspire the next generation of service personnel.
                Our team arrived early to settle in and explore the school grounds. We were warmly welcomed by Chris, Head of Sports, who introduced us to the Head Teacher, Suman Sharma, and event organisers including our host, Deddie Khadi. 
                The students, full of excitement, expressed a strong interest in learning about BEARS and our work. <br></br> <br></br>

                
                The event kicked off ahead of schedule, with students arriving in enthusiastic groups to explore both our ambulance and indoor display. Janusz, one of our experienced paramedics, led engaging demonstrations outside, walking students through the ambulance setup and the 
                essential equipment we use in our services. Inside the hall, students gathered around our stand where BEARS materials were presented via laptop. They eagerly participated in interactive puzzles and asked thoughtful questions about our operations, showing genuine curiosity 
                about our dual focus on medical and prestige services. The role play scenarios were a particular highlight, sparking lively discussions and deeper interest in how BEARS operates. Many students expressed a desire to get involved and asked whether attending the event could open future opportunities with BEARS.<br></br> <br></br>
                
                We were proud to share BEARS branded merchandise with attendees, including light-up pens, teddy bears, and lapel pins. These thoughtful giveaways were warmly received by students and fellow service personnel, adding a memorable touch to the day. The Head Teacher expressed heartfelt appreciation for our presence and requested to include our photos in the school’s gallery, a gesture that truly honoured our contribution.<br></br><br></br>
                Representing BEARS at Kingussie High School was a privilege. We left with a deep sense of pride, knowing we had inspired future leaders and strengthened our presence among uniformed services. We look forward to more opportunities to share our mission, connect with communities, and continue flying the BEARS flag.

            </p>
                <div className="flex justify-center space-x-4 animate-fade-in-up delay-200">
                    <div className="w-4 h-4 bg-lime-500 rounded-full animate-pulse"></div>
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse delay-100"></div>
                    <div className="w-4 h-4 bg-teal-500 rounded-full animate-pulse delay-200"></div>
                </div>
            </div>

            {/* Kingussie Image Gallery */}
            {/* Main Carousel Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-#2a52be-500/5 to-#003399-500/5"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-green-600 mb-4">Event Highlights</h3>
            <p className="text-black-600 max-w-4xl mx-auto">
               Pictures from Kingussie High School Uniform and Emergency Services Event
            </p>
          </div>

          {/* Main Image Display */}
          <div className="relative mb-8">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                             <img
                 src={KingussieImages[currentImageIndex]}
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
                {currentImageIndex + 1} / {KingussieImages.length}
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
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-2 md:gap-3">
            {KingussieImages.slice(0, 54).map((image, index) => (
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
                            
          </article>
        </div>
      </section>
    </div>
  )

} 


