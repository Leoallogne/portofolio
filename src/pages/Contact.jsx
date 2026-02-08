import React, { useEffect, useState } from 'react'
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
            <div className="contact-page contact-page--v2 min-h-screen" id="top">
                <div className="contact-page-bg" aria-hidden="true">
                    <div className="contact-page-bg-base" />
                    <div
                        className="contact-page-bg-radials"
                        style={{
                            backgroundImage:
                                'radial-gradient(circle at 12% 18%, rgba(34, 211, 238, 0.18) 0%, transparent 28%), radial-gradient(circle at 88% 70%, rgba(168, 85, 247, 0.16) 0%, transparent 30%)',
                        }}
                    />
                </div>

                <div className="container mx-auto px-4 relative pt-12 mt-12">
                    {/* Hero Section */}
                    <ScrollReveal>
                        <div className="text-center mb-12 pb-4">
                            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-6 border border-primary/25">
                                <span className="mr-2">✉️</span> Let's Connect
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Get in Touch</h1>
                            <p className="text-xl text-slate-300 mx-auto mb-0 max-w-[700px] leading-relaxed">
                                Have a project in mind or want to discuss a potential collaboration?
                                I'd love to hear from you. Let's create something amazing together.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Quick Facts */}
                    <ScrollReveal delay={0.1}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 justify-center">
                            {quickFacts.map((fact, index) => (
                                <div key={index}>
                                    <div className="text-center p-4 rounded-2xl bg-slate-900/25 border border-white/10 contact-quick-fact h-full">
                                        <fact.icon className="text-primary mb-2 mx-auto" size={24} />
                                        <div className="text-slate-400 text-xs uppercase tracking-wider mb-1 font-semibold">{fact.label}</div>
                                        <div className="text-white font-bold">{fact.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                        {/* Contact Info & Social */}
                        <div className="lg:col-span-5">
                            <ScrollReveal delay={0.2}>
                                <div className="sticky top-24">
                                    {/* Contact Cards */}
                                    <div className="flex flex-col gap-4 mb-8">
                                        {contactInfo.map((item, index) => (
                                            <TiltCard key={index} intensity={8}>
                                                <div className="contact-info-card bg-slate-900/50 border border-white/10 overflow-hidden contact-panel rounded-2xl">
                                                    <div className="p-6">
                                                        <div className="flex items-start gap-4">
                                                            <div
                                                                className="icon-box p-3 rounded-xl flex-shrink-0"
                                                                style={{ background: item.gradient }}
                                                            >
                                                                <item.icon size={24} color="#fff" />
                                                            </div>
                                                            <div className="flex-grow">
                                                                <div className="text-slate-400 text-xs uppercase font-bold tracking-wider mb-1">
                                                                    {item.label}
                                                                </div>
                                                                {item.href ? (
                                                                    <a
                                                                        href={item.href}
                                                                        target={item.href.startsWith('http') ? '_blank' : undefined}
                                                                        rel="noopener noreferrer"
                                                                        className="text-white no-underline hover:text-primary transition-colors font-semibold block mb-1 text-lg"
                                                                    >
                                                                        {item.value}
                                                                    </a>
                                                                ) : (
                                                                    <span className="text-white font-semibold block mb-1 text-lg">{item.value}</span>
                                                                )}
                                                                <small className="text-slate-500">{item.description}</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TiltCard>
                                        ))}
                                    </div>

                                    {/* Social Links */}
                                    <div className="bg-slate-900/50 border border-white/10 contact-panel rounded-2xl">
                                        <div className="p-6">
                                            <h3 className="text-lg text-white font-bold mb-6">Connect on Social</h3>
                                            <div className="flex gap-3 flex-wrap">
                                                {socialLinks.map((social, index) => (
                                                    <a
                                                        key={index}
                                                        href={social.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="social-link-btn p-3 rounded-xl no-underline transition-all flex items-center gap-2"
                                                        style={{
                                                            background: social.bg,
                                                            color: social.color
                                                        }}
                                                        title={social.label}
                                                    >
                                                        <social.icon size={22} />
                                                        <span className="hidden sm:inline font-medium">{social.label}</span>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-7">
                            <ScrollReveal delay={0.3}>
                                <TiltCard intensity={5}>
                                    <div className="bg-slate-900/50 border border-white/10 contact-panel rounded-2xl">
                                        <div className="p-6 md:p-10">
                                            <div className="flex items-center gap-4 mb-8">
                                                <div className="p-3 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-500">
                                                    <Send size={24} color="#fff" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl text-white font-bold mb-0">Send Me a Message</h3>
                                                    <small className="text-slate-400">I'll get back to you within 24 hours</small>
                                                </div>
                                            </div>

                                            {status === 'success' && (
                                                <div
                                                    className="bg-green-500/25 text-white border border-green-500/25 flex items-center gap-2 p-4 rounded-xl mb-6"
                                                >
                                                    <CheckCircle size={20} className="text-green-400" />
                                                    <span>Message sent successfully! I'll get back to you soon.</span>
                                                </div>
                                            )}

                                            <form onSubmit={handleSubmit}>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className={`form-label-custom ${focusedField === 'name' || formData.name ? 'active' : ''}`}>
                                                            Full Name *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            onFocus={() => setFocusedField('name')}
                                                            onBlur={() => setFocusedField(null)}
                                                            required
                                                            className="form-input-modern"
                                                            placeholder="John Doe"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className={`form-label-custom ${focusedField === 'email' || formData.email ? 'active' : ''}`}>
                                                            Email Address *
                                                        </label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            onFocus={() => setFocusedField('email')}
                                                            onBlur={() => setFocusedField(null)}
                                                            required
                                                            className="form-input-modern"
                                                            placeholder="john@example.com"
                                                        />
                                                    </div>
                                                    <div className="col-span-1 md:col-span-2">
                                                        <label className={`form-label-custom ${focusedField === 'subject' || formData.subject ? 'active' : ''}`}>
                                                            Subject *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="subject"
                                                            value={formData.subject}
                                                            onChange={handleChange}
                                                            onFocus={() => setFocusedField('subject')}
                                                            onBlur={() => setFocusedField(null)}
                                                            required
                                                            className="form-input-modern"
                                                            placeholder="Project Inquiry / Collaboration / etc."
                                                        />
                                                    </div>
                                                    <div className="col-span-1 md:col-span-2">
                                                        <label className={`form-label-custom ${focusedField === 'message' || formData.message ? 'active' : ''}`}>
                                                            Your Message *
                                                        </label>
                                                        <textarea
                                                            rows={5}
                                                            name="message"
                                                            value={formData.message}
                                                            onChange={handleChange}
                                                            onFocus={() => setFocusedField('message')}
                                                            onBlur={() => setFocusedField(null)}
                                                            required
                                                            className="form-input-modern resize-y"
                                                            placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                                                        />
                                                    </div>
                                                    <div className="col-span-1 md:col-span-2">
                                                        <button
                                                            type="submit"
                                                            className="w-full font-bold rounded-full py-4 text-white submit-btn-glow btn-gradient flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                                            disabled={isSubmitting}
                                                        >
                                                            {isSubmitting ? (
                                                                <>
                                                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                                    <span>Sending...</span>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <span>Send Message</span> <Send size={18} />
                                                                </>
                                                            )}
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </TiltCard>
                            </ScrollReveal>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <ScrollReveal delay={0.4}>
                        <div className="text-center p-12 rounded-3xl bg-slate-900/25 border border-white/10 contact-cta-panel mb-12">
                            <div className="text-6xl mb-6">🤝</div>
                            <h4 className="text-white text-2xl font-bold mb-4">Let's Build Something Amazing</h4>
                            <p className="text-slate-400 mb-0 mx-auto text-lg" style={{ maxWidth: '600px' }}>
                                Whether you need a complete web solution, help with an existing project,
                                or just want to chat about tech – I'm always excited to connect with fellow developers and entrepreneurs.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </PageTransition>
    )
}

export default Contact
