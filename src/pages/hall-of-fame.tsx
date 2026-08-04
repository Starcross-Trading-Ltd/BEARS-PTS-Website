import React, { useState } from 'react'
import { Megaphone, Star } from 'lucide-react'
import HeroSection from '../components/common/hero-section'

type RecognitionType = 'shoutout' | 'employee-of-the-month'

interface HallOfFameEntry {
  id: string
  type: RecognitionType
  names: string[]
  month: string
  year: number
  text: string
  image?: string // used for Employee of the Month entries
}

// Add a new entry to this array each time someone is recognised
const hallOfFameEntries: HallOfFameEntry[] = [
  {
    id: 'nicola-stamp-jul-2026',
    type: 'shoutout',
    names: ['Nicola Stamp'],
    month: 'July',
    year: 2026,
    text: `We have received exceptional feedback from the Cleveland Clinic Rehabilitation Unit recognising Nicola Stamp, alongside colleague Mutara Sheriff.

You were commended for your clinical expertise, calm and reassuring approach, excellent teamwork, and your ability to build confidence and rapport with both patients and clinical staff during the transfer of several highly complex patients. The Cleveland Clinic described you as their preferred transport team and praised the exceptional standard of care you consistently provide.`,
  },
  {
    id: 'mutara-sheriff-jul-2026',
    type: 'shoutout',
    names: ['Mutara Sheriff'],
    month: 'July',
    year: 2026,
    text: `We have received exceptional feedback from the Cleveland Clinic Rehabilitation Unit recognising Mutara Sheriff, alongside colleague Nicola Stamp.

You were commended for your clinical expertise, calm and reassuring approach, excellent teamwork, and your ability to build confidence and rapport with both patients and clinical staff during the transfer of several highly complex patients. The Cleveland Clinic described you as their preferred transport team and praised the exceptional standard of care you consistently provide.`,
  },
   {
    id: 'RyanM-eotm-jul-2026',
    type: 'employee-of-the-month',
    names: ['Ryan Murray'],
    month: 'July',
    year: 2026,
    image: '/images/staff/Ryan Murray.jpg',
    text: `Congratulations to Ryan Murray, our Employee of the Month for July 2026.

Ryan has consistently gone above and beyond in supporting both colleagues and patients, showing exceptional reliability, positivity, and attention to detail in everything they do.

Their dedication has not gone unnoticed, and we're proud to recognise Ryan's hard work and the difference they continue to make across the team.

Thank you, Ryan, for representing BEARS so brilliantly.`,
  },

     {
    id: 'TonyS-eotm-jun-2026',
    type: 'employee-of-the-month',
    names: ['Tony Such'],
    month: 'June',
    year: 2026,
    image: '/images/staff/Tony Such.jpg',
    text: `Congratulations to Tony Such, our Employee of the Month for June 2026.

Tony has consistently gone above and beyond in supporting both colleagues and patients, showing exceptional reliability, positivity, and attention to detail in everything they do.

Their dedication has not gone unnoticed, and we're proud to recognise Tony's hard work and the difference they continue to make across the team.

Thank you, Tony, for representing BEARS so brilliantly.`,
  },

  {
    id: 'CallumC-eotm-jun-2026',
    type: 'employee-of-the-month',
    names: ['Callum Cornelius'],
    month: 'June',
    year: 2026,
    image: '/images/staff/Cornelius Callum.jpg',
    text: `Congratulations to Callum Cornelius, our Employee of the Month for June 2026.

Callum has consistently gone above and beyond in supporting both colleagues and patients, showing exceptional reliability, positivity, and attention to detail in everything they do.

Their dedication has not gone unnoticed, and we're proud to recognise Callum's hard work and the difference they continue to make across the team.

Thank you, Callum, for representing BEARS so brilliantly.`,
  },
  
  {
    id: 'RiazB-eotm-may-2026',
    type: 'employee-of-the-month',
    names: ['Riaz Bacchus'],
    month: 'May',
    year: 2026,
    image: '/images/staff/Riaz Bacchus.jpg',
    text: `Congratulations to Riaz Bacchus, our Employee of the Month for May 2026.

Riaz has consistently gone above and beyond in supporting both colleagues and patients, showing exceptional reliability, positivity, and attention to detail in everything they do.

Their dedication has not gone unnoticed, and we're proud to recognise Riaz's hard work and the difference they continue to make across the team.

Thank you, Riaz, for representing BEARS so brilliantly.`,
  },

   {
    id: 'Ashkan-eotm-apr-2026',
    type: 'employee-of-the-month',
    names: ['Ashkan Makhzani'],
    month: 'April',
    year: 2026,
    image: '/images/staff/Ashkan.jpg',
    text: `Congratulations to Ashkan Makhzani, our Employee of the Month for April 2026.

Ashkan has consistently gone above and beyond in supporting both colleagues and patients, showing exceptional reliability, positivity, and attention to detail in everything they do.

Their dedication has not gone unnoticed, and we're proud to recognise Ashkan's hard work and the difference they continue to make across the team.

Thank you, Ashkan, for representing BEARS so brilliantly.`,
  },

  {
    id: 'VasileI-eotm-feb-2026',
    type: 'employee-of-the-month',
    names: ['Vasile Isac'],
    month: 'February',
    year: 2026,
    image: '/images/staff/Vasile Isac.jpg',
    text: `Congratulations to Vasile Isac, our Employee of the Month for February 2026.

Vasile has consistently gone above and beyond in supporting both colleagues and patients, showing exceptional reliability, positivity, and attention to detail in everything they do.

Their dedication has not gone unnoticed, and we're proud to recognise Vasile's hard work and the difference they continue to make across the team.

Thank you, Vasile, for representing BEARS so brilliantly.`,
  },

   {
    id: 'KhalidK-eotm-feb-2026',
    type: 'employee-of-the-month',
    names: ['Khalid Khan'],
    month: 'February',
    year: 2026,
    image: '/images/staff/Khalid Khan.jpg', 
    text: `Congratulations to Khalid Khan, our Employee of the Month for February 2026.

Khalid has consistently gone above and beyond in supporting both colleagues and patients, showing exceptional reliability, positivity, and attention to detail in everything they do.

Their dedication has not gone unnoticed, and we're proud to recognise Khalid's hard work and the difference they continue to make across the team.

Thank you, Khalid, for representing BEARS so brilliantly.`,
  },

    {
    id: 'GranB-eotm-feb-2026',
    type: 'employee-of-the-month',
    names: ['Gran Badshah'],
    month: 'February',
    year: 2026,
    image: '/images/values-logo.png',
    text: `Congratulations to Gran Badshah, our Employee of the Month for February 2026.

Gran has consistently gone above and beyond in supporting both colleagues and patients, showing exceptional reliability, positivity, and attention to detail in everything they do.

Their dedication has not gone unnoticed, and we're proud to recognise Gran's hard work and the difference they continue to make across the team.

Thank you, Gran, for representing BEARS so brilliantly.`,
  },

  {
    id: 'alex-price-nov-2025',
    type: 'shoutout',
    names: ['Alex Price'],
    month: 'November',
    year: 2025,
    text: `At BEARS Ambulance Service, we are incredibly proud of our teams and the compassion, professionalism, and dedication they show every single day. Every so often, we receive feedback that truly reminds us why this work matters and recently, one of our colleagues has exemplified this in the most inspiring way.

We proudly recognise Alex Price for the extraordinary support he offered to a family navigating a difficult time. His empathy and commitment stood out, and the feedback has been truly exceptional.

His actions reflect the very best of BEARS: quiet strength, professionalism, and genuine care. If the past few weeks have proven anything, it's that not all superheroes wear capes…but some definitely wear green!

To Alex – thank you. You have made us proud, and more importantly, you have made a difference.`,
  },
]

const typeLabel = (type: RecognitionType) =>
  type === 'employee-of-the-month' ? 'Employee of the Month' : 'Staff Shout Out'

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
            {hallOfFameEntries.map((entry) => {
              const isEotm = entry.type === 'employee-of-the-month'

              return (
                <button
                  key={entry.id}
                  onClick={() => setSelectedEntry(entry)}
                  className="group text-left relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-6 flex flex-col items-center"
                >
                  {isEotm && entry.image ? (
                    <div className="relative mb-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden shadow-md border-4 border-amber-400 group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={entry.image}
                          alt={entry.names[0]}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-md">
                        <Star className="w-4 h-4 text-white" fill="currentColor" />
                      </div>
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Megaphone className="w-8 h-8 text-white" />
                    </div>
                  )}

                  <div className="text-center">
                    {entry.names.map((name) => (
                      <h3 key={name} className="text-lg font-semibold text-[#388e6c] leading-snug">
                        {name}
                      </h3>
                    ))}
                  </div>

                  <p
                    className={`text-xs font-bold uppercase tracking-wide mt-2 text-center ${
                      isEotm ? 'text-amber-600' : 'text-blue-600'
                    }`}
                  >
                    {typeLabel(entry.type)}
                  </p>
                  <p className="text-sm font-semibold mt-1 text-center text-[#00bfff]">
                    {entry.month} {entry.year}
                  </p>
                </button>
              )
            })}
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
              {selectedEntry.type === 'employee-of-the-month' && selectedEntry.image ? (
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-300">
                    <img
                      src={selectedEntry.image}
                      alt={selectedEntry.names[0]}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center">
                    <Star className="w-3.5 h-3.5 text-white" fill="currentColor" />
                  </div>
                </div>
              ) : (
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Megaphone className="w-6 h-6 text-blue-200" />
                </div>
              )}
              <div>
                {selectedEntry.names.map((name) => (
                  <h3 key={name} className="text-2xl font-bold text-white leading-tight">
                    {name}
                  </h3>
                ))}
                <p className="text-blue-100 text-xs font-bold uppercase tracking-wide mt-1">
                  {typeLabel(selectedEntry.type)}
                </p>
                <p className="text-[#00ffff] text-sm font-medium">
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
