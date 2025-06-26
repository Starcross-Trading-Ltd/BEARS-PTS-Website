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
    <footer className="bg-[#0a2240] text-white py-12 border-t border-blue-900/20" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-extrabold mb-4 tracking-tight">{COMPANY_INFO.name}</h3>
            <p className="text-gray-300 text-base mb-2">
              {t("home.heroTitle", "Providing Safety, Comfort and Care in patient transport services.")}
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label={t("footer.facebook", "Facebook")} className="hover:text-blue-400 transition-colors"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg></a>
              <a href="#" aria-label={t("footer.twitter", "Twitter")} className="hover:text-blue-400 transition-colors"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.116 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.21 0-.423-.016-.634A9.936 9.936 0 0 0 24 4.557z"/></svg></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.77 24h20.459C23.208 24 24 23.229 24 22.271V1.723C24 .771 23.208 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.633a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM20.452 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.85-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554V9h3.414v1.561h.049c.476-.899 1.637-1.85 3.37-1.85 3.602 0 4.267 2.37 4.267 5.455v6.286z"/></svg></a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-extrabold mb-4 tracking-tight">{t("footer.quickLinks", "Quick Links")}</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {quickLinks.map(({ label, href }) => (
                  <li key={href}>
                    <Link 
                      to={href} 
                      className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0a2240] rounded text-base"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="text-xl font-extrabold mb-4 tracking-tight">{t("footer.contactInfo", "Contact Info")}</h3>
            <address className="not-italic text-gray-300 space-y-1 text-base">
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
        <div className="border-t border-blue-900/30 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. {t("footer.allRightsReserved", "All rights reserved.")}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
