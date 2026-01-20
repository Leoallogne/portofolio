import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
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
      <div className="py-5 mt-5 projects-page">
        <Container className="position-relative">
          {/* Header Section */}
          <ScrollReveal>
            <ProjectHeader
              title="My Projects"
              description="A curated collection of my recent work, side projects, and open source contributions. Each project represents a unique challenge and learning experience."
              projectCount={filteredProjects.length}
            />
          </ScrollReveal>

          {/* Featured Projects Marquee (All Projects) */}
          <ScrollReveal delay={0.1}>
            <div className="mb-5">
              <div className="d-flex align-items-center gap-3 mb-4">
                <Sparkles className="text-primary" size={24} />
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

          {/* Filters Section */}
          <ScrollReveal>
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
          </ScrollReveal>

          {/* Projects Grid/List */}
          <ScrollReveal>
            {filteredProjects.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">🔍</div>
                <h3>No Projects Found</h3>
                <p>We couldn't find any projects matching your search or filter criteria. Try adjusting your filters or search term.</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    updateFilter('search', '');
                    updateFilter('category', 'All');
                  }}
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
                      <ProjectCard
                        project={project}
                        onClick={() => handleProjectSelect(project)}
                        compact
                      />
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
