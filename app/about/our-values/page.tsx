"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function OurValuesPage() {
  const { t } = useLanguage()

  return (
    <main>
      {/* Header Banner */}
      <div className="bg-[#0a2240] text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("ourValues", "Our Values")}</h1>
            <p className="text-lg">
              {t(
                "ourValuesDesc",
                "BEARS values, uniquely tailored for our patients, ensure a personalised and caring experience that prioritises human dignity, safety, and comfort throughout the journey.",
              )}
            </p>
          </div>
          <div className="md:w-1/2 relative h-[200px] md:h-[300px] mt-6 md:mt-0">
            <Image
              src="/images/values-logo.png"
              alt="BEARS Values"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Safety Section */}
        <div className="mb-16 border-l-4 border-red-500 pl-6">
          <h2 className="text-3xl font-bold text-[#0a2240] mb-6">{t("safetyValue", "Safety")}</h2>
          <div className="prose max-w-none">
            <p>
              {t(
                "safetyDescription1",
                "We understand a focus on patient safety is continuously required as the BEARS clinical team with secure storage of all the equipment required.",
              )}
            </p>
            <p className="mt-4">
              {t(
                "safetyDescription2",
                "We provide time with checks for all vehicles and safety. A commitment to the highest standards of safety is at the core of everything we do. Our vehicles are equipped with the latest in safety technology and our staff are trained to the highest standards to ensure we never compromise safety.",
              )}
            </p>
            <p className="mt-4">
              {t(
                "safetyDescription3",
                "We take pride in our monitoring process, undertaking monitoring and assessment with continuous improvement. Ensuring that processes are continuously being kept updated with the latest standards of care to ensure the optimal level of safety is achieved for the patient and staff.",
              )}
            </p>
          </div>
        </div>

        {/* Comfort Section */}
        <div className="mb-16 border-l-4 border-yellow-500 pl-6">
          <h2 className="text-3xl font-bold text-[#0a2240] mb-6">{t("comfortValue", "Comfort")}</h2>
          <div className="prose max-w-none">
            <p>
              {t(
                "comfortDescription1",
                "Our crews ensure we provide the most comfortable ride with a dedicated approach to patient planning the journey. They will be an understanding of the patient's needs and requirements to ensure the journey is as comfortable as possible.",
              )}
            </p>
            <p className="mt-4">
              {t(
                "comfortDescription2",
                "A positive patient journey starts with a comfortable environment for our staff. We believe that when our staff are comfortable in their surroundings, it enables them to provide the highest level of patient care.",
              )}
            </p>
          </div>
        </div>

        {/* Care Section */}
        <div className="border-l-4 border-green-500 pl-6">
          <h2 className="text-3xl font-bold text-[#0a2240] mb-6">{t("careValue", "Care")}</h2>
          <div className="prose max-w-none">
            <p>
              {t(
                "careDescription1",
                "BEARS Operational crews will work collaboratively with the Trust, working alongside the highest levels of care to provide families. This will ensure that all patients are treated with dignity and respect at all times.",
              )}
            </p>
            <p className="mt-4">
              {t(
                "careDescription2",
                "We provide care that is tailored to the patient's needs whilst ensuring a safe, comfortable journey. Our crews will work as a team to ensure that all patients are able to contribute openly to the journey.",
              )}
            </p>
            <p className="mt-4">
              {t(
                "careDescription3",
                "We ensure that the attention to detail that staff will demonstrate with our patients will be present at all times. Our crews will make our great customer service a priority and will always be available to answer any questions.",
              )}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
