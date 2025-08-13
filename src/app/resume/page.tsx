import Header from "@/components/header";
import ExperienceSection from "@/components/experience-section";

export default function ResumePage() {
    return (
        <>
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <ExperienceSection />
            </main>
        </>
    )
}
