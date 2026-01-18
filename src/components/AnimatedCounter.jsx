import React, { useCallback, useEffect, useRef, useState } from 'react'

const AnimatedCounter = ({
    end,
    duration = 2000,
    suffix = '',
    prefix = '',
    className = '',
    startOnView = true
}) => {
    const [count, setCount] = useState(0)
    const [hasStarted, setHasStarted] = useState(false)
    const counterRef = useRef(null)

    const animateCount = useCallback(() => {
        const startTime = performance.now()
        const startValue = 0

        const updateCount = (currentTime) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)

            // Easing function (ease-out-expo)
            const easeOutExpo = 1 - Math.pow(2, -10 * progress)
            const currentValue = Math.floor(startValue + (end - startValue) * easeOutExpo)

            setCount(currentValue)

            if (progress < 1) {
                requestAnimationFrame(updateCount)
            } else {
                setCount(end)
            }
        }

        requestAnimationFrame(updateCount)
    }, [duration, end])

    useEffect(() => {
        if (!startOnView) {
            animateCount()
            return
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasStarted) {
                        setHasStarted(true)
                        animateCount()
                    }
                })
            },
            { threshold: 0.5 }
        )

        if (counterRef.current) {
            observer.observe(counterRef.current)
        }

        return () => observer.disconnect()
    }, [animateCount, hasStarted, startOnView])

    return (
        <span ref={counterRef} className={className}>
            {prefix}{count}{suffix}
        </span>
    )
}

export default AnimatedCounter
