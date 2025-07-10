import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../language-provider'

// SVGs for floating icons
const icons = [
  <svg key="cross" width="32" height="32" viewBox="0 0 32 32" className="text-blue-500"><rect x="13" y="5" width="6" height="22" rx="3" fill="currentColor"/><rect x="5" y="13" width="22" height="6" rx="3" fill="currentColor"/></svg>,
  // Floating bear image
  <img key="bear-waving" src="/images/Bear_waving-1.png" alt="Waving Bear" width={96} height={96} className="object-contain -translate-y-6" />, 
  // Replace stethoscope icon with SVG from stethoscope-svgrepo-com.svg
  <svg key="stethoscope" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-500"><g id="SVGRepo_iconCarrier"> <path d="M5 4H4C3.44772 4 3 4.44772 3 5V9C3 11.7614 5.23858 14 8 14V14C10.7614 14 13 11.7614 13 9V5C13 4.44772 12.5523 4 12 4H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M8 14V15.5C8 18.5376 10.4624 21 13.5 21V21C16.5376 21 19 18.5376 19 15.5V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M10 3V5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M6 3V5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <circle cx="19" cy="12" r="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g></svg>
]

export default function HeroSection() {
  const { t } = useLanguage()
  // Track animation direction for ambulance
  const [facingRight, setFacingRight] = React.useState(true);
  const directionRef = React.useRef(true);
  React.useEffect(() => {
    const ambulance = document.querySelector('.animate-ambulance-on-ecg');
    if (!ambulance) return;
    const handle = () => {
      directionRef.current = !directionRef.current;
      setFacingRight(directionRef.current);
    };
    ambulance.addEventListener('animationiteration', handle);
    return () => ambulance.removeEventListener('animationiteration', handle);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-green-50 to-white">
      {/* Floating medical icons */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 animate-float-slow">{icons[0]}</div>
        <div className="absolute top-1/2 left-1/4 animate-float-medium">{icons[1]}</div>
        <div className="absolute bottom-10 right-10 animate-float-fast">{icons[2]}</div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full min-h-[500px] lg:pr-0">
          <div className="z-10">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#0a2240] mb-10 leading-tight drop-shadow-md"
              dangerouslySetInnerHTML={{ __html: t("home.hero.title", "Providing Safety,<br />Comfort and<br />Care") }}
            />
            <p className="text-2xl text-[#334155] mb-12 max-w-2xl drop-shadow-sm">
              {t("home.hero.description", "We provide a high quality ambulance service taking great care and pride in our work with the highest priority on transporting patients with SAFETY, COMFORT and CARE.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <Link 
                to="/contact"
                className="inline-block px-10 py-4 bg-[#388e6c] text-white text-xl font-semibold rounded-lg shadow hover:bg-[#2e7358] transition-colors text-center animate-pulse"
              >
                {t("home.hero.cta.primary", "Get in touch")}
              </Link>
              <Link 
                to="/about"
                className="inline-block px-10 py-4 border-2 border-primary text-primary text-xl font-semibold rounded-lg shadow hover:bg-primary hover:text-white transition-colors text-center"
              >
                {t("home.hero.cta.secondary", "Learn more")}
              </Link>
            </div>
          </div>
          {/* Move ambulance and ECG line up to align with title */}
          <div className="relative flex flex-col items-center justify-center h-[350px] w-full mt-[-60px]">
            {/* ECG line */}
            <svg
              viewBox="0 0 600 100"
              width="100%"
              height="100"
              className="relative animate-ecg-line"
              style={{ zIndex: 1 }}
            >
              <polyline
                fill="none"
                stroke="#ff1a1a"
                strokeWidth="4"
                strokeLinejoin="round"
                points="0,80 40,80 60,75 70,80 90,80 100,60 110,80 120,20 130,80 140,60 150,80 180,80 200,75 210,80 230,80 240,60 250,80 260,20 270,80 280,60 290,80 320,80 340,75 350,80 370,80 380,60 390,80 400,20 410,80 420,60 430,80 460,80 480,75 490,80 510,80 520,60 530,80 540,20 550,80 560,60 570,80 600,80"
                className="ecg-path"
              />
            </svg>
            {/* Ambulance */}
            <svg
              width="60"
              height="60"
              viewBox="0 0 36 36"
              aria-hidden="true"
              role="img"
              fill="none"
              className="absolute left-0 top-[32px] animate-ambulance-on-ecg"
              style={{ zIndex: 2, transform: facingRight ? 'scaleX(1)' : 'scaleX(-1)' }}
            >
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
        </div>
      </div>
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes ambulance-on-ecg {
          0% { left: 0; }
          100% { left: 80%; }
        }
        .animate-ambulance-on-ecg {
          animation: ambulance-on-ecg 6s linear infinite alternate-reverse;
        }
        @keyframes ecg-line {
          0% { stroke-dashoffset: 1800; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-ecg-line .ecg-path {
          stroke-dasharray: 1800;
          stroke-dashoffset: 1800;
          animation: ecg-line 1.5s linear forwards infinite;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-24px); }
        }
        .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-32px); }
        }
        .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }
      `}</style>
    </section>
  )
}
