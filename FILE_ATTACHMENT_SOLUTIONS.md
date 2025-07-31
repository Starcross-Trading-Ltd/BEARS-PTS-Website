# File Attachment Solutions for BEARS PTS Website

## Current Situation

The website currently uses EmailJS for form submissions, but EmailJS has **limitations with file attachments**. The system can send file information (name, size) but cannot attach the actual file content to emails.

## Why EmailJS Can't Handle File Attachments

1. **Client-side limitations**: EmailJS runs in the browser and cannot directly attach files to emails
2. **Security restrictions**: Browsers don't allow direct file system access for email attachments
3. **EmailJS design**: Designed for simple form data, not file uploads

## Current Implementation

The current system:
- ✅ Collects file information (name, size, type)
- ✅ Validates file types and sizes
- ✅ Sends file details in email body
- ❌ Cannot attach actual file content

## Alternative Solutions

### Option 1: Server-Side File Handling (Recommended)

**Implementation:**
```javascript
// Backend (Node.js/Express example)
const multer = require('multer')
const nodemailer = require('nodemailer')

app.post('/upload-cv', upload.single('cv'), async (req, res) => {
  const file = req.file
  const formData = req.body
  
  // Send email with file attachment
  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: { user: 'your-email@gmail.com', pass: 'your-password' }
  })
  
  await transporter.sendMail({
    from: 'your-email@gmail.com',
    to: 'hr@bears-pts.com',
    subject: `Job Application: ${formData.position}`,
    html: generateEmailHTML(formData),
    attachments: [{ filename: file.originalname, content: file.buffer }]
  })
  
  res.json({ success: true })
})
```

**Frontend Changes:**
```javascript
// Update form submission to use server endpoint
const handleSubmit = async (e) => {
  e.preventDefault()
  
  const formData = new FormData()
  formData.append('firstName', firstName)
  formData.append('lastName', lastName)
  // ... other fields
  formData.append('cv', cvFile)
  
  const response = await fetch('/upload-cv', {
    method: 'POST',
    body: formData
  })
}
```

### Option 2: Cloud Storage + Email Link

**Implementation:**
```javascript
// Upload to cloud storage (AWS S3 example)
const AWS = require('aws-sdk')
const s3 = new AWS.S3()

app.post('/upload-cv', upload.single('cv'), async (req, res) => {
  const file = req.file
  
  // Upload to S3
  const uploadResult = await s3.upload({
    Bucket: 'bears-pts-cv',
    Key: `cv/${Date.now()}-${file.originalname}`,
    Body: file.buffer,
    ContentType: file.mimetype
  }).promise()
  
  // Send email with download link
  const emailData = {
    ...req.body,
    cvDownloadLink: uploadResult.Location
  }
  
  // Send email using EmailJS or other service
  await sendEmailWithLink(emailData)
  
  res.json({ success: true })
})
```

### Option 3: Different Email Service

**Replace EmailJS with:**
- **SendGrid**: Supports file attachments
- **Mailgun**: Supports file attachments  
- **AWS SES**: Supports file attachments
- **Nodemailer**: Node.js email library with attachment support

### Option 4: Hybrid Approach

**Current EmailJS + File Upload Service:**
```javascript
// 1. Upload file to temporary storage
const fileUpload = await uploadToTempStorage(cvFile)

// 2. Send email with file information + download link
const emailData = {
  ...formData,
  cvFile: cvFile.name,
  cvSize: `${(cvFile.size / 1024 / 1024).toFixed(2)}MB`,
  cvDownloadLink: fileUpload.url,
  cvExpiryDate: fileUpload.expiryDate
}

await sendJobApplicationEmail(emailData)
```

## Recommended Solution

For the BEARS PTS website, I recommend **Option 1 (Server-Side File Handling)** because:

1. ✅ **Full file attachment support**
2. ✅ **Secure file handling**
3. ✅ **Professional email experience**
4. ✅ **Easy to implement**
5. ✅ **Cost-effective**

## Implementation Steps

### Step 1: Set Up Backend Server
```bash
npm init -y
npm install express multer nodemailer cors
```

### Step 2: Create Server Endpoint
```javascript
// server.js
const express = require('express')
const multer = require('multer')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const upload = multer({ storage: multer.memoryStorage() })

app.post('/api/job-application', upload.single('cv'), async (req, res) => {
  try {
    const formData = req.body
    const file = req.file
    
    // Send email with attachment
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
    })
    
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'hr@bears-pts.com',
      subject: `Job Application: ${formData.position}`,
      html: generateEmailHTML(formData),
      attachments: file ? [{ filename: file.originalname, content: file.buffer }] : []
    })
    
    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.listen(3001, () => console.log('Server running on port 3001'))
```

### Step 3: Update Frontend
```javascript
// Update job application form
const handleSubmit = async (e) => {
  e.preventDefault()
  
  const formData = new FormData()
  formData.append('firstName', firstName)
  formData.append('lastName', lastName)
  formData.append('email', email)
  // ... other fields
  if (cvFile) {
    formData.append('cv', cvFile)
  }
  
  const response = await fetch('http://localhost:3001/api/job-application', {
    method: 'POST',
    body: formData
  })
  
  const result = await response.json()
  if (result.success) {
    toast({ title: "Application Submitted!", description: "Your application has been sent successfully!" })
  }
}
```

## Cost Comparison

| Solution | Setup Cost | Monthly Cost | File Support |
|----------|------------|--------------|--------------|
| EmailJS (current) | $0 | $0 | ❌ No |
| Server-side | $5-20/month | $5-20/month | ✅ Yes |
| Cloud Storage | $0-5/month | $0-5/month | ✅ Yes |
| SendGrid | $0 | $15/month | ✅ Yes |

## Security Considerations

1. **File validation**: Check file types and sizes
2. **Virus scanning**: Scan uploaded files
3. **Secure storage**: Use encrypted storage
4. **Access control**: Limit who can access files
5. **Data retention**: Set file deletion policies

## Next Steps

1. **Choose a solution** based on your needs and budget
2. **Set up the backend** if going with server-side solution
3. **Update the frontend** to use the new endpoint
4. **Test thoroughly** with various file types
5. **Deploy to production** with proper security measures

Would you like me to implement any of these solutions? 