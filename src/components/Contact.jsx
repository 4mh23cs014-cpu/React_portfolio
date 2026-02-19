import { useState } from 'react';
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const contactInfo = [
    { icon: <HiMail />, label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
    { icon: <HiLocationMarker />, label: 'Location', value: 'Your City, Country', href: null },
    { icon: <HiPhone />, label: 'Phone', value: '+1 234 567 890', href: 'tel:+1234567890' },
];

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <section className="contact" id="contact">
            <div className="contact__container container">
                <div className="contact__header">
                    <span className="section-label">Get in Touch</span>
                    <h2 className="section-title">
                        Let's <span className="gradient-text">work together</span>
                    </h2>
                    <p className="section-subtitle">
                        Have a project in mind or just want to say hello? I'd love to hear from you.
                    </p>
                </div>

                <div className="contact__grid">
                    <div className="contact__info">
                        <div className="contact__info-cards">
                            {contactInfo.map((item) => (
                                <div className="contact__info-card" key={item.label}>
                                    <div className="contact__info-icon">{item.icon}</div>
                                    <div>
                                        <span className="contact__info-label">{item.label}</span>
                                        {item.href ? (
                                            <a href={item.href} className="contact__info-value">{item.value}</a>
                                        ) : (
                                            <span className="contact__info-value">{item.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="contact__socials">
                            <span className="contact__socials-label">Follow me</span>
                            <div className="contact__socials-links">
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact__social-link"><FaGithub /></a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact__social-link"><FaLinkedinIn /></a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact__social-link"><FaTwitter /></a>
                            </div>
                        </div>
                    </div>

                    <form className="contact__form" onSubmit={handleSubmit} id="contact-form">
                        <div className="contact__form-group">
                            <label htmlFor="name" className="contact__form-label">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="contact__form-input"
                                required
                            />
                        </div>
                        <div className="contact__form-group">
                            <label htmlFor="email" className="contact__form-label">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                className="contact__form-input"
                                required
                            />
                        </div>
                        <div className="contact__form-group">
                            <label htmlFor="message" className="contact__form-label">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                className="contact__form-input contact__form-textarea"
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="contact__form-btn" id="submit-btn">
                            {submitted ? '✓ Message Sent!' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
