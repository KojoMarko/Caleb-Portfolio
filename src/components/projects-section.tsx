import SectionHeading from './section-heading';
import { FolderGit, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product catalogs, shopping cart, and payment integration. This project involved building a scalable and responsive e-commerce platform from scratch. Key features include user authentication, product management, and a streamlined checkout process with Stripe integration.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'ecommerce platform',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: 'https://github.com/calebsenyah/ecommerce-platform',
  },
  {
    title: 'Real-time Chat App',
    description: 'A web-based chat application enabling instant communication between users. Built with Socket.IO and React, users can join different rooms and send private messages. The application features a clean, modern interface and is designed to handle multiple concurrent connections efficiently.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'chat application',
    tags: ['React', 'Socket.IO', 'Node.js'],
    link: 'https://github.com/calebsenyah/chat-app',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets with charts and graphs. Built using D3.js and React, it provides powerful filtering and sorting options to help users gain insights from their data. The project emphasizes performance and a smooth user experience.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'data dashboard',
    tags: ['React', 'D3.js', 'Data Viz'],
    link: 'https://github.com/calebsenyah/data-dashboard',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <SectionHeading number="03." title="Things I've Built" />
      <div className="mt-8 space-y-16">
        {projects.map((project, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center group">
            <div className="md:col-span-7 relative">
              <div className="absolute inset-0 bg-primary/20 rounded-lg z-0 transition-colors group-hover:bg-transparent"></div>
              <a href={project.link || '#'} target="_blank" rel="noopener noreferrer">
                 <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-lg z-10 opacity-75 group-hover:opacity-100 transition-opacity"
                  data-ai-hint={project.imageHint}
                />
              </a>
            </div>
            <div className={`md:col-span-5 space-y-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
              <p className="text-primary font-mono text-sm">Featured Project</p>
              <h3 className="text-2xl font-bold text-slate-200 hover:text-primary transition-colors">
                 <a href={project.link || '#'} target="_blank" rel="noopener noreferrer">{project.title}</a>
              </h3>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <p className="text-muted-foreground">{project.description}</p>
              </div>
              <div className={`flex flex-wrap gap-2 font-mono text-sm text-muted-foreground ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                {project.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
              <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <FolderGit className="h-6 w-6" />
                  </a>
                )}
                 <a href={project.link || '#'} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="h-6 w-6" />
                  </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}