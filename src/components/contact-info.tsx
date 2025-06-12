
import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from './language-provider'
import { CONTACT_INFO, ROUTES } from '../config/constants'

interface ContactInfoProps {
  showGetInTouchButton?: boolean
  className?: string
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ 
  showGetInTouchButton = false, 
  className = "" 
}) => {
  const { t } = useLanguage()

  return (
    <div className={`bg-white p-6 rounded-lg shadow-lg ${className}`}>
      <h3 className="text-xl font-bold text-[#0a2240] mb-3">
        {t("serviceDetails.contactUs", "Contact Us")}
      </h3>
      <p className="text-gray-700 mb-4">
        {t("serviceDetails.contactDescription", "For more information about our services or to make a booking, please contact our team.")}
      </p>
      <div className="space-y-2 mb-4">
        <p className="text-gray-600">
          <strong>{t("serviceDetails.phone", "Phone:")}</strong>{" "}
          <a href={`tel:${CONTACT_INFO.phone}`} className="text-[#4285f4] hover:underline">
            {CONTACT_INFO.phone}
          </a>
        </p>
        <p className="text-gray-600">
          <strong>{t("serviceDetails.email", "Email:")}</strong>{" "}
          <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#4285f4] hover:underline">
            {CONTACT_INFO.email}
          </a>
        </p>
      </div>
      {showGetInTouchButton && (
        <Link 
          to={ROUTES.contact}
          className="inline-block px-6 py-3 bg-[#00855a] text-white font-medium rounded hover:bg-[#006e4a] transition-colors"
        >
          {t("serviceDetails.getInTouch", "Get in touch")}
        </Link>
      )}
    </div>
  )
}

export default ContactInfo
