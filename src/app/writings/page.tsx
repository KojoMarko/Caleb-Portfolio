import Header from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const articles = [
    {
        title: "The Role of IoT in Modern Healthcare",
        description: "An exploration of how Internet of Things devices are revolutionizing patient monitoring and treatment.",
        link: "#",
    },
    {
        title: "Scalable Frontend Architectures with Next.js",
        description: "A deep dive into building maintainable and high-performance web applications using Next.js.",
        link: "#",
    },
    {
        title: "Predictive Analytics in Biomedical Engineering",
        description: "How machine learning models can forecast patient outcomes and improve diagnostic accuracy.",
        link: "#",
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
