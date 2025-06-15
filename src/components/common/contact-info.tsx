
import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../language-provider'
import { CONTACT_INFO } from '../../config/constants'
import { Button } from '../../components/ui/button'

interface ContactInfoProps {
  showGetInTouchButton?: boolean
  className?: string
}

export default function ContactInfo({ showGetInTouchButton = false, className }: ContactInfoProps) {
  const { t } = useLanguage()

  return (
    <div className={`bg-white p-6 rounded-lg shadow-lg ${className || ''}`}>
      <h3 className="text-lg font-bold text-[#0a2240] mb-4">
        {t("serviceDetails.contactUs", "Contact Us")}
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        {t("serviceDetails.contactDescription", "For more information about our services or to make a booking, please contact our team.")}
      </p>
      <div className="space-y-2 text-sm">
        <p>
          <strong>{t("serviceDetails.phone", "Phone:")}</strong> {CONTACT_INFO.phone}
        </p>
        <p>
          <strong>{t("serviceDetails.email", "Email:")}</strong> {CONTACT_INFO.email}
        </p>
      </div>
      {showGetInTouchButton && (
        <Link to="/contact">
          <Button className="w-full mt-4 bg-[#00855a] hover:bg-[#006e4a]">
            {t("serviceDetails.getInTouch", "Get in touch")}
          </Button>
        </Link>
      )}
    </div>
  )
}
