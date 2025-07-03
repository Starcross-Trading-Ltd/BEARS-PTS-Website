import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../components/language-provider'
import HeroSection from '../components/common/hero-section'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={t("aboutPage.aboutBearsTitle", "About BEARS")}
        subtitle={t("aboutPage.aboutBearsDescription", "BEARS Patient Transport Service was established to provide high-quality ambulance services with a focus on patient care, comfort, and safety.")}
      />

      {/* Main Content */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image Section */}
              <div className="relative">
                <img 
                  src="/images/about.png" 
                  alt="BEARS Team" 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r"></div>
              </div>
              
              {/* Our Story Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">{t("aboutPage.ourStoryTitle", "Our Story")}</h2>
                <div className="space-y-6 text-base text-gray-700">
                  <p>{t("aboutPage.newContent1", "BEARS, established 2009, on the principles of Safety, Comfort and Care, specialises in Paramedic, Paediatric and Neonatal, Critical Care, High Dependency, Bariatric, Mental Health and ECMO transfers alongside regular Patient Transport Services.")}</p>
                  
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">{t("aboutPage.ourCoreValues", "Our Core Values")}</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>{t("aboutPage.value1", "Getting our service quality right the first time.")}</li>
                      <li>{t("aboutPage.value2", "Being efficient with a passion for patient care.")}</li>
                      <li>{t("aboutPage.value3", "Ensuring the best value for money.")}</li>
                    </ul>
                    <p className="mt-3">{t("aboutPage.newContent2", "BEARS is constantly driven to find ways of developing efficiencies and innovative practices.")}</p>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-bold text-primary mb-2">{t("aboutPage.theMumTest", "The 'Mum Test'")}</h3>
                    <p>{t("aboutPage.newContent3", 'All staff at the start of their employment with BEARS are told that every patient is our "mum" (or "child"), and every patient journey deserves the maximum respect, dignity, and excellence in care. We call this our "Mum Test" and it is our company culture.')}</p>
                  </div>
                  
                  <p>{t("aboutPage.newContent4", "BEARS is committed in delivering a seamless service for our patients, our robust eligibility process and medically trained Business Intelligence-Control team are experienced in planning and allocating our patient journeys.")}</p>
                  <p>{t("aboutPage.newContent5", "Every journey is vital all patients, and our teams ensure patients are treated with kindness, empathy and provide a first-class service from home/clinic and back again with professionalism, worry free on time service and maintaining the highest levels of safeguarding, privacy, and dignity at all times.")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">{t("aboutPage.meetOurTeam", "Meet Our Dedicated Team")}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t("aboutPage.learnMoreAboutBears", "Our professionals are the heart of our service. Get to know the people who make BEARS a trusted name in patient transport.")}
          </p>
          <Link 
            to="/team"
            className="inline-block px-10 py-4 bg-[#388e6c] text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-[#2e7358] transition-all duration-300 transform hover:scale-105"
          >
            {t("aboutPage.meetTheTeamButton", "Meet The Team")}
          </Link>
        </div>
      </section>
    </div>
  )
}
