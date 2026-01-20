import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner, Alert, Button } from 'react-bootstrap';
import { AnimatePresence } from 'framer-motion';
import { Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProjects, useProjectFilters } from '../../hooks/useProjects';
import ProjectCard from '../../components/projects/ProjectCard';
import ProjectFilters from '../../components/projects/ProjectFilters';
import ProjectHeader from '../../components/projects/ProjectHeader';
import ProjectModal from '../../components/projects/ProjectModal';
import PageTransition from '../../components/PageTransition';
import ScrollReveal from '../../components/ScrollReveal';
import ProjectMarqueeCarousel from '../../components/ProjectMarqueeCarousel';

const Projects = () => {
  const { projects, loading, error } = useProjects();
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('newest');
  
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Projects | Your Portfolio';
  }, []);
  
  const {
    filteredProjects,
    categories,
    filters,
    updateFilter,
  } = useProjectFilters(projects);
  
  // Update document title with project count
  useEffect(() => {
    if (!loading && !error) {
      document.title = `Projects (${filteredProjects.length}) | Your Portfolio`;
    }
  }, [filteredProjects.length, loading, error]);

  const handleSearchChange = (value) => {
    updateFilter('search', value);
  };

  const handleCategoryChange = (category) => {
    updateFilter('category', category);
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
    // Update the sort in filters if needed
    updateFilter('sortBy', sortOption);
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  if (loading) {
    return (
      <PageTransition>
        <Container className="py-5 text-center">
          <Spinner animation="border" role="status" variant="primary" className="mb-3">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <h3 className="h4 text-white mb-3">Loading Projects</h3>
          <p className="text-muted">Fetching the latest projects...</p>
        </Container>
      </PageTransition>
    );
  }

  if (error) {
    return (
      <PageTransition>
        <Container className="py-5">
          <Alert variant="danger" className="text-center">
            <Alert.Heading>Error Loading Projects</Alert.Heading>
            <p>We encountered an issue while loading the projects. Please try again later.</p>
            <p className="mb-0">
              <small className="text-muted">Error: {error.message || 'Unknown error occurred'}</small>
            </p>
          </Alert>
        </Container>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="projects-page projects-page--v2" id="top">
        <div className="projects-page-bg" aria-hidden="true">
          <div className="projects-page-bg-base" />
          <div
            className="projects-page-bg-radials"
            style={{
              backgroundImage:
                'radial-gradient(circle at 12% 18%, rgba(34, 211, 238, 0.18) 0%, transparent 28%), radial-gradient(circle at 88% 70%, rgba(168, 85, 247, 0.16) 0%, transparent 30%)',
            }}
          />
        </div>

        <Container className="position-relative">
          <section className="projects-hero pt-4 pt-lg-5 mt-4 mt-lg-5">
            <ScrollReveal>
              <ProjectHeader
                title="My Projects"
                description="A curated collection of my recent work, side projects, and open source contributions. Each project represents a unique challenge and learning experience."
                projectCount={filteredProjects.length}
              />
            </ScrollReveal>
          </section>

          <section className="projects-featured">
            <ScrollReveal delay={0.1}>
              <div className="projects-section-panel p-3 p-md-4 p-lg-5">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="projects-section-icon">
                    <Sparkles size={20} aria-hidden="true" />
                  </div>
                  <h2 className="h4 text-white mb-0 fw-bold">Featured Projects</h2>
                  <div className="flex-grow-1 border-bottom border-white-10"></div>
                </div>

                <ProjectMarqueeCarousel
                  projects={projects}
                  onProjectClick={handleProjectSelect}
                  speedSeconds={32}
                />
              </div>
            </ScrollReveal>
          </section>

          <section className="projects-filters">
            <ScrollReveal>
              <div className="projects-section-panel p-3 p-md-4 p-lg-5">
                <ProjectFilters
                  searchTerm={filters.search}
                  onSearchChange={handleSearchChange}
                  categories={categories}
                  selectedCategory={filters.category}
                  onCategoryChange={handleCategoryChange}
                  viewMode={viewMode}
                  onViewModeChange={handleViewModeChange}
                  sortBy={sortBy}
                  onSortChange={handleSortChange}
                />
              </div>
            </ScrollReveal>
          </section>

          <section className="projects-results pb-4 pb-lg-5">
            <ScrollReveal>
              {filteredProjects.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-icon">🔍</div>
                  <h3 className="text-white">No Projects Found</h3>
                  <p className="text-secondary">
                    We couldn't find any projects matching your search or filter criteria. Try adjusting your filters or search term.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      updateFilter('search', '');
                      updateFilter('category', 'All');
                    }}
                    type="button"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : viewMode === 'grid' ? (
                <Row className="g-3 g-md-4 projects-grid">
                  <AnimatePresence>
                    {filteredProjects.map((project, index) => (
                      <Col
                        key={project.id || `${project.title}-${index}`}
                        xs={6}
                        sm={4}
                        md={4}
                        lg={3}
                      >
                        <ProjectCard project={project} onClick={() => handleProjectSelect(project)} compact />
                      </Col>
                    ))}
                  </AnimatePresence>
                </Row>
              ) : (
                <Row className="g-3 g-md-4">
                  {filteredProjects.map((project, index) => (
                    <Col key={project.id || `${project.title}-${index}`} xs={12} md={6}>
                      <div className="project-list-item">
                        <div className="project-content">
                          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                            <div className="flex-grow-1">
                              <h3 className="project-title">{project.title}</h3>

                              <div className="d-flex flex-wrap gap-2 mb-0">
                                {(project.techStack || []).slice(0, 5).map((tech, i) => (
                                  <span key={i} className="tech-badge">
                                    {tech}
                                  </span>
                                ))}
                                {(project.techStack || []).length > 5 && (
                                  <span className="tech-badge">+{project.techStack.length - 5}</span>
                                )}
                              </div>
                            </div>

                            <button
                              onClick={() => handleProjectSelect(project)}
                              className="btn btn-outline-primary btn-sm mt-3 mt-md-0"
                              type="button"
                            >
                              Lihat selengkapnya
                            </button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              )}
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="projects-cta mt-5">
                <div className="projects-cta-panel p-3 p-md-4 p-lg-5">
                  <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center gap-4">
                    <div>
                      <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill projects-cta-pill mb-3">
                        <MessageSquare size={16} aria-hidden="true" />
                        Available for freelance
                      </div>
                      <h3 className="h2 fw-bold text-white mb-2">Want to build something together?</h3>
                      <p className="text-slate-200 mb-0" style={{ maxWidth: '720px' }}>
                        If you like what you see here, let's talk. I'll help you ship a fast, modern, and maintainable product.
                      </p>
                    </div>
                    <div className="d-flex gap-3 flex-wrap">
                      <Button
                        as={Link}
                        to="/contact"
                        variant="primary"
                        className="px-4 py-2 rounded-pill fw-semibold d-inline-flex align-items-center gap-2"
                      >
                        <MessageSquare size={18} aria-hidden="true" />
                        Contact Me
                      </Button>
                      <Button
                        as="a"
                        href="#top"
                        variant="outline-light"
                        className="px-4 py-2 rounded-pill fw-semibold d-inline-flex align-items-center gap-2"
                      >
                        Back to top
                        <ArrowRight size={18} aria-hidden="true" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </section>
        </Container>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal 
              project={selectedProject} 
              onClose={handleCloseModal} 
            />
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

export default Projects;
