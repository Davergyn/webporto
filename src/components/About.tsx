import { useReveal } from '../hooks/useReveal';

const skills = [
    {
        category: 'Frontend',
        icon: '🎨',
        color: 'from-cyan-500/20 to-blue-500/20',
        border: 'border-cyan-500/20 hover:border-cyan-400/50',
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
    },
    {
        category: 'Backend',
        icon: '⚙️',
        color: 'from-violet-500/20 to-purple-500/20',
        border: 'border-violet-500/20 hover:border-violet-400/50',
        items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST API'],
    },
    {
        category: 'Mobile',
        icon: '📱',
        color: 'from-emerald-500/20 to-teal-500/20',
        border: 'border-emerald-500/20 hover:border-emerald-400/50',
        items: ['React Native', 'Flutter', 'Firebase', 'App Store', 'Play Store'],
    },
];

export default function About() {
    const { ref: sectionRef, isVisible } = useReveal();

    return (
        <section id="about" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-6">
                <div ref={sectionRef} className={`reveal ${isVisible ? 'visible' : ''}`}>
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-primary font-medium mb-4">
                            About Me
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Passionate About{' '}
                            <span className="gradient-text">Building Digital Products</span>
                        </h2>
                        <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
                            With over 3 years of experience in full-stack and mobile development,
                            I specialize in creating seamless user experiences across web and mobile
                            platforms. I love turning complex problems into simple, elegant solutions.
                        </p>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {skills.map((skill, index) => (
                            <SkillCard key={skill.category} skill={skill} delay={index * 150} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function SkillCard({
    skill,
    delay,
}: {
    skill: (typeof skills)[0];
    delay: number;
}) {
    const { ref, isVisible } = useReveal();

    return (
        <div
            ref={ref}
            className={`reveal-scale ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div
                className={`glass rounded-2xl p-8 border ${skill.border} card-hover h-full`}
            >
                {/* Icon and Category */}
                <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-2xl mb-5`}
                >
                    {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                        <span
                            key={item}
                            className="px-3 py-1.5 rounded-lg bg-surface-lighter/50 text-sm text-text-secondary hover:text-primary hover:bg-primary/10 transition-all duration-300 cursor-default"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
