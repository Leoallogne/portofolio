import React from 'react';
import { Sparkles } from 'lucide-react';

const ProjectHeader = ({ title, description, projectCount }) => {
  return (
    <div className="text-center mb-12 pb-4">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-6 border border-primary/25">
        <Sparkles size={18} className="mr-2" aria-hidden="true" />
        <span>Portfolio Showcase</span>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">{title}</h1>

      <p className="text-lg md:text-xl text-slate-400 mx-auto mb-6 max-w-2xl leading-relaxed">
        {description}
      </p>

      <span className="inline-block bg-slate-800 text-white px-4 py-2 rounded-full text-base font-normal border border-white/10" aria-label={`Total projects: ${projectCount}`}>
        {projectCount} {projectCount === 1 ? 'Project' : 'Projects'}
      </span>
    </div>
  );
};

export default ProjectHeader;
