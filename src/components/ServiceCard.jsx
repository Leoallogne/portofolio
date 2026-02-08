import React from 'react'

const ServiceCard = ({ title, description, icon: Icon }) => {
    const IconComponent = Icon

    return (
        <div className="h-full bg-slate-900 border border-white/5 text-white text-center rounded-2xl overflow-hidden relative group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true" />
            <div className="flex flex-col items-center p-8 lg:p-10 relative z-10 h-full">
                <div className="relative mb-6">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                    <div className="relative w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-colors duration-300">
                        <IconComponent size={32} />
                    </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <p className="text-slate-400 mb-0 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ServiceCard
