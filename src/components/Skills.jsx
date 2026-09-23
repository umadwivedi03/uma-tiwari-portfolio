import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Skills.css';

const Skills = () => {
    const [sectionRef, isSectionVisible] = useScrollReveal({ threshold: 0.1 });
    const [selectedSkill, setSelectedSkill] = useState(null);
const marqueeRows = [
    {
        direction: 'forward',
        skills: [
            {
                name: 'React.js',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                category: 'Frontend',
                level: 'Expert',
                experience: '6+ Years',
                description:
                    'Building scalable, responsive React applications with Hooks, Context API, reusable components, performance optimization, and enterprise dashboards.'
            },
            {
                name: 'Next.js',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
                category: 'Frontend',
                level: 'Advanced',
                experience: '3+ Years',
                description:
                    'Developing production-ready applications with App Router, SSR, API routes, routing, SEO optimization, and scalable frontend architecture.'
            },
            {
                name: 'JavaScript',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                category: 'Frontend',
                level: 'Expert',
                experience: '6+ Years',
                description:
                    'Strong experience with ES6+, asynchronous programming, promises, closures, event loop, APIs, and modern JavaScript application development.'
            },
            {
                name: 'TypeScript',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
                category: 'Frontend',
                level: 'Advanced',
                experience: '3+ Years',
                description:
                    'Building type-safe React and Node.js applications using interfaces, generics, utility types, unions, and scalable type definitions.'
            },
            {
                name: 'Redux',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
                category: 'Frontend',
                level: 'Advanced',
                experience: '3+ Years',
                description:
                    'Managing complex application state using Redux, Redux Toolkit, async workflows, selectors, and scalable state-management patterns.'
            },
            {
                name: 'Tailwind CSS',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
                category: 'Frontend',
                level: 'Advanced',
                experience: '3+ Years',
                description:
                    'Creating responsive, modern interfaces using utility-first CSS, reusable design patterns, responsive layouts, and component-based styling.'
            },
            {
                name: 'Material UI',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
                category: 'Frontend',
                level: 'Advanced',
                experience: '3+ Years',
                description:
                    'Developing enterprise-grade interfaces with Material UI, customized themes, reusable components, forms, tables, and responsive layouts.'
            },
            {
                name: 'AG Grid',
                icon: 'https://www.ag-grid.com/favicon.ico',
                category: 'Frontend',
                level: 'Advanced',
                experience: '2+ Years',
                description:
                    'Building data-heavy enterprise dashboards with sorting, filtering, pagination, virtualization, custom renderers, and large datasets.'
            }
        ]
    },

    {
        direction: 'reverse',
        skills: [
            {
                name: 'Node.js',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                category: 'Backend',
                level: 'Expert',
                experience: '6+ Years',
                description:
                    'Building scalable backend services, REST APIs, asynchronous applications, background workers, authentication systems, and microservices.'
            },
            {
                name: 'Express.js',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
                category: 'Backend',
                level: 'Expert',
                experience: '6+ Years',
                description:
                    'Developing secure REST APIs with middleware, JWT authentication, validation, error handling, rate limiting, and production-ready architecture.'
            },
            {
                name: 'REST APIs',
                icon: 'https://img.icons8.com/color/48/api-settings.png',
                category: 'Backend',
                level: 'Expert',
                experience: '6+ Years',
                description:
                    'Designing and developing scalable REST APIs with authentication, authorization, validation, pagination, error handling, and API documentation.'
            },
            {
                name: 'Microservices',
                icon: 'https://img.icons8.com/color/48/cloud-network.png',
                category: 'Backend',
                level: 'Advanced',
                experience: '3+ Years',
                description:
                    'Designing service-oriented architectures with independent services, background workers, shared infrastructure, and scalable communication patterns.'
            },
            {
                name: 'MongoDB',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
                category: 'Database',
                level: 'Expert',
                experience: '6+ Years',
                description:
                    'Designing MongoDB schemas, aggregation pipelines, indexes, queries, transactions, and scalable NoSQL data models.'
            },
            {
                name: 'MySQL',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
                category: 'Database',
                level: 'Advanced',
                experience: '4+ Years',
                description:
                    'Working with relational database design, joins, indexing, complex queries, transactions, and query optimization.'
            },
            {
                name: 'PostgreSQL',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
                category: 'Database',
                level: 'Advanced',
                experience: '2+ Years',
                description:
                    'Working with relational schemas, complex queries, transactions, indexing, and production database integrations.'
            },
            {
                name: 'Redis',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
                category: 'Backend',
                level: 'Advanced',
                experience: '2+ Years',
                description:
                    'Using Redis for caching, rate limiting, distributed coordination, idempotency, queues, and high-performance backend workflows.'
            }
        ]
    },

    {
        direction: 'forward',
        skills: [
            {
                name: 'OpenAI API',
                icon: 'https://img.icons8.com/color/48/chatgpt.png',
                category: 'AI',
                level: 'Advanced',
                experience: '2+ Years',
                description:
                    'Integrating OpenAI models into production applications for AI-powered assistants, automation, conversational workflows, and intelligent features.'
            },
            {
                name: 'OpenAI Realtime API',
                icon: 'https://img.icons8.com/color/48/artificial-intelligence.png',
                category: 'AI',
                level: 'Advanced',
                experience: '1+ Year',
                description:
                    'Building real-time AI voice experiences with low-latency conversational interactions and streaming communication.'
            },
            {
                name: 'Whisper',
                icon: 'https://img.icons8.com/color/48/microphone.png',
                category: 'AI',
                level: 'Advanced',
                experience: '1+ Year',
                description:
                    'Implementing speech-to-text workflows for AI voice assistants and real-time conversational applications.'
            },
            {
                name: 'Twilio',
                icon: 'https://www.twilio.com/favicon.ico',
                category: 'Communication',
                level: 'Advanced',
                experience: '1+ Year',
                description:
                    'Integrating Twilio voice capabilities with AI-powered conversational systems and phone-based customer experiences.'
            },
            {
                name: 'AWS',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
                category: 'Cloud',
                level: 'Advanced',
                experience: '3+ Years',
                description:
                    'Deploying and supporting web applications and backend services using AWS cloud infrastructure and CI/CD workflows.'
            },
            {
                name: 'Microsoft Azure',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
                category: 'Cloud',
                level: 'Advanced',
                experience: '3+ Years',
                description:
                    'Working with Azure-based application deployment, cloud services, monitoring, and production environments.'
            },
            {
                name: 'Docker',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
                category: 'DevOps',
                level: 'Advanced',
                experience: '3+ Years',
                description:
                    'Containerizing applications, managing development environments, Docker Compose services, and deployment workflows.'
            },
            {
                name: 'CI/CD',
                icon: 'https://img.icons8.com/color/48/continuous-integration.png',
                category: 'DevOps',
                level: 'Advanced',
                experience: '3+ Years',
                description:
                    'Building automated CI/CD workflows for testing, deployment, application delivery, and production releases.'
            }
        ]
    },

    {
        direction: 'reverse',
        skills: [
            {
                name: 'Git',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
                category: 'Tools',
                level: 'Expert',
                experience: '6+ Years',
                description:
                    'Using Git for version control, branching strategies, pull requests, code reviews, collaborative development, and release management.'
            },
            {
                name: 'GitHub',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
                category: 'Tools',
                level: 'Expert',
                experience: '6+ Years',
                description:
                    'Managing repositories, pull requests, project collaboration, code reviews, documentation, and GitHub-based development workflows.'
            },
            {
                name: 'Jest',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
                category: 'Testing',
                level: 'Advanced',
                experience: '3+ Years',
                description:
                    'Writing unit and integration tests for JavaScript and TypeScript applications with reliable automated test coverage.'
            },
            {
                name: 'React Testing Library',
                icon: 'https://testing-library.com/img/octopus-128x128.png',
                category: 'Testing',
                level: 'Advanced',
                experience: '2+ Years',
                description:
                    'Testing React components and user interactions using practical, behavior-focused testing strategies.'
            },
            {
                name: 'Postman',
                icon: 'https://img.icons8.com/dusk/48/postman-api.png',
                category: 'Tools',
                level: 'Advanced',
                experience: '5+ Years',
                description:
                    'Testing, debugging, documenting, and validating REST APIs and backend integrations.'
            },
            {
                name: 'HTML5',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
                category: 'Frontend',
                level: 'Expert',
                experience: '6+ Years',
                description:
                    'Developing semantic, accessible, responsive HTML structures for production web applications.'
            },
            {
                name: 'CSS3',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
                category: 'Frontend',
                level: 'Expert',
                experience: '6+ Years',
                description:
                    'Advanced CSS including Flexbox, Grid, responsive layouts, animations, transitions, and modern UI implementation.'
            },
            {
                name: 'PHP',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
                category: 'Languages',
                level: 'Intermediate',
                experience: '2+ Years',
                description:
                    'Experience working with PHP-based web applications and CMS platforms including WordPress and Drupal.'
            }
        ]
    }
];

    const MarqueeRow = ({ skills, direction }) => {
        // Double the skills for seamless loop
        const doubledSkills = [...skills, ...skills];

        return (
            <div className={`marquee-row ${direction === 'reverse' ? 'reverse' : ''}`}>
                <div className="marquee-track">
                    {doubledSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-bubble"
                            onClick={() => setSelectedSkill(skill)}
                        >
                            <img src={skill.icon} alt={skill.name} />
                            <span className="skill-name">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <section
            id="skills"
            className={`section skills-section reveal ${isSectionVisible ? 'active' : ''}`}
            ref={sectionRef}
        >
            <div className="container">
                <h2 className="section-title">Skills & Expertise</h2>

                <div className="skills-layout-wrapper">
                    <div className="skills-visual">
                        <div className="visual-card glass-card">
                            <img
                                src="https://i.pinimg.com/originals/54/1f/1c/541f1c2e739aac67a89026fe0def22eb.gif"
                                alt="Creative Visual"
                                className="pinterest-gif"
                            />
                            <div className="visual-overlay"></div>
                        </div>
                    </div>

                    <div className="skills-marquee-container">
                        {marqueeRows.map((row, index) => (
                            <MarqueeRow
                                key={index}
                                skills={row.skills}
                                direction={row.direction}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Reactive Detail Overlay */}
            <div
                className={`reactive-detail-overlay ${selectedSkill ? 'active' : ''}`}
                onClick={() => setSelectedSkill(null)}
            >
                {selectedSkill && (
                    <div className="detail-content" onClick={(e) => e.stopPropagation()}>
                        <i
                            className="bx bx-x close-detail"
                            onClick={() => setSelectedSkill(null)}
                        ></i>

                        <div className="detail-header">
                            <img src={selectedSkill.icon} alt={selectedSkill.name} className="detail-icon" />
                            <div className="detail-info">
                                <span className="detail-category">{selectedSkill.category}</span>
                                <h2>{selectedSkill.name}</h2>
                            </div>
                        </div>

                        <div className="detail-body">
                            <p>{selectedSkill.description}</p>

                            <div className="skill-stats">
                                <div className="stat-item">
                                    <span className="stat-label">Proficiency</span>
                                    <span className="stat-value">{selectedSkill.level}</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">Experience</span>
                                    <span className="stat-value">{selectedSkill.experience}</span>
                                </div>
                            </div>

                            <div className="detail-actions">
                                <a 
                                    href="#projects" 
                                    className="see-projects-btn" 
                                    onClick={() => setSelectedSkill(null)}
                                >
                                    <span>Explore Projects</span>
                                    <i className='bx bx-right-arrow-alt'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Skills;

