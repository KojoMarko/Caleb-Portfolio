import SectionTitle from "./section-title";

const skills = [
    { name: 'React & Next.js', value: 95 },
    { name: 'Tailwind CSS', value: 90 },
    { name: 'JavaScript & TypeScript', value: 90 },
    { name: 'AWS Cloud Architecture', value: 85 },
    { name: 'Node.js', value: 80 },
    { name: 'Python', value: 75 },
    { name: 'Biomedical Devices', value: 95 },
    { name: 'System Maintenance', value: 90 },
];

const SkillBar = ({ name, value }: { name: string, value: number }) => (
    <div className="progress">
        <span className="skill">
            {name} <i className="val">{value}%</i>
        </span>
        <div className="progress-bar-wrap">
            <div 
                className="progress-bar" 
                style={{ width: `${value}%` }}
                role="progressbar"
                aria-valuenow={value}
                aria-valuemin={0}
                aria-valuemax={100}
            ></div>
        </div>
    </div>
)

export default function SkillsSection() {
    return (
        <div className="skills container mx-auto px-6 mt-16">
            <SectionTitle title="Skills" description="My technical capabilities" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                {skills.map(skill => (
                    <SkillBar key={skill.name} name={skill.name} value={skill.value} />
                ))}
            </div>
        </div>
    )
}
