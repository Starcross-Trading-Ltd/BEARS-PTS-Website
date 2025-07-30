import React from 'react'
import { useLanguage } from '../../components/language-provider'
import HeroSection from '../../components/common/hero-section'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function WhitchurchStemNewsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <HeroSection
        title="STEM Week at Whitchurch Primary School"
        subtitle="BEARS inspires future medical professionals through interactive learning"
        image="/images/news/Whitchurch primary STEM week/Whithcurch-Primary-Demo-2.jpg"
        imageAlt="BEARS STEM Week at Whitchurch Primary"
        imagePosition="right"
        bgColor="#3b82f6"
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
                STEM Week at Whitchurch Primary School
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
            </div>

            {/* Introduction */}
            <div className="mb-12 bg-blue-50 p-8 rounded-xl">
              <p className="text-gray-700 leading-relaxed text-lg">
                As part of Year 3 STEM week, we had the opportunity to attend Whitchurch Primary School and contribute to the children's exploration of medical professions. We took an ambulance to the school and conducted three interactive sessions, each accommodating around 18 children.
              </p>
            </div>

            {/* Session Details */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Session Details
              </h2>

              {/* CPR Introduction Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  ❤️ CPR Introduction
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We provided a basic introduction to CPR, explaining its importance and demonstrating the correct technique.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      The children had the opportunity to practice CPR on training mannequins, allowing them to learn through hands-on experience.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-red-100 to-pink-100 p-6 rounded-xl">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Life-Saving Skills</h4>
                      <p className="text-gray-600 text-sm">Children learned the importance of CPR and practiced on training mannequins</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Basic First Aid Section */}
              <div className="mb-12 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  🩹 Basic First Aid
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      In this workshop, we taught the children fundamental first aid skills, focusing on how to properly apply bandages.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      The children practiced bandaging each other, enhancing their understanding of basic first aid procedures.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-green-100 to-blue-100 p-6 rounded-xl">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Practical Skills</h4>
                      <p className="text-gray-600 text-sm">Children learned bandaging techniques and practiced on each other</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ambulance Show and Tell Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  🚑 Ambulance Show and Tell
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We gave the children a guided tour of the ambulance, explaining its various features and equipment.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Following the walkthrough, the children were encouraged to ask questions and explore the ambulance, giving them a closer look at the tools and technology used by medical professionals.
                    </p>
                  </div>
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src="/images/news/Whitchurch primary STEM week/Whithcurch-Primary-Demo-2.jpg" 
                      alt="BEARS STEM demonstration at Whitchurch Primary"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Educational Impact Section */}
            <div className="mb-12 bg-gradient-to-r from-primary/10 to-purple-500/10 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                Educational Impact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">STEM Education</h3>
                  <p className="text-gray-600 text-sm">Interactive learning about medical science and technology</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Career Inspiration</h3>
                  <p className="text-gray-600 text-sm">Inspiring future medical professionals</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Hands-On Learning</h3>
                  <p className="text-gray-600 text-sm">Practical experience with medical equipment</p>
                </div>
              </div>
            </div>

            {/* STEM Week Benefits */}
            <div className="mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Why STEM Week Matters
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Early Career Exposure</h3>
                  <p className="text-blue-100">
                    Introducing children to medical professions at a young age helps them understand the importance of healthcare and potentially inspires future career choices in the medical field.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Practical Skills Development</h3>
                  <p className="text-blue-100">
                    Hands-on activities like CPR practice and bandaging help children develop practical skills while learning about emergency response and first aid.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Technology Understanding</h3>
                  <p className="text-blue-100">
                    Exploring ambulance equipment introduces children to medical technology and helps them understand how science and engineering apply to healthcare.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Community Engagement</h3>
                  <p className="text-blue-100">
                    These sessions strengthen the connection between emergency services and local communities, building trust and understanding from an early age.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Inspiring Future Generations
              </h2>
              <p className="text-lg mb-6">
                We're committed to supporting STEM education and inspiring the next generation of medical professionals. These interactive sessions help children understand the importance of healthcare while developing practical skills.
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