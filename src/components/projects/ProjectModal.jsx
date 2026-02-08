import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Clock,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  FileText,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const MotionDiv = motion.div

const ProjectModal = ({ project, onClose }) => {
  const titleId = useId();
  const descriptionId = useId();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);
  const lastActiveElementRef = useRef(null);
  const previousBodyOverflowRef = useRef('');
  const previousBodyPaddingRightRef = useRef('');

  const focusableSelector = useMemo(
    () =>
      [
        'a[href]',
        'button:not([disabled])',
        'textarea:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
      ].join(','),
    [],
  );

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (!project) return undefined;

    previousBodyOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    previousBodyPaddingRightRef.current = document.body.style.paddingRight;
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    lastActiveElementRef.current = document.activeElement;

    const focusTimer = window.setTimeout(() => {
      closeBtnRef.current?.focus?.();
    }, 0);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }

      if (e.key === 'Tab') {
        const container = modalRef.current;
        if (!container) return;

        const focusable = Array.from(container.querySelectorAll(focusableSelector)).filter(
          (el) => !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true',
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement;

        if (e.shiftKey) {
          if (active === first || !container.contains(active)) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (active === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousBodyOverflowRef.current;
      document.body.style.paddingRight = previousBodyPaddingRightRef.current;

      const el = lastActiveElementRef.current;
      if (el && typeof el.focus === 'function') el.focus();
    };
  }, [project, onClose, focusableSelector]);

  const projectData = project || {};

  const {
    title = 'Untitled Project',
    description = '',
    longDescription = '',
    techStack = [],
    links = [],
    gallery = [],
    challenges = [],
    solution = '',
    role = 'Not specified',
    teamSize = 0,
    duration = 'Not specified',
    date = '',
    results = [],
    testimonial = null,
    category = 'Project',
    image = '',
    link = '',
  } = projectData;

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300
      }
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  const isInternalUrl = (url) => typeof url === 'string' && (url.startsWith('/') || url.startsWith('#'));

  let formattedDate = '';
  if (date) {
    const d = new Date(date);
    formattedDate = Number.isNaN(d.getTime())
      ? String(date)
      : d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' });
  }

  const demoLink = links.find((l) => l?.type === 'demo' && l?.url) || (typeof link === 'string' && link.startsWith('http') ? { type: 'demo', url: link } : null);
  const githubLink = links.find((l) => l?.type === 'github' && l?.url) || null;

  const additionalLinks = (Array.isArray(links) ? links : []).filter(
    (l) => l?.url && l?.type && l.type !== 'demo' && l.type !== 'github',
  );

  const heroImage = (gallery?.[0]?.url) || image || '';
  const heroAlt = gallery?.[0]?.alt || `Screenshot of ${title}`;

  const nextImage = () => {
    if (gallery.length) {
      setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
    }
  };

  const prevImage = () => {
    if (gallery.length) {
      setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
    }
  };

  if (!project) return null;

  return (
    <MotionDiv
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <MotionDiv
        variants={backdropVariants}
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <MotionDiv
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-white/10 rounded-3xl shadow-2xl custom-scrollbar"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        ref={modalRef}
      >
        <button
          onClick={onClose}
          ref={closeBtnRef}
          className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Close modal"
          type="button"
        >
          <X size={20} aria-hidden="true" />
        </button>

        {heroImage && (
          <div className="relative aspect-video w-full overflow-hidden">
            <img src={heroImage} alt={heroAlt} className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-90" />
            {category ? (
              <div className="absolute top-6 left-6 bg-primary/20 backdrop-blur-md border border-primary/20 text-primary font-semibold px-4 py-1.5 rounded-full text-sm">
                {category}
              </div>
            ) : null}
          </div>
        )}

        <div className="p-6 md:p-10 -mt-20 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
            <div>
              <h2 id={titleId} className="text-3xl md:text-4xl font-bold text-white mb-3">
                {title}
              </h2>
              {category && (
                <span className="md:hidden inline-block bg-primary/10 text-primary font-medium px-3 py-1 rounded-full text-sm border border-primary/20">
                  {category}
                </span>
              )}
            </div>
            <div className="text-right">
              {date && (
                <div className="text-slate-400 text-sm flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                  <Calendar size={14} />
                  {formattedDate}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center text-slate-300 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
              <Users size={18} className="mr-2 text-primary" />
              <span className="font-medium">{role}</span>
            </div>
            {teamSize > 0 && (
              <div className="flex items-center text-slate-300 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                <Users size={18} className="mr-2 text-primary" />
                <span className="font-medium">{teamSize} {teamSize === 1 ? 'person' : 'people'}</span>
              </div>
            )}
            {duration && (
              <div className="flex items-center text-slate-300 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                <Clock size={18} className="mr-2 text-primary" />
                <span className="font-medium">{duration}</span>
              </div>
            )}
          </div>

          {/* Project Overview */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Project Overview</h3>
            <div className="bg-slate-800/50 border border-white/5 rounded-2xl p-6 leading-relaxed text-slate-300">
              <p className="mb-0">{longDescription || description || 'No description available.'}</p>
            </div>
          </div>

          {/* Gallery */}
          {gallery.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Project Gallery</h3>
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-video group border border-white/10">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={gallery[currentImageIndex].url}
                    alt={gallery[currentImageIndex].alt || `${title} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain bg-slate-950"
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
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center my-10">
            {projectData?.id && (
              <Link
                to={`/projects/${projectData.id}`}
                className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors text-white font-medium flex items-center gap-2 min-w-[160px] justify-center"
              >
                <FileText size={18} className="text-slate-300" aria-hidden="true" />
                View Details
              </Link>
            )}

            {demoLink?.url ? (
              isInternalUrl(demoLink.url) ? (
                <Link
                  to={demoLink.url}
                  className="px-6 py-3 rounded-full bg-primary hover:bg-primary-dark transition-colors text-white font-bold shadow-lg shadow-primary/25 flex items-center gap-2 min-w-[160px] justify-center"
                >
                  <ExternalLink size={18} aria-hidden="true" />
                  Live Demo
                </Link>
              ) : (
                <a
                  href={demoLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-primary hover:bg-primary-dark transition-colors text-white font-bold shadow-lg shadow-primary/25 flex items-center gap-2 min-w-[160px] justify-center"
                >
                  <ExternalLink size={18} aria-hidden="true" />
                  Live Demo
                </a>
              )
            ) : null}

            {githubLink?.url ? (
              <a
                href={githubLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors text-white font-medium flex items-center gap-2 min-w-[160px] justify-center"
              >
                <Github size={18} className="text-slate-300" aria-hidden="true" />
                Source Code
              </a>
            ) : null}
          </div>

          {additionalLinks.length > 0 && (
            <div className="mb-8 p-6 bg-slate-800/50 rounded-2xl border border-white/5">
              <div className="text-slate-400 font-medium mb-3">Additional Links</div>
              <div className="flex flex-wrap gap-2">
                {additionalLinks.map((l, i) =>
                  isInternalUrl(l.url) ? (
                    <Link key={`${l.type}-${i}`} to={l.url} className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm border border-white/5 transition-colors">
                      {l.type}
                    </Link>
                  ) : (
                    <a key={`${l.type}-${i}`} href={l.url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm border border-white/5 transition-colors">
                      {l.type}
                    </a>
                  ),
                )}
              </div>
            </div>
          )}


          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <div className="h-full bg-slate-800/50 border border-white/5 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-white mb-4">Project Details</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center text-slate-400 mb-1 text-sm">
                      <Users size={16} className="mr-2" />
                      <span>Role</span>
                    </div>
                    <p className="mb-0 text-white font-medium">{role}</p>
                  </div>

                  {teamSize > 0 && (
                    <div>
                      <div className="flex items-center text-slate-400 mb-1 text-sm">
                        <Users size={16} className="mr-2" />
                        <span>Team Size</span>
                      </div>
                      <p className="mb-0 text-white font-medium">{teamSize} {teamSize === 1 ? 'person' : 'people'}</p>
                    </div>
                  )}

                  <div>
                    <div className="flex items-center text-slate-400 mb-1 text-sm">
                      <Clock size={16} className="mr-2" />
                      <span>Duration</span>
                    </div>
                    <p className="mb-0 text-white font-medium">{duration}</p>
                  </div>

                  {date && (
                    <div>
                      <div className="flex items-center text-slate-400 mb-1 text-sm">
                        <Calendar size={16} className="mr-2" />
                        <span>Date</span>
                      </div>
                      <p className="mb-0 text-white font-medium">{formattedDate}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            {techStack.length > 0 && (
              <div>
                <div className="h-full bg-slate-800/50 border border-white/5 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-white mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-primary/10 text-primary font-medium px-3 py-1.5 rounded-full text-sm border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Challenges & Solution */}
          {challenges.length > 0 && (
            <div className="mb-8">
              <div className="bg-slate-800/50 border border-white/5 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Challenges & Solutions</h3>
                <div className="mb-4">
                  <h4 className="text-primary font-semibold mb-2">Challenges:</h4>
                  <ul className="space-y-2">
                    {challenges.map((challenge, i) => (
                      <li key={i} className="text-slate-300 flex gap-2">
                        <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-current block flex-shrink-0" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {solution && (
                  <div className="mt-6 pt-6 border-t border-white/5">
                    <h4 className="text-primary font-semibold mb-2">Solution:</h4>
                    <p className="text-slate-300 mb-0 leading-relaxed">{solution}</p>
                  </div>
                )}
              </div>
            </div>
          )}
          {/* Results */}
          {results.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Key Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.map((result, i) => (
                  <div key={i} className="bg-slate-800/30 border border-white/5 rounded-xl p-4 flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-300 mb-0">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonial */}
          {testimonial && (
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-4">
              <blockquote className="border-l-4 border-primary pl-4 py-1">
                <p className="text-slate-200 italic mb-4 text-lg">"{testimonial.text}"</p>
                <footer className="text-primary">
                  <span className="block font-bold">{testimonial.author}</span>
                  <span className="text-sm opacity-80">{testimonial.role} {testimonial.company && `at ${testimonial.company}`}</span>
                </footer>
              </blockquote>
            </div>
          )}
        </div>
      </MotionDiv>
    </MotionDiv>
  );
};

export default ProjectModal;
