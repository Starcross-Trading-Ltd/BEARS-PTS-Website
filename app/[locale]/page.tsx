"use client"

import { useTranslations } from "next-intl"

export default function Home() {
  const t = useTranslations("home")
  const tTestimonials = useTranslations("testimonials")
  const tNews = useTranslations("news")
  const tServiceNames = useTranslations("serviceNames")

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
      <p className="mb-4">{t("description")}</p>
    </main>
  )
}
