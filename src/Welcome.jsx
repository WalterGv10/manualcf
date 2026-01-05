import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Rocket, Cpu, ShieldCheck, ArrowRight } from 'lucide-react';
import MatrixBackground from './components/MatrixBackground';
import LoginInfoPortal from './components/LoginInfoPortal';

const Welcome = () => {
    const [portalOpen, setPortalOpen] = useState(false);
    const [portalView, setPortalView] = useState('presentation');

    const openPortal = (view) => {
        setPortalView(view);
        setPortalOpen(true);
    };

    return (
        <div className="min-h-screen pt-20 md:pt-32 px-4 md:px-6 flex flex-col items-center justify-center text-center overflow-hidden">
            <MatrixBackground />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-xl md:max-w-4xl w-full"
            >
                <span className="px-3 py-1 rounded-full border border-neon-pink/30 bg-neon-pink/5 text-neon-pink text-[9px] md:text-xs font-orbitron uppercase tracking-widest mb-4 inline-block animate-pulse">
                    ⚠️ Requisito Inicial Obligatorio
                </span>

                <h1 className="text-4xl md:text-8xl font-black tracking-tighter uppercase mb-4 md:mb-6 leading-[0.9]">
                    CONTROL<span className="text-neon-cyan drop-shadow-[0_0_15px_#00f3ff]">FAC</span>
                </h1>

                <p className="text-base md:text-2xl text-white/60 mb-8 md:mb-12 max-w-md md:max-w-2xl mx-auto leading-relaxed">
                    Para reportes óptimos, el
                    <span className="text-neon-pink font-bold"> PASO 1 </span>
                    es configurar tus firmas.
                </p>

                <div className="flex flex-col items-center gap-6 md:gap-8">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-xs sm:max-w-none">
                        <Link to="/tutorial/perfil" className="w-full sm:w-auto">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-neon-pink text-white px-6 md:px-10 py-4 md:py-6 rounded-xl font-orbitron font-bold text-sm md:text-lg uppercase flex items-center justify-center gap-2 border border-neon-pink/50 shadow-[0_0_15px_rgba(255,0,127,0.3)]"
                            >
                                1. Firmas
                                <ShieldCheck size={20} className="md:w-6 md:h-6" />
                            </motion.button>
                        </Link>

                        <Link to="/tutorial/escaneo" className="w-full sm:w-auto">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-dark-base border border-neon-cyan/30 text-neon-cyan px-6 md:px-10 py-4 md:py-6 rounded-xl font-orbitron font-bold text-sm md:text-lg uppercase flex items-center justify-center gap-2 hover:bg-neon-cyan/5 transition-all"
                            >
                                Tutorial
                                <ArrowRight size={20} className="md:w-6 md:h-6" />
                            </motion.button>
                        </Link>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 border-t border-white/5 pt-6 md:pt-8 w-full">
                        <button
                            onClick={() => openPortal('presentation')}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#00ff41]/30 bg-[#00ff41]/5 text-[#00ff41] font-orbitron text-[10px] uppercase tracking-wider hover:bg-[#00ff41]/10 transition-colors"
                        >
                            <Rocket size={14} /> Presentación
                        </button>
                        <button
                            onClick={() => openPortal('tech')}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#00ff41]/30 bg-[#00ff41]/5 text-[#00ff41] font-orbitron text-[10px] uppercase tracking-wider hover:bg-[#00ff41]/10 transition-colors"
                        >
                            <Cpu size={14} /> Ficha Técnica
                        </button>
                    </div>
                </div>
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
