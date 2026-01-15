import React, { useState } from 'react'
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
import { skillsData, projectsData, servicesData } from '../data/portfolioData'

const Home = () => {
    const [selectedProject, setSelectedProject] = useState(null)

    return (
        <PageTransition>
            <div className="home-wrapper">
                {/* Hero Section */}
                <section className="min-vh-100 d-flex align-items-center position-relative border-bottom border-white-10 pt-5">
                    <Container className="pt-5">
                        <Row className="justify-content-center text-center">
                            <Col lg={8}>
                                <ScrollReveal delay={0.2} width="100%">
                                    <div className="d-inline-block px-4 py-2 rounded-pill bg-primary bg-opacity-10 text-primary fw-semibold mb-4 border border-primary border-opacity-25">
                                        Available for Hire
                                    </div>
                                    <h2 className="h4 text-light mb-3 fw-medium">Hi, I'm <span className="text-primary">Muhammad Syafiq</span></h2>
                                    <h1 className="display-3 fw-bold mb-4 lh-sm">
                                        Building <span className="text-primary">Digital Experiences</span> that Matter.
                                    </h1>
                                    <p className="lead text-secondary mb-5 mx-auto" style={{ maxWidth: '650px' }}>
                                        Freelance Software Developer specializing in high-performance web applications and automation. Bridging the gap between complex backends and beautiful frontends.
                                    </p>
                                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                                        <Button as={Link} to="/projects" variant="primary" size="lg" className="px-5 rounded-pill fw-semibold icon-link">
                                            View Projects <ArrowRight size={20} />
                                        </Button>
                                        <Button as={Link} to="/contact" variant="outline-primary" size="lg" className="px-5 rounded-pill fw-semibold">
                                            Contact Me
                                        </Button>
                                    </div>
                                </ScrollReveal>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <BrandCarousel />

                {/* About Section */}
                <section className="py-5 bg-dark bg-opacity-50">
                    <Container className="py-5">
                        <ScrollReveal>
                            <div className="mb-5">
                                <span className="text-primary fw-bold text-uppercase small letter-spacing-2">About Me</span>
                                <h2 className="display-6 fw-bold text-white mb-3">Passionate about clean code and user-centric design.</h2>
                                <div className="bg-primary rounded-pill mt-3" style={{ width: '60px', height: '4px' }}></div>
                            </div>
                        </ScrollReveal>

                        <Row className="gy-5">
                            <Col lg={7}>
                                <ScrollReveal delay={0.2}>
                                    <div className="text-secondary fs-5 lead lh-lg pe-lg-5">
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
                                    <div className="d-flex gap-4 border-top border-secondary border-opacity-25 pt-4 flex-wrap">
                                        <div className="pe-4">
                                            <h3 className="display-4 fw-bold text-primary mb-0">3+</h3>
                                            <span className="text-muted small text-uppercase fw-bold letter-spacing-1">Years Exp</span>
                                        </div>
                                        <div className="pe-4">
                                            <h3 className="display-4 fw-bold text-primary mb-0">20+</h3>
                                            <span className="text-muted small text-uppercase fw-bold letter-spacing-1">Projects</span>
                                        </div>
                                        <div>
                                            <h3 className="display-4 fw-bold text-primary mb-0">100%</h3>
                                            <span className="text-muted small text-uppercase fw-bold letter-spacing-1">Commitment</span>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Skills Section */}
                <section className="py-5">
                    <Container className="py-5">
                        <ScrollReveal>
                            <div className="mb-5">
                                <span className="text-primary fw-bold text-uppercase small letter-spacing-2">Technical Proficiency</span>
                                <h2 className="display-6 fw-bold text-white mb-3">My Tech Stack</h2>
                                <div className="bg-primary rounded-pill mt-3" style={{ width: '60px', height: '4px' }}></div>
                            </div>
                        </ScrollReveal>

                        <Row className="g-4">
                            {skillsData.map((skill, index) => (
                                <Col key={index} md={6} lg={4}>
                                    <ScrollReveal delay={index * 0.1} width="100%">
                                        <SkillCard {...skill} />
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
                            <div className="mb-5">
                                <span className="text-primary fw-bold text-uppercase small letter-spacing-2">Featured Work</span>
                                <h2 className="display-6 fw-bold text-white mb-3">Recent Projects</h2>
                                <div className="bg-primary rounded-pill mt-3" style={{ width: '60px', height: '4px' }}></div>
                            </div>
                        </ScrollReveal>

                        <div className="mb-5">
                            <ProjectModal
                                project={selectedProject}
                                onClose={() => setSelectedProject(null)}
                            />

                            <Row className="g-4 mb-5">
                                {projectsData.slice(0, 3).map((project, index) => (
                                    <Col key={index} md={6} lg={4}>
                                        <ScrollReveal delay={index * 0.1} width="100%">
                                            <ProjectCard
                                                project={project}
                                                onClick={() => setSelectedProject(project)}
                                            />
                                        </ScrollReveal>
                                    </Col>
                                ))}
                            </Row>

                            <div className="text-center pt-3">
                                <Button as={Link} to="/projects" variant="outline-primary" size="lg" className="px-5 py-2 fw-semibold rounded-pill icon-link">
                                    View All Projects <ArrowRight size={20} />
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Services Section */}
                <section className="py-5">
                    <Container className="py-5">
                        <ScrollReveal>
                            <div className="mb-5">
                                <span className="text-primary fw-bold text-uppercase small letter-spacing-2">What I Do</span>
                                <h2 className="display-6 fw-bold text-white mb-3">My Services</h2>
                                <div className="bg-primary rounded-pill mt-3" style={{ width: '60px', height: '4px' }}></div>
                            </div>
                        </ScrollReveal>

                        <Row className="g-4">
                            {servicesData.map((service, index) => (
                                <Col key={index} md={6} lg={4}>
                                    <ScrollReveal delay={index * 0.1} width="100%">
                                        <ServiceCard {...service} />
                                    </ScrollReveal>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>

                {/* CTA Section */}
                <section className="py-5 mb-5">
                    <Container>
                        <ScrollReveal>
                            <div className="p-5 text-center bg-dark bg-gradient rounded-5 border border-white-10 position-relative overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
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
