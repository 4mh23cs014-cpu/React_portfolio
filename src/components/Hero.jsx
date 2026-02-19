import { HiArrowDown, HiDownload } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Hero.css';

export default function Hero() {
    return (
        <section className="hero" id="hero">
            {/* Background decoration */}
            <div className="hero__bg">
                <div className="hero__orb hero__orb--1"></div>
                <div className="hero__orb hero__orb--2"></div>
                <div className="hero__orb hero__orb--3"></div>
                <div className="hero__grid-overlay"></div>
            </div>

            <div className="hero__container container">
                <div className="hero__content">
                    <div className="hero__badge animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <span className="hero__badge-dot"></span>
                        Available for freelance work
                    </div>

                    <h1 className="hero__title animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Hi, I'm <span className="gradient-text">Your Name</span>
                        <br />
                        <span className="hero__title-role">Creative Developer</span>
                    </h1>

                    <p className="hero__description animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
                        I craft beautiful, performant, and accessible digital experiences.
                        Passionate about clean code, modern design, and turning ideas into
                        polished products that users love.
                    </p>

                    <div className="hero__actions animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                        <a href="#projects" className="hero__btn hero__btn--primary">
                            View My Work
                            <HiArrowDown className="hero__btn-icon" />
                        </a>
                        <a href="#contact" className="hero__btn hero__btn--secondary">
                            <HiDownload />
                            Download CV
                        </a>
                    </div>

                    <div className="hero__socials animate-fade-in-up" style={{ animationDelay: '0.65s' }}>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hero__social" aria-label="GitHub" id="social-github">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hero__social" aria-label="LinkedIn" id="social-linkedin">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hero__social" aria-label="Twitter" id="social-twitter">
                            <FaTwitter />
                        </a>
                    </div>
                </div>

                <div className="hero__visual animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <div className="hero__avatar-wrapper">
                        <div className="hero__avatar-ring"></div>
                        <div className="hero__avatar">
                            <div className="hero__avatar-placeholder">
                                <span>YN</span>
                            </div>
                        </div>
                    </div>

                    {/* Floating tech badges */}
                    <div className="hero__float-badge hero__float-badge--1">⚛️ React</div>
                    <div className="hero__float-badge hero__float-badge--2">🎨 CSS</div>
                    <div className="hero__float-badge hero__float-badge--3">⚡ Vite</div>
                    <div className="hero__float-badge hero__float-badge--4">🟨 JavaScript</div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="hero__scroll">
                <div className="hero__scroll-line"></div>
            </div>
        </section>
    );
}
