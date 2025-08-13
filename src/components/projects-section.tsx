import SectionTitle from './section-title';
import { FolderGit } from 'lucide-react';

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
    <section id="projects" className="services container mx-auto px-6">
      <SectionTitle title="Projects" description="My Git Repos 🔥" />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {projects.map((project, index) => (
          <a href={project.link} key={index} target="_blank" rel="noopener noreferrer" className="block p-6 bg-secondary rounded-lg hover:shadow-lg transition-shadow group">
            <div className="flex flex-col items-start gap-4">
              <div className="icon-box-project bg-primary p-3 rounded-full">
                <FolderGit className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h4>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
