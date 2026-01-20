import React, { useEffect, useId, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  Github, 
  Calendar,
  Users, 
  Clock, 
  ArrowLeft, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Badge, Carousel } from 'react-bootstrap';

const MotionDiv = motion.div

const ProjectModal = ({ project, onClose }) => {
  const titleId = useId();
  const descriptionId = useId();

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
    title,
    description,
    longDescription,
    techStack = [],
    links = [],
    gallery = [],
    challenges = [],
    solution,
    role,
    teamSize,
    duration,
    date,
    results = [],
    testimonial,
    category,
    image,
    link,
  } = projectData;

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300
      }
    },
    exit: { 
      opacity: 0, 
      y: 50,
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

  const heroImage = (gallery && gallery.length > 0 && gallery[0]?.url) ? gallery[0].url : image;
  const heroAlt = (gallery && gallery.length > 0 && gallery[0]?.alt) ? gallery[0].alt : (title ? `Screenshot of ${title}` : 'Project image');

  if (!project) return null;

  return (
    <MotionDiv
      className="modal-backdrop-custom"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <MotionDiv 
        className="modal-content-custom"
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
          className="modal-close-btn"
          aria-label="Close modal"
          type="button"
        >
          <X size={20} aria-hidden="true" />
        </button>

        {heroImage && (
          <div className="modal-image-wrapper">
            <img src={heroImage} alt={heroAlt} className="modal-image" loading="lazy" />
            <div className="modal-image-overlay" />
            {category ? (
              <div className="modal-category-badge" aria-label={`Category: ${category}`}> 
                {category}
              </div>
            ) : null}
          </div>
        )}

        <div className="modal-body-custom">
          <h2 id={titleId} className="modal-title-custom">
            {title}
          </h2>

          <div className="modal-quick-info">
            {role ? (
              <div className="quick-info-item">
                <Users size={16} aria-hidden="true" />
                <span>{role}</span>
              </div>
            ) : null}
            {teamSize ? (
              <div className="quick-info-item">
                <Users size={16} aria-hidden="true" />
                <span>{teamSize} {teamSize === 1 ? 'person' : 'people'}</span>
              </div>
            ) : null}
            {duration ? (
              <div className="quick-info-item">
                <Clock size={16} aria-hidden="true" />
                <span>{duration}</span>
              </div>
            ) : null}
          </div>

          <div className="modal-section">
            <div className="modal-section-title">Overview</div>
            <div className="modal-meta-grid">
              <div className="modal-meta-item">
                <div className="modal-meta-label">Category</div>
                <div className="modal-meta-value">{category || '—'}</div>
              </div>
              <div className="modal-meta-item">
                <div className="modal-meta-label">Date</div>
                <div className="modal-meta-value d-inline-flex align-items-center gap-2">
                  <Calendar size={14} aria-hidden="true" />
                  <span>{formattedDate || '—'}</span>
                </div>
              </div>
              <div className="modal-meta-item">
                <div className="modal-meta-label">Role</div>
                <div className="modal-meta-value">{role || '—'}</div>
              </div>
              <div className="modal-meta-item">
                <div className="modal-meta-label">Team Size</div>
                <div className="modal-meta-value">{teamSize ? `${teamSize}` : '—'}</div>
              </div>
              <div className="modal-meta-item">
                <div className="modal-meta-label">Duration</div>
                <div className="modal-meta-value">{duration || '—'}</div>
              </div>
              <div className="modal-meta-item">
                <div className="modal-meta-label">Tech</div>
                <div className="modal-meta-value">{Array.isArray(techStack) ? `${techStack.length} tech` : '—'}</div>
              </div>
            </div>
          </div>

          {/* Gallery */}
          {gallery.length > 1 && (
            <div className="mb-4">
              <Carousel 
                indicators={gallery.length > 1}
                controls={gallery.length > 1}
                nextIcon={<span className="carousel-control-next-icon" aria-hidden="true"><ArrowRight size={24} /></span>}
                prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true"><ArrowLeft size={24} /></span>}
              >
                {gallery.map((imgItem, index) => (
                  <Carousel.Item key={index}>
                    <div className="ratio ratio-16x9 bg-dark rounded overflow-hidden">
                      <img 
                        src={imgItem.url} 
                        alt={imgItem.alt || `Project screenshot ${index + 1}`} 
                        className="img-fluid object-fit-cover"
                        loading="lazy"
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          )}

          {/* Description */}
          <div className="mb-4">
            <h3 className="h5 text-white mb-3">About This Project</h3>
            <p id={descriptionId} className="text-secondary">{longDescription || description || 'No description provided.'}</p>
          </div>

          <div className="modal-cta-bar">
            {demoLink?.url ? (
              isInternalUrl(demoLink.url) ? (
                <Link to={demoLink.url} className="btn btn-primary btn-sm d-inline-flex align-items-center">
                  <ExternalLink size={16} className="me-2" aria-hidden="true" />
                  Live Demo
                </Link>
              ) : (
                <a href={demoLink.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm d-inline-flex align-items-center">
                  <ExternalLink size={16} className="me-2" aria-hidden="true" />
                  Live Demo
                </a>
              )
            ) : (
              <button type="button" className="btn btn-primary btn-sm d-inline-flex align-items-center" disabled>
                <ExternalLink size={16} className="me-2" aria-hidden="true" />
                Live Demo
              </button>
            )}

            {githubLink?.url ? (
              <a href={githubLink.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm d-inline-flex align-items-center">
                <Github size={16} className="me-2" aria-hidden="true" />
                Source Code
              </a>
            ) : (
              <button type="button" className="btn btn-outline-light btn-sm d-inline-flex align-items-center" disabled>
                <Github size={16} className="me-2" aria-hidden="true" />
                Source Code
              </button>
            )}
          </div>

          {additionalLinks.length > 0 && (
            <div className="modal-section">
              <div className="modal-section-title">Additional Links</div>
              <div className="d-flex flex-wrap gap-2">
                {additionalLinks.map((l, i) =>
                  isInternalUrl(l.url) ? (
                    <Link key={`${l.type}-${i}`} to={l.url} className="btn btn-outline-light btn-sm">
                      {l.type}
                    </Link>
                  ) : (
                    <a key={`${l.type}-${i}`} href={l.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm">
                      {l.type}
                    </a>
                  ),
                )}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-4">
            <h3 className="h5 text-white mb-3">Technologies Used</h3>
            <div className="d-flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <Badge 
                  key={i}
                  bg="primary"
                  className="bg-opacity-10 text-primary fw-medium px-3 py-2 rounded-pill"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="row g-4 mb-4">
            {role && (
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-2">
                  <Users size={18} className="text-primary me-2" />
                  <span className="text-white fw-medium">Role:</span>
                </div>
                <p className="text-secondary mb-0">{role}</p>
              </div>
            )}
            
            {teamSize && (
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-2">
                  <Users size={18} className="text-primary me-2" />
                  <span className="text-white fw-medium">Team Size:</span>
                </div>
                <p className="text-secondary mb-0">{teamSize} {teamSize === 1 ? 'person' : 'people'}</p>
              </div>
            )}
            
            {duration && (
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-2">
                  <Clock size={18} className="text-primary me-2" />
                  <span className="text-white fw-medium">Duration:</span>
                </div>
                <p className="text-secondary mb-0">{duration}</p>
              </div>
            )}
          </div>

          {/* Challenges & Solution */}
          {challenges.length > 0 && (
            <div className="mb-4">
              <h3 className="h5 text-white mb-3">Challenges & Solutions</h3>
              <div className="card bg-dark bg-opacity-25 border border-secondary border-opacity-25">
                <div className="card-body">
                  <h4 className="h6 text-white mb-3">Challenges:</h4>
                  <ul className="mb-0">
                    {challenges.map((challenge, i) => (
                      <li key={i} className="mb-2 text-secondary">
                        {challenge}
                      </li>
                    ))}
                  </ul>
                  
                  {solution && (
                    <>
                      <h4 className="h6 text-white mt-4 mb-3">Solution:</h4>
                      <p className="text-secondary mb-0">{solution}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
          {/* Results */}
          {results.length > 0 && (
            <div className="mb-4">
              <h3 className="h5 text-white mb-3">Key Results</h3>
              <div className="row g-3">
                {results.map((result, i) => (
                  <div key={i} className="col-md-6">
                    <div className="d-flex">
                      <CheckCircle size={20} className="text-success mt-1 me-2 flex-shrink-0" />
                      <p className="text-secondary mb-0">{result}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonial */}
          {testimonial && (
            <div className="card bg-primary bg-opacity-10 border border-primary border-opacity-25 mb-4">
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p className="text-white-75 fst-italic mb-3">"{testimonial.text}"</p>
                  <footer className="blockquote-footer text-primary mt-0">
                    <span className="d-block fw-bold">{testimonial.author}</span>
                    {testimonial.role} {testimonial.company && `at ${testimonial.company}`}
                  </footer>
                </blockquote>
              </div>
            </div>
          )}
        </div>
      </MotionDiv>
    </MotionDiv>
  );
};

export default ProjectModal;
