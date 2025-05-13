import React, { useState, useEffect } from 'react';

const Header = ({ onNavigate }) => {
    const [profileImage, setProfileImage] = useState('img/user_default.png'); // Imagen predeterminada
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú desplegable

    useEffect(() => {
        // Cargar la imagen de perfil desde localStorage
        const savedImage = localStorage.getItem('profileImage');
        if (savedImage) {
            setProfileImage(savedImage);
        }
    }, []);

    const buttonStyle = {
        textDecoration: 'none',
        color: '#2a75bb',
        fontSize: '16px',
        fontWeight: '500',
        transition: 'color 0.3s ease, transform 0.3s ease',
        background: 'none',
        border: 'none',
        padding: '0',
        cursor: 'pointer',
    };

    return (
        <header>
            <div className="contenedor">
                <h2 className="logotipo" onClick={() => onNavigate('home')}>Pokémon RPG</h2>
                <button
                    className="menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>
                <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    <button style={buttonStyle} onClick={() => onNavigate('doc')}>Documentación</button>
                    <button style={buttonStyle} onClick={() => onNavigate('form')}>Formulario de Opinión</button>
                    <button style={buttonStyle} onClick={() => onNavigate('signin')}>Registrarse</button>
                    <button style={buttonStyle} onClick={() => onNavigate('login')}>Iniciar Sesión</button>
                    <button style={buttonStyle} onClick={() => onNavigate('user')} className="user-button">
                        <img id="userProfileImage" src={profileImage} alt="User Profile" className="user-icon" />
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;