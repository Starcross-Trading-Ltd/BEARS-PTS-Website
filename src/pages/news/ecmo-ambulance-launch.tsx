import React from 'react'
import { useLanguage } from '../../components/language-provider'
import HeroSection from '../../components/common/hero-section'
import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export default function EcmoAmbulanceLaunchNewsPage() {
  const { t } = useLanguage()

  const ecmoImages = [
    '/images/news/new ecmo vehicles/ECMO-1.jpg',
    '/images/news/new ecmo vehicles/ECMO-2.jpg',
    '/images/news/new ecmo vehicles/ECMO-5.jpg',
    '/images/news/new ecmo vehicles/ECMO-7.jpg',
    '/images/news/new ecmo vehicles/ECMO-8.jpg',
    '/images/news/new ecmo vehicles/ECMO-10.jpg',
    '/images/news/new ecmo vehicles/ECMO-11.jpg',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <HeroSection
        title="BEARS launch brand new ECMO Ambulance with Barts"
        subtitle="State-of-the-art vehicle enhances care for critically ill patients"
        image="/images/news/new ecmo vehicles/ECMO-1.jpg"
        imageAlt="New ECMO Ambulance at Barts Health"
        imagePosition="right"
        bgColor="#1e40af"
      />

      {/* Main Content */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
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
                BEARS launch brand new ECMO Ambulance with Barts
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
            </div>

            {/* Introduction */}
            <div className="mb-12 bg-blue-50 p-8 rounded-xl">
              <p className="text-gray-700 leading-relaxed text-lg">
                We are excited to announce the launch of a new ECMO ambulance in collaboration with Barts Health, designed to enhance the care and experience of our most critically ill patients.
              </p>
            </div>

            {/* Main Content */}
            <div className="mb-12">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                This state-of-the-art vehicle is specifically equipped to transport patients requiring extracorporeal membrane oxygenation (ECMO), a life-support machine that temporarily takes over the function of the heart or lungs, allowing these vital organs time to heal.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                The new ambulance, part of the Barts Health ECMO service, is set to transport between 50 and 60 patients annually, offering greater space for specialized equipment and improved patient safety features.
              </p>
            </div>

            {/* ECMO Technology Section */}
            <div className="mb-12 bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                ECMO Technology
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    What is ECMO?
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Extracorporeal Membrane Oxygenation (ECMO) is a life support machine that temporarily replaces the function of the heart or lungs. During ECMO, blood is pumped outside of the body through an artificial lung that removes carbon dioxide and sends oxygen-filled blood back into the body.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    ECMO is not a treatment in itself but allows the lungs and heart to be rested to help them heal.
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src="/images/news/new ecmo vehicles/ECMO-2.jpg" 
                    alt="ECMO technology and equipment"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Service Overview */}
            <div className="mb-12 bg-gradient-to-r from-primary/10 to-blue-500/10 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                Barts Health ECMO Service
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">National Centre</h3>
                  <p className="text-gray-600 text-sm">One of seven national centres supporting severe acute lung failure</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Patient Care</h3>
                  <p className="text-gray-600 text-sm">50-60 patients transported annually with enhanced safety</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Specialized Equipment</h3>
                  <p className="text-gray-600 text-sm">Greater space for specialized equipment and improved safety</p>
                </div>
              </div>
            </div>

            {/* Vehicle Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                New Ambulance Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src="/images/news/new ecmo vehicles/ECMO-5.jpg" 
                    alt="ECMO ambulance interior"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Enhanced Space</h3>
                    <p className="text-gray-700 text-sm">Bigger than a normal ambulance with more room for trolley and specialist equipment</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Training Area</h3>
                    <p className="text-gray-700 text-sm">More space to train staff and accommodate medical teams</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Large Tail Lift</h3>
                    <p className="text-gray-700 text-sm">Easy movement of patients in and out of the ambulance</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Communication System</h3>
                    <p className="text-gray-700 text-sm">Dedicated communication system for emergency situations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                ECMO Ambulance Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src="/images/news/new ecmo vehicles/ECMO-7.jpg" 
                    alt="ECMO ambulance exterior"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src="/images/news/new ecmo vehicles/ECMO-8.jpg" 
                    alt="ECMO ambulance equipment"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src="/images/news/new ecmo vehicles/ECMO-10.jpg" 
                    alt="ECMO ambulance interior setup"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Barts Health Partnership */}
            <div className="mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Partnership with Barts Health
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">National Service</h3>
                  <p className="text-blue-100">
                    The Barts Health ECMO service is one of seven national centres that support patients with severe acute lung failure and also provides ECMO in cases of severe acute heart failure.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Patient Safety</h3>
                  <p className="text-blue-100">
                    The switch to the new vehicle was all about patient safety, providing enhanced space for specialized equipment and improved safety features for the most critically ill patients.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Regional Coverage</h3>
                  <p className="text-blue-100">
                    The team serves patients from across north east London and is based on ward 6A at St Bartholomew's Hospital, providing essential life-saving support to the community.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Professional Service</h3>
                  <p className="text-blue-100">
                    BEARS Ambulance Service supplies this specialized vehicle as part of our contract with Barts Health, demonstrating our commitment to providing the highest quality medical transport.
                  </p>
                </div>
              </div>
            </div>

            {/* External Link to Barts Health */}
            <div className="mb-12 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl border-2 border-green-200">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Read the Full Article
                </h2>
                <p className="text-gray-700 mb-6">
                  For more detailed information about the ECMO ambulance and the Barts Health service, visit the official Barts Health website.
                </p>
                <a 
                  href="https://www.bartshealth.nhs.uk/news-from-st-bartholomews/ecmo-ambulance-to-boost-safety-16567/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Read Full Article on Barts Health Website
                </a>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Advancing Critical Care Transport
              </h2>
              <p className="text-lg mb-6">
                We're proud to partner with Barts Health in launching this state-of-the-art ECMO ambulance, enhancing the care and experience of our most critically ill patients. This collaboration demonstrates our commitment to providing the highest quality medical transport services.
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