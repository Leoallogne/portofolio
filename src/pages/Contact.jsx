import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap'
import { Mail, MapPin, Phone, Send, CheckCircle, Github, Linkedin, Twitter, Instagram, MessageCircle, Clock, Zap } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import TiltCard from '../components/TiltCard'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [status, setStatus] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [focusedField, setFocusedField] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Contact | Muhammad Syafiq"
    }, [])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        await new Promise(resolve => setTimeout(resolve, 1500))

        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setIsSubmitting(false)

        setTimeout(() => setStatus(null), 5000)
    }

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "leoallogne@gmail.com",
            href: "mailto:leoallogne@gmail.com",
            description: "Best way to reach me",
            gradient: "linear-gradient(135deg, #38bdf8, #818cf8)"
        },
        {
            icon: Phone,
            label: "Phone / WhatsApp",
            value: "+62 812 3456 7890",
            href: "https://wa.me/6281234567890",
            description: "Mon-Fri, 9AM-6PM WIB",
            gradient: "linear-gradient(135deg, #22c55e, #16a34a)"
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Karawang, Indonesia",
            href: null,
            description: "Available for remote work",
            gradient: "linear-gradient(135deg, #f97316, #ea580c)"
        }
    ]

    const socialLinks = [
        { icon: Github, label: "GitHub", href: "https://github.com", color: "#f8fafc", bg: "rgba(255,255,255,0.1)" },
        { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "#0077b5", bg: "rgba(0,119,181,0.15)" },
        { icon: Twitter, label: "Twitter", href: "https://twitter.com", color: "#1da1f2", bg: "rgba(29,161,242,0.15)" },
        { icon: Instagram, label: "Instagram", href: "https://instagram.com", color: "#e4405f", bg: "rgba(228,64,95,0.15)" }
    ]

    const quickFacts = [
        { icon: Clock, label: "Response Time", value: "< 24 Hours" },
        { icon: Zap, label: "Availability", value: "Open for Work" },
        { icon: MessageCircle, label: "Languages", value: "ID, EN" }
    ]

    return (
        <PageTransition>
            <div className="py-5 mt-5">
                <Container>
                    {/* Hero Section */}
                    <ScrollReveal>
                        <div className="text-center mb-5 pb-4">
                            <div className="d-inline-block px-4 py-2 rounded-pill bg-primary bg-opacity-10 text-primary fw-semibold mb-4 border border-primary border-opacity-25">
                                <span className="me-2">✉️</span> Let's Connect
                            </div>
                            <h1 className="display-3 fw-bold text-white mb-4">Get in Touch</h1>
                            <p className="lead text-secondary mx-auto mb-0" style={{ maxWidth: '700px' }}>
                                Have a project in mind or want to discuss a potential collaboration?
                                I'd love to hear from you. Let's create something amazing together.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Quick Facts */}
                    <ScrollReveal delay={0.1}>
                        <Row className="g-3 mb-5 justify-content-center">
                            {quickFacts.map((fact, index) => (
                                <Col key={index} xs={6} md={4} lg={3}>
                                    <div className="text-center p-3 rounded-4 bg-dark bg-opacity-25 border border-white-10">
                                        <fact.icon className="text-primary mb-2" size={24} />
                                        <div className="text-secondary small text-uppercase mb-1">{fact.label}</div>
                                        <div className="text-white fw-bold">{fact.value}</div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </ScrollReveal>

                    <Row className="justify-content-center gy-5 mb-5">
                        {/* Contact Info & Social */}
                        <Col lg={5}>
                            <ScrollReveal delay={0.2}>
                                <div className="sticky-top" style={{ top: '100px' }}>
                                    {/* Contact Cards */}
                                    <div className="d-flex flex-column gap-3 mb-4">
                                        {contactInfo.map((item, index) => (
                                            <TiltCard key={index} intensity={8}>
                                                <Card className="contact-info-card border-0 bg-dark bg-opacity-50 border border-white-10 overflow-hidden">
                                                    <Card.Body className="p-4">
                                                        <div className="d-flex align-items-start gap-3">
                                                            <div
                                                                className="icon-box p-3 rounded-3 flex-shrink-0"
                                                                style={{ background: item.gradient }}
                                                            >
                                                                <item.icon size={24} color="#fff" />
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <div className="text-secondary small text-uppercase fw-bold letter-spacing-1 mb-1">
                                                                    {item.label}
                                                                </div>
                                                                {item.href ? (
                                                                    <a
                                                                        href={item.href}
                                                                        target={item.href.startsWith('http') ? '_blank' : undefined}
                                                                        rel="noopener noreferrer"
                                                                        className="text-white text-decoration-none hover-text-primary transition-all fw-semibold d-block mb-1 fs-5"
                                                                    >
                                                                        {item.value}
                                                                    </a>
                                                                ) : (
                                                                    <span className="text-white fw-semibold d-block mb-1 fs-5">{item.value}</span>
                                                                )}
                                                                <small className="text-secondary">{item.description}</small>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </TiltCard>
                                        ))}
                                    </div>

                                    {/* Social Links */}
                                    <Card className="border-0 bg-dark bg-opacity-50 border border-white-10">
                                        <Card.Body className="p-4">
                                            <h3 className="h5 text-white fw-bold mb-4">Connect on Social</h3>
                                            <div className="d-flex gap-3 flex-wrap">
                                                {socialLinks.map((social, index) => (
                                                    <a
                                                        key={index}
                                                        href={social.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="social-link-btn p-3 rounded-3 text-decoration-none transition-all d-flex align-items-center gap-2"
                                                        style={{
                                                            background: social.bg,
                                                            color: social.color
                                                        }}
                                                        title={social.label}
                                                    >
                                                        <social.icon size={22} />
                                                        <span className="d-none d-sm-inline fw-medium">{social.label}</span>
                                                    </a>
                                                ))}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </ScrollReveal>
                        </Col>

                        {/* Contact Form */}
                        <Col lg={7}>
                            <ScrollReveal delay={0.3}>
                                <TiltCard intensity={5}>
                                    <Card className="border-0 bg-dark bg-opacity-50 border border-white-10">
                                        <Card.Body className="p-4 p-md-5">
                                            <div className="d-flex align-items-center gap-3 mb-4">
                                                <div className="p-3 rounded-3" style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)' }}>
                                                    <Send size={24} color="#fff" />
                                                </div>
                                                <div>
                                                    <h3 className="h4 text-white fw-bold mb-0">Send Me a Message</h3>
                                                    <small className="text-secondary">I'll get back to you within 24 hours</small>
                                                </div>
                                            </div>

                                            {status === 'success' && (
                                                <Alert
                                                    variant="success"
                                                    className="bg-success bg-opacity-25 text-white border-success border-opacity-25 d-flex align-items-center gap-2"
                                                >
                                                    <CheckCircle size={20} />
                                                    <span>Message sent successfully! I'll get back to you soon.</span>
                                                </Alert>
                                            )}

                                            <Form onSubmit={handleSubmit}>
                                                <Row className="g-4">
                                                    <Col md={6}>
                                                        <Form.Group>
                                                            <Form.Label className={`form-label-custom ${focusedField === 'name' || formData.name ? 'active' : ''}`}>
                                                                Full Name *
                                                            </Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                name="name"
                                                                value={formData.name}
                                                                onChange={handleChange}
                                                                onFocus={() => setFocusedField('name')}
                                                                onBlur={() => setFocusedField(null)}
                                                                required
                                                                size="lg"
                                                                className="form-input-modern"
                                                                placeholder="John Doe"
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Group>
                                                            <Form.Label className={`form-label-custom ${focusedField === 'email' || formData.email ? 'active' : ''}`}>
                                                                Email Address *
                                                            </Form.Label>
                                                            <Form.Control
                                                                type="email"
                                                                name="email"
                                                                value={formData.email}
                                                                onChange={handleChange}
                                                                onFocus={() => setFocusedField('email')}
                                                                onBlur={() => setFocusedField(null)}
                                                                required
                                                                size="lg"
                                                                className="form-input-modern"
                                                                placeholder="john@example.com"
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xs={12}>
                                                        <Form.Group>
                                                            <Form.Label className={`form-label-custom ${focusedField === 'subject' || formData.subject ? 'active' : ''}`}>
                                                                Subject *
                                                            </Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                name="subject"
                                                                value={formData.subject}
                                                                onChange={handleChange}
                                                                onFocus={() => setFocusedField('subject')}
                                                                onBlur={() => setFocusedField(null)}
                                                                required
                                                                size="lg"
                                                                className="form-input-modern"
                                                                placeholder="Project Inquiry / Collaboration / etc."
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xs={12}>
                                                        <Form.Group>
                                                            <Form.Label className={`form-label-custom ${focusedField === 'message' || formData.message ? 'active' : ''}`}>
                                                                Your Message *
                                                            </Form.Label>
                                                            <Form.Control
                                                                as="textarea"
                                                                rows={5}
                                                                name="message"
                                                                value={formData.message}
                                                                onChange={handleChange}
                                                                onFocus={() => setFocusedField('message')}
                                                                onBlur={() => setFocusedField(null)}
                                                                required
                                                                className="form-input-modern"
                                                                placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xs={12}>
                                                        <Button
                                                            type="submit"
                                                            variant="primary"
                                                            size="lg"
                                                            className="w-100 fw-bold rounded-pill py-3 submit-btn-glow"
                                                            disabled={isSubmitting}
                                                        >
                                                            {isSubmitting ? (
                                                                <>
                                                                    <span className="spinner-border spinner-border-sm me-2" />
                                                                    Sending...
                                                                </>
                                                            ) : (
                                                                <>
                                                                    Send Message <Send size={18} className="ms-2" />
                                                                </>
                                                            )}
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </TiltCard>
                            </ScrollReveal>
                        </Col>
                    </Row>

                    {/* FAQ Section */}
                    <ScrollReveal delay={0.4}>
                        <div className="text-center p-5 rounded-4 bg-dark bg-opacity-25 border border-white-10">
                            <div className="display-4 mb-3">🤝</div>
                            <h4 className="text-white fw-bold mb-3">Let's Build Something Amazing</h4>
                            <p className="text-secondary mb-0 mx-auto" style={{ maxWidth: '600px' }}>
                                Whether you need a complete web solution, help with an existing project,
                                or just want to chat about tech – I'm always excited to connect with fellow developers and entrepreneurs.
                            </p>
                        </div>
                    </ScrollReveal>
                </Container>
            </div>
        </PageTransition>
    )
}

export default Contact
