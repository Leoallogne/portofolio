import React from 'react'
import { Card } from 'react-bootstrap'

const ServiceCard = ({ title, description, icon: Icon }) => {
    return (
        <Card className="h-100 border border-white-10 bg-dark bg-opacity-50 text-white text-center hover-translate-y transition-all">
            <Card.Body className="d-flex flex-column align-items-center p-4">
                <div className="p-4 rounded-circle bg-primary bg-opacity-10 text-primary mb-4 position-relative">
                    <Icon size={32} />
                    <div className="position-absolute top-0 start-0 w-100 h-100 rounded-circle bg-primary bg-opacity-25 blur-xl z-n1"></div>
                </div>
                <Card.Title className="h5 fw-bold mb-3">{title}</Card.Title>
                <Card.Text className="text-secondary lh-lg">
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ServiceCard
