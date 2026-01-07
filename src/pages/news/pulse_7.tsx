import React from 'react'
import { useLanguage } from '../../components/language-provider'
import HeroSection from '../../components/common/hero-section'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Pulse7NewsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Hero Section */}
      <HeroSection
        title="The Pulse Clinical Newsletter #7"
        subtitle="January 2026 - Engine Idling Awareness"
        image="/images/news/pulse_7/ambulance.png"
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
                The Pulse Clinical Newsletter #7
              </h1>
              <div className="text-xl text-gray-600 mb-4">January 2026</div>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-gray-500 mx-auto mb-8"></div>
            </div>

            {/* Newsletter Image */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Engine Idling - Engines Off, Standards On!
              </h2>
           
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Every shift we run, every journey we make, and every minute we spend on site leaves a foot-print – not just on our vehicles, but on the environments we work in and the stakeholders we work alongside. One of the simplest choices we make each day is whether to leave an engine running when it doesn’t need to be. <br /><br />
                Engine idling might feel like a small, practical decision, especially on long or cold shifts, but it carries wider consequences. It affects air quality around hospitals and the environment, contributes to unnecessary emissions, and is increasingly visible to boroughs and contract partners who actively monitor idling activity.<br /><br />
                In this edition, we’re focussing on engine idling – why it matters, where expectations sit, and how small changes in habit can protect our reputation, our contracts, and the communities we serve. We’ll share practical guidance, explain the risk of getting it wrong, and highlight how switching off when it’s safe to do so helps keep us stay compliant, professional, and respected as a service.              </p>
              
            </div>

            <div className="mb-12">
              
              <h3 className="text-2xl font-bold text-green-800 mb-4">Why it Matters</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Engine idling isn’t just about fuel use. Keeping engines running unnecessarily increases emissions, contributes to poor air quality around the environment, and can attract penalties in boroughs that actively enforce anti-idling rules. It also impacts our contract performance, as idling data is visible and monitored by our hospital stakeholders.<br /><br />
                Switching off when safe to do so protects the environment, supports our professional reputation, and helps ensure we remain compliant with local regulations and contractual obligations.
              </p>
              
              <h3 className="text-2xl font-bold text-green-800 mb-4">BEARS Essentials Learning (PCR Crossword)</h3>
              <img 
                src="/images/news/pulse_7/crossword.png" 
                alt="Pulse Clinical Newsletter #7"
                className="w-300 max-w-2xl h-auto object-cover rounded-xl shadow-lg border-4 border-white mx-auto"
              />

             <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
                 <div>
                  <strong className="underline font-semibold">Across</strong>
                  <ol className="list-decimal pl-6 space-y-2 mt-2 text-gray-900">
                    <li value={2}>Young people most affected by fumes.</li>
                    <li value={5}>Road transport with an engine.</li>
                    <li value={7}>Fine for breaking local rules.</li>
                    <li value={8}>Unhealthy air from vehicles.</li>
                    <li value={10}>More likely to be harmed.</li>
                    <li value={11}>Parked and not moving.</li>
                    <li value={12}>Place caring for sick patients.</li>
                    <li value={15}>Borough in Central London.</li>
                    <li value={17}>Gases released by engines.</li>
                    <li value={18}>Long term weather patterns.</li>
                  </ol>
                </div>

                <div>
                  <strong className="underline font-semibold">Down</strong>
                  <ol className="list-decimal pl-6 space-y-2 mt-2 text-gray-900">
                    <li value={1}>Substances burned to run engines.</li>
                    <li value={3}>Something that makes air unclean.</li>
                    <li value={4}>Pipe releasing engine fumes.</li>
                    <li value={6}>Harmful substances in the air.</li>
                    <li value={9}>Engine running while parked.</li>
                    <li value={13}>What we breathe in the air.</li>
                    <li value={14}>Natural cleaners of the air.</li>
                    <li value={16}>Part that powers the vehicle.</li>
                  </ol>
                </div>
            </div>
        </div>

           
            <div className="mb-12 bg-blue-50 p- rounded-xl">
                
                <h3 className="text-2xl font-bold text-green-800 mb-4"><u>SAFETY CORNER</u></h3>
              
                <img
                  src="/images/news/pulse_7/safety.png"
                  alt="Photo 1 description"
                  className="w-30 h-auto object-cover rounded-lg shadow-md border border-white"
                />
                <br /><br />
                <img
                  src="/images/news/pulse_7/pcn.png"
                  alt="Photo 2 description"
                  className="w-50 h-auto object-cover rounded-lg shadow-md border border-white"
                />
             
                <br></br>

                
              <h3 className="text-2xl font-bold text-green-800 mb-4">Best Practice Tips </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                <ul className="list-disc pl-5 space-y-2 text-gray-900">
                    <li>Switch off the engine if stationary for more than 30 seconds, unless clinically or operationally necessary.</li>
                    <li>CProfessionalism includes what the public can’t see, not just what they can.</li>
                    <li>Avoid idling during vehicle checks unless required for testing.</li>
                    <li>Treat idling reduction as part of eco-driving best practice.</li>
                    
                </ul>              
              </p>
             
            </div>
          </article>
        </div>
      </section>
    </div>
  )
} 
