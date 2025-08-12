import SectionHeading from './section-heading';
import { Award, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
  },
  {
    name: 'Certified JavaScript Developer',
    issuer: 'Tech Certification Board',
  },
   {
    name: 'Advanced React Developer',
    issuer: 'Pro-Level Certs',
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          icon={Award} 
          title="Certifications"
          description="My commitment to continuous learning and professional development."
        />
        <div className="mt-12 max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold text-lg">{cert.name}</p>
                      <p className="text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
