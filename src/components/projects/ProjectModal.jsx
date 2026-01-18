import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  Github, 
  FileText, 
  Users, 
  Clock, 
  ArrowLeft, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Badge, Carousel } from 'react-bootstrap';

const MotionDiv = motion.div

const ProjectModal = ({ project, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!project) return null;

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
    results = [],
    testimonial
  } = project;

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

  // Get icon component based on type
  const getIcon = (type) => {
    switch(type) {
      case 'github':
        return <Github size={18} className="me-2" />;
      case 'demo':
        return <ExternalLink size={18} className="me-2" />;
      case 'documentation':
      case 'case-study':
        return <FileText size={18} className="me-2" />;
      default:
        return <ExternalLink size={18} className="me-2" />;
    }
  };

  return (
    <AnimatePresence>
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
          aria-labelledby="project-modal-title"
          aria-describedby="project-modal-description"
        >
          {/* Header */}
          <div className="modal-header border-0 pb-0 position-sticky top-0 bg-dark z-3">
            <h2 id="project-modal-title" className="h4 fw-bold text-white mb-0">
              {title}
            </h2>
            <button 
              onClick={onClose}
              className="btn-close btn-close-white"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>

          <div className="modal-body overflow-auto py-4">
            {/* Gallery */}
            {gallery.length > 0 && (
              <div className="mb-4">
                <Carousel 
                  indicators={gallery.length > 1}
                  controls={gallery.length > 1}
                  nextIcon={<span className="carousel-control-next-icon" aria-hidden="true"><ArrowRight size={24} /></span>}
                  prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true"><ArrowLeft size={24} /></span>}
                >
                  {gallery.map((img, index) => (
                    <Carousel.Item key={index}>
                      <div className="ratio ratio-16x9 bg-dark rounded overflow-hidden">
                        <img 
                          src={img.url} 
                          alt={img.alt || `Project screenshot ${index + 1}`} 
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
              <p className="text-secondary">{longDescription || description}</p>
            </div>

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

          {/* Footer */}
          <div className="modal-footer border-0 pt-0">
            <div className="d-flex flex-wrap align-items-center justify-content-between w-100 gap-3">
              <div className="d-flex flex-wrap gap-2">
                {links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-sm d-inline-flex align-items-center ${
                      link.type === 'github' 
                        ? 'btn-outline-light' 
                        : 'btn-primary'
                    }`}
                  >
                    {getIcon(link.type)}
                    {link.type === 'github' ? 'View Code' : 
                     link.type === 'demo' ? 'Live Demo' : 
                     link.type === 'case-study' ? 'Case Study' : 'View'}
                  </a>
                ))}
              </div>
              <button 
                onClick={onClose}
                className="btn btn-outline-secondary btn-sm ms-auto"
              >
                Close
              </button>
            </div>
          </div>
        </MotionDiv>
      </MotionDiv>
    </AnimatePresence>
  );
};

export default ProjectModal;
