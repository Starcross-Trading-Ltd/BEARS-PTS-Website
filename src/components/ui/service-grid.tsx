
import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Service {
  title: string
  description: string
  link: string
  color: string
}

interface ServiceGridProps {
  services: Service[]
  className?: string
}

const getColorClasses = (color: string) => {
  const colorMap = {
    blue: 'border-l-4 border-blue-500',
    purple: 'border-l-4 border-purple-500',
    green: 'border-l-4 border-green-500',
    orange: 'border-l-4 border-orange-500',
    red: 'border-l-4 border-red-500',
    pink: 'border-l-4 border-pink-500',
    gray: 'border-l-4 border-gray-500'
  }
  return colorMap[color as keyof typeof colorMap] || 'border-l-4 border-blue-500'
}

export function ServiceGrid({ services, className }: ServiceGridProps) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6', className)}>
      {services.map((service, index) => (
        <div 
          key={index} 
          className={cn(
            'bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow',
            getColorClasses(service.color)
          )}
        >
          <h3 className="text-lg font-bold text-[#0a2240] mb-3">{service.title}</h3>
          <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
          <Link 
            to={service.link}
            className="inline-flex items-center text-[#4285f4] hover:underline text-sm"
          >
            Learn more <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      ))}
    </div>
  )
}
