import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({
    children,
    variant = 'primary',
    to,
    href,
    onClick,
    className = '',
    fullWidth = false,
    size = 'medium',
    type = 'button',
    as
}) => {
    // Map custom variants to Bootstrap classes
    const variantMap = {
        primary: 'btn-primary',
        outline: 'btn-outline-primary',
        ghost: 'btn-link text-decoration-none text-light',
        accent: 'btn-primary'
    }

    const sizeClass = size === 'small' ? 'btn-sm' : size === 'large' ? 'btn-lg' : '';
    const widthClass = fullWidth ? 'w-100' : '';

    const classes = `btn ${variantMap[variant] || 'btn-primary'} ${sizeClass} ${widthClass} ${className}`;

    // Handle 'as' prop for custom component
    if (as) {
        const Component = as;
        return <Component to={to} className={classes}>{children}</Component>
    }

    if (to) {
        return (
            <Link to={to} className={classes}>
                {children}
            </Link>
        )
    }

    if (href) {
        return (
            <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        )
    }

    return (
        <button type={type} onClick={onClick} className={classes}>
            {children}
        </button>
    )
}

export default Button
