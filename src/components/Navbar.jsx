import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutDashboard, Camera, User, FileText, MapPin, ShieldCheck } from 'lucide-react';

const Navbar = () => {
    const navItems = [
        { name: 'Inicio', path: '/', icon: LayoutDashboard },
        { name: 'Paso 1', path: '/tutorial/perfil', icon: ShieldCheck, specialized: true },
        { name: 'SAT', path: '/tutorial/escaneo', icon: Camera },
        { name: 'Recibos', path: '/tutorial/municipales', icon: MapPin },
        { name: 'Rpt', path: '/tutorial/reportes', icon: FileText },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-[80] px-2 py-2 md:px-6 md:py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between glass-morphism px-3 md:px-8 py-2 md:py-3 rounded-xl md:rounded-2xl border-white/5 shadow-2xl">
                <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-11 md:h-11 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,243,255,0.4)] overflow-hidden border border-neon-cyan/20">
                        <img src="/logo.png" alt="ControlFAC Logo" className="w-full h-full object-contain" />
                    </div>
                    <div className="hidden sm:block">
                        <h1 className="text-sm md:text-xl font-black tracking-tighter uppercase font-orbitron">Control<span className="text-neon-cyan">FAC</span></h1>
                    </div>
                </div>

                <div className="flex items-center gap-1 md:gap-8">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => `
                                flex items-center gap-1 md:gap-2 text-[9px] md:text-sm font-medium transition-all duration-300 relative py-1 px-1 md:px-0
                                ${isActive ? 'text-neon-cyan' : 'text-white/40 hover:text-white'}
                                ${item.specialized ? 'text-neon-pink' : ''}
                            `}
                        >
                            {({ isActive }) => (
                                <>
                                    <item.icon size={14} className="md:w-[18px] md:h-[18px]" />
                                    <span className={`${item.specialized ? 'inline' : 'hidden lg:inline'}`}>{item.name}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-underline"
                                            className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-cyan rounded-full"
                                        />
                                    )}
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
