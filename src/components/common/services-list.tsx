
import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../language-provider'
import { SERVICE_ROUTES } from '../../config/constants'

interface ServicesListProps {
  title?: string
  className?: string
  excludeService?: string
}

export default function ServicesList({ title, className, excludeService }: ServicesListProps) {
  const { t } = useLanguage()

  const services = [
    { key: 'nepts', route: SERVICE_ROUTES.nepts, titleKey: 'services.nepts.title' },
    { key: 'bariatric', route: SERVICE_ROUTES.bariatric, titleKey: 'services.bariatric.title' },
    { key: 'critical-retrieval', route: SERVICE_ROUTES.criticalRetrieval, titleKey: 'services.criticalRetrieval.title' },
    { key: 'ecmo', route: SERVICE_ROUTES.ecmo, titleKey: 'services.ecmo.title' },
    { key: 'high-dependance', route: SERVICE_ROUTES.highDependance, titleKey: 'services.highDependance.title' },
    { key: 'mental-health', route: SERVICE_ROUTES.mentalHealth, titleKey: 'services.mentalHealth.title' },
    { key: 'neonatal', route: SERVICE_ROUTES.neonatal, titleKey: 'services.neonatal.title' },
    { key: 'paramedic', route: SERVICE_ROUTES.paramedic, titleKey: 'services.paramedic.title' }
  ].filter(service => service.key !== excludeService)

  return (
    <div className={className}>
      {title && (
        <h3 className="text-lg font-bold text-[#0a2240] mb-4">{title}</h3>
      )}
      <ul className="space-y-2 text-sm">
        {services.map((service) => (
          <li key={service.key}>
            <Link to={service.route} className="text-[#4285f4] hover:underline">
              {t(service.titleKey, service.key)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
