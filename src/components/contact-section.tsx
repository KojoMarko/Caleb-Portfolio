import SectionTitle from "./section-title";
import { Github, Linkedin, MapPin, Mail, Share2 } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="contact container mx-auto px-6">
      <div className="text-center">
        <SectionTitle title="Contact" description="Contact Me 📱" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          <div className="flex">
            <div className="info-box w-full bg-secondary p-6 rounded-lg shadow-md flex items-center">
                <Mail className="text-primary h-8 w-8 mr-4" />
                <div>
                  <h3 className="text-xl font-bold mb-1">Email Me</h3>
                  <p>caleb.senyah@example.com</p>
                </div>
            </div>
          </div>
          <div className="flex">
            <div className="info-box w-full bg-secondary p-6 rounded-lg shadow-md flex items-center">
                <MapPin className="text-primary h-8 w-8 mr-4" />
                <div>
                  <h3 className="text-xl font-bold mb-1">My Address</h3>
                  <p>Accra, Ghana</p>
                </div>
            </div>
          </div>
          <div className="flex col-span-1 md:col-span-2">
             <div className="info-box w-full bg-secondary p-6 rounded-lg shadow-md flex items-center">
                <Share2 className="text-primary h-8 w-8 mr-4" />
                 <div>
                    <h3 className="text-xl font-bold mb-2">Social Profiles</h3>
                    <div className="flex items-center space-x-4">
                        <a href="https://github.com/calebsenyah" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                            <Github className="h-8 w-8" />
                        </a>
                        <a href="https://linkedin.com/in/calebsenyah" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                            <Linkedin className="h-8 w-8" />
                        </a>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </section>
  );
}
