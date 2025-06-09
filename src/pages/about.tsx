import React from 'react'
import { useLanguage } from '../components/language-provider'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0a2240] mb-8">
          {t("aboutPage.aboutBearsTitle", "About BEARS")}
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          {t("aboutPage.aboutBearsDescription", "BEARS Patient Transport Service was established to provide high-quality ambulance services with a focus on patient care, comfort, and safety.")}
        </p>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#0a2240] mb-6">
            {t("aboutPage.ourStoryTitle", "Our Story")}
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>{t("aboutPage.ourStoryContent1", "BEARS was established in 2009, on the principles of Safety, Comfort and Care. We specialise in hospital logistics patient transport service.")}</p>
            <p>{t("aboutPage.ourStoryContent2", "Supporting the NHS with paramedic, paediatric and neonatal, critical care, high dependency, bariatric, mental health and ECMO transfers alongside regular patient transport services.")}</p>
            <p>{t("aboutPage.ourStoryContent3", "At every level, BEARS focuses on quality, which defines the company and differentiates it from its peers. Our emphasis remains to provide high quality service, training, and generous package to our staff as well as providing them with appropriate tools, to enable them to deliver the highest standards of patient care.")}</p>
          </div>
        </section>
      </div>
    </div>
  )
}
