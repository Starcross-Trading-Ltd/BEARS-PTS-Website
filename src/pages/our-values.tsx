import React from 'react'
import { useLanguage } from '../components/language-provider'
import HeroSection from '../components/common/hero-section'

const values = [
  {
    key: 'safety',
    title: 'Safety',
    image: '/images/cubs/safety-1.jpg',
    desc: [
      'We always put safety first, with robust oversight at all key registered locations.',
      'Our vehicles and systems are designed for 100% safety, with continuous monitoring and auditing.',
      'Our team adopts a comprehensive approach to safety through education and experience.'
    ]
  },
  {
    key: 'comfort',
    title: 'Comfort',
    image: '/images/cubs/comfort-1.jpg',
    desc: [
      'We provide consistent comfort and guidance, using state-of-the-art equipment and compassionate care.',
      'We create individualized plans to ensure our service supports each patient and their family.'
    ]
  },
  {
    key: 'care',
    title: 'Care',
    image: '/images/cubs/care-1.jpg',
    desc: [
      'We strive for continuous improvement, raising standards for all communities we serve.',
      'Our leadership promotes clinical excellence and timely access to quality care.'
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
        image="/images/values-logo.png"
        imageAlt="BEARS Values Logo"
        imagePosition="left"
      />

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value) => (
              <div
                key={value.key}
                className="group bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl border-t-8 border-[#3b82f6]"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden shadow mb-6 border-4 border-[#3b82f6]">
                  <img src={value.image} alt={value.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" />
                </div>
                <h3 className="text-2xl font-bold text-[#0a2240] mb-4">{t(`about.${value.key}`, value.title)}</h3>
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
              className="inline-flex items-center px-8 py-4 bg-[#3b82f6] text-white font-semibold rounded-lg shadow hover:bg-[#2563eb] transition text-xl"
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
