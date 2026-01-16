import React, { useRef, useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import TiltCard from './TiltCard'
import ProjectCard from './ProjectCard'

const ProjectCarousel = ({ projects, onProjectClick, autoPlayInterval = 4000 }) => {
    const carouselRef = useRef(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [isPaused, setIsPaused] = useState(false)
    const autoPlayRef = useRef(null)

    const updateScrollButtons = useCallback(() => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
        }
    }, [])

    // Auto scroll function
    const autoScroll = useCallback(() => {
        if (carouselRef.current && !isPaused) {
            const { scrollLeft: currentScroll, scrollWidth, clientWidth } = carouselRef.current
            const isAtEnd = currentScroll >= scrollWidth - clientWidth - 10

            if (isAtEnd) {
                // Reset to beginning with smooth animation
                carouselRef.current.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                })
            } else {
                // Scroll to next item
                carouselRef.current.scrollBy({
                    left: 370,
                    behavior: 'smooth'
                })
            }
        }
    }, [isPaused])

    // Auto play effect
    useEffect(() => {
        if (isAutoPlaying && !isPaused) {
            autoPlayRef.current = setInterval(autoScroll, autoPlayInterval)
        }

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current)
            }
        }
    }, [isAutoPlaying, isPaused, autoScroll, autoPlayInterval])

    useEffect(() => {
        updateScrollButtons()
        const carousel = carouselRef.current
        if (carousel) {
            carousel.addEventListener('scroll', updateScrollButtons)
            window.addEventListener('resize', updateScrollButtons)
        }
        return () => {
            if (carousel) {
                carousel.removeEventListener('scroll', updateScrollButtons)
            }
            window.removeEventListener('resize', updateScrollButtons)
        }
    }, [updateScrollButtons])

    const scroll = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = 400
            carouselRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    // Pause on hover
    const handleMouseEnter = () => {
        setIsPaused(true)
    }

    const handleMouseLeave = () => {
        setIsPaused(false)
        setIsDragging(false)
    }

    // Mouse drag functionality
    const handleMouseDown = (e) => {
        setIsDragging(true)
        setStartX(e.pageX - carouselRef.current.offsetLeft)
        setScrollLeft(carouselRef.current.scrollLeft)
    }

    const handleMouseMove = (e) => {
        if (!isDragging) return
        e.preventDefault()
        const x = e.pageX - carouselRef.current.offsetLeft
        const walk = (x - startX) * 2
        carouselRef.current.scrollLeft = scrollLeft - walk
    }

    const handleMouseUp = () => {
        setIsDragging(false)
    }

    const toggleAutoPlay = () => {
        setIsAutoPlaying(!isAutoPlaying)
    }

    return (
        <div
            className="carousel-wrapper position-relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Auto-play indicator */}
            <button
                className="carousel-autoplay-btn"
                onClick={toggleAutoPlay}
                aria-label={isAutoPlaying ? 'Pause auto-scroll' : 'Play auto-scroll'}
            >
                {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
                <span className="ms-1 d-none d-sm-inline">
                    {isAutoPlaying ? 'Auto' : 'Paused'}
                </span>
            </button>

            {/* Navigation Buttons */}
            <button
                className={`carousel-nav-btn carousel-nav-left ${!canScrollLeft ? 'disabled' : ''}`}
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                className={`carousel-nav-btn carousel-nav-right ${!canScrollRight ? 'disabled' : ''}`}
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Scroll right"
            >
                <ChevronRight size={24} />
            </button>

            {/* Carousel Track */}
            <div
                ref={carouselRef}
                className={`carousel-track ${isDragging ? 'grabbing' : ''}`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
            >
                {projects.map((project, index) => (
                    <div key={index} className="carousel-item-wrapper">
                        <TiltCard intensity={8}>
                            <ProjectCard
                                project={project}
                                onClick={() => onProjectClick(project)}
                            />
                        </TiltCard>
                    </div>
                ))}
            </div>

            {/* Gradient Overlays */}
            <div className={`carousel-gradient carousel-gradient-left ${!canScrollLeft ? 'hidden' : ''}`} />
            <div className={`carousel-gradient carousel-gradient-right ${!canScrollRight ? 'hidden' : ''}`} />

            {/* Progress Dots */}
            <div className="carousel-dots">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        className="carousel-dot"
                        onClick={() => {
                            if (carouselRef.current) {
                                carouselRef.current.scrollTo({
                                    left: index * 370,
                                    behavior: 'smooth'
                                })
                            }
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectCarousel
