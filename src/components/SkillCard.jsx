import React from 'react'
import { Card, Badge } from 'react-bootstrap'

const gradientMap = {
    'Languages': 'from-blue-500 to-cyan-400',
    'Frontend': 'from-purple-500 to-pink-500',
    'Backend': 'from-amber-500 to-orange-500',
    'Database': 'from-emerald-500 to-teal-400',
    'Tools & DevOps': 'from-rose-500 to-pink-500'
}

const SkillCard = ({ title, skills, icon: Icon }) => {
    const IconComponent = Icon
    const gradientClass = gradientMap[title] || 'from-blue-500 to-cyan-400'

    return (
        <Card className="h-100 border-0 bg-gradient-to-br from-slate-800 to-slate-900 text-white overflow-hidden position-relative skill-card">
            <div className="position-absolute top-0 end-0 w-100 h-100 bg-gradient-to-br from-transparent to-slate-800 opacity-30" />
            
            <Card.Body className="p-5 position-relative z-1">
                <div className="d-flex align-items-center gap-4 mb-4">
                    <div className={`p-3 rounded-3 bg-gradient-to-br ${gradientClass} shadow-lg`}>
                        <IconComponent size={24} className="text-white" />
                    </div>
                    <h3 className="h4 fw-bold mb-0 text-gradient">
                        <span className={`bg-clip-text text-transparent bg-gradient-to-r ${gradientClass}`}>
                            {title}
                        </span>
                    </h3>
                </div>

                <div className="d-flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <Badge
                            key={index}
                            className={`border-0 fw-medium px-3 py-2 rounded-pill bg-slate-800 text-white position-relative overflow-hidden skill-badge`}
                        >
                            <span className="position-relative z-1">{skill}</span>
                            <span className={`position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-r ${gradientClass} opacity-0 hover:opacity-100 transition-all duration-300`} />
                        </Badge>
                    ))}
                </div>
            </Card.Body>
            
            <style jsx global>{`
                .skill-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.2);
                }
                
                .skill-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.3);
                }
                
                .skill-badge {
                    transition: all 0.3s ease;
                    border: 1px solid rgba(255, 255, 255, 0.05) !important;
                }
                
                .skill-badge:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.2);
                }
                
                .text-gradient {
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>
        </Card>
    )
}

export default React.memo(SkillCard)
