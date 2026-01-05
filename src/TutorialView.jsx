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
        title: "Tickets Munis",
        description: "Respaldo para peajes (Iztapa) y parqueos.",
        steps: [
            {
                title: "Foto Obligatoria",
                description: "Única evidencia legal para tickets no-electrónicos.",
                icon: Image
            },
            {
                title: "Rutas y Peajes",
                description: "Registra Municipalidad y Punto de Servicio.",
                icon: MapPin
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

                <h2 className={`text-2xl md:text-5xl font-black mb-2 uppercase tracking-tighter ${data.isPrimary ? 'text-neon-pink' : 'text-neon-cyan'}`}>
                    {data.title}
                </h2>
                <p className="text-white/30 text-xs md:text-lg max-w-lg mx-auto leading-tight italic">
                    "{data.description}"
                </p>
            </div>

            {/* Interactive Layout for Paso 1 */}
            <div className={`flex flex-col ${data.heroImage ? 'lg:flex-row' : ''} gap-6 items-start justify-center`}>

                {/* Single Hero Image */}
                {data.heroImage && (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="w-full lg:w-1/2 max-w-md mx-auto aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 shadow-2xl relative group sticky lg:top-32"
                    >
                        <img src={data.heroImage} alt="Preview" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-4 left-4 right-4 p-4 glass-morphism rounded-xl border-white/10">
                            <p className="text-[10px] font-orbitron text-neon-pink uppercase mb-1">Entorno Real</p>
                            <p className="text-[9px] text-white/50 leading-none">Censura aplicada para protección de datos personales.</p>
                        </div>
                        <div className="scan-line !bg-neon-pink !opacity-40" />
                    </motion.div>
                )}

                {/* Steps Grid */}
                <div className={`w-full ${data.heroImage ? 'lg:w-1/2' : ''} grid grid-cols-1 gap-3`}>
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
                                delay={index * 0.05}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Dynamic Backgrounds */}
            <div className={`fixed top-1/2 left-1/4 w-64 h-64 ${data.isPrimary ? 'bg-neon-pink/10' : 'bg-neon-cyan/5'} blur-[100px] rounded-full -z-10 animate-pulse`} />
        </motion.div>
    );
};

export default TutorialView;
