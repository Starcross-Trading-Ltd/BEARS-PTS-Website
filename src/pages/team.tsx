import React from 'react'
import { useLanguage } from '../components/language-provider'
import HeroSection from '../components/common/hero-section'

export default function TeamPage() {
  const { t } = useLanguage()

  const seniorTeam = [
    {
      name: "Mohamed Ali Hashim",
      title: "Chief Financial Officer/Director",
      image: "/images/Ali hashim.png",
      description: "Ali is the founder of BEARS Ambulance Service and has built the companies culture of Safety, Comfort and Care from inception. He is a compassionate leader and passionate on delivering the highest levels of patient care.\n\nIn his spare time Ali is a secret chef who likes nothing more than cooking for family and friends. He also supports community enterprise initiatives in third-world countries, supporting individuals to develop their business and local housing schemes."
    },
    {
      name: "Shabnam Undre",
      title: "Medical Director",
      image: "/images/meet_bears_two.png",
      description: "Appointed as the Medical director for BEARS in March 2017. Her main role is to oversee the governance and safety aspects within the organisation and to ensure that training and compliance are up to date. Shabnam has overall responsibility for medicines management, risk and patient safety.\n\nShabnam is a Consultant Urological Surgeon with a special interest in Paediatric Urology at East and North Herts NHS Trust since March 2015. She is also affiliated to several private hospitals including One-Hatfield and Rivers Hospital."
    },
    {
      name: "Nosa Idahosa",
      title: "Head of People and Operations",
      image: "/images/meet_bears_three.png",
      description: "Nosa comes with a wealth of experience having worked with the National Health Service for over 13 years prior to joining the Team at BEARS.\n\nI am focused in ensuring equity and fairness across the operations.  Driven by our BEARS value of \"Care\", my vision is to create a caring company culture to boost employee retention and job satisfaction.\n\nI am keen in promoting diversity and a champion for ensuring both staff and patient receive the best possible care. I love spending time with my daughter, family and listening to music."
    },
    {
      name: "Winston Flemming",
      title: "Director of Operations",
      image: "/images/meet_bears_four.png",
      description: "Winston has 35 years' experience in Logistic, with the last 24years specially in patient transport services.  Having worked in 3 major acute hospitals in London, Imperial NHS Trust Hospital, Guys & St Thomas, Barts Health, as senior managers supporting with their patient transport services.\nManaging ambulances crews, ensuring patients are brought in on time for their medical appointment.\n\nHe is a passionate leader, focused in enhancing his team well-being, motivational and inspiring colleagues to perform at their optimum.  Winston has an impressive track record of delivering transnormal changes in Non-Emergency Patient Transport.\n\nAs the Director of Operations, Winston will be responsible for all operational matters ensuring our service is delivered in line with our values of Safety Comfort and Care.\n\nAs a grandfather he enjoys spending with his beautiful grandkid, playing football"
    },
    {
      name: "Amechi Okonyia",
      title: "Head of Operations",
      image: "/images/meet_bears_five.png",
      description: "Experienced in staff mentoring, health and safety lead and accident management, Amechi has 7 years' experience in staff management, and champion for staff welfare.\nEquipped with appropriate driving standards knowledge, Amechi is keen on the development of new drivers and colleague and supports in ensuring appropriate career development pathway designed to fit individual development..\n\nResult oriented, keen on providing an exemplary service for our patients in line with our values of Safety Comfort & Care.\n\nAmechi is a devout Christian and loves spending time with his beautiful family."
    },
    {
      name: "Osman Shafiq",
      title: "Head of Business Intelligence BEARS",
      image: "/images/meet_bears_six.png",
      description: "With over 18 years' experience in NEPTS, Osman started as a renal ambulance driver, then to controller, and now heads our business intelligence unit at BEARS.  He is passionate about NEPTS, and our SME on all NEPTS systems and transformational projects.  He has worked in multiply NHS Trust in London and joins BEARS to champion its commitment on ensuring our patient transport services delivers on its commitment and values of Safety Comfort & Care to the Trust and Its patient."
    },
    {
      name: "Michael Okae",
      title: "Head of Compliance & Support Services",
      image: "/images/meet_bears_seven.png",
      description: "I am passionate in ensuring safe and efficient working environment for staff and safe transport service for our clients.\n\nI believe in rolling my sleeve to work collaboratively with everyone to deliver effective service.\n\nI enjoy reading, listening to podcast and spending time with family."
    },
    {
      name: "Claire Lawrence",
      title: "Business Intelligence Control Room Manager BEARS",
      image: "/images/meet_bears_eight.png",
      description: "Claire has a wealth of knowledge and experience having worked in Emergency and Non-Emergency patients transport for over 16 years. Passionate about Patient, with exceptional customer service experience.  She is passionate and committed to getting things right first time for patients.  Under Claire's supervision our service has grown tremendously and her continued support and training for all new team members has been pivotal to our we manage our service to date.  Claire is our BI-Control communication Champion for both our patients and staff alike.\n\nIn her private time, she loves baking, our in-house cake designer , singing, and spending time with friends and family."
    },
    {
      name: "Jonard Cartagena",
      title: "Head of Fleet Operations",
      image: "/images/meet_bears_nine.png",
      description: "With a career spanning over 15 years, starting out an ambulance care assistant, ensuring renal patients are brought in on time for their appointments.  Jonard in the last 9 years has support more than 100 drivers through their training and management of their fleet.  With a passion for cars, Jonard's interest in ambulances ensure all our fleet is maintained in line with regulated compliance for maintenance.  We have in the last year seen a drop in our accident rates under Jonard's guidance and support of our staff and ambulances."
    },
    {
      name: "Katherine Crossman, BSc, MCPara",
      title: "Head of Paramedic Operations",
      image: "/images/meet_bears_ten.png",
      description: "Katherine is a HCPC registered paramedic with a wealth of experience in paramedic operations and a strong passion for improving clinical standards through governance and analysis. With a background in both patient transport and frontline care.  One of Katherines key roles is the management of BEARS clinical advice line, providing 24/7 support to crews through her clinical team."
    },
    {
      name: "Ross Stevenson, DipHE MCPara",
      title: "Paramedic and BEARS Training Lead",
      image: "/images/meet_bears_eleven.png",
      description: "Registered Paramedic with more than a decade's experience in Emergency and Patient Transport Ambulance Services. Working as a Paramedic Educator for a number of years, Ross found a natural passion for training and education and this has carried forward into the development of the BEARS training Academy, ensuring that staff are given training that empowers them to provide the highest levels of patient care. Ross is also incredibly passionate about staff development and seeks to ensure all staff have the opportunity and support to progress throughout their career."
    },
    {
      name: "Warren Hazelton",
      title: "Team Leader Special Contracts",
      image: "/images/meet_bears_twelve.png",
      description: "Warren is an enthusiastic team leader, and one of our rising stars."
    }
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
          <h2 className="text-3xl font-bold text-[#0a2240] mb-8">{t('team.seniorManagementTitle')}</h2>
          
          <div className="space-y-10">
            {seniorTeam.map((member, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="md:w-40 md:h-40 w-28 h-28 mx-auto md:mx-0 flex-shrink-0">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover rounded-xl border-4 border-white shadow"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#0a2240] mb-2">{member.name}</h3>
                  <p className="text-[#4285f4] font-medium mb-3">{member.title}</p>
                  <p className="text-gray-600 text-lg">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
