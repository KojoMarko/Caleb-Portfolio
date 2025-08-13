import SectionHeading from './section-heading';
import { FolderGit, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product catalogs, shopping cart, and payment integration. Built a scalable and responsive platform from scratch with Stripe integration.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'ecommerce platform',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: 'https://github.com/calebsenyah/ecommerce-platform',
  },
  {
    title: 'Real-time Chat App',
    description: 'A web-based chat application enabling instant communication between users with different rooms and private messages. Built with Socket.IO and React for multiple concurrent connections.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'chat application',
    tags: ['React', 'Socket.IO', 'Node.js'],
    link: 'https://github.com/calebsenyah/chat-app',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets with charts and graphs. Built using D3.js and React, it provides powerful filtering and sorting options to gain insights.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'data dashboard',
    tags: ['React', 'D3.js', 'Data Viz'],
    link: 'https://github.com/calebsenyah/data-dashboard',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <SectionHeading title="Things I've Built" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden group">
             <div className="overflow-hidden">
                <a href={project.link || '#'} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={project.imageHint}
                  />
                </a>
              </div>
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <a href={project.link || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {project.title}
                </a>
                <div className="flex items-center gap-3 shrink-0">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <FolderGit className="h-5 w-5" />
                    </a>
                  )}
                   <a href={project.link || '#'} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <p className="text-muted-foreground flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
