
import React from 'react'
import { useLanguage } from '../components/language-provider'

export default function TeamPage() {
  const { t } = useLanguage()

  const seniorTeam = [
    {
      name: t('team.mohammedAliHashim.name'),
      title: t('team.mohammedAliHashim.title'),
      image: "/images/team/mohamed-ali-hashim.jpg",
      description: t('team.mohammedAliHashim.description')
    },
    {
      name: t('team.shabnamUndre.name'),
      title: t('team.shabnamUndre.title'),
      image: "/images/team/shabnam-undre.jpg",
      description: t('team.shabnamUndre.description')
    },
    {
      name: t('team.nosaIdahosa.name'),
      title: t('team.nosaIdahosa.title'),
      image: "/images/team/nosa-idahosa.jpg",
      description: t('team.nosaIdahosa.description')
    },
    {
      name: t('team.winstonFlemming.name'),
      title: t('team.winstonFlemming.title'),
      image: "/images/team/winston-flemming.jpg",
      description: t('team.winstonFlemming.description')
    },
    {
      name: t('team.amechiOkaoye.name'),
      title: t('team.amechiOkaoye.title'),
      image: "/images/team/amechi-okaonye.jpg",
      description: t('team.amechiOkaoye.description')
    },
    {
      name: t('team.osmanSadiq.name'),
      title: t('team.osmanSadiq.title'),
      image: "/images/team/osman-sadiq.jpg",
      description: t('team.osmanSadiq.description')
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0a2240] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">{t('team.meetTheBearsTitle')}</h1>
            </div>
            <div>
              <img 
                src="/images/team-photo.jpg" 
                alt="BEARS team photo"
                className="w-full max-w-md mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Senior Management Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0a2240] mb-8">{t('team.seniorManagementTitle')}</h2>
          
          <div className="space-y-8">
            {seniorTeam.map((member, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="md:w-32 md:h-32 w-24 h-24 mx-auto md:mx-0 flex-shrink-0">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0a2240] mb-2">{member.name}</h3>
                  <p className="text-[#4285f4] font-medium mb-3">{member.title}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
