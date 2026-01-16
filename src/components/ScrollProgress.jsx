import React, { useEffect, useState } from 'react'

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
            setScrollProgress(progress)
        }

        window.addEventListener('scroll', updateScrollProgress, { passive: true })
        updateScrollProgress()

        return () => window.removeEventListener('scroll', updateScrollProgress)
    }, [])

    return (
        <div className="scroll-progress-container">
            <div
                className="scroll-progress-bar"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    )
}

export default ScrollProgress
