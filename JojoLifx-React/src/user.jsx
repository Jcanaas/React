import React, { useEffect, useState } from 'react';
import { Header } from './Header.jsx';
import { MainContent } from './MainContent';
import { Footer } from './Footer';
import { Login } from './Login.jsx';
import { SignIn } from './signin.jsx';
import FormularioSatisfaccion from './form.jsx';

export const App = () => {
  const [currentComponent, setCurrentComponent] = useState('main');
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem('profileImage') || 'img/profile.png'
  ); // Estado compartido para la imagen de perfil

  const handleComponentChange = (component) => {
    setCurrentComponent(component);
  };

  useEffect(() => {
    const storedImage = localStorage.getItem('profileImage');
    if (storedImage) {
      setProfileImage(storedImage);
    }
  }, []);

  return (
    <>
      <Header
        onComponentChange={handleComponentChange}
        profileImage={profileImage} // Pasar la imagen de perfil al Header
      />
      {currentComponent === 'main' && <MainContent />}
      {currentComponent === 'user' && (
        <User
          setProfileImage={setProfileImage} // Pasar la función para actualizar la imagen
        />
      )}
      {currentComponent === 'login' && <Login />}
      {currentComponent === 'signin' && <SignIn />}
      {currentComponent === 'form' && <FormularioSatisfaccion />}
      {currentComponent !== 'login' && currentComponent !== 'signin' && <Footer />}
    </>
  );
};

export const User = ({ setProfileImage }) => {
  const defaultImage = 'https://raw.githubusercontent.com/Jcanaas/JoJo-Flix/refs/heads/main/img/user_default.png'; // Imagen por defecto
  const [username, setUsername] = useState('');
  const [profileImage, setLocalProfileImage] = useState(defaultImage); // Inicialmente muestra la imagen por defecto
  const [isImageLoading, setIsImageLoading] = useState(true); // Estado para manejar la carga de la imagen
  const [ultimoBeck, setUltimoBeck] = useState('Cargando...');
  const [ultimoMonster, setUltimoMonster] = useState('Cargando...');

  useEffect(() => {
    const usuario = localStorage.getItem('usuario');
    const password = localStorage.getItem('password');
    const savedImage = localStorage.getItem('profileImage');

    if (!usuario || !password) {
      console.log('No hay credenciales, redirigiendo...');
      return;
    }

    setUsername(usuario);

    // Si hay una imagen guardada, actualiza la imagen local
    if (savedImage) {
      setLocalProfileImage(savedImage);
    }

    // Enviar datos para verificación
    fetch('https://api.ipify.org?format=json')
      .then((res) => res.json())
      .then((ipData) => {
        const data = {
          accion: 'login',
          usuario,
          contrasena: password,
          foto: savedImage,
          ip: ipData.ip,
        };

        return fetch('https://script.google.com/macros/s/AKfycbzsORwapCu088hn1FW4aFLSxJas6lJp0VPK6nwJbWMhsS2T_AoGdiAt9jKXqUGaa6jfaQ/exec', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        });
      })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) {
          localStorage.clear();
          return;
        }

        if (data.fotodeperfil && !savedImage) {
          localStorage.setItem('profileImage', data.fotodeperfil);
          setLocalProfileImage(data.fotodeperfil);
          setProfileImage(data.fotodeperfil); // Actualizar la imagen de perfil en el estado compartido
        }

        setUltimoBeck(
          data.ultimoepisodioBeck ||
            '¡Oh no! parece que no has visto ningun capítulo de BECK: Mongolian Chop Squad :c'
        );

        const episodioData = {
          accion: 'episodioMonster',
          usuario,
        };

        return fetch('https://script.google.com/macros/s/AKfycbzsORwapCu088hn1FW4aFLSxJas6lJp0VPK6nwJbWMhsS2T_AoGdiAt9jKXqUGaa6jfaQ/exec', {
          method: 'POST',
          body: JSON.stringify(episodioData),
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        });
      })
      .then((res) => res?.json?.())
      .then((monsterData) => {
        if (monsterData?.ultimoepisodioMonster) {
          setUltimoMonster(monsterData.ultimoepisodioMonster);
        } else {
          setUltimoMonster(
            '¡Oh no! parece que no has visto ningun capítulo de Monster :c'
          );
        }
      })
      .catch((error) => console.error('Error:', error));
  }, [setProfileImage]);

  const handleImageLoad = () => {
    setIsImageLoading(false); // Ocultar el spinner cuando la imagen se haya cargado
  };

  return (
    <main>
      <section className="user-profile">
        <div className="profile-header">
          <h1 style={{ fontSize: '46px' }}>Bienvenid@, {username}!</h1>
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            {isImageLoading && (
              <div className="spinner" style={{ position: 'absolute' }}>
                {/* Spinner o cualquier indicador de carga */}
                <div className="loading-spinner"></div>
              </div>
            )}
            <img
              src={profileImage}
              alt="Imagen de perfil"
              className="profile-image"
              onLoad={handleImageLoad} // Detectar cuando la imagen se haya cargado
              style={isImageLoading ? { visibility: 'hidden' } : {}} // Ocultar la imagen mientras carga
            />
          </div>
        </div>
        <div className="profile-content">
          <h2>Aquí tienes una lista de todas las series que estás viendo:</h2>
          <ul className="user-list" id="user-list"></ul>
          <h2>Último capítulo visto de BECK: Mongolian Chop Squad:</h2>
          <p>{ultimoBeck}</p>
          <h2 style={{ marginTop: '20px' }}>Último capítulo visto de Monster:</h2>
          <p>{ultimoMonster}</p>
        </div>
      </section>
    </main>
  );
};
