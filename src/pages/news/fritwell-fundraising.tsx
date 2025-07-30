import React from 'react'
import { useLanguage } from '../../components/language-provider'
import HeroSection from '../../components/common/hero-section'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function FritwellFundraisingNewsPage() {
  const { t } = useLanguage()

  const fritwellImages = [
    '/images/news/Friends of Fritwell Fundraise/Fritwell-primary-charity-BEARS.jpg',
    '/images/news/Friends of Fritwell Fundraise/Fritwell-Primary-Ambulance-set-up-2.jpg',
    '/images/news/Friends of Fritwell Fundraise/Fritwell-Primary-CPR-demo-1.jpg',
    '/images/news/Friends of Fritwell Fundraise/Fritwell-Primary-CPR-demo-2.jpg',
    '/images/news/Friends of Fritwell Fundraise/Fritwqell-Primary-CPR-demo-with-police.jpg',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <HeroSection
        title="Fundraising Event for Friends of Fritwell Primary Charity"
        subtitle="BEARS supports local community at Fritwell Church of England Primary School"
        image="/images/news/Friends of Fritwell Fundraise/Fritwell-primary-charity-BEARS.jpg"
        imageAlt="BEARS at Fritwell Primary Charity Event"
        imagePosition="right"
        bgColor="#059669"
      />

      {/* Main Content */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5"></div>
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
                Fundraising Event for Friends of Fritwell Primary Charity
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8"></div>
            </div>

            {/* Introduction */}
            <div className="mb-12 bg-green-50 p-8 rounded-xl">
              <p className="text-gray-700 leading-relaxed text-lg">
                We were delighted to attend a fundraising event organized by the Friends of Fritwell Primary Charity at Fritwell Church of England Primary School. For this event, we brought a fully stocked ambulance to ensure we could cater to any first aid requirements throughout the evening.
              </p>
            </div>

            {/* Event Highlights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Event Highlights
              </h2>

              {/* Ambulance Walkthrough Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  🚑 Ambulance Walkthrough and Interactive Experience
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Throughout the evening, children had the opportunity to walk through the ambulance, sit in the cab, and experience turning the lights and sirens on and off.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      This interactive experience allowed the children to gain an understanding of the ambulance's functionalities and the role of emergency medical services.
                    </p>
                  </div>
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src="/images/news/Friends of Fritwell Fundraise/Fritwell-Primary-Ambulance-set-up-2.jpg" 
                      alt="Ambulance setup at Fritwell Primary"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Name the BEARS Bear Section */}
              <div className="mb-12 bg-amber-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  🧸 Name the BEARS Bear Fundraiser
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To help raise funds for the charity, we ran a "Name the BEARS Bear" contest. Participants were invited to suggest names for a teddy bear, with the proceeds going to the charity.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This activity was a fun and engaging way to involve the community and support the charity's fundraising efforts.
                </p>
              </div>

              {/* CPR and Equipment Demonstration */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  ❤️ CPR and Equipment Demonstration
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We offered demonstrations of CPR and other medical equipment, providing attendees with practical insights into emergency medical procedures.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  The children and other attendees had the chance to practice CPR and explore the use of various medical tools, enhancing their knowledge and skills in a hands-on manner.
                </p>

                {/* CPR Demo Images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src="/images/news/Friends of Fritwell Fundraise/Fritwell-Primary-CPR-demo-1.jpg" 
                      alt="CPR demonstration at Fritwell Primary"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src="/images/news/Friends of Fritwell Fundraise/Fritwell-Primary-CPR-demo-2.jpg" 
                      alt="CPR demonstration at Fritwell Primary"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src="/images/news/Friends of Fritwell Fundraise/Fritwqell-Primary-CPR-demo-with-police.jpg" 
                      alt="CPR demonstration with police at Fritwell Primary"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Community Impact Section */}
            <div className="mb-12 bg-gradient-to-r from-primary/10 to-blue-500/10 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                Community Impact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Education</h3>
                  <p className="text-gray-600 text-sm">Children learned about emergency services and first aid</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Fundraising</h3>
                  <p className="text-gray-600 text-sm">Successful charity event supporting local school</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Community</h3>
                  <p className="text-gray-600 text-sm">Strengthened bonds with local community</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Supporting Our Community
              </h2>
              <p className="text-lg mb-6">
                We're proud to support local charities and educational initiatives. Events like these help us build stronger connections with our community while providing valuable learning experiences.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
} 