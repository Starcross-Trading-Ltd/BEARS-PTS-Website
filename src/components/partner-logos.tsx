
import React from 'react'
import { useLanguage } from './language-provider'

export default function PartnerLogos() {
  const { t } = useLanguage()

  const partners = [
    { name: "NHS", logo: "/images/nhs-guys-logo.png" },
    { name: "Evelina", logo: "/images/evelina-logo.png" },
    { name: "Southampton", logo: "/images/southampton-logo.png" },
    { name: "Sprint", logo: "/images/sprint-logo.png" },
  ]

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-[#0a2240] mb-8">
          {t("partners.title", "Our Partners")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center h-16">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
