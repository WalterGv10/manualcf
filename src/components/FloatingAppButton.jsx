import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ExternalLink } from 'lucide-react';

const FloatingAppButton = () => {
    return (
        <motion.a
            href="https://controlfac.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1, translateY: -5 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[120] flex items-center gap-3 p-1.5 pr-6 rounded-full bg-dark-base/80 backdrop-blur-xl border border-neon-cyan/30 text-white shadow-[0_0_30px_rgba(0,243,255,0.2)] md:hover:shadow-[0_0_50px_rgba(0,243,255,0.4)] transition-shadow duration-500 overflow-hidden group"
        >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-neon-cyan/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

            <div className="relative w-12 h-12 rounded-full bg-neon-cyan flex items-center justify-center text-black shadow-[0_0_15px_rgba(0,243,255,0.6)]">
                <Rocket size={24} className="group-hover:animate-bounce" />
            </div>

            <div className="flex flex-col relative">
                <span className="text-[10px] uppercase font-orbitron tracking-widest text-neon-cyan opacity-70 leading-none mb-1">Abrir App</span>
                <span className="text-sm font-black uppercase font-orbitron tracking-tighter leading-none">Control<span className="text-neon-cyan">FAC</span></span>
            </div>

            <ExternalLink size={14} className="ml-2 text-white/30 group-hover:text-neon-cyan transition-colors" />

            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        </motion.a>
    );
};

export default FloatingAppButton;
