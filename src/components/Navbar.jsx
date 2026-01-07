import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Camera, FileText, MapPin, ShieldCheck, Sparkles } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
                    setScrolled(currentScrollY > 20);
                    lastScrollY = currentScrollY;
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Inicio', path: '/', icon: LayoutDashboard },
        { name: 'Paso 1', path: '/tutorial/perfil', icon: ShieldCheck, priority: true },
        { name: 'SAT', path: '/tutorial/escaneo', icon: Camera },
        { name: 'Recibos', path: '/tutorial/municipales', icon: MapPin },
        { name: 'Rpt', path: '/tutorial/reportes', icon: FileText },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-2 py-2 md:px-8 
            ${scrolled ? 'md:py-4 mt-0' : 'md:py-6 mt-1'}
        `}>
            <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-xl md:rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden group
                ${scrolled ? 'bg-dark-base/80 backdrop-blur-2xl py-1.5 px-3 md:px-10 border-white/10 shadow-neon-cyan/5' : 'bg-dark-base/40 backdrop-blur-xl py-2 px-4 md:px-12 border-white/5'}
            `}>
                {/* Background Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                {/* Brand */}
                <NavLink to="/" className="flex items-center gap-2 md:gap-4 group/logo shrink-0">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`relative rounded-lg md:rounded-xl overflow-hidden transition-all duration-500 border border-neon-cyan/20
                            ${scrolled ? 'w-7 h-7 md:w-10 md:h-10' : 'w-8 h-8 md:w-14 md:h-14'}
                        `}
                    >
                        <img src="/logo.png" alt="ControlFAC Logo" className="w-full h-full object-contain bg-dark-base" />
                        <div className="absolute inset-0 bg-neon-cyan/10 opacity-0 group-logo:opacity-100 transition-opacity" />
                    </motion.div>
                    <div className="flex flex-col">
                        <h1 className={`font-black tracking-tighter uppercase font-orbitron transition-all duration-500 leading-none
                            ${scrolled ? 'text-[10px] md:text-lg' : 'text-xs md:text-2xl'}
                        `}>
                            Control<span className="text-neon-cyan drop-shadow-[0_0_10px_#00f3ff]">FAC</span>
                        </h1>
                        {!scrolled && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-[8px] md:text-[10px] text-white/30 uppercase tracking-[0.3em] font-orbitron"
                            >
                                User Manual 2026
                            </motion.span>
                        )}
                    </div>
                </NavLink>

                {/* Navigation */}
                <div className="flex items-center gap-1.5 md:gap-10">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => `
                                flex items-center gap-1 md:gap-2 text-[9px] md:text-base font-orbitron font-bold transition-all duration-300 relative py-2
                                ${isActive
                                    ? (item.priority ? 'text-neon-orange' : 'text-neon-cyan')
                                    : (item.priority ? 'text-white/40 hover:text-neon-orange' : 'text-white/40 hover:text-white')
                                }
                            `}
                        >
                            {({ isActive }) => (
                                <>
                                    <div className="relative">
                                        <item.icon size={scrolled ? 14 : 18} className={`transition-all duration-500
                                            ${isActive ? 'drop-shadow-[0_0_8px_currentColor]' : ''}
                                            ${item.priority && isActive ? 'animate-pulse' : ''}
                                        `} />
                                        {item.priority && isActive && (
                                            <Sparkles className="absolute -top-1.5 -right-1.5 text-neon-orange w-2.5 h-2.5 md:w-4 md:h-4 opacity-70" />
                                        )}
                                    </div>
                                    <span className={`transition-all duration-300 ${item.priority ? 'inline' : 'hidden sm:inline'}
                                        ${scrolled ? 'text-[8px] md:text-sm' : 'text-[9px] md:text-base'}
                                    `}>
                                        {item.name}
                                    </span>

                                    {/* Active Indicator Underline */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-glow"
                                                className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full
                                                    ${item.priority ? 'bg-neon-orange shadow-[0_0_10px_#ff9100]' : 'bg-neon-cyan shadow-[0_0_10px_#00f3ff]'}
                                                `}
                                                initial={{ opacity: 0, scaleX: 0 }}
                                                animate={{ opacity: 1, scaleX: 1 }}
                                                exit={{ opacity: 0, scaleX: 0 }}
                                            />
                                        )}
                                    </AnimatePresence>
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
