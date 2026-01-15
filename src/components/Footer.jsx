import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className="py-5 mt-auto border-top border-white-10 bg-dark bg-opacity-50">
            <Container>
                <Row className="gy-5">
                    <Col lg={4}>
                        <div className="mb-4">
                            <h3 className="h5 fw-bold text-white mb-3">Muhammad Syafiq</h3>
                            <p className="text-secondary lh-lg mb-0" style={{ maxWidth: '300px' }}>
                                Building modern web applications and digital solutions with a focus on web performance and user experience.
                            </p>
                        </div>
                    </Col>

                    <Col lg={2} sm={6}>
                        <h4 className="h6 fw-bold text-primary text-uppercase letter-spacing-1 mb-4">Navigation</h4>
                        <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                            <li><Link to="/" className="text-secondary text-decoration-none hover-text-white transition-all">Home</Link></li>
                            <li><Link to="/projects" className="text-secondary text-decoration-none hover-text-white transition-all">Projects</Link></li>
                            <li><Link to="/contact" className="text-secondary text-decoration-none hover-text-white transition-all">Contact</Link></li>
                        </ul>
                    </Col>

                    <Col lg={2} sm={6}>
                        <h4 className="h6 fw-bold text-primary text-uppercase letter-spacing-1 mb-4">Connect</h4>
                        <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-secondary text-decoration-none hover-text-white transition-all">GitHub</a></li>
                            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary text-decoration-none hover-text-white transition-all">LinkedIn</a></li>
                            <li><a href="mailto:leoallogne@gmail.com" className="text-secondary text-decoration-none hover-text-white transition-all">Email</a></li>
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
