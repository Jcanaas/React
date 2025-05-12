import React, { useState, useEffect } from 'react';

const Header = ({ onNavigate }) => {
    const [profileImage, setProfileImage] = useState('img/user_default.png'); // Imagen predeterminada

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
                <nav>
                    <button style={buttonStyle} onClick={() => onNavigate('doc')}>Documentación</button>
                    <button style={buttonStyle} onClick={() => onNavigate('form')}>Formulario de Opinión</button>
                    <button style={buttonStyle} onClick={() => onNavigate('signin')}>Registrarse</button>
                    <button style={buttonStyle} onClick={() => onNavigate('login')}>Iniciar Sesión</button>
                    <div className="group">
                        <input
                            type="text"
                            id="searchInput"
                            className="input"
                            placeholder="Buscar..."
                            onKeyUp={() => console.log('Buscando...')} // Implementa la lógica de búsqueda aquí
                        />
                        <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M10 2a8 8 0 105.293 14.707l5.387 5.387a1 1 0 001.414-1.414l-5.387-5.387A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
                        </svg>
                    </div>
                    <button style={buttonStyle} onClick={() => onNavigate('user')} className="user-button">
                        <img id="userProfileImage" src={profileImage} alt="User Profile" className="user-icon" />
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;