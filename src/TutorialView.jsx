import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Camera, User, FileText, Scan, FileCode, CheckCircle,
    PenTool, CreditCard, PieChart, FileDown, ShieldCheck,
    MapPin, Image, Edit3, ClipboardList, AlertTriangle, Fingerprint,
    ArrowLeft, ArrowRight, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import StepCard from './components/StepCard';

// Capturas de pantalla
import perfilImg from './assets/perfil_config.png';
import recibosImg from './assets/recibos_municipales.png';
import escaneoImg from './assets/escaneo_sat.png';
import deteccionImg from './assets/deteccion_ia.png';
import moduReportesImg from './assets/modu_reportes.png';
import vistaReporteImg from './assets/vista_reporte.png';
import pdfFinalImg from './assets/pdf_final.png';

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
                description: "Define tu área operativa (Cajeros Automáticos, Soporte Agencias, Comunicaciones WAN o Telefonía) para clasificación jerárquica.",
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
        description: "Detección automática de NIT, Fecha, Serie, DTE y Monto en tiempo real.",
        heroImage: escaneoImg,
        showScanner: true,
        steps: [
            {
                title: "Escáner Láser",
                description: "Scanner especial para papel térmico y tickets antiguos u oscuros. Aplica filtros de mejora.",
                icon: Camera
            },
            {
                title: "Modo Natural",
                description: "Alta definición para imágenes con claridad óptima. Extracción pura sin filtros adicionales.",
                icon: Scan
            },
            {
                title: "Modo Digital",
                description: "Procesamiento de archivos PDF para facturas electrónicas FEL con precisión absoluta.",
                icon: FileCode
            },
            {
                title: "Reimpresión SAT",
                description: "Portal oficial para rastreo y descarga de documentos. Acceso directo al verificador de la SAT adjunto en esta tarjeta.",
                icon: FileText,
                link: "https://portal.sat.gob.gt/portal/verificador-integrado/"
            }
        ]
    },
    reportes: {
        title: "Reportes PDF",
        description: "Visualización de estados, cierres y documentos 'llave en mano'.",
        steps: [
            {
                title: "Reporte Mensual",
                description: "Cierre de caja y totales del mes con detalle de gastos preciso.",
                icon: FileText,
                image: vistaReporteImg
            },
            {
                title: "PDF Automatizado",
                description: "Generación instantánea del documento oficial con firmas y Vo.Bo. integrados.",
                icon: FileDown,
                image: pdfFinalImg
            },
            {
                title: "Reporte Anual",
                description: "Comparativa histórica de consumos para análisis de presupuesto y proyecciones.",
                icon: PieChart
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
    const sections = ['perfil', 'escaneo', 'reportes', 'municipales'];
    const currentIndex = sections.indexOf(section);

    const prevSection = currentIndex > 0 ? sections[currentIndex - 1] : null;
    const nextSection = currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;

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
                            className="flex items-center justify-center gap-2 text-neon-orange mb-2 font-orbitron text-[10px] uppercase tracking-[0.2em]"
                        >
                            <Fingerprint size={14} className="animate-pulse" />
                            Acción Prioritaria
                        </motion.div>
                    )}
                </AnimatePresence>

                <h2 className={`text-2xl md:text-5xl font-black mb-2 uppercase tracking-tighter 
                    ${data.isPrimary ? 'text-neon-orange text-shadow-orange' : ''}
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
                            ${data.isPrimary ? 'border-neon-orange/20 shadow-neon-orange/10' : ''}
                        `}
                    >
                        {data.heroImage ? (
                            <div className="relative w-full h-full group overflow-hidden">
                                <img
                                    src={data.heroImage}
                                    alt="Preview"
                                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105
                                        ${!data.isMuni && !data.isPrimary ? 'brightness-[1.15] contrast-[1.1] saturate-[1.2]' : ''}
                                    `}
                                />

                                {/* Overlay Effects */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />

                                {/* CRT Scanlines Effect */}
                                <div className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-overlay"
                                    style={{
                                        backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
                                        backgroundSize: '100% 2px, 3px 100%'
                                    }}
                                />

                                {data.showScanner && (
                                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                        {/* Laser Scanner Effect Overlay */}
                                        <div className="laser-line !bg-neon-cyan !shadow-[0_0_25px_rgba(0,251,255,0.8)] z-20" />

                                        {/* Digital overlay grid */}
                                        <div className="absolute inset-0 opacity-[0.07]"
                                            style={{ backgroundImage: 'radial-gradient(var(--neon-cyan) 1px, transparent 1px)', backgroundSize: '30px 30px' }}
                                        />

                                        {/* Corner markers */}
                                        <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-neon-cyan/40" />
                                        <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-neon-cyan/40" />
                                        <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-neon-cyan/40" />
                                        <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-neon-cyan/40" />
                                    </div>
                                )}


                                <div className={`scan-line !opacity-20 
                                    ${data.isMuni ? '!bg-neon-orange !shadow-neon-orange' : ''}
                                    ${data.isPrimary ? '!bg-neon-orange !shadow-neon-orange' : '!bg-neon-pink'}
                                `} />
                            </div>
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
                                link={step.link}
                                compact={true}
                                variant={data.showScanner ? 'ia' : (data.isMuni ? 'muni' : (data.isPrimary ? 'config' : 'default'))}
                                delay={index * 0.05}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Pagination Controls */}
            <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-8 max-w-4xl mx-auto w-full">
                <div className="w-1/2 flex justify-start">
                    {prevSection ? (
                        <Link to={`/tutorial/${prevSection}`} className="group">
                            <motion.div
                                whileHover={{ x: -5 }}
                                className="flex flex-col items-start gap-1"
                            >
                                <span className="text-[10px] uppercase font-orbitron text-white/30 tracking-widest pl-1">Anterior</span>
                                <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border border-white/5 bg-white/5 group-hover:border-white/20 transition-all`}>
                                    <ArrowLeft size={16} className="text-white/50 group-hover:text-white" />
                                    <span className="text-sm font-bold uppercase text-white/70 group-hover:text-white">{content[prevSection].title.split('. ')[1] || content[prevSection].title}</span>
                                </div>
                            </motion.div>
                        </Link>
                    ) : (
                        <Link to="/" className="group">
                            <motion.div
                                whileHover={{ x: -5 }}
                                className="flex flex-col items-start gap-1"
                            >
                                <span className="text-[10px] uppercase font-orbitron text-white/30 tracking-widest pl-1">Volver</span>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/5 bg-white/5 group-hover:border-white/20 transition-all">
                                    <ArrowLeft size={16} className="text-white/50 group-hover:text-white" />
                                    <span className="text-sm font-bold uppercase text-white/70 group-hover:text-white">Inicio</span>
                                </div>
                            </motion.div>
                        </Link>
                    )}
                </div>

                <div className="w-1/2 flex justify-end">
                    {nextSection && (
                        <Link to={`/tutorial/${nextSection}`} className="group">
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex flex-col items-end gap-1"
                            >
                                <span className="text-[10px] uppercase font-orbitron text-white/30 tracking-widest pr-1">Siguiente</span>
                                <div className={`flex items-center gap-2 px-6 py-2 rounded-lg border transition-all shadow-lg
                                    ${nextSection === 'escaneo' ? 'border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan shadow-neon-cyan/5 hover:bg-neon-cyan/10 hover:border-neon-cyan/50' : ''}
                                    ${nextSection === 'reportes' ? 'border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan shadow-neon-cyan/5 hover:bg-neon-cyan/10 hover:border-neon-cyan/50' : ''}
                                    ${nextSection === 'municipales' ? 'border-neon-orange/30 bg-neon-orange/5 text-neon-orange shadow-neon-orange/5 hover:bg-neon-orange/10 hover:border-neon-orange/50' : ''}
                                `}>
                                    <span className="text-sm font-black uppercase">{content[nextSection].title.split('. ')[1] || content[nextSection].title}</span>
                                    <ArrowRight size={16} className="animate-pulse" />
                                </div>
                            </motion.div>
                        </Link>
                    )}
                </div>
            </div>

            {/* Dynamic Backgrounds */}
            <div className={`fixed top-1/2 left-1/4 w-64 h-64 
                ${data.isPrimary ? 'bg-neon-orange/10' : ''} 
                ${data.isMuni ? 'bg-neon-orange/10' : ''}
                ${!data.isPrimary && !data.isMuni ? 'bg-neon-cyan/5' : ''}
                blur-[100px] rounded-full -z-10 animate-pulse
            `} />
        </motion.div>
    );
};

export default TutorialView;
