
'use client';

import { useState, useMemo } from 'react';
import Header from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const articles = [
    {
        title: "The Ultimate Guide to Staying Ahead of a Competition as a Software Developer in the Age of AI",
        description: "In the rapidly evolving landscape of software development, the rise of Artificial Intelligence (AI) has been both a catalyst for innovation and a source of apprehension for many developers.",
        link: "https://medium.com/@calebmakafui/the-ultimate-guide-to-staying-ahead-of-the-competition-as-a-software-developer-in-the-age-of-ai-and-7241a895c85f",
        tags: ["AI", "Career", "Software Development"],
    },
    {
        title: "Is There Anything Too Hard for God?",
        description: "A reflection on faith and the limitless power of God, encouraging readers to trust in His ability to overcome any challenge.",
        link: "https://medium.com/@calebmakafui/is-there-anything-too-hard-for-god-d01bd524595b",
        tags: ["Christianity"],
    },
     {
        title: "Nature Abhors a Vacuum",
        description: "A philosophical reflection on the principle that empty spaces are always filled, exploring its implications on our lives and purpose.",
        link: "https://medium.com/@calebmakafui/nature-abhors-a-vacuum-28e6d71eee9d",
        tags: ["Christianity"],
    },
    {
        title: "The Ripple Effect of Honor",
        description: "An exploration of how honor and integrity can create far-reaching positive impacts in our personal and professional lives.",
        link: "https://medium.com/@calebmakafui/the-ripple-effect-of-honor-525987df93b6",
        tags: ["Christianity"],
    },
    {
        title: "Understanding Frontend Development and the AWS Cloud",
        description: "A comprehensive guide to leveraging AWS services for building and deploying modern, scalable frontend applications.",
        link: "https://medium.com/@calebmakafui/understanding-frontend-development-and-the-aws-cloud-13f51a733e83",
        tags: ["AWS", "Software Development", "Frontend"],
    },
    {
        title: "Introduction to Test-Driven Development (TDD)",
        description: "A beginner-friendly introduction to the core principles of Test-Driven Development and its benefits in creating robust, maintainable code.",
        link: "https://medium.com/@calebmakafui/introduction-to-test-driven-development-tdd-b035r89t554k",
        tags: ["TDD", "Software Development"],
    },
    {
        title: "TMP G-Client Learner Platform (Phase 1): Building a Dynamic Navbar with Next.js & TypeScript",
        description: "A step-by-step guide to creating a responsive navigation bar using Next.js, TypeScript, and Tailwind CSS for a modern learning platform.",
        link: "https://dev.to/calebmakafui/tmp-gclient-learner-platform-phase-1-building-a-dynamic-navbar-with-nextjs-typescript-and-3p5p",
        tags: ["Next.js", "Tutorial", "Frontend"],
    },
    {
        title: "TMP G-Client Learner Platform (Phase 1): Building a Learner Portal with Next.js & TypeScript",
        description: "A step-by-step guide on building a learner portal using Next.js, TypeScript, and modern development practices.",
        link: "https://dev.to/calebmakafui/tmp-gclient-learner-platform-phase-1-building-a-learner-portal-with-nextjs-typescript-and-38jm",
        tags: ["Next.js", "Tutorial", "Frontend"],
    },
    {
        title: "TMP G-Client Learner Platform (Phase 1): Project Kickoff Update",
        description: "An update on the project kickoff for the G-Client Learner Platform, outlining the initial steps and goals.",
        link: "https://dev.to/calebmakafui/tmp-gclient-learner-platform-phase-1-project-kickoff-update-1-nd8",
        tags: ["Next.js", "Project Management"],
    },
    {
        title: "The Role of IoT in Modern Healthcare",
        description: "An exploration of how Internet of Things devices are revolutionizing patient monitoring and treatment.",
        link: "#",
        tags: ["IoT", "Healthcare"],
    },
    {
        title: "Scalable Frontend Architectures with Next.js",
        description: "A deep dive into building maintainable and high-performance web applications using Next.js.",
        link: "#",
        tags: ["Next.js", "Software Development", "Frontend"],
    },
    {
        title: "Predictive Analytics in Biomedical Engineering",
        description: "How machine learning models can forecast patient outcomes and improve diagnostic accuracy.",
        link: "#",
        tags: ["Machine Learning", "Healthcare", "AI"],
    }
];

export default function WritingsPage() {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const allTags = useMemo(() => {
        const tags = new Set<string>();
        articles.forEach(article => {
            article.tags.forEach(tag => tags.add(tag));
        });
        return Array.from(tags).sort();
    }, []);

    const filteredArticles = useMemo(() => {
        if (!selectedTag) {
            return articles;
        }
        return articles.filter(article => article.tags.includes(selectedTag));
    }, [selectedTag]);

    return (
        <>
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">Writings</h1>
                    <p className="mt-4 text-lg leading-8 text-muted-foreground">
                        Sharing my thoughts on technology, healthcare, and everything in between.
                    </p>
                </div>

                <div className="my-12">
                    <div className="flex flex-wrap justify-center gap-2">
                        <Button variant={!selectedTag ? 'default' : 'secondary'} onClick={() => setSelectedTag(null)}>All</Button>
                        {allTags.map(tag => (
                            <Button key={tag} variant={selectedTag === tag ? 'default' : 'secondary'} onClick={() => setSelectedTag(tag)}>{tag}</Button>
                        ))}
                    </div>
                </div>

                <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredArticles.map((article) => (
                        <a href={article.link} key={article.title} target="_blank" rel="noopener noreferrer" className="block group">
                            <Card className="h-full transition-all duration-300 group-hover:border-primary group-hover:shadow-lg">
                                <CardHeader>
                                    <CardTitle>{article.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{article.description}</p>
                                    <div className="mt-4 flex items-center text-primary font-semibold">
                                        Read article <ArrowRight className="ml-2 h-4 w-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                    ))}
                </div>
                 {filteredArticles.length === 0 && (
                    <div className="text-center py-16 text-muted-foreground">
                        No articles found for the selected filter.
                    </div>
                )}
            </main>
        </>
    )
}
