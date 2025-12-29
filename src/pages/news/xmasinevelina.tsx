import React, { useState, useEffect } from 'react'
import { useLanguage } from '../../components/language-provider'
import HeroSection from '../../components/common/hero-section'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const EvelinaXmasImages = [
    '/images/news/xmas_in_evelina/banner.jpeg',
    '/images/news/xmas_in_evelina/img1.jpeg',
    '/images/news/xmas_in_evelina/img2.jpg',
    '/images/news/xmas_in_evelina/img3.jpg',
    '/images/news/xmas_in_evelina/img4.jpg',
    '/images/news/xmas_in_evelina/img5.jpg',
    '/images/news/xmas_in_evelina/img6.jpg',
    '/images/news/xmas_in_evelina/img7.jpg',
    '/images/news/xmas_in_evelina/img8.jpg',
    '/images/news/xmas_in_evelina/img9.jpg',
    '/images/news/xmas_in_evelina/img10.jpg',
    '/images/news/xmas_in_evelina/img11.jpg',
    '/images/news/xmas_in_evelina/img12.jpg',
    '/images/news/xmas_in_evelina/img13.jpg',
    '/images/news/xmas_in_evelina/img14.jpg',
    '/images/news/xmas_in_evelina/img15.jpg',
    '/images/news/xmas_in_evelina/img16.jpg',
    '/images/news/xmas_in_evelina/img17.jpg',
    '/images/news/xmas_in_evelina/img18.jpg',
    '/images/news/xmas_in_evelina/img19.jpg',
    '/images/news/xmas_in_evelina/img20.jpg',
    '/images/news/xmas_in_evelina/img21.jpeg',
    '/images/news/xmas_in_evelina/img22.jpeg',

  ]

export default function EvelinaXmasNewsPage() {
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
          prevIndex === EvelinaXmasImages.length - 1 ? 0 : prevIndex + 1
        )
      }, 3000) // Change image every 3 seconds
  
      return () => clearInterval(interval)
    }, [isAutoPlaying])
  
    const goToNext = () => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === EvelinaXmasImages.length - 1 ? 0 : prevIndex + 1
      )
    }
  
    const goToPrevious = () => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? EvelinaXmasImages.length - 1 : prevIndex - 1
      )
    }
  
    const goToImage = (index: number) => {
      setCurrentImageIndex(index)
    }

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      {/* Hero Section */}
      <HeroSection
        title="BEARS Santa Spreads Joy at Evelina Children's Hospital"
        subtitle="December 2025 - Evelina Children's Hospital Christmas Visit"
        image="/images/news/xmas_in_evelina/img4.jpg"
        imageAlt="BEARS Santa Spreads Joy at Evelina Children's Hospital"
        imagePosition="right"
        bgColor="#e23235ff"
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
                BEARS Santa Spreads Joy at Evelina Children's Hospital
              </h1>
              <div className="text-xl text-gray-600 mb-4">December 2025</div>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-green-500 mx-auto mb-8"></div>
            </div>

            <div className="mb-12">
              <p className="text-xl text-black-700 leading-relaxed mb-8">
                   
                To celebrate this festive season, the BEARS Santa team visited Evelina Children’s hospital, sharing gifts, smiles and teddies with all the children spending this Christmas period in hospital. 
                It was a heartwarming experience for the team, reminding us of the importance of compassion and patient care.<br></br><br></br>
                To celebrate this festive season, the BEARS Santa team visited Evelina Children’s hospital, sharing gifts, smiles and teddies with all the children spending this Christmas period in hospital. <br></br><br></br>
                A big thank you to the Evelina Team for the incredible work they do every day!


            </p>
                <div className="flex justify-center space-x-4 animate-fade-in-up delay-200">
                    <div className="w-4 h-4 bg-lime-500 rounded-full animate-pulse"></div>
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse delay-100"></div>
                    <div className="w-4 h-4 bg-teal-500 rounded-full animate-pulse delay-200"></div>
                </div>
            </div>

            {/* Evelina Xmas Image Gallery */}
            {/* Main Carousel Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-#2a52be-500/5 to-#003399-500/5"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-green-600 mb-4">Event Highlights</h3>
            <p className="text-black-600 max-w-4xl mx-auto">
               Pictures from the BEARS Santa visit to Evelina Children's Hospital, spreading festive cheer and joy to the young patients during the holiday season.
            </p>
          </div>

          {/* Main Image Display */}
          <div className="relative mb-8">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                             <img
                 src={EvelinaXmasImages[currentImageIndex]}
                 alt={`Evelina Xmas ${currentImageIndex + 1}`}
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
                {currentImageIndex + 1} / {EvelinaXmasImages.length}
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
            {EvelinaXmasImages.slice(0, 54).map((image, index) => (
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
