import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-white py-6" style={{ width: '100%' }}>
      <div
        className="contenedor"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        <div className="footer-logo" style={{ textAlign: 'left' }}>
          <h2
            className="logotipo"
            onClick={() => (window.location.href = 'index.html')}
          >
            JoJo-flix
          </h2>
          <p className="text-sm text-gray-400">Tu portal de entretenimiento</p>
        </div>
        <div
          className="footer-links"
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'flex-end',
            marginTop: '8px',
            flexGrow: 1,
          }}
        >
          <a href="#" className="text-gray-400 hover:text-white">Acerca de</a>
          <a href="#" className="text-gray-400 hover:text-white">Privacidad</a>
          <a href="form.html" className="text-gray-400 hover:text-white">Contacto</a>
        </div>
      </div>
      <div
        className="text-center text-gray-500 mt-4"
        style={{ textAlign: 'center', marginTop: '24px' }}
      >
        &copy; 2025 JoJo-Flix. Ninguno de los derechos reservados.
      </div>
    </footer>
  );
};
