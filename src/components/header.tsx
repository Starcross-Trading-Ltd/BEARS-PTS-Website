import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Star, Facebook, Twitter, Linkedin } from 'lucide-react'
import { useLanguage } from './language-provider'
import LanguageSelector from './language-selector'
import { ROUTES, SERVICE_ROUTES } from '../config/constants'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const { t } = useLanguage()
  const location = useLocation()

  const navigationItems = [
    { label: t("navigation.home", "Home"), href: ROUTES.home },
    { 
      label: t("navigation.about", "About"), 
      href: ROUTES.about,
      submenu: [
        { label: t("navigation.meetTheTeam", "Meet the BEARS"), href: "/team" },
        { label: t("navigation.meetTheCubs", "Meet the Cubs"), href: "/cubs" },
        { label: t("navigation.ourValues", "Our Values"), href: "/our-values" },
        { label: t("navigation.ourFleet", "Our Fleet"), href: "/fleet" },
        { label: t("navigation.bearsInNumbers", "BEARS in Numbers"), href: "/bears-in-numbers" },
        { label: t("navigation.compliments", "Compliments"), href: "/compliments" },
        { label: t("navigation.news", "News"), href: ROUTES.news }
      ]
    },
    { 
      label: t("navigation.services", "Services"), 
      href: ROUTES.services,
      submenu: [
        { label: t("services.nepts.title", "NEPTS"), href: SERVICE_ROUTES.nepts },
        { label: t("services.paramedic.title", "Paramedic Service"), href: SERVICE_ROUTES.paramedic },
        { label: t("services.bariatric.title", "Bariatric Service"), href: SERVICE_ROUTES.bariatric },
        { label: t("services.criticalRetrieval.title", "Critical Care Retrieval"), href: SERVICE_ROUTES.criticalRetrieval },
        { label: t("services.ecmo.title", "ECMO Service"), href: SERVICE_ROUTES.ecmo },
        { label: t("services.highDependance.title", "High Dependance"), href: SERVICE_ROUTES.highDependance },
        { label: t("services.mentalHealth.title", "Mental Health Transport"), href: SERVICE_ROUTES.mentalHealth },
        { label: t("services.neonatal.title", "Neonatal Transport"), href: SERVICE_ROUTES.neonatal }
      ]
    },
    { label: t("navigation.contact", "Contact"), href: ROUTES.contact },
    { label: t("navigation.careers", "Careers"), href: ROUTES.careers },
    { label: t("navigation.book", "Book"), href: "/bookings" },
  ]

  const isActive = (href: string) => {
    if (href === '/' && location.pathname === '/') return true
    if (href !== '/' && location.pathname.startsWith(href)) return true
    return false
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100" role="banner">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-primary rounded"
            aria-label="BEARS - Home"
          >
            <div className="bg-white rounded-full shadow-lg flex items-center justify-center w-12 h-12 border-2 border-gray-100">
              <img 
                src="/images/bears-pts logo.jpg" 
                alt="BEARS Logo" 
                className="w-10 h-10 object-contain rounded-full"
              />
            </div>
            <span className="ml-3 text-xl font-bold text-gray-900">BEARS PTS</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.href} className="relative group">
                <div className="flex items-center">
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary ${
                      item.label === t("navigation.book", "Book")
                        ? 'bg-[#388e6c] text-white shadow-sm hover:bg-[#2e7358] focus:ring-[#388e6c] px-4 py-2'
                        : isActive(item.href)
                        ? 'text-[#388e6c] bg-green-50'
                        : 'text-gray-700 hover:text-[#388e6c] hover:bg-green-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <ChevronDown className="ml-1 h-3 w-3 text-gray-400 group-hover:text-[#388e6c] transition-colors" />
                  )}
                </div>
                {/* Submenu */}
                {item.submenu && (
                  <div className="absolute left-0 mt-1 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-200">
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className="block px-3 py-2 text-base text-gray-700 hover:bg-green-50 hover:text-[#388e6c] rounded-md transition-all"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Media Links */}
            <div className="flex items-center space-x-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-gray-500 hover:text-blue-400 hover:bg-blue-50 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-gray-500 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            
            {/* BEARS PRESTIGE */}
            <a
              href="https://bearsprestige.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-black text-amber-400 rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200"
            >
              <span className="text-base font-semibold tracking-wide" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                BEARS‑PRESTIGE
              </span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 hover:text-[#388e6c] hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>
        {/* Mobile Navigation */}
        {isMenuOpen && (
        <div className="md:hidden py-4 border-t bg-white/95 shadow-lg rounded-b-xl animate-fade-in-down">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <div key={item.href}>
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.href}
                      onClick={item.submenu ? undefined : toggleMenu}
                      className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all flex-1 ${
                        item.label === t("navigation.book", "Book")
                          ? 'bg-[#388e6c] text-white shadow-lg hover:bg-[#2e7358] focus:ring-[#388e6c] px-7 py-4 text-xl'
                          : isActive(item.href)
                          ? 'text-primary bg-green-50 shadow-sm'
                          : 'text-gray-700 hover:text-primary hover:bg-green-50/60'
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.submenu && (
                      <button
                        onClick={() => {
                          if (item.label === 'About') {
                            setIsAboutDropdownOpen(!isAboutDropdownOpen)
                          }
                        }}
                        className="p-2 text-gray-600"
                      >
                        <ChevronDown className={`h-4 w-4 transition-transform ${
                          (item.label === 'About' && isAboutDropdownOpen) ? 'rotate-180' : ''
                        }`} />
                      </button>
                    )}
                    {/* Mobile submenu */}
                    {item.submenu && (
                      <div className={`ml-4 mt-2 space-y-1 ${
                        item.label === 'About' ? (isAboutDropdownOpen ? 'block' : 'hidden') : 
                        (isActive(item.href) ? 'block' : 'hidden')
                      }`}>
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            onClick={toggleMenu}
                            className="block px-4 py-2 text-base text-gray-600 hover:text-primary hover:bg-green-50 rounded-lg transition-all"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {/* BEARS Prestige right bar for mobile */}
              <a
                href="https://bearsprestige.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full flex items-center justify-center h-16 px-8 bg-black border-l-4 border-yellow-400 shadow-lg hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
                style={{ minWidth: '180px', borderRadius: 0 }}
              >
                <span className="text-yellow-400 text-xl font-extrabold tracking-widest" style={{ letterSpacing: '0.08em' }}>
                  BEARS PRESTIGE
                </span>
              </a>
            </div>
          </div>
        )}
    </header>
  )
}

export default Header
