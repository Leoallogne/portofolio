import React from 'react'
import { Card, Badge, Button } from 'react-bootstrap'
import { ArrowRight } from 'lucide-react'

const ProjectCard = ({ project, onClick }) => {
    return (
        <Card className="h-100 border-0 shadow-sm bg-dark bg-opacity-50 text-white overflow-hidden hover-card transition-all">
            <div className="card-img-wrapper position-relative overflow-hidden" style={{ height: '200px' }}>
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center">
                    {/* Fallback for image */}
                    <div className="text-white-50 fs-1 opacity-25 fw-bold">{project.title[0]}</div>
                </div>
                {project.image && (
                    <Card.Img
                        variant="top"
                        src={project.image}
                        alt={project.title}
                        className="w-100 h-100 object-fit-cover position-relative z-1"
                    />
                )}
                <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center opacity-0 hover-opacity-100 transition-all z-2">
                    <Button variant="light" onClick={onClick} className="rounded-circle p-3">
                        <ArrowRight size={24} />
                    </Button>
                </div>
            </div>

            <Card.Body className="d-flex flex-column p-4">
                <Card.Title className="fw-bold mb-3">{project.title}</Card.Title>
                <Card.Text className="text-secondary small mb-4 flex-grow-1 lh-lg">
                    {project.description}
                </Card.Text>

                <div className="d-flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech, i) => (
                        <Badge key={i} bg="primary" className="bg-opacity-10 text-primary fw-medium px-3 py-2 rounded-pill">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard
