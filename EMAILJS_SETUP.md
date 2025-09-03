# EmailJS Configuration for SSS Hospital

# To set up EmailJS for appointment booking:

# 1. Create an account at https://www.emailjs.com/

# 2. Create a new email service (Gmail, Outlook, etc.)

# 3. Create an email template with the following variables:

# - {{to_name}}

# - {{to_email}}

# - {{from_name}}

# - {{from_email}}

# - {{phone}}

# - {{department}}

# - {{doctor}}

# - {{appointment_date}}

# - {{appointment_time}}

# - {{message}}

# - {{subject}}

# 4. Replace the credentials in AppointmentPopup.jsx:

# - service_sss_hospital (your service ID)

# - template_appointment (your template ID)

# - YOUR_EMAILJS_PUBLIC_KEY (your public key)

# 5. Configure your email service to send to: akileshakileshs1234@gmail.com

# Sample EmailJS Template:

# Subject: {{subject}}

#

# Hello {{to_name}},

#

# New appointment request received:

#

# Patient Details:

# Name: {{from_name}}

# Email: {{from_email}}

# Phone: {{phone}}

#

# Appointment Details:

# Department: {{department}}

# Doctor: {{doctor}}

# Date: {{appointment_date}}

# Time: {{appointment_time}}

#

# Message: {{message}}

#

# Please contact the patient to confirm the appointment.

#

# Best regards,

# SSS Hospital Website
