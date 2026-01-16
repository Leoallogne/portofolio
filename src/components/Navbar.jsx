import React, { useState, useEffect } from 'react'
import { Container, Nav, Button } from 'react-bootstrap'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Code2, Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    // Close sidebar on route change
    useEffect(() => {
        setIsOpen(false)
    }, [location])

    // Prevent body scroll when sidebar is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    return (
        <>
            <nav className="navbar-custom py-3 fixed-top">
                <Container className="d-flex align-items-center justify-content-between">
                    {/* Brand */}
                    <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none">
                        <Code2 size={28} className="text-primary" />
                        <span className="fw-bold text-white">Muhammad<span className="text-primary">Syafiq</span></span>
                    </Link>

                    {/* Desktop Navigation */}
                    <Nav className="d-none d-lg-flex gap-4 align-items-center">
                        <Nav.Link as={NavLink} to="/" end className="nav-link-custom">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/projects" className="nav-link-custom">Projects</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" className="nav-link-custom">Contact</Nav.Link>
                    </Nav>

                    {/* Desktop CTA */}
                    <div className="d-none d-lg-block">
                        <Button as={Link} to="/contact" variant="primary" className="px-4 fw-semibold rounded-pill">
                            Hire Me
                        </Button>
                    </div>

                    {/* Mobile Toggle Button - Modern Hamburger */}
                    <button
                        className={`hamburger-btn d-lg-none ${isOpen ? 'active' : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle navigation"
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </Container>
            </nav>

            {/* Mobile Sidebar Overlay */}
            <div
                className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile Sidebar */}
            <div className={`mobile-sidebar ${isOpen ? 'active' : ''}`}>
                <div className="sidebar-header">
                    <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none" onClick={() => setIsOpen(false)}>
                        <Code2 size={28} className="text-primary" />
                        <span className="fw-bold text-white">Muhammad<span className="text-primary">Syafiq</span></span>
                    </Link>
                    <button className="close-btn" onClick={() => setIsOpen(false)} aria-label="Close menu">
                        <X size={24} />
                    </button>
                </div>

                <nav className="sidebar-nav">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                        onClick={() => setIsOpen(false)}
                    >
                        <span className="link-indicator"></span>
                        Home
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                        onClick={() => setIsOpen(false)}
                    >
                        <span className="link-indicator"></span>
                        Projects
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                        onClick={() => setIsOpen(false)}
                    >
                        <span className="link-indicator"></span>
                        Contact
                    </NavLink>
                </nav>

                <div className="sidebar-footer">
                    <Button
                        as={Link}
                        to="/contact"
                        variant="primary"
                        className="w-100 py-3 fw-semibold rounded-pill"
                        onClick={() => setIsOpen(false)}
                    >
                        Hire Me
                    </Button>
                    <p className="text-secondary text-center mt-4 mb-0 small">
                        © 2026 Muhammad Syafiq
                    </p>
                </div>
            </div>
        </>
    )
}

export default Navbar
