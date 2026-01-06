import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const StepCard = ({ title, description, image, icon: Icon, delay = 0, compact = false, variant = 'default', link }) => {
    const isIA = variant === 'ia';
    const isMuni = variant === 'muni';
    const isConfig = variant === 'config';

    const CardContent = () => (
        <>
            {/* Animated Scan Line */}
            <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-500
                ${isConfig ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
            `}>
                <div className={`scan-line 
                    ${isIA ? '!bg-neon-cyan !shadow-neon-cyan' : ''}
                    ${isMuni ? '!bg-neon-orange !shadow-neon-orange' : ''}
                    ${isConfig ? '!bg-neon-orange !shadow-neon-orange' : ''}
                `} />
            </div>

            <div className={`flex flex-col ${image ? 'md:flex-row' : ''} gap-3 md:gap-8 p-4 md:p-6 relative z-10`}>
                {/* Image Container */}
                {image && (
                    <div className={`w-full md:w-1/2 aspect-video bg-dark-base/50 rounded-lg overflow-hidden border border-neon-cyan/10 relative transition-colors duration-300
                        ${isConfig ? 'border-neon-orange/30' : 'group-hover:border-neon-cyan/30'}
                    `}>
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {isIA && <div className="laser-line" />}
                        {isMuni && <div className="laser-line !bg-neon-orange !shadow-neon-orange" />}
                        {isConfig && <div className="laser-line !bg-neon-orange !shadow-neon-orange" />}
                    </div>
                )}

                {/* Content */}
                <div className={`w-full ${image ? 'md:w-1/2' : ''} flex flex-col justify-center`}>
                    <div className="flex items-center justify-between gap-2 mb-2 md:mb-3">
                        <div className="flex items-center gap-2 md:gap-3">
                            <div className={`p-1.5 md:p-2 rounded-lg 
                                ${isIA || (image && !isMuni && !isConfig) ? 'bg-neon-cyan/10 text-neon-cyan' : ''}
                                ${isMuni ? 'bg-neon-orange/10 text-neon-orange' : ''}
                                ${isConfig ? 'bg-neon-orange/10 text-neon-orange' : ''}
                                ${!isIA && !isMuni && !isConfig && !image ? 'bg-neon-pink/10 text-neon-pink' : ''}
                            `}>
                                <Icon size={16} className={`${isIA || isMuni || isConfig ? 'animate-pulse' : ''} md:w-5 md:h-5`} />
                            </div>
                            <h3 className={`text-sm md:text-xl font-bold uppercase tracking-tight 
                                ${isIA ? 'text-neon-cyan shimmer-text' : ''}
                                ${isMuni ? 'text-neon-orange shimmer-text-orange' : ''}
                                ${isConfig ? 'text-neon-orange shimmer-text-orange' : ''}
                                ${!isIA && !isMuni && !isConfig ? 'bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent' : ''}
                            `}>
                                {title}
                            </h3>
                        </div>

                        {link && (
                            <motion.div
                                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className={`p-2 rounded-lg border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan shadow-[0_0_10px_rgba(0,251,255,0.2)]`}
                            >
                                <ExternalLink size={18} strokeWidth={2.5} />
                            </motion.div>
                        )}
                    </div>
                    <p className="text-white/50 leading-tight md:leading-relaxed text-[11px] md:text-base">
                        {description}
                    </p>
                </div>
            </div>

            {/* Interactive Hover Glow (Persistent for Config) */}
            <div className={`absolute -bottom-4 -right-4 w-16 h-16 blur-2xl rounded-full transition-colors 
                ${isIA ? 'bg-neon-cyan/5 group-hover:bg-neon-cyan/20' : ''}
                ${isMuni ? 'bg-neon-orange/5 group-hover:bg-neon-orange/20' : ''}
                ${isConfig ? 'bg-neon-orange/20' : ''} 
                ${!isIA && !isMuni && !isConfig ? 'bg-white/5 group-hover:bg-neon-cyan/10' : ''}
            `} />
        </>
    );

    if (link) {
        return (
            <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay }}
                className={`relative group block w-full mx-auto mb-4 p-[1px] border border-white/5 rounded-xl glass-morphism overflow-hidden cursor-pointer
                    ${compact ? 'lg:max-w-none' : 'lg:max-w-4xl'} 
                    ${isIA ? 'glitch-border ia-pulse' : ''}
                    ${isMuni ? 'glitch-border-orange muni-pulse' : ''}
                    ${isConfig ? 'glitch-border-orange muni-pulse' : ''}
                `}
            >
                <CardContent />
            </motion.a>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`relative group w-full mx-auto mb-4 p-[1px] border border-white/5 rounded-xl glass-morphism overflow-hidden 
                ${compact ? 'lg:max-w-none' : 'lg:max-w-4xl'} 
                ${isIA ? 'glitch-border ia-pulse' : ''}
                ${isMuni ? 'glitch-border-orange muni-pulse' : ''}
                ${isConfig ? 'glitch-border-orange muni-pulse' : ''}
            `}
        >
            <CardContent />
        </motion.div>
    );
};

export default StepCard;
