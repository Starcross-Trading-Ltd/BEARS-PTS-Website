import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../language-provider'

export default function ServicesPreview() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-gray-50 rounded-xl shadow-inner">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a2240] mb-8">
          {t("home.services.title")}
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          {t("home.services.description")}
        </p>
        <Link 
          to="/services"
          className="inline-block px-10 py-4 bg-primary text-white text-xl font-semibold rounded-lg shadow hover:bg-primary-dark transition-colors"
        >
          {t("home.services.cta")}
        </Link>
      </div>
    </section>
  )
}
