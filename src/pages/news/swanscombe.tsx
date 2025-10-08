import React from 'react'
import { useLanguage } from '../../components/language-provider'
import HeroSection from '../../components/common/hero-section'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function SwanscombeNewsPage() {
  const { t } = useLanguage()

  const SwanscombeImages = [
    '/images/news/Swancombe Team/squad.jpg',
    '/images/news/Swancombe Team/img1.jpg',
    '/images/news/Swancombe Team/img2.jpg',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      {/* Hero Section */}
      <HeroSection
        title="BEARS Community Support: Swanscombe Tigers FC"
        subtitle="BEARS Community Support with Swanscombe Tigers FC"
        image="/images/news/Swancombe Team/squad.jpg"
        imageAlt="Swanscombe Tigers FC"
        imagePosition="right"
        bgColor="#860303ff"
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
                BEARS Community Support with Swanscombe Tigers FC
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-green-500 mx-auto mb-8"></div>
            </div>

            <div className="mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    At BEARS, community support is at the heart of what we do and we are proud to sponsor Swanscombe Tigers U12 Black, part of one of the area’s most respected community football clubs.

                    Swanscombe Tigers FC provides opportunities for over 300 young players across 30 teams, ranging from U6 to U18, including young girls, adult, and inclusive teams in the Kent, North Kent and Medway Leagues. <br /><br />

                    Our sponsored U12 Black team, competing in the Medway League Division C, has shown fantastic growth this season recently celebrating a 2–1 win, marking their second victory in just three games. 

                    Their progress reflects the hard work, teamwork, and determination that align closely with BEARS’s own values.

                    We are honoured to play a part in helping young players build confidence, discipline, and sportsmanship skills that serve them far beyond the pitch.<br /><br />

                    As Swanscombe Tigers FC approaches its 40th anniversary, we are excited to continue supporting their mission and celebrating their ongoing success. 

                    Congratulations to the U12 Black team, BEARS is behind you all the way!
              </p>
            </div>

            {/* Swanscombe Image Gallery */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Our sponsored U12 Black team competing in the Medway League Division C
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SwanscombeImages.slice(0).map((image, index) => (
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
