import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Code2, Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

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
            <nav className="navbar-custom py-3 fixed top-0 left-0 right-0 z-50">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Brand */}
                    <Link to="/" className="flex items-center gap-2 text-decoration-none group" onClick={() => setIsOpen(false)}>
                        <Code2 size={28} className="text-primary transition-transform duration-300 group-hover:rotate-12" />
                        <span className="font-bold text-white text-xl tracking-tight">Muhammad<span className="text-primary">Syafiq</span></span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex gap-1 items-center bg-white/5 px-2 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
                        <NavLink to="/" end className={({ isActive }) => `nav-link-custom !px-5 rounded-full ${isActive ? 'active' : ''}`}>Home</NavLink>
                        <NavLink to="/projects" className={({ isActive }) => `nav-link-custom !px-5 rounded-full ${isActive ? 'active' : ''}`}>Projects</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => `nav-link-custom !px-5 rounded-full ${isActive ? 'active' : ''}`}>Contact</NavLink>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:block">
                        <Link to="/contact" className="btn-gradient text-decoration-none">
                            Hire Me
                        </Link>
                    </div>

                    {/* Mobile Toggle Button - Modern Hamburger */}
                    <button
                        className={`hamburger-btn lg:hidden ${isOpen ? 'active' : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle navigation"
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Sidebar Overlay */}
            <div
                className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile Sidebar */}
            <div className={`mobile-sidebar ${isOpen ? 'active' : ''}`}>
                <div className="sidebar-header">
                    <Link to="/" className="flex items-center gap-2 text-decoration-none" onClick={() => setIsOpen(false)}>
                        <Code2 size={28} className="text-primary" />
                        <span className="font-bold text-white text-lg">Muhammad<span className="text-primary">Syafiq</span></span>
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
                    <Link
                        to="/contact"
                        className="btn-gradient w-full block text-center py-3 rounded-xl text-decoration-none"
                        onClick={() => setIsOpen(false)}
                    >
                        Hire Me
                    </Link>
                    <p className="text-slate-500 text-center mt-6 mb-0 text-xs font-medium uppercase tracking-widest">
                        © 2026 Muhammad Syafiq
                    </p>
                </div>
            </div>
        </>
    )
}

export default Navbar
