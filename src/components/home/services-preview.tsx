
import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../language-provider'

export default function ServicesPreview() {
  const { t } = useLanguage()

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#0a2240] mb-8">
          {t("home.services.title")}
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          {t("home.services.description")}
        </p>
        <Link 
          to="/services"
          className="inline-block px-8 py-3 bg-[#4285f4] text-white font-medium rounded hover:bg-blue-600 transition-colors"
        >
          {t("home.services.cta")}
        </Link>
      </div>
    </section>
  )
}
