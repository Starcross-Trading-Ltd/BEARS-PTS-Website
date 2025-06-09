"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/lib/navigation"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const t = useTranslations("navigation")

  return (
    <footer className="bg-[#0a2240] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BEARS PTS</h3>
            <p className="mb-4">Professional patient transport services across the UK.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/patient-transport" className="hover:underline">
                  Patient Transport
                </Link>
              </li>
              <li>
                <Link href="/services/event-medical" className="hover:underline">
                  Event Medical Cover
                </Link>
              </li>
              <li>
                <Link href="/services/training" className="hover:underline">
                  Medical Training
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <span>123 Main Street, London, UK</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+44 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@bears-pts.co.uk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} BEARS Patient Transport Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
