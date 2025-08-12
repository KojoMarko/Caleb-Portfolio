"use client"

import SectionHeading from './section-heading';
import { FolderGit2 } from 'lucide-react';
import ProjectCard from './project-card';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product catalogs, shopping cart, and payment integration.',
    longDescription: 'This project involved building a scalable and responsive e-commerce platform from scratch. Key features include user authentication, product management, a streamlined checkout process with Stripe integration, and an admin dashboard for managing orders and inventory. The front-end was built with React and Redux, while the back-end uses Node.js, Express, and MongoDB.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'ecommerce platform',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: 'https://github.com/calebsenyah/ecommerce-platform',
  },
  {
    title: 'Real-time Chat App',
    description: 'A web-based chat application enabling instant communication between users.',
    longDescription: 'A real-time chat application built with Socket.IO and React. Users can join different rooms, send private messages, and see who is online. The application features a clean, modern interface and is designed to handle multiple concurrent connections efficiently. The backend is powered by Node.js and Express.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'chat application',
    tags: ['React', 'Socket.IO', 'Node.js', 'Express'],
    link: 'https://github.com/calebsenyah/chat-app',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets with charts and graphs.',
    longDescription: 'This dashboard allows users to upload their data and generate a variety of interactive visualizations, including bar charts, line graphs, and pie charts. Built using D3.js and React, it provides powerful filtering and sorting options to help users gain insights from their data. The project emphasizes performance and a smooth user experience even with large datasets.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'data dashboard',
    tags: ['React', 'D3.js', 'Data Viz'],
    link: 'https://github.com/calebsenyah/data-dashboard',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          icon={FolderGit2}
          title="My Projects"
          description="A selection of projects that showcase my skills and passion for development."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
