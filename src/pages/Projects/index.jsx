import React, { useState, useEffect } from 'react';
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
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-4"></div>
          <h3 className="text-xl text-white mb-2 font-bold">Loading Projects</h3>
          <p className="text-slate-400">Fetching the latest projects...</p>
        </div>
      </PageTransition>
    );
  }

  if (error) {
    return (
      <PageTransition>
        <div className="container mx-auto px-4 py-20">
          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 text-center max-w-2xl mx-auto">
            <h3 className="text-xl text-red-500 mb-2 font-bold">Error Loading Projects</h3>
            <p className="text-slate-300 mb-2">We encountered an issue while loading the projects. Please try again later.</p>
            <p className="mb-0 text-sm text-slate-500">
              Error: {error.message || 'Unknown error occurred'}
            </p>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="projects-page projects-page--v2 min-h-screen" id="top">
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

        <div className="container mx-auto px-4 relative py-12 lg:py-20 mt-12">
          <section className="mb-12 lg:mb-20">
            <ScrollReveal>
              <ProjectHeader
                title="My Projects"
                description="A curated collection of my recent work, side projects, and open source contributions. Each project represents a unique challenge and learning experience."
                projectCount={filteredProjects.length}
              />
            </ScrollReveal>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12 lg:my-20"></div>

          <section className="mb-12 lg:mb-20">
            <ScrollReveal delay={0.1}>
              <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Sparkles size={20} aria-hidden="true" />
                  </div>
                  <h2 className="text-xl text-white font-bold mb-0">Featured Projects</h2>
                  <div className="h-px flex-grow bg-white/10"></div>
                </div>

                <ProjectMarqueeCarousel
                  projects={projects}
                  onProjectClick={handleProjectSelect}
                  speedSeconds={32}
                />
              </div>
            </ScrollReveal>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12 lg:my-20"></div>

          <section className="mb-12 lg:mb-20">
            <ScrollReveal>
              <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm">
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

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12 lg:my-20"></div>

          <section className="mb-12 lg:mb-20">
            <ScrollReveal>
              {filteredProjects.length === 0 ? (
                <div className="text-center py-20 bg-slate-900/30 rounded-3xl border border-white/5 border-dashed">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl text-white font-bold mb-2">No Projects Found</h3>
                  <p className="text-slate-400 mb-6 max-w-md mx-auto">
                    We couldn't find any projects matching your search or filter criteria. Try adjusting your filters or search term.
                  </p>
                  <button
                    className="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-full font-medium transition-colors"
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  <AnimatePresence>
                    {filteredProjects.map((project, index) => (
                      <div
                        key={project.id || `${project.title}-${index}`}
                        className="h-full"
                      >
                        <ProjectCard project={project} onClick={() => handleProjectSelect(project)} compact />
                      </div>
                    ))}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredProjects.map((project, index) => (
                    <div key={project.id || `${project.title}-${index}`} className="group">
                      <div className="bg-slate-900/50 border border-white/10 hover:border-primary/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 h-full flex flex-col">
                        <div className="flex flex-col flex-grow">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                            <span className="bg-white/5 text-slate-300 text-xs px-2 py-1 rounded-full border border-white/10">
                              {project.year || '2024'}
                            </span>
                          </div>

                          <p className="text-slate-400 text-sm mb-6 line-clamp-2 flex-grow">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {(project.techStack || []).slice(0, 5).map((tech, i) => (
                              <span key={i} className="text-xs px-2 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5">
                                {tech}
                              </span>
                            ))}
                            {(project.techStack || []).length > 5 && (
                              <span className="text-xs px-2 py-1 rounded-md bg-white/5 text-slate-400 border border-white/5">+{project.techStack.length - 5}</span>
                            )}
                          </div>

                          <button
                            onClick={() => handleProjectSelect(project)}
                            className="w-full mt-auto py-2 rounded-lg border border-primary/30 text-primary font-medium hover:bg-primary/10 transition-colors text-sm"
                            type="button"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ScrollReveal>
          </section>

          <section className="pb-12 lg:pb-20">
            <ScrollReveal>
              <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative z-10">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-sm font-medium mb-4">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      Available for freelance
                    </div>
                    <h2 className="text-2xl md:text-3xl text-white font-bold mb-3">Want to build something reliable?</h2>
                    <p className="text-slate-300 mb-0 text-lg max-w-2xl">
                      If you like what you see here, let's talk. I'll help you ship a fast, modern, and maintainable product.
                    </p>
                  </div>

                  <div className="flex gap-3 flex-wrap">
                    <Link
                      to="/contact"
                      className="px-6 py-3 rounded-full bg-primary hover:bg-primary-dark text-white font-semibold flex items-center gap-2 transition-all hover:scale-105 shadow-lg shadow-primary/20"
                    >
                      <MessageSquare size={18} />
                      Contact Me
                    </Link>
                    <a
                      href="/cv.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold flex items-center gap-2 transition-all"
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </section>
        </div>

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
