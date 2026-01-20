import React, { useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare, Code2, Award, Layers, Zap, Sparkles } from 'lucide-react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SkillCard from '../components/SkillCard'
import ProjectCard from '../components/ProjectCard'
import ServiceCard from '../components/ServiceCard'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import ProjectModal from '../components/ProjectModal'
import BrandCarousel from '../components/BrandCarousel'
import TiltCard from '../components/TiltCard'
import AnimatedCounter from '../components/AnimatedCounter'
import { useProjects } from '../hooks/useProjects'
import { skillsData, servicesData } from '../data/portfolioData'

const Home = () => {
    const [selectedProject, setSelectedProject] = useState(null)

    const companyBrands = useMemo(
        () => [
            { name: 'Google', imgSrc: 'https://cdn.simpleicons.org/google' },
            { name: 'Microsoft', imgSrc: 'https://cdn.simpleicons.org/microsoft' },
            { name: 'Amazon', imgSrc: 'https://cdn.simpleicons.org/amazon' },
            { name: 'Meta', imgSrc: 'https://cdn.simpleicons.org/meta' },
            { name: 'Netflix', imgSrc: 'https://cdn.simpleicons.org/netflix' },
            { name: 'Spotify', imgSrc: 'https://cdn.simpleicons.org/spotify' },
            { name: 'Tokopedia', imgSrc: 'https://cdn.simpleicons.org/tokopedia' },
            { name: 'Gojek', imgSrc: 'https://cdn.simpleicons.org/gojek' },
        ],
        [],
    )

    const { projects } = useProjects()

    const featuredProjects = useMemo(() => {
        const sorted = [...(projects || [])].sort((a, b) => new Date(b?.date || 0) - new Date(a?.date || 0))
        return sorted.slice(0, 3)
    }, [projects])

    const primaryFeatured = featuredProjects[0] || null
    const secondaryFeatured = featuredProjects.slice(1, 3)

    return (
        <PageTransition>
            <div className="home-wrapper">
                {/* Hero Section */}
                <section className="min-vh-100 d-flex align-items-center position-relative border-bottom border-white-10 pt-5 hero-glow">
                    <div className="hero-orb hero-orb-1" aria-hidden="true" />
                    <div className="hero-orb hero-orb-2" aria-hidden="true" />
                    <Container className="pt-5">
                        <Row className="justify-content-center text-center">
                            <Col lg={8}>
                                <ScrollReveal delay={0.2} width="100%">
                                    <div className="d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill hero-pill mb-4">
                                        Available for Hire
                                    </div>
                                    <h2 className="h4 text-light mb-3 fw-medium">Hi, I'm <span className="text-primary">Muhammad Syafiq</span></h2>
                                    <h1 className="display-3 fw-bold mb-4 lh-sm">
                                        I build <span className="text-gradient">fast, modern</span> web experiences that convert.
                                    </h1>
                                    <p className="lead text-secondary mb-5 mx-auto" style={{ maxWidth: '650px' }}>
                                        Freelance Software Developer focused on performance, clean UI, and reliable engineering. From landing pages to full-stack apps.
                                    </p>
                                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                                        <Button as={Link} to="/contact" variant="primary" size="lg" className="px-5 rounded-pill fw-semibold icon-link hero-primary-cta">
                                            Let's Talk <ArrowRight size={20} />
                                        </Button>
                                        <Button as={Link} to="/projects" variant="outline-primary" size="lg" className="px-5 rounded-pill fw-semibold">
                                            View Projects
                                        </Button>
                                    </div>

                                    <div className="d-flex justify-content-center gap-4 gap-md-5 mt-5 flex-wrap hero-trust" aria-label="Highlights">
                                        <div className="text-center">
                                            <div className="h3 fw-bold text-white mb-1">{projects?.length || 0}+</div>
                                            <div className="text-secondary small text-uppercase fw-bold letter-spacing-1">Projects</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="h3 fw-bold text-white mb-1">Fast</div>
                                            <div className="text-secondary small text-uppercase fw-bold letter-spacing-1">Performance</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="h3 fw-bold text-white mb-1">Modern</div>
                                            <div className="text-secondary small text-uppercase fw-bold letter-spacing-1">UI/UX</div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="py-4 border-bottom border-white-10">
                    <BrandCarousel />
                </section>

                {/* About Section */}
                <section className="py-5 position-relative overflow-hidden about-section">
                    {/* Animated background elements */}
                    <div className="position-absolute top-0 start-0 w-100 h-100">
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
                        <div className="position-absolute top-0 start-0 w-full h-full opacity-30" style={{
                            backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(56, 189, 248, 0.2) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 25%)',
                            backgroundSize: '100% 100%'
                        }} />
                    </div>
                    
                    <Container className="py-5 position-relative">
                        <ScrollReveal>
                            <div className="section-heading mb-5 text-center text-lg-start">
                                <span className="section-kicker text-gradient bg-gradient-to-r from-cyan-400 to-blue-500">
                                    About Me
                                </span>
                                <h2 className="display-5 fw-bold text-white mb-4">
                                    Crafting Digital Experiences 
                                    <span className="d-block mt-2">That <span className="text-gradient bg-gradient-to-r from-cyan-400 to-blue-500">Inspire</span></span>
                                </h2>
                                <div className="section-divider mx-auto mx-lg-0" />
                            </div>
                        </ScrollReveal>

                        <Row className="gy-5 align-items-center">
                            <Col lg={7}>
                                <ScrollReveal delay={0.2}>
                                    <div className="glass-panel p-4 p-lg-5 rounded-4 bg-gradient-to-br from-slate-800/50 to-slate-900/70 backdrop-blur-sm border border-slate-700/50 shadow-lg">
                                        <div className="position-relative z-10">
                                            <p className="text-slate-300 fs-5 lh-lg mb-4">
                                                I'm a passionate <span className="text-white fw-semibold">Full-Stack Developer</span> from Karawang, Indonesia, with a knack for turning complex problems into elegant, user-friendly solutions. With expertise in modern web technologies, I create digital experiences that are not only functional but also delightful to use.
                                            </p>
                                            <p className="text-slate-300 fs-5 lh-lg mb-0">
                                                My journey in tech has taken me through various domains, from building responsive UIs with <span className="text-cyan-300">React</span> and <span className="text-blue-400">Tailwind CSS</span> to architecting scalable backends with <span className="text-emerald-400">Node.js</span> and <span className="text-amber-400">Python</span>. I'm particularly fascinated by the intersection of design and technology, constantly exploring new ways to bring ideas to life.
                                            </p>
                                        </div>
                                        
                                        <div className="mt-5 pt-3">
                                            <div className="d-flex flex-wrap gap-4 justify-content-center justify-content-lg-start">
                                                <a 
                                                    href="#contact" 
                                                    className="btn btn-primary btn-lg px-4 rounded-pill fw-medium d-inline-flex align-items-center gap-2"
                                                >
                                                    <MessageSquare size={18} />
                                                    Let's Talk
                                                </a>
                                                <a 
                                                    href="#projects" 
                                                    className="btn btn-outline-light btn-lg px-4 rounded-pill fw-medium d-inline-flex align-items-center gap-2"
                                                >
                                                    <Code2 size={18} />
                                                    View My Work
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </Col>
                            
                            <Col lg={5}>
                                <ScrollReveal delay={0.4} className="h-100">
                                    <div className="d-flex flex-column gap-4 h-100">
                                        <div className="glass-panel p-4 rounded-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="p-3 rounded-3 bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                                                    <Award size={24} />
                                                </div>
                                                <div>
                                                    <h3 className="display-4 fw-bold mb-0 text-gradient bg-gradient-to-r from-blue-400 to-cyan-400">
                                                        <AnimatedCounter end={3} duration={2000} suffix="+" />
                                                    </h3>
                                                    <span className="text-slate-300 small text-uppercase fw-bold letter-spacing-1">Years Experience</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="glass-panel p-4 rounded-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="p-3 rounded-3 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                                                    <Layers size={24} />
                                                </div>
                                                <div>
                                                    <h3 className="display-4 fw-bold mb-0 text-gradient bg-gradient-to-r from-purple-400 to-pink-400">
                                                        <AnimatedCounter end={20} duration={2500} suffix="+" />
                                                    </h3>
                                                    <span className="text-slate-300 small text-uppercase fw-bold letter-spacing-1">Projects Completed</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="glass-panel p-4 rounded-4 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 hover:border-amber-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="p-3 rounded-3 bg-gradient-to-br from-amber-500 to-orange-500 text-white">
                                                    <Zap size={24} />
                                                </div>
                                                <div>
                                                    <h3 className="display-4 fw-bold mb-0 text-gradient bg-gradient-to-r from-amber-400 to-orange-400">
                                                        <AnimatedCounter end={100} duration={3000} suffix="%" />
                                                    </h3>
                                                    <span className="text-slate-300 small text-uppercase fw-bold letter-spacing-1">Client Satisfaction</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </Col>
                        </Row>
                    </Container>
                    
                    <style jsx global>{`
                        .about-section {
                            background: linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.95) 100%);
                            position: relative;
                            overflow: hidden;
                        }
                        
                        .about-section::before {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                            opacity: 0.3;
                            z-index: 0;
                        }
                        
                        .glass-panel {
                            backdrop-filter: blur(10px);
                            -webkit-backdrop-filter: blur(10px);
                            transition: all 0.3s ease;
                        }
                        
                        .glass-panel:hover {
                            transform: translateY(-5px);
                            box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.3) !important;
                        }
                        
                        .text-gradient {
                            background-clip: text;
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            display: inline-block;
                        }
                        
                        .section-kicker {
                            display: inline-block;
                            padding: 0.5rem 1rem;
                            border-radius: 2rem;
                            font-size: 0.8rem;
                            font-weight: 600;
                            letter-spacing: 0.1em;
                            text-transform: uppercase;
                            margin-bottom: 1.5rem;
                        }
                        
                        .section-divider {
                            width: 60px;
                            height: 4px;
                            background: linear-gradient(90deg, #3b82f6, #06b6d4);
                            border-radius: 2px;
                            margin-top: 1.5rem;
                        }
                    `}</style>
                </section>

                <section className="py-4 border-bottom border-white-10">
                    <BrandCarousel reverse items={companyBrands} />
                </section>

                {/* Skills Section */}
                <section className="py-5 position-relative skills-section overflow-hidden">
                    {/* Decorative elements */}
                    <div className="position-absolute top-0 start-0 w-100 h-100">
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
                        <div className="position-absolute top-0 start-0 w-full h-full opacity-20" style={{
                            backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 20%), radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.15) 0%, transparent 20%)',
                            backgroundSize: '100% 100%'
                        }} />
                    </div>
                    
                    <Container className="py-5 position-relative">
                        <ScrollReveal>
                            <div className="section-heading mb-5 text-center">
                                <span className="section-kicker text-gradient bg-gradient-to-r from-purple-500 to-pink-500">
                                    My Expertise
                                </span>
                                <h2 className="display-5 fw-bold text-white mb-4">
                                    Technologies I <span className="text-gradient bg-gradient-to-r from-purple-400 to-pink-400">Master</span>
                                </h2>
                                <p className="lead text-slate-300 max-w-3xl mx-auto mb-0">
                                    I've worked with a variety of technologies in the web development world, specializing in these key areas
                                </p>
                                <div className="section-divider mx-auto" />
                            </div>
                        </ScrollReveal>

                        <div className="skills-grid">
                            {skillsData.map((skill, index) => (
                                <div 
                                    key={index} 
                                    className="skill-card-wrapper"
                                    style={{ '--delay': `${index * 0.1}s` }}
                                >
                                    <ScrollReveal delay={index * 0.1} width="100%">
                                        <TiltCard intensity={10}>
                                            <SkillCard {...skill} />
                                        </TiltCard>
                                    </ScrollReveal>
                                </div>
                            ))}
                        </div>
                        
                        <ScrollReveal delay={0.4} className="mt-5 pt-4">
                            <div className="text-center">
                                <p className="text-slate-300 mb-4">
                                    Always learning and expanding my skill set to deliver the best solutions
                                </p>
                                <a 
                                    href="#contact" 
                                    className="btn btn-outline-light btn-lg px-5 rounded-pill fw-medium d-inline-flex align-items-center gap-2"
                                >
                                    <MessageSquare size={18} />
                                    Let's Discuss Your Project
                                </a>
                            </div>
                        </ScrollReveal>
                    </Container>
                    
                    <style jsx global>{`
                        .skills-section {
                            background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.98) 100%);
                            position: relative;
                            overflow: hidden;
                        }
                        
                        .skills-grid {
                            display: grid;
                            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                            gap: 1.5rem;
                        }
                        
                        .skill-card-wrapper {
                            opacity: 0;
                            animation: fadeInUp 0.6s ease-out forwards;
                            animation-delay: var(--delay, 0s);
                        }
                        
                        @keyframes fadeInUp {
                            from {
                                opacity: 0;
                                transform: translateY(20px);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }
                        
                        @media (max-width: 768px) {
                            .skills-grid {
                                grid-template-columns: 1fr;
                            }
                        }
                        
                        .skills-section::before {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            background: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236363f5' fill-opacity='0.03'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                            opacity: 0.3;
                            z-index: 0;
                        }
                    `}</style>
                </section>

                {/* Projects Section */}
                <section className="py-5 position-relative overflow-hidden projects-home-section">
                    <div className="position-absolute top-0 start-0 w-100 h-100" aria-hidden="true">
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
                        <div
                            className="position-absolute top-0 start-0 w-100 h-100 opacity-25"
                            style={{
                                backgroundImage:
                                    'radial-gradient(circle at 15% 35%, rgba(34, 211, 238, 0.18) 0%, transparent 28%), radial-gradient(circle at 85% 65%, rgba(168, 85, 247, 0.16) 0%, transparent 30%)',
                                backgroundSize: '100% 100%',
                            }}
                        />
                    </div>

                    <Container className="py-5 position-relative">
                        <ScrollReveal>
                            <div className="section-heading mb-5 text-center">
                                <span className="section-kicker text-gradient bg-gradient-to-r from-cyan-400 to-purple-400">
                                    Featured Work
                                </span>
                                <h2 className="display-5 fw-bold text-white mb-3">
                                    Recent <span className="text-gradient bg-gradient-to-r from-cyan-400 to-purple-400">Projects</span>
                                </h2>
                                <p className="lead text-slate-300 mx-auto mb-0" style={{ maxWidth: '720px' }}>
                                    A few highlights of what I've been building lately—clean UI, strong performance, and real-world value.
                                </p>
                                <div className="section-divider mx-auto" />
                            </div>
                        </ScrollReveal>

                        <div className="mb-5">
                            <AnimatePresence>
                                {selectedProject && (
                                    <ProjectModal
                                        project={selectedProject}
                                        onClose={() => setSelectedProject(null)}
                                    />
                                )}
                            </AnimatePresence>

                            <Row className="g-4 mb-5 align-items-stretch">
                                {primaryFeatured && (
                                    <Col lg={7}>
                                        <ScrollReveal delay={0.1} width="100%">
                                            <div className="featured-project featured-project-primary h-100">
                                                <TiltCard intensity={12}>
                                                    <ProjectCard
                                                        project={primaryFeatured}
                                                        onClick={() => setSelectedProject(primaryFeatured)}
                                                    />
                                                </TiltCard>
                                            </div>
                                        </ScrollReveal>
                                    </Col>
                                )}

                                <Col lg={5}>
                                    <div className="d-flex flex-column gap-4 h-100">
                                        {secondaryFeatured.map((project, index) => (
                                            <ScrollReveal key={project?.id || index} delay={0.2 + index * 0.1} width="100%">
                                                <div className="featured-project featured-project-secondary">
                                                    <TiltCard intensity={10}>
                                                        <ProjectCard
                                                            project={project}
                                                            onClick={() => setSelectedProject(project)}
                                                        />
                                                    </TiltCard>
                                                </div>
                                            </ScrollReveal>
                                        ))}
                                    </div>
                                </Col>
                            </Row>

                            <div className="text-center pt-3">
                                <Button
                                    as={Link}
                                    to="/projects"
                                    variant="primary"
                                    size="lg"
                                    className="px-5 py-3 fw-semibold rounded-pill shadow-lg d-inline-flex align-items-center gap-2"
                                >
                                    See All Projects
                                    <ArrowRight size={20} />
                                </Button>
                            </div>
                        </div>
                    </Container>

                    <style jsx global>{`
                        .projects-home-section {
                            border-top: 1px solid rgba(255, 255, 255, 0.06);
                            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
                        }

                        .projects-home-section .featured-project {
                            position: relative;
                        }

                        .projects-home-section .featured-project::after {
                            content: '';
                            position: absolute;
                            inset: -1px;
                            border-radius: 24px;
                            background: linear-gradient(135deg, rgba(34, 211, 238, 0.18), rgba(168, 85, 247, 0.14));
                            filter: blur(18px);
                            opacity: 0;
                            transition: opacity 0.35s ease;
                            z-index: -1;
                        }

                        .projects-home-section .featured-project:hover::after {
                            opacity: 1;
                        }
                    `}</style>
                </section>

                {/* Services Section */}
                <section className="py-5 position-relative overflow-hidden services-home-section">
                    <div className="position-absolute top-0 start-0 w-100 h-100" aria-hidden="true">
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
                        <div
                            className="position-absolute top-0 start-0 w-100 h-100 opacity-20"
                            style={{
                                backgroundImage:
                                    'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.14) 0%, transparent 25%), radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.12) 0%, transparent 25%)',
                                backgroundSize: '100% 100%',
                            }}
                        />
                    </div>

                    <Container className="py-5 position-relative">
                        <ScrollReveal>
                            <div className="section-heading mb-5 text-center">
                                <span className="section-kicker text-gradient bg-gradient-to-r from-blue-400 to-pink-400">
                                    What I Do
                                </span>
                                <h2 className="display-5 fw-bold text-white mb-3">
                                    My <span className="text-gradient bg-gradient-to-r from-blue-400 to-pink-400">Services</span>
                                </h2>
                                <p className="lead text-slate-300 mx-auto mb-0" style={{ maxWidth: '720px' }}>
                                    I help you design, build, and ship products with a strong focus on speed, clarity, and maintainability.
                                </p>
                                <div className="section-divider mx-auto" />
                            </div>
                        </ScrollReveal>

                        <Row className="g-4">
                            {servicesData.map((service, index) => (
                                <Col key={index} md={6} lg={4}>
                                    <ScrollReveal delay={index * 0.1} width="100%">
                                        <TiltCard intensity={10}>
                                            <ServiceCard {...service} />
                                        </TiltCard>
                                    </ScrollReveal>
                                </Col>
                            ))}
                        </Row>
                    </Container>

                    <style jsx global>{`
                        .services-home-section {
                            border-top: 1px solid rgba(255, 255, 255, 0.06);
                            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
                        }
                    `}</style>
                </section>

                {/* CTA Section */}
                <section className="py-5 mb-5 position-relative overflow-hidden cta-home-section">
                    <div className="position-absolute top-0 start-0 w-100 h-100" aria-hidden="true">
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
                        <div
                            className="position-absolute top-0 start-0 w-100 h-100 opacity-30"
                            style={{
                                backgroundImage:
                                    'radial-gradient(circle at 25% 40%, rgba(34, 197, 94, 0.14) 0%, transparent 28%), radial-gradient(circle at 75% 60%, rgba(59, 130, 246, 0.16) 0%, transparent 30%)',
                                backgroundSize: '100% 100%',
                            }}
                        />
                    </div>

                    <Container className="position-relative">
                        <ScrollReveal>
                            <div className="cta-panel-new rounded-5 p-5 p-lg-5 position-relative overflow-hidden">
                                <div className="cta-panel-grid">
                                    <div>
                                        <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill cta-pill mb-3">
                                            <Sparkles size={16} />
                                            Let's build something great
                                        </div>
                                        <h2 className="display-5 fw-bold text-white mb-3">
                                            Ready to start a <span className="text-gradient bg-gradient-to-r from-emerald-400 to-cyan-400">project</span>?
                                        </h2>
                                        <p className="lead text-slate-200 mb-4" style={{ maxWidth: '640px' }}>
                                            Tell me what you need—I'll help you turn it into a fast, beautiful, and maintainable product.
                                        </p>
                                        <div className="d-flex flex-wrap gap-3">
                                            <Button
                                                as={Link}
                                                to="/contact"
                                                variant="primary"
                                                size="lg"
                                                className="px-5 py-3 rounded-pill fw-bold shadow-lg d-inline-flex align-items-center gap-2"
                                            >
                                                <MessageSquare size={18} />
                                                Let's Talk
                                            </Button>
                                            <Button
                                                as={Link}
                                                to="/projects"
                                                variant="outline-light"
                                                size="lg"
                                                className="px-5 py-3 rounded-pill fw-bold d-inline-flex align-items-center gap-2"
                                            >
                                                <Code2 size={18} />
                                                View Work
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="cta-stats">
                                        <div className="cta-stat">
                                            <div className="cta-stat-title">Fast delivery</div>
                                            <div className="cta-stat-value">High quality</div>
                                        </div>
                                        <div className="cta-stat">
                                            <div className="cta-stat-title">Clean UI</div>
                                            <div className="cta-stat-value">Readable UX</div>
                                        </div>
                                        <div className="cta-stat">
                                            <div className="cta-stat-title">Maintainable</div>
                                            <div className="cta-stat-value">Scalable code</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </Container>

                    <style jsx global>{`
                        .cta-home-section {
                            border-top: 1px solid rgba(255, 255, 255, 0.06);
                            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
                        }

                        .cta-panel-new {
                            background: linear-gradient(135deg, rgba(15, 23, 42, 0.65), rgba(30, 41, 59, 0.55));
                            border: 1px solid rgba(255, 255, 255, 0.10);
                            box-shadow: 0 18px 60px rgba(0, 0, 0, 0.35);
                            backdrop-filter: blur(10px);
                            -webkit-backdrop-filter: blur(10px);
                        }

                        .cta-panel-new::before {
                            content: '';
                            position: absolute;
                            inset: 0;
                            background: linear-gradient(90deg, rgba(34, 197, 94, 0.08), rgba(34, 211, 238, 0.10), rgba(168, 85, 247, 0.08));
                            opacity: 0.85;
                            pointer-events: none;
                        }

                        .cta-panel-grid {
                            position: relative;
                            z-index: 1;
                            display: grid;
                            grid-template-columns: 1.2fr 0.8fr;
                            gap: 2rem;
                            align-items: center;
                        }

                        .cta-pill {
                            background: rgba(255, 255, 255, 0.08);
                            border: 1px solid rgba(255, 255, 255, 0.12);
                            color: rgba(255, 255, 255, 0.92);
                            font-weight: 600;
                            letter-spacing: 0.02em;
                        }

                        .cta-stats {
                            display: grid;
                            gap: 1rem;
                        }

                        .cta-stat {
                            padding: 1rem 1.25rem;
                            border-radius: 16px;
                            background: rgba(2, 6, 23, 0.35);
                            border: 1px solid rgba(255, 255, 255, 0.10);
                        }

                        .cta-stat-title {
                            font-size: 0.85rem;
                            text-transform: uppercase;
                            letter-spacing: 0.10em;
                            color: rgba(226, 232, 240, 0.75);
                            font-weight: 700;
                        }

                        .cta-stat-value {
                            margin-top: 0.25rem;
                            font-size: 1.15rem;
                            font-weight: 800;
                            color: rgba(255, 255, 255, 0.95);
                        }

                        @media (max-width: 992px) {
                            .cta-panel-grid {
                                grid-template-columns: 1fr;
                            }
                        }
                    `}</style>
                </section>
            </div>
        </PageTransition>
    )
}

export default Home
