import React, { useState } from 'react'
import { useLanguage } from '../components/language-provider'
import HeroSection from '../components/common/hero-section'

const stats = [
  {
    number: 22770,
    label: 'Bariatric Trips',
    description: 'Specialist journeys for those who need extra care.',
    icon: '🚑',
  },
  {
    number: 258875,
    label: 'NEPTS Trips',
    description: 'Non-Emergency Patient Transport Services.',
    icon: '🚌',
  },
  {
    number: 33591,
    label: 'Mental Health Trips',
    description: 'Supporting mental health journeys with compassion.',
    icon: '🧑‍⚕️',
  },
  {
    number: 484159,
    label: 'HDU/Para Trips',
    description: 'High Dependency & Paramedic journeys.',
    icon: '🚨',
  },
]

const milesDriven = 5058454

// Odometer/ticker animation for numbers
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
    <span className="odometer text-6xl font-extrabold text-[#0a2240] tracking-tight">
      {display}
    </span>
  )
}

// Circular progress for miles driven
function MilesProgress({ value, max = 5058454 }: { value: number, max?: number }) {
  const radius = 60
  const stroke = 10
  const normalizedRadius = radius - stroke / 2
  const circumference = normalizedRadius * 2 * Math.PI
  const percent = Math.min(value / max, 1)
  const offset = circumference - percent * circumference
  return (
    <svg width={radius * 2} height={radius * 2} className="mb-4">
      <circle
        stroke="#e0e7ef"
        fill="none"
        strokeWidth={stroke}
        cx={radius}
        cy={radius}
        r={normalizedRadius}
      />
      <circle
        stroke="#3b82f6"
        fill="none"
        strokeWidth={stroke}
        strokeLinecap="round"
        cx={radius}
        cy={radius}
        r={normalizedRadius}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(.4,2,.6,1)' }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fontSize="2rem"
        fill="#0a2240"
        fontWeight="bold"
      >
        {value.toLocaleString()}
      </text>
    </svg>
  )
}

function FlipCard({ icon, number, label, description, delay }: { icon: string, number: number, label: string, description: string, delay: number }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <div
      className={`flip-card group opacity-0 animate-fade-in`}
      style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
      tabIndex={0}
      onClick={() => setFlipped(f => !f)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onBlur={() => setFlipped(false)}
      role="button"
      aria-pressed={flipped}
    >
      <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
        <div className="flip-card-front flex flex-col items-center justify-center bg-white p-10 rounded-2xl shadow-2xl border-t-8 border-[#3b82f6] h-full">
          <div className="text-5xl mb-4 animate-bounce-slow">{icon}</div>
          <Odometer value={number} />
          <h3 className="text-2xl font-bold text-[#3b82f6] mb-2 uppercase tracking-wide mt-4">{label}</h3>
        </div>
        <div className="flip-card-back flex flex-col items-center justify-center bg-[#3b82f6] text-white p-10 rounded-2xl shadow-2xl border-t-8 border-[#0a2240] h-full">
          <div className="text-lg font-semibold mb-4">{description}</div>
          <div className="text-3xl">✨</div>
        </div>
      </div>
    </div>
  )
}

export default function BearsInNumbersPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dramatic Hero Section (no bg image) */}
      <section className="py-20 bg-gradient-to-br from-[#0a2240] to-[#3b82f6] text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            {t("bearsInNumbers.title", "BEARS in Numbers")}
          </h1>
          <p className="text-2xl text-blue-100 max-w-2xl mx-auto mb-8 drop-shadow-md">
            {t("bearsInNumbers.description", "A journey of care, comfort, and safety—by the numbers.")}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <FlipCard key={stat.label} {...stat} delay={index * 0.2 + 0.2} />
            ))}
          </div>
          {/* Miles Driven with circular progress */}
          <div className="flex flex-col items-center justify-center mt-16 opacity-0 animate-fade-in" style={{ animationDelay: `${stats.length * 0.2 + 0.2}s`, animationFillMode: 'forwards' }}>
            <MilesProgress value={milesDriven} />
            <div className="text-3xl font-extrabold text-[#0a2240] mb-2">Miles Driven</div>
            <div className="text-gray-600 text-base text-center max-w-xs mb-2">Our fleet has driven enough miles to circle the globe more than <span className="text-[#3b82f6] font-bold">203</span> times!</div>
          </div>
        </div>
      </section>

      {/* Infographic Journey Section with animated ambulance */}
      <section className="py-20 bg-gradient-to-r from-[#e0f2fe] to-[#f1f5f9]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0a2240] mb-12 text-center">A Journey of Impact</h2>
          <div className="relative flex flex-col items-center">
            <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
              {/* Start */}
              <div className="flex flex-col items-center">
                <div className="bg-[#3b82f6] text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold shadow-lg mb-2">🚑</div>
                <div className="text-[#0a2240] font-bold">Start</div>
              </div>
              {/* Path with animated ambulance */}
              <div className="flex-1 h-2 bg-gradient-to-r from-[#3b82f6] to-[#0a2240] mx-2 md:mx-4 rounded-full relative overflow-visible">
                <AnimatedAmbulance />
                <div className="absolute left-1/4 top-[-1.5rem] text-2xl">🧑‍⚕️</div>
                <div className="absolute left-1/2 top-[-1.5rem] text-2xl">🧑‍🦽</div>
                <div className="absolute left-3/4 top-[-1.5rem] text-2xl">🧑‍🔬</div>
              </div>
              {/* End */}
              <div className="flex flex-col items-center">
                <div className="bg-[#0a2240] text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold shadow-lg mb-2">🌍</div>
                <div className="text-[#0a2240] font-bold">World</div>
              </div>
            </div>
            <div className="mt-8 text-center text-lg text-gray-700 max-w-2xl mx-auto">
              Every journey, every mile, every patient—part of a global story of care and connection.
            </div>
          </div>
        </div>
      </section>

      {/* Emotive Meaning Section */}
      <section className="py-20 bg-[#f1f5f9]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#0a2240] flex items-center justify-center shadow-2xl">
                <span className="text-white text-7xl">🤝</span>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-extrabold text-[#0a2240] mb-8">What These Numbers Mean</h2>
              <div className="space-y-8 text-lg text-gray-700">
                <p>Every number is a life touched, a family supported, a journey made safer. Behind every statistic is a story of compassion, professionalism, and hope.</p>
                <p>Thank you to our dedicated team, our partners, and every patient who has been part of the BEARS journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0a2240]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Partner with BEARS for Exceptional Patient Transport</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Join the many healthcare providers and patients who trust BEARS for their transport needs.
          </p>
          <a 
            href="/contact"
            className="inline-block px-10 py-4 bg-[#3b82f6] text-white text-xl font-semibold rounded-lg shadow hover:bg-[#2563eb] transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
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
      className="absolute top-[-2.5rem] text-4xl transition-transform duration-200"
      style={{ left: `calc(${pos}% - 1.5rem)` }}
    >
      🚑
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
