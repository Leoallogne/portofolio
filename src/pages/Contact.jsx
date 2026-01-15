import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap'
import { Mail, MapPin, Phone, Send, CheckCircle, Github, Linkedin, Twitter } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [status, setStatus] = useState(null) // null, 'success', 'error'
    const [isSubmitting, setIsSubmitting] = useState(false)

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

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500))

        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setIsSubmitting(false)

        setTimeout(() => setStatus(null), 5000)
    }

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "leoallogne@gmail.com",
            href: "mailto:leoallogne@gmail.com",
            description: "Best way to reach me"
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+62 812 3456 7890",
            href: "tel:+6281234567890",
            description: "Mon-Fri, 9AM-6PM WIB"
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Karawang, Indonesia",
            href: null,
            description: "Available for remote work"
        }
    ]

    const socialLinks = [
        { icon: Github, label: "GitHub", href: "https://github.com", color: "text-white" },
        { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "text-primary" },
        { icon: Twitter, label: "Twitter", href: "https://twitter.com", color: "text-info" }
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
                                I'd love to hear from you. Feel free to reach out through the form below or via my contact details.
                            </p>
                        </div>
                    </ScrollReveal>

                    <Row className="justify-content-center gy-5 mb-5">
                        {/* Contact Info & Social */}
                        <Col lg={5}>
                            <ScrollReveal delay={0.2}>
                                <div className="sticky-top" style={{ top: '100px' }}>
                                    {/* Contact Information Card */}
                                    <Card className="border-0 bg-dark bg-opacity-50 border border-white-10 mb-4">
                                        <Card.Body className="p-4">
                                            <h3 className="h4 text-white fw-bold mb-4">Contact Information</h3>
                                            <div className="d-flex flex-column gap-4">
                                                {contactInfo.map((item, index) => (
                                                    <div key={index} className="d-flex align-items-start gap-3">
                                                        <div className="p-3 rounded-circle bg-primary bg-opacity-10 text-primary flex-shrink-0">
                                                            <item.icon size={22} />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div className="text-secondary small text-uppercase fw-bold letter-spacing-1 mb-1">
                                                                {item.label}
                                                            </div>
                                                            {item.href ? (
                                                                <a
                                                                    href={item.href}
                                                                    className="text-white text-decoration-none hover-text-primary transition-all fw-medium d-block mb-1"
                                                                >
                                                                    {item.value}
                                                                </a>
                                                            ) : (
                                                                <span className="text-white fw-medium d-block mb-1">{item.value}</span>
                                                            )}
                                                            <small className="text-secondary">{item.description}</small>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </Card.Body>
                                    </Card>

                                    {/* Social Links Card */}
                                    <Card className="border-0 bg-dark bg-opacity-50 border border-white-10">
                                        <Card.Body className="p-4">
                                            <h3 className="h5 text-white fw-bold mb-3">Follow Me</h3>
                                            <div className="d-flex gap-3">
                                                {socialLinks.map((social, index) => (
                                                    <a
                                                        key={index}
                                                        href={social.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`p-3 rounded-circle bg-secondary bg-opacity-10 ${social.color} hover-translate-y transition-all text-decoration-none`}
                                                        title={social.label}
                                                    >
                                                        <social.icon size={20} />
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
                                <Card className="border-0 bg-dark bg-opacity-50 border border-white-10">
                                    <Card.Body className="p-4 p-md-5">
                                        <h3 className="h4 text-white fw-bold mb-4">Send Me a Message</h3>

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
                                            <Row className="g-3">
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className="text-secondary small fw-bold text-uppercase mb-2">
                                                            Full Name *
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            required
                                                            size="lg"
                                                            className="bg-dark border-secondary text-white focus-ring-primary"
                                                            placeholder="John Doe"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className="text-secondary small fw-bold text-uppercase mb-2">
                                                            Email Address *
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            required
                                                            size="lg"
                                                            className="bg-dark border-secondary text-white focus-ring-primary"
                                                            placeholder="john@example.com"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col xs={12}>
                                                    <Form.Group className="mb-4">
                                                        <Form.Label className="text-secondary small fw-bold text-uppercase mb-2">
                                                            Your Message *
                                                        </Form.Label>
                                                        <Form.Control
                                                            as="textarea"
                                                            rows={6}
                                                            name="message"
                                                            value={formData.message}
                                                            onChange={handleChange}
                                                            required
                                                            className="bg-dark border-secondary text-white focus-ring-primary"
                                                            placeholder="Tell me about your project..."
                                                        />
                                                        <Form.Text className="text-secondary">
                                                            Minimum 10 characters
                                                        </Form.Text>
                                                    </Form.Group>
                                                </Col>
                                                <Col xs={12}>
                                                    <Button
                                                        type="submit"
                                                        variant="primary"
                                                        size="lg"
                                                        className="w-100 fw-bold rounded-pill py-3"
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
                            </ScrollReveal>
                        </Col>
                    </Row>

                    {/* FAQ or Additional Info Section */}
                    <ScrollReveal delay={0.4}>
                        <div className="text-center p-5 rounded-4 bg-dark bg-opacity-25 border border-white-10">
                            <h4 className="text-white fw-bold mb-3">Response Time</h4>
                            <p className="text-secondary mb-0">
                                I typically respond within 24-48 hours. For urgent inquiries, please mention "URGENT" in your message subject.
                            </p>
                        </div>
                    </ScrollReveal>
                </Container>
            </div>
        </PageTransition>
    )
}

export default Contact
