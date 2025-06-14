
import React from 'react'
import { useLanguage } from '../language-provider'

export default function ValuesSection() {
  const { t } = useLanguage()

  // Get the values items as an array
  const valuesItems = t("home.values.items", "").split(',').filter(item => item.trim())

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/images/fleet/ambulance-main.jpg" 
              alt={t("home.values.imageAlt")}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#0a2240] mb-6">
              {t("home.values.title")}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {t("home.values.description")}
            </p>
            <ul className="space-y-3 text-gray-600">
              {valuesItems.map((item: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#00855a] font-bold mr-2">•</span>
                  {item.trim()}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
