
import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../components/language-provider'
import AboutSidebar from '../../components/about-sidebar'

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

      {/* Main Content with Sidebar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AboutSidebar />
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Our Story Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#0a2240] mb-8">{t("aboutPage.ourStoryTitle", "Our Story")}</h2>
                <div className="space-y-6 text-lg text-gray-700">
                  <p>{t("aboutPage.ourStoryContent1", "BEARS was established in 2009, on the principles of Safety, Comfort and Care. We specialise in hospital logistics patient transport service.")}</p>
                  <p>{t("aboutPage.ourStoryContent2", "Supporting the NHS with paramedic, paediatric and neonatal, critical care, high dependency, bariatric, mental health and ECMO transfers alongside regular patient transport services.")}</p>
                  <p>{t("aboutPage.ourStoryContent3", "At every level, BEARS focuses on quality, which defines the company and differentiates it from its peers. Our emphasis remains to provide high quality service, training, and generous package to our staff as well as providing them with appropriate tools, to enable them to deliver the highest standards of patient care.")}</p>
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
                  className="inline-block px-8 py-3 bg-[#4285f4] text-white font-medium rounded hover:bg-blue-600 transition-colors"
                >
                  {t("home.getInTouch", "Get in touch")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
