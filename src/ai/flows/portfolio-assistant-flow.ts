'use server';
/**
 * @fileOverview A portfolio assistant that can answer questions about Caleb Senyah.
 *
 * - askAssistant - A function that takes a user's question and returns an answer.
 * - AssistantInput - The input type for the askAssistant function.
 * - AssistantOutput - The return type for the askAssistant function.
 */
import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AssistantInputSchema = z.object({
  query: z.string().describe('The user\'s question about Caleb Senyah.'),
});
export type AssistantInput = z.infer<typeof AssistantInputSchema>;

const AssistantOutputSchema = z.object({
  answer: z.string().describe('The AI-generated answer to the user\'s query.'),
});
export type AssistantOutput = z.infer<typeof AssistantOutputSchema>;

export async function askAssistant(input: AssistantInput): Promise<AssistantOutput> {
  return portfolioAssistantFlow(input);
}

const portfolioContext = `
Caleb Makafui Senyah is a multidisciplinary professional with expertise in fullstack development, AWS cloud solutions, and field service biomedical engineering. 

Education:
- BSc in Biomedical Engineering from the University of Ghana (2018-2022). Presented a project on using machine learning to predict aromatase inhibitor suitability for breast cancer patients.

Professional Experience:
- Ghana Ports and Harbours Authority (2022): Biomedical Service Engineer.
- Azubi Africa - Talent Mobility Program (2023): Focused on Frontend Development & AWS Cloud Solutions. Developed scalable web applications like Azushop, Gclient, and ThermoTrack using React, Next.js, Tailwind CSS, and AWS services.
- Mother of God Hospital (2024): Field Service Biomedical Engineer.
- Alos Paraklet Healthcare Ltd (2025): Field Service Biomedical Engineer.
- Today: Bridging technology and real-world impact by combining skills in software development, cloud architecture, and biomedical engineering to explore IoT, AI, and automation for healthcare and industrial applications.

Projects:
- Software: Azushop E-commerce, Azushop Admin, Gclient Ed-Tech, G-Client Admin, Trotro App Concept, ThermoTrack IoT App, DevJobs App.
- Biomedical: ThermoTrack IoT Solution (hardware and software), Aromatase Inhibitor Predictor (Machine Learning).
- Cloud: Scalable Web Hosting Architecture on AWS, Serverless Data Processing Pipeline on AWS.
`;

const assistantPrompt = ai.definePrompt({
  name: 'portfolioAssistantPrompt',
  input: {schema: AssistantInputSchema},
  output: {schema: AssistantOutputSchema},
  system: `You are a helpful AI assistant for Caleb Senyah's portfolio website. Your role is to answer questions from visitors about Caleb's skills, experience, and projects.

You must answer based *only* on the provided context. Be friendly, concise, and professional. If the question is outside the scope of the provided context or is inappropriate, politely decline to answer.

Context about Caleb Senyah:
${portfolioContext}
`,
  prompt: `A visitor has asked the following question: {{{query}}}`,
});

const portfolioAssistantFlow = ai.defineFlow(
  {
    name: 'portfolioAssistantFlow',
    inputSchema: AssistantInputSchema,
    outputSchema: AssistantOutputSchema,
  },
  async input => {
    const {output} = await assistantPrompt(input);
    return output!;
  }
);
