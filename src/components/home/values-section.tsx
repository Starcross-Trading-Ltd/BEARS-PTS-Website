import React from 'react'
import { useLanguage } from '../language-provider'
import { Link } from 'react-router-dom'

export default function ValuesSection() {
  const { t } = useLanguage()

  // Get the values items as an array
  const valuesItems = t("home.values.items", "").split(',').filter(item => item.trim())

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/images/Home_two.png" 
              alt={t("home.values.imageAlt")}
              className="w-full h-auto rounded-xl border-4 border-white shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-5xl font-bold text-[#0a2240] mb-6">
              {t("home.values.title")}
            </h2>
            <p className="text-lg text-[#334155] mb-2"
              dangerouslySetInnerHTML={{ __html: t("home.values.description", 'BEARS core values are <span className="font-bold text-[#0a2240]">safety</span>, <span className="font-bold text-[#0a2240]">comfort</span>, and <span className="font-bold text-[#0a2240]">care</span>,') }}
            />
            <p className="text-lg text-[#334155] mb-6">
              {t("home.values.weEnsure", "we ensure:")}
            </p>
            <ul className="space-y-5 text-[#334155] mb-8">
              {valuesItems.map((item: string, index: number) => (
                <li key={index} className="flex items-start text-lg">
                  <span className="mt-1 mr-4">
                    <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                      <circle cx="16" cy="16" r="16" fill="#3b82f6" />
                      <path d="M10 18l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>{item.trim()}</span>
                </li>
              ))}
            </ul>
            <a
              href="/our-values"
              className="inline-flex items-center px-6 py-3 bg-[#3b82f6] text-white font-semibold rounded-lg shadow hover:bg-[#2563eb] transition text-lg"
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
