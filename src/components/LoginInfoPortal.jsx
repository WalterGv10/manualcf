import React from "react";
import { X, LayoutGrid, Cpu, Smartphone, Shield, Rocket, CheckCircle, Info } from "lucide-react";
import MatrixRain from "./MatrixRain";

export default function LoginInfoPortal({ isOpen, onClose, view }) {
    if (!isOpen) return null;

    const PresentationContent = () => (
        <div className="space-y-4 md:space-y-8 text-white relative z-10 p-4 md:p-8">
            <header className="text-center space-y-1">
                <Rocket className="w-8 h-8 md:w-12 md:h-12 text-[#00ff41] mx-auto mb-2" />
                <h2 className="text-xl md:text-3xl font-black font-orbitron text-[#00ff41]">ControlFAC</h2>
                <p className="text-white/40 uppercase tracking-widest text-[8px] md:text-sm">Gestión Automatizada</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                <section className="glass-morphism p-4 md:p-6 rounded-xl border-[#00ff41]/20">
                    <h3 className="flex items-center gap-2 text-[#00ff41] font-orbitron text-xs md:text-sm mb-2">
                        <CheckCircle size={14} /> El Objetivo
                    </h3>
                    <p className="text-white/70 text-[11px] md:text-sm leading-relaxed">
                        Automatizar el control anual y mensual preciso de gastos de parqueo para técnicos en campo.
                    </p>
                </section>

                <section className="glass-morphism p-4 md:p-6 rounded-xl border-[#00ff41]/20">
                    <h3 className="flex items-center gap-2 text-[#00ff41] font-orbitron text-xs md:text-sm mb-2">
                        <LayoutGrid size={14} /> Gestión CRUD
                    </h3>
                    <ul className="text-white/70 text-[11px] space-y-1 md:space-y-2">
                        <li><strong>Visualizar:</strong> Historial en tiempo real.</li>
                        <li><strong>Editar:</strong> Corrige montos antes del corte.</li>
                        <li><strong>Borrar:</strong> Elimina duplicados fácilmente.</li>
                    </ul>
                </section>

                <section className="glass-morphism p-4 md:p-6 rounded-xl border-[#00ff41]/20">
                    <h3 className="flex items-center gap-2 text-[#00ff41] font-orbitron text-xs md:text-sm mb-2">
                        <Smartphone size={14} /> Funciones IA
                    </h3>
                    <p className="text-white/70 text-[11px] leading-relaxed">
                        Reimpresión SAT vía OCR y respaldo fotográfico obligatorio para tickets municipales.
                    </p>
                </section>

                <section className="glass-morphism p-4 md:p-6 rounded-xl border-[#00ff41]/20">
                    <h3 className="flex items-center gap-2 text-[#00ff41] font-orbitron text-xs md:text-sm mb-2">
                        <Shield size={14} /> Seguridad
                    </h3>
                    <p className="text-white/70 text-[11px] leading-relaxed">
                        Auth vía Google Token (JWT). Tu contraseña personal es privada. Infraestructura en la nube.
                    </p>
                </section>
            </div>
        </div>
    );

    const TechContent = () => (
        <div className="space-y-6 md:space-y-8 text-white relative z-10 p-4 md:p-8">
            <header className="text-center space-y-1">
                <Cpu className="w-8 h-8 md:w-12 md:h-12 text-[#00ff41] mx-auto mb-2" />
                <h2 className="text-xl md:text-3xl font-black font-orbitron text-[#00ff41]">Ficha Técnica</h2>
            </header>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <section className="space-y-2">
                    <h3 className="text-[#00ff41] font-orbitron text-xs border-b border-[#00ff41]/20 pb-1">Arquitectura</h3>
                    <ul className="space-y-2">
                        <li className="flex justify-between text-[11px]"><span className="text-white/40">React:</span> <span>19 + Vite</span></li>
                        <li className="flex justify-between text-[11px]"><span className="text-white/40">DB:</span> <span>Supabase</span></li>
                        <li className="flex justify-between text-[11px]"><span className="text-white/40">IA:</span> <span>Tesseract.js</span></li>
                    </ul>
                </section>

                <section className="space-y-2">
                    <h3 className="text-[#00ff41] font-orbitron text-xs border-b border-[#00ff41]/20 pb-1">Requisitos</h3>
                    <ul className="space-y-2">
                        <li className="flex justify-between text-[11px]"><span className="text-white/40">Android:</span> <span>8.0+</span></li>
                        <li className="flex justify-between text-[11px]"><span className="text-white/40">iOS:</span> <span>13.0+</span></li>
                        <li className="flex justify-between text-[11px]"><span className="text-white/40">Cámara:</span> <span>5MP+</span></li>
                    </ul>
                </section>
            </div>

            <div className="bg-[#00ff41]/10 border border-[#00ff41]/30 p-3 rounded-lg flex items-start gap-2">
                <Info size={14} className="text-[#00ff41] mt-0.5 shrink-0" />
                <p className="text-[10px] text-[#00ff41]/80 leading-tight">
                    Se requiere internet estable para el procesamiento OCR y sincronización en la nube.
                </p>
            </div>
        </div>
    );

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-2 bg-black/90 backdrop-blur-md"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-4xl max-h-[95vh] overflow-hidden bg-black border border-[#00ff41]/30 rounded-xl flex flex-col shadow-[0_0_30px_rgba(0,255,65,0.1)]"
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

                <div className="flex-1 overflow-y-auto custom-scrollbar relative z-10 mt-6">
                    {view === "presentation" ? <PresentationContent /> : <TechContent />}
                </div>

                <footer className="p-3 border-t border-[#00ff41]/10 text-center relative z-10 bg-black/90">
                    <p className="text-[8px] font-orbitron text-white/20 tracking-[0.2em]">CONTROLFAC v2.0</p>
                </footer>
            </div>
        </div>
    );
}
