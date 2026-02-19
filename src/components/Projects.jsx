import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
    {
        title: 'E-Commerce Dashboard',
        description: 'A modern admin dashboard with real-time analytics, order management, and responsive data visualization built with React.',
        tags: ['React', 'CSS', 'REST API'],
        category: 'Web App',
        github: '#',
        live: '#',
        color: '#8b5cf6',
    },
    {
        title: 'AI Chat Application',
        description: 'An intelligent chatbot interface powered by Google Gemini AI with real-time streaming responses and conversation history.',
        tags: ['Python', 'FastAPI', 'React'],
        category: 'Full Stack',
        github: '#',
        live: '#',
        color: '#06b6d4',
    },
    {
        title: 'Weather Forecast App',
        description: 'A beautiful weather application with dynamic backgrounds, 7-day forecasts, and location-based weather data.',
        tags: ['JavaScript', 'API', 'CSS'],
        category: 'Web App',
        github: '#',
        live: '#',
        color: '#f59e0b',
    },
    {
        title: 'Task Management System',
        description: 'A Kanban-style project management tool with drag-and-drop, team collaboration, and real-time updates.',
        tags: ['React', 'Node.js', 'MongoDB'],
        category: 'Full Stack',
        github: '#',
        live: '#',
        color: '#ec4899',
    },
];

const categories = ['All', 'Web App', 'Full Stack'];

export default function Projects() {
    const [active, setActive] = useState('All');
    const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

    return (
        <section className="projects" id="projects">
            <div className="projects__container container">
                <div className="projects__header">
                    <span className="section-label">My Work</span>
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        A selection of projects that showcase my skills and passion for development.
                    </p>
                </div>

                <div className="projects__filters">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`projects__filter ${active === cat ? 'projects__filter--active' : ''}`}
                            onClick={() => setActive(cat)}
                            id={`filter-${cat.toLowerCase().replace(' ', '-')}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="projects__grid">
                    {filtered.map((project) => (
                        <div className="projects__card" key={project.title}>
                            <div className="projects__card-accent" style={{ background: project.color }}></div>
                            <div className="projects__card-body">
                                <div className="projects__card-top">
                                    <span className="projects__card-category">{project.category}</span>
                                    <div className="projects__card-links">
                                        <a href={project.github} className="projects__card-link" aria-label="GitHub">
                                            <FaGithub />
                                        </a>
                                        <a href={project.live} className="projects__card-link" aria-label="Live Demo">
                                            <FaExternalLinkAlt />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="projects__card-title">{project.title}</h3>
                                <p className="projects__card-desc">{project.description}</p>

                                <div className="projects__card-tags">
                                    {project.tags.map((tag) => (
                                        <span className="projects__card-tag" key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
