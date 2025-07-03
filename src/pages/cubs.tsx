import React from 'react'
import { useLanguage } from '../components/language-provider'
import HeroSection from '../components/common/hero-section'
import { Section } from '@/components/ui/section'
import { Container } from '@/components/ui/container'

const sections = [
  {
    key: 'culture',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#388e6c"/><path d="M12 28c0-4 8-4 8 0" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="16" r="3" fill="#fff"/><circle cx="24" cy="16" r="3" fill="#fff"/><path d="M20 24c2 0 4-2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: 'Culture',
    desc: 'We foster a culture of excellence, teamwork, and continuous improvement, ensuring every team member is valued and supported.',
    image: '/images/cubs_two_one.png',
    alt: 'Team culture',
    accent: 'bg-[#e0f2f1]'
  },
  {
    key: 'safety',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#e53935"/><path d="M20 10l8 4v6c0 5-3.5 10-8 11-4.5-1-8-6-8-11v-6l8-4z" fill="#fff"/></svg>
    ),
    title: 'Safety',
    desc: 'Safety is our top priority. Our team undergoes regular training and all equipment is maintained to the highest standards.',
    image: '/images/cubs/safety-1.jpg',
    alt: 'Safety training',
    accent: 'bg-[#ffebee]'
  },
  {
    key: 'comfort',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#f9a825"/><path d="M20 28s-8-6-8-10a6 6 0 0 1 12 0c0 4-8 10-8 10z" fill="#fff"/></svg>
    ),
    title: 'Comfort',
    desc: 'We ensure both patient and staff comfort throughout our services, creating a supportive and caring environment.',
    image: '/images/cubs/comfort-1.jpg',
    alt: 'Staff comfort',
    accent: 'bg-[#fffde7]'
  },
  {
    key: 'care',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#6c3483"/><path d="M28 18h-6v-6h-4v6h-6v4h6v6h4v-6h6v-4z" fill="#fff"/></svg>
    ),
    title: 'Care',
    desc: 'Compassionate care is at the heart of our service. We go above and beyond for every patient, every time.',
    image: '/images/cubs/care-1.jpg',
    alt: 'Patient care',
    accent: 'bg-[#f3e5f5]'
  },
  {
    key: 'staff',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#0a2240"/><path d="M20 22c3.3 0 6 2.7 6 6v2H14v-2c0-3.3 2.7-6 6-6zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="#fff"/></svg>
    ),
    title: 'Staff Appreciation',
    desc: 'We recognise and support our dedicated team members, celebrating their commitment to excellence and care.',
    image: '/images/cubs/appreciation-1.jpg',
    alt: 'Staff appreciation',
    accent: 'bg-[#e3eaf6]'
  }
]

export default function CubsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        title={t('cubs.cubsTitle', 'BEARS Cubs')}
        subtitle={t('cubs.cubsDescription', 'Supporting our youngest patients and their families with care and compassion.')}
        image="/images/cubs_one.png"
        imageAlt="BEARS Cubs"
        imagePosition="right"
        bgColor="#388e6c"
      />

      {/* Value Sections */}
      <Section variant="gray" size="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {sections.map((section, idx) =>
              section.key === 'staff' ? (
                <div
                  key={section.key}
                  className={`rounded-2xl shadow-xl flex flex-col md:flex-row items-center p-8 ${section.accent} transition-transform hover:-translate-y-1 hover:shadow-2xl col-span-1 md:col-span-2 mx-auto mt-8 md:mt-16 w-full md:w-2/3 justify-center`}
                >
                  <div className="flex-shrink-0 flex flex-col items-center md:items-start mr-0 md:mr-8 mb-6 md:mb-0">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full shadow-lg mb-4">
                      {section.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{section.title}</h3>
                    <p className="text-gray-700 text-lg font-medium max-w-xs">{section.desc}</p>
                  </div>
                  <img src={section.image} alt={section.alt} className="w-full md:w-48 h-40 object-cover rounded-xl shadow-md" />
                </div>
              ) : (
                <div key={section.key} className={`rounded-2xl shadow-xl flex flex-col md:flex-row items-center p-8 ${section.accent} transition-transform hover:-translate-y-1 hover:shadow-2xl`}>
                  <div className="flex-shrink-0 flex flex-col items-center md:items-start mr-0 md:mr-8 mb-6 md:mb-0">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full shadow-lg mb-4">
                      {section.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{section.title}</h3>
                    <p className="text-gray-700 text-lg font-medium max-w-xs">{section.desc}</p>
                  </div>
                  <img src={section.image} alt={section.alt} className="w-full md:w-48 h-40 object-cover rounded-xl shadow-md" />
                </div>
              )
            )}
          </div>
          <div className="flex justify-center mt-16">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary-dark transition text-xl"
            >
              Learn more about our Cubs care
              <svg className="ml-3" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </Container>
      </Section>
    </div>
  )
}
