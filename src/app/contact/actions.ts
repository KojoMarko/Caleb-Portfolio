'use server';

import { z } from "zod";
import { Resend } from 'resend';

const ContactEmailInputSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export type ContactEmailInput = z.infer<typeof ContactEmailInputSchema>;

export async function submitContactForm(values: ContactEmailInput): Promise<{ success: boolean, message: string }> {
  const parsed = ContactEmailInputSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: "Invalid form data." };
  }

  const { name, email, message } = parsed.data;

  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set. Email will be logged to console instead of sent.');
      console.log('---- New Email ----');
      console.log(`To: calebsenyah@gmail.com`);
      console.log(`From: noreply@calebsenyah.com`);
      console.log(`Reply-To: ${name} <${email}>`);
      console.log(`Subject: New Contact Form Submission from ${name}`);
      console.log('');
      console.log(message);
      console.log('-------------------');
      // Return success to avoid showing an error to the user in this case.
      return { success: true, message: "Thanks for reaching out. I'll get back to you soon." };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
        from: 'noreply@calebsenyah.com',
        to: 'calebsenyah@gmail.com',
        subject: `New Contact Form Submission from ${name}`,
        reply_to: email,
        text: message,
      });

    return { success: true, message: "Thanks for reaching out. I'll get back to you soon." };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, message: "Sorry, there was an unexpected error. Please try again later." };
  }
}
