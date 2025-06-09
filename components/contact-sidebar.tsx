import Link from "next/link"

export default function ContactSidebar() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
      <p className="text-gray-700 mb-4">
        For more information about our High Dependance Service, or to book a transfer, please contact us.
      </p>
      <p className="text-gray-700 mb-4">
        Our team is ready to assist you with all your transport needs. We are here to assist you with all your emergency
        transport needs.
      </p>
      <p className="text-gray-700 mb-4">
        Contact us 24/7 for safe, reliable, and compassionate High Dependance transport services.
      </p>
      <Link
        href="/contact"
        className="inline-block px-6 py-3 bg-[#00855a] text-white font-medium rounded hover:bg-opacity-90 transition-colors"
      >
        Get in touch
      </Link>
    </div>
  )
}
