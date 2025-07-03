import React from 'react'
import { useLanguage } from '../language-provider'
import { Link } from 'react-router-dom'

// Minimalist icons for each value
const valueIcons = [
  // Safety: Shield
  <svg key="shield" width="32" height="32" viewBox="0 0 32 32" className="text-green-700"><path d="M16 4l10 4v6c0 7-4.5 13-10 15C10.5 27 6 21 6 14V8l10-4z" fill="#16a34a" stroke="#065f46" strokeWidth="1.5"/></svg>,
  // Comfort: Hand
  <svg key="hand" width="32" height="32" viewBox="0 0 32 32" className="text-yellow-700"><path d="M8 18v-6a4 4 0 0 1 8 0v6" stroke="#a16207" strokeWidth="1.5" fill="#fde68a"/><rect x="8" y="18" width="8" height="8" rx="4" fill="#fde68a" stroke="#a16207" strokeWidth="1.5"/></svg>,
  // Care: Heart
  <svg key="heart" width="32" height="32" viewBox="0 0 32 32" className="text-red-500"><path d="M16 28s-10-8-10-14a6 6 0 0 1 12 0 6 6 0 0 1 12 0c0 6-10 14-10 14z" fill="#ef4444" stroke="#991b1b" strokeWidth="1.5"/></svg>,
]

export default function ValuesSection() {
  const { t } = useLanguage()
  const valuesItems = t("home.values.items", "Safety,Comfort,Care").split(',').filter(item => item.trim())

  return (
    <section className="relative py-20 sm:py-24 bg-gradient-to-br from-white via-blue-50 to-green-50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center items-center">
            <img 
              src="/images/Home_two.png" 
              alt={t("home.values.imageAlt")}
              className="w-full h-auto max-w-md rounded-xl border-4 border-white shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-5xl font-bold text-[#0a2240] mb-4">
              {t("home.values.title")}
            </h2>
            <p className="text-lg text-[#334155] mb-2"
              dangerouslySetInnerHTML={{ __html: t("home.values.description", 'BEARS core values are <span className=\"font-bold text-[#0a2240]\">safety</span>, <span className=\"font-bold text-[#0a2240]\">comfort</span>, and <span className=\"font-bold text-[#0a2240]\">care</span>,') }}
            />
            <p className="text-lg text-[#334155] mb-6">
              {t("home.values.weEnsure", "we ensure:")}
            </p>
            <ul className="space-y-5 text-[#334155] mb-8 list-none">
              {valuesItems.map((item: string, index: number) => (
                <li key={index} className="flex items-start text-lg">
                  <span className="mt-1 mr-4">
                    <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                      <circle cx="16" cy="16" r="16" fill="#16a34a" />
                      <path d="M10 18l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>{item.trim()}</span>
                </li>
              ))}
            </ul>
            <a
              href="/our-values"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition text-lg"
            >
              {t("home.values.cta", "More about our core values")}
              <svg className="ml-2" width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
