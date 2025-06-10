
import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../components/language-provider'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section with Our Values */}
      <section className="relative bg-[#0a2240] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">Our Values</h1>
              <p className="text-gray-300">
                BEARS values underpin everything we do, guiding our decisions and 
                ensuring we provide exceptional care and service to all our patients 
                and healthcare partners throughout their journey with us.
              </p>
            </div>
            <div>
              <img 
                src="/images/values-logo.png" 
                alt="BEARS Values Logo"
                className="w-64 h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Safety */}
            <div className="border-l-4 border-red-500 pl-6">
              <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Safety</h2>
              <p className="text-gray-700 mb-4">
                We always put safety first in everything we do, designed and built 
                service levels with robust oversight at all key registered locations.
              </p>
              <p className="text-gray-700 mb-4">
                Our vehicles maintain robust and healthy levels of monitoring including 
                systems, our safety systems are designed to be 100% safe, and the emergency 
                services. Backed by stringent planning information and built for 
                safety. In the eyes of our parents who believe in the safety of 
                their children.
              </p>
              <p className="text-gray-700">
                Our safety drivers adopt comprehensive approach to administering safety in 
                monitoring and auditing covering that experience and through education. 
                and planning are a top priority including skills training delivered and 
                further monitoring.
              </p>
            </div>

            {/* Comfort */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Comfort</h2>
              <p className="text-gray-700 mb-4">
                Consistent comfort and guidance through understanding and state of the 
                art equipment drivers efficient clinical treatment and improvement 
                opportunities to support local healthcare.
              </p>
              <p className="text-gray-700">
                Enabling patients at family can take to make properly individualized plans with 
                us by following appropriate emergency or direct support ensuring our service 
                offering is right for them and supports their health.
              </p>
            </div>

            {/* Care */}
            <div className="border-l-4 border-purple-500 pl-6">
              <h2 className="text-2xl font-bold text-[#0a2240] mb-4">Care</h2>
              <p className="text-gray-700 mb-4">
                BEARS Improvement project which enables us to understand what each 
                person will understand in considering improvement and making work programmes 
                to a higher standards where there is opportunity to improvement for 
                long-term and improvement to include all communities and continue to achieve 
                the greatest.
              </p>
              <p className="text-gray-700 mb-4">
                Our patients have taken and professionals guidance whilst providing timely 
                and prompt access to these additional supports for clinical quality for the 
                appropriate clinical.
              </p>
              <p className="text-gray-700">
                We believe that our leadership strategy that could live precondition that we promote 
                the clinical tool advice over medical care through direct and guidance medical 
                improvement. We support quality management and continuous quality 
                improvement or patient service care and quality in a clinical role.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BEARS in Numbers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0a2240] mb-8">BEARS in Numbers</h2>
          
          <div className="relative max-w-4xl mx-auto">
            <img 
              src="/images/world-map-dots.png" 
              alt="World map showing BEARS reach"
              className="w-full h-auto opacity-20"
            />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-[#0a2240] mb-2">5,058,454</div>
                <div className="text-gray-600">MILES TRAVELLED</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <div className="text-2xl font-bold text-[#0a2240]">22,770</div>
                <div className="text-sm text-gray-600">ADULT PATIENTS</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <div className="text-2xl font-bold text-[#0a2240]">258,875</div>
                <div className="text-sm text-gray-600">NEPTS MILES</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <div className="text-2xl font-bold text-[#0a2240]">33,591</div>
                <div className="text-sm text-gray-600">CRITICAL CARE</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <div className="text-2xl font-bold text-[#0a2240]">464,159</div>
                <div className="text-sm text-gray-600">PAEDIATRIC MILES</div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <div className="text-4xl font-bold text-[#0a2240]">203</div>
              <div className="text-gray-600">times around the world</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
