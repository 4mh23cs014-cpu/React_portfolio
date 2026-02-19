import { HiCode, HiLightningBolt, HiSparkles } from 'react-icons/hi';
import './About.css';

const highlights = [
    {
        icon: <HiCode />,
        title: 'Clean Code',
        description: 'Writing maintainable, scalable code with best practices and modern patterns.',
    },
    {
        icon: <HiSparkles />,
        title: 'Modern Design',
        description: 'Creating pixel-perfect interfaces with attention to detail and user experience.',
    },
    {
        icon: <HiLightningBolt />,
        title: 'Performance',
        description: 'Optimizing for speed and efficiency to deliver blazing-fast applications.',
    },
];

export default function About() {
    return (
        <section className="about" id="about">
            <div className="about__container container">
                <div className="about__header">
                    <span className="section-label">About Me</span>
                    <h2 className="section-title">
                        Passionate about crafting <span className="gradient-text">digital experiences</span>
                    </h2>
                </div>

                <div className="about__grid">
                    <div className="about__story">
                        <p className="about__text">
                            I'm a creative developer with a passion for building beautiful and functional
                            web applications. With a strong foundation in both frontend and backend technologies,
                            I bring ideas to life through clean code and thoughtful design.
                        </p>
                        <p className="about__text">
                            When I'm not coding, you'll find me exploring new technologies, contributing
                            to open-source projects, or sketching UI concepts. I believe in continuous
                            learning and pushing the boundaries of what's possible on the web.
                        </p>

                        <div className="about__stats">
                            <div className="about__stat">
                                <span className="about__stat-number gradient-text">10+</span>
                                <span className="about__stat-label">Projects</span>
                            </div>
                            <div className="about__stat">
                                <span className="about__stat-number gradient-text">2+</span>
                                <span className="about__stat-label">Years Exp</span>
                            </div>
                            <div className="about__stat">
                                <span className="about__stat-number gradient-text">5+</span>
                                <span className="about__stat-label">Technologies</span>
                            </div>
                        </div>
                    </div>

                    <div className="about__highlights">
                        {highlights.map((item) => (
                            <div className="about__highlight-card" key={item.title}>
                                <div className="about__highlight-icon">{item.icon}</div>
                                <div>
                                    <h3 className="about__highlight-title">{item.title}</h3>
                                    <p className="about__highlight-desc">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
