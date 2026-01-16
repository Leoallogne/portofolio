import React, { useRef, useState } from 'react'

const TiltCard = ({ children, className = '', intensity = 15, glare = true }) => {
    const cardRef = useRef(null)
    const [transform, setTransform] = useState('')
    const [glareStyle, setGlareStyle] = useState({})

    const handleMouseMove = (e) => {
        if (!cardRef.current) return

        const rect = cardRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * -intensity
        const rotateY = ((x - centerX) / centerX) * intensity

        setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`)

        if (glare) {
            const glareX = (x / rect.width) * 100
            const glareY = (y / rect.height) * 100
            setGlareStyle({
                background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
                opacity: 1
            })
        }
    }

    const handleMouseLeave = () => {
        setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
        setGlareStyle({ opacity: 0 })
    }

    return (
        <div
            ref={cardRef}
            className={`tilt-card ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform,
                transition: 'transform 0.15s ease-out',
                transformStyle: 'preserve-3d',
                position: 'relative',
                willChange: 'transform'
            }}
        >
            {children}
            {glare && (
                <div
                    className="tilt-glare"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: 'inherit',
                        pointerEvents: 'none',
                        transition: 'opacity 0.3s ease-out',
                        ...glareStyle
                    }}
                />
            )}
        </div>
    )
}

export default TiltCard
