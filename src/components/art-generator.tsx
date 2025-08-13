'use client';

import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { generateArt, GenerateArtInput } from '@/ai/flows/art-generator-flow';
import Image from 'next/image';
import { Skeleton } from './ui/skeleton';
import { Wand2, Loader } from 'lucide-react';

export default function ArtGenerator() {
    const [prompt, setPrompt] = useState('');
    const [generatedImage, setGeneratedImage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGenerate = async () => {
        if (!prompt.trim()) {
            setError('Please enter a prompt.');
            return;
        }
        setError('');
        setIsLoading(true);
        setGeneratedImage('');

        try {
            const input: GenerateArtInput = { prompt };
            const result = await generateArt(input);
            setGeneratedImage(result.imageUrl);
        } catch (err) {
            setError('Sorry, something went wrong while generating the image.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Wand2 /> AI Art Generator</CardTitle>
                <CardDescription>
                    Bring your ideas to life. Enter a text prompt and let AI create a unique image for you.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 space-y-4">
                        <div className="flex gap-2">
                            <Input 
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="e.g., A majestic lion in a futuristic city"
                                disabled={isLoading}
                                onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                            />
                            <Button onClick={handleGenerate} disabled={isLoading}>
                                {isLoading ? <Loader className="animate-spin" /> : 'Generate'}
                            </Button>
                        </div>
                         {error && <p className="text-sm text-destructive">{error}</p>}
                    </div>

                    <div className="w-full md:w-80 h-80">
                         {isLoading && <Skeleton className="w-full h-full" />}
                         {!isLoading && generatedImage && (
                            <Image
                                src={generatedImage}
                                alt="AI Generated Art"
                                width={320}
                                height={320}
                                className="rounded-lg object-cover w-full h-full"
                            />
                         )}
                         {!isLoading && !generatedImage && (
                            <div className="w-full h-full rounded-lg bg-muted flex items-center justify-center text-muted-foreground text-center p-4">
                                Your generated image will appear here.
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
