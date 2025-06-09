"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

export default function BearsInNumbersPage() {
  const [totalMiles, setTotalMiles] = useState(0)
  const [bariatricTrips, setBariatricTrips] = useState(0)
  const [neptsTrips, setNeptsTrips] = useState(0)
  const [mentalHealthTrips, setMentalHealthTrips] = useState(0)
  const [highDependencyTrips, setHighDependencyTrips] = useState(0)
  const [timesAroundWorld, setTimesAroundWorld] = useState(0)

  const targetTotalMiles = 5058454
  const targetBariatricTrips = 22770
  const targetNeptsTrips = 258875
  const targetMentalHealthTrips = 33591
  const targetHighDependencyTrips = 484159
  const targetTimesAroundWorld = 203

  const animationDuration = 2000 // 2 seconds
  const frameRate = 30 // frames per second
  const totalFrames = (animationDuration / 1000) * frameRate

  const animationRef = useRef<number | null>(null)
  const frameRef = useRef(0)

  const easeOutQuad = (t: number) => t * (2 - t)

  const animateNumbers = () => {
    if (frameRef.current <= totalFrames) {
      const progress = easeOutQuad(frameRef.current / totalFrames)

      setTotalMiles(Math.floor(progress * targetTotalMiles))
      setBariatricTrips(Math.floor(progress * targetBariatricTrips))
      setNeptsTrips(Math.floor(progress * targetNeptsTrips))
      setMentalHealthTrips(Math.floor(progress * targetMentalHealthTrips))
      setHighDependencyTrips(Math.floor(progress * targetHighDependencyTrips))
      setTimesAroundWorld(Math.floor(progress * targetTimesAroundWorld))

      frameRef.current++
      animationRef.current = requestAnimationFrame(animateNumbers)
    } else {
      // Ensure final values are exact
      setTotalMiles(targetTotalMiles)
      setBariatricTrips(targetBariatricTrips)
      setNeptsTrips(targetNeptsTrips)
      setMentalHealthTrips(targetMentalHealthTrips)
      setHighDependencyTrips(targetHighDependencyTrips)
      setTimesAroundWorld(targetTimesAroundWorld)
    }
  }

  useEffect(() => {
    // Start animation
    animationRef.current = requestAnimationFrame(animateNumbers)

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <main className="relative">
      {/* Background Map */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image src="/images/world-map-dots.png" alt="World Map" fill className="object-cover" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-4 pt-16 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a2240] mb-4 text-center">BEARS in Numbers</h1>
        </div>

        {/* Total Miles */}
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="text-6xl md:text-8xl font-bold text-[#0a2240]">{totalMiles.toLocaleString()}</div>
            <div className="text-lg text-gray-600 mt-2">TOTAL MILES DRIVEN</div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0a2240]">{bariatricTrips.toLocaleString()}</div>
              <div className="text-sm text-gray-600 mt-2">BARIATRIC TRIPS</div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0a2240]">{neptsTrips.toLocaleString()}</div>
              <div className="text-sm text-gray-600 mt-2">NEPTS TRIPS</div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0a2240]">{mentalHealthTrips.toLocaleString()}</div>
              <div className="text-sm text-gray-600 mt-2">MENTAL HEALTH TRIPS</div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0a2240]">
                {highDependencyTrips.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 mt-2">HIGH DEPENDENCY TRIPS</div>
            </div>
          </div>
        </div>

        {/* Times Around the World */}
        <div className="container mx-auto px-4 py-8 mb-16">
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md border-t-4 border-pink-500">
            <div className="text-center">
              <div className="text-lg text-gray-600">MORE THAN</div>
              <div className="text-6xl font-bold text-[#0a2240] my-4">{timesAroundWorld}</div>
              <div className="text-xl text-gray-700">
                times
                <br />
                around the
                <br />
                world
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
