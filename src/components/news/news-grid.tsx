import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../language-provider'

export default function NewsGrid() {
  const { t } = useLanguage()

  // Parse articles from translation string
  // Format: 'Title|Description,Title|Description,...'
  const itemsRaw = t('news.articles.items', '')
  const articles = itemsRaw
    .split(',')
    .map((item: string, idx: number) => {
      const [title, description] = item.split('|')
      // Fallback images for demo
      const images = [
        '/images/christmas.jpg',
        '/images/neonatal.jpg',
        '/images/neonatal.jpg',
      ]
      return {
        title: title?.trim() || '',
        description: description?.trim() || '',
        image: images[idx % images.length],
        link: '#', // You can update this to real links if available
      }
    })

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#0a2240] mb-8">
          {t('news.articles.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, index: number) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a2240] mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link 
                  to={item.link}
                  className="text-[#4285f4] hover:underline"
                >
                  {t('news.articles.readMore')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
