import React, { useRef, useEffect } from 'react';

// List of banner images (add/remove as needed)
const bannerImages = [
  '/images/banner/spinner_one.png',
  '/images/banner/spinner_two.png',
  '/images/banner/spinner_three.png',
  '/images/banner/spinner_four.png',
  '/images/banner/spinner_five.png',
  '/images/banner/spinner_six.png',
  '/images/banner/spinner_seven.png',
  '/images/banner/spinner_eight.png',
  '/images/banner/spinner_nine.png',
  '/images/banner/spinner_ten.png',
  '/images/banner/spinner_eleven.png',
  '/images/banner/spinner_twelve.png',
  '/images/banner/spinner_thirteen.png',
  '/images/banner/spinner_fourteen.png',
  '/images/banner/spinner_fifteen.png',
  '/images/banner/spinner_sixteen.png',
  '/images/banner/spinner_seventeen.png',
  '/images/banner/kent_medway.png',
  '/images/banner/sussex.png',
];

const Banner: React.FC = () => {
  const ribbonRef = useRef<HTMLDivElement>(null);

  // Duplicate images for seamless loop
  const images = [...bannerImages, ...bannerImages];

  useEffect(() => {
    const ribbon = ribbonRef.current;
    if (!ribbon) return;
    let animationFrame: number;
    let pos = 0;
    const speed = 1; // px per frame
    const animate = () => {
      pos -= speed;
      if (Math.abs(pos) >= ribbon.scrollWidth / 2) {
        pos = 0;
      }
      ribbon.style.transform = `translateX(${pos}px)`;
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="w-full flex justify-center items-center bg-gradient-to-r from-blue-100 via-green-100 to-white py-4 border-t border-b border-primary/20 overflow-hidden">
      <div className="relative w-full max-w-6xl h-32 flex items-center overflow-hidden">
        <div
          ref={ribbonRef}
          className="flex items-center gap-8"
          style={{ willChange: 'transform' }}
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Banner ${idx % bannerImages.length + 1}`}
              className="h-28 w-auto object-contain rounded-xl shadow-lg"
              draggable={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner; 