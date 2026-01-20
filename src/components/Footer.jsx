import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="py-5 mt-auto border-top border-white-10 footer-new">
            <Container>
                <Row className="gy-5">
                    <Col lg={4}>
                        <div className="mb-4">
                            <h3 className="h5 fw-bold text-white mb-3">Muhammad Syafiq</h3>
                            <p className="text-secondary lh-lg mb-0" style={{ maxWidth: '340px' }}>
                                Building modern web applications and digital solutions with a focus on web performance and user experience.
                            </p>
                        </div>

                        <div className="d-flex gap-3">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social"
                                aria-label="GitHub"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a href="mailto:leoallogne@gmail.com" className="footer-social" aria-label="Email">
                                <Mail size={18} />
                            </a>
                        </div>
                    </Col>

                    <Col lg={2} sm={6}>
                        <h4 className="h6 fw-bold text-primary text-uppercase letter-spacing-1 mb-4">Navigation</h4>
                        <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                            <li>
                                <Link to="/" className="footer-link">
                                    Home <ArrowUpRight size={14} />
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" className="footer-link">
                                    Projects <ArrowUpRight size={14} />
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="footer-link">
                                    Contact <ArrowUpRight size={14} />
                                </Link>
                            </li>
                        </ul>
                    </Col>

                    <Col lg={2} sm={6}>
                        <h4 className="h6 fw-bold text-primary text-uppercase letter-spacing-1 mb-4">Connect</h4>
                        <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub <ArrowUpRight size={14} /></a></li>
                            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn <ArrowUpRight size={14} /></a></li>
                            <li><a href="mailto:leoallogne@gmail.com" className="footer-link">Email <ArrowUpRight size={14} /></a></li>
                        </ul>
                    </Col>

                    <Col lg={4}>
                        <div className="text-lg-end text-secondary small pt-lg-2">
                            <p className="mb-0">&copy; {new Date().getFullYear()} Muhammad Syafiq.</p>
                            <p className="mb-0">All rights reserved.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
