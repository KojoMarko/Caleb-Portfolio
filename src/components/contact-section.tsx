import { Button } from "./ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 text-center max-w-xl mx-auto">
      <p className="font-mono text-primary mb-4">04. What’s Next?</p>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-200">Get In Touch</h2>
      <p className="text-muted-foreground mt-4 leading-relaxed">
        I’m currently looking for new opportunities and my inbox is always open.
        Whether you have a question or just want to say hi, I’ll try my best
        to get back to you!
      </p>
      <div className="mt-8">
        <Button asChild size="lg" className="font-mono">
           <a href="mailto:caleb.senyah@example.com">Say Hello</a>
        </Button>
      </div>
    </section>
  );
}