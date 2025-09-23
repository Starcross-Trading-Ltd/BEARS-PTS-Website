import React from 'react'
import { useLanguage } from '../../components/language-provider'
import HeroSection from '../../components/common/hero-section'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function BearsInDubaiNewsPage() {
  const { t } = useLanguage()

  const DubaiImages = [
    '/images/news/Bears_Dubai/DubaiImg.jpg',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      {/* Hero Section */}
      <HeroSection
        title="Bears in Dubai"
        subtitle="Dubai Feasibility Study with Saudi German Hospital"
        image="/images/news/Bears_Dubai/DubaiImg.jpg"
        imageAlt="Bears in Dubai"
        imagePosition="right"
        bgColor="#059669"
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
                Bears in Dubai
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-green-500 mx-auto mb-8"></div>
            </div>

            <div className="mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    We are pleased to announce that a team from BEARS has travelled to Dubai to participate in a feasibility study with Saudi German Hospital, one of the leading healthcare providers across the Middle East and North Africa region.

                    This initiative represents an exciting step forward as BEARS explores opportunities to expand internationally and collaborate with respected institutions in the region.<br></br> <br></br>Our team is engaging directly with departments such as Ambulance Services, Accident and Emergency, and other key areas to gain valuable insights and build meaningful partnerships.

                    We are proud of our colleagues for their dedication and professionalism as they represent BEARS abroad. Their work is helping to shape the future of our services and strengthen our presence beyond the United Kingdom.<br></br> <br></br>

                    <b>BEARS Dubai: Protecting the future one patient at a time</b> — this is the commitment that drives everything we do.
              </p>
            </div>

            {/* Dubai Image Gallery */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                BEARS Team in Dubai
              </h2>
              {/* BEARS in Dubai Newsletter Image */}
                <div className="mb-12">
                <img 
                    src="/images/news/Bears_Dubai/DubaiImg.jpg" 
                    alt="BEARS Team in Dubai"
                    className="w-full max-w-2xl h-auto object-cover rounded-xl shadow-lg border-4 border-white mx-auto"
                />
                </div>
            </div>

            {/* Additional Content */}
            <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-2xl p-8 mb-8">
              <p className="text-gray-700 leading-relaxed">
                    <b>From left to right:</b> Janusz Fikus - Paramedic; Samia Field - ECA; Khadija Esabri - Chief Strategy Officer; Jey-R Dalangin - ACA; 
                    Michael Okae - Contracts & Patient Experience Lead; Osman Shafiq - Head of Business Intelligence; 
              </p>
            </div>

            
          </article>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-[#006e4a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            BEARS Dubai - Protecting the future one patient at a time
          </h2>
          
        </div>
      </section>
    </div>
  )
} 