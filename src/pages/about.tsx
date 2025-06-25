import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../components/language-provider'
import HeroSection from '../components/common/hero-section'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={t("aboutPage.aboutBearsTitle", "About BEARS")}
        subtitle={t("aboutPage.aboutBearsDescription", "BEARS Patient Transport Service was established to provide high-quality ambulance services with a focus on patient care, comfort, and safety.")}
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Our Story Section */}
          <div className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#0a2240] mb-8">{t("aboutPage.ourStoryTitle", "Our Story")}</h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>{t("aboutPage.ourStoryContent1", "BEARS was established in 2009, on the principles of Safety, Comfort and Care. We specialise in hospital logistics patient transport service.")}</p>
                <p>{t("aboutPage.ourStoryContent2", "Supporting the NHS with paramedic, paediatric and neonatal, critical care, high dependency, bariatric, mental health and ECMO transfers alongside regular patient transport services.")}</p>
                <p>{t("aboutPage.ourStoryContent3", "At every level, BEARS focuses on quality, which defines the company and differentiates it from its peers. Our emphasis remains to provide high quality service, training, and generous package to our staff as well as providing them with appropriate tools, to enable them to deliver the highest standards of patient care.")}</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#0a2240] mb-8">{t("aboutPage.meetOurTeam", "Meet our team")}</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              {t("aboutPage.learnMoreAboutBears", "Learn More About BEARS")}
            </p>
            <Link 
              to="/contact"
              className="inline-block px-10 py-4 bg-[#388e6c] text-white text-xl font-semibold rounded-lg shadow hover:bg-[#2e7358] transition-colors"
            >
              {t("home.getInTouch", "Get in touch")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
