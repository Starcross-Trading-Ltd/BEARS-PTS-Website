import React from 'react'
import { useLanguage } from '../components/language-provider'
import HeroSection from '../components/common/hero-section'

export default function TeamPage() {
  const { t } = useLanguage()

  const seniorTeam = [
    {
      key: "mohamedAliHashim",
      image: "/images/Ali hashim.png",
    },
    {
      key: "shabnamUndre",
      image: "/images/meet_bears_two.png",
    },
    {
      key: "nosaIdahosa",
      image: "/images/meet_bears_three.png",
    },
    {
      key: "winstonFlemming",
      image: "/images/meet_bears_four.png",
    },
    {
      key: "amechiOkaoye",
      image: "/images/meet_bears_five.png",
    },
    {
      key: "osmanSadiq",
      image: "/images/meet_bears_six.png",
    },
    {
      key: "michaelOkae",
      image: "/images/meet_bears_seven.png",
    },
    {
      key: "claireLawrence",
      image: "/images/meet_bears_eight.png",
    },
    {
      key: "jonardCartagena",
      image: "/images/meet_bears_nine.png",
    },
    {
      key: "katherineCrossman",
      image: "/images/meet_bears_ten.png",
    },
    {
      key: "rossStevenson",
      image: "/images/meet_bears_eleven.png",
    },
    {
      key: "warrenHazelton",
      image: "/images/meet_bears_twelve.png",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={t('team.meetTheBearsTitle')}
        image="/images/meet_bears_one.png"
        imageAlt="BEARS team photo"
        imagePosition="right"
      />

      {/* Senior Management Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">{t('team.seniorManagementTitle')}</h2>
          
          <div className="space-y-10">
            {seniorTeam.map((member, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="md:w-40 md:h-40 w-28 h-28 mx-auto md:mx-0 flex-shrink-0">
                  <img 
                    src={member.image} 
                    alt={t(`team.${member.key}.name`)}
                    className="w-full h-full object-cover rounded-xl border-4 border-white shadow"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-2">{t(`team.${member.key}.name`)}</h3>
                  <p className="text-[#4285f4] font-medium mb-3">{t(`team.${member.key}.title`)}</p>
                  <p className="text-gray-600 text-lg">{t(`team.${member.key}.description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
