import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right' | 'top';
  bgColor?: string; // e.g. '#0a2240' or '#388e6c'
  children?: React.ReactNode;
}

export default function HeroSection({
  title,
  subtitle,
  image,
  imageAlt,
  imagePosition = 'right',
  bgColor = '#7DA779',
  children,
}: HeroSectionProps) {
  // Layout logic
  const isImageLeft = imagePosition === 'left';
  const isImageTop = imagePosition === 'top';

  return (
    <section
      className={`relative text-white py-20 overflow-hidden`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Subtle abstract wave SVG overlay at the bottom, full viewport width */}
      <div className="absolute left-0 right-0 bottom-0 w-screen z-0 pointer-events-none" style={{ height: '120px', minWidth: '100vw' }} aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 1920 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,60 C480,140 1440,0 1920,80 L1920,120 L0,120 Z"
            fill="#fff"
            fillOpacity="0.10"
          />
          <path
            d="M0,100 C533,60 1387,180 1920,40 L1920,120 L0,120 Z"
            fill="#fff"
            fillOpacity="0.07"
          />
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`flex flex-col ${
            isImageTop
              ? ''
              : 'md:flex-row md:items-center md:gap-12'
          }`}
        >
          {/* Image (left or top) */}
          {image && (isImageLeft || isImageTop) && (
            <div className={`flex-shrink-0 mb-8 md:mb-0 ${isImageLeft ? 'md:mr-12' : ''} flex flex-col items-center w-full md:w-auto`}>
              <img
                src={image}
                alt={imageAlt || ''}
                className="w-full max-w-md h-auto object-contain rounded-xl shadow-lg bg-white/10 p-2"
              />
            </div>
          )}
          {/* Text Content */}
          <div className={`flex-1 text-center ${!isImageTop ? 'md:text-left' : ''}`}>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
              {title}
            </h1>
            {subtitle && (
              <p className="text-2xl text-gray-200 max-w-3xl mb-6 drop-shadow-md mx-auto md:mx-0">
                {subtitle}
              </p>
            )}
            {children}
          </div>
          {/* Image (right) */}
          {image && !isImageLeft && !isImageTop && (
            <div className="flex-shrink-0 mt-8 md:mt-0 md:ml-12 flex flex-col items-center w-full md:w-auto">
              <img
                src={image}
                alt={imageAlt || ''}
                className="w-full max-w-md h-auto object-contain rounded-xl shadow-lg bg-white/10 p-2"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 