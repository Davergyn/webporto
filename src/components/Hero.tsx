import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import profilePhoto from '../assets/fotoformal.png';

// Floating tech icons data
const floatingIcons = [
    {
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.31 0-.594.063-.845.188C5.036 2.192 4.72 3.768 5.14 5.89c-.998.282-1.87.633-2.597 1.055C1.22 7.87.5 9.05.5 10.228c0 1.18.72 2.357 2.043 3.283.727.422 1.6.773 2.597 1.055-.42 2.122-.136 3.698 1.085 4.368.252.125.535.188.845.188 1.345 0 3.107-.96 4.888-2.622 1.78 1.653 3.542 2.602 4.887 2.602.31 0 .594-.063.845-.188 1.221-.67 1.505-2.246 1.085-4.368.998-.282 1.87-.633 2.597-1.055C22.78 12.585 23.5 11.408 23.5 10.228c0-1.18-.72-2.357-2.043-3.283-.727-.422-1.6-.773-2.597-1.055.42-2.122.136-3.698-1.085-4.368a1.854 1.854 0 0 0-.845-.188z" />
            </svg>
        ),
        label: 'React',
        color: '#61DAFB',
        position: 'top-[8%] -left-[12%]',
        mobilePosition: 'top-[2%] left-[5%]',
        delay: 0,
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
        ),
        label: 'Mobile',
        color: '#8B5CF6',
        position: 'bottom-[12%] -left-[8%]',
        mobilePosition: 'bottom-[5%] left-[2%]',
        delay: 1.5,
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>
        ),
        label: 'Code',
        color: '#06B6D4',
        position: 'top-[50%] -right-[12%]',
        mobilePosition: 'top-[50%] right-[0%]',
        delay: 3,
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
            </svg>
        ),
        label: 'TypeScript',
        color: '#3178C6',
        position: '-top-[5%] right-[15%]',
        mobilePosition: 'top-[0%] right-[15%]',
        delay: 2,
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M11.998 24c-.321 0-.639-.085-.921-.247l-2.932-1.736c-.438-.245-.224-.332-.08-.383.584-.203.702-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339a.293.293 0 0 0 .272 0l8.795-5.076a.277.277 0 0 0 .134-.238V6.921a.28.28 0 0 0-.137-.242L12.135 1.6a.272.272 0 0 0-.27 0L3.078 6.68a.281.281 0 0 0-.138.243v10.15c0 .099.053.19.137.236l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.55l-2.307-1.33A1.853 1.853 0 0 1 1.36 17.07V6.921c0-.68.363-1.314.955-1.654L11.11.19a1.926 1.926 0 0 1 1.778 0l8.794 5.076c.592.34.955.975.955 1.654v10.15a1.853 1.853 0 0 1-.955 1.654l-8.794 5.078a1.834 1.834 0 0 1-.89.198z" />
            </svg>
        ),
        label: 'Node.js',
        color: '#339933',
        position: 'bottom-[5%] right-[8%]',
        mobilePosition: 'bottom-[2%] right-[5%]',
        delay: 4,
    },
];

export default function Hero() {
    const [loaded, setLoaded] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });

    const photoY = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <section
            ref={sectionRef}
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
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-linear-to-br from-primary/5 to-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-6">
                {/* Text Content */}
                <motion.div
                    className="flex-1 text-center lg:text-left"
                    style={{ y: textY }}
                    initial={{ opacity: 0, x: -60 }}
                    animate={loaded ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
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
                            className="px-8 py-3.5 rounded-full bg-linear-to-r from-primary to-accent text-white font-semibold hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
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
                    <div className="flex items-center gap-20 mt-10 justify-center lg:justify-start">
                        {[
                            { num: '1+', label: 'Years Exp.' },
                            { num: '25+', label: 'Projects' },
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
                </motion.div>

                {/* Profile Image — Square / Rectangular */}
                <motion.div
                    className="flex-1 flex justify-center lg:justify-end"
                    style={{ y: photoY }}
                    initial={{ opacity: 0, x: 80 }}
                    animate={loaded ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[400px] lg:w-[400px] lg:h-[500px] xl:w-[440px] xl:h-[560px]">
                        {/* Background glow */}
                        <div className="absolute -inset-4 bg-linear-to-br from-primary/20 via-accent/15 to-primary/10 rounded-3xl blur-2xl opacity-60 animate-pulse" />

                        {/* Glassmorphism frame */}
                        <div className="absolute -inset-[2px] rounded-2xl bg-linear-to-br from-primary/40 via-accent/30 to-primary/20 p-px">
                            <div className="w-full h-full rounded-2xl bg-surface/60 backdrop-blur-sm" />
                        </div>

                        {/* Photo container */}
                        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-primary/20 group cursor-pointer transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]">
                            <img
                                src={profilePhoto}
                                alt="Davin Vergian Rizapratama"
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                            />

                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-linear-to-t from-surface/60 via-transparent to-transparent opacity-40" />
                            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-accent/5 mix-blend-overlay" />
                        </div>

                        {/* Floating Tech Icons */}
                        {floatingIcons.map((item, i) => (
                            <FloatingIcon key={i} item={item} loaded={loaded} />
                        ))}

                        {/* Corner accent dots */}
                        <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-primary/60 blur-[2px]" />
                        <div className="absolute -bottom-2 -right-2 w-3 h-3 rounded-full bg-accent/60 blur-[2px]" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function FloatingIcon({
    item,
    loaded,
}: {
    item: (typeof floatingIcons)[number];
    loaded: boolean;
}) {
    return (
        <motion.div
            className={`absolute ${item.position} z-10 hidden sm:block`}
            initial={{ opacity: 0, scale: 0 }}
            animate={
                loaded
                    ? {
                        opacity: 1,
                        scale: 1,
                        y: [0, -12, 0, 8, 0],
                    }
                    : {}
            }
            transition={{
                opacity: { duration: 0.5, delay: 0.8 + item.delay * 0.3 },
                scale: { duration: 0.5, delay: 0.8 + item.delay * 0.3, type: 'spring', stiffness: 200 },
                y: {
                    duration: 5 + item.delay * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: item.delay,
                },
            }}
        >
            <div className="glass rounded-xl px-3 py-2.5 flex items-center gap-2 shadow-lg hover:scale-110 transition-transform duration-300 cursor-default group">
                <div
                    style={{ color: item.color }}
                    className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_currentColor]"
                >
                    {item.icon}
                </div>
                <span className="text-xs font-medium text-text-secondary hidden lg:inline">
                    {item.label}
                </span>
            </div>
        </motion.div>
    );
}
