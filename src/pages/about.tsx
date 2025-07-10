import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../components/language-provider'
import PartnerLogos from '../components/partner-logos'
import { Hospital, Bus, HeartPulse, Stethoscope } from 'lucide-react'

// Animated Odometer for stats
function Odometer({ value, duration = 1200 }: { value: number, duration?: number }) {
  const [display, setDisplay] = React.useState('0')
  React.useEffect(() => {
    let start = 0
    const end = value
    const startTime = performance.now()
    function animate(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const current = Math.floor(start + (end - start) * progress)
      setDisplay(current.toLocaleString())
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [value, duration])
  return (
    <span className="odometer text-5xl md:text-6xl font-extrabold text-primary tracking-tight">
      {display}
    </span>
  )
}

// Timeline data (can be expanded with real milestones)
const timeline = [
  { year: '2009', title: 'BEARS Founded', desc: 'Established with a vision for patient-first transport.' },
  { year: '2012', title: 'First 10,000 Patients', desc: 'Milestone of care and trust in the community.' },
  { year: '2016', title: 'Specialist Services', desc: 'Launched Neonatal, Bariatric, and ECMO transport.' },
  { year: '2020', title: 'Awarded NHS Partnerships', desc: 'Recognised for excellence and reliability.' },
  { year: '2023', title: 'Over 500,000 Journeys', desc: 'A legacy of safety, comfort, and care.' },
]

// Stats for "By the Numbers"
const stats = [
  { number: 22770, label: 'Bariatric Trips', icon: <Hospital className="w-10 h-10 text-primary mb-2" /> },
  { number: 258875, label: 'NEPTS Trips', icon: <Bus className="w-10 h-10 text-primary mb-2" /> },
  { number: 33591, label: 'Mental Health Trips', icon: <HeartPulse className="w-10 h-10 text-primary mb-2" /> },
  { number: 484159, label: 'HDU/Para Trips', icon: <Stethoscope className="w-10 h-10 text-primary mb-2" /> },
]

// Values/Why Choose Us
const values = [
  {
    key: 'safety',
    title: 'Safety',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12"><path d="M24 4L8 10v10c0 10.5 7.25 20.25 16 24 8.75-3.75 16-13.5 16-24V10L24 4z" fill="#e53935"/><path d="M24 4v40c-8.75-3.75-16-13.5-16-24V10l16-6z" fill="#f44336" fillOpacity=".7"/><path d="M24 24v-8" stroke="#fff" strokeWidth="3" strokeLinecap="round"/><circle cx="24" cy="30" r="2.5" fill="#fff"/></svg>
    ),
    desc: 'Rigorous onboarding, hands-free radios, and 100% KPI achievement ensure the highest safety standards.'
  },
  {
    key: 'comfort',
    title: 'Comfort',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12"><path d="M24 42s-13-8.35-13-18.5C11 14.5 16.5 10 24 16c7.5-6 13 1.5 13 7.5C37 33.65 24 42 24 42z" fill="#f9a825"/><path d="M24 42s-13-8.35-13-18.5C11 14.5 16.5 10 24 16v26z" fill="#ffd54f" fillOpacity=".7"/></svg>
    ),
    desc: 'State-of-the-art equipment and extra-mile service for every patient journey.'
  },
  {
    key: 'care',
    title: 'Care',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12"><path d="M24 44c-6-6-12-10-12-16 0-4.5 3.5-8 8-8 2.5 0 4.5 1.5 6 3.5C27.5 21.5 29.5 20 32 20c4.5 0 8 3.5 8 8 0 6-6 10-12 16z" fill="#6c3483"/><path d="M24 44c-6-6-12-10-12-16 0-4.5 3.5-8 8-8 2.5 0 4.5 1.5 6 3.5V44z" fill="#a569bd" fillOpacity=".7"/><path d="M24 28v-4" stroke="#fff" strokeWidth="3" strokeLinecap="round"/><circle cx="24" cy="32" r="2.5" fill="#fff"/></svg>
    ),
    desc: 'Collaboration, empathy, and a gold-standard team for every patient.'
  }
]

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-green-50 to-white pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-6 drop-shadow-lg animate-fade-in-up">
              {t('aboutPage.aboutBearsTitle', 'About BEARS')}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-8 max-w-2xl animate-fade-in-up delay-100">
              {t('aboutPage.aboutBearsDescription', 'BEARS Patient Transport Service was established to provide high-quality ambulance services with a focus on patient care, comfort, and safety.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up delay-200">
              <Link to="/team" className="px-8 py-4 bg-[#388e6c] text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-[#2e7358] transition-all duration-300 transform hover:scale-105">
                {t('aboutPage.meetTheTeamButton', 'Meet The Team')}
              </Link>
              <Link to="/bears-in-numbers" className="px-8 py-4 bg-primary text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105">
                {t('aboutPage.bearsInNumbers', 'BEARS in Numbers')}
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center animate-fade-in-up delay-300">
            <img src="/images/about.png" alt="BEARS Team" className="rounded-3xl shadow-2xl w-full max-w-lg object-cover border-4 border-white" />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-12 animate-fade-in-up">Our Journey</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="border-l-4 border-primary absolute h-full left-6 top-0 z-0" />
            <ul className="space-y-12 relative z-10">
              {timeline.map((item, i) => (
                <li key={item.year} className="flex items-start animate-fade-in-up" style={{animationDelay: `${i * 0.15 + 0.2}s`}}>
                  <div className="w-14 h-14 flex items-center justify-center bg-primary text-white rounded-full shadow-lg border-2 border-white mr-6">
                    <span className="font-semibold text-lg tracking-tight" style={{lineHeight: '1'}}>{item.year}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-lg text-gray-700">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-12 animate-fade-in-up">Why Choose BEARS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, i) => (
              <div key={value.key} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border-t-8 border-primary animate-fade-in-up" style={{animationDelay: `${i * 0.1 + 0.2}s`}}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center p-4 shadow mb-6 border-4 border-white bg-white">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-gray-700 text-lg">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Quote/Testimonial Section */}
      <section className="py-20 bg-gradient-to-b from-white via-green-50 to-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold text-primary italic mb-6 animate-fade-in-up">
            “At BEARS, every journey is a promise of safety, comfort, and care. Our team is dedicated to treating every patient as family, every time.”
          </blockquote>
          <div className="text-lg font-bold text-gray-700 animate-fade-in-up delay-100">— BEARS Leadership Team</div>
        </div>
      </section>

      {/* The Mum Test Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-green-50 border-l-8 border-green-500 p-8 rounded-2xl shadow-xl animate-fade-in-up">
            <h2 className="text-3xl font-bold text-primary mb-4">The “Mum Test”</h2>
            <p className="text-xl text-gray-700 mb-2">All staff at BEARS are told that every patient is our “mum” (or “child”), and every journey deserves the maximum respect, dignity, and excellence in care. This is our “Mum Test”—it’s our culture, our standard, and our promise.</p>
            <div className="mt-4 text-lg text-primary font-semibold">“If it’s not good enough for our own mum, it’s not good enough for our patients.”</div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-4 animate-fade-in-up">Ready to Experience the BEARS Difference?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-100">
            Our professionals are the heart of our service. Get to know the people who make BEARS a trusted name in patient transport.
          </p>
          <Link 
            to="/team"
            className="inline-block px-10 py-4 bg-[#388e6c] text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-[#2e7358] transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-200"
          >
            {t('aboutPage.meetTheTeamButton', 'Meet The Team')}
          </Link>
        </div>
      </section>
    </div>
  )
}
