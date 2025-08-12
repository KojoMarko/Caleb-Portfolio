"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from './ui/dialog';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Eye, Code } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  imageHint: string;
  tags: string[];
  link?: string;
};

export default function ProjectCard({ title, description, longDescription, image, imageHint, tags, link }: ProjectCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <CardHeader className="p-0">
            <div className="aspect-video overflow-hidden">
              <Image 
                src={image} 
                alt={title}
                width={600} 
                height={400} 
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={imageHint}
              />
            </div>
            <div className="p-6">
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription className="mt-2">{description}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <div className="aspect-video overflow-hidden rounded-lg mb-4">
            <Image 
              src={image} 
              alt={title} 
              width={1200} 
              height={800} 
              className="object-cover w-full h-full"
              data-ai-hint={imageHint}
            />
          </div>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          <DialogDescription className="pt-4 text-base text-muted-foreground">
            {longDescription}
          </DialogDescription>
        </DialogHeader>
        {link && (
          <div className="flex gap-4 pt-4">
            <Button asChild>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Code className="mr-2 h-4 w-4" /> View Code
              </a>
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
