import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Camera, User, FileText, Scan, FileCode, CheckCircle,
    PenTool, CreditCard, PieChart, FileDown, ShieldCheck,
    MapPin, Image, Edit3, ClipboardList, AlertTriangle, Fingerprint
} from 'lucide-react';
import StepCard from './components/StepCard';

// Capturas de pantalla
import perfilImg from './assets/perfil_config.png';
import recibosImg from './assets/recibos_municipales.png';

const content = {
    perfil: {
        title: "1. CONFIGURACIÓN",
        description: "Configuración esencial para que el sistema genere tus reportes PDF.",
        isPrimary: true,
        heroImage: perfilImg,
        steps: [
            {
                title: "Autoridades Vo.Bo.",
                description: "Configura Coordinador y Secretaria para el pie de firma automático.",
                icon: ShieldCheck
            },
            {
                title: "Firma Digital",
                description: "Sube tu firma sobre fondo blanco. (Opcional)",
                icon: PenTool
            },
            {
                title: "División Técnica",
                description: "Define tu área operativa para clasificación jerárquica.",
                icon: FileCode
            },
            {
                title: "Banco Industrial",
                description: "Registra tu cuenta BI para reembolsos directos seguros.",
                icon: CreditCard
            }
        ]
    },
    escaneo: {
        title: "Escaneo SAT",
        description: "Digitalización de facturas legales en tiempo real con OCR.",
        showScanner: true,
        steps: [
            {
                title: "Captura con IA",
                description: "Extrae NIT, Serie y DTE automáticamente.",
                icon: Camera
            },
            {
                title: "Reimpresión SAT",
                description: "Rastrea y descarga facturas desde el portal oficial.",
                icon: FileText
            },
            {
                title: "Edición Manual",
                description: "Ajusta montos para una auditoría perfecta.",
                icon: Edit3
            },
            {
                title: "Backup Digital",
                description: "Formulario de respaldo si falla el escaneo.",
                icon: ClipboardList
            }
        ]
    },
    reportes: {
        title: "Reportes PDF",
        description: "Documentos 'llave en mano' listos para contabilidad.",
        steps: [
            {
                title: "PDF Automatizado",
                description: "Incluye firmas y datos del Paso 1 automáticamente.",
                icon: FileDown
            },
            {
                title: "Dashboard Anual",
                description: "Métricas de gasto acumulado y promedios.",
                icon: PieChart
            },
            {
                title: "Gráficas Mensuales",
                description: "Desglose por monto y cantidad de documentos.",
                icon: FileText
            }
        ]
    },
    municipales: {
        title: "Recibos Municipales",
        description: "Gestión especializada para gastos no-electrónicos (Peajes y Parqueos).",
        heroImage: recibosImg,
        isMuni: true,
        steps: [
            {
                title: "Foto Obligatoria",
                description: "Única evidencia legal para tickets no-reimprimibles.",
                icon: Image
            },
            {
                title: "Entidad Municipal",
                description: "Registra la ubicación (ej. Iztapa) y el Punto de Servicio.",
                icon: MapPin
            },
            {
                title: "Clasificación Gasto",
                description: "Divide entre Peaje o Parqueo para un reporte ordenado.",
                icon: ClipboardList
            }
        ]
    }
};

