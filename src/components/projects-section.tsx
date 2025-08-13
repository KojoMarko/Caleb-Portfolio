'use client';
import { useState, useMemo } from 'react';
import SectionTitle from './section-title';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Code, Cloud, HeartPulse, Bus, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

const projects = {
  software: [
    {
      title: 'Azushop E-commerce Platform',
      description: 'A full-featured e-commerce site with product catalogs, shopping cart, and payment integration using React and AWS.',
      link: 'https://azushop-rose.vercel.app/',
      repo: 'https://github.com/KojoMarko/azushop',
      icon: <Code className="h-8 w-8 text-primary" />,
      tags: ['React', 'AWS', 'E-commerce'],
    },
    {
      title: 'Azushop Admin Dashboard',
      description: 'The administrative dashboard for managing the Azushop e-commerce platform.',
      link: 'https://azushop-admin.vercel.app/',
      repo: 'https://github.com/KojoMarko/azushop-admin',
      icon: <Code className="h-8 w-8 text-primary" />,
      tags: ['React', 'Admin'],
    },
    {
      title: 'Gclient Ed-Tech Platform',
      description: 'An educational platform designed to teach tech skills, featuring real-time communication and interactive learning modules.',
      link: 'https://gclient-brown.vercel.app/',
      repo: 'https://github.com/KojoMarko/gclient',
      icon: <Code className="h-8 w-8 text-primary" />,
      tags: ['React', 'Ed-Tech'],
    },
    {
      title: 'G-Client Admin Dashboard',
      description: 'The administrative dashboard for managing the G-Client platform.',
      link: 'https://g-client-admin.vercel.app/',
      repo: 'https://github.com/KojoMarko/g-client-admin',
      icon: <Code className="h-8 w-8 text-primary" />,
      tags: ['React', 'Admin'],
    },
    {
      title: 'Trotro App Concept',
      description: 'A mobile application concept for navigating Ghanas public transport system, featuring real-time tracking and route planning.',
      link: 'https://trotro-app-oriu.vercel.app/',
      repo: 'https://github.com/KojoMarko/trotro-app',
      icon: <Bus className="h-8 w-8 text-primary" />,
      tags: ['Mobile', 'Concept'],
    },
    {
      title: 'ThermoTrack IoT Solution',
      description: 'The user-facing application for the IoT temperature monitoring system, allowing real-time tracking and alerts.',
      link: 'https://thermotrack-app.vercel.app/',
      repo: 'https://github.com/KojoMarko/thermotrack-app',
      icon: <Code className="h-8 w-8 text-primary" />,
      tags: ['IoT', 'React', 'Next.js'],
    },
    {
      title: 'DevJobs App',
      description: 'A frontend project for a job search platform.',
      link: 'https://devjobs-app-seven.vercel.app/',
      repo: 'https://github.com/KojoMarko/devjobs-app',
      icon: <Code className="h-8 w-8 text-primary" />,
      tags: ['React', 'Frontend'],
    },
  ],
  biomedical: [
    {
      title: 'ThermoTrack IoT Solution',
      description: 'An IoT-based temperature monitoring system for medical supplies, ensuring vaccine and sample integrity during transport.',
      link: 'https://github.com/KojoMarko/thermotrack',
      repo: 'https://github.com/KojoMarko/thermotrack',
      icon: <HeartPulse className="h-8 w-8 text-primary" />,
      tags: ['IoT', 'Biomedical', 'Hardware'],
    },
     {
      title: 'Aromatase Inhibitor Predictor',
      description: 'A machine learning model to predict the suitability of aromatase inhibitors for breast cancer patients based on genetic markers.',
      link: '#',
      repo: '#',
      icon: <HeartPulse className="h-8 w-8 text-primary" />,
      tags: ['Machine Learning', 'Biomedical'],
    },
    {
      title: 'VITROS® 5600 Integrated System installation.',
      description: 'Led the installation and commissioning of Vitros 5600 Integrated Systems, a dry chemistry platform known for its reliability and speed. Contributions included system installation, calibration, quality control, and operator support.',
      link: 'https://www.linkedin.com/posts/caleb-senyah_fieldserviceengineer-biomedicalengineering-activity-7343629780044464128-GuwW',
      repo: 'https://www.linkedin.com/posts/caleb-senyah_fieldserviceengineer-biomedicalengineering-activity-7343629780044464128-GuwW',
      icon: <HeartPulse className="h-8 w-8 text-primary" />,
      tags: ['Biomedical', 'Field Service'],
    }
  ],
  cloud: [
     {
      title: 'Scalable Web Hosting Architecture',
      description: 'Designed and deployed a fault-tolerant, scalable hosting solution on AWS using EC2, S3, and RDS for a high-traffic web application.',
      link: '#',
      repo: '#',
      icon: <Cloud className="h-8 w-8 text-primary" />,
      tags: ['AWS', 'Architecture', 'EC2', 'S3'],
    },
    {
      title: 'Serverless Data Processing Pipeline',
      description: 'An AWS Lambda-based pipeline to process and analyze large datasets from medical devices in real-time.',
      link: '#',
      repo: '#',
      icon: <Cloud className="h-8 w-8 text-primary" />,
      tags: ['AWS', 'Serverless', 'Lambda'],
    },
  ]
};

