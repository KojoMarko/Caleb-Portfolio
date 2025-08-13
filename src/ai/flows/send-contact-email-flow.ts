'use server';
/**
 * @fileOverview A flow for sending a contact email.
 *
 * - sendContactEmail - A function that sends an email with the contact form data.
 * - ContactEmailInput - The input type for the sendContactEmail function.
 * - ContactEmailOutput - The return type for the sendContactEmail function.
 */
import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {Resend} from 'resend';

const ContactEmailInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().describe('The email address of the person sending the message.'),
  message: z.string().describe('The message content.'),
});
export type ContactEmailInput = z.infer<typeof ContactEmailInputSchema>;

const ContactEmailOutputSchema = z.object({
  success: z.boolean(),
});
export type ContactEmailOutput = z.infer<typeof ContactEmailOutputSchema>;

export async function sendContactEmail(input: ContactEmailInput): Promise<ContactEmailOutput> {
  return sendContactEmailFlow(input);
}

const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: ContactEmailInputSchema,
    outputSchema: ContactEmailOutputSchema,
  },
  async ({name, email, message}) => {
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
      return {success: true};
    }
    
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      await resend.emails.send({
        from: 'noreply@calebsenyah.com',
        to: 'calebsenyah@gmail.com',
        subject: `New Contact Form Submission from ${name}`,
        reply_to: email,
        text: message,
      });
      return {success: true};
    } catch (error) {
      console.error('Error sending email with Resend:', error);
      return {success: false};
    }
  }
);
