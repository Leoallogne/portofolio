import React, { memo } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div

const ProjectCard = memo(({ project, onClick, compact = false, ctaLabel = 'Lihat selengkapnya' }) => {
  const { title, description, techStack, image } = project;
  const safeTechStack = Array.isArray(techStack) ? techStack : [];
  const visibleTech = compact ? safeTechStack.slice(0, 3) : safeTechStack;
  const hiddenTechCount = compact && safeTechStack.length > 3 ? safeTechStack.length - 3 : 0;

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
      role="article"
      aria-label={`Project: ${title}`}
    >
      <div className={`group h-full bg-slate-900/50 backdrop-blur-sm border border-white/5 overflow-hidden rounded-2xl flex flex-col ${compact ? 'shadow-sm' : 'shadow-lg hover:shadow-xl transition-shadow'}`}>
        <div className="relative overflow-hidden aspect-video bg-slate-800">
          <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
            <span className="sr-only">{`${title} project image`}</span>
            <div className="text-white/20 text-6xl font-bold">{title[0]}</div>
          </div>
          {image && (
            <img
              src={image}
              alt={`Screenshot of ${title} project`}
              className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              width={400}
              height={200}
            />
          )}
          {!compact && (
            <div className="absolute inset-0 bg-slate-950/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <button
                onClick={onClick}
                className="bg-white text-slate-900 rounded-full p-4 hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label={`View details of ${title} project`}
                type="button"
              >
                <ArrowRight size={24} aria-hidden="true" />
              </button>
            </div>
          )}
        </div>

        <div className={`flex flex-col flex-grow ${compact ? 'p-4' : 'p-6'}`}>
          <h3 className={`font-bold text-white ${compact ? 'text-lg mb-2' : 'text-xl mb-3'}`}>
            {title}
          </h3>
          {!compact && (
            <p className="text-slate-400 text-sm mb-4 flex-grow leading-relaxed line-clamp-3">
              {description}
            </p>
          )}

          <div className="flex flex-wrap gap-2 mt-auto" aria-label="Technologies used">
            {visibleTech.map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="bg-primary/10 text-primary font-medium px-3 py-1 rounded-full text-xs border border-primary/20"
              >
                {tech}
              </span>
            ))}
            {hiddenTechCount > 0 && (
              <span
                className="bg-primary/10 text-primary font-medium px-3 py-1 rounded-full text-xs border border-primary/20"
              >
                +{hiddenTechCount}
              </span>
            )}
          </div>

          {compact && (
            <button
              onClick={onClick}
              className="mt-4 w-full py-2 flex items-center justify-center gap-2 text-primary border border-primary/20 rounded-xl hover:bg-primary/5 transition-colors text-sm font-medium"
              type="button"
              aria-label={`Lihat selengkapnya: ${title}`}
            >
              {ctaLabel}
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </MotionDiv>
  );
});

export default ProjectCard;
