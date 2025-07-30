import React from 'react'
import { useLanguage } from '../../components/language-provider'
import HeroSection from '../../components/common/hero-section'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function ChristmasNewsPage() {
  const { t } = useLanguage()

  const christmasImages = [
    '/images/news/xmas/xmas BEARS.png',
    '/images/news/xmas/xmas BEARS_1.png',
    '/images/news/xmas/xmas BEARS_2.png',
    '/images/news/xmas/xmas BEARS_3.png',
    '/images/news/xmas/xmas BEARS_4.png',
    '/images/news/xmas/xmas BEARS_5.png',
    '/images/news/xmas/xmas BEARS_6.png',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      {/* Hero Section */}
      <HeroSection
        title="Christmas @ BEARS Ambulance"
        subtitle="Celebrating the festive season with our dedicated team"
        image="/images/news/xmas/xmas BEARS.png"
        imageAlt="BEARS Christmas Celebration"
        imagePosition="right"
        bgColor="#dc2626"
        imageStyle={{ objectPosition: 'center 10%' }}
      />

      {/* Main Content */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-green-500/5"></div>
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
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Christmas @ BEARS Ambulance
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-green-500 mx-auto mb-8"></div>
            </div>

            <div className="mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                'Tis the season of giving, and our BEARS Ambulance family came together to celebrate the holidays in true emergency services style. Our dedicated team took a brief pause from saving lives to spread some Christmas cheer, creating memories that remind us all why we're more than just colleagues – we're a family serving our community 24/7, even during the festive season.
              </p>
            </div>

            {/* Christmas Gallery */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Our Christmas Celebrations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {christmasImages.slice(1).map((image, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src={image} 
                      alt={`BEARS Christmas Celebration ${index + 1}`}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Content */}
            <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                A Time for Reflection and Gratitude
              </h3>
              <p className="text-gray-700 leading-relaxed">
                As we celebrate this festive season, we're reminded of the incredible dedication and compassion our team shows every day. Whether it's Christmas Day, New Year's Eve, or any other day of the year, our BEARS family is committed to providing the highest level of care to our community. The holiday season brings with it a special opportunity to reflect on the impact we make and the lives we touch through our service.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center space-x-4 bg-primary text-white px-8 py-4 rounded-full shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span className="font-semibold">24/7 Service, Even During the Holidays</span>
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-[#006e4a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Thank You for Your Support
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            From all of us at BEARS Ambulance, we wish you a safe and happy holiday season. 
            Remember, we're here for you 24/7, ready to serve our community with care and compassion.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-primary font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
} 