
import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../components/language-provider'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0a2240] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("aboutPage.aboutBearsTitle", "About BEARS")}</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            {t("aboutPage.aboutBearsDescription", "BEARS Patient Transport Service was established to provide high-quality ambulance services with a focus on patient care, comfort, and safety.")}
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0a2240] mb-8">{t("aboutPage.ourStoryTitle", "Our Story")}</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>{t("aboutPage.ourStoryContent1", "BEARS was established in 2009, on the principles of Safety, Comfort and Care. We specialise in hospital logistics patient transport service.")}</p>
            <p>{t("aboutPage.ourStoryContent2", "Supporting the NHS with paramedic, paediatric and neonatal, critical care, high dependency, bariatric, mental health and ECMO transfers alongside regular patient transport services.")}</p>
            <p>{t("aboutPage.ourStoryContent3", "At every level, BEARS focuses on quality, which defines the company and differentiates it from its peers. Our emphasis remains to provide high quality service, training, and generous package to our staff as well as providing them with appropriate tools, to enable them to deliver the highest standards of patient care.")}</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0a2240] mb-8 text-center">{t("about.ourValues", "Our Values")}</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            {t("about.valuesDescription", "BEARS values underpin everything we do, guiding our decisions and ensuring we provide exceptional care and service to all our patients and healthcare partners throughout their journey with us.")}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4285f4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h3 className="text-xl font-bold text-[#0a2240] mb-3">{t("about.safety", "Safety")}</h3>
              <div className="text-gray-700 space-y-3">
                <p>{t("about.safetyDescription1", "We always put safety first in everything we do, designed and built service levels with robust oversight at all key registered locations.")}</p>
                <p>{t("about.safetyDescription2", "Our vehicles maintain robust and healthy levels of monitoring including systems, our safety systems are designed to be 100% safe, and the emergency services.")}</p>
                <p>{t("about.safetyDescription3", "Our safety drivers adopt comprehensive approach to administering safety in monitoring and auditing covering that experience and through education.")}</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4285f4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h3 className="text-xl font-bold text-[#0a2240] mb-3">{t("about.comfort", "Comfort")}</h3>
              <div className="text-gray-700 space-y-3">
                <p>{t("about.comfortDescription1", "Consistent comfort and guidance through understanding and state of the art equipment drivers efficient clinical treatment and improvement opportunities to support local healthcare.")}</p>
                <p>{t("about.comfortDescription2", "Enabling patients at family can take to make properly individualized plans with us by following appropriate emergency or direct support ensuring our service offering is right for them and supports their health.")}</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4285f4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h3 className="text-xl font-bold text-[#0a2240] mb-3">{t("about.care", "Care")}</h3>
              <div className="text-gray-700 space-y-3">
                <p>{t("about.careDescription1", "BEARS Improvement project which enables us to understand what each person will understand in considering improvement and making work programmes to a higher standards where there is opportunity to improvement for long-term and improvement to include all communities and continue to achieve the greatest.")}</p>
                <p>{t("about.careDescription2", "Our patients have taken and professionals guidance whilst providing timely and prompt access to these additional supports for clinical quality for the appropriate clinical.")}</p>
                <p>{t("about.careDescription3", "We believe that our leadership strategy that could live precondition that we promote the clinical tool advice over medical care through direct and guidance medical improvement.")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0a2240] mb-8">{t("aboutPage.meetOurTeam", "Meet our team")}</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            {t("aboutPage.learnMoreAboutBears", "Learn More About BEARS")}
          </p>
          <Link 
            to="/contact"
            className="inline-block px-8 py-3 bg-[#4285f4] text-white font-medium rounded hover:bg-blue-600 transition-colors"
          >
            {t("home.getInTouch", "Get in touch")}
          </Link>
        </div>
      </section>
    </div>
  )
}
