import React, { useState } from 'react'
import { sendJobApplicationEmail } from '../lib/emailjs'
import { useToast } from '../hooks/use-toast'
import { useLanguage } from './language-provider'

interface JobApplicationFormProps {
  position: string
}

type FormStep = 'personal' | 'contact' | 'education' | 'experience' | 'skills' | 'additional' | 'review'

export default function JobApplicationForm({ position }: JobApplicationFormProps) {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [currentStep, setCurrentStep] = useState<FormStep>('personal')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    county: '',
    postCode: '',
    country: '',
    education: '',
    experience: '',
    skills: '',
    qualifications: '',
    awards: '',
    additionalInfo: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const nextStep = () => {
    const steps: FormStep[] = ['personal', 'contact', 'education', 'experience', 'skills', 'additional', 'review']
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1])
    }
  }

  const prevStep = () => {
    const steps: FormStep[] = ['personal', 'contact', 'education', 'experience', 'skills', 'additional', 'review']
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const result = await sendJobApplicationEmail({
        ...formData,
        position
      })

      if (result.success) {
        toast({
          title: "Application Received!",
          description: "Thank you for your application. We have received your submission and will be in touch soon. Good luck!",
        })
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          addressLine1: '',
          addressLine2: '',
          city: '',
          county: '',
          postCode: '',
          country: '',
          education: '',
          experience: '',
          skills: '',
          qualifications: '',
          awards: '',
          additionalInfo: ''
        })
        setCurrentStep('personal')
      } else {
        throw new Error('Failed to send application')
      }
    } catch (error) {
      console.error('Application submission error:', error)
      toast({
        title: "Error",
        description: "Failed to send your application. Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const steps = [
    { id: 'personal', title: 'Personal Information', description: 'Basic details' },
    { id: 'contact', title: 'Contact Details', description: 'Address information' },
    { id: 'education', title: 'Education', description: 'Academic background' },
    { id: 'experience', title: 'Work Experience', description: 'Professional history' },
    { id: 'skills', title: 'Skills & Qualifications', description: 'Competencies' },
    { id: 'additional', title: 'Additional Information', description: 'Cover letter' },
    { id: 'review', title: 'Review & Submit', description: 'Final check' }
  ]

  const renderStepIndicator = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isActive = currentStep === step.id
          const isCompleted = steps.findIndex(s => s.id === currentStep) > index
          
          return (
            <div key={step.id} className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                isActive ? 'bg-green-600 border-green-600 text-white' :
                isCompleted ? 'bg-green-600 border-green-600 text-white' :
                'bg-gray-200 border-gray-300 text-gray-500'
              }`}>
                {isCompleted ? '✓' : index + 1}
              </div>
              <div className="ml-3 hidden sm:block">
                <div className={`text-sm font-medium ${isActive ? 'text-green-600' : 'text-gray-500'}`}>
                  {step.title}
                </div>
                <div className="text-xs text-gray-400">{step.description}</div>
              </div>
              {index < steps.length - 1 && (
                <div className={`w-8 h-0.5 mx-4 ${isCompleted ? 'bg-green-600' : 'bg-gray-300'}`} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Information</h3>
        <p className="text-gray-600 mb-6">Please provide your basic personal details.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
          <input 
            name="firstName" 
            value={formData.firstName}
            onChange={handleInputChange}
            required 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" 
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
          <input 
            name="lastName" 
            value={formData.lastName}
            onChange={handleInputChange}
            required 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" 
            placeholder="Enter your last name"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
          <input 
            name="email" 
            type="email" 
            value={formData.email}
            onChange={handleInputChange}
            required 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" 
            placeholder="Enter your email address"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
          <input 
            name="phone" 
            value={formData.phone}
            onChange={handleInputChange}
            required 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" 
            placeholder="Enter your phone number"
          />
        </div>
      </div>
    </div>
  )

  const renderContactInfo = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Details</h3>
        <p className="text-gray-600 mb-6">Please provide your current address.</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Address Line 1 *</label>
          <input 
            name="addressLine1" 
            value={formData.addressLine1}
            onChange={handleInputChange}
            required 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" 
            placeholder="Street address"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Address Line 2</label>
          <input 
            name="addressLine2" 
            value={formData.addressLine2}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" 
            placeholder="Apartment, suite, etc. (optional)"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
            <input 
              name="city" 
              value={formData.city}
              onChange={handleInputChange}
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" 
              placeholder="City"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">County *</label>
            <input 
              name="county" 
              value={formData.county}
              onChange={handleInputChange}
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" 
              placeholder="County"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Post Code *</label>
            <input 
              name="postCode" 
              value={formData.postCode}
              onChange={handleInputChange}
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" 
              placeholder="Post code"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
          <input 
            name="country" 
            value={formData.country}
            onChange={handleInputChange}
            required 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" 
            placeholder="Country"
          />
        </div>
      </div>
    </div>
  )

  const renderEducation = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Education & Qualifications</h3>
        <p className="text-gray-600 mb-6">Please provide your educational background and qualifications.</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Education History *</label>
          <textarea 
            name="education" 
            value={formData.education}
            onChange={handleInputChange}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" 
            placeholder="Please list your educational background, including degrees, certificates, and relevant training..."
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Professional Qualifications</label>
          <textarea 
            name="qualifications" 
            value={formData.qualifications}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" 
            placeholder="List any professional qualifications, licenses, or certifications relevant to this position..."
          />
        </div>
      </div>
    </div>
  )

  const renderExperience = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Work Experience</h3>
        <p className="text-gray-600 mb-6">Please detail your relevant work experience.</p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Relevant Experience *</label>
        <textarea 
          name="experience" 
          value={formData.experience}
          onChange={handleInputChange}
          rows={8}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" 
          placeholder="Please detail your relevant work experience, including job titles, companies, dates, and key responsibilities..."
          required
        />
      </div>
    </div>
  )

  const renderSkills = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Skills & Achievements</h3>
        <p className="text-gray-600 mb-6">Please provide your key skills and any awards or recognition.</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Key Skills *</label>
          <textarea 
            name="skills" 
            value={formData.skills}
            onChange={handleInputChange}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" 
            placeholder="List your key skills, technical abilities, and competencies relevant to this position..."
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Awards & Recognition</label>
          <textarea 
            name="awards" 
            value={formData.awards}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" 
            placeholder="List any awards, recognition, or notable achievements in your career..."
          />
        </div>
      </div>
    </div>
  )

  const renderAdditional = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Additional Information</h3>
        <p className="text-gray-600 mb-6">Please provide any additional information or cover letter.</p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter / Additional Information</label>
        <textarea 
          name="additionalInfo" 
          value={formData.additionalInfo}
          onChange={handleInputChange}
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" 
          placeholder="Tell us about your interest in this position, why you're a good fit, and any additional information you'd like to share..."
        />
      </div>
    </div>
  )

  const renderReview = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Review Your Application</h3>
        <p className="text-gray-600 mb-6">Please review your information before submitting.</p>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
        <div>
          <h4 className="font-medium text-gray-900 mb-2">Personal Information</h4>
          <p className="text-gray-600">{formData.firstName} {formData.lastName}</p>
          <p className="text-gray-600">{formData.email} | {formData.phone}</p>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-900 mb-2">Address</h4>
          <p className="text-gray-600">{formData.addressLine1}</p>
          {formData.addressLine2 && <p className="text-gray-600">{formData.addressLine2}</p>}
          <p className="text-gray-600">{formData.city}, {formData.county} {formData.postCode}</p>
          <p className="text-gray-600">{formData.country}</p>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-900 mb-2">Position</h4>
          <p className="text-gray-600">{position}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <input type="checkbox" required className="rounded" />
        <span className="text-sm text-gray-700">
          I confirm that all information provided is accurate and complete. I have read and agree to the 
          <a href="/terms-and-conditions" className="text-blue-600 hover:underline"> Terms and Conditions</a> and 
          <a href="/privacy-policy" className="text-blue-600 hover:underline"> Privacy Policy</a>.
        </span>
      </div>
    </div>
  )

  const renderStepContent = () => {
    switch (currentStep) {
      case 'personal':
        return renderPersonalInfo()
      case 'contact':
        return renderContactInfo()
      case 'education':
        return renderEducation()
      case 'experience':
        return renderExperience()
      case 'skills':
        return renderSkills()
      case 'additional':
        return renderAdditional()
      case 'review':
        return renderReview()
      default:
        return renderPersonalInfo()
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {renderStepIndicator()}
      
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        {renderStepContent()}
        
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 'personal'}
            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          <div className="flex gap-3">
            {currentStep === 'review' ? (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            ) : (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  )
} 