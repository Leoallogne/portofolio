import React from 'react'
import { Card, Badge } from 'react-bootstrap'

const SkillCard = ({ title, skills, icon: Icon }) => {
    const IconComponent = Icon

    return (
        <Card className="h-100 border border-white-10 bg-dark bg-opacity-50 text-white">
            <Card.Body className="p-4">
                <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="p-3 rounded-circle bg-primary bg-opacity-10 text-primary">
                        <IconComponent size={24} />
                    </div>
                    <h3 className="h5 fw-bold mb-0">{title}</h3>
                </div>

                <div className="d-flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <Badge
                            key={index}
                            bg="transparent"
                            className="border border-secondary border-opacity-25 text-secondary fw-normal px-3 py-2 rounded-pill"
                        >
                            {skill}
                        </Badge>
                    ))}
                </div>
            </Card.Body>
        </Card>
    )
}

export default SkillCard
