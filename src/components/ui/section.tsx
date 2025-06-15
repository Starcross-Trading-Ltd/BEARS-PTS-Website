
import React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  variant?: 'default' | 'gray' | 'dark'
  size?: 'sm' | 'md' | 'lg'
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, variant = 'default', size = 'md', ...props }, ref) => {
    const variants = {
      default: 'bg-white',
      gray: 'bg-gray-50',
      dark: 'bg-[#0a2240] text-white'
    }

    const sizes = {
      sm: 'py-8',
      md: 'py-16',
      lg: 'py-24'
    }

    return (
      <section
        ref={ref}
        className={cn(variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </section>
    )
  }
)

Section.displayName = 'Section'

export { Section }
