# EmailJS Setup Guide

Follow these steps to set up EmailJS for automatic email sending:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Connect your Gmail account (skyjnv124@gmail.com)
5. Note down the **Service ID** (e.g., "service_abc123")

## Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Template Name:** Portfolio Contact Form

**Subject:** New message from {{user_name}} - {{subject}}

**Content:**
```
Name: {{user_name}}
Email: {{user_email}}
Subject: {{subject}}

Message:
{{message}}
```

4. Save the template and note down the **Template ID** (e.g., "template_xyz789")

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., "user_def456")

## Step 5: Update Your Code

Replace the placeholder values in `src/pages/Contact.tsx`:

```typescript
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',     // Replace with your Service ID
  'YOUR_TEMPLATE_ID',    // Replace with your Template ID
  form.current,
  'YOUR_PUBLIC_KEY'      // Replace with your Public Key
);
```

**Example:**
```typescript
const result = await emailjs.sendForm(
  'service_abc123',
  'template_xyz789',
  form.current,
  'user_def456'
);
```

## Step 6: Test the Form

1. Start your development server: `npm start`
2. Go to the Contact page
3. Fill out and submit the form
4. Check your email (skyjnv124@gmail.com) for the message

## Troubleshooting

- **Emails not sending:** Check your EmailJS dashboard for error logs
- **Service ID not found:** Make sure you've connected your Gmail account properly
- **Template not found:** Verify the template ID is correct
- **Public key issues:** Ensure you're using the correct public key

## Free Plan Limits

- 200 emails per month
- Perfect for portfolio websites
- Upgrade if you need more emails

## Security Note

The public key is safe to use in client-side code. EmailJS handles the security on their servers. 