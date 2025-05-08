// Componentes de la aplicación
import React, { useState, useEffect } from 'react';
import { Header } from './Header.jsx';
import { MainContent } from './MainContent';
import { Footer } from './Footer';
import { User } from './user.jsx';
import { Login } from './Login.jsx';
import { SignIn } from './signin.jsx';
import FormularioSatisfaccion from './form.jsx';

// CSS
import './user.css';
import './index.css';
import './estilos.css';
import './nav.css';
import './olas.css';
import './popup.css';
import './spiner.css';

export const App = () => {
  const [currentComponent, setCurrentComponent] = useState('main');
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem('profileImage') || '../img/user_pink.png'
  );

  const handleComponentChange = (component) => {
    setCurrentComponent(component); 
  };

  useEffect(() => {
    const loginStylesId = 'login-css';
    const existingLoginStyles = document.getElementById(loginStylesId);

    if (currentComponent === 'login' || currentComponent === 'signin' || currentComponent === 'form') {
      if (!existingLoginStyles) {
        const loginStyles = document.createElement('link');
        loginStyles.rel = 'stylesheet';
        loginStyles.href = '/src/login.css'; 
        loginStyles.id = loginStylesId;
        document.head.appendChild(loginStyles);
      }
    } else {
      if (existingLoginStyles) {
        existingLoginStyles.remove();
      }
    }
  }, [currentComponent]);

  useEffect(() => {
    const storedImage = localStorage.getItem('profileImage');
    if (storedImage) {
      setProfileImage(storedImage);
    }
  }, []);

  console.log('Componente actual:', currentComponent);

  return (
    <>
      <Header
        onComponentChange={handleComponentChange}
        profileImage={profileImage} // Pasar la imagen de perfil al Header
      />
      {currentComponent === 'main' && <MainContent />}
      {currentComponent === 'user' && (
        <User
          setProfileImage={(newImage) => {
            localStorage.setItem('profileImage', newImage); // Actualizar en localStorage
            setProfileImage(newImage); // Actualizar el estado global
          }}
        />
      )}
      {currentComponent === 'login' && <Login />}
      {currentComponent === 'signin' && <SignIn />}
      {currentComponent === 'form' && <FormularioSatisfaccion />}
      {currentComponent !== 'login' && currentComponent !== 'signin' && <Footer />}
    </>
  );
};