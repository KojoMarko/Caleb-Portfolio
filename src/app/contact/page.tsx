
import Header from "@/components/header";
import ContactForm from "@/components/contact-form";

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                 <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">Contact Me</h1>
                    <p className="mt-4 text-lg leading-8 text-muted-foreground">
                        Have a question or want to work together?
                    </p>
                </div>

                <div className="mt-16 max-w-lg mx-auto">
                    <ContactForm />
                </div>
            </main>
        </>
    )
}
