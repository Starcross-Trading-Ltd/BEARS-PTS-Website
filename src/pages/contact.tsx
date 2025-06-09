
import React from 'react'
import { useLanguage } from '../components/language-provider'

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0a2240] mb-8">
          {t("contact.contactUsTitle", "Contact Us")}
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          {t("contact.getInTouchDescription", "We're here to answer any questions you may have about our services. Reach out to us and we'll respond as soon as we can.")}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-[#0a2240] mb-4">
              {t("contact.getInTouchTitle", "Get in Touch")}
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">{t("contact.phoneTitle", "Phone")}</h3>
                <p className="text-gray-700">+44 123 456 7890</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{t("contact.emailTitle", "Email")}</h3>
                <p className="text-gray-700">info@bearsambulance.com</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{t("contact.addressTitle", "Address")}</h3>
                <p className="text-gray-700">{t("contact.bearsAddress", "BEARS Patient Transport Service")}<br />London, UK</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-[#0a2240] mb-4">
              {t("contact.sendMessageTitle", "Send us a Message")}
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("contact.nameLabel", "Name")}
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4285f4]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("contact.emailLabel", "Email")}
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4285f4]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("contact.messageLabel", "Message")}
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4285f4]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-[#00855a] text-white font-medium rounded hover:bg-[#006e4a] transition-colors"
              >
                {t("contact.sendMessage", "Send Message")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
