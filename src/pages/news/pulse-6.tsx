import React from 'react'
import { useLanguage } from '../../components/language-provider'
import HeroSection from '../../components/common/hero-section'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Pulse6NewsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Hero Section */}
      <HeroSection
        title="The Pulse Clinical Newsletter #6"
        subtitle="Decem-BEAR Edition 2025 - Consumables"
        image="/images/news/pulse_6/santa.png"
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
                The Pulse Clinical Newsletter #6
              </h1>
              <div className="text-xl text-gray-600 mb-4">December 2025</div>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-gray-500 mx-auto mb-8"></div>
            </div>

            {/* Newsletter Image */}
            <div className="mb-12">
                   {/* 5 Birds in a row */}
              <div className="flex justify-center gap-4 mb-8">
                <img src="/images/news/pulse_6/bird.png" alt="bird" className="w-12 h-12" />
                <img src="/images/news/pulse_6/bird.png" alt="bird" className="w-12 h-12" />
                <img src="/images/news/pulse_6/bird.png" alt="bird" className="w-12 h-12" />
                <img src="/images/news/pulse_6/bird.png" alt="bird" className="w-12 h-12" />
                <img src="/images/news/pulse_6/bird.png" alt="bird" className="w-12 h-12" />
                <img src="/images/news/pulse_6/bird.png" alt="bird" className="w-12 h-12" />
                <img src="/images/news/pulse_6/bird.png" alt="bird" className="w-12 h-12" />
                <img src="/images/news/pulse_6/bird.png" alt="bird" className="w-12 h-12" />
                <img src="/images/news/pulse_6/bird.png" alt="bird" className="w-12 h-12" />
                <img src="/images/news/pulse_6/bird.png" alt="bird" className="w-12 h-12" />
                <img src="/images/news/pulse_6/bird.png" alt="bird" className="w-12 h-12" />
                <img src="/images/news/pulse_6/bird.png" alt="bird" className="w-12 h-12" />
                <img src="/images/news/pulse_6/bird.png" alt="bird" className="w-12 h-12" />
                <img src="/images/news/pulse_6/bird.png" alt="bird" className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Consumables - Stocking up for Safer Care
              </h2>
           
              {/* <img 
                src="/images/news/pulse_6/ribbon.png" 
                alt="Pulse Clinical Newsletter #4"
                className="w-full max-w-4xl h-auto object-cover rounded-xl shadow-lg border-4 border-white mx-auto"
              /> */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                This edition highlights why consumables matter, how they support patient safety & the importance of using and storing them correctly. We will show how staying consumable-aware boosts safety, efficiency and compliance.
              </p>
              
            </div>

            <div className="mb-12">
              
              <h3 className="text-2xl font-bold text-green-800 mb-4">Why it Matters</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Consumables keep patients and crews safe. Using items correctly, in date and with intact packaging prevents avoidable harm and delays. Damaged or reused stock removes that safety barrier.
                With more patients presenting with bed bugs, staying topped up on PPE protects everyone.
                Strong stock awareness avoids shortages, reduces waste and strengthens clinical safety.
              </p>

            <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl">🎵</span>
                <h3 className="text-2xl font-bold text-[#ff0000]">The BEAR Necessities</h3>
                <span className="text-2xl" style={{ color: '#ff0000' }}>🎵</span>
            </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Look for the BEAR necessities,
                Those ambulance accessories,
                Ensure you’re fully stocked so there’s no stress! <br></br><br></br>

                I mean the BEAR necessities
                Like gloves and gauze and bandage sprees,
                That bring the simple saving things to success.<br></br><br></br>

                When bed bugs try to hitch a ride,
                Your PPE keeps you fortified,
                So, stock up masks and gloves to stay secure.<br></br><br></br>

                A tidy kit, a sealed-up sack,
                Means pests won’t ever travel back,
                Good practice keeps our patients safe for sure!<br></br><br></br>

                When you’ve got BEAR necessities, Your patient care runs smooth with ease, From masks to wipes to blankets keeping warm.
                Just check your kit before you go, So nothing’s missing on the road, Prepared for every shift and every storm!
              </p>

              
              <h3 className="text-2xl font-bold text-green-800 mb-4">BEARS Essentials Learning (PCR Crossword)</h3>
              <img 
                src="/images/news/pulse_6/crossword.png" 
                alt="Pulse Clinical Newsletter #4"
                className="w-300 max-w-2xl h-auto object-cover rounded-xl shadow-lg border-4 border-white mx-auto"
              />

             <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
                <p>
                    <strong>Across</strong><br></br>
                    2. Next medical examination glove size up from small 3. Sticky dressing used to cover small cuts 4. Printout from a heart-monitoring test 7. Patients travel by wheelchair or ON a …
                    9. Disposable vomit _______ (common patient receptable)
                    11. Provide warmth and comfort and prevent hypothermia 12. Light, woven material used for wound dressings
                </p>
                 <p>
                    <strong>Down</strong><br></br>
                    1. Breathable paper tape for securing dressings 5. Universal cleaning wipes brand
                    6. Used to deliver fluids or drain the bladder 8. Colourless liquid used in Diesel vehicles that reduces harmful emissions 10. 50/50 mix of nitrous oxide and oxygen
                </p>
               
              </div>
            </div>

           
            <div className="mb-12 bg-blue-50 p- rounded-xl">
                <div
                  role="note"
                  aria-label="Safety corner note"
                  className="mt-6 max-w-2xl mx-auto border-4 border-solid border-green p-6 rounded-none bg-[#276221]"
                >
                  <h3 className="text-2xl font-bold text-red-600 mb-4 text-center">CONSUMABLES AMNESTY</h3>

                  <p className="text-[#ffffff] font-semibold mb-4">
                   December is here and before we wrap up the year, we’re running a BEARS-style ‘Consumables Amnesty’! <br></br><br></br>
                    All month long, crews are encouraged to check their vehicles for any expired consumables and drop them into the Amnesty Box located in the Kidbrooke kitchen.<br></br><br></br>
                    To make it fun, there’s a cash prize for whoever finds the oldest expired item. If you think you’ve got a contender, email a photo (showing the expiry date) to <span className="text-yellow-500 underline"> gregory.etukudo@bears-pts.co.uk </span> before placing it in the box so we can verify it.<br></br><br></br>
                    This isn’t about catching anyone out it’s about patient safety, tidy vehicles, and starting the new year fully in date.<br></br><br></br>
                    Take a few minutes this December to have a look…you might even win!
                  </p>
                </div>
                <br></br>

                <h3 className="text-2xl font-bold text-green-800 mb-4"><u>SAFETY CORNER</u></h3>
              <img 
                src="/images/news/pulse_6/safety.png" 
                alt="Pulse Clinical Newsletter #6"
                className="w-300 max-w-2xl h-auto object-cover rounded-xl shadow-lg border-4 border-white mx-auto"
              />
                <br></br>

                
              <h3 className="text-2xl font-bold text-green-800 mb-4">Best Practice Tips </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                <ul className="list-disc pl-5 space-y-2 text-gray-900">
                    <li>Always replace any consumables you’ve used and log it on FleetCheck, so stock levels stay accurate.</li>
                    <li>Check expiry dates regularly – not just once a month.</li>
                    <li>Report shortages before they become a problem.</li>
                    <li>Keep consumables clean, dry, and organised.</li>
                    <li>Follow the “first in, first out” rule.</li>
                </ul>              
              </p>
             
            </div>
          </article>
        </div>
      </section>
    </div>
  )
} 
