import { useEffect, useRef } from 'react';
import profileImg from '../assets/main.jpeg';
import './AboutMe.css';

const achievements = [
    {
        icon: 'bx bx-trophy',
        title: '6+ Years Experience',
        detail: 'Professional experience across full-stack engineering, SaaS products, APIs, cloud deployment, and AI integrations.',
        color: '#f59e0b',
    },
    {
        icon: 'bx bx-rocket',
        title: '8+ Enterprise SaaS Apps',
        detail: 'Delivered enterprise applications for US-based clients, including SaaS platforms, analytics dashboards, and AI-powered workflows.',
        color: '#6366f1',
    },
    {
        icon: 'bx bxl-github',
        title: '20K+ Monthly Users',
        detail: 'Built MERN applications serving 20K+ monthly active users and production systems used by real business teams.',
        color: '#10b981',
    },
    {
        icon: 'bx bx-brain',
        title: 'AI Voice Assistant',
        detail: 'Integrated OpenAI Realtime API, Whisper, and Twilio to build a low-latency voice assistant experience.',
        color: '#ec4899',
    },
    {
        icon: 'bx bx-devices',
        title: '500K+ API Requests',
        detail: 'Designed secure Node.js and Express REST APIs handling 500K+ monthly requests with JWT-based authentication.',
        color: '#06b6d4',
    },
    {
        icon: 'bx bx-code-curly',
        title: '35% Faster Dashboards',
        detail: 'Built React, TypeScript, Redux, and AG Grid dashboards that reduced data-load time by about 35%.',
        color: '#8b5cf6',
    },
];

const AboutMe = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('am-visible');
                });
            },
            { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
        );
        const els = sectionRef.current?.querySelectorAll('.am-reveal');
        els?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="about-me-section" ref={sectionRef} aria-label="About Uma Tiwari">
            {/* Subtle background accents */}
            <div className="am-bg-blob am-blob-1" />
            <div className="am-bg-blob am-blob-2" />

            <div className="container am-outer">

                {/* ── TOP: two-column intro + photo ── */}
                <div className="am-top-row am-reveal">
                    {/* Left — text */}
                    <div className="am-left">
                        <span className="am-eyebrow">
                            <i className="bx bx-user-circle" /> Who am I
                        </span>
                        <div className="am-heading-wrapper">
                            <h2 className="am-heading">
                                I'm <span className="am-name-highlight">Uma Tiwari</span>
                            </h2>
                            <span className="am-nickname">Full-Stack Developer | MERN Stack Developer | React.js | Node.js | Next.js | TypeScript</span>
                        </div>
                        <p className="am-bio">
                            I’m a Full-Stack Developer with <strong>6+ years</strong>  of experience building scalable, responsive, and high-performance web applications using <strong>React.js, Next.js, Node.js, Express.js, TypeScript, MongoDB, and REST APIs</strong>.
                        </p> <p className="am-bio">
                            I specialize in developing end-to-end web applications, enterprise dashboards, SaaS platforms, AI-powered applications, and real-time systems. I focus on clean, maintainable code, scalable architecture, responsive user interfaces, API development, performance optimization, and reliable production deployments.
                        </p>
                        <p className="am-bio">
                            My experience includes integrating OpenAI APIs, OpenAI Realtime API, Whisper, and Twilio to build AI-powered voice and conversational applications, along with developing data-intensive dashboards using React, Redux, TypeScript, and AG Grid.
                        </p>
                        <p className="am-bio">
                            I work across the complete software development lifecycle — requirement analysis, architecture, development, API integration, testing, deployment, and maintenance — with experience using <strong>AWS, Microsoft Azure, Docker, CI/CD, Git, and GitHub.</strong> 
                        </p>
                        <p className="am-bio">
                            Based in India, I’m open to remote, onsite, and hybrid opportunities and interested in <strong>working with teams building scalable products, modern web applications, and AI-driven solutions.</strong>
                        </p>
                       <div className="am-quick-tags">
                            <span className="am-tag"><i className="bx bx-map-pin" /> India</span>
                            <span className="am-tag"><i className="bx bx-briefcase" /> Full-Stack, Mern Stack Developer</span>
                            {/* <span className="am-tag am-tag-available">
                                <i className="bx bx-circle" /> Open to New Opportunities
                            </span> */}
                            <span className="am-tag"><i className="bx bx-world" /> Open to Remote / Onsite / Hybrid</span>
                        </div>
                    </div>

                    {/* Right — photo */}
                    <div className="am-right">
                        <div className="am-photo-frame">
                            <img src={profileImg} alt="Uma Tiwari" className="am-photo" />
                            <div className="am-photo-badge">
                                <i className="bx bx-code-alt" />
                                <span>Mern stack developer</span>
                            </div>
                            <div className="am-photo-deco am-deco-1" />
                            <div className="am-photo-deco am-deco-2" />
                        </div>
                    </div>
                </div>

                {/* ── Achievements Grid ── */}
                <div className="am-achievements-block am-reveal" style={{ '--am-delay': '0.1s' }}>
                    <h3 className="am-sub-heading">
                        <i className="bx bx-medal" /> Achievements &amp; Highlights
                    </h3>
                    <div className="am-achievements-grid">
                        {achievements.map((a, i) => (
                            <div
                                key={a.title}
                                className="am-ach-card"
                                style={{ '--ach-color': a.color, '--ach-delay': `${i * 0.07}s` }}
                            >
                                <div className="am-ach-icon">
                                    <i className={a.icon} />
                                </div>
                                <div className="am-ach-text">
                                    <h4>{a.title}</h4>
                                    <p>{a.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutMe;
