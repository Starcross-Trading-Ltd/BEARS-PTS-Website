import React from 'react'
import { useLanguage } from '../components/language-provider'
import HeroSection from '../components/common/hero-section'

const values = [
  {
    key: 'safety',
    title: 'Safety',
    icon: (
      // Shield SVG for Safety (red)
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M24 4L8 10v10c0 10.5 7.25 20.25 16 24 8.75-3.75 16-13.5 16-24V10L24 4z" fill="#e53935"/>
        <path d="M24 4v40c-8.75-3.75-16-13.5-16-24V10l16-6z" fill="#f44336" fillOpacity=".7"/>
        <path d="M24 24v-8" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="24" cy="30" r="2.5" fill="#fff"/>
      </svg>
    ),
    color: 'bg-[#e53935] text-white',
    desc: [
      'Our Rapid Response vehicles are custom-designed to safely transport clinical teams and all necessary equipment.',
      'We ensure reliable communication with two-way, hands-free radios in all vehicles, contributing to our record of 100% KPI achievement.',
      'Rigorous onboarding, including shadowing and continuous assessment, ensures our staff meet the highest safety standards for everyone.'
    ]
  },
  {
    key: 'comfort',
    title: 'Comfort',
    icon: (
      <img src="/images/values/comfort_old.svg" alt="Comfort" className="w-full h-full" />
    ),
    color: 'bg-[#f9a825] text-white',
    desc: [
      'Before every journey, our crews ensure patients are safe and comfortable, setting up state-of-the-art medical equipment for continuous monitoring.',
      'For home arrivals, we go the extra mile to ensure patient well-being, coordinating with care providers and ensuring essentials are within reach.'
    ]
  },
  {
    key: 'care',
    title: 'Care',
    icon: (
      <img src="/images/values/care_svg.svg" alt="Care" className="w-full h-full" />
    ),
    color: 'bg-[#6c3483] text-white',
    desc: [
      'Our operational leads collaborate seamlessly with Trust partners, even assisting on wards to prioritize patient care.',
      'We foster a safe and open environment where our teams and multidisciplinary partners work together for effective patient outcomes.',
      'Our commitment to care begins at recruitment, where only candidates who share our passion for dignity and meet our gold standard are selected.'
    ]
  }
]

export default function OurValuesPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        title={t('about.ourValues', 'Our Values')}
        subtitle={t('about.valuesDescription', 'BEARS values underpin everything we do, guiding our decisions and ensuring we provide exceptional care and service to all our patients and healthcare partners throughout their journey with us.')}
        image="/images/values.png"
        imageAlt="BEARS Values Logo"
        imagePosition="left"
      />

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <img
              src="/images/values-logo.png"
              alt="BEARS Our Values Logo"
              className="w-full max-w-xl sm:max-w-xs h-auto"
            />
            <div className="relative w-full flex justify-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-8 bg-[#6c3483]/30 blur-2xl rounded-full z-0" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value) => (
              <div
                key={value.key}
                className={`group bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl border-t-8 ${
                  value.key === 'safety' ? 'border-[#e53935]' :
                  value.key === 'comfort' ? 'border-[#f9a825]' :
                  value.key === 'care' ? 'border-[#6c3483]' :
                  'border-primary'
                }`}
              >
                <div className={`w-24 h-24 rounded-full flex items-center justify-center p-5 shadow mb-6 border-4 border-white ${value.color}`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{t(`about.${value.key}`, value.title)}</h3>
                <ul className="text-gray-700 space-y-3 text-lg text-left list-disc list-inside">
                  {value.desc.map((d, i) => (
                    <li key={i}>{t(`about.${value.key}Description${i+1}`, d)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-16">
            <a
              href="/bears-in-numbers"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary-dark transition text-xl"
            >
              Discover the BEARS Difference
              <svg className="ml-3" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
