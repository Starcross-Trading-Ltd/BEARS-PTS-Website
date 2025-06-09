import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PartnerLogos from "@/components/partner-logos"

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="min-h-screen">{children}</div>
      <PartnerLogos />
      <Footer />
    </>
  )
}
