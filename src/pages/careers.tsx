import React from 'react'
import { useLanguage } from '../components/language-provider'
import HeroSection from '../components/common/hero-section'
import { Briefcase, ShieldCheck, HeartPulse } from 'lucide-react'

export default function CareersPage() {
  const { t } = useLanguage()

  // Define benefits directly since they need complex structure
  const benefits = [
    {
      title: t("careers.benefits.safety.title"),
      description: t("careers.benefits.safety.description"),
      icon: <ShieldCheck className="w-10 h-10 text-[#3b82f6] mx-auto mb-4" />
    },
    {
      title: t("careers.benefits.comfort.title"),
      description: t("careers.benefits.comfort.description"),
      icon: <HeartPulse className="w-10 h-10 text-[#3b82f6] mx-auto mb-4" />
    },
    {
      title: t("careers.benefits.care.title"),
      description: t("careers.benefits.care.description"),
      icon: <Briefcase className="w-10 h-10 text-[#3b82f6] mx-auto mb-4" />
    }
  ]

  // Example vacancies
  const vacancies = Array.from({ length: 6 }).map((_, idx) => ({
    title: t(`careers.vacancies.${idx}.title`),
    location: t(`careers.vacancies.${idx}.location`),
    description: t(`careers.vacancies.${idx}.description`),
    requirements: [
      t(`careers.vacancies.${idx}.requirements.0`),
      t(`careers.vacancies.${idx}.requirements.1`),
      t(`careers.vacancies.${idx}.requirements.2`),
      t(`careers.vacancies.${idx}.requirements.3`)
    ],
    cta: t(`careers.vacancies.${idx}.cta`)
  }))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dramatic Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0a2240] to-[#3b82f6] text-white text-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            {t("careers.careersTitle", "Careers at BEARS")}
          </h1>
          <p className="text-2xl text-blue-100 max-w-2xl mx-auto mb-8 drop-shadow-md">
            {t("careers.careersDescription", "Join our team and make a difference in patient care and transport.")}
          </p>
        </div>
        {/* Subtle abstract wave at the bottom for continuity */}
        <div className="absolute left-0 right-0 bottom-0 w-screen z-0 pointer-events-none" style={{ height: '120px', minWidth: '100vw' }} aria-hidden="true">
          <svg width="100%" height="100%" viewBox="0 0 1920 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,60 C480,140 1440,0 1920,80 L1920,120 L0,120 Z" fill="#fff" fillOpacity="0.10" />
            <path d="M0,100 C533,60 1387,180 1920,40 L1920,120 L0,120 Z" fill="#fff" fillOpacity="0.07" />
          </svg>
        </div>
      </section>

      {/* Vacancies Grid Section */}
      <section className="py-16 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0a2240] mb-8 text-center">Current Openings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {vacancies.map((job, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl p-8 border-t-8 border-[#3b82f6] hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1 + 0.2}s`, animationFillMode: 'forwards' }}>
                <h3 className="text-2xl font-bold text-[#3b82f6] mb-2">{job.title}</h3>
                <div className="text-[#0a2240] font-medium mb-2">{job.location}</div>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
                <a href="mailto:careers@bearsambulance.com" className="inline-block px-8 py-3 bg-[#3b82f6] text-white text-lg font-semibold rounded-lg shadow hover:bg-[#2563eb] transition-colors">
                  {job.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0a2240] mb-8 text-center">
            {t("careers.benefits.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map((benefit, index: number) => (
              <div key={index} className="text-center bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1 + 0.2}s`, animationFillMode: 'forwards' }}>
                {benefit.icon}
                <h3 className="text-2xl font-bold text-[#0a2240] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 text-lg">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
