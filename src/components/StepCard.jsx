import React from 'react';
import { motion } from 'framer-motion';

const StepCard = ({ title, description, image, icon: Icon, delay = 0, compact = false, variant = 'default' }) => {
    const isIA = variant === 'ia';

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`relative group w-full mx-auto mb-4 p-[1px] border border-white/5 rounded-xl glass-morphism overflow-hidden 
                ${compact ? 'lg:max-w-none' : 'lg:max-w-4xl'} 
                ${isIA ? 'glitch-border ia-pulse' : ''}
            `}
        >
            {/* Animated Scan Line */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`scan-line ${isIA ? '!bg-neon-cyan !shadow-neon-cyan' : ''}`} />
            </div>

            <div className={`flex flex-col ${image ? 'md:flex-row' : ''} gap-3 md:gap-8 p-4 md:p-6 relative z-10`}>
                {/* Image Container */}
                {image && (
                    <div className="w-full md:w-1/2 aspect-video bg-dark-base/50 rounded-lg overflow-hidden border border-neon-cyan/10 relative group-hover:border-neon-cyan/30 transition-colors duration-300">
                        <img src={image} alt={title} className="w-full h-full object-cover" />
                        {isIA && <div className="laser-line" />}
                    </div>
                )}

                {/* Content */}
                <div className={`w-full ${image ? 'md:w-1/2' : ''} flex flex-col justify-center`}>
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                        <div className={`p-1.5 md:p-2 rounded-lg ${isIA || image ? 'bg-neon-cyan/10 text-neon-cyan' : 'bg-neon-pink/10 text-neon-pink'}`}>
                            <Icon size={16} className={`${isIA ? 'animate-pulse' : ''} md:w-5 md:h-5`} />
                        </div>
                        <h3 className={`text-sm md:text-xl font-bold uppercase tracking-tight 
                            ${isIA ? 'text-neon-cyan shimmer-text' : 'bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent'}
                        `}>
                            {title}
                        </h3>
                    </div>
                    <p className="text-white/50 leading-tight md:leading-relaxed text-[11px] md:text-base">
                        {description}
                    </p>
                </div>
            </div>

            {/* Interactive Hover Glow */}
            <div className={`absolute -bottom-4 -right-4 w-16 h-16 blur-2xl rounded-full transition-colors 
                ${isIA ? 'bg-neon-cyan/5 group-hover:bg-neon-cyan/20' : 'bg-white/5 group-hover:bg-neon-cyan/10'}
            `} />
        </motion.div>
    );
};

export default StepCard;
