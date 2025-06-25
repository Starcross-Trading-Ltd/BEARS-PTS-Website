import React, { useState } from 'react'
import { useLanguage } from '../components/language-provider'
import { useToast } from '../hooks/use-toast'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'
import HeroSection from '../components/common/hero-section'

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
        title: "Error",
        description: "Please fill in all fields",
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
          title: "Success!",
          description: "Your message has been sent successfully. We'll get back to you soon!",
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <HeroSection
        title={t("contact.contactUsTitle", "Contact Us")}
        subtitle={t("contact.getInTouchDescription", "We're here to answer any questions you may have about our services. Reach out to us and we'll respond as soon as we can.")}
      />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-[#0a2240] mb-4">
              {t("contact.getInTouchTitle", "Get in Touch")}
            </h2>
            <div className="space-y-4 text-lg">
              <div>
                <h3 className="font-medium text-gray-900">{t("contact.phoneTitle", "Phone")}</h3>
                <p className="text-gray-700">+44 123 456 7890</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{t("contact.emailTitle", "Email")}</h3>
                <p className="text-gray-700">info@bearsambulance.com</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{t("contact.addressTitle", "Address")}</h3>
                <p className="text-gray-700">{t("contact.bearsAddress", "BEARS Patient Transport Service")}<br />London, UK</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
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
                {isSubmitting ? "Sending..." : t("contact.sendMessage", "Send Message")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