const TutorialView = () => {
    const { section } = useParams();
    const data = content[section];

    if (!data) return <Navigate to="/" />;

    return (
        <motion.div
            key={section}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen pt-16 md:pt-24 pb-10 px-4 md:px-6 max-w-7xl mx-auto"
        >
            {/* Header */}
            <div className="mb-6 text-center">
                <AnimatePresence mode="wait">
                    {data.isPrimary && (
                        <motion.div
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="flex items-center justify-center gap-2 text-neon-pink mb-2 font-orbitron text-[10px] uppercase tracking-[0.2em]"
                        >
                            <Fingerprint size={14} className="animate-pulse" />
                            Acción Prioritaria
                        </motion.div>
                    )}
                </AnimatePresence>

                <h2 className={`text-2xl md:text-5xl font-black mb-2 uppercase tracking-tighter 
                    ${data.isPrimary ? 'text-neon-pink' : ''}
                    ${data.isMuni ? 'text-neon-orange text-shadow-orange' : ''}
                    ${!data.isPrimary && !data.isMuni ? 'text-neon-cyan' : ''}
                `}>
                    {data.title}
                </h2>
                <p className="text-white/30 text-xs md:text-lg max-w-lg mx-auto leading-tight italic">
                    "{data.description}"
                </p>
            </div>

            {/* Interactive Layout */}
            <div className={`flex flex-col ${data.heroImage || data.showScanner ? 'lg:flex-row' : ''} gap-6 items-start justify-center`}>

                {/* Single Hero Image or Scanner */}
                {(data.heroImage || data.showScanner) && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`w-full lg:w-1/2 max-w-md mx-auto aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 shadow-2xl relative group sticky lg:top-32 bg-dark-base/40
                            ${data.isMuni ? 'border-neon-orange/20 shadow-neon-orange/10' : ''}
                        `}
                    >
                        {data.heroImage ? (
                            <>
                                <img src={data.heroImage} alt="Preview" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-4 left-4 right-4 p-4 glass-morphism rounded-xl border-white/10">
                                    <p className={`text-[10px] font-orbitron uppercase mb-1 ${data.isMuni ? 'text-neon-orange' : 'text-neon-pink'}`}>Entorno Real</p>
                                    <p className="text-[9px] text-white/50 leading-none">Vista móvil optimizada para técnicos en campo.</p>
                                </div>
                                <div className={`scan-line !opacity-40 
                                    ${data.isMuni ? '!bg-neon-orange !shadow-neon-orange' : '!bg-neon-pink'}
                                `} />
                            </>
                        ) : data.showScanner ? (
                            <div className="w-full h-full flex flex-col items-center justify-center relative p-8">
                                <div className="w-full h-full border-2 border-neon-cyan/20 border-dashed rounded-xl flex items-center justify-center flex-col gap-4 bg-neon-cyan/5 relative overflow-hidden">
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.05, 1],
                                            opacity: [0.3, 0.6, 0.3]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <Camera size={64} className="text-neon-cyan" />
                                    </motion.div>
                                    <div className="text-center z-10">
                                        <p className="font-orbitron text-neon-cyan text-xs uppercase tracking-widest mb-1">Modo OCR Activo</p>
                                        <p className="text-[9px] text-white/40 uppercase">Esperando Captura de Pantalla...</p>
                                    </div>

                                    {/* Laser Scanner Effect */}
                                    <div className="laser-line" />

                                    {/* Holographic grid */}
                                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--neon-cyan) 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />
                                </div>
                                <div className="absolute top-4 left-4 flex gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                    <span className="text-[8px] font-orbitron text-red-500">REC</span>
                                </div>
                            </div>
                        ) : null}
                    </motion.div>
                )}

                {/* Steps Grid */}
                <div className={`w-full ${(data.heroImage || data.showScanner) ? 'lg:w-1/2' : ''} grid grid-cols-1 gap-3`}>
                    {data.steps.map((step, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ x: 5 }}
                            className="w-full"
                        >
                            <StepCard
                                title={step.title}
                                description={step.description}
                                icon={step.icon}
                                image={step.image}
                                compact={true}
                                variant={data.showScanner ? 'ia' : (data.isMuni ? 'muni' : 'default')}
                                delay={index * 0.05}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Dynamic Backgrounds */}
            <div className={`fixed top-1/2 left-1/4 w-64 h-64 
                ${data.isPrimary ? 'bg-neon-pink/10' : ''} 
                ${data.isMuni ? 'bg-neon-orange/10' : ''}
                ${!data.isPrimary && !data.isMuni ? 'bg-neon-cyan/5' : ''}
                blur-[100px] rounded-full -z-10 animate-pulse
            `} />
        </motion.div>
    );
};

export default TutorialView;
