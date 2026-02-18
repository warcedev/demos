const empresas = [
    { id: 1, nombre: 'empresa de marketing', tag: 'marketing' },
    { id: 2, nombre: 'empresa de caligrafia', tag: 'caligrafia' },
    { id: 3, nombre: 'consultoria', tag: 'servicios' },
    { id: 4, nombre: 'discuteca diseño full', tag: 'disco' },
    { id: 5, nombre: 'disco simple', tag: 'disco' },
    { id: 6, nombre: 'empresa de impresiones 3d', tag: 'servicios' },
    { id: 7, nombre: 'tienda de productos/presentacion', tag: 'tienda' },
];

const Home = () => {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;800&family=DM+Sans:wght@300;400;500&display=swap');

                * { box-sizing: border-box; margin: 0; padding: 0; }

                .home-wrap {
                    min-height: 100vh;
                    background: #fff;
                    font-family: 'DM Sans', sans-serif;
                    padding: 5rem 8rem;
                }

                .home-eyebrow {
                    font-size: 0.75rem;
                    font-weight: 500;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: #9b8fd4;
                    margin-bottom: 1rem;
                }

                .home-heading {
                    font-family: 'Syne', sans-serif;
                    font-size: clamp(2.8rem, 5vw, 4.5rem);
                    font-weight: 800;
                    color: #0f0f0f;
                    line-height: 1.05;
                    letter-spacing: -0.03em;
                    margin: 0 0 1rem;
                }

                .home-heading span {
                    background: linear-gradient(90deg, #5561f5, #4b2fa3, #9b59d4);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .home-desc {
                    font-size: 1rem;
                    color: #888;
                    font-weight: 300;
                    margin: 0 0 3rem;
                    line-height: 1.6;
                }

                .divider {
                    width: 48px;
                    height: 3px;
                    background: linear-gradient(90deg, #5561f5, #9b59d4);
                    border-radius: 2px;
                    margin-bottom: 2.5rem;
                }

                .empresa-list {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }

                .empresa-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1.4rem 0;
                    border-bottom: 1px solid #f0f0f0;
                    text-decoration: none;
                    color: inherit;
                    transition: all 0.2s ease;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                }

                .empresa-item:first-child {
                    border-top: 1px solid #f0f0f0;
                }

                .empresa-item::before {
                    content: '';
                    position: absolute;
                    left: -100%;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, #f7f6ff, transparent);
                    transition: left 0.3s ease;
                    z-index: 0;
                }

                .empresa-item:hover::before {
                    left: 0;
                }

                .empresa-item:hover .empresa-nombre {
                    color: #5561f5;
                    transform: translateX(6px);
                }

                .empresa-item:hover .empresa-arrow {
                    opacity: 1;
                    transform: translateX(0);
                    color: #9b59d4;
                }

                .empresa-left {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    z-index: 1;
                }

                .empresa-num {
                    font-family: 'Syne', sans-serif;
                    font-size: 0.7rem;
                    font-weight: 600;
                    color: #ccc;
                    width: 24px;
                }

                .empresa-nombre {
                    font-size: 1.1rem;
                    font-weight: 500;
                    color: #1a1a1a;
                    transition: all 0.25s ease;
                }

                .empresa-right {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    z-index: 1;
                }

                .empresa-tag {
                    font-size: 0.72rem;
                    font-weight: 400;
                    color: #bbb;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                }

                .empresa-arrow {
                    font-size: 1.1rem;
                    opacity: 0;
                    transform: translateX(-8px);
                    transition: all 0.25s ease;
                }

                @media (max-width: 768px) {
                    .home-wrap { padding: 3rem 1.5rem; }
                    .empresa-tag { display: none; }
                }
            `}</style>

            <div className="home-wrap">
                <p className="home-eyebrow">Desarrollo web · ejemplos codebywill</p>
                <h1 className="home-heading">
                    Ejemplos de<br /><span>desarrollo</span>
                </h1>
                <p className="home-desc">
                    Demos interactivas de interfaces reales para distintos sectores.
                </p>
                <div className="divider" />

                <div className="empresa-list">
                    {empresas.map((e, i) => (
                        <a
                            key={e.id}
                            className="empresa-item"
                            href={`/demos/demo-empresa-${e.id}.html`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="empresa-left">
                                <span className="empresa-num">0{i + 1}</span>
                                <span className="empresa-nombre">{e.nombre}</span>
                            </div>
                            <div className="empresa-right">
                                <span className="empresa-tag">{e.tag}</span>
                                <span className="empresa-arrow">→</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;