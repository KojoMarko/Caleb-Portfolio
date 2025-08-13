'use server';

import { sendContactEmail, ContactEmailInput } from '@/ai/flows/send-contact-email-flow';

export async function submitContactForm(values: ContactEmailInput): Promise<{ success: boolean, message: string }> {
  try {
    const result = await sendContactEmail(values);
    if (result.success) {
      return { success: true, message: "Thanks for reaching out. I'll get back to you soon." };
    } else {
      return { success: false, message: "Sorry, there was an error sending your message. Please try again later." };
    }
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, message: "Sorry, there was an unexpected error. Please try again later." };
  }
}
