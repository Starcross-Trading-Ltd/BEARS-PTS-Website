# Environment Variables Setup Guide

This guide will help you set up environment variables for EmailJS configuration.

## 📁 **Files Created**

1. `env.example` - Example environment file with all required variables
2. `src/types/env.d.ts` - TypeScript declarations for environment variables
3. `src/lib/emailjs.ts` - Updated to use environment variables

## 🔧 **Step 1: Create Your Environment File**

1. Copy `env.example` to `.env`:
   ```bash
   cp env.example .env
   ```

2. Open `.env` and replace the placeholder values with your actual EmailJS credentials.

## 📝 **Step 2: Get Your EmailJS Credentials**

### **Service ID**
1. Go to your EmailJS dashboard
2. Navigate to "Email Services"
3. Copy your Service ID (e.g., `service_abc123`)

### **Template IDs**
1. Go to "Email Templates" in your dashboard
2. Create the three templates (contact, booking, career)
3. Copy each Template ID (e.g., `template_xyz789`)

### **Public Key**
1. Go to "Account" → "API Keys"
2. Copy your Public Key (e.g., `user_jkl012`)

## 🔄 **Step 3: Update Your .env File**

Replace the values in your `.env` file:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_CONTACT_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_BOOKING_TEMPLATE_ID=template_def456
VITE_EMAILJS_CAREER_TEMPLATE_ID=template_ghi789
VITE_EMAILJS_PUBLIC_KEY=user_jkl012
```

## ✅ **Step 4: Verify Configuration**

The application will automatically validate your environment variables on startup. Check the browser console for:

- ✅ `EmailJS initialized successfully` - Everything is working
- ⚠️ `Missing EmailJS environment variables` - Check your .env file
- ❌ `EmailJS configuration is incomplete` - Fix missing variables

## 🔒 **Security Notes**

### **Development (.env)**
- ✅ Safe to commit to version control
- ✅ Contains example/placeholder values
- ✅ Used for development setup

### **Production (.env.local)**
- ❌ **NEVER commit to version control**
- ✅ Contains actual credentials
- ✅ Used for production deployment

### **Git Ignore**
Make sure `.env.local` is in your `.gitignore`:

```gitignore
# Environment files
.env.local
.env.production
.env.staging
```

## 🚀 **Step 5: Test Your Setup**

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Check the browser console for EmailJS initialization messages

3. Test each form:
   - Contact form
   - Booking form
   - Career application forms

## 🔍 **Troubleshooting**

### **Missing Environment Variables**
```
⚠️ Missing EmailJS environment variables: ['VITE_EMAILJS_SERVICE_ID']
```

**Solution:** Check your `.env` file and ensure all variables are set.

### **Invalid Credentials**
```
❌ EmailJS configuration is incomplete
```

**Solution:** Verify your EmailJS credentials are correct.

### **Template Not Found**
```
EmailJS error: Template not found
```

**Solution:** Check your template IDs and ensure templates are published.

## 📋 **Environment Variables Reference**

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_EMAILJS_SERVICE_ID` | Your EmailJS service ID | `service_abc123` |
| `VITE_EMAILJS_CONTACT_TEMPLATE_ID` | Contact form template ID | `template_xyz789` |
| `VITE_EMAILJS_BOOKING_TEMPLATE_ID` | Booking form template ID | `template_def456` |
| `VITE_EMAILJS_CAREER_TEMPLATE_ID` | Career application template ID | `template_ghi789` |
| `VITE_EMAILJS_PUBLIC_KEY` | Your EmailJS public key | `user_jkl012` |

## 🎯 **Next Steps**

1. ✅ Set up your EmailJS account
2. ✅ Create your email templates
3. ✅ Configure environment variables
4. ✅ Test all forms
5. ✅ Deploy to production

Your EmailJS setup is now complete and secure! 