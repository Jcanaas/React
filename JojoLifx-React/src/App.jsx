//Componentes de la aplicación
import React, { useState, useEffect } from 'react';
import { Header } from './Header.jsx';
import { MainContent } from './MainContent';
import { Footer } from './Footer';
import { User } from './user.jsx';
import { Login } from './Login.jsx';
import { SignIn } from './signin.jsx';

//Css
import './user.css';
import './index.css';
import './estilos.css';
import './nav.css';
import './olas.css';
import './popup.css';
import './spiner.css';

export const App = () => {
  const [currentComponent, setCurrentComponent] = useState('main'); // Estado para controlar el componente actual

  const handleComponentChange = (component) => {
    setCurrentComponent(component); // Cambia el estado al componente deseado
  };

  // Manejar dinámicamente el CSS de login
  useEffect(() => {
    const loginStylesId = 'login-css';
    const existingLoginStyles = document.getElementById(loginStylesId);

    if (currentComponent === 'login' || currentComponent === 'signin') {
      if (!existingLoginStyles) {
        // Agregar login.css dinámicamente si no existe
        const loginStyles = document.createElement('link');
        loginStyles.rel = 'stylesheet';
        loginStyles.href = '/src/login.css'; // Ajusta la ruta según la ubicación real
        loginStyles.id = loginStylesId;
        document.head.appendChild(loginStyles);
      }
    } else {
      // Eliminar login.css si no estamos en Login o SignIn
      if (existingLoginStyles) {
        existingLoginStyles.remove();
      }
    }
  }, [currentComponent]); // Ejecutar cada vez que cambie currentComponent

  console.log('Componente actual:', currentComponent); // Para depuración

  return (
    <>
      <Header onComponentChange={handleComponentChange} /> {/* Pasa la función como prop */}
      {currentComponent === 'main' && <MainContent />}
      {currentComponent === 'user' && <User />}
      {currentComponent === 'login' && <Login />}
      {currentComponent === 'signin' && <SignIn />}
      {currentComponent !== 'login' && currentComponent !== 'signin' && <Footer />} {/* Renderiza el Footer solo si no es login */}
    </>
  );
};