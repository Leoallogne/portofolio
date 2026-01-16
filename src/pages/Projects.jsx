import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Form, InputGroup, Badge } from 'react-bootstrap'
import { Search, Filter, ArrowRight, Grid, List, Sparkles } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import ProjectCarousel from '../components/ProjectCarousel'
import TiltCard from '../components/TiltCard'
import { projectsData, featuredProjects } from '../data/portfolioData'

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')
    const [filter, setFilter] = useState('All')
    const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Projects | Muhammad Syafiq"
    }, [])

    // Get unique categories
    const categories = ['All', ...new Set(projectsData.flatMap(p => p.techStack))]

    const filteredProjects = projectsData.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesFilter = filter === 'All' || project.techStack.includes(filter)
        return matchesSearch && matchesFilter
    })

    return (
        <PageTransition>
            <div className="py-5 mt-5">
                <Container>
                    {/* Hero Section */}
                    <ScrollReveal>
                        <div className="text-center mb-5 pb-4">
                            <div className="d-inline-block px-4 py-2 rounded-pill bg-primary bg-opacity-10 text-primary fw-semibold mb-4 border border-primary border-opacity-25">
                                <span className="me-2">💼</span> Portfolio Showcase
                            </div>
                            <h1 className="display-3 fw-bold text-white mb-4">My Projects</h1>
                            <p className="lead text-secondary mx-auto mb-4" style={{ maxWidth: '700px' }}>
                                A curated collection of my recent work, side projects, and open source contributions.
                                Each project represents a unique challenge and learning experience.
                            </p>
                            <Badge bg="dark" className="px-3 py-2 fs-6 fw-normal">
                                {projectsData.length} Projects
                            </Badge>
                        </div>
                    </ScrollReveal>

                    {/* Featured Projects Carousel */}
                    <ScrollReveal delay={0.1}>
                        <div className="mb-5">
                            <div className="d-flex align-items-center gap-3 mb-4">
                                <Sparkles className="text-primary" size={24} />
                                <h2 className="h4 text-white mb-0 fw-bold">Featured Projects</h2>
                                <div className="flex-grow-1 border-bottom border-white-10"></div>
                            </div>
                            <ProjectCarousel
                                projects={featuredProjects}
                                onProjectClick={setSelectedProject}
                            />
                        </div>
                    </ScrollReveal>

                    {/* Divider */}
                    <div className="my-5 py-3">
                        <div className="d-flex align-items-center gap-3">
                            <div className="flex-grow-1 border-bottom border-white-10"></div>
                            <span className="text-secondary small text-uppercase letter-spacing-2">All Projects</span>
                            <div className="flex-grow-1 border-bottom border-white-10"></div>
                        </div>
                    </div>

                    {/* Search, Filter & View Toggle */}
                    <ScrollReveal delay={0.2}>
                        <div className="mb-5 p-4 rounded-4 bg-dark bg-opacity-25 border border-white-10">
                            <Row className="g-3 align-items-center">
                                <Col md={5} lg={6}>
                                    <InputGroup size="lg">
                                        <InputGroup.Text className="bg-dark border-secondary text-secondary">
                                            <Search size={20} />
                                        </InputGroup.Text>
                                        <Form.Control
                                            placeholder="Search by title or description..."
                                            className="bg-dark border-secondary text-white focus-ring-primary"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    </InputGroup>
                                </Col>
                                <Col md={4} lg={3}>
                                    <Form.Select
                                        size="lg"
                                        className="bg-dark border-secondary text-white focus-ring-primary"
                                        value={filter}
                                        onChange={(e) => setFilter(e.target.value)}
                                    >
                                        {categories.slice(0, 10).map((cat, i) => (
                                            <option key={i} value={cat}>
                                                {cat === 'All' ? '🔍 All Technologies' : `⚡ ${cat}`}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Col>
                                <Col md={3} lg={3}>
                                    <div className="d-flex gap-2">
                                        <Button
                                            variant={viewMode === 'grid' ? 'primary' : 'outline-secondary'}
                                            className="flex-grow-1"
                                            onClick={() => setViewMode('grid')}
                                        >
                                            <Grid size={18} />
                                        </Button>
                                        <Button
                                            variant={viewMode === 'list' ? 'primary' : 'outline-secondary'}
                                            className="flex-grow-1"
                                            onClick={() => setViewMode('list')}
                                        >
                                            <List size={18} />
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </ScrollReveal>

                    {/* Projects Grid */}
                    <Row className="g-4 mb-5">
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project, index) => (
                                <Col key={index} md={6} lg={viewMode === 'grid' ? 4 : 12}>
                                    <ScrollReveal delay={index * 0.05} width="100%">
                                        <TiltCard intensity={10}>
                                            <ProjectCard
                                                project={project}
                                                onClick={() => setSelectedProject(project)}
                                            />
                                        </TiltCard>
                                    </ScrollReveal>
                                </Col>
                            ))
                        ) : (
                            <Col className="text-center py-5">
                                <div className="p-5">
                                    <div className="display-1 mb-4">🔍</div>
                                    <h3 className="text-white mb-3">No Projects Found</h3>
                                    <p className="text-secondary mb-4">
                                        No projects match your current search criteria.
                                    </p>
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        className="px-5 rounded-pill"
                                        onClick={() => { setSearchTerm(''); setFilter('All') }}
                                    >
                                        Clear All Filters
                                    </Button>
                                </div>
                            </Col>
                        )}
                    </Row>
                </Container>

                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            </div>
        </PageTransition>
    )
}

export default Projects
