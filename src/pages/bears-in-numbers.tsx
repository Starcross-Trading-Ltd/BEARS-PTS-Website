import React, { useState, useEffect } from 'react'
import { useLanguage } from '../components/language-provider'
import { Link } from 'react-router-dom'
import { Hospital, Bus, HeartPulse, Stethoscope } from 'lucide-react'

// Toggle this to 'y' for Y-axis (horizontal) flip, 'x' for X-axis (vertical) flip
const FLIP_AXIS: 'y' | 'x' = 'y'

// Odometer/ticker animation for numbers
function Odometer({ value, duration = 1200, start = true }: { value: number, duration?: number, start?: boolean }) {
  const [display, setDisplay] = React.useState('0')
  useEffect(() => {
    if (!start) return setDisplay('0')
    let startVal = 0
    const end = value
    const startTime = performance.now()
    function animate(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const current = Math.floor(startVal + (end - startVal) * progress)
      setDisplay(current.toLocaleString())
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [value, duration, start])
  return (
    <span className="odometer text-6xl font-extrabold text-primary tracking-tight">
      {display}
    </span>
  )
}

function FlipCard({ number, label, description, link, icon, delay, t, start }: { number: number, label: string, description: string, link: string, icon: React.ReactNode, delay: number, t: Function, start: boolean }) {
  return (
    <Link
      to={link}
      className={`flip-card group opacity-0 animate-fade-in no-underline hover:no-underline focus:no-underline transition-shadow duration-300 hover:shadow-2xl hover:border-primary border border-transparent`}
      style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
      tabIndex={0}
      role="link"
    >
      <div className={`flip-card-inner flip-${FLIP_AXIS}`}>
        <div className="flip-card-front flex flex-col items-center justify-center bg-white p-10 rounded-2xl shadow-2xl border-t-8 border-primary h-full">
          {icon}
          <Odometer value={number} start={start} />
          <h3 className="text-2xl font-bold text-primary mb-2 uppercase tracking-wide mt-4">{label}</h3>
        </div>
        <div className="flip-card-back flex flex-col items-center justify-center bg-primary text-white p-10 rounded-2xl shadow-2xl border-t-8 border-primary h-full">
          <div className="text-lg font-semibold mb-4 text-center">{description}</div>
          <span className="mt-4 px-6 py-2 bg-white text-primary font-bold rounded-lg shadow hover:bg-[#e0e7ef] transition-colors text-base">{t('bearsInNumbers.learnMore', 'Learn more')}</span>
        </div>
      </div>
    </Link>
  )
}

export default function BearsInNumbersPage() {
  const { t } = useLanguage()

  const [showEarth, setShowEarth] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [milesDisplay, setMilesDisplay] = useState(0)

  // Earth fade-in, then content fade-in and count
  useEffect(() => {
    const earthTimeout = setTimeout(() => {
      setShowContent(true)
    }, 1800) // 1.8s for earth fade, then show content
    return () => clearTimeout(earthTimeout)
  }, [])

  // Only start count when content is visible
  useEffect(() => {
    if (!showContent) return
    let start = 0
    const end = 5058454
    const duration = 6000
    const startTime = performance.now()
    function animate(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const current = Math.floor(start + (end - start) * progress)
      setMilesDisplay(current)
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [showContent])

  const stats = [
    { 
      number: 22770,
      label: t('bearsInNumbers.stats.0.label', 'Bariatric Trips'),
      description: t('bearsInNumbers.stats.0.description', 'Specialist journeys for those who need extra care.'),
      link: '/services/bariatric',
      icon: <Hospital className="w-12 h-12 text-primary mb-2" />,
    },
    { 
      number: 258875,
      label: t('bearsInNumbers.stats.1.label', 'NEPTS Trips'),
      description: t('bearsInNumbers.stats.1.description', 'Non-Emergency Patient Transport Services.'),
      link: '/services/nepts',
      icon: <Bus className="w-12 h-12 text-primary mb-2" />,
    },
    { 
      number: 33591,
      label: t('bearsInNumbers.stats.2.label', 'Mental Health Trips'),
      description: t('bearsInNumbers.stats.2.description', 'Supporting mental health journeys with compassion.'),
      link: '/services/mental-health',
      icon: <HeartPulse className="w-12 h-12 text-primary mb-2" />,
    },
    { 
      number: 484159,
      label: t('bearsInNumbers.stats.3.label', 'HDU/Para Trips'),
      description: t('bearsInNumbers.stats.3.description', 'High Dependency & Paramedic journeys.'),
      link: '/services/paramedic',
      icon: <Stethoscope className="w-12 h-12 text-primary mb-2" />,
    },
  ]

  return (
    <div className="text-white">
      {/* Fixed background container with hero gradient and earth image */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-green-50 to-white" />
        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-1000 ${showEarth ? 'opacity-100' : 'opacity-100'}`}
          style={{ zIndex: 2 }}
        >
          <img
            src="/images/watercolor-earth.png"
            alt="Earth"
            style={{
              width: '85vw',
              maxWidth: '1400px',
              minWidth: '500px',
              opacity: 0.7,
              filter: 'drop-shadow(0 16px 64px #0a2240cc) drop-shadow(0 0 64px #38bdf8cc)',
              animation: 'spin 240s linear infinite reverse',
            }}
          />
        </div>
      </div>

      {/* Main content container with a z-index to ensure it's on top */}
      <div className={`relative z-10 transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0 pointer-events-none select-none'}`}>

        {/* Merged Hero and Miles Driven Section */}
        <section className="pt-32 pb-20 text-center">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl rounded-2xl bg-white/80 backdrop-blur-md p-8 shadow-2xl">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-[#0a2240]">
                {t("bearsInNumbers.title", "BEARS in Numbers")}
              </h1>
              <p className="text-xl text-[#0a2240] max-w-2xl mx-auto mb-12">
                {t("bearsInNumbers.description", "A journey of care, comfort, and safety—by the numbers.")}
              </p>
              {/* Odometer */}
              <div className="text-[4rem] md:text-[6rem] font-extrabold tracking-tight text-[#0a2240] mb-2 leading-none">
                {milesDisplay.toLocaleString()}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a2240] mb-4">
                {t('bearsInNumbers.milesDriven', 'Miles Driven')}
              </h2>
              <p className="text-lg md:text-xl text-[#0a2240] max-w-md mx-auto">
                {t('bearsInNumbers.globeCircled', 'Our fleet has driven enough miles to circle the globe over')} <span className="font-bold text-2xl">203</span> {t('bearsInNumbers.times', 'times!')}
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section with floating cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {stats.map((stat, index) => (
                <FlipCard key={stat.label} {...stat} delay={index * 0.2 + 0.2} t={t} start={showContent} />
              ))}
            </div>
          </div>
        </section>

        {/* Infographic Journey Section with floating elements */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl rounded-2xl bg-white/80 backdrop-blur-md p-8 shadow-2xl">
              <h2 className="text-3xl font-bold mb-12 text-center text-[#0a2240]">A Journey of Impact</h2>
              <div className="relative flex flex-col items-center">
                <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
                  {/* Start */}
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-white text-primary rounded-full w-16 h-16 flex items-center justify-center shadow-lg mb-2">
                      <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true" role="img" fill="none">
                        <g>
                          <path fill="#f0df28" d="M35 12c0-1-1-4-4-4H9.401c-1.377 0-3.29 1.791-4.302 4L2 17c-1.453.599-2 2.331-2 4v6a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-8c0-1.027-1-7-1-7z"/>
                          <path fill="#e6f0e9" d="M9 25a5.997 5.997 0 0 0-5.993 5.861c.32.081.648.139.993.139h11a6 6 0 0 0-6-6zm23.993 5.86A5.996 5.996 0 0 0 27 25c-3.312 0-6 2.687-6 6h11c.345 0 .674-.058.993-.14z"/>
                          <circle fill="#292F33" cx="9" cy="31" r="4"/>
                          <circle fill="#a3a3a3" cx="9" cy="31" r="2"/>
                          <circle fill="#292F33" cx="27" cy="31" r="4"/>
                          <circle fill="#a3a3a3" cx="27" cy="31" r="2"/>
                          <path fill="#38dd2c" d="M0 21h36v3H0zm31-8h-3v-3h-2v3h-3v2h3v3h2v-3h3z"/>
                          <path fill="#55ACEE" d="M8 10h5v7H4z"/>
                          <path fill="#38dd2c" d="M15 6.5A1.5 1.5 0 0 1 13.5 8h-2a1.5 1.5 0 1 1 0-3h2A1.5 1.5 0 0 1 15 6.5z"/>
                          <path fill="#55ACEE" d="M18 6.5A1.5 1.5 0 0 1 16.5 8h-2a1.5 1.5 0 1 1 0-3h2A1.5 1.5 0 0 1 18 6.5z"/>
                        </g>
                      </svg>
                    </div>
                    <div className="font-bold text-[#0a2240]">Start</div>
                  </div>
                  {/* Path with animated ambulance */}
                  <div className="flex-1 h-2 bg-gradient-to-r from-gray-500 to-white mx-2 md:mx-4 rounded-full relative overflow-visible">
                    <AnimatedAmbulance />
                    <div className="absolute left-1/4 top-[-2.2rem] text-4xl">🧑‍⚕️</div>
                    <div className="absolute left-1/2 top-[-2.2rem] text-4xl">🧑‍🦽</div>
                    <div className="absolute left-3/4 top-[-2.2rem] text-4xl">🧑‍🔬</div>
                  </div>
                  {/* End */}
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-white text-primary rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold shadow-lg mb-2">🌍</div>
                    <div className="font-bold text-[#0a2240]">World</div>
                  </div>
                </div>
                <div className="mt-8 text-center text-lg text-[#0a2240] max-w-2xl mx-auto">
                  Every journey, every mile, every patient—part of a global story of care and connection.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emotive Meaning Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <div className="relative rounded-3xl bg-white/90 backdrop-blur-md p-14 shadow-2xl max-w-2xl w-full text-center overflow-hidden border-4 border-transparent" style={{
                backgroundImage: 'radial-gradient(circle at 80% 20%, #e0f7fa 0%, transparent 60%), radial-gradient(circle at 20% 80%, #c7ffd8 0%, transparent 60%)',
                borderImage: 'linear-gradient(90deg, #388e6c, #0a2240, #388e6c) 1',
              }}>
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-4 leading-tight" style={{fontFamily: 'inherit', fontStyle: 'normal', textShadow: '0 2px 12px #38bdf833'}}>
                  Protecting our future, one patient at a time.
                </div>
                <div className="mt-2 text-base text-[#0a2240]/80 font-semibold tracking-wide">
                  BEARS Patient Transport
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 text-center">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl rounded-2xl bg-white/80 backdrop-blur-md p-8 shadow-2xl">
              <h2 className="text-3xl font-bold mb-6 text-[#0a2240]">Partner with BEARS for Exceptional Patient Transport</h2>
              <p className="text-lg mb-8" style={{ color: '#000' }}>
                Join the many healthcare providers and patients who trust BEARS for their transport needs.
              </p>
              <a 
                href="/contact"
                className="inline-block px-10 py-4 bg-primary text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

// Animated ambulance for journey section
function AnimatedAmbulance() {
  const [pos, setPos] = React.useState(0)
  React.useEffect(() => {
    let p = 0
    const timer = setInterval(() => {
      p = (p + 1) % 101
      setPos(p)
    }, 30)
    return () => clearInterval(timer)
  }, [])
  return (
    <div
      className="absolute top-[-2.7rem] transition-transform duration-200"
      style={{ left: `calc(${pos}% - 1.5rem)`, transform: 'scaleX(-1)' }}
    >
      <svg width="48" height="48" viewBox="0 0 36 36" aria-hidden="true" role="img" fill="none">
        <g>
          <path fill="#f0df28" d="M35 12c0-1-1-4-4-4H9.401c-1.377 0-3.29 1.791-4.302 4L2 17c-1.453.599-2 2.331-2 4v6a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-8c0-1.027-1-7-1-7z"/>
          <path fill="#e6f0e9" d="M9 25a5.997 5.997 0 0 0-5.993 5.861c.32.081.648.139.993.139h11a6 6 0 0 0-6-6zm23.993 5.86A5.996 5.996 0 0 0 27 25c-3.312 0-6 2.687-6 6h11c.345 0 .674-.058.993-.14z"/>
          <circle fill="#292F33" cx="9" cy="31" r="4"/>
          <circle fill="#a3a3a3" cx="9" cy="31" r="2"/>
          <circle fill="#292F33" cx="27" cy="31" r="4"/>
          <circle fill="#a3a3a3" cx="27" cy="31" r="2"/>
          <path fill="#38dd2c" d="M0 21h36v3H0zm31-8h-3v-3h-2v3h-3v2h3v3h2v-3h3z"/>
          <path fill="#55ACEE" d="M8 10h5v7H4z"/>
          <path fill="#38dd2c" d="M15 6.5A1.5 1.5 0 0 1 13.5 8h-2a1.5 1.5 0 1 1 0-3h2A1.5 1.5 0 0 1 15 6.5z"/>
          <path fill="#55ACEE" d="M18 6.5A1.5 1.5 0 0 1 16.5 8h-2a1.5 1.5 0 1 1 0-3h2A1.5 1.5 0 0 1 18 6.5z"/>
        </g>
      </svg>
    </div>
  )
}

// Animations
// Add to globals.css:
// .animate-fade-in { opacity: 0; animation: fadeIn 1s forwards; }
// @keyframes fadeIn { to { opacity: 1; } }
// .animate-bounce-slow { animation: bounce 2s infinite; }
// @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
// .flip-card { perspective: 1200px; min-height: 320px; cursor: pointer; outline: none; }
// .flip-card-inner { position: relative; width: 100%; height: 100%; transition: transform 0.7s cubic-bezier(.4,2,.6,1); transform-style: preserve-3d; }
// .flip-card.flipped .flip-card-inner, .flip-card:focus .flip-card-inner, .flip-card:active .flip-card-inner, .flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
// .flip-card-front, .flip-card-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; top: 0; left: 0; }
// .flip-card-back { transform: rotateY(180deg); }
