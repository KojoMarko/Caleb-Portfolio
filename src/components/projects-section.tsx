'use client';
import SectionTitle from './section-title';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Code, Cloud, HeartPulse, Bus } from 'lucide-react';

const projects = {
  software: [
    {
      title: 'Azushop E-commerce Platform',
      description: 'A full-featured e-commerce site with product catalogs, shopping cart, and payment integration using React and AWS.',
      link: 'https://github.com/KojoMarko/azushop',
      icon: <Code className="h-8 w-8 text-primary" />,
    },
    {
      title: 'Azushop Admin Dashboard',
      description: 'The administrative dashboard for managing the Azushop e-commerce platform.',
      link: 'https://github.com/KojoMarko/azushop-admin',
      icon: <Code className="h-8 w-8 text-primary" />,
    },
    {
      title: 'Gclient Ed-Tech Platform',
      description: 'An educational platform designed to teach tech skills, featuring real-time communication and interactive learning modules.',
      link: 'https://github.com/KojoMarko/gclient',
      icon: <Code className="h-8 w-8 text-primary" />,
    },
    {
      title: 'G-Client Admin Dashboard',
      description: 'The administrative dashboard for managing the G-Client platform, including users, courses, and content.',
      link: 'https://github.com/KojoMarko/g-client-admin',
      icon: <Code className="h-8 w-8 text-primary" />,
    },
    {
      title: 'Trotro App Concept',
      description: 'A mobile application concept for navigating Ghanas public transport system, featuring real-time tracking and route planning.',
      link: 'https://github.com/KojoMarko/trotro-app',
      icon: <Bus className="h-8 w-8 text-primary" />,
    },
    {
      title: 'ThermoTrack IoT Solution',
      description: 'The user-facing application for the IoT temperature monitoring system, allowing real-time tracking and alerts.',
      link: 'https://github.com/KojoMarko/thermotrack-app',
      icon: <Code className="h-8 w-8 text-primary" />,
    },
    {
      title: 'DevJobs App',
      description: 'A frontend project for a job search platform, allowing users to search and filter for developer roles.',
      link: 'https://devjobs-app-seven.vercel.app/',
      icon: <Code className="h-8 w-8 text-primary" />,
    },
  ],
  biomedical: [
    {
      title: 'ThermoTrack IoT Solution',
      description: 'An IoT-based temperature monitoring system for medical supplies, ensuring vaccine and sample integrity during transport.',
      link: 'https://github.com/KojoMarko/thermotrack-app',
      icon: <HeartPulse className="h-8 w-8 text-primary" />,
    },
     {
      title: 'Aromatase Inhibitor Predictor',
      description: 'A machine learning model to predict the suitability of aromatase inhibitors for breast cancer patients based on genetic markers.',
      link: '#',
      icon: <HeartPulse className="h-8 w-8 text-primary" />,
    },
  ],
  cloud: [
     {
      title: 'Scalable Web Hosting Architecture',
      description: 'Designed and deployed a fault-tolerant, scalable hosting solution on AWS using EC2, S3, and RDS for a high-traffic web application.',
      link: '#',
      icon: <Cloud className="h-8 w-8 text-primary" />,
    },
    {
      title: 'Serverless Data Processing Pipeline',
      description: 'An AWS Lambda-based pipeline to process and analyze large datasets from medical devices in real-time.',
      link: '#',
      icon: <Cloud className="h-8 w-8 text-primary" />,
    },
  ]
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="services">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Projects" description="My Git Repos 🔥" />

            <Tabs defaultValue="software" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="software">Software Engineering</TabsTrigger>
                    <TabsTrigger value="biomedical">Biomedical & IoT</TabsTrigger>
                    <TabsTrigger value="cloud">Cloud Solutions</TabsTrigger>
                </TabsList>
                <TabsContent value="software">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
                        {projects.software.map((project, index) => (
                          <a href={project.link} key={index} target="_blank" rel="noopener noreferrer" className="block group">
                            <Card className="h-full transition-all duration-300 group-hover:border-primary group-hover:shadow-lg">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full border-2 border-primary/30">
                                            {project.icon}
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
                </TabsContent>
                <TabsContent value="biomedical">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
                        {projects.biomedical.map((project, index) => (
                          <a href={project.link} key={index} target="_blank" rel="noopener noreferrer" className="block group">
                            <Card className="h-full transition-all duration-300 group-hover:border-primary group-hover:shadow-lg">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full border-2 border-primary/30">
                                            {project.icon}
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
                </TabsContent>
                <TabsContent value="cloud">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
                        {projects.cloud.map((project, index) => (
                          <a href={project.link} key={index} target="_blank" rel="noopener noreferrer" className="block group">
                            <Card className="h-full transition-all duration-300 group-hover:border-primary group-hover:shadow-lg">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full border-2 border-primary/30">
                                            {project.icon}
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
                </TabsContent>
            </Tabs>
        </div>
    </section>
  );
}
