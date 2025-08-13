import SectionTitle from "./section-title";
import { Atom, HeartPulse, Cpu, CloudCog } from 'lucide-react';

const interests = [
    { icon: <HeartPulse className="icon" />, name: "Healthcare Tech" },
    { icon: <Cpu className="icon"/>, name: "IoT & Automation" },
    { icon: <CloudCog className="icon"/>, name: "AI/ML Applications" },
    { icon: <Atom className="icon"/>, name: "Frontend Development" },
]

export default function InterestsSection() {
    return (
        <section className="interests container mx-auto px-6">
            <SectionTitle title="Interests" description="What I'm passionate about" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {interests.map(interest => (
                    <div key={interest.name} className="icon-box">
                        {interest.icon}
                        <h3>{interest.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}
