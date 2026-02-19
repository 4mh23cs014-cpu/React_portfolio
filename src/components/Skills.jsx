import './Skills.css';

const skillCategories = [
    {
        title: 'Frontend',
        skills: [
            { name: 'React', level: 90 },
            { name: 'JavaScript', level: 85 },
            { name: 'HTML & CSS', level: 95 },
            { name: 'TypeScript', level: 70 },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Python', level: 80 },
            { name: 'FastAPI', level: 75 },
            { name: 'Node.js', level: 70 },
            { name: 'SQL', level: 75 },
        ],
    },
    {
        title: 'Tools & Others',
        skills: [
            { name: 'Git & GitHub', level: 85 },
            { name: 'Vite', level: 80 },
            { name: 'Figma', level: 65 },
            { name: 'REST APIs', level: 80 },
        ],
    },
];

export default function Skills() {
    return (
        <section className="skills" id="skills">
            <div className="skills__container container">
                <div className="skills__header">
                    <span className="section-label">My Skills</span>
                    <h2 className="section-title">
                        Technologies I <span className="gradient-text">work with</span>
                    </h2>
                    <p className="section-subtitle">
                        A curated set of tools and technologies I use daily to bring ideas to life.
                    </p>
                </div>

                <div className="skills__grid">
                    {skillCategories.map((category) => (
                        <div className="skills__category" key={category.title}>
                            <h3 className="skills__category-title">{category.title}</h3>
                            <div className="skills__list">
                                {category.skills.map((skill) => (
                                    <div className="skills__item" key={skill.name}>
                                        <div className="skills__item-header">
                                            <span className="skills__item-name">{skill.name}</span>
                                            <span className="skills__item-level">{skill.level}%</span>
                                        </div>
                                        <div className="skills__bar">
                                            <div
                                                className="skills__bar-fill"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
