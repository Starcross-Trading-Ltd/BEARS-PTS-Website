"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function PartnerLogos() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // List of partner logos
  const logos = [
    { src: "/images/nhs-digital-logo.png", alt: "NHS Digital Logo" },
    { src: "/images/ico-registered-logo.png", alt: "ICO Registered Logo" },
    { src: "/images/iso-certified-logo.png", alt: "ISO Certified Logo" },
    { src: "/images/ukas-logo.png", alt: "UKAS Logo" },
    { src: "/images/cyber-essentials-logo.png", alt: "Cyber Essentials Logo" },
    { src: "/images/fors-logo.png", alt: "FORS Logo" },
    { src: "/images/nhs-guys-logo.png", alt: "NHS Guys Logo" },
    { src: "/images/sprint-logo.png", alt: "Sprint Logo" },
    { src: "/images/evelina-logo.png", alt: "Evelina Logo" },
    { src: "/images/southampton-logo.png", alt: "Southampton Logo" },
  ]

  // Duplicate logos for seamless scrolling
  const allLogos = [...logos, ...logos]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let position = 0

    const scroll = () => {
      if (!scrollContainer) return

      position -= 0.5 // Adjust speed here

      // Reset position when we've scrolled the width of the original set of logos
      if (position <= -scrollContainer.firstElementChild?.clientWidth!) {
        position = 0
      }

      scrollContainer.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="bg-gray-100 py-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Our Partners & Certifications</h2>

        <div className="relative overflow-hidden">
          <div ref={scrollRef} className="flex items-center space-x-8 py-4" style={{ willChange: "transform" }}>
            {allLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={120}
                  height={80}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
