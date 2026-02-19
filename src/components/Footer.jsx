import { FaGithub, FaLinkedinIn, FaTwitter, FaHeart } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer" id="footer">
            <div className="footer__container container">
                <div className="footer__top">
                    <a href="#hero" className="footer__logo">
                        <span className="footer__logo-bracket">&lt;</span>
                        <span className="footer__logo-text">Portfolio</span>
                        <span className="footer__logo-bracket">/&gt;</span>
                    </a>

                    <nav className="footer__nav">
                        <a href="#about" className="footer__nav-link">About</a>
                        <a href="#skills" className="footer__nav-link">Skills</a>
                        <a href="#projects" className="footer__nav-link">Projects</a>
                        <a href="#contact" className="footer__nav-link">Contact</a>
                    </nav>

                    <div className="footer__socials">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer__social"><FaGithub /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__social"><FaLinkedinIn /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer__social"><FaTwitter /></a>
                    </div>
                </div>

                <div className="footer__divider"></div>

                <div className="footer__bottom">
                    <p className="footer__copy">
                        © {year} Portfolio. All rights reserved.
                    </p>
                    <p className="footer__made">
                        Made with <FaHeart className="footer__heart" /> using React
                    </p>
                </div>
            </div>
        </footer>
    );
}
