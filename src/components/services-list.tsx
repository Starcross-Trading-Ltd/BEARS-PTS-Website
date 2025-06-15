
import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from './language-provider'

const SERVICES = [
  { key: "highDependance", path: "/services/high-dependance" },
  { key: "specialistCritical", path: "/services/critical-retrieval" },
  { key: "ecmo", path: "/services/ecmo" },
  { key: "mentalHealth", path: "/services/mental-health" },
  { key: "nepts", path: "/services/nepts" },
  { key: "bariatric", path: "/services/bariatric" },
  { key: "paramedic", path: "/services/paramedic" },
  { key: "neonatal", path: "/services/neonatal" }
] as const

interface ServicesListProps {
  title?: string
  className?: string
}

export const ServicesList: React.FC<ServicesListProps> = ({ 
  title,
  className = "" 
}) => {
  const { t } = useLanguage()

  return (
    <div className={className}>
      {title && (
        <h3 className="text-lg font-bold text-[#0a2240] mb-3">{title}</h3>
      )}
      <ul className="space-y-2 text-sm">
        {SERVICES.map(({ key, path }) => (
          <li key={key}>
            <Link 
              to={path} 
              className="text-[#4285f4] hover:underline transition-colors"
            >
              {t(`serviceNames.${key}`, key)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ServicesList
