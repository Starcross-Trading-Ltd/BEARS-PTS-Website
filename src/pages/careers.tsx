import React from 'react'
import { useLanguage } from '../components/language-provider'
import HeroSection from '../components/common/hero-section'
import { Briefcase, ShieldCheck, HeartPulse } from 'lucide-react'
import { Link } from 'react-router-dom'

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

  // Static vacancies data
  const vacancies = [
    {
      title: 'NEPTS Business Intelligence Control Team Manager',
      location: 'Across site',
      salary: '£53,000 – 48 hours per week',
      link: '/vacancies/nepts-business-intelligence-control-team-manager',
    },
    {
      title: 'Shift Manager',
      location: 'Edgware and Maidstone',
      salary: '£40,000 - £47,000',
      link: '/vacancies/shift-manager',
    },
    {
      title: 'Paramedic',
      location: 'Edgware, Greater London',
      salary: '£50,544',
      link: '/vacancies/paramedic',
    },
    {
      title: 'First Line Manager',
      location: 'Edgware, Greater London',
      salary: '£42,000 p/a',
      link: '/vacancies/first-line-manager',
    },
    {
      title: 'Ambulance Care Assistant- Secure',
      location: 'Edgware, Greater London',
      salary: '£39,936 per annum',
      link: '/vacancies/ambulance-care-assistant-secure',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dramatic Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-dark to-primary text-white text-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            {t("careers.careersTitle", "Careers at BEARS")}
          </h1>
          <p className="text-2xl text-gray-200 max-w-2xl mx-auto mb-8 drop-shadow-md">
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
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Current Openings</h2>
              <h3 className="text-1xl font-bold text-[#3b82f6] mb-8 text-center">No Current Openings</h3>

{/*           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {vacancies.map((job, idx) => (
              <Link
                to={job.link}
                key={idx}
                className="block bg-white rounded-xl shadow p-6 border-l-4 border-green-600 hover:shadow-lg transition-shadow duration-200 group focus:outline-none focus:ring-2 focus:ring-green-600"
                style={{ animationDelay: `${idx * 0.1 + 0.2}s`, animationFillMode: 'forwards' }}
              >
                <h3 className="text-lg font-bold text-primary mb-1 group-hover:text-green-700 transition-colors">{job.title}</h3>
                <div className="text-green-700 font-medium mb-1">{job.location}</div>
                <div className="text-gray-700 text-sm mb-2">{job.salary}</div>
                <span className="inline-block mt-2 text-green-600 font-semibold text-sm group-hover:underline">View details</span>
              </Link>
            ))}
          </div> */}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            {t("careers.benefits.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map((benefit, index: number) => (
              <div key={index} className="text-center bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1 + 0.2}s`, animationFillMode: 'forwards' }}>
                {benefit.icon}
                <h3 className="text-2xl font-bold text-primary mb-4">
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
