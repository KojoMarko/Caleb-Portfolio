import SectionTitle from './section-title';
import { FolderGit } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product catalogs, shopping cart, and payment integration.',
    link: 'https://github.com/calebsenyah/ecommerce-platform',
  },
  {
    title: 'Real-time Chat App',
    description: 'A web-based chat application enabling instant communication between users.',
    link: 'https://github.com/calebsenyah/chat-app',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets with charts and graphs.',
    link: 'https://github.com/calebsenyah/data-dashboard',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="services container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Projects" description="My Git Repos 🔥" />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {projects.map((project, index) => (
          <a href={project.link} key={index} target="_blank" rel="noopener noreferrer" className="block group">
            <Card className="h-full transition-all duration-300 group-hover:border-primary group-hover:shadow-lg">
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full border-2 border-primary/30">
                            <FolderGit className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle>{project.title}</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
