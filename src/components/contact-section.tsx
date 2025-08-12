import SectionHeading from './section-heading';
import { Mail } from 'lucide-react';
import ContactForm from './contact-form';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          icon={Mail} 
          title="Get In Touch"
          description="Have a question or a project in mind? I'd love to hear from you."
        />
        <div className="mt-12 max-w-xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
