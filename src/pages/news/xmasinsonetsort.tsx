import React from 'react'
import { useLanguage } from '../../components/language-provider'
import HeroSection from '../../components/common/hero-section'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function XmasSonetSortNewsPage() {
  const { t } = useLanguage()

  const SonetSortImages = [
    '/images/news/xmas_in_sonet_sort/banner.jpg',
    '/images/news/xmas_in_sonet_sort/ox1.jpeg',
    '/images/news/xmas_in_sonet_sort/ox2.jpeg',
    '/images/news/xmas_in_sonet_sort/ox3.jpg',
    '/images/news/xmas_in_sonet_sort/ox4.jpg',
    '/images/news/xmas_in_sonet_sort/ox5.jpg',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      {/* Hero Section */}
      <HeroSection
        title="BEARS Santa Team in Southampton and Oxford (SONeT & SORT)"
        subtitle="December 2025 - Spreading Christmas Cheer in SONeT & SORT"
        image="/images/news/xmas_in_sonet_sort/banner.jpg"
        imageAlt="XMAS in SONeT & SORT"
        imagePosition="right"
        bgColor="#860303ff"
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
                BEARS Santa Team Spreads Christmas Cheer in SONeT & SORT
              </h1>
              <div className="text-xl text-gray-600 mb-4">December 2025</div>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-green-500 mx-auto mb-8"></div>
            </div>

            <div className="mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    The BEARS Santa team continued their festive visits, making their next stops at Southampton and Oxford, where they visited the SONeT and SORT teams.
                    As Christmas is a season of joy, warmth, and celebration, it was important to celebrate the role these teams play in supporting paediatric and neonatal patient care.
                    <br /><br />

                    Our Santa team got the opportunity to share gifts, smiles and festive cheer with the clinical teams and the children staying in hospital during this festive season. 
                    <br /><br />

                    A huge thank you to the team for making this possible!
                    <br /><br />
              </p>
            </div>

            {/* SONet & SORT Image Gallery */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Highlights from SONeT & SORT Santa Visit
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SonetSortImages.slice(0).map((image, index) => (
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