type ProjectCategory = keyof typeof projects;

const ProjectCard = ({ project }: { project: any }) => (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block group h-full">
        <Card className="h-full flex flex-col transition-all duration-300 group-hover:border-primary group-hover:shadow-lg">
            <CardHeader>
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full border-2 border-primary/30">
                        {project.icon}
                    </div>
                    <CardTitle className="leading-tight">{project.title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
                <div>
                    <p className="text-muted-foreground flex-grow">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map((tag: string) => (
                            <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">{tag}</span>
                        ))}
                    </div>
                </div>
                {project.repo && project.repo !== '#' && (
                    <div className="mt-4">
                        <a 
                            href={project.repo} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                        >
                            {project.repo.includes('linkedin.com') ? <Linkedin size={16} /> : <Github size={16} />}
                            View Post
                        </a>
                    </div>
                )}
            </CardContent>
        </Card>
    </a>
);

const ProjectList = ({ category, selectedTag }: { category: ProjectCategory, selectedTag: string | null }) => {
    const filteredProjects = useMemo(() => {
        const categoryProjects = projects[category];
        if (!selectedTag) {
            return categoryProjects;
        }
        return categoryProjects.filter(p => p.tags.includes(selectedTag));
    }, [category, selectedTag]);

    if (filteredProjects.length === 0) {
        return (
            <div className="text-center py-16 text-muted-foreground">
                No projects found for the selected filter.
            </div>
        )
    }

    return (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
}

export default function ProjectsSection() {
    const [activeTab, setActiveTab] = useState<ProjectCategory>('software');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const currentTags = useMemo(() => {
        return Array.from(new Set(projects[activeTab].flatMap(p => p.tags)));
    }, [activeTab]);

    const handleTabChange = (value: string) => {
        setActiveTab(value as ProjectCategory);
        setSelectedTag(null); // Reset filter when changing tabs
    }

  return (
    <section id="projects" className="services">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Projects" description="Where Passion Meets Purpose: Crafting Digital Solutions" />

            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="software">Software Engineering</TabsTrigger>
                    <TabsTrigger value="biomedical">Biomedical & IoT</TabsTrigger>
                    <TabsTrigger value="cloud">Cloud Solutions</TabsTrigger>
                </TabsList>

                <div className="my-8">
                    <div className="flex flex-wrap justify-center gap-2">
                        <Button variant={!selectedTag ? 'default' : 'secondary'} onClick={() => setSelectedTag(null)}>All</Button>
                        {currentTags.map(tag => (
                            <Button key={tag} variant={selectedTag === tag ? 'default' : 'secondary'} onClick={() => setSelectedTag(tag)}>{tag}</Button>
                        ))}
                    </div>
                </div>

                <TabsContent value="software" forceMount={activeTab === 'software'}>
                    <ProjectList category="software" selectedTag={selectedTag} />
                </TabsContent>
                <TabsContent value="biomedical" forceMount={activeTab === 'biomedical'}>
                   <ProjectList category="biomedical" selectedTag={selectedTag} />
                </TabsContent>
                <TabsContent value="cloud" forceMount={activeTab === 'cloud'}>
                    <ProjectList category="cloud" selectedTag={selectedTag} />
                </TabsContent>
            </Tabs>
        </div>
    </section>
  );
}
