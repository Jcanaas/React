import React from 'react';

export const Header = ({ onComponentChange, profileImage }) => {
  const handleSearch = (e) => {
    if (e.key !== 'Enter') return;

    const query = e.target.value.trim().toLowerCase();
    if (!query) return;

    const images = document.querySelectorAll('img[alt]');
    for (const img of images) {
      const altText = img.getAttribute('alt').toLowerCase();
      if (altText.includes(query)) {
        img.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
    }
  };

  return (
    <header>
      <div className="contenedor">
        <h2 className="logotipo" onClick={() => onComponentChange('main')}>
          JoJo-flix
        </h2>
        <nav>
          <a onClick={() => onComponentChange('form')}>Formulario de satisfacción</a>
          <a onClick={() => onComponentChange('signin')}>SIGN IN</a>
          <a onClick={() => onComponentChange('login')}>LOG IN</a>
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
              onComponentChange('user');
            }}
          >
            <img
              id="userProfileImage"
              src={profileImage} // Usar la imagen de perfil pasada como prop
              alt="User Profile"
              className="user-icon"
            />
          </a>
        </nav>
      </div>
    </header>
  );
};