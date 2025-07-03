import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../language-provider'
import { SERVICE_ROUTES } from '../../config/constants'
import { ChevronRight } from 'lucide-react'

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

  const serviceColors: Record<string, string> = {
    nepts: 'bg-green-500',
    bariatric: 'bg-orange-500',
    'critical-retrieval': 'bg-blue-500',
    ecmo: 'bg-purple-500',
    'high-dependance': 'bg-blue-700',
    'mental-health': 'bg-green-700',
    neonatal: 'bg-pink-500',
    paramedic: 'bg-red-500',
    'clinical-helpline': 'bg-gray-500',
  }

  return (
    <div className={className}>
      {title && (
        <h3 className="text-lg font-bold text-[#0a2240] mb-4">{title}</h3>
      )}
      <nav aria-label="Service navigation">
        <ul className="space-y-1">
          {services.map((service) => (
            <li key={service.key}>
              <Link
                to={service.route}
                className={
                  `group flex items-center justify-between px-4 py-3 rounded-lg bg-white border border-gray-100 hover:bg-blue-50 transition-colors text-base font-medium text-[#0a2240] focus:outline-none focus:ring-2 focus:ring-primary relative`
                }
              >
                <span className={`absolute left-0 top-0 h-full w-1.5 rounded-l ${serviceColors[service.key] || 'bg-blue-500'}`}></span>
                <span className="pl-4 flex-1">{t(service.titleKey, service.key)}</span>
                <ChevronRight className="ml-2 h-5 w-5 text-gray-400 group-hover:text-primary transition" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
