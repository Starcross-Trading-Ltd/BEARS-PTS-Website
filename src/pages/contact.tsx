import React, { useState, useEffect } from 'react'
import { useLanguage } from '../components/language-provider'
import { useToast } from '../hooks/use-toast'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import HeroSection from '../components/common/hero-section'
import { Phone, Mail, MapPin, Smile } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { initEmailJS, sendContactEmail } from '../lib/emailjs'

export default function ContactPage() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS()
  }, [])

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
      const result = await sendContactEmail(formData)

      if (result.success) {
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
      <section className="relative py-20 bg-gradient-to-br from-primary-dark to-primary text-white text-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">{t("contact.ctaTitle", "Get in Touch")}</h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">{t("contact.ctaSubtitle", "We are available 24/7 to answer your questions and provide support.")}</p>
        </div>
        {/* Subtle abstract wave at the bottom for continuity */}
        <div className="absolute left-0 right-0 bottom-0 w-screen z-0 pointer-events-none" style={{ height: '120px', minWidth: '100vw' }} aria-hidden="true">
          <svg width="100%" height="100%" viewBox="0 0 1920 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,60 C480,140 1440,0 1920,80 L1920,120 L0,120 Z" fill="#fff" fillOpacity="0.10" />
            <path d="M0,100 C533,60 1387,180 1920,40 L1920,120 L0,120 Z" fill="#fff" fillOpacity="0.07" />
          </svg>
        </div>
      </section>
      <Section>
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              {t("contact.formTitle", "Send us a Message")}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t("contact.namePlaceholder", "Your Name")} 
                  className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition" 
                />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t("contact.emailPlaceholder", "Your Email")} 
                  className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition" 
                />
              </div>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t("contact.messagePlaceholder", "Your Message")} 
                rows={6} 
                className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition"
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-secondary text-white py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t("contact.sendingButton", "Sending...") : t("contact.sendMessageButton", "Send Message")}
              </button>
            </form>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">
              {t("contact.alternativeContactTitle", "Other Ways to Reach Us")}
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {t("contact.alternativeContactText", "If you prefer not to use the form, you can also contact us by phone or email. Our team is ready to assist you around the clock.")}
            </p>
            <div className="flex justify-center gap-8">
              <a href="tel:+442082025160" className="flex items-center gap-2 text-primary hover:text-secondary transition">
                <Phone />
                <span>{t("contact.callUs", "Call Us")}</span>
              </a>
              <a href="mailto:info@bearspts.co.uk" className="flex items-center gap-2 text-primary hover:text-secondary transition">
                <Mail />
                <span>{t("contact.emailUs", "Email Us")}</span>
              </a>
              </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-600">
                <span className="text-lg text-primary font-medium">{t("contact.footerCta", "We respond to all messages within 24 hours. Prefer to call? We're available 24/7!")}</span>
              </p>
              </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
