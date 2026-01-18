import React from 'react';
import { Badge } from 'react-bootstrap';
import { Sparkles } from 'lucide-react';

const ProjectHeader = ({ title, description, projectCount }) => {
  return (
    <div className="text-center mb-5 pb-4">
      <div className="d-inline-flex align-items-center px-4 py-2 rounded-pill bg-primary bg-opacity-10 text-primary fw-semibold mb-4 border border-primary border-opacity-25">
        <Sparkles size={18} className="me-2" aria-hidden="true" />
        <span>Portfolio Showcase</span>
      </div>
      
      <h1 className="display-4 fw-bold text-white mb-4">{title}</h1>
      
      <p className="lead text-secondary mx-auto mb-4" style={{ maxWidth: '700px' }}>
        {description}
      </p>
      
      <Badge bg="dark" className="px-3 py-2 fs-6 fw-normal" aria-label={`Total projects: ${projectCount}`}>
        {projectCount} {projectCount === 1 ? 'Project' : 'Projects'}
      </Badge>
    </div>
  );
};

export default ProjectHeader;
