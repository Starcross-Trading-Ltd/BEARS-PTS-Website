import emailjs from '@emailjs/browser'

// EmailJS configuration using environment variables
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  TEMPLATES: {
    CONTACT: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || 'YOUR_CONTACT_TEMPLATE_ID',
    BOOKING: import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE_ID || 'YOUR_BOOKING_TEMPLATE_ID',
    CAREER: import.meta.env.VITE_EMAILJS_CAREER_TEMPLATE_ID || 'YOUR_CAREER_TEMPLATE_ID',
  },
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
}

// Validate EmailJS configuration
export const validateEmailJSConfig = () => {
  const requiredVars = [
    'VITE_EMAILJS_SERVICE_ID',
    'VITE_EMAILJS_CONTACT_TEMPLATE_ID',
    'VITE_EMAILJS_BOOKING_TEMPLATE_ID',
    'VITE_EMAILJS_CAREER_TEMPLATE_ID',
    'VITE_EMAILJS_PUBLIC_KEY'
  ]

  const missingVars = requiredVars.filter(varName => !import.meta.env[varName])
  
  if (missingVars.length > 0) {
    console.warn('⚠️ Missing EmailJS environment variables:', missingVars)
    console.warn('Please check your .env file and ensure all EmailJS variables are set.')
    return false
  }
  
  return true
}

// Initialize EmailJS
export const initEmailJS = () => {
  if (!validateEmailJSConfig()) {
    console.error('❌ EmailJS configuration is incomplete. Please check your environment variables.')
    return false
  }
  
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
  console.log('✅ EmailJS initialized successfully')
  return true
}

// Send email using EmailJS
export const sendEmail = async (templateId: string, templateParams: any) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      templateId,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    )
    return { success: true, data: response }
  } catch (error) {
    console.error('EmailJS error:', error)
    return { success: false, error }
  }
}

// Send email with file attachment using EmailJS
export const sendEmailWithAttachment = async (templateId: string, templateParams: any, file?: File) => {
  try {
    let response
    
    if (file) {
      // For file attachments, we need to use a different approach
      // EmailJS doesn't directly support file attachments in the same way
      // We'll send the file information and handle it differently
      const templateParamsWithFile = {
        ...templateParams,
        has_attachment: 'true',
        attachment_name: file.name,
        attachment_size: `${(file.size / 1024 / 1024).toFixed(2)}MB`
      }
      
      response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        templateId,
        templateParamsWithFile,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
    } else {
      // Send without file attachment
      response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        templateId,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
    }
    
    return { success: true, data: response }
  } catch (error) {
    console.error('EmailJS error:', error)
    return { success: false, error }
  }
}

// Contact form email template
export const sendContactEmail = async (formData: {
  name: string
  email: string
  message: string
}) => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_name: 'BEARS PTS Team',
    reply_to: formData.email,
  }

  return await sendEmail(EMAILJS_CONFIG.TEMPLATES.CONTACT, templateParams)
}

// Booking form email template
export const sendBookingEmail = async (formData: {
  name: string
  email: string
  phone: string
  service: string
  date: string
  message: string
}) => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    service: formData.service,
    date: formData.date,
    message: formData.message,
    to_name: 'BEARS PTS Bookings',
    reply_to: formData.email,
  }

  return await sendEmail(EMAILJS_CONFIG.TEMPLATES.BOOKING, templateParams)
}

// Job application email template with comprehensive CV data
export const sendJobApplicationEmail = async (formData: {
  firstName: string
  lastName: string
  email: string
  phone: string
  addressLine1: string
  addressLine2: string
  city: string
  county: string
  postCode: string
  country: string
  position: string
  education: string
  experience: string
  skills: string
  qualifications: string
  awards: string
  additionalInfo: string
}) => {
  // Create a formatted address
  const addressParts = [
    formData.addressLine1,
    formData.addressLine2,
    formData.city,
    formData.county,
    formData.postCode,
    formData.country
  ].filter(part => part && part.trim()).join(', ')

  // Get current date
  const currentDate = new Date().toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const templateParams = {
    first_name: formData.firstName,
    last_name: formData.lastName,
    from_name: `${formData.firstName} ${formData.lastName}`,
    from_email: formData.email,
    phone: formData.phone,
    address: addressParts,
    address_line_1: formData.addressLine1 || '',
    address_line_2: formData.addressLine2 || '',
    city: formData.city || '',
    county: formData.county || '',
    post_code: formData.postCode || '',
    country: formData.country || '',
    position: formData.position,
    education: formData.education || '',
    experience: formData.experience || '',
    skills: formData.skills || '',
    qualifications: formData.qualifications || '',
    awards: formData.awards || '',
    additional_info: formData.additionalInfo || '',
    current_date: currentDate,
    to_name: 'BEARS PTS HR',
    reply_to: formData.email,
  }

  return await sendEmail(EMAILJS_CONFIG.TEMPLATES.CAREER, templateParams)
} 