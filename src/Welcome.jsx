import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Rocket, Cpu, ShieldCheck, ArrowRight } from 'lucide-react';
import PixelBlast from './components/PixelBlast';
import LoginInfoPortal from './components/LoginInfoPortal';

const Welcome = () => {
    const [portalOpen, setPortalOpen] = useState(false);
    const [portalView, setPortalView] = useState('presentation');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const openPortal = (view) => {
        setPortalView(view);
        setPortalOpen(true);
    };

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0, scale: 0.95 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <div className="min-h-screen pt-16 md:pt-32 px-4 md:px-6 flex flex-col items-center justify-center text-center overflow-hidden relative">
            <div className="absolute inset-0 z-0">
                <PixelBlast
                    variant="circle"
                    pixelSize={isMobile ? 4 : 5}
                    color="#B19EEF"
                    patternScale={isMobile ? 3 : 3.5}
                    patternDensity={isMobile ? 1.5 : 1.2}
                    pixelSizeJitter={0.5}
                    enableRipples={true}
                    rippleSpeed={0.5}
                    rippleThickness={isMobile ? 0.08 : 0.1}
                    rippleIntensityScale={1.8}
                    liquid={!isMobile}
                    antialias={!isMobile}
                    liquidStrength={0.15}
                    liquidRadius={1.2}
                    liquidWobbleSpeed={5}
                    speed={isMobile ? 0.3 : 0.6}
                    edgeFade={0.2}
                    transparent={true}
                />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-xl md:max-w-4xl w-full relative z-10 flex flex-col items-center"
            >
                <motion.span
                    variants={itemVariants}
                    className="px-3 py-1 rounded-full border border-neon-pink/30 bg-neon-pink/5 text-neon-pink text-[9px] md:text-xs font-orbitron uppercase tracking-widest mb-4 inline-block animate-pulse"
                >
                    ⚠️ Requisito Inicial Obligatorio
                </motion.span>

                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-9xl font-black tracking-tighter uppercase mb-2 md:mb-6 leading-[0.85] md:leading-[0.9] drop-shadow-2xl"
                >
                    CONTROL<span className="text-neon-cyan drop-shadow-[0_0_20px_rgba(0,243,255,0.6)]">FAC</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-sm md:text-2xl text-white/70 mb-8 md:mb-12 max-w-md md:max-w-2xl mx-auto leading-relaxed font-light"
                >
                    Para reportes óptimos, el
                    <span className="text-neon-pink font-bold drop-shadow-[0_0_8px_rgba(255,0,127,0.5)]"> PASO 1 </span>
                    es configurar tus firmas.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center gap-6 md:gap-8 w-full"
                >
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-xs sm:max-w-none">
                        <Link to="/tutorial/perfil" className="w-full sm:w-auto">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,0,127,0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-neon-pink text-white px-6 md:px-10 py-4 md:py-6 rounded-xl font-orbitron font-bold text-sm md:text-lg uppercase flex items-center justify-center gap-2 border border-neon-pink/50 shadow-[0_0_15px_rgba(255,0,127,0.3)] transition-all duration-300 relative overflow-hidden group"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    1. Firmas
                                    <ShieldCheck size={20} className="md:w-6 md:h-6" />
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            </motion.button>
                        </Link>

                        <Link to="/tutorial/escaneo" className="w-full sm:w-auto">
                            <motion.button
                                whileHover={{ scale: 1.05, borderColor: "rgba(0, 243, 255, 0.8)", boxShadow: "0 0 20px rgba(0, 243, 255, 0.2)" }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-dark-base/80 backdrop-blur-sm border border-neon-cyan/30 text-neon-cyan px-6 md:px-10 py-4 md:py-6 rounded-xl font-orbitron font-bold text-sm md:text-lg uppercase flex items-center justify-center gap-2 hover:bg-neon-cyan/10 transition-all duration-300"
                            >
                                Tutorial
                                <ArrowRight size={20} className="md:w-6 md:h-6" />
                            </motion.button>
                        </Link>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 border-t border-white/10 pt-6 md:pt-8 w-full max-w-md mx-auto">
                        <button
                            onClick={() => openPortal('presentation')}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#00ff41]/30 bg-[#00ff41]/5 text-[#00ff41] font-orbitron text-[10px] md:text-xs uppercase tracking-wider hover:bg-[#00ff41]/15 hover:shadow-[0_0_10px_rgba(0,255,65,0.2)] transition-all duration-300"
                        >
                            <Rocket size={14} /> Presentación
                        </button>
                        <button
                            onClick={() => openPortal('tech')}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#00ff41]/30 bg-[#00ff41]/5 text-[#00ff41] font-orbitron text-[10px] md:text-xs uppercase tracking-wider hover:bg-[#00ff41]/15 hover:shadow-[0_0_10px_rgba(0,255,65,0.2)] transition-all duration-300"
                        >
                            <Cpu size={14} /> Ficha Técnica
                        </button>
                    </div>
                </motion.div>
            </motion.div>

            <LoginInfoPortal
                isOpen={portalOpen}
                onClose={() => setPortalOpen(false)}
                view={portalView}
            />
        </div>
    );
};

export default Welcome;
