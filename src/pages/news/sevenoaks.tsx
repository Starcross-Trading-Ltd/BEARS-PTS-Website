import React from 'react'
import { useLanguage } from '../../components/language-provider'
import HeroSection from '../../components/common/hero-section'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function SevenoaksNewsPage() {
  const { t } = useLanguage()

  const SevenoaksImages = [
    '/images/news/sevenoaks/img1.JPG',
    '/images/news/sevenoaks/img2.JPG',
    '/images/news/sevenoaks/img3.JPG',
    '/images/news/sevenoaks/img4.JPG',
    '/images/news/sevenoaks/img5.JPG',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      {/* Hero Section */}
      <HeroSection
        title="Charity Event at Sevenoaks"
        subtitle="July 2026 - Volunteering at a charity event in Sevenoaks"
        image="/images/news/sevenoaks/img5.JPG"
        imageAlt="Charity Event at Sevenoaks"
        imagePosition="right"
        bgColor="#f97509ff"
        imageStyle={{ objectPosition: 'center 10%' }}
      />

      {/* Main Content */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-red-500/5"></div>
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
                Charity Event at Sevenoaks
              </h1>
              <div className="text-xl text-gray-600 mb-4">July 2026</div>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-green-500 mx-auto mb-8"></div>
            </div>

            <div className="mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    BEARS joined a charity event in Sevenoaks, volunteering to help raise funds and awareness for Leni, a young girl diagnosed with Sanfilippo syndrome — a rare, progressive form of childhood dementia. <br /><br />
 
                    It was a wonderful opportunity for the community to connect with our team, explore the ambulance, and have fun, visitors could take photos, get up close, and even try out the sirens! We were happy to be there to show our support and help make a difference for Leni and her family. <br /><br />


                    A huge thank you to the team for making this possible!
                    <br /><br />
              </p>
            </div>

            {/* Sevenoaks Image Gallery */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Highlights from Sevenoaks Charity Event
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SevenoaksImages.slice(0).map((image, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src={image} 
                      alt={`charity-event-${index + 1}`}
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
