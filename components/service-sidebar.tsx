import Link from "next/link"

export default function ServiceSidebar() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Our Services</h3>
      <ul className="space-y-2">
        <li>
          <Link href="/services/high-dependance" className="text-[#0a2240] hover:underline">
            High Dependance
          </Link>
        </li>
        <li>
          <Link
            href="/services/specialist-critical-retrieval-response-service"
            className="text-[#0a2240] hover:underline"
          >
            Specialist Critical Retrieval Response Service
          </Link>
        </li>
        <li>
          <Link href="/services/extracorporeal-membrane-oxygenation" className="text-[#0a2240] hover:underline">
            ECMO - Extracorporeal Membrane Oxygenation
          </Link>
        </li>
        <li>
          <Link href="/services/mental-health-service" className="text-[#0a2240] hover:underline">
            Mental Health Service
          </Link>
        </li>
        <li>
          <Link href="/services/non-emergency-patient-transport-service" className="text-[#0a2240] hover:underline">
            Non Emergency Patient Transport Service (NEPTS)
          </Link>
        </li>
        <li>
          <Link href="/services/bariatric-service" className="text-[#0a2240] hover:underline">
            Bariatric Service
          </Link>
        </li>
        <li>
          <Link href="/services/paramedic-service" className="text-[#0a2240] hover:underline">
            Paramedic Service
          </Link>
        </li>
        <li>
          <Link
            href="/services/neonatal-and-paediatric-intensive-care-transfer-service"
            className="text-[#0a2240] hover:underline"
          >
            Neonatal and Paediatric intensive care transfer service
          </Link>
        </li>
        <li>
          <Link href="/services/bears-clinical-helpline" className="text-[#0a2240] hover:underline">
            BEARS Clinical Helpline
          </Link>
        </li>
      </ul>
    </div>
  )
}
