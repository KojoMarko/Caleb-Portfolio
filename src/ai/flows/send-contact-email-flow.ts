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

const emailPrompt = ai.definePrompt({
  name: 'sendContactEmailPrompt',
  input: {schema: ContactEmailInputSchema},
  output: {schema: z.object({
    subject: z.string(),
    body: z.string(),
  })},
  prompt: `Generate an email subject and body for a new contact form submission.

From: {{name}} <{{email}}>
Message:
{{{message}}}

The subject should be "New Contact Form Submission from {{name}}".
The body should be a simple text format of the message.
`,
});

const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: ContactEmailInputSchema,
    outputSchema: ContactEmailOutputSchema,
  },
  async input => {
    const {output} = await emailPrompt(input);
    if (!output) {
      return {success: false};
    }
    
    // In a real application, you would integrate with an email sending service like SendGrid or Resend.
    // For this example, we'll just log the email to the console.
    console.log('---- New Email ----');
    console.log(`To: calebsenyah@gmail.com`);
    console.log(`From: noreply@calebsenyah.com`);
    console.log(`Subject: ${output.subject}`);
    console.log('');
    console.log(output.body);
    console.log('-------------------');

    return {success: true};
  }
);
