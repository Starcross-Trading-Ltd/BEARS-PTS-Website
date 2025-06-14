
import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../language-provider'

export default function TestimonialsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#0a2240] mb-8">
          {t("news.testimonials.title")}
        </h2>
        <Link to="/compliments" className="text-[#4285f4] hover:underline mb-8 inline-block">
          {t("news.testimonials.cta")}
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {t("news.testimonials.items", []).map((testimonial: any, index: number) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border">
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-[#0a2240]">{testimonial.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
