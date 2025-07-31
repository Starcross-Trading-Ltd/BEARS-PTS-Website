# EmailJS Setup Guide

## ⚠️ Important Note About File Attachments

EmailJS has limitations with file attachments. The current implementation will send file information (name, size) but not the actual file content. For true file attachments, you have these options:

1. **Use EmailJS with a different service** (like Gmail API)
2. **Implement a server-side solution** to handle file uploads
3. **Use a different email service** that supports file attachments

For now, the system will send file information in the email body.

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Set Up Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

## Step 3: Create Templates

### Contact Form Template
**Template Name:** `contact-form`
**Subject:** `New Contact Form Submission from {{from_name}}`

**HTML Template:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Contact Form Submission</title>
</head>
<body>
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Message:</strong></p>
    <p>{{message}}</p>
    <hr>
    <p><em>This email was sent from the BEARS PTS website contact form.</em></p>
</body>
</html>
```

### Booking Form Template
**Template Name:** `booking-form`
**Subject:** `New Booking Request from {{from_name}}`

**HTML Template:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Booking Request</title>
</head>
<body>
    <h2>New Booking Request</h2>
    <p><strong>Name:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Phone:</strong> {{phone}}</p>
    <p><strong>Service:</strong> {{service}}</p>
    <p><strong>Date:</strong> {{date}}</p>
    <p><strong>Message:</strong></p>
    <p>{{message}}</p>
    <hr>
    <p><em>This email was sent from the BEARS PTS website booking form.</em></p>
</body>
</html>
```

### Career Application Template
**Template Name:** `career-application`
**Subject:** `Job Application for {{position}} - {{from_name}}`

**HTML Template:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Job Application - BEARS PTS</title>
    <style>
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
            line-height: 1.6; 
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        .header { 
            background: linear-gradient(135deg, #059669 0%, #047857 100%);
            color: white;
            padding: 30px;
            border-radius: 8px 8px 0 0;
            text-align: center;
        }
        .content { 
            background: #f0fdf4;
            padding: 30px;
            border-radius: 0 0 8px 8px;
        }
        .section { 
            background: white;
            padding: 25px;
            margin-bottom: 20px;
            border-radius: 8px;
            border-left: 4px solid #059669;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .section-title { 
            font-size: 18px; 
            font-weight: 600; 
            color: #047857; 
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        .section-title::before {
            content: '';
            width: 4px;
            height: 20px;
            background: #059669;
            margin-right: 10px;
            border-radius: 2px;
        }
        .label { 
            font-weight: 600; 
            color: #374151;
            display: block;
            margin-bottom: 5px;
        }
        .value { 
            color: #6b7280;
            margin-bottom: 15px;
            line-height: 1.5;
        }
        .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        .footer { 
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            text-align: center;
            color: #6b7280;
            font-size: 14px;
        }
        .position-badge {
            background: #d1fae5;
            color: #047857;
            padding: 8px 16px;
            border-radius: 20px;
            font-weight: 600;
            display: inline-block;
            margin-bottom: 20px;
        }
        .required { color: #dc2626; }
    </style>
</head>
<body>
    <div class="header">
        <h1 style="margin: 0; font-size: 28px;">New Job Application</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">BEARS PTS Careers</p>
    </div>
    
    <div class="content">
        <div class="position-badge">
            Position: {{position}}
        </div>
        
        <!-- Personal Information -->
        <div class="section">
            <h3 class="section-title">Personal Information</h3>
            <div class="contact-grid">
                <div>
                    <span class="label">Name</span>
                    <div class="value">{{from_name}}</div>
                </div>
                <div>
                    <span class="label">Email</span>
                    <div class="value">{{from_email}}</div>
                </div>
                <div>
                    <span class="label">Phone</span>
                    <div class="value">{{phone}}</div>
                </div>
            </div>
        </div>
        
        <!-- Address -->
        <div class="section">
            <h3 class="section-title">Contact Details</h3>
            <div>
                <span class="label">Address</span>
                <div class="value">
                    {{address_line_1}}<br>
                    {{address_line_2}}<br>
                    {{city}}, {{county}} {{post_code}}<br>
                    {{country}}
                </div>
            </div>
        </div>
        
        <!-- Education -->
        <div class="section">
            <h3 class="section-title">Education & Qualifications</h3>
            <div>
                <span class="label">Education History</span>
                <div class="value">{{education}}</div>
            </div>
            <div style="margin-top: 20px;">
                <span class="label">Professional Qualifications</span>
                <div class="value">{{qualifications}}</div>
            </div>
        </div>
        
        <!-- Work Experience -->
        <div class="section">
            <h3 class="section-title">Work Experience</h3>
            <div>
                <span class="label">Relevant Experience</span>
                <div class="value">{{experience}}</div>
            </div>
        </div>
        
        <!-- Skills -->
        <div class="section">
            <h3 class="section-title">Skills & Competencies</h3>
            <div>
                <span class="label">Key Skills</span>
                <div class="value">{{skills}}</div>
            </div>
            <div style="margin-top: 20px;">
                <span class="label">Awards & Recognition</span>
                <div class="value">{{awards}}</div>
            </div>
        </div>
        
        <!-- Additional Information -->
        <div class="section">
            <h3 class="section-title">Additional Information</h3>
            <div>
                <span class="label">Cover Letter / Additional Information</span>
                <div class="value">{{additional_info}}</div>
            </div>
        </div>
        
        <div class="footer">
            <p><strong>This application was submitted through the BEARS PTS website.</strong></p>
            <p>Please contact the applicant at: <a href="mailto:{{reply_to}}" style="color: #059669;">{{reply_to}}</a></p>
            <p style="margin-top: 15px; font-size: 12px; color: #9ca3af;">
                Application submitted on {{current_date}}
            </p>
        </div>
    </div>
</body>
</html>
```

**Template Variables Available:**
- `{{from_name}}` - Full name
- `{{from_email}}` - Email address
- `{{phone}}` - Phone number
- `{{position}}` - Job position applied for
- `{{address_line_1}}` - Address line 1
- `{{address_line_2}}` - Address line 2
- `{{city}}` - City
- `{{county}}` - County
- `{{post_code}}` - Post code
- `{{country}}` - Country
- `{{education}}` - Education history
- `{{qualifications}}` - Professional qualifications
- `{{experience}}` - Work experience
- `{{skills}}` - Key skills
- `{{awards}}` - Awards & recognition
- `{{additional_info}}` - Cover letter/additional info
- `{{reply_to}}` - Applicant's email for reply
- `{{current_date}}` - Current date

**Features:**
- ✅ Professional header with BEARS branding
- ✅ Clean, modern design with green accent colors
- ✅ Organized sections with visual indicators
- ✅ Responsive layout
- ✅ Contact information prominently displayed
- ✅ Easy-to-read typography
- ✅ Professional footer with contact details 