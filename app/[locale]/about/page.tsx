"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

export default function AboutPage() {
  const t = useTranslations("aboutPage")
  const tAbout = useTranslations("about")
  const tHome = useTranslations("home")

  return (
    <main>
      {/* Header Banner */}
      <div className="bg-[#0a2240] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("aboutBearsTitle")}</h1>
          <p className="text-xl max-w-3xl">{t("aboutBearsDescription")}</p>
        </div>
      </div>

      {/* About Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-[#0a2240] mb-6">{t("ourStoryTitle")}</h2>
            <p className="text-lg text-gray-700 mb-4">{t("ourStoryContent1")}</p>
            <p className="text-lg text-gray-700 mb-4">{t("ourStoryContent2")}</p>
            <p className="text-lg text-gray-700 mb-6">{t("ourStoryContent3")}</p>
            <Link href="/about/meet-the-team" className="inline-flex items-center text-[#4285f4] hover:underline">
              {t("meetOurTeam")} <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <Image src="/images/ambulance.jpg" alt="BEARS Ambulance" fill className="object-cover rounded-lg" />
          </div>
        </div>

        {/* About Navigation Cards */}
        <h2 className="text-3xl font-bold text-[#0a2240] mb-8">{t("learnMoreAboutBears")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AboutCard
            title={tAbout("meetTeam")}
            description="Get to know our senior management team who lead BEARS with expertise and dedication."
            href="/about/meet-the-team"
            imageSrc="/images/team-photo.jpg"
          />

          <AboutCard
            title={tAbout("meetCubs")}
            description="Our dedicated staff are at the forefront of delivering the highest levels of patient care."
            href="/about/meet-the-cubs"
            imageSrc="/images/cubs/staff-member.jpg"
          />

          <AboutCard
            title={tAbout("ourValues")}
            description="Safety, Comfort, and Care - the core values that guide everything we do at BEARS."
            href="/about/our-values"
            imageSrc="/images/values-logo.png"
          />

          <AboutCard
            title={tAbout("ourFleet")}
            description="Explore our comprehensive, specialised ambulance fleet providing 24/7 coverage."
            href="/about/our-fleet"
            imageSrc="/images/fleet/ambulance-main.jpg"
          />

          <AboutCard
            title={tAbout("bearsNumbers")}
            description="Discover the impressive statistics behind our service and the miles we've traveled."
            href="/about/bears-in-numbers"
            imageSrc="/images/world-map-dots.png"
          />
        </div>
      </div>
    </main>
  )
}

interface AboutCardProps {
  title: string
  description: string
  href: string
  imageSrc: string
}

function AboutCard({ title, description, href, imageSrc }: AboutCardProps) {
  const t = useTranslations("home")

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden h-full flex flex-col">
      <div className="relative h-48">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-[#0a2240] mb-3">{title}</h3>
        <p className="text-gray-700 mb-4 flex-grow">{description}</p>
        <Link href={href} className="inline-flex items-center text-[#4285f4] mt-2 hover:underline">
          {t("learnMore")} <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
