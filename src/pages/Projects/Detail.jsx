import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Clock, CheckCircle, Linkedin, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; // eslint-disable-line no-unused-vars
import PageTransition from '../../components/PageTransition';
import ScrollReveal from '../../components/ScrollReveal';
import { useProjects } from '../../hooks/useProjects';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const { projects } = useProjects();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = useMemo(() => {
    return (projects || []).find((p) => String(p?.id) === String(projectId));
  }, [projects, projectId]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project?.title) {
      document.title = `${project.title} | Projects`;
    } else {
      document.title = 'Project Details | Projects';
    }
  }, [project?.title]);

  const isInternalUrl = (url) => typeof url === 'string' && (url.startsWith('/') || url.startsWith('#'));

  const demoLink =
    (project?.links || []).find((l) => l?.type === 'demo' && l?.url) ||
    (typeof project?.link === 'string' && project.link.startsWith('http') ? { type: 'demo', url: project.link } : null);

  const githubLink = (project?.links || []).find((l) => l?.type === 'github' && l?.url) || null;

  let formattedDate = '';
  if (project?.date) {
    const d = new Date(project.date);
    formattedDate = Number.isNaN(d.getTime())
      ? String(project.date)
      : d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' });
  }

  const nextImage = () => {
    if (project?.gallery?.length) {
      setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
    }
  };

  const prevImage = () => {
    if (project?.gallery?.length) {
      setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
    }
  };

  if (!project) {
    return (
      <PageTransition>
        <div className="container mx-auto px-4 py-20 mt-10">
          <div className="bg-red-500/10 border border-red-500/25 rounded-xl p-6 text-white">
            <h3 className="text-xl font-bold mb-2">Project not found</h3>
            <p className="mb-4 text-slate-300">The project you are looking for doesn’t exist (or the link is invalid).</p>
            <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-white">
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  const gallery = Array.isArray(project?.gallery) ? project.gallery : [];
  const heroImage = gallery?.[0]?.url || project?.image;
  const heroAlt = gallery?.[0]?.alt || (project?.title ? `Screenshot of ${project.title}` : 'Project image');

  return (
    <PageTransition>
      <div className="min-h-screen relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-slate-950" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle at 12% 18%, rgba(34, 211, 238, 0.18) 0%, transparent 28%), radial-gradient(circle at 88% 70%, rgba(168, 85, 247, 0.16) 0%, transparent 30%)',
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20 mt-10">
          <ScrollReveal>
            <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
              <Link to="/projects" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-white font-medium">
                <ArrowLeft size={18} />
                Back
              </Link>

              <div className="flex flex-wrap gap-2">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-white font-medium"
                >
                  <FileText size={18} />
                  Download CV
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-dark transition-colors text-white font-medium"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10 mb-8">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                <div className="flex-grow">
                  {project?.category ? (
                    <div className="mb-4">
                      <span className="bg-primary/10 text-primary font-semibold px-4 py-1.5 rounded-full text-sm border border-primary/20">
                        {project.category}
                      </span>
                    </div>
                  ) : null}

                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
                  <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
                    {project.longDescription || project.description || 'No description provided.'}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {demoLink?.url ? (
                    isInternalUrl(demoLink.url) ? (
                      <Link to={demoLink.url} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-dark transition-colors text-white font-bold shadow-lg shadow-primary/20 hover:scale-105 transform duration-200">
                        <ExternalLink size={18} />
                        Live Demo
                      </Link>
                    ) : (
                      <a href={demoLink.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-dark transition-colors text-white font-bold shadow-lg shadow-primary/20 hover:scale-105 transform duration-200">
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )
                  ) : (
                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-700 text-gray-400 font-bold cursor-not-allowed opacity-75" disabled>
                      <ExternalLink size={18} />
                      Live Demo
                    </button>
                  )}

                  {githubLink?.url ? (
                    <a
                      href={githubLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors text-white font-bold"
                    >
                      <Github size={18} />
                      Source
                    </a>
                  ) : (
                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/5 bg-white/5 text-gray-400 font-bold cursor-not-allowed opacity-75" disabled>
                      <Github size={18} />
                      Source
                    </button>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.1}>
                <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 h-full">
                  <h2 className="text-xl font-bold text-white mb-6">Preview</h2>

                  {gallery.length > 0 ? (
                    <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-video group">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentImageIndex}
                          src={gallery[currentImageIndex].url}
                          alt={gallery[currentImageIndex].alt || `Project screenshot ${currentImageIndex + 1}`}
                          className="w-full h-full object-cover"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </AnimatePresence>

                      {gallery.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-label="Previous image"
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-label="Next image"
                          >
                            <ChevronRight size={20} />
                          </button>
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {gallery.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/80'
                                  }`}
                                aria-label={`Go to image ${idx + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ) : heroImage ? (
                    <div className="rounded-2xl overflow-hidden bg-slate-950 aspect-video">
                      <img src={heroImage} alt={heroAlt} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  ) : (
                    <div className="text-slate-500 italic">No preview available.</div>
                  )}
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal delay={0.15}>
                <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 h-full">
                  <h2 className="text-xl font-bold text-white mb-6">Overview</h2>

                  <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3 text-slate-200">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-slate-400 font-medium">Date</div>
                        <div className="font-semibold">{formattedDate || '—'}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-slate-200">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Users size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-slate-400 font-medium">Role</div>
                        <div className="font-semibold">{project.role || '—'}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-slate-200">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Clock size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-slate-400 font-medium">Duration</div>
                        <div className="font-semibold">{project.duration || '—'}</div>
                      </div>
                    </div>

                    {Array.isArray(project?.techStack) && project.techStack.length > 0 ? (
                      <div className="mt-4 pt-6 border-t border-white/10">
                        <div className="text-slate-400 font-medium mb-3">Tech Stack</div>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, i) => (
                            <span key={`${tech}-${i}`} className="text-xs font-semibold px-3 py-1.5 rounded-md bg-white/5 text-slate-300 border border-white/5">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {(Array.isArray(project?.challenges) && project.challenges.length > 0) || project?.solution ? (
              <div className="lg:col-span-12">
                <ScrollReveal delay={0.2}>
                  <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8">
                    <h2 className="text-xl font-bold text-white mb-6">Challenges & Solution</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <div className="text-primary font-semibold mb-3">Challenges</div>
                        {Array.isArray(project?.challenges) && project.challenges.length > 0 ? (
                          <ul className="space-y-2 text-slate-300">
                            {project.challenges.map((c, i) => (
                              <li key={i} className="flex gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{c}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="text-slate-500 italic">—</div>
                        )}
                      </div>

                      <div>
                        <div className="text-primary font-semibold mb-3">Solution</div>
                        <div className="text-slate-300 leading-relaxed">{project.solution || '—'}</div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ) : null}

            {Array.isArray(project?.results) && project.results.length > 0 ? (
              <div className="lg:col-span-12">
                <ScrollReveal delay={0.25}>
                  <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8">
                    <h2 className="text-xl font-bold text-white mb-6">Key Results</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.results.map((r, i) => (
                        <div key={i} className="flex gap-3 items-start">
                          <CheckCircle size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                          <div className="text-slate-300">{r}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProjectDetail;
