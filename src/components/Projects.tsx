import { useReveal } from '../hooks/useReveal';

import ecommerceImg from '../assets/projects/ecommerce.png';
import fitnessImg from '../assets/projects/fitness.png';
import projectMgmtImg from '../assets/projects/project-mgmt.png';
import dashboardImg from '../assets/projects/dashboard.png';
import foodDeliveryImg from '../assets/projects/food-delivery.png';
import aiChatImg from '../assets/projects/ai-chat.png';

const projects = [
    {
        title: 'E-Commerce Platform',
        description:
            'A full-featured e-commerce platform with real-time inventory management, payment processing, and an admin dashboard.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        image: ecommerceImg,
        gradient: 'from-cyan-600 to-blue-700',
        demo: '#',
        repo: '#',
    },
    {
        title: 'Fitness Tracker App',
        description:
            'Cross-platform mobile app for tracking workouts, nutrition, and health metrics with social features.',
        tech: ['React Native', 'Firebase', 'TypeScript'],
        image: fitnessImg,
        gradient: 'from-emerald-600 to-teal-700',
        demo: '#',
        repo: '#',
    },
    {
        title: 'Project Management Tool',
        description:
            'Collaborative project management application with kanban boards, real-time updates, and team analytics.',
        tech: ['Next.js', 'Prisma', 'PostgreSQL', 'WebSocket'],
        image: projectMgmtImg,
        gradient: 'from-violet-600 to-purple-700',
        demo: '#',
        repo: '#',
    },
    {
        title: 'Social Media Dashboard',
        description:
            'Analytics dashboard aggregating data from multiple social platforms with interactive charts and reports.',
        tech: ['React', 'D3.js', 'Express', 'MongoDB'],
        image: dashboardImg,
        gradient: 'from-orange-600 to-red-700',
        demo: '#',
        repo: '#',
    },
    {
        title: 'Food Delivery App',
        description:
            'Mobile application for food ordering and delivery with real-time tracking and restaurant management.',
        tech: ['Flutter', 'Firebase', 'Google Maps API'],
        image: foodDeliveryImg,
        gradient: 'from-pink-600 to-rose-700',
        demo: '#',
        repo: '#',
    },
    {
        title: 'AI Chat Assistant',
        description:
            'Intelligent chatbot powered by AI for customer support with natural language processing capabilities.',
        tech: ['React', 'Python', 'OpenAI', 'FastAPI'],
        image: aiChatImg,
        gradient: 'from-indigo-600 to-blue-700',
        demo: '#',
        repo: '#',
    },
];

export default function Projects() {
    const { ref: sectionRef, isVisible } = useReveal();

    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-6">
                <div ref={sectionRef} className={`reveal ${isVisible ? 'visible' : ''}`}>
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-primary font-medium mb-4">
                            Portfolio
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Featured{' '}
                            <span className="gradient-text">Projects</span>
                        </h2>
                        <p className="text-text-secondary max-w-xl mx-auto">
                            A selection of projects that showcase my skills in full-stack
                            and mobile development.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.title} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProjectCard({
    project,
    index,
}: {
    project: (typeof projects)[0];
    index: number;
}) {
    const { ref, isVisible } = useReveal();

    return (
        <div
            ref={ref}
            className={`reveal-scale ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="glass rounded-2xl overflow-hidden border border-transparent hover:border-primary/20 card-hover group h-full flex flex-col">
                {/* Image Area */}
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="flex gap-3">
                            <a
                                href={project.demo}
                                className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium hover:bg-white/30 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                            >
                                Live Demo
                            </a>
                            <a
                                href={project.repo}
                                className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium hover:bg-white/30 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                                style={{ transitionDelay: '75ms' }}
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                    </h3>
                    <p className="text-sm text-text-secondary mb-4 flex-1 leading-relaxed">
                        {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <span
                                key={t}
                                className="px-2.5 py-1 rounded-md bg-surface-lighter/50 text-xs text-text-muted font-medium font-mono"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
