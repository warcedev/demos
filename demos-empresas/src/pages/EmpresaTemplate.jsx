import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './EmpresaTemplate.css';

const EmpresaTemplate = () => {
    const { id } = useParams();
    const [showIframe, setShowIframe] = useState(false);
    const [demoHtml, setDemoHtml] = useState('');
    const empresaNum = parseInt(id);

    useEffect(() => {
        setDemoHtml('');
        setShowIframe(false);

        import(`../demos/demo-empresa-${empresaNum}.html?raw`)
            .then(module => setDemoHtml(module.default))
            .catch(err => console.error('Error cargando demo:', err));
    }, [empresaNum]);

    const empresasData = {
        1: {
            nombre: 'TechCorp Solutions',
            tipo: 'Tecnología',
            color: '#3498db',
            descripcion: 'Innovación en soluciones digitales'
        },
        2: {
            nombre: 'FinanceGroup',
            tipo: 'Finanzas',
            color: '#27ae60',
            descripcion: 'Asesoría financiera profesional'
        },
        3: {
            nombre: 'MediCare Plus',
            tipo: 'Salud',
            color: '#e74c3c',
            descripcion: 'Cuidando tu bienestar'
        },
        4: {
            nombre: 'EduFuture',
            tipo: 'Educación',
            color: '#f39c12',
            descripcion: 'Educación del futuro'
        },
        5: {
            nombre: 'MegaStore',
            tipo: 'Retail',
            color: '#9b59b6',
            descripcion: 'Tu tienda de confianza'
        },
        6: {
            nombre: 'ConstructPro',
            tipo: 'Construcción',
            color: '#e67e22',
            descripcion: 'Construyendo sueños'
        },
        7: {
            nombre: 'ServiTotal',
            tipo: 'Servicios',
            color: '#1abc9c',
            descripcion: 'Soluciones integrales'
        },
        8: {
            nombre: 'ServiTotal',
            tipo: 'Servicios',
            color: '#1abc9c',
            descripcion: 'Soluciones integrales'
        },
        9: {
            nombre: 'ServiTotal',
            tipo: 'Servicios',
            color: '#1abc9c',
            descripcion: 'Soluciones integrales'
        },
        10: {
            nombre: 'ServiTotal',
            tipo: 'Servicios',
            color: '#1abc9c',
            descripcion: 'Soluciones integrales'
        },
        11: {
            nombre: 'ServiTotal',
            tipo: 'Servicios',
            color: '#1abc9c',
            descripcion: 'Soluciones integrales'
        },
        12: {
            nombre: 'ServiTotal',
            tipo: 'Servicios',
            color: '#1abc9c',
            descripcion: 'Soluciones integrales'
        }
    };

    const empresa = empresasData[empresaNum];

    if (!empresa) {
        return (
            <div className="error-container">
                <h2>Empresa no encontrada</h2>
                <Link to="/" className="back-button">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div className="empresa-container">
            <div className="empresa-header" style={{backgroundColor: empresa.color}}>
                <h1>{empresa.nombre}</h1>
                <p className="empresa-tipo">{empresa.tipo}</p>
            </div>

            <div className="empresa-content">
                <div className="info-section">
                    <h2>Sobre la empresa</h2>
                    <p>{empresa.descripcion}</p>
                </div>

                <div className="demo-section">
                    <h2>Demo Interactiva</h2>

                    <div className="demo-buttons">
                        <button
                            onClick={() => setShowIframe(!showIframe)}
                            className="demo-button"
                            style={{backgroundColor: empresa.color}}
                            disabled={!demoHtml}
                        >
                            {showIframe ? 'Ocultar Demo' : 'Mostrar Demo'}
                        </button>
                    </div>

                    {showIframe && demoHtml && (
                        <div className="iframe-container">
                            <iframe
                                srcDoc={demoHtml}
                                title={`Demo ${empresa.nombre}`}
                                className="demo-iframe"
                                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                            />
                        </div>
                    )}
                </div>

                {/* Lista de todas las empresas */}
                <div className="nav-empresas">
                    <h3>Todas las empresas:</h3>
                    <div className="empresas-links">
                        {[1,2,3,4,5,6,7].map(num => (
                            <Link
                                key={num}
                                to={`/empresa/${num}`}
                                className="empresa-link"
                                style={num === empresaNum ? {backgroundColor: empresa.color, color: 'white'} : {}}
                            >
                                Empresa {num}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmpresaTemplate;