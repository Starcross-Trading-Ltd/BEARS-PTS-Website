import React, { useState } from 'react'
import { useLanguage } from '../components/language-provider'
import HeroSection from '../components/common/hero-section'
import { Link } from 'react-router-dom'
import { Hospital, Bus, HeartPulse, Stethoscope } from 'lucide-react'

  const stats = [
    { 
    number: 22770,
    label: 'Bariatric Trips',
    description: 'Specialist journeys for those who need extra care.',
    link: '/services/bariatric',
    icon: <Hospital className="w-12 h-12 text-[#3b82f6] mb-2" />,
  },
  {
    number: 258875,
    label: 'NEPTS Trips',
    description: 'Non-Emergency Patient Transport Services.',
    link: '/services/nepts',
    icon: <Bus className="w-12 h-12 text-[#3b82f6] mb-2" />,
  },
  {
    number: 33591,
    label: 'Mental Health Trips',
    description: 'Supporting mental health journeys with compassion.',
    link: '/services/mental-health',
    icon: <HeartPulse className="w-12 h-12 text-[#3b82f6] mb-2" />,
  },
  {
    number: 484159,
    label: 'HDU/Para Trips',
    description: 'High Dependency & Paramedic journeys.',
    link: '/services/paramedic',
    icon: <Stethoscope className="w-12 h-12 text-[#3b82f6] mb-2" />,
  },
]

const milesDriven = 5058454

// Toggle this to 'y' for Y-axis (horizontal) flip, 'x' for X-axis (vertical) flip
const FLIP_AXIS: 'y' | 'x' = 'y'

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

function FlipCard({ number, label, description, link, icon, delay }: { number: number, label: string, description: string, link: string, icon: React.ReactNode, delay: number }) {
  return (
    <Link
      to={link}
      className={`flip-card group opacity-0 animate-fade-in no-underline hover:no-underline focus:no-underline transition-shadow duration-300 hover:shadow-2xl hover:border-[#2563eb] border border-transparent`}
      style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
      tabIndex={0}
      role="link"
    >
      <div className={`flip-card-inner flip-${FLIP_AXIS}`}>
        <div className="flip-card-front flex flex-col items-center justify-center bg-white p-10 rounded-2xl shadow-2xl border-t-8 border-[#3b82f6] h-full">
          {icon}
          <Odometer value={number} />
          <h3 className="text-2xl font-bold text-[#3b82f6] mb-2 uppercase tracking-wide mt-4">{label}</h3>
        </div>
        <div className="flip-card-back flex flex-col items-center justify-center bg-[#3b82f6] text-white p-10 rounded-2xl shadow-2xl border-t-8 border-[#0a2240] h-full">
          <div className="text-lg font-semibold mb-4 text-center">{description}</div>
          <span className="mt-4 px-6 py-2 bg-white text-[#3b82f6] font-bold rounded-lg shadow hover:bg-[#e0e7ef] transition-colors text-base">Learn more</span>
        </div>
      </div>
    </Link>
  )
}

function MilesDrivenCreative() {
  // Odometer animation for the number
  const [display, setDisplay] = useState(0)
  React.useEffect(() => {
    let start = 0
    const end = 5058454
    const duration = 1800
    const startTime = performance.now()
    function animate(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const current = Math.floor(start + (end - start) * progress)
      setDisplay(current)
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [])

  // Animate ambulance around globe
  const [angle, setAngle] = useState(0)
  React.useEffect(() => {
    const timer = setInterval(() => {
      setAngle(a => (a + 2) % 360)
    }, 20)
    return () => clearInterval(timer)
  }, [])

  // Globe SVG size
  const size = 320
  const r = 120
  const cx = size / 2
  const cy = size / 2
  // Ambulance position on orbit
  const rad = (angle * Math.PI) / 180
  const ambX = cx + r * Math.cos(rad) - 18
  const ambY = cy + r * Math.sin(rad) - 18

  // Sparkles
  const sparkles = Array.from({ length: 12 }).map((_, i) => {
    const sparkleAngle = (i * 360) / 12 + angle * 0.5
    const rad = (sparkleAngle * Math.PI) / 180
    const sx = cx + (r + 30) * Math.cos(rad)
    const sy = cy + (r + 30) * Math.sin(rad)
    return (
      <circle
        key={i}
        cx={sx}
        cy={sy}
        r={Math.random() * 2 + 1.5}
        fill="#fff"
        opacity={0.5 + 0.5 * Math.sin((angle + i * 30) * Math.PI / 180)}
        className="animate-sparkle"
      />
    )
  })

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0a2240] to-[#3b82f6] text-white overflow-x-hidden animate-fade-in-up mt-24">
      {/* Parallax background dots */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/4 w-32 h-32 bg-blue-200/10 rounded-full blur-2xl animate-float" />
        <div className="absolute right-1/4 bottom-1/4 w-40 h-40 bg-blue-300/10 rounded-full blur-2xl animate-float2" />
        <div className="absolute left-1/2 top-1/2 w-24 h-24 bg-blue-100/10 rounded-full blur-2xl animate-float3" />
      </div>
      <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10">
        <div className="relative w-full flex flex-col items-center">
          {/* Animated Globe with Orbit and Sparkles */}
          <div className="relative mb-8" style={{ width: size, height: size }}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}> 
              <defs>
                <radialGradient id="globeGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0a2240" stopOpacity="1" />
                </radialGradient>
                <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="10" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="orbitGlow" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              {/* Globe */}
              <circle cx={cx} cy={cy} r={r} fill="url(#globeGradient)" filter="url(#glow)" />
              {/* Orbit with glowing path */}
              <circle cx={cx} cy={cy} r={r} fill="none" stroke="url(#orbitGlow)" strokeWidth="7" strokeDasharray="12 10" opacity="0.8" filter="url(#glow)" />
              {/* World map dots (subtle) */}
              <circle cx={cx-30} cy={cy-40} r={2} fill="#fff" opacity="0.3" />
              <circle cx={cx+50} cy={cy+20} r={2.5} fill="#fff" opacity="0.2" />
              <circle cx={cx-60} cy={cy+30} r={1.5} fill="#fff" opacity="0.2" />
              <circle cx={cx+20} cy={cy-60} r={2} fill="#fff" opacity="0.15" />
              {/* Sparkles */}
              {sparkles}
              {/* Animated ambulance */}
              <g style={{ transform: `translate(${ambX}px,${ambY}px)` }}>
                <rect width="36" height="36" rx="8" fill="#fff" stroke="#3b82f6" strokeWidth="2" />
                <rect x="6" y="10" width="24" height="12" rx="4" fill="#3b82f6" />
                <rect x="10" y="14" width="8" height="6" rx="2" fill="#fff" />
                <circle cx="12" cy="28" r="3" fill="#0a2240" />
                <circle cx="24" cy="28" r="3" fill="#0a2240" />
                <rect x="24" y="10" width="6" height="6" rx="2" fill="#60a5fa" />
                <rect x="16" y="6" width="4" height="4" rx="1" fill="#fbbf24" />
              </g>
            </svg>
            {/* 203+ badge, floating and bobbing */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[#3b82f6] text-white px-6 py-2 rounded-full shadow-lg text-xl font-bold border-4 border-white animate-bob z-20">
              203+ times around the world
            </div>
          </div>
          {/* Huge Odometer Number */}
          <div className="text-[3.5rem] md:text-[5rem] font-extrabold tracking-tight text-white drop-shadow-lg mb-2 animate-pulse">
            {display.toLocaleString()}
          </div>
          <div className="text-2xl md:text-3xl font-bold text-blue-100 mb-6">Miles Driven</div>
          <div className="text-lg md:text-xl text-blue-100 mb-2 text-center max-w-2xl">
            Our fleet has driven enough miles to circle the globe more than <span className="text-[#fff] font-bold">203</span> times!
          </div>
          <div className="text-base md:text-lg text-blue-200 text-center max-w-2xl mt-4">
            That's like driving to the moon and back <span className="font-bold">10 times</span>, or around the UK <span className="font-bold">1,200 times</span>.<br />
            Every mile, a journey of care.
          </div>
        </div>
      </div>
    </section>
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
          {/* Miles Driven with dramatic, creative section */}
          <MilesDrivenCreative />
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
      style={{ left: `calc(${pos}% - 1.5rem)`, transform: 'scaleX(-1)' }}
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
