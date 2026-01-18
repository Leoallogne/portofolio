import React, { useEffect, useRef } from 'react'

const ParticlesBackground = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animationFrameId

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        window.addEventListener('resize', resizeCanvas)
        resizeCanvas()

        // Particles configuration
        const particles = []
        const particleCount = window.innerWidth < 768 ? 50 : 100
        const connectionDistance = 150
        const moveSpeed = 0.5

        const createParticle = () => {
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * moveSpeed,
                vy: (Math.random() - 0.5) * moveSpeed,
                size: Math.random() * 2 + 1,
                color: `rgba(56, 189, 248, ${Math.random() * 0.5})`,
            }
        }

        const updateParticle = (p) => {
            p.x += p.vx
            p.y += p.vy

            // Bounce off edges
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        }

        const drawParticle = (p) => {
            ctx.fillStyle = p.color
            ctx.beginPath()
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
            ctx.fill()
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(createParticle())
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw connections
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach(p2 => {
                    const dx = p1.x - p2.x
                    const dy = p1.y - p2.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < connectionDistance) {
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(56, 189, 248, ${0.1 * (1 - distance / connectionDistance)})`
                        ctx.lineWidth = 1
                        ctx.moveTo(p1.x, p1.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.stroke()
                    }
                })
            })

            // Update and draw particles
            particles.forEach(particle => {
                updateParticle(particle)
                drawParticle(particle)
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1, // Behind everything
                background: 'transparent',
                pointerEvents: 'none'
            }}
        />
    )
}

export default ParticlesBackground
