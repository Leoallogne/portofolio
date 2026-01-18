import React, { memo } from 'react';
import { Card, Badge } from 'react-bootstrap';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div

const ProjectCard = memo(({ project, onClick }) => {
  const { title, description, techStack, image } = project;

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-100"
      role="article"
      aria-label={`Project: ${title}`}
    >
      <Card className="h-100 border-0 shadow-sm bg-dark bg-opacity-50 text-white overflow-hidden project-card">
        <div className="position-relative overflow-hidden project-card-media">
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center">
            <span className="visually-hidden">{`${title} project image`}</span>
            <div className="text-white-50 fs-1 opacity-25 fw-bold">{title[0]}</div>
          </div>
          {image && (
            <Card.Img
              variant="top"
              src={image}
              alt={`Screenshot of ${title} project`}
              className="w-100 h-100 object-fit-cover position-relative z-1"
              loading="lazy"
              width={400}
              height={200}
            />
          )}
          <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center opacity-0 hover-opacity-100 transition-all z-2">
            <button
              onClick={onClick}
              className="btn btn-light rounded-circle p-3 border-0 focus-ring focus-ring-light"
              aria-label={`View details of ${title} project`}
            >
              <ArrowRight size={24} aria-hidden="true" />
            </button>
          </div>
        </div>

        <Card.Body className="d-flex flex-column p-4">
          <Card.Title as="h3" className="h5 fw-bold mb-3">
            {title}
          </Card.Title>
          <Card.Text className="text-secondary small mb-4 flex-grow-1 lh-lg">
            {description}
          </Card.Text>

          <div className="d-flex flex-wrap gap-2 mt-auto" aria-label="Technologies used">
            {techStack.map((tech, i) => (
              <Badge 
                key={`${tech}-${i}`} 
                bg="primary" 
                className="bg-opacity-10 text-primary fw-medium px-3 py-2 rounded-pill"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </Card.Body>
      </Card>
    </MotionDiv>
  );
});

export default ProjectCard;
