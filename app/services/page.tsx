import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <main>
      {/* Header Banner */}
      <div className="bg-[#0a2240] text-white py-16 relative">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          </div>
          <div className="md:w-1/2 relative h-[200px] md:h-[300px] mt-6 md:mt-0">
            <Image src="/images/service-header.jpg" alt="BEARS Service" fill className="object-cover rounded-lg" />
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title="High Dependance"
            description="The transportation of critically ill patients who require specialist care during their journey to and from hospital."
            iconColor="blue"
            href="/services/high-dependance"
          />

          <ServiceCard
            title="Specialist Critical Retrieval Response Service"
            description="An intensive care service, transporting critically ill children from local hospitals to intensive care units"
            iconColor="blue"
            href="/services/specialist-critical-retrieval-response-service"
          />

          <ServiceCard
            title="ECMO - Extracorporeal Membrane Oxygenation"
            description="At BEARS, we are proud to offer a specialised ECMO (Extracorporeal Membrane Oxygenation) Service, delivering advanced life-support transportation solutions for patients with severe respiratory or cardiac failure across the UK."
            iconColor="purple"
            href="/services/extracorporeal-membrane-oxygenation"
          />

          <ServiceCard
            title="Mental Health Service"
            description="At BEARS, we recognise the importance of specialised care and support for individuals requiring time critical and non-emergency transport due to mental health challenges."
            iconColor="green"
            href="/services/mental-health-service"
          />

          <ServiceCard
            title="Non Emergency Patient Transport Service (NEPTS)"
            description="At BEARS, we specialise in providing reliable and compassionate Non-Emergency Patient Transport (NEPT) services across the UK."
            iconColor="green"
            href="/services/non-emergency-patient-transport-service"
          />

          <ServiceCard
            title="Bariatric Service"
            description="At BEARS, we understand the unique challenges and specialised care required for the transportation of bariatric patients."
            iconColor="yellow"
            href="/services/bariatric-service"
          />

          <ServiceCard
            title="Paramedic Service"
            description="At BEARS, we understand that some patients require specialised care and support during transportation."
            iconColor="red"
            href="/services/paramedic-service"
          />

          <ServiceCard
            title="Neonatal and Paediatric intensive care transfer service"
            description="At BEARS, we recognise the critical nature of medical transportation for neonatal and Paediatric patients requiring urgent care and specialised support."
            iconColor="pink"
            href="/services/neonatal-and-paediatric-intensive-care-transfer-service"
          />

          <ServiceCard
            title="BEARS Clinical Helpline"
            description="At BEARS, we Strive to support our staff and provide 24/7 access to clinical support through our clinical help line."
            iconColor="gray"
            href="/services/bears-clinical-helpline"
          />
        </div>
      </div>
    </main>
  )
}

interface ServiceCardProps {
  title: string
  description: string
  iconColor: "blue" | "green" | "purple" | "yellow" | "red" | "pink" | "gray"
  href: string
}

function ServiceCard({ title, description, iconColor, href }: ServiceCardProps) {
  const getColorClasses = () => {
    switch (iconColor) {
      case "blue":
        return "bg-blue-100"
      case "green":
        return "bg-green-100"
      case "purple":
        return "bg-purple-100"
      case "yellow":
        return "bg-yellow-100"
      case "red":
        return "bg-red-100"
      case "pink":
        return "bg-pink-100"
      case "gray":
        return "bg-gray-100"
      default:
        return "bg-blue-100"
    }
  }

  const getIconColorClasses = () => {
    switch (iconColor) {
      case "blue":
        return "text-blue-500"
      case "green":
        return "text-green-500"
      case "purple":
        return "text-purple-500"
      case "yellow":
        return "text-yellow-500"
      case "red":
        return "text-red-500"
      case "pink":
        return "text-pink-500"
      case "gray":
        return "text-gray-500"
      default:
        return "text-blue-500"
    }
  }

  return (
    <Link href={href} className="block bg-white border border-gray-200 rounded-lg p-6 transition-all hover:shadow-md">
      <div className={`w-12 h-12 rounded-full ${getColorClasses()} flex items-center justify-center mb-4`}>
        <svg
          className={`w-6 h-6 ${getIconColorClasses()}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <h3 className="text-xl font-bold text-[#0a2240] mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </Link>
  )
}
