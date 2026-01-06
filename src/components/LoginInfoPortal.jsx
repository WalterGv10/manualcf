import React from "react";
import {
    X, LayoutGrid, Cpu, Smartphone, Shield, Rocket,
    CheckCircle, Info, Layers, Database, Eye, FileText,
    BarChart3, Globe, Monitor, Printer, Terminal,
    AlertCircle
} from "lucide-react";
import MatrixRain from "./MatrixRain";

import PresentationV2 from "./PresentationV2";

import { motion } from "framer-motion";

const TechContent = () => (
    <div className="space-y-6 md:space-y-10 text-white relative z-10 p-4 md:p-8">
        <header className="flex flex-col md:flex-row justify-between items-center border-b border-[#00ff41]/20 pb-4 gap-4">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#00ff41]/10 rounded-lg flex items-center justify-center text-[#00ff41]">
                    <Cpu size={24} />
                </div>
                <div>
                    <h2 className="text-2xl font-black font-orbitron text-white">Control<span className="text-[#00ff41]">FAC</span></h2>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">Especificaciones Técnicas</p>
                </div>
            </div>
            <div className="px-3 py-1 rounded-full border border-[#00ff41]/50 bg-[#00ff41]/5 text-[#00ff41] text-[10px] font-bold font-orbitron">
                v2.1.0 (Stable)
            </div>
        </header>

        {/* SECCIÓN 1: ARQUITECTURA & TECNOLOGÍAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <section>
                <h3 className="flex items-center gap-2 text-[#00ff41] font-orbitron text-sm mb-4">
                    <Layers size={18} /> Arquitectura
                </h3>
                <div className="space-y-3 bg-black/40 p-4 rounded-xl border border-white/5">
                    {[
                        { label: "Tipo de Aplicación", val: "SPA (Single Page Application)" },
                        { label: "Frontend Framework", val: "React 19 + Vite" },
                        { label: "Base de Datos", val: "PostgreSQL (Supabase)" },
                        { label: "Autenticación", val: "Google OAuth 2.0 / JWT" },
                        { label: "Almacenamiento", val: "Bucket Cloud (Imágenes)" }
                    ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center text-[11px] border-b border-white/5 pb-2 last:border-0 last:pb-0">
                            <span className="text-white/40">{item.label}</span>
                            <span className="text-white font-medium text-right">{item.val}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h3 className="flex items-center gap-2 text-[#00ff41] font-orbitron text-sm mb-4">
                    <Terminal size={18} /> Tecnologías Clave
                </h3>
                <div className="flex flex-wrap gap-2">
                    {[
                        { name: "React.js", icon: Rocket },
                        { name: "PostgreSQL", icon: Database },
                        { name: "Tesseract.js", icon: Eye },
                        { name: "jsPDF", icon: FileText },
                        { name: "Lucide Icons", icon: BarChart3 },
                        { name: "Google Auth", icon: Shield }
                    ].map(({ name, icon: Icon }, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-lg text-[10px] text-white/80">
                            <Icon size={14} className="text-[#00ff41]" />
                            {name}
                        </div>
                    ))}
                </div>
                <p className="mt-4 text-[10px] text-white/30 italic">Librerías principales utilizadas en el ciclo de vida del desarrollo.</p>
            </section>
        </div>

        {/* SECCIÓN 2: REQUISITOS DE SISTEMA */}
        <section>
            <h3 className="flex items-center gap-2 text-[#00ff41] font-orbitron text-sm mb-4">
                <Smartphone size={18} /> Compatibilidad de Sistema
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/40 p-5 rounded-xl border border-white/5">
                    <h4 className="text-white font-bold text-xs mb-3 uppercase tracking-wider flex items-center gap-2">
                        <Smartphone size={14} /> Dispositivos Móviles
                    </h4>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-[11px]">
                            <span className="text-white/40">Android</span>
                            <span className="text-white">Versión 8.0 (Oreo) o superior</span>
                        </div>
                        <div className="flex justify-between items-center text-[11px]">
                            <span className="text-white/40">iOS</span>
                            <span className="text-white">iOS 13.0 o superior</span>
                        </div>
                        <div className="flex justify-between items-center text-[11px]">
                            <span className="text-white/40">Cámara</span>
                            <span className="text-white font-bold text-[#00ff41]">Mínimo 5MP</span>
                        </div>
                    </div>
                </div>
                <div className="bg-black/40 p-5 rounded-xl border border-white/5">
                    <h4 className="text-white font-bold text-xs mb-3 uppercase tracking-wider flex items-center gap-2">
                        <Monitor size={14} /> Escritorio (Web)
                    </h4>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-[11px]">
                            <span className="text-white/40">Windows</span>
                            <span className="text-white">Windows 10 / 11</span>
                        </div>
                        <div className="flex justify-between items-center text-[11px]">
                            <span className="text-white/40">macOS</span>
                            <span className="text-white">Catalina o superior</span>
                        </div>
                        <div className="flex justify-between items-center text-[11px]">
                            <span className="text-white/40">Linux</span>
                            <span className="text-white">Distribución moderna</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* SECCIÓN 3: NAVEGADORES */}
        <section className="bg-black/20 border border-white/5 rounded-xl overflow-hidden">
            <div className="p-4 bg-white/5 border-b border-white/5 flex items-center justify-between">
                <h3 className="flex items-center gap-2 text-[#00ff41] font-orbitron text-sm">
                    <Globe size={18} /> Navegadores Soportados
                </h3>
                <Info size={14} className="text-white/20" />
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-[11px]">
                    <thead>
                        <tr className="text-white/40 border-b border-white/5">
                            <th className="p-4 font-medium uppercase tracking-widest text-[9px]">Navegador</th>
                            <th className="p-4 font-medium uppercase tracking-widest text-[9px]">Versión Mín.</th>
                            <th className="p-4 font-medium uppercase tracking-widest text-[9px]">Estado</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {[
                            { browser: "Google Chrome", ver: "v90+", status: "Soportado", ok: true },
                            { browser: "Microsoft Edge", ver: "v90+", status: "Soportado", ok: true },
                            { browser: "Apple Safari", ver: "v14+", status: "Soportado", ok: true },
                            { browser: "Mozilla Firefox", ver: "v88+", status: "Soportado", ok: true },
                            { browser: "Internet Explorer", ver: "Todas", status: "No Soportado", ok: false }
                        ].map((row, i) => (
                            <tr key={i} className="hover:bg-white/[0.02]">
                                <td className="p-4 font-medium">{row.browser}</td>
                                <td className="p-4 text-white/60">{row.ver}</td>
                                <td className="p-4">
                                    <span className={`flex items-center gap-1.5 ${row.ok ? 'text-[#00ff41]' : 'text-red-500'}`}>
                                        {row.ok ? <CheckCircle size={12} /> : <AlertCircle size={12} />}
                                        {row.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>

        <div className="flex items-center justify-center pt-4">
            <button
                onClick={() => window.print()}
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#00ff41] text-black font-bold font-orbitron text-[10px] uppercase hover:bg-[#00cc33] transition-colors shadow-[0_0_20px_rgba(0,255,65,0.3)]"
            >
                <Printer size={16} /> Imprimir Ficha Técnica
            </button>
        </div>
    </div>
);

export default function LoginInfoPortal({ isOpen, onClose, view }) {
    const isPresentation = view === "presentation";

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-2 bg-black/90 backdrop-blur-md"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0, rotateX: 10 }}
                animate={{ scale: 1, y: 0, opacity: 1, rotateX: 0 }}
                exit={{ scale: 0.95, y: 10, opacity: 0, rotateX: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`relative w-full ${isPresentation ? 'max-w-[1200px] h-[90vh]' : 'max-w-4xl max-h-[95vh]'} overflow-hidden bg-black border border-[#00ff41]/30 rounded-xl flex flex-col shadow-[0_0_50px_rgba(0,255,65,0.2)] transition-all duration-300`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="absolute inset-0 pointer-events-none">
                    <MatrixRain />
                </div>

                <button
                    className="absolute top-2 right-2 z-50 text-white/50 hover:text-[#00ff41] p-2"
                    onClick={onClose}
                >
                    <X size={20} />
                </button>

                <div className={`flex-1 overflow-y-auto custom-scrollbar relative z-10 ${isPresentation ? '' : 'mt-6 pb-6'}`}>
                    {isPresentation ? <PresentationV2 /> : <TechContent />}
                </div>

                {!isPresentation && (
                    <footer className="p-3 border-t border-[#00ff41]/10 text-center relative z-10 bg-black/90">
                        <p className="text-[8px] font-orbitron text-white/20 tracking-[0.2em]">© Walter Garcia - Documento de uso interno.</p>
                    </footer>
                )}
            </motion.div>
        </motion.div>
    );
}
