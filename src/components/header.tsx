
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useLanguage } from './language-provider'
import LanguageSelector from './language-selector'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const { t } = useLanguage()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const services = [
    { title: t("serviceNames.nepts", "NEPTS"), link: "/services/nepts" },
    { title: t("serviceNames.paramedic", "Paramedic Service"), link: "/services/paramedic" },
    { title: t("serviceNames.bariatric", "Bariatric Service"), link: "/services/bariatric" },
    { title: t("navigation.criticalRetrieval", "Critical Care Retrieval"), link: "/services/critical-retrieval" },
    { title: t("serviceNames.ecmo", "ECMO Service"), link: "/services/ecmo" },
    { title: t("serviceNames.highDependance", "High Dependance"), link: "/services/high-dependance" },
    { title: t("serviceNames.mentalHealth", "Mental Health Service"), link: "/services/mental-health" },
    { title: t("serviceNames.neonatal", "Neonatal Transport"), link: "/services/neonatal" }
  ]

  const aboutPages = [
    { title: t("navigation.aboutUs", "About Us"), link: "/about" },
    { title: t("about.meetTeam", "Meet the Team"), link: "/team" },
    { title: t("about.meetCubs", "Meet the Cubs"), link: "/cubs" },
    { title: t("about.ourFleet", "Our Fleet"), link: "/fleet" }
  ]

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/images/bears-logo.png" alt="BEARS Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#0a2240] font-medium">
              {t("navigation.home", "Home")}
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-[#0a2240] font-medium"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {t("navigation.services", "Our Services")} <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="py-2">
                    <Link to="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">{t("navigation.allServices", "All Services")}</Link>
                    {services.map((service, index) => (
                      <Link 
                        key={index}
                        to={service.link} 
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/careers" className="text-gray-700 hover:text-[#0a2240] font-medium">
              {t("navigation.joinUs", "Join Us")}
            </Link>
            
            {/* About Us Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-[#0a2240] font-medium"
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
              >
                {t("navigation.aboutUs", "About Us")} <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isAboutOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md z-50"
                  onMouseEnter={() => setIsAboutOpen(true)}
                  onMouseLeave={() => setIsAboutOpen(false)}
                >
                  <div className="py-2">
                    {aboutPages.map((page, index) => (
                      <Link 
                        key={index}
                        to={page.link} 
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                      >
                        {page.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/compliments" className="text-gray-700 hover:text-[#0a2240] font-medium">
              {t("navigation.compliments", "Compliments")}
            </Link>
            <Link to="/news" className="text-gray-700 hover:text-[#0a2240] font-medium">
              {t("navigation.news", "News")}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#0a2240] font-medium">
              {t("navigation.contact", "Contact Us")}
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-[#0a2240]"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-[#0a2240] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navigation.home", "Home")}
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-[#0a2240] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navigation.services", "Our Services")}
              </Link>
              <Link
                to="/careers"
                className="text-gray-700 hover:text-[#0a2240] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navigation.joinUs", "Join Us")}
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-[#0a2240] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navigation.about", "About")}
              </Link>
              <Link
                to="/team"
                className="text-gray-700 hover:text-[#0a2240] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("about.meetTeam", "Meet the Team")}
              </Link>
              <Link
                to="/cubs"
                className="text-gray-700 hover:text-[#0a2240] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("about.meetCubs", "Meet the Cubs")}
              </Link>
              <Link
                to="/fleet"
                className="text-gray-700 hover:text-[#0a2240] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("about.ourFleet", "Our Fleet")}
              </Link>
              <Link
                to="/compliments"
                className="text-gray-700 hover:text-[#0a2240] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navigation.compliments", "Compliments")}
              </Link>
              <Link
                to="/news"
                className="text-gray-700 hover:text-[#0a2240] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navigation.news", "News")}
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-[#0a2240] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navigation.contact", "Contact")}
              </Link>
              <div className="pt-2">
                <LanguageSelector />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
