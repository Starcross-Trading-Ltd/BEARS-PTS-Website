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
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-5xl font-bold text-[#0a2240] mb-6">
              {t("home.values.title")}
            </h2>
            <p className="text-lg text-[#334155] mb-2">
              BEARS core values are{" "}
              <span className="font-bold text-[#0a2240]">safety</span>,{" "}
              <span className="font-bold text-[#0a2240]">comfort</span>, and{" "}
              <span className="font-bold text-[#0a2240]">care</span>,
            </p>
            <p className="text-lg text-[#334155] mb-6">
              we ensure:
            </p>
            <ul className="space-y-3 text-[#334155] mb-6">
              {valuesItems.map((item: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="mt-1 mr-3">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="12" fill="#3b82f6" />
                      <path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>{item.trim()}</span>
                </li>
              ))}
            </ul>
            <a
              href="/our-values"
              className="inline-flex items-center text-[#3b82f6] font-medium hover:underline transition"
            >
              More about our core values
              <svg className="ml-2" width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
