import Header from "@/components/header";
import ProjectsSection from "@/components/projects-section";

export default function ProjectsPage() {
    return (
        <>
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <ProjectsSection />
            </main>
        </>
    )
}
