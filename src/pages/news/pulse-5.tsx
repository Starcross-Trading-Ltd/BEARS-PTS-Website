import React from 'react'
import { useLanguage } from '../../components/language-provider'
import HeroSection from '../../components/common/hero-section'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Pulse5NewsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Hero Section */}
      <HeroSection
        title="The Pulse Clinical Newsletter #5"
        subtitle="Novem-BEAR Edition 2025 - Patient Care Records"
        image="/images/news/pulse_5/pcr.jpg"
        imageAlt="Pulse Clinical Newsletter"
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
                The Pulse Clinical Newsletter #5
              </h1>
              <div className="text-xl text-gray-600 mb-4">November 2025</div>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-gray-500 mx-auto mb-8"></div>
            </div>

            {/* Newsletter Image */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">
                PATIENT CARE RECORDS (PCRs)
              </h2>
               <h3 className="text-2xl font-bold text-green-800 mb-4">Getting the Basics Right</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                This month we are focussing on Patient Care Records. Nothing about the quality, legibility and compliance around PCR completion should ever be compromised!
              </p>
              <img 
                src="/images/news/pulse_5/pcr.jpg" 
                alt="Pulse Clinical Newsletter #4"
                className="w-full max-w-4xl h-auto object-cover rounded-xl shadow-lg border-4 border-white mx-auto"
              />
            </div>

            {/* Transportation of patients with chest drains */}
            <div className="mb-12">
              
              <h3 className="text-2xl font-bold text-green-800 mb-4">Why it Matters</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Good record keeping primarily supports patient safety, handovers, audits, investigations and continuity of care. <br></br><br></br>
                In the NHS England professional guidance on the structure and content of ambulance records, it states that: “Information recorded in a care record is the cornerstone of clinical care, underpinning safety and quality of care.” NHS England <br></br><br></br>
                Just because we are completing paper-based records does not negate the need for accuracy, legibility, completeness and timeliness!              
              </p>

              <h3 className="text-2xl font-bold text-[#ff0000] mb-4">Top 5 Completion Issues</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                <ul className="list-disc list-inside space-y-2">
                  <li>Journey times not being completed</li>
                  <li>Legibility</li>
                  <li>Primary complaint</li>
                  <li>Consent section not always being completed</li>
                  <li>Handover time not provided</li>
                </ul>
              </p>

              <h3 className="text-2xl font-bold text-[#8B4513] mb-4"><u>P</u>AWS...<u>C</u>HECK...<u>R</u>EFINE</h3>
              <div className="flex items-start gap-4 mb-0">
                <img
                  src="/images/news/pulse_5/bearIcon.png"
                  alt="bear"
                  className="w50 h-28 object-cover rounded-lg shadow-md flex-shrink-0"
                />
                 <p className="text-gray-700 mb-6 leading-relaxed">
                    Much like a bear turning over logs to uncover what lies beneath. BEARS has taken a leaf out of nature’s book and has been foraging through past Patient Care Records (PCRs), not to make a mess, but to uncover what’s been missed. Each overturned “log” reveals insights into how we can make our documentation clearer, more complete, and more consistent across the organisation.             
                </p>              
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Just as every paw print leaves a mark, every PCR leaves an impression – of the care we gave, the professionalism we showed, and the story we told on behalf of our patients. To help us see where we shine and where we can sharpen our claws a little, we’ve created a PCR Heatmap (below). <br></br><br></br>
                The visual snapshot highlights our “hot spots” – areas where we’re consistently strong (in green) and areas that need a little more care and attention (shading towards red). This isn’t about fault, it’s about focus. The heatmap helps us all to see what’s working, where we can grow, and how small changes can make a big difference to our shared standard or patient care.              
              </p>

              <h3 className="text-2xl font-bold text-green-800 mb-4">PCR Heatmap</h3>
             <img 
                src="/images/news/pulse_5/PCRHeatMap.png" 
                alt="Pulse Clinical Newsletter #4"
                className="w-200 max-w-2xl h-auto object-cover rounded-xl shadow-lg border-4 border-white mx-auto"
              />
              <br></br><br></br>
              <h3 className="text-2xl font-bold text-green-800 mb-4">BEARS Essentials Learning (PCR Crossword)</h3>
              <img 
                src="/images/news/pulse_5/crossword.png" 
                alt="Pulse Clinical Newsletter #4"
                className="w-300 max-w-2xl h-auto object-cover rounded-xl shadow-lg border-4 border-white mx-auto"
              />

             <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
                <img
                  src="/images/news/pulse_5/across.png"
                  alt="Photo 1 description"
                  className="w-30 h-auto object-cover rounded-lg shadow-md border border-white"
                />
                <img
                  src="/images/news/pulse_5/down.png"
                  alt="Photo 2 description"
                  className="w-30 h-auto object-cover rounded-lg shadow-md border border-white"
                />
              </div>
            </div>

            {/* Safety Corner Section */}
            <div className="mb-12 bg-blue-50 p- rounded-xl">
                <div
                  role="note"
                  aria-label="Safety corner note"
                  className="mt-6 max-w-2xl mx-auto border-4 border-dashed border-black p-6 rounded-none bg-[#ffea00]"
                >
                  <h3 className="text-2xl font-bold text-black-800 mb-4 text-center"><u>SAFETY CORNER</u></h3>

                  <p className="text-red-600 font-semibold mb-4">
                   Incomplete or poorly completed Patient Care Records (PCRs) are not just an admin issue – they’re a patient safety risk. Every missing detail, illegible note, or incomplete time entry can cause:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-900">
                    <li>Breaks in continuity of care.</li>
                    <li>Clinical risk if observations, allergies, or interventions aren’t recorded clearly.</li>
                    <li>Legal and safeguarding exposure if the record doesn’t accurately show what happened.</li>
                    <li>Data quality risks for audits, investigations, or complaints.</li>
                    <li>Risk to staff – because if it isn’t written down, it did not happen!</li>
                  </ul>
                </div>
                <br></br>

                
              <h3 className="text-2xl font-bold text-green-800 mb-4">Best Practice Tips for Completing PCRs</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                <ul className="list-disc pl-5 space-y-2 text-gray-900">
                    <li>Timeliness: Complete fields as soon as possible, while details are fresh.</li>
                    <li>Legibility: Write clearly in block capitals, avoid shorthand unless standardised.</li>
                    <li>Completeness: Every section has a reason – leave no blanks otherwise specify not applicable n/a.</li>
                    <li>Handover clarity: Use full names/descriptors, avoid ambiguous terms, ensure receiver knows key findings.</li>
                    <li>Quality check: Before handing over the record, give it a quick self-check: time signatures, legibility, consistency.</li>
                </ul>              
              </p>
             
            </div>
          </article>
        </div>
      </section>
    </div>
  )
} 
