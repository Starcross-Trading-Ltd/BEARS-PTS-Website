
import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from './language-provider'
import { CONTACT_INFO, COMPANY_INFO, ROUTES } from '../config/constants'

const Footer: React.FC = () => {
  const { t } = useLanguage()

  const quickLinks = [
    { label: t("navigation.home", "Home"), href: ROUTES.home },
    { label: t("navigation.about", "About"), href: ROUTES.about },
    { label: t("navigation.services", "Services"), href: ROUTES.services },
    { label: t("navigation.contact", "Contact"), href: ROUTES.contact },
    { label: t("navigation.careers", "Careers"), href: ROUTES.careers },
  ]

  return (
    <footer className="bg-[#0a2240] text-white py-8" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{COMPANY_INFO.name}</h3>
            <p className="text-gray-300">
              {t("home.heroTitle", "Providing Safety, Comfort and Care in patient transport services.")}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.quickLinks", "Quick Links")}</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {quickLinks.map(({ label, href }) => (
                  <li key={href}>
                    <Link 
                      to={href} 
                      className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0a2240] rounded"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.contactInfo", "Contact Info")}</h3>
            <address className="not-italic text-gray-300 space-y-1">
              <p>
                {t("footer.phone", "Phone")}: 
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="ml-1 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0a2240] rounded"
                >
                  {CONTACT_INFO.phone}
                </a>
              </p>
              <p>
                {t("footer.email", "Email")}: 
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="ml-1 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0a2240] rounded"
                >
                  {CONTACT_INFO.email}
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. {t("footer.allRightsReserved", "All rights reserved.")}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
