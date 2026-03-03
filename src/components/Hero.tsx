import { useEffect, useState } from 'react';
import profilePhoto from '../assets/fotoformal.png';

export default function Hero() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
                <div
                    className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
                    style={{ animationDelay: '3s' }}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
                {/* Text Content */}
                <div
                    className={`flex-1 text-center lg:text-left transition-all duration-1000 ${loaded
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                        }`}
                >

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                        Hi, I'm{' '}
                        <span className="gradient-text">Davin Vergian Rizapratama</span>
                    </h1>

                    <p className="text-xl sm:text-2xl text-text-secondary font-light mb-2">
                        Full Stack & Mobile Developer
                    </p>

                    <p className="text-base text-text-muted max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
                        I craft beautiful, performant web and mobile experiences
                        with modern technologies. Turning complex ideas into
                        elegant digital solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                        <a
                            href="#projects"
                            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3.5 rounded-full border border-surface-lighter text-text-primary font-semibold hover:border-primary hover:text-primary transition-all duration-300 hover:scale-105"
                        >
                            Contact Me
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-8 mt-10 justify-center lg:justify-start">
                        {[
                            { num: '3+', label: 'Years Exp.' },
                            { num: '25+', label: 'Projects' },
                            { num: '15+', label: 'Clients' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-2xl font-bold gradient-text">
                                    {stat.num}
                                </p>
                                <p className="text-xs text-text-muted mt-1">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Profile Image */}
                <div
                    className={`flex-shrink-0 transition-all duration-1000 delay-300 ${loaded
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-90'
                        }`}
                >
                    <div className="relative">
                        {/* Glow ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 blur-2xl scale-110 animate-pulse" />
                        <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 animate-pulse-ring opacity-0" />

                        {/* Image container */}
                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-primary/30 animate-float animate-glow">
                            <img
                                src={profilePhoto}
                                alt="Davin Vergian Rizapratama"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                        {/* Floating badges */}
                        <div
                            className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-2 animate-float"
                            style={{ animationDelay: '1s' }}
                        >
                            <span className="text-2xl">⚛️</span>
                        </div>
                        <div
                            className="absolute -bottom-2 -left-6 glass rounded-2xl px-4 py-2 animate-float"
                            style={{ animationDelay: '2s' }}
                        >
                            <span className="text-2xl">📱</span>
                        </div>
                        <div
                            className="absolute top-1/2 -right-10 glass rounded-2xl px-4 py-2 animate-float"
                            style={{ animationDelay: '4s' }}
                        >
                            <span className="text-2xl">🚀</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                <span className="text-xs text-text-muted">Scroll Down</span>
                <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    );
}
