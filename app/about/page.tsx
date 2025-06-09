"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <main>
      {/* Header Banner */}
      <div className="bg-[#0a2240] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("aboutBearsTitle", "About BEARS")}</h1>
          <p className="text-xl max-w-3xl">
            {t(
              "aboutBearsDescription",
              "BEARS Patient Transport Service was established to provide high-quality ambulance services with a focus on patient care, comfort, and safety.",
            )}
          </p>
        </div>
      </div>

      {/* About Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-[#0a2240] mb-6">{t("ourStoryTitle", "Our Story")}</h2>
            <p className="text-lg text-gray-700 mb-4">
              {t(
                "ourStoryContent1",
                "BEARS was established in 2009, on the principles of Safety, Comfort and Care. We specialise in hospital logistics patient transport service.",
              )}
            </p>
            <p className="text-lg text-gray-700 mb-4">
              {t(
                "ourStoryContent2",
                "Supporting the NHS with paramedic, paediatric and neonatal, critical care, high dependency, bariatric, mental health and ECMO transfers alongside regular patient transport services.",
              )}
            </p>
            <p className="text-lg text-gray-700 mb-6">
              {t(
                "ourStoryContent3",
                "At every level, BEARS focuses on quality, which defines the company and differentiates it from its peers. Our emphasis remains to provide high quality service, training, and generous package to our staff as well as providing them with appropriate tools, to enable them to deliver the highest standards of patient care.",
              )}
            </p>
            <Link href="/about/meet-the-team" className="inline-flex items-center text-[#4285f4] hover:underline">
              {t("meetOurTeam", "Meet our team")} <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <Image src="/images/ambulance.jpg" alt="BEARS Ambulance" fill className="object-cover rounded-lg" />
          </div>
        </div>

        {/* About Navigation Cards */}
        <h2 className="text-3xl font-bold text-[#0a2240] mb-8">{t("learnMoreAboutBears", "Learn More About BEARS")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AboutCard
            title={t("meetTeam", "Meet the Team")}
            description={t(
              "meetTeamDesc",
              "Get to know our senior management team who lead BEARS with expertise and dedication.",
            )}
            href="/about/meet-the-team"
            imageSrc="/images/team-photo.jpg"
          />

          <AboutCard
            title={t("meetCubs", "Meet the Cubs")}
            description={t(
              "meetCubsDesc",
              "Our dedicated staff are at the forefront of delivering the highest levels of patient care.",
            )}
            href="/about/meet-the-cubs"
            imageSrc="/images/cubs/staff-member.jpg"
          />

          <AboutCard
            title={t("ourValues", "Our Values")}
            description={t(
              "ourValuesDesc",
              "Safety, Comfort, and Care - the core values that guide everything we do at BEARS.",
            )}
            href="/about/our-values"
            imageSrc="/images/values-logo.png"
          />

          <AboutCard
            title={t("ourFleet", "Our Fleet")}
            description={t(
              "ourFleetDesc",
              "Explore our comprehensive, specialised ambulance fleet providing 24/7 coverage.",
            )}
            href="/about/our-fleet"
            imageSrc="/images/fleet/ambulance-main.jpg"
          />

          <AboutCard
            title={t("bearsNumbers", "BEARS in Numbers")}
            description={t(
              "bearsNumbersDesc",
              "Discover the impressive statistics behind our service and the miles we've traveled.",
            )}
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
  const { t } = useLanguage()

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden h-full flex flex-col">
      <div className="relative h-48">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-[#0a2240] mb-3">{title}</h3>
        <p className="text-gray-700 mb-4 flex-grow">{description}</p>
        <Link href={href} className="inline-flex items-center text-[#4285f4] mt-2 hover:underline">
          {t("learnMore", "Learn more")} <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
