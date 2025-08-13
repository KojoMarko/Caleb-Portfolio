import Header from "@/components/header";
import AboutSection from "@/components/about-section";

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <AboutSection />
            </main>
        </>
    )
}
