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

  const legalLinks = [
    { label: "Terms & Conditions", href: '/terms-and-conditions' },
    { label: "Modern Slavery", href: '/documents/BEARS-Modern-Slavery-Statement.pdf', external: true },
    { label: "Carbon Reduction Plan", href: '/documents/BEARS_Carbon_Reduction_Plan___03_04_25.pdf', external: true },
    { label: "Patient Survey", href: '/patient-survey' },
  ]

  return (
    <footer className="bg-blue-900 text-white py-12 border-t border-green-900/20" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          <div>
            <h3 className="text-xl font-extrabold mb-4 tracking-tight">{COMPANY_INFO.name}</h3>
            <p className="text-gray-300 text-base mb-2">
              {t("home.heroTitle", "Providing Safety, Comfort and Care in patient transport services.")}
            </p>
            <img 
              src="/CQC Cert.png" 
              alt="CQC Certificate" 
              className="ml-7 mt-4 mb-2 max-w-[180px] w-full h-auto rounded shadow-lg bg-white/80 p-2"
            />
          </div>
          <div>
            <h3 className="text-xl font-extrabold mb-4 tracking-tight">{t("footer.quickLinks", "Quick Links")}</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {quickLinks.map(({ label, href }) => (
                  <li key={href}>
                    <Link 
                      to={href} 
                      className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-dark rounded text-base"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="text-xl font-extrabold mb-4 tracking-tight">Legal</h3>
            <nav aria-label="Footer legal links">
              <ul className="space-y-2">
                {legalLinks.map(({ label, href, external }) => (
                  <li key={href}>
                    {external ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-dark rounded text-base"
                      >
                        {label}
                      </a>
                    ) : (
                      <Link
                        to={href}
                        className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-dark rounded text-base"
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="text-xl font-extrabold mb-4 tracking-tight">Company Details</h3>
            <div className="space-y-2 text-gray-300 text-base">
              <div>
                <span className="font-medium">Trading Number:</span><br />
                <span>12345678</span>
              </div>
              <div>
                <span className="font-medium">Address:</span><br />
                <span>London, United Kingdom</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-extrabold mb-4 tracking-tight">{t("footer.contactInfo", "Contact Info")}</h3>
            <address className="not-italic text-gray-300 space-y-1 text-base">
              <p>
                {t("footer.phone", "Phone")}: 
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="ml-1 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-dark rounded"
                >
                  {CONTACT_INFO.phone}
                </a>
              </p>
              <p>
                {t("footer.email", "Email")}: 
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="ml-1 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-dark rounded"
                >
                  {CONTACT_INFO.email}
                </a>
              </p>
            </address>
          </div>
        </div>
        <div className="border-t border-green-900/30 mt-12 pt-8 text-center">
          <p className="text-2xl md:text-3xl font-extrabold text-white mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Protecting our future, one patient at a time.
          </p>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. {t("footer.allRightsReserved", "All rights reserved.")}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
