import React from 'react';
import './PresentationV2.css';

const PresentationV2 = () => {
    return (
        <div className="presentation-v2-container">
            {/* SLIDE 1: PORTADA */}
            <section>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ color: 'var(--neon-blue)', letterSpacing: '4px', fontWeight: 'bold', marginBottom: '10px' }}>
                        HERRAMIENTA INTERNA
                    </p>
                    <h1>ControlFAC</h1>
                    <p className="highlight" style={{ fontSize: '1.5rem' }}>Gestión Automatizada de Gastos Técnicos</p>
                    <div style={{ marginTop: '30px', display: 'inline-block', padding: '10px 25px', border: '1px solid var(--neon-turq)', borderRadius: '50px', color: 'var(--neon-turq)' }}>
                        Implementación Gratuita
                    </div>
                </div>
                <div className="scroll-hint">Desliza para comenzar ↓</div>
            </section>

            {/* SLIDE 2: OBJETIVO */}
            <section>
                <div className="content-wrapper">
                    <div className="text-box">
                        <h2>El Objetivo</h2>
                        <p>Mejorar la calidad de vida del técnico en campo.</p>
                        <br />
                        <p>Buscamos automatizar el proceso manual para permitirte llevar un <span className="neon-text">Control Anual y Mensual</span> preciso de tus gastos de parqueo sin perder tiempo administrativo.</p>
                    </div>
                    <div className="visual-box">
                        <i className="fas fa-chart-line icon-large"></i>
                    </div>
                </div>
            </section>

            {/* SLIDE 3: GESTIÓN CRUD */}
            <section>
                <div className="content-wrapper">
                    <div className="text-box">
                        <h2>Gestión Total</h2>
                        <p>Tu contabilidad personal, flexible y corregible.</p>
                        <br />
                        <ul className="feature-list">
                            <li><i className="fas fa-eye"></i> <strong>Visualizar:</strong> Historial completo en tiempo real.</li>
                            <li><i className="fas fa-edit"></i> <strong>Editar:</strong> Corrige montos o descripciones antes del corte.</li>
                            <li><i className="fas fa-trash-alt"></i> <strong>Borrar:</strong> Elimina registros duplicados fácilmente.</li>
                        </ul>
                    </div>
                    <div className="visual-box">
                        <div className="card-glass" style={{ textAlign: 'center' }}>
                            <i className="fas fa-mobile-alt icon-large" style={{ color: 'var(--neon-turq)' }}></i>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 4: REIMPRESIÓN (SAT) */}
            <section>
                <div className="content-wrapper">
                    <div className="text-box">
                        <h2>¿Perdiste la Factura?</h2>
                        <p>No hay problema. El sistema captura exactamente lo necesario.</p>
                        <br />
                        <p>Almacenamos <span className="highlight">NIT, Serie, DTE, Fecha y Monto</span>. Con estos datos validados, puedes ingresar al portal de la SAT y <span className="neon-text">reimprimir el documento legal</span> sin errores.</p>
                    </div>
                    <div className="visual-box">
                        <i className="fas fa-print icon-large"></i>
                    </div>
                </div>
            </section>

            {/* SLIDE 5: MUNICIPALES */}
            <section>
                <div className="content-wrapper">
                    <div className="text-box">
                        <h2>Recibos Municipales</h2>
                        <p>La excepción a la regla.</p>
                        <br />
                        <p>Dado que los tickets de peaje o parqueo municipal <strong>NO</strong> se pueden reimprimir en la SAT, el sistema <span className="neon-text">exige guardar una FOTO</span> de alta calidad. Tu respaldo digital es tu garantía.</p>
                    </div>
                    <div className="visual-box">
                        <i className="fas fa-camera icon-large" style={{ color: '#f97316' }}></i>
                    </div>
                </div>
            </section>

            {/* SLIDE 6: SEGURIDAD */}
            <section>
                <div className="content-wrapper">
                    <div className="text-box">
                        <h2>Acceso Seguro</h2>
                        <p>Sin contraseñas nuevas que recordar.</p>
                        <br />
                        <ul className="feature-list">
                            <li><i className="fab fa-google"></i> Login con cuenta corporativa Google.</li>
                            <li><i className="fas fa-shield-alt"></i> Seguridad de infraestructura Google.</li>
                            <li><i className="fas fa-check-circle"></i> Acceso inmediato y gratuito.</li>
                        </ul>
                    </div>
                    <div className="visual-box">
                        <i className="fab fa-google icon-large" style={{ color: 'white' }}></i>
                    </div>
                </div>
            </section>

            {/* SLIDE 7: TECNOLOGÍA */}
            <section>
                <div className="content-wrapper">
                    <div className="text-box">
                        <h2>Tecnología Moderna</h2>
                        <p>Stack robusto para una experiencia fluida.</p>
                        <br />
                        <ul className="feature-list">
                            <li><i className="fab fa-react" style={{ color: '#61DAFB' }}></i> <strong>React:</strong> Interfaz de usuario rápida.</li>
                            <li><i className="fas fa-database" style={{ color: '#336791' }}></i> <strong>PostgreSQL:</strong> Base de datos confiable.</li>
                            <li><i className="fas fa-brain" style={{ color: 'var(--neon-turq)' }}></i> <strong>Tesseract.js:</strong> Motor OCR en el navegador.</li>
                            <li><i className="fab fa-google" style={{ color: 'white' }}></i> <strong>Google Auth:</strong> Seguridad empresarial.</li>
                        </ul>
                    </div>
                    <div className="visual-box">
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', textAlign: 'center' }}>
                            <div><i className="fab fa-react icon-large" style={{ color: '#61DAFB', fontSize: '5rem' }}></i><br /><span style={{ color: '#888' }}>Frontend</span></div>
                            <div><i className="fas fa-database icon-large" style={{ color: '#336791', fontSize: '5rem' }}></i><br /><span style={{ color: '#888' }}>Backend</span></div>
                            <div><i className="fas fa-robot icon-large" style={{ color: 'var(--neon-turq)', fontSize: '5rem' }}></i><br /><span style={{ color: '#888' }}>AI</span></div>
                            <div><i className="fas fa-shield-alt icon-large" style={{ color: 'white', fontSize: '5rem' }}></i><br /><span style={{ color: '#888' }}>Auth</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 8: CIERRE */}
            <section>
                <div style={{ textAlign: 'center' }}>
                    <i className="fas fa-rocket icon-large" style={{ color: 'var(--neon-turq)', marginBottom: '20px' }}></i>
                    <h2>ControlFAC</h2>
                    <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Tu herramienta, tu control.</p>

                    <a href="https://controlfac.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn-app">
                        <span>Ingresar a la App</span>
                        <i className="fas fa-external-link-alt"></i>
                    </a>

                    <br /><br /><br />
                    <div style={{ fontSize: '0.9rem', color: '#555' }}>
                        © 2026 Con ❤️ Walter García Veliz
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PresentationV2;
