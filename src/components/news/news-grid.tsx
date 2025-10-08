import React from 'react'
import { useLanguage } from '../../components/language-provider'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NewsGrid() {
  const { t } = useLanguage()

  // Dubai card as the first item
  const DubaiCard = {
    title: "BEARS in Dubai",
    description: "We are pleased to announce that a team from BEARS has travelled to Dubai to participate in a feasibility study with Saudi German Hospital, one of the leading healthcare providers across the Middle East and North Africa region.",
    image: "/images/news/Bears_Dubai/DubaiImg.jpg",
    link: "/news/bears-dubai",
    isBlueCard: false,
  }

  // Christmas news card as the second item
  const christmasCard = {
    title: "Christmas @ BEARS Ambulance",
    description: "'Tis the season of giving, and our BEARS Ambulance family came together to celebrate the holidays in true emergency services style. Our dedicated team took a brief pause from saving lives to spread some Christmas cheer, creating memories that remind us all why we're more than just colleagues – we're a family serving our community 24/7, even during the festive season.",
    image: "/images/news/xmas/xmas BEARS.png",
    link: "/news/christmas",
    isBlueCard: false,
  }

  // Pulse 4 news card as the third item
  const pulse4Card = {
    title: "The Pulse Clinical Newsletter #4",
    description: "September 2024 - Clinical Updates and Safety Information. This edition covers essential clinical topics including chest drains, DNACPR procedures, Mpox awareness, and Ferno chair safety guidelines. Stay informed with the latest clinical protocols and best practices.",
    image: undefined,
    link: "/news/pulse-4",
    isBlueCard: true,
  }

  // Pulse 3 news card as the fourth item
  const pulse3Card = {
    title: "The Pulse Clinical Newsletter #3",
    description: "July 2024 - Clinical Updates and Safety Information. This edition covers children & young people transport, staff wellbeing, sickle cell disease awareness, and MSOP recap. Essential reading for all clinical staff.",
    image: undefined,
    link: "/news/pulse-3",
    isBlueCard: true,
  }

  // FORS news card as the fifth item
  const forsCard = {
    title: "Joining FORS: Elevating Standards in Ambulance Services",
    description: "As part of our ongoing commitment to excellence and safety, we are proud to announce that Bears, an esteemed ambulance service provider, has recently become a member of the Fleet Operators Recognition Scheme (FORS). This prestigious accreditation is a testament to our dedication to enhancing operational efficiency, promoting safety measures, and adhering to rigorous industry standards.",
    image: "/images/news/FORS/2025_BEARS_061.jpg",
    link: "/news/fors",
    isBlueCard: false,
  }

  // Fritwell fundraising news card as the sixth item
  const fritwellCard = {
    title: "Fundraising Event for Friends of Fritwell Primary Charity",
    description: "We were delighted to attend a fundraising event organized by the Friends of Fritwell Primary Charity at Fritwell Church of England Primary School. For this event, we brought a fully stocked ambulance to ensure we could cater to any first aid requirements throughout the evening.",
    image: "/images/news/Friends of Fritwell Fundraise/Fritwell-primary-charity-BEARS.jpg",
    link: "/news/fritwell-fundraising",
    isBlueCard: false,
  }

  // Whitchurch STEM news card as the seventh item
  const whitchurchCard = {
    title: "STEM Week at Whitchurch Primary School",
    description: "As part of Year 3 STEM week, we had the opportunity to attend Whitchurch Primary School and contribute to the children's exploration of medical professions. We took an ambulance to the school and conducted three interactive sessions, each accommodating around 18 children.",
    image: "/images/news/Whitchurch primary STEM week/Whithcurch-Primary-Demo-2.jpg",
    link: "/news/whitchurch-stem",
    isBlueCard: false,
  }

  // American School Fair news card as the eighth item
  const americanSchoolCard = {
    title: "American School Fair",
    description: "The event was to provide Paramedic/First Aid cover for the American Community School (ACS) summer fair. The BEARS team on site were on hand to provide medical assistance in the event there are any injuries or incidents during the day along with a front-line Ambulance to ensure a swift response for any members of public/students that require urgent hospital attention.",
    image: "/images/news/american school fair/American-School-Ambulance-1.jpg",
    link: "/news/american-school-fair",
    isBlueCard: false,
  }

  // ECMO Ambulance Launch news card as the ninth item
  const ecmoAmbulanceCard = {
    title: "BEARS launch brand new ECMO Ambulance with Barts",
    description: "We are excited to announce the launch of a new ECMO ambulance in collaboration with Barts Health, designed to enhance the care and experience of our most critically ill patients. This state-of-the-art vehicle is specifically equipped to transport patients requiring extracorporeal membrane oxygenation (ECMO), a life-support machine that temporarily takes over the function of the heart or lungs, allowing these vital organs time to heal.",
    image: "/images/news/new ecmo vehicles/ECMO-1.jpg",
    link: "/news/ecmo-ambulance-launch",
    isBlueCard: false,
  }

  // Pulse 2 news card as the tenth item
  const pulse2Card = {
    title: "The Pulse Clinical Newsletter #2",
    description: "ISSUE 2 – May 2024. Capacity and Consent - Capacity describes the ability to use and understand information to decide, and communicate any decision made. A person lacks capacity if their mind is impaired or disturbed in some way, which means they are unable to decide at that time.",
    image: undefined,
    link: "/news/pulse-2",
    isBlueCard: true,
  }

  // HALO Body Cams news card as the eleventh item
  const haloBodyCamsCard = {
    title: "BEARS tests HALO body cams",
    description: "As part of our \"Care\" values, to safeguard patients and our ambulance crews, BEARS management team are looking to invest in body cameras. The body camera will provide additional safety measures, which can be used to manage incidents and also act as a deterrent to some challenging circumstances faced by our crews.",
    image: "/images/news/halo_cam/halo_cam.jpg",
    link: "/news/halo-body-cams",
    isBlueCard: false,
  }

  // Swanscombe football team card as the twelveth item
  const SwanscombeCard = {
    title: "BEARS Community Support: Swanscombe Tigers FC",
    description: "At BEARS, community support is at the heart of what we do and we are proud to sponsor Swanscombe Tigers U12 Black, part of one of the area’s most respected community football clubs. Swanscombe Tigers FC provides opportunities for over 300 young players across 30 teams, ranging from U6 to U18, including young girls, adult, and inclusive teams in the Kent, North Kent and Medway Leagues.",
    image: "/images/news/Swancombe Team/squad.jpg",
    link: "/news/swanscombe",
    isBlueCard: false,
  }

  // Combine all news cards - removing placeholder articles
  const allArticles = [SwanscombeCard, DubaiCard, christmasCard, pulse4Card, pulse3Card, forsCard, fritwellCard, whitchurchCard, americanSchoolCard, ecmoAmbulanceCard, pulse2Card, haloBodyCamsCard]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {allArticles.map((item, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover={{ 
            y: -8,
            transition: { duration: 0.3 }
          }}
          className="group"
        >
          <Link to={item.link} className="block">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-primary/20">
              {/* Card Image or Blue Placeholder */}
              <div className="relative h-48 overflow-hidden">
                {item.isBlueCard ? (
                  // Blue card design for clinical newsletters
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute top-4 left-4 w-8 h-8 border-2 border-blue-400/30 rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-blue-400/30 transform rotate-45"></div>
                    <div className="text-center text-white z-10">
                      <h3 className="text-2xl font-bold mb-2">The Pulse</h3>
                      <p className="text-lg font-semibold">Clinical Newsletter</p>
                    </div>
                  </div>
                ) : (
                  // Regular image card
                  <div className="relative h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.isBlueCard 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-white/90 text-gray-800 backdrop-blur-sm'
                  }`}>
                    {item.isBlueCard ? 'Clinical' : 'News'}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                {/* Read More Button */}
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold text-sm group-hover:text-primary-dark transition-colors duration-300">
                    Read More
                  </span>
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <svg className="w-3 h-3 text-primary group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}
