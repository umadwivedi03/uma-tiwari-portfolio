import { useEffect, useState, useRef } from 'react';
import './About.css';
import main from '../assets/main-img.jpeg';

// --- Animated Counter ---


const About = () => {
    const [githubData, setGithubData] = useState({
        repos: 0,
        contributions: '0',
        joined: '--',
        avatarUrl: '',
        languages: [],
        lastPulse: {
            name: '',
            date: '',
        },
    });

    useEffect(() => {
        const fetchGitHubData = async () => {
            const CACHE_KEY = 'github_stats_cache_v4';
            const CACHE_DURATION = 24 * 60 * 60 * 1000;

            try {
                const cached = localStorage.getItem(CACHE_KEY);

                if (cached) {
                    const parsed = JSON.parse(cached);

                    if (
                        Date.now() - parsed.timestamp <
                        CACHE_DURATION
                    ) {
                        setGithubData(parsed.data);
                        return;
                    }
                }

                // GitHub profile
                const profileRes = await fetch(
                    'https://api.github.com/users/umadwivedi03',
                    {
                        headers: {
                            Accept:
                                'application/vnd.github.v3+json',
                        },
                    }
                );

                if (!profileRes.ok) {
                    throw new Error('GitHub profile fetch failed');
                }

                const profile = await profileRes.json();

                // Contributions
                const statusRes = await fetch(
                    'https://github-contributions-api.jogruber.de/v4/umadwivedi03'
                );

                if (!statusRes.ok) {
                    throw new Error(
                        'GitHub contribution fetch failed'
                    );
                }

                const stats = await statusRes.json();

                // Repositories
                const reposRes = await fetch(
                    'https://api.github.com/users/umadwivedi03/repos?sort=updated&per_page=100',
                    {
                        headers: {
                            Accept:
                                'application/vnd.github.v3+json',
                        },
                    }
                );

                if (!reposRes.ok) {
                    throw new Error(
                        'GitHub repositories fetch failed'
                    );
                }

                const repos = await reposRes.json();

                const joinedDate = new Date(
                    profile.created_at
                ).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                });

                const totalContribs = Object.values(
                    stats.total || {}
                ).reduce(
                    (total, value) => total + value,
                    0
                );

                const roundedContribs =
                    Math.floor(totalContribs / 10) * 10;

                // Aggregate languages
                const langMap = {};

                repos.forEach((repo) => {
                    if (repo.language) {
                        langMap[repo.language] =
                            (langMap[repo.language] || 0) + 1;
                    }
                });

                const sortedLangs = Object.entries(langMap)
                    .sort(([, a], [, b]) => b - a)
                    .slice(0, 5)
                    .map(([name, count]) => ({
                        name,
                        percent: Math.round(
                            (count / (repos.length || 1)) * 100
                        ),
                    }));

                const lastUpdatedRepo = repos[0];

                const lastPulse = lastUpdatedRepo
                    ? {
                        name: lastUpdatedRepo.name,
                        date: new Date(
                            lastUpdatedRepo.updated_at
                        ).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                        }),
                    }
                    : {
                        name: 'N/A',
                        date: 'N/A',
                    };

                const freshData = {
                    repos: profile.public_repos || 0,
                    contributions:
                        roundedContribs.toString(),
                    joined: joinedDate,
                    avatarUrl: profile.avatar_url,
                    languages: sortedLangs,
                    lastPulse,
                };

                setGithubData(freshData);

                localStorage.setItem(
                    CACHE_KEY,
                    JSON.stringify({
                        timestamp: Date.now(),
                        data: freshData,
                    })
                );
            } catch (error) {
                console.error(
                    'Error fetching GitHub data:',
                    error
                );

                const cached =
                    localStorage.getItem(CACHE_KEY);

                if (cached) {
                    setGithubData(
                        JSON.parse(cached).data
                    );
                }
            }
        };

        fetchGitHubData();

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            'reveal-active'
                        );
                    }
                });
            },
            observerOptions
        );

        const revealElements =
            document.querySelectorAll('.reveal');

        revealElements.forEach((el) =>
            observer.observe(el)
        );

        return () => {
            revealElements.forEach((el) =>
                observer.unobserve(el)
            );
        };
    }, []);

    return (
        <section id="about" className="section about-section">
            <div className="container">
                {/* =========================
                    BLUEPRINT
                ========================== */}

                <div className="about-divider reveal">
                    <span className="divider-line" />

                    <h3 className="about-me-title">
                        The Blueprint
                    </h3>

                    <span className="divider-line" />
                </div>

                {/* =========================
                    BENTO GRID
                ========================== */}

                <div className="bento-grid-v2">


                    {/* Developer Profile */}

                    <div className="bento-card-v2 bio-card-v2 reveal">

                        <div className="card-header">
                            <i className="bx bx-terminal" />

                            <span>
                                Developer Profile
                            </span>
                        </div>

                        <div className="card-content">

                            <h3>
                                Full-Stack Developer Building
                                Scalable Web Applications
                            </h3>

                            <p>
                                I'm <strong>Uma Tiwari</strong>, a
                                <strong> Full-Stack Developer</strong> with
                                <strong> 6+ years of professional experience</strong>
                                in designing, developing, testing, and deploying
                                scalable web applications, enterprise SaaS platforms,
                                and AI-powered solutions.
                            </p>

                            <p>
                                My core technical expertise includes
                                <strong>
                                    {' '}
                                    React.js, Next.js, JavaScript, TypeScript,
                                    Node.js, Express.js, REST APIs, Microservices,
                                    MongoDB, MySQL, Redux, and responsive UI development
                                </strong>.
                                I focus on clean code, reusable components,
                                scalable architecture, application performance,
                                and maintainable software solutions.
                            </p>

                            <p>
                                I also have hands-on experience with
                                <strong>
                                    {' '}
                                    OpenAI API, OpenAI Realtime API, Whisper,
                                    and Twilio
                                </strong>
                                {' '}
                                for developing AI-powered voice assistants,
                                real-time communication systems, and
                                conversational applications.
                            </p>

                            <p>
                                My cloud and DevOps experience includes
                                <strong>
                                    {' '}
                                    AWS, Microsoft Azure, Docker, CI/CD,
                                    Git, GitHub, automated testing, Jest,
                                    and React Testing Library
                                </strong>.
                                I work across the complete software development
                                lifecycle, from requirements and architecture to
                                development, testing, deployment, and production support.
                            </p>

                        </div>
                    </div>


                    {/* Profile Image */}

                    <div className="bento-card-v2 profile-card-v2 reveal">

                        <div className="image-wrapper">

                            <img
                                src={main}
                                alt="Uma Tiwari - Full Stack Developer"
                            />

                            <div className="profile-overlay">

                                <h4>Uma Tiwari</h4>

                                <span className="status-badge">
                                    Full-Stack Developer
                                </span>

                            </div>
                        </div>
                    </div>

                  
                </div>
            </div>
        </section>
    );
};

export default About;