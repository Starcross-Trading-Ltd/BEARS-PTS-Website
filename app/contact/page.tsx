"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-primary mb-8">{t("contactUsTitle", "Contact Us")}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">{t("getInTouchTitle", "Get in Touch")}</h2>
          <p className="text-gray-700 mb-8">
            {t(
              "getInTouchDescription",
              "We're here to answer any questions you may have about our services. Reach out to us and we'll respond as soon as we can.",
            )}
          </p>

          <div className="space-y-4">
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-secondary mt-1 mr-3" />
              <div>
                <h3 className="font-medium">{t("phoneTitle", "Phone")}</h3>
                <p className="text-gray-700">01234 567890</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="h-5 w-5 text-secondary mt-1 mr-3" />
              <div>
                <h3 className="font-medium">{t("emailTitle", "Email")}</h3>
                <p className="text-gray-700">info@bears-pts.co.uk</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-secondary mt-1 mr-3" />
              <div>
                <h3 className="font-medium">{t("addressTitle", "Address")}</h3>
                <p className="text-gray-700">
                  {t("bearsAddress", "BEARS Patient Transport Service")}
                  <br />
                  123 Medical Street
                  <br />
                  London, UK
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">{t("sendMessageTitle", "Send us a Message")}</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {t("nameLabel", "Name")}
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {t("emailLabel", "Email")}
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                {t("phoneLabel", "Phone")}
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                {t("messageLabel", "Message")}
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-secondary text-white font-medium rounded hover:bg-opacity-90 transition-colors"
            >
              {t("sendMessage", "Send Message")}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
