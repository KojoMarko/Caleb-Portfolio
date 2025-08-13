'use server';
/**
 * @fileOverview An AI image generation flow.
 *
 * - generateArt - A function that generates an image from a text prompt.
 * - GenerateArtInput - The input type for the generateArt function.
 * - GenerateArtOutput - The return type for the generateArt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateArtInputSchema = z.object({
  prompt: z.string().describe('A text prompt describing the image to generate.'),
});
export type GenerateArtInput = z.infer<typeof GenerateArtInputSchema>;

const GenerateArtOutputSchema = z.object({
  imageUrl: z.string().describe("The data URI of the generated image. Expected format: 'data:image/png;base64,<encoded_data>'."),
});
export type GenerateArtOutput = z.infer<typeof GenerateArtOutputSchema>;

export async function generateArt(input: GenerateArtInput): Promise<GenerateArtOutput> {
  return generateArtFlow(input);
}

const generateArtFlow = ai.defineFlow(
  {
    name: 'generateArtFlow',
    inputSchema: GenerateArtInputSchema,
    outputSchema: GenerateArtOutputSchema,
  },
  async ({prompt}) => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media.url) {
        throw new Error('Image generation failed.');
    }

    return {imageUrl: media.url};
  }
);
