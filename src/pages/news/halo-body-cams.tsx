import React from 'react'
import { useLanguage } from '../../components/language-provider'
import HeroSection from '../../components/common/hero-section'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function HaloBodyCamsNewsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <HeroSection
        title="BEARS tests HALO body cams"
        subtitle="Enhancing safety and care through body camera technology"
        image="/images/news/halo_cam/halo_cam.jpg"
        imageAlt="BEARS HALO body camera trial"
        imagePosition="right"
        bgColor="#059669"
      />

      {/* Main Content */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5"></div>
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
                BEARS tests HALO body cams
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-8"></div>
            </div>

            {/* Introduction */}
            <div className="mb-12 bg-green-50 p-8 rounded-xl">
              <p className="text-gray-700 leading-relaxed text-lg">
                As part of our "Care" values, to safeguard patients and our ambulance crews, BEARS management team are looking to invest in body cameras. The body camera will provide additional safety measures, which can be used to manage incidents and also act as a deterrent to some challenging circumstances faced by our crews, who on occasion have been exposed to aggression from public individuals in the course of their duty.
              </p>
            </div>

            {/* Safety Benefits */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Safety and Comfort Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    This will provide a great deal of assurance, "safety and comfort" to patients whom we transport. The presence of body cameras serves as both a protective measure and a deterrent against potential incidents.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">Key Benefits</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Enhanced crew safety</li>
                      <li>• Incident management support</li>
                      <li>• Deterrent against aggression</li>
                      <li>• Patient reassurance</li>
                      <li>• Evidence collection</li>
                    </ul>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src="/images/news/halo_cam/halo_cam_2.jpg" 
                    alt="HALO body camera equipment"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Trial Program */}
            <div className="mb-12 bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                Current Trial Program
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our Secure crew are currently part-taking on trials wearing these body cameras; once completed, the feedback from crew will help support the need to invest.
                  </p>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="text-amber-700 font-semibold">
                      The trial program will provide valuable insights into the practical implementation and effectiveness of body cameras in our operational environment.
                    </p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src="/images/news/halo_cam/halo_cam.jpg" 
                    alt="BEARS crew testing HALO body cameras"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Implementation Timeline */}
            <div className="mb-12 bg-gradient-to-r from-primary/10 to-blue-500/10 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                Implementation Timeline
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">2021 Onwards</h3>
                  <p className="text-gray-600 text-sm">BEARS follows implementation of body cameras in Emergency services</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Current Trial</h3>
                  <p className="text-gray-600 text-sm">Secure crew testing HALO body cameras</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Future Investment</h3>
                  <p className="text-gray-600 text-sm">Based on crew feedback and trial results</p>
                </div>
              </div>
            </div>

            {/* Technology Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                HALO Body Camera Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-100 to-green-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Easy Activation</h3>
                    <p className="text-gray-700 text-sm">Crews can press a button to start recording</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Incident Management</h3>
                    <p className="text-gray-700 text-sm">Provides evidence for incident management</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-green-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Deterrent Effect</h3>
                    <p className="text-gray-700 text-sm">Acts as deterrent to challenging circumstances</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Safety Enhancement</h3>
                    <p className="text-gray-700 text-sm">Additional safety measures for crews</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Operational Benefits</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Enhanced crew protection during challenging situations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Improved incident documentation and evidence collection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Increased patient confidence and reassurance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Better management of aggressive situations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Support for crew training and development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Care Values Integration */}
            <div className="mb-12 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Aligned with BEARS Care Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Patient Safety</h3>
                  <p className="text-green-100">
                    Body cameras provide additional reassurance to patients, ensuring they feel safe and comfortable during transport. The presence of recording equipment demonstrates our commitment to transparency and accountability.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Crew Protection</h3>
                  <p className="text-green-100">
                    Our crews face challenging situations in the course of their duty. Body cameras serve as both a protective measure and deterrent, helping to manage incidents and reduce the risk of aggression.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Professional Standards</h3>
                  <p className="text-green-100">
                    The implementation of body cameras demonstrates our commitment to maintaining the highest professional standards in patient care and crew safety, following industry best practices.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Continuous Improvement</h3>
                  <p className="text-green-100">
                    Through the trial program and crew feedback, we're continuously improving our safety measures and operational procedures to provide the best possible care to our patients and support to our crews.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Advancing Safety Technology
              </h2>
              <p className="text-lg mb-6">
                We're committed to investing in the latest safety technology to protect both our patients and our crews. The HALO body camera trial represents our ongoing commitment to safety, care, and professional excellence in ambulance services.
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