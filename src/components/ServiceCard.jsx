import React from 'react'
import { Card } from 'react-bootstrap'

const ServiceCard = ({ title, description, icon: Icon }) => {
    const IconComponent = Icon

    return (
        <Card className="h-100 border-0 text-white text-center service-card-new overflow-hidden position-relative">
            <div className="service-card-new__bg" aria-hidden="true" />
            <Card.Body className="d-flex flex-column align-items-center p-4 p-lg-5 position-relative">
                <div className="service-icon-chip mb-4">
                    <span className="service-icon-chip__glow" aria-hidden="true" />
                    <IconComponent size={32} className="text-white" />
                </div>
                <Card.Title className="h5 fw-bold mb-3 service-title">{title}</Card.Title>
                <Card.Text className="service-desc mb-0">
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ServiceCard
