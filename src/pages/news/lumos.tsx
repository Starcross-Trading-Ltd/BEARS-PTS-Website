import React from 'react'
import { useLanguage } from '../../components/language-provider'
import HeroSection from '../../components/common/hero-section'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function LumosNewsPage() {
  const { t } = useLanguage()

  const LumosImages = [
    '/images/news/lumos/pic1.png',
    '/images/news/lumos/pic2.png',
    '/images/news/lumos/pic3.jpg',
   
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
        {/* Hero Section */}
        <HeroSection
            title="BEARS Visits Little Lumos Nursery for an Engaging Emergency Awareness Day"
            subtitle="BEARS at Little Lumos Nursery"
            image="/images/news/lumos/pic3.jpg"
            imageAlt="BEARS at Little Lumos Nursery"
            imagePosition="right"
            bgColor="#0fa94aff"
            imageStyle={{ objectPosition: 'center 10%', height: '300px' }} // Adjust height as needed
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
                BEARS Visits Little Lumos Nursery for an Engaging Emergency Awareness Day
              </h1>
              <div className="text-xl text-gray-600 mb-4">February 2026</div>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-green-500 mx-auto mb-8"></div>
            </div>

            <div className="mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                   Little Lumos Nursery School recently welcomed BEARS for an engaging and educational Service Emergency Awareness event. The event was designed to introduce young children to important safety concepts and emergency procedures in a fun and interactive way.
                    Our professional crew, Jakub Fabisiak and Elton Santos, represented BEARS, and the session was warmly hosted by Shital Doshi. <br /><br />
                    
                    The event was a great success. The children were fully involved, taking part in hands‑on activities that helped introduce them to important safety concepts in a fun and age‑appropriate way. 
                    There was plenty of excitement as the children explored, asked questions, and participated in interactive demonstrations designed to build confidence and awareness.<br /><br />
                    
                    We extend our gratitude to Little Lumos Nursery for the invitation and to the enthusiastic children who made the day so memorable. 
                    Experiences like this highlight how valuable early awareness is and how enjoyable learning can be when the community comes together.

              </p>
            </div>

            {/* Lumos Image Gallery */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Pictures from the Little Lumos Nursery Emergency Awareness Day
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {LumosImages.slice(0).map((image, index) => (
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

                  
          </article>
        </div>
      </section>

    </div>
  )
} 
