import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X, Sparkles, Code, Calendar, Layers } from 'lucide-react'
import { Badge, Button } from 'react-bootstrap'

const MotionDiv = motion.div

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    const modalVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 50
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 25,
                stiffness: 300
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: 50,
            transition: {
                duration: 0.2
            }
        }
    }

    return (
        <AnimatePresence>
            {project && (
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
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button className="modal-close-btn" onClick={onClose}>
                            <X size={24} />
                        </button>

                        {/* Image Header */}
                        {project.image && (
                            <div className="modal-image-wrapper">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="modal-image"
                                />
                                <div className="modal-image-overlay" />

                                {/* Category Badge */}
                                {project.category && (
                                    <div className="modal-category-badge">
                                        <Sparkles size={14} />
                                        {project.category}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Content */}
                        <div className="modal-body-custom">
                            {/* Title */}
                            <h2 className="modal-title-custom">
                                {project.title}
                            </h2>

                            {/* Quick Info */}
                            <div className="modal-quick-info">
                                <div className="quick-info-item">
                                    <Layers size={16} />
                                    <span>Full Stack</span>
                                </div>
                                <div className="quick-info-item">
                                    <Calendar size={16} />
                                    <span>2024</span>
                                </div>
                                <div className="quick-info-item">
                                    <Code size={16} />
                                    <span>{project.techStack?.length || 0} Technologies</span>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="modal-section">
                                <h6 className="modal-section-title">
                                    <span className="section-icon">📝</span>
                                    About This Project
                                </h6>
                                <p className="modal-description">
                                    {project.description}
                                </p>
                                <p className="modal-description text-secondary">
                                    This project showcases my expertise in modern web development,
                                    featuring clean architecture, responsive design, and optimal performance.
                                    Built with scalability and maintainability in mind.
                                </p>
                            </div>

                            {/* Tech Stack */}
                            <div className="modal-section">
                                <h6 className="modal-section-title">
                                    <span className="section-icon">⚡</span>
                                    Tech Stack
                                </h6>
                                <div className="tech-stack-grid">
                                    {project.techStack?.map((tech, index) => (
                                        <MotionDiv
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Badge className="tech-badge-modern">
                                                {tech}
                                            </Badge>
                                        </MotionDiv>
                                    ))}
                                </div>
                            </div>

                            {/* Key Features */}
                            <div className="modal-section">
                                <h6 className="modal-section-title">
                                    <span className="section-icon">✨</span>
                                    Key Features
                                </h6>
                                <ul className="features-list">
                                    <li>Responsive design for all devices</li>
                                    <li>Modern and intuitive user interface</li>
                                    <li>Optimized performance and loading speed</li>
                                    <li>Clean and maintainable codebase</li>
                                </ul>
                            </div>

                            {/* Action Buttons */}
                            <div className="modal-actions">
                                <Button
                                    variant="primary"
                                    className="modal-btn modal-btn-primary"
                                    href={project.link || "#"}
                                    target="_blank"
                                >
                                    <ExternalLink size={18} />
                                    Live Demo
                                </Button>
                                <Button
                                    variant="outline-light"
                                    className="modal-btn modal-btn-secondary"
                                    href="#"
                                    target="_blank"
                                >
                                    <Github size={18} />
                                    Source Code
                                </Button>
                            </div>
                        </div>
                    </MotionDiv>
                </MotionDiv>
            )}
        </AnimatePresence>
    )
}

export default ProjectModal
