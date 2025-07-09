import React from 'react'
import { useLanguage } from '../components/language-provider'
import HeroSection from '../components/common/hero-section'
import { Section } from '@/components/ui/section'
import { Container } from '@/components/ui/container'

const sections = [
  {
    key: 'culture',
    icon: (
      // Team/collaboration SVG for Culture (teal)
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="40" fill="#388e6c"/><g><circle cx="28" cy="38" r="6" fill="#fff"/><circle cx="52" cy="38" r="6" fill="#fff"/><ellipse cx="40" cy="54" rx="16" ry="8" fill="#fff"/><circle cx="40" cy="28" r="7" fill="#fff"/></g></svg>
    ),
    title: 'Culture',
    desc: 'We foster a culture of excellence, teamwork, and continuous improvement, ensuring every team member is valued and supported.',
    accent: 'bg-[#e0f2f1]'
  },
  {
    key: 'safety',
    icon: (
      // Shield SVG for Safety (red)
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="40" fill="#e53935"/><path d="M40 20l-14 5v10c0 9.25 6.4 18.25 14 21 7.6-2.75 14-11.75 14-21V25l-14-5z" fill="#fff"/><path d="M40 20v36c-7.6-2.75-14-11.75-14-21V25l14-5z" fill="#f44336" fillOpacity=".7"/><path d="M40 40v-8" stroke="#e53935" strokeWidth="3" strokeLinecap="round"/><circle cx="40" cy="48" r="2.5" fill="#e53935"/></svg>
    ),
    title: 'Safety',
    desc: 'Safety is our top priority. Our team undergoes regular training and all equipment is maintained to the highest standards.',
    accent: 'bg-[#ffebee]'
  },
  {
    key: 'comfort',
    icon: (
      // Heart SVG for Comfort (yellow/orange)
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="40" fill="#f9a825"/><path d="M40 60s-16-10.28-16-22.5C24 26.5 32 20 40 28c8-8 16-1.5 16 9.5C56 49.72 40 60 40 60z" fill="#fff"/><path d="M40 60s-16-10.28-16-22.5C24 26.5 32 20 40 28v32z" fill="#ffd54f" fillOpacity=".7"/></svg>
    ),
    title: 'Comfort',
    desc: 'We ensure both patient and staff comfort throughout our services, creating a supportive and caring environment.',
    accent: 'bg-[#fffde7]'
  },
  {
    key: 'care',
    icon: (
      // Cross/hands SVG for Care (purple)
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="40" fill="#6c3483"/><path d="M56 38h-12v-12h-8v12H24v8h12v12h8v-12h12v-8z" fill="#fff"/></svg>
    ),
    title: 'Care',
    desc: 'Compassionate care is at the heart of our service. We go above and beyond for every patient, every time.',
    accent: 'bg-[#f3e5f5]'
  },
  {
    key: 'staff',
    icon: (
      // Star/trophy SVG for Staff Appreciation (navy/blue)
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="40" fill="#0a2240"/><path d="M40 22l5.09 15.64H61l-12.45 9.05L53.18 62 40 52.91 26.82 62l4.63-15.31L19 37.64h15.91z" fill="#fff"/></svg>
    ),
    title: 'Staff Appreciation',
    desc: 'We recognise and support our dedicated team members, celebrating their commitment to excellence and care.',
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
                    <div className="w-32 h-32 flex items-center justify-center rounded-full shadow-lg mb-6 mx-auto">
                      {React.cloneElement(section.icon, { width: 120, height: 120 })}
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{section.title}</h3>
                    <p className="text-gray-700 text-lg font-medium max-w-xs">{section.desc}</p>
                  </div>
                </div>
              ) : (
                <div key={section.key} className={`rounded-2xl shadow-xl flex flex-col md:flex-row items-center p-8 ${section.accent} transition-transform hover:-translate-y-1 hover:shadow-2xl`}>
                  <div className="flex-shrink-0 flex flex-col items-center md:items-start mr-0 md:mr-8 mb-6 md:mb-0">
                    <div className="w-32 h-32 flex items-center justify-center rounded-full shadow-lg mb-6 mx-auto">
                      {React.cloneElement(section.icon, { width: 120, height: 120 })}
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{section.title}</h3>
                    <p className="text-gray-700 text-lg font-medium max-w-xs">{section.desc}</p>
                  </div>
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
