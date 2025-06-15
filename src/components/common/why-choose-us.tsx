
import React from 'react'
import { useLanguage } from '../language-provider'

interface WhyChooseUsItem {
  titleKey: string
  descriptionKey: string
  fallbackTitle: string
  fallbackDescription: string
}

interface WhyChooseUsProps {
  items?: WhyChooseUsItem[]
  className?: string
}

const defaultItems: WhyChooseUsItem[] = [
  {
    titleKey: 'serviceDetails.safety',
    descriptionKey: 'serviceDetails.safetyDescription',
    fallbackTitle: 'Safety:',
    fallbackDescription: 'Our team of experienced professionals are trained in high dependency care, ensuring your loved ones are in safe, fully capable hands.'
  },
  {
    titleKey: 'serviceDetails.reliability',
    descriptionKey: 'serviceDetails.reliabilityDescription',
    fallbackTitle: 'Reliability:',
    fallbackDescription: 'All service provision is punctual and reliable, ensuring seamless patient experience during their time with us.'
  },
  {
    titleKey: 'serviceDetails.comfort',
    descriptionKey: 'serviceDetails.comfortDescription',
    fallbackTitle: 'Comfort:',
    fallbackDescription: 'We understand the importance of comfort during medical transport. Our vehicles are designed to prevent discomfort and maintain patient care during transport.'
  },
  {
    titleKey: 'serviceDetails.personalisedService',
    descriptionKey: 'serviceDetails.personalisedServiceDescription',
    fallbackTitle: 'Personalised Service:',
    fallbackDescription: 'Our clinical teams are healthcare professionals, working collaboratively with patients and their families to ensure personalised care plans that meet your individual care needs throughout the journey.'
  }
]

export default function WhyChooseUs({ items = defaultItems, className }: WhyChooseUsProps) {
  const { t } = useLanguage()

  return (
    <div className={className}>
      <h2 className="text-2xl font-bold text-[#0a2240] mb-4">
        {t("serviceDetails.whyChooseUs", "Why Choose Us?")}
      </h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t(item.titleKey, item.fallbackTitle)}
            </h3>
            <p className="text-gray-700">
              {t(item.descriptionKey, item.fallbackDescription)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
