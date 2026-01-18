import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const MotionDiv = motion.div

const ProjectMarqueeCarousel = ({ projects, onProjectClick, speedSeconds = 35 }) => {
    const trackRef = useRef(null)
    const [distance, setDistance] = useState(0)

    const items = useMemo(() => {
        if (!Array.isArray(projects)) return []
        // Duplicate to enable seamless looping
        return [...projects, ...projects]
    }, [projects])

    useEffect(() => {
        const el = trackRef.current
        if (!el) return

        const measure = () => {
            // Since we duplicate items, half of scrollWidth is one full loop
            const total = el.scrollWidth
            setDistance(total / 2)
        }

        measure()
        window.addEventListener('resize', measure)
        return () => window.removeEventListener('resize', measure)
    }, [items.length])

    if (!projects || projects.length === 0) return null

    return (
        <div className="project-marquee">
            <MotionDiv
                ref={trackRef}
                className="project-marquee-track"
                animate={distance ? { x: [0, -distance] } : { x: 0 }}
                transition={
                    distance
                        ? {
                              x: {
                                  repeat: Infinity,
                                  repeatType: 'loop',
                                  duration: speedSeconds,
                                  ease: 'linear',
                              },
                          }
                        : undefined
                }
            >
                {items.map((project, index) => (
                    <button
                        key={`${project.id || project.title}-${index}`}
                        type="button"
                        className="project-marquee-item"
                        onClick={() => onProjectClick?.(project)}
                        aria-label={`Open project ${project.title}`}
                    >
                        <div className="project-marquee-thumb" aria-hidden="true">
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt=""
                                    loading="lazy"
                                    className="project-marquee-thumb-img"
                                />
                            ) : (
                                <div className="project-marquee-thumb-fallback">
                                    {project.title?.[0] || 'P'}
                                </div>
                            )}
                        </div>
                        <div className="project-marquee-title">{project.title}</div>
                    </button>
                ))}
            </MotionDiv>
        </div>
    )
}

export default ProjectMarqueeCarousel
