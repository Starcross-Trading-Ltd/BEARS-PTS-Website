
import React from 'react'
import { Container } from './container'
import { Section } from './section'

interface PageHeaderProps {
  title: string
  description?: string
  image?: string
  imageAlt?: string
}

export function PageHeader({ title, description, image, imageAlt }: PageHeaderProps) {
  return (
    <Section variant="dark" size="md">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            {description && (
              <p className="text-xl text-gray-300">{description}</p>
            )}
          </div>
          {image && (
            <div>
              <img 
                src={image}
                alt={imageAlt || title}
                className="w-full max-w-md mx-auto rounded-lg object-cover"
              />
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}
