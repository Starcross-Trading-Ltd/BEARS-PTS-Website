import React from 'react'
import { useLanguage } from '../../components/language-provider'
import HeroSection from '../../components/common/hero-section'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function ForsNewsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Hero Section */}
      <HeroSection
        title="Joining FORS: Elevating Standards in Ambulance Services"
        subtitle="BEARS becomes a member of the Fleet Operators Recognition Scheme"
        image="/images/news/FORS/Fleet-operator-recongnition-scheme.png"
        imageAlt="FORS Fleet Operator Recognition Scheme"
        imagePosition="right"
        bgColor="#1e40af"
      />

      {/* Main Content */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-gray-500/5"></div>
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
                Joining FORS: Elevating Standards in Ambulance Services
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-gray-500 mx-auto mb-8"></div>
            </div>

            {/* FORS Image */}
            <div className="mb-12">
              <img 
                src="/images/news/FORS/Fleet-operator-recongnition-scheme.png" 
                alt="FORS Fleet Operator Recognition Scheme"
                className="w-full max-w-2xl h-auto object-cover rounded-xl shadow-lg border-4 border-white mx-auto"
              />
            </div>

            {/* Article Content */}
            <div className="space-y-8">
              <div className="bg-blue-50 p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Commitment to Excellence
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  As part of our ongoing commitment to excellence and safety, we are proud to announce that Bears, an esteemed ambulance service provider, has recently become a member of the Fleet Operators Recognition Scheme (FORS). This prestigious accreditation is a testament to our dedication to enhancing operational efficiency, promoting safety measures, and adhering to rigorous industry standards.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  What is FORS?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  FORS is a voluntary scheme that sets benchmarks for fleet operations, focusing on areas such as vehicle safety, environmental performance, and driver welfare. By joining FORS, Bears is not only demonstrating its proactive approach to fleet management but also ensuring that our services align with the highest industry standards.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Benefits of FORS Membership
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Membership in FORS signifies our commitment to continuous improvement. It empowers us to optimise our fleet operations, reduce environmental impact through sustainable practices, and uphold the utmost safety standards for both our personnel and the communities we serve. Moreover, FORS membership provides us with access to valuable resources, training opportunities, and best practices that further enhance our operational efficiency and service delivery.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Our Commitment to Excellence
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  At Bears, our participation in FORS is more than a badge of honour—it underscores our pledge to deliver exceptional ambulance services that prioritise safety, efficiency, and reliability. As we embark on this journey with FORS, we look forward to setting new benchmarks in ambulance service excellence and continuing to provide unparalleled care to our patients and communities.
                </p>
              </div>
            </div>

            {/* Key Benefits Section */}
            <div className="mt-12 bg-white border-2 border-primary/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                Key Benefits of FORS Membership
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Enhanced Safety</h3>
                  <p className="text-gray-600 text-sm">Rigorous safety standards and best practices for fleet operations</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Environmental Impact</h3>
                  <p className="text-gray-600 text-sm">Sustainable practices and reduced environmental footprint</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Operational Excellence</h3>
                  <p className="text-gray-600 text-sm">Optimized fleet operations and improved service delivery</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 bg-gradient-to-r from-primary to-[#006e4a] text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Setting New Standards
              </h2>
              <p className="text-lg mb-6">
                As we continue our journey with FORS, we remain committed to providing the highest quality ambulance services to our communities.
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