import React from 'react'
import { Modal, Button, Badge } from 'react-bootstrap'
import { ExternalLink, Github, X } from 'lucide-react'

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null

    return (
        <Modal show={!!project} onHide={onClose} size="lg" centered className="project-modal">
            <Modal.Header closeButton className="bg-dark border-secondary">
                <Modal.Title className="text-white">{project.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body className="bg-dark text-white p-4">
                {project.image && (
                    <div className="mb-4 rounded-3 overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-100 object-fit-cover"
                            style={{ maxHeight: '300px' }}
                        />
                    </div>
                )}

                <div className="mb-4">
                    <h6 className="text-primary text-uppercase small fw-bold mb-3 letter-spacing-1">Technologies</h6>
                    <div className="d-flex flex-wrap gap-2">
                        {project.techStack.map((tech, index) => (
                            <Badge key={index} bg="primary" className="bg-opacity-10 text-primary fw-medium px-3 py-2 rounded-pill">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <h6 className="text-primary text-uppercase small fw-bold mb-3 letter-spacing-1">Description</h6>
                    <p className="text-secondary lh-lg mb-3">
                        {project.description}
                    </p>
                    <p className="text-secondary lh-lg mb-0">
                        This project represents my commitment to clean code and user-centric design.
                        Built with scalability in mind and following best practices for modern web development.
                    </p>
                </div>
            </Modal.Body>

            <Modal.Footer className="bg-dark border-secondary">
                <Button variant="outline-primary" href={project.link || "#"} className="me-2">
                    Live Demo <ExternalLink size={16} className="ms-1" />
                </Button>
                <Button variant="outline-secondary" href="#">
                    Source Code <Github size={16} className="ms-1" />
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ProjectModal
