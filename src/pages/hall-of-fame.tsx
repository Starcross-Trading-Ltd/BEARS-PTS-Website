import React, { useState } from 'react'
import { Award } from 'lucide-react'
import HeroSection from '../components/common/hero-section'

interface HallOfFameEntry {
  id: string
  names: string[]
  month: string
  year: number
  text: string
}

// Add a new entry to this array each time someone is recognised
const hallOfFameEntries: HallOfFameEntry[] = [
  {
    id: 'nicola-mutara-jul-2026',
    names: ['Nicola Stamp', 'Mutara Sheriff'],
    month: 'July',
    year: 2026,
    text: `We have received exceptional feedback from the Cleveland Clinic 
Rehabilitation Unit recognising the outstanding care and 
professionalism you both demonstrated during the transfer of several 
highly complex patients. You were commended for your clinical 
expertise, calm and reassuring approach, excellent teamwork, and 
your ability to build confidence and rapport with both patients and 
clinical staff. The Cleveland Clinic described you as their preferred 
transport team and praised the exceptional standard of care you 
consistently provide.`,
  },
  {
    id: 'alex-price-nov-2025',
    names: ['Alex Price'],
    month: 'November',
    year: 2025,
    text: `At BEARS Ambulance Service, we are incredibly proud of our teams and the compassion, professionalism, and dedication they show every single day. Every so often, we receive feedback that truly reminds us why this work matters and recently, one of our colleagues has exemplified this in the most inspiring way.

We proudly recognise Alex Price for the extraordinary support he offered to a family navigating a difficult time. His empathy and commitment stood out, and the feedback has been truly exceptional.

His actions reflect the very best of BEARS: quiet strength, professionalism, and genuine care. If the past few weeks have proven anything, it's that not all superheroes wear capes…but some definitely wear green!

To Alex – thank you. You have made us proud, and more importantly, you have made a difference.`,
  },
]

export default function HallOfFamePage() {
  const [selectedEntry, setSelectedEntry] = useState<HallOfFameEntry | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-white">
      <HeroSection
        title="Staff Hall of Fame"
        subtitle="Celebrating the BEARS team members who go above and beyond."
        image="/images/cubs_one.png"
        imageAlt="BEARS Staff Hall of Fame"
        imagePosition="right"
        bgColor="#388e6c"
      />

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Recognising Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each month we recognise members of staff whose actions reflect the very best of BEARS.
        
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {hallOfFameEntries.map((entry) => (
              <button
                key={entry.id}
                onClick={() => setSelectedEntry(entry)}
                className="group text-left relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-6 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  {entry.names.map((name) => (
                    <h3 key={name} className="text-lg font-semibold text-[#388e6c] leading-snug">
                      {name}
                    </h3>
                  ))}
                </div>
                <p className="text-sm font-semibold mt-2 text-center text-[#00bfff]">
                  {entry.month} {entry.year}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detail dialog */}
      {selectedEntry && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedEntry(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-primary to-[#006e4a] text-white p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                {selectedEntry.names.map((name) => (
                  <h3 key={name} className="text-2xl font-bold text-[#ffffff] leading-tight">
                    {name}
                  </h3>
                ))}
                <p className="text-[#00ffff] text-sm font-medium mt-1">
                  {selectedEntry.month} {selectedEntry.year}
                </p>
              </div>
              <button
                onClick={() => setSelectedEntry(null)}
                className="ml-auto text-white hover:text-gray-200 transition-colors"
                aria-label="Close"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {selectedEntry.text}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
