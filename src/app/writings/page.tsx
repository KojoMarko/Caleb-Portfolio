import Header from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const articles = [
    {
        title: "The Ultimate Guide to Staying Ahead of the Competition as a Software Developer in the Age of AI",
        description: "In the rapidly evolving landscape of software development, the rise of Artificial Intelligence (AI) has been both a catalyst for innovation and a source of apprehension for many developers.",
        link: "https://medium.com/@calebmakafui/the-ultimate-guide-to-staying-ahead-of-the-competition-as-a-software-developer-in-the-age-of-ai-and-7241a895c85f",
    },
    {
        title: "Is There Anything Too Hard for God?",
        description: "A reflection on faith and the limitless power of God, encouraging readers to trust in His ability to overcome any challenge.",
        link: "https://medium.com/@calebmakafui/is-there-anything-too-hard-for-god-d01bd524595b",
    },
    {
        title: "Understanding Frontend Development and the AWS Cloud",
        description: "A comprehensive guide to leveraging AWS services for building and deploying modern, scalable frontend applications.",
        link: "https://medium.com/@calebmakafui/understanding-frontend-development-and-the-aws-cloud-13f51a733e83",
    },
    {
        title: "Introduction to Test-Driven Development (TDD)",
        description: "A beginner-friendly introduction to the core principles of Test-Driven Development and its benefits in creating robust, maintainable code.",
        link: "https://medium.com/@calebmakafui/introduction-to-test-driven-development-tdd-b035r89t554k",
    },
];

export default function WritingsPage() {
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

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
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
            </main>
        </>
    )
}
