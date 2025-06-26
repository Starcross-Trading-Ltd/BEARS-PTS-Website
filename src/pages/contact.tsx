import React, { useState } from 'react'
import { useLanguage } from '../components/language-provider'
import { useToast } from '../hooks/use-toast'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'
import HeroSection from '../components/common/hero-section'
import { Phone, Mail, MapPin, Smile } from 'lucide-react'

export default function ContactPage() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: t("contact.toast.errorTitle", "Error"),
        description: t("contact.toast.fillFields", "Please fill in all fields"),
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/xdkovepg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New contact form submission from ${formData.name}`,
        }),
      })

      if (response.ok) {
        toast({
          title: t("contact.toast.successTitle", "Success!"),
          description: t("contact.toast.successMessage", "Your message has been sent successfully. We'll get back to you soon!"),
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast({
        title: t("contact.toast.errorTitle", "Error"),
        description: t("contact.toast.errorMessage", "Failed to send your message. Please try again or contact us directly."),
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with subtle wave */}
      <section className="relative py-20 bg-gradient-to-br from-[#0a2240] to-[#3b82f6] text-white text-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            {t("contact.contactUsTitle", "Contact Us")}
          </h1>
          <p className="text-2xl text-blue-100 max-w-2xl mx-auto mb-8 drop-shadow-md">
            {t("contact.getInTouchDescription", "We're here to answer any questions you may have about our services. Reach out to us and we'll respond as soon as we can.")}
          </p>
        </div>
        {/* Subtle abstract wave at the bottom for continuity */}
        <div className="absolute left-0 right-0 bottom-0 w-screen z-0 pointer-events-none" style={{ height: '120px', minWidth: '100vw' }} aria-hidden="true">
          <svg width="100%" height="100%" viewBox="0 0 1920 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,60 C480,140 1440,0 1920,80 L1920,120 L0,120 Z" fill="#fff" fillOpacity="0.10" />
            <path d="M0,100 C533,60 1387,180 1920,40 L1920,120 L0,120 Z" fill="#fff" fillOpacity="0.07" />
          </svg>
        </div>
      </section>
      <div className="container mx-auto px-4">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 py-16">
          {/* Vertical divider on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-200 to-transparent z-10" style={{transform: 'translateX(-50%)'}} />
          {/* Contact Info Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in-up flex flex-col justify-center relative z-20">
            <h2 className="text-2xl font-bold text-[#0a2240] mb-6 flex items-center gap-2 justify-center">
              <Smile className="w-7 h-7 text-[#3b82f6]" />
              {t("contact.getInTouchTitle", "Get in Touch")}
            </h2>
            <div className="space-y-6 text-lg">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#3b82f6] mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">{t("contact.phoneTitle", "Phone")}</h3>
                  <a href={`tel:${t("contact.phoneNumber")}`} className="text-gray-700 hover:text-[#3b82f6] transition-colors">{t("contact.phoneNumber", "+44 123 456 7890")}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#3b82f6] mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">{t("contact.emailTitle", "Email")}</h3>
                  <a href={`mailto:${t("contact.emailAddress")}`} className="text-gray-700 hover:text-[#3b82f6] transition-colors">{t("contact.emailAddress", "info@bearsambulance.com")}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#3b82f6] mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">{t("contact.addressTitle", "Address")}</h3>
                  <p className="text-gray-700">{t("contact.bearsAddress", "BEARS Patient Transport Service")}<br />London, UK</p>
                </div>
              </div>
            </div>
          </div>
          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in-up flex flex-col justify-center relative z-20">
            <h2 className="text-2xl font-bold text-[#0a2240] mb-4">
              {t("contact.sendMessageTitle", "Send us a Message")}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("contact.nameLabel", "Name")}
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("contact.emailLabel", "Email")}
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("contact.messageLabel", "Message")}
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#00855a] hover:bg-[#006e4a] text-white text-lg px-8 py-3 rounded-lg shadow"
              >
                {isSubmitting ? t("contact.sending", "Sending...") : t("contact.sendMessage", "Send Message")}
              </Button>
            </form>
          </div>
        </div>
        {/* Friendly footer call-to-action */}
        <div className="mt-16 mb-8 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-4 shadow-lg border border-blue-100">
            <Smile className="w-7 h-7 text-[#3b82f6]" />
            <span className="text-lg text-[#0a2240] font-medium">{t("contact.footerCta", "We respond to all messages within 24 hours. Prefer to call? We're available 24/7!")}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
