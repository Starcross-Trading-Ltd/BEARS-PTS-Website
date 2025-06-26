import Link from "next/link"
import { useLanguage } from '../src/components/language-provider'

export default function ServiceSidebar() {
  const { t } = useLanguage()
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{t('serviceSidebar.title', 'Our Services')}</h3>
      <ul className="space-y-2">
        <li>
          <Link href="/services/high-dependance" className="text-[#0a2240] hover:underline">
            {t('serviceNames.highDependance', 'High Dependance')}
          </Link>
        </li>
        <li>
          <Link
            href="/services/specialist-critical-retrieval-response-service"
            className="text-[#0a2240] hover:underline"
          >
            {t('serviceNames.specialistCritical', 'Specialist Critical Retrieval Response Service')}
          </Link>
        </li>
        <li>
          <Link href="/services/extracorporeal-membrane-oxygenation" className="text-[#0a2240] hover:underline">
            {t('serviceNames.ecmo', 'ECMO - Extracorporeal Membrane Oxygenation')}
          </Link>
        </li>
        <li>
          <Link href="/services/mental-health-service" className="text-[#0a2240] hover:underline">
            {t('serviceNames.mentalHealth', 'Mental Health Service')}
          </Link>
        </li>
        <li>
          <Link href="/services/non-emergency-patient-transport-service" className="text-[#0a2240] hover:underline">
            {t('serviceNames.nepts', 'Non Emergency Patient Transport Service (NEPTS)')}
          </Link>
        </li>
        <li>
          <Link href="/services/bariatric-service" className="text-[#0a2240] hover:underline">
            {t('serviceNames.bariatric', 'Bariatric Service')}
          </Link>
        </li>
        <li>
          <Link href="/services/paramedic-service" className="text-[#0a2240] hover:underline">
            {t('serviceNames.paramedic', 'Paramedic Service')}
          </Link>
        </li>
        <li>
          <Link
            href="/services/neonatal-and-paediatric-intensive-care-transfer-service"
            className="text-[#0a2240] hover:underline"
          >
            {t('serviceNames.neonatal', 'Neonatal and Paediatric intensive care transfer service')}
          </Link>
        </li>
        <li>
          <Link href="/services/bears-clinical-helpline" className="text-[#0a2240] hover:underline">
            {t('serviceNames.clinicalHelpline', 'BEARS Clinical Helpline')}
          </Link>
        </li>
      </ul>
    </div>
  )
}
