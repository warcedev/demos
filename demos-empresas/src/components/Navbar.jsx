import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');

                .navbar-wrap {
                    background: #fff;
                    border-bottom: 1px solid #f0f0f0;
                    padding: 0 8rem;
                    height: 64px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    position: sticky;
                    top: 0;
                    z-index: 100;
                }

                .navbar-brand {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    text-decoration: none;
                }

                .navbar-logo-text {
                    font-family: 'Syne', sans-serif;
                    font-weight: 800;
                    font-size: 1.25rem;
                    background: linear-gradient(90deg, #5561f5, #4b2fa3, #9b59d4);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    letter-spacing: -0.02em;
                }

                .navbar-divider {
                    width: 1px;
                    height: 18px;
                    background: #e0e0e0;
                }

                .navbar-section {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 0.85rem;
                    font-weight: 400;
                    color: #888;
                    letter-spacing: 0.02em;
                }

                @media (max-width: 768px) {
                    .navbar-wrap { padding: 0 1.5rem; }
                }
            `}</style>

            <nav className="navbar-wrap">
                <Link to="/" className="navbar-brand">
                    <span className="navbar-logo-text">CodeByWill</span>
                    <div className="navbar-divider" />
                    <span className="navbar-section">ejemplos</span>
                </Link>
            </nav>
        </>
    );
};

export default Navbar;