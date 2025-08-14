'use client';

import SectionTitle from './section-title';
import { Download } from 'lucide-react';
import { Button } from './ui/button';

export default function ExperienceSection() {
  return (
    <section id="resume" className="resume">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
            title="Resume" 
            description={
                <div className="flex items-center justify-center gap-2">
                    My Journey 💼
                    <Button asChild variant="link" className="p-0 h-auto">
                        <a href="/assets/CALEB MAKAFUI SENYAH RESUME.pdf" download className="flex items-center gap-1 text-primary">
                            Download <Download size={16} />
                        </a>
                    </Button>
                </div>
            }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            <div>
                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                    <h4 className="text-xl font-semibold">BSc in Biomedical Engineering</h4>
                    <h5>2018 - 2022</h5>
                    <p className="font-medium">University of Ghana</p>
                    <p className="mt-2 text-muted-foreground">
                        Presented a project on using machine learning to predict aromatase inhibitor suitability for breast cancer patients at a biennial science conference.
                    </p>
                </div>

                <h3 className="resume-title">Professional Experience</h3>
                 <div className="resume-item">
                    <h4>Field Service Biomedical Engineer</h4>
                    <h5>April 2025 - Present</h5>
                    <p className="font-medium italic">Alos Paraklet Health Care Ltd, Accra, Ghana</p>
                    <ul className="list-disc mt-2 text-muted-foreground space-y-1">
                        <li>Delivered on-site maintenance and repairs for 50+ advanced medical devices (e.g., diagnostic analyzers, centrifuges, POCTs) across 30+ healthcare facilities, achieving a 95% issue resolution rate on first visit.</li>
                        <li>Conducted over 50 preventive maintenance procedures and training, reducing equipment downtime by 30% and improving operational efficiency in clinical laboratories.</li>
                    </ul>
                </div>
                <div className="resume-item">
                    <h4>In House Biomedical Engineer</h4>
                    <h5>February 2024 - Present</h5>
                    <p className="font-medium italic">Mother of God Hospital, Ashaiman, Ghana</p>
                     <ul className="list-disc mt-2 text-muted-foreground space-y-1">
                        <li>Diagnosed and resolved issues in medical devices like autoclaves, monitors, microscopes, and analyzers.</li>
                        <li>Proactively initiated and implemented preventive maintenance programs for critical medical equipment, such as Chemistry Analyzers, to ensure optimal performance.</li>
                    </ul>
                </div>
                 <div className="resume-item">
                    <h4>Graduate Trainee Electrical Engineer</h4>
                    <h5>June 2023 – October 2023</h5>
                    <p className="font-medium italic">Ghana Ports and Harbors Authority, Tema, Ghana</p>
                    <ul className="list-disc mt-2 text-muted-foreground space-y-1">
                        <li>Developed 5 project plans, budgets, and timelines, and assigned tasks to personnel based on skill sets achieving a 95% customer satisfaction rate.</li>
                        <li>Managed telecom and broadcasting systems, ensuring 90%+ uptime for port operations.</li>
                    </ul>
                </div>
            </div>

            <div>
                 <h3 className="resume-title invisible md:visible"></h3>
                <div className="resume-item mt-0 md:mt-16">
                    <h4>Trainee Frontend Developer & AWS Cloud Solution Architect</h4>
                    <h5>November 2022 - October 2023</h5>
                    <p className="font-medium italic">Azubi Africa, Accra, Ghana</p>
                     <ul className="list-disc mt-2 text-muted-foreground space-y-1">
                        <li>Designed and deployed 3 interactive UIs, enhancing engagement by 20%.</li>
                        <li>Implemented the adoption and use of source control systems, notably Git, across 3 React application projects.</li>
                        <li>Architected highly available, fault-tolerant, and scalable AWS cloud architectures for over 20 use cases.</li>
                    </ul>
                </div>
                <div className="resume-item">
                    <h4>Graduate Trainee Biomedical Engineer</h4>
                    <h5>December 2022 – June 2023</h5>
                    <p className="font-medium italic">Ghana Ports and Harbors Authority, International Maritime Hospital</p>
                    <ul className="list-disc mt-2 text-muted-foreground space-y-1">
                        <li>Conducted daily maintenance of oxygen systems on dialysis machines.</li>
                        <li>Optimized medical equipment troubleshooting; reduced failures by 25% through scheduled maintenance.</li>
                    </ul>
                </div>
                
                 <h3 className="resume-title">Volunteer</h3>
                <div className="resume-item">
                    <h4>Applications Manager</h4>
                    <h5>January 2020 - Present</h5>
                    <p className="font-medium italic">Rhema Outreach Church, Love Temple, Tema, Ghana</p>
                     <ul className="list-disc mt-2 text-muted-foreground space-y-1">
                        <li>Manage and optimize Church Management Software (ChMS) platforms like Planning Center and Breeze.</li>
                        <li>Ensure all applications, including accounting software and streaming tools, are up to date.</li>
                         <li>Provide technical support to church staff and volunteers.</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
