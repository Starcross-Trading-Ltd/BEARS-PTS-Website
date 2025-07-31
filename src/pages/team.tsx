import React from 'react'
import { useLanguage } from '../components/language-provider'
import HeroSection from '../components/common/hero-section'

export default function TeamPage() {
  const { t } = useLanguage()

  const seniorTeam = [
    {
      key: "mohamedAliHashim",
      image: "/images/Ali hashim.jpg",
    },
    {
      key: "shabnamUndre",
      image: "/images/meet_bears_two.jpg",
    },
    {
      key: "nosaIdahosa",
      image: "/images/meet_bears_three.jpg",
    },
    {
      key: "beulah",
      image: "/images/beulah.png",
    },
    {
      key: "gregoryEtukudo",
      image: "/images/2025_BEARS_478.jpg",
    },
    {
      key: "osmanSadiq",
      image: "/images/meet_bears_six.jpg",
    },
    {
      key: "winstonFlemming",
      image: "/images/meet_bears_four.jpg",
    },
    {
      key: "jonardCartagena",
      image: "/images/meet_bears_nine.jpg",
    },
    {
      key: "ojo",
      image: "/images/2025_BEARS_496.jpg",
    },
    {
      key: "omofenwaShajuyigbe",
      image: "/images/2025_BEARS_360.jpg",
    },
    {
      key: "adrian",
      image: "/images/2025_BEARS_027.jpg",
    },
    {
      key: "michaelOkae",
      image: "/images/meet_bears_seven.jpg",
    },
    {
      key: "ethelJohn",
      image: "/images/2025_BEARS_141.jpg",
    },
    {
      key: "amechiOkaoye",
      image: "/images/meet_bears_five.png",
    },
    {
      key: "dominiqueGratwick",
      image: "/images/2025_BEARS_504.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <HeroSection
        title={t('team.meetTheBearsTitle')}
        image="/images/meet_bears_one.jpg"
        imageAlt="BEARS team photo"
        imagePosition="right"
      />

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in-up">
            Meet the Leadership Team
          </h2>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in-up delay-100">
            Our senior management team brings decades of combined experience in healthcare, 
            emergency services, and patient transport. Each member is dedicated to upholding 
            BEARS' commitment to safety, comfort, and care.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full animate-fade-in-up delay-200"></div>
        </div>
      </section>

      {/* Senior Management Team */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {seniorTeam.map((member, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Image Section */}
                <div className="relative h-96 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={t(`team.${member.key}.name`)}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    style={{ 
                      objectPosition: member.key === "mohamedAliHashim" ? 'center 40%' :
                                  member.key === "nosaIdahosa" ? 'center 40%' :
                                  member.key === "osmanSadiq" ? 'center 10%' :
                                  member.key === "michaelOkae" ? 'center 10%' :
                                  member.key === "adrian" ? 'center 35%' :
                                  member.key === "ojo" ? 'center 4%' :
                                  member.key === "dominiqueGratwick" ? 'center 15%' :
                                  member.key === "gregoryEtukudo" ? 'center 15%' :
                                  member.key === "omofenwaShajuyigbe" ? 'center 5%' :
                                  member.key === "beulah" ? 'center 10%' :
                                  member.key === "ethelJohn" ? 'center 40%' :
                                  member.key === "amechiOkaoye" ? 'center 20%' :
                                  'center 20%'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-1">{t(`team.${member.key}.name`)}</h3>
                    <p className="text-blue-200 font-medium">{t(`team.${member.key}.title`)}</p>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-[#006e4a] transition-colors">
                      {t(`team.${member.key}.name`)}
                    </h3>
                    <p className="text-[#4285f4] font-semibold text-lg mb-4">
                      {t(`team.${member.key}.title`)}
                    </p>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {t(`team.${member.key}.description`)}
                  </p>
                  
                  {/* Decorative Element */}
                  <div className="mt-6 flex items-center">
                    <div className="w-12 h-1 bg-primary rounded-full"></div>
                    <div className="w-8 h-1 bg-[#4285f4] rounded-full ml-2"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-primary mb-12 animate-fade-in-up">
            Our Leadership Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 border-l-4 border-primary animate-fade-in-up delay-100">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Excellence</h3>
              <p className="text-gray-600">Setting the highest standards in patient transport and care delivery.</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border-l-4 border-[#4285f4] animate-fade-in-up delay-200">
              <div className="w-16 h-16 bg-[#4285f4] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#4285f4] mb-4">Teamwork</h3>
              <p className="text-gray-600">Collaborating across departments to deliver seamless patient experiences.</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-l-4 border-amber-500 animate-fade-in-up delay-300">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-600 mb-4">Compassion</h3>
              <p className="text-gray-600">Leading with empathy and understanding in every patient interaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-[#006e4a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in-up">
            Join Our Team
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-100">
            Ready to be part of a team that makes a real difference in people's lives? 
            Explore career opportunities with BEARS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <a 
              href="/careers"
              className="px-8 py-4 bg-white text-primary font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              View Careers
            </a>
            <a 
              href="/contact"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
