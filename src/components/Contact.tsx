import { useState, type FormEvent } from 'react';
import { useReveal } from '../hooks/useReveal';

const contactInfo = [
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        label: 'Email',
        value: 'davinvergian01@gmail.com',
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        label: 'Location',
        value: 'Yogyakarta, Indonesia',
        href: '#',
    },
];

const socials = [
    {
        name: 'GitHub',
        href: 'https://github.com/Davergyn',
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
        ),
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/davin-vergian-35856a2a9/',
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/dapinee/',
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z" />
            </svg>
        ),
    },
    {
        name: 'Facebook',
        href: 'https://web.facebook.com/davin.vergian',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                width="24" height="24"
                fill="currentColor">
                <path d="M279.14 288l14.22-92.66h-88.91V117.78c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.2V288z" />
            </svg>
        ),
    },
    {
        name: 'Whastapp',
        href: "https://wa.me/6281276571881",
        icon:
            (
                <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24" height="24"
                    fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.21 2 11.4c0 2.07.7 3.99 1.88 5.56L2 22l5.21-1.75A10.2 10.2 0 0 0 12 20.8c5.52 0 10-4.21 10-9.4S17.52 2 12 2zm0 16.8c-1.63 0-3.22-.43-4.61-1.25l-.33-.19-3.09 1.04 1.05-3.01-.21-.34A7.9 7.9 0 0 1 4 11.4C4 7.35 7.59 4 12 4s8 3.35 8 7.4-3.59 7.4-8 7.4zm4.43-5.37c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.63.78-.77.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.22-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.43h-.46c-.16 0-.42.06-.64.3s-.84.82-.84 2c0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.65.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
                </svg>
            ),
    },
];

export default function Contact() {
    const { ref: sectionRef, isVisible } = useReveal();
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormState({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-24 relative">
            {/* Subtle background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

            <div className="max-w-6xl mx-auto px-6 relative">
                <div ref={sectionRef} className={`reveal ${isVisible ? 'visible' : ''}`}>
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-primary font-medium mb-4">
                            Contact
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Let's{' '}
                            <span className="gradient-text">Work Together</span>
                        </h2>
                        <p className="text-text-secondary max-w-xl mx-auto">
                            Have a project in mind? I'd love to hear about it. Send me a
                            message and let's create something amazing.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-8">
                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <form
                                onSubmit={handleSubmit}
                                className="glass rounded-2xl p-8 border border-surface-lighter/50"
                            >
                                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-text-secondary mb-2"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formState.name}
                                            onChange={(e) =>
                                                setFormState({ ...formState, name: e.target.value })
                                            }
                                            className="w-full px-4 py-3 rounded-xl bg-surface-light/50 border border-surface-lighter/50 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                                            placeholder="Nama Kamu"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-text-secondary mb-2"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formState.email}
                                            onChange={(e) =>
                                                setFormState({ ...formState, email: e.target.value })
                                            }
                                            className="w-full px-4 py-3 rounded-xl bg-surface-light/50 border border-surface-lighter/50 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                                            placeholder="Email_kamu@example.com"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-text-secondary mb-2"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        value={formState.message}
                                        onChange={(e) =>
                                            setFormState({ ...formState, message: e.target.value })
                                        }
                                        className="w-full px-4 py-3 rounded-xl bg-surface-light/50 border border-surface-lighter/50 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300 resize-none"
                                        placeholder="Tell me about your project..."
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 disabled:opacity-50"
                                    disabled={submitted}
                                >
                                    {submitted ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Message Sent!
                                        </span>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Contact Info & Socials */}
                        <div className="lg:col-span-2 flex flex-col gap-6">
                            {/* Contact Info */}
                            <div className="glass rounded-2xl p-8 border border-surface-lighter/50">
                                <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
                                <div className="flex flex-col gap-5">
                                    {contactInfo.map((info) => (
                                        <a
                                            key={info.label}
                                            href={info.href}
                                            className="flex items-center gap-4 group"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <p className="text-xs text-text-muted">{info.label}</p>
                                                <p className="text-sm text-text-primary group-hover:text-primary transition-colors duration-300">
                                                    {info.value}
                                                </p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="glass rounded-2xl p-8 border border-surface-lighter/50">
                                <h3 className="text-lg font-semibold mb-6">Follow My Social Media</h3>
                                <div className="flex gap-3">
                                    {socials.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.name}
                                            className="w-11 h-11 rounded-xl bg-surface-lighter/50 flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
