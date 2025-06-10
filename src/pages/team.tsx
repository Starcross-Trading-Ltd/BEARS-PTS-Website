
import React from 'react'
import { useLanguage } from '../components/language-provider'

export default function TeamPage() {
  const { t } = useLanguage()

  const seniorTeam = [
    {
      name: "Mohammed Ali Hashim",
      title: "Chief Executive Officer",
      image: "/images/team/mohamed-ali-hashim.jpg",
      description: "Mohammed has over 20 years of experience in healthcare management and emergency medical services. He founded BEARS with a vision to provide exceptional patient transport services across the UK."
    },
    {
      name: "Shabnam Undre",
      title: "Clinical Director",
      image: "/images/team/shabnam-undre.jpg",
      description: "Shabnam brings extensive clinical expertise and ensures all our services meet the highest medical standards. She oversees clinical governance and staff training programs."
    },
    {
      name: "Nosa Idahosa",
      title: "Operations Director",
      image: "/images/team/nosa-idahosa.jpg",
      description: "Nosa manages our day-to-day operations ensuring efficient service delivery. With a background in logistics and emergency services, he optimizes our operational processes."
    },
    {
      name: "Winston Flemming",
      title: "Fleet Manager",
      image: "/images/team/winston-flemming.jpg",
      description: "Winston oversees our vehicle fleet, ensuring all ambulances are maintained to the highest standards and equipped with the latest medical technology."
    },
    {
      name: "Amechi Okaoye",
      title: "Quality Assurance Manager",
      image: "/images/team/amechi-okaonye.jpg",
      description: "Amechi leads our quality assurance programs, monitoring service delivery and implementing continuous improvement initiatives across all our services."
    },
    {
      name: "Osman Sadiq",
      title: "Training Director",
      image: "/images/team/osman-sadiq.jpg",
      description: "Osman develops and delivers comprehensive training programs for our staff, ensuring they are equipped with the latest skills and knowledge in patient care."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0a2240] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">Meet the BEARS</h1>
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
          <h2 className="text-3xl font-bold text-[#0a2240] mb-8">Senior Management Team</h2>
          
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
