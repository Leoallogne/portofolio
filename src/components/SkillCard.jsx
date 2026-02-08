import React, { memo } from 'react'

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
        <div className="h-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5 text-white rounded-2xl overflow-hidden relative group hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-black/20">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-slate-800 opacity-30 pointer-events-none" />

            <div className="p-6 md:p-8 relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${gradientClass} shadow-lg shadow-black/20`}>
                        <IconComponent size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${gradientClass} bg-white">
                        <span className={`bg-clip-text text-transparent bg-gradient-to-r ${gradientClass}`}>
                            {title}
                        </span>
                    </h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-full bg-slate-800 border border-white/5 group/badge"
                        >
                            <span className={`absolute inset-0 bg-gradient-to-r ${gradientClass} opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300`} />
                            <span className="relative z-10 block px-3 py-1.5 text-sm font-medium text-slate-300 group-hover/badge:text-white transition-colors duration-300">
                                {skill}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default memo(SkillCard)
