import Header from "@/components/header";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ArtGenerator from "@/components/art-generator";

const extras = [
    {
        title: "Biomedical Device UI Concept",
        description: "A modern user interface for a portable ECG monitor, designed for clarity and ease of use in clinical settings.",
        image: "https://placehold.co/600x400.png",
        hint: "medical ui",
    },
    {
        title: "Healthcare Dashboard",
        description: "A data visualization concept for tracking patient vitals and hospital resources in real-time.",
        image: "https://placehold.co/600x400.png",
        hint: "dashboard analytics",
    },
    {
        title: "IoT Sensor Casing Design",
        description: "3D model of a compact and durable casing for a custom-built environmental sensor.",
        image: "https://placehold.co/600x400.png",
        hint: "3d model",
    },
]

export default function ExtrasPage() {
    return (
        <>
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                 <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">Extras</h1>
                    <p className="mt-4 text-lg leading-8 text-muted-foreground">
                        A collection of my design concepts, 3D models, and other creative projects.
                    </p>
                </div>
                
                <div className="mt-16">
                    <ArtGenerator />
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {extras.map((item) => (
                        <Card key={item.title} className="overflow-hidden">
                            <CardHeader className="p-0">
                                <Image 
                                    src={item.image}
                                    alt={item.title}
                                    width={600}
                                    height={400}
                                    className="object-cover"
                                    data-ai-hint={item.hint}
                                />
                            </CardHeader>
                            <CardContent className="p-6">
                                <CardTitle>{item.title}</CardTitle>
                                <p className="mt-2 text-muted-foreground">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </main>
        </>
    )
}
