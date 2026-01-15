import React from 'react'
import { Container, Nav, Navbar as BootstrapNavbar, Button } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import { Code2 } from 'lucide-react'

const Navbar = () => {
    return (
        <BootstrapNavbar expand="lg" variant="dark" fixed="top" className="navbar-custom py-3">
            <Container>
                <BootstrapNavbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
                    <Code2 size={28} className="text-primary" />
                    <span className="fw-bold">Muhammad<span className="text-primary">Syafiq</span></span>
                </BootstrapNavbar.Brand>

                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />

                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto gap-lg-4 my-3 my-lg-0 align-items-center">
                        <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                    </Nav>
                    <div className="d-flex justify-content-center">
                        <Button as={Link} to="/contact" variant="primary" className="px-4 fw-semibold rounded-pill">
                            Hire Me
                        </Button>
                    </div>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    )
}

export default Navbar
