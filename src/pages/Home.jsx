import React, { useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
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
                <section className="py-5 bg-dark bg-opacity-50 position-relative section-glow">
                    <div className="section-orb section-orb-1" aria-hidden="true" />
                    <Container className="py-5">
                        <ScrollReveal>
                            <div className="section-heading mb-5">
                                <span className="section-kicker">About Me</span>
                                <h2 className="display-6 fw-bold text-white mb-3">Passionate about clean code and user-centric design.</h2>
                                <div className="section-divider" />
                            </div>
                        </ScrollReveal>

                        <Row className="gy-5">
                            <Col lg={7}>
                                <ScrollReveal delay={0.2}>
                                    <div className="glass-panel text-secondary fs-5 lead lh-lg pe-lg-5">
                                        <p className="mb-4">
                                            I am a Freelance Web & Software Developer based in Karawang, Indonesia. With a strong foundation in modern web technologies and a problem-solving mindset, I help businesses and individuals bring their digital ideas to life.
                                        </p>
                                        <p className="mb-0">
                                            My expertise spans across full-stack development, from crafting intuitive user interfaces with React and Tailwind CSS to building robust backends with Flask and Python. I am also deeply interested in the evolving landscape of Web3 and blockchain technologies.
                                        </p>
                                    </div>
                                </ScrollReveal>
                            </Col>
                            <Col lg={5}>
                                <ScrollReveal delay={0.4}>
                                    <div className="glass-panel d-flex gap-4 flex-wrap justify-content-between">
                                        <div className="pe-4">
                                            <h3 className="display-4 fw-bold text-primary mb-0 counter-glow">
                                                <AnimatedCounter end={3} duration={2000} suffix="+" />
                                            </h3>
                                            <span className="text-muted small text-uppercase fw-bold letter-spacing-1">Years Exp</span>
                                        </div>
                                        <div className="pe-4">
                                            <h3 className="display-4 fw-bold text-primary mb-0 counter-glow">
                                                <AnimatedCounter end={20} duration={2500} suffix="+" />
                                            </h3>
                                            <span className="text-muted small text-uppercase fw-bold letter-spacing-1">Projects</span>
                                        </div>
                                        <div>
                                            <h3 className="display-4 fw-bold text-primary mb-0 counter-glow">
                                                <AnimatedCounter end={100} duration={3000} suffix="%" />
                                            </h3>
                                            <span className="text-muted small text-uppercase fw-bold letter-spacing-1">Commitment</span>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="py-4 border-bottom border-white-10">
                    <BrandCarousel reverse items={companyBrands} />
                </section>

                {/* Skills Section */}
                <section className="py-5">
                    <Container className="py-5">
                        <ScrollReveal>
                            <div className="section-heading mb-5">
                                <span className="section-kicker">Technical Proficiency</span>
                                <h2 className="display-6 fw-bold text-white mb-3">My Tech Stack</h2>
                                <div className="section-divider" />
                            </div>
                        </ScrollReveal>

                        <Row className="g-4">
                            {skillsData.map((skill, index) => (
                                <Col key={index} md={6} lg={4}>
                                    <ScrollReveal delay={index * 0.1} width="100%">
                                        <TiltCard intensity={10}>
                                            <SkillCard {...skill} />
                                        </TiltCard>
                                    </ScrollReveal>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>

                {/* Projects Section */}
                <section className="py-5 bg-dark bg-opacity-50">
                    <Container className="py-5">
                        <ScrollReveal>
                            <div className="section-heading mb-5">
                                <span className="section-kicker">Featured Work</span>
                                <h2 className="display-6 fw-bold text-white mb-3">Recent Projects</h2>
                                <div className="section-divider" />
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
                                <Button as={Link} to="/projects" variant="outline-primary" size="lg" className="px-5 py-2 fw-semibold rounded-pill icon-link">
                                    See All Projects <ArrowRight size={20} />
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Services Section */}
                <section className="py-5">
                    <Container className="py-5">
                        <ScrollReveal>
                            <div className="section-heading mb-5">
                                <span className="section-kicker">What I Do</span>
                                <h2 className="display-6 fw-bold text-white mb-3">My Services</h2>
                                <div className="section-divider" />
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
                </section>

                {/* CTA Section */}
                <section className="py-5 mb-5 position-relative cta-glow">
                    <div className="cta-orb cta-orb-1" aria-hidden="true" />
                    <div className="cta-orb cta-orb-2" aria-hidden="true" />
                    <Container>
                        <ScrollReveal>
                            <div className="p-5 text-center bg-dark bg-gradient rounded-5 border border-white-10 position-relative overflow-hidden cta-panel" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                                <div className="position-relative z-1">
                                    <h2 className="display-5 fw-bold text-white mb-3">Ready to Start a Project?</h2>
                                    <p className="lead text-secondary mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                                        Let's collaborate to build something amazing. I'm available for freelance projects and consultation.
                                    </p>
                                    <Button as={Link} to="/contact" variant="primary" size="lg" className="px-5 py-3 rounded-pill fw-bold shadow-lg">
                                        Let's Talk
                                    </Button>
                                </div>
                            </div>
                        </ScrollReveal>
                    </Container>
                </section>
            </div>
        </PageTransition>
    )
}

export default Home
