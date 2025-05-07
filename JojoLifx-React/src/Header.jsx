import React, { useState, useEffect } from 'react';

export const Header = ({ onComponentChange }) => {
  const [profileImage, setProfileImage] = useState(
    'https://raw.githubusercontent.com/Jcanaas/JoJo-Flix/refs/heads/main/img/user_pink.png'
  );

  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleLogoClick = () => {
    onComponentChange('main'); // Cambia a MainContent
  };

  const handleLogInClick = () => {
    onComponentChange('login'); // Cambia a Login
  };

  const handleSignInClick = () => {
    onComponentChange('signin'); // Cambia a SignIn
  };

  const handleSearch = (e) => {
    if (e.key !== 'Enter') return;

    const query = e.target.value.trim().toLowerCase();
    if (!query) return;

    const images = document.querySelectorAll('img[alt]');

    for (const img of images) {
      const altText = img.getAttribute('alt').toLowerCase();
      if (altText.includes(query)) {
        img.scrollIntoView({ behavior: 'smooth', block: 'center' });
        break;
      }
    }
  };

  return (
    <header>
      <div className="contenedor">
        <h2 className="logotipo" onClick={handleLogoClick}>
          JoJo-flix
        </h2>
        <nav>
          <a href="#" onClick={() => onComponentChange('form')}>
            Formulario de satisfacción
          </a>
          <a href="#" onClick={handleSignInClick}>
            SIGN IN
          </a>
          <a href="#" onClick={handleLogInClick}>
            LOG IN
          </a>
          <div className="group">
            <input
              type="text"
              id="searchInput"
              className="input"
              placeholder="Buscar..."
              onKeyUp={handleSearch}
            />
            <svg
              className="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M10 2a8 8 0 105.293 14.707l5.387 5.387a1 1 0 001.414-1.414l-5.387-5.387A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
            </svg>
          </div>
          <a
            className="user-button"
            onClick={(e) => {
              e.preventDefault();
              onComponentChange('user'); // Cambia a User
            }}
          >
            <img
              id="userProfileImage"
              src={profileImage}
              alt="User Profile"
              className="user-icon"
            />
          </a>
        </nav>
      </div>
    </header>
  );
};
