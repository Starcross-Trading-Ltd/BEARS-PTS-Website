import React from 'react'
import { useLanguage } from '../../components/language-provider'
import HeroSection from '../../components/common/hero-section'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function AmericanSchoolFairNewsPage() {
  const { t } = useLanguage()

  const americanSchoolImages = [
    '/images/news/american school fair/American-School-Ambulance-1.jpg',
    '/images/news/american school fair/American-School-Ambulance-2-768x576.jpg',
    '/images/news/american school fair/American-School-Ambulance-3-768x576.jpg',
    '/images/news/american school fair/American-School-Ambulance-4.jpg',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      {/* Hero Section */}
      <HeroSection
        title="American School Fair"
        subtitle="BEARS provides medical cover and educational opportunities at ACS summer fair"
        image="/images/news/american school fair/American-School-Ambulance-1.jpg"
        imageAlt="BEARS at American Community School Fair"
        imagePosition="right"
        bgColor="#dc2626"
      />

      {/* Main Content */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-blue-500/5"></div>
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
                American School Fair
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mb-8"></div>
            </div>

            {/* Introduction */}
            <div className="mb-12 bg-red-50 p-8 rounded-xl">
              <p className="text-gray-700 leading-relaxed text-lg">
                The event was to provide Paramedic/First Aid cover for the American Community School (ACS) summer fair.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                The BEARS team on site were on hand to provide medical assistance in the event there are any injuries or incidents during the day along with a front-line Ambulance to ensure a swift response for any members of public/students that require urgent hospital attention.
              </p>
            </div>

            {/* Event Highlights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Event Highlights
              </h2>

              {/* Medical Cover Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  🚑 Medical Cover
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We were on-site with a fully stocked ambulance to ensure any first aid needs were promptly addressed throughout the event.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Our presence provided a sense of security for attendees, knowing that medical assistance was readily available if needed.
                    </p>
                  </div>
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src="/images/news/american school fair/American-School-Ambulance-2-768x576.jpg" 
                      alt="BEARS ambulance at American School Fair"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Ambulance Walkthrough Section */}
              <div className="mb-12 bg-gradient-to-r from-blue-50 to-red-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  🚑 Ambulance Walkthrough and Q&A
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Children had the opportunity to walk through the ambulance, gaining insight into the equipment and setup used by emergency medical services.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      We encouraged the children to ask questions, fostering an interactive learning environment where they could satisfy their curiosity about medical procedures and the role of paramedics.
                    </p>
                  </div>
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src="/images/news/american school fair/American-School-Ambulance-3-768x576.jpg" 
                      alt="Children exploring ambulance at American School Fair"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Service Overview */}
            <div className="mb-12 bg-gradient-to-r from-primary/10 to-red-500/10 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                Our Service Commitment
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Medical Cover</h3>
                  <p className="text-gray-600 text-sm">Fully stocked ambulance with emergency response capability</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Educational Q&A</h3>
                  <p className="text-gray-600 text-sm">Interactive learning about emergency medical services</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Community Safety</h3>
                  <p className="text-gray-600 text-sm">Providing security and peace of mind for event attendees</p>
                </div>
              </div>
            </div>

            {/* Event Gallery */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                Event Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src="/images/news/american school fair/American-School-Ambulance-4.jpg" 
                    alt="BEARS team at American School Fair"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src="/images/news/american school fair/American-School-Ambulance-1.jpg" 
                    alt="BEARS ambulance setup at American School Fair"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Event Benefits */}
            <div className="mb-12 bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Event Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Safety Assurance</h3>
                  <p className="text-red-100">
                    Our presence provided immediate medical response capability, ensuring the safety of all attendees throughout the event. Parents and organizers had peace of mind knowing professional medical assistance was readily available.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Educational Opportunity</h3>
                  <p className="text-red-100">
                    Children had the unique opportunity to learn about emergency medical services through hands-on exploration of our ambulance and interactive Q&A sessions, fostering curiosity and understanding about healthcare careers.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Community Engagement</h3>
                  <p className="text-red-100">
                    Our participation strengthened the connection between emergency services and the school community, building trust and understanding while providing valuable educational content for the summer fair.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Professional Service</h3>
                  <p className="text-red-100">
                    We demonstrated our commitment to community service by providing professional medical cover for the event, showcasing our expertise and dedication to public safety and education.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Supporting Community Events
              </h2>
              <p className="text-lg mb-6">
                We're proud to support community events like the American School Fair, providing both medical cover and educational opportunities. Our presence ensures safety while offering valuable learning experiences for children and families.
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