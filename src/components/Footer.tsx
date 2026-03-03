export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 border-t border-surface-lighter/30">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <a href="#home" className="text-lg font-bold gradient-text">
                        &lt;Dev /&gt;
                    </a>

                    <p className="text-sm text-text-muted text-center">
                        © {currentYear} Davin Vergian. Built with{' '}
                        <span className="text-primary">React</span>,{' '}
                        <span className="text-primary">TypeScript</span> &{' '}
                        <span className="text-primary">Tailwind CSS</span>
                    </p>

                    <a
                        href="#home"
                        className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                        aria-label="Back to top"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}
