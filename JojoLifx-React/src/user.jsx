import React, { useEffect, useState } from 'react';

export const User = () => {
  const [username, setUsername] = useState('');
  const [profileImage, setProfileImage] = useState(
    'https://raw.githubusercontent.com/Jcanaas/JoJo-Flix/refs/heads/main/img/user_default.png'
  );
  const [ultimoBeck, setUltimoBeck] = useState('Cargando...');
  const [ultimoMonster, setUltimoMonster] = useState('Cargando...');

  useEffect(() => {
    const usuario = localStorage.getItem('usuario');
    const password = localStorage.getItem('password');
    const savedImage = localStorage.getItem('profileImage');

    if (!usuario || !password) {
      console.log('No hay credenciales, redirigiendo...');
      return; // No redirijas con window.location.href
    }

    setUsername(usuario);
    if (savedImage) setProfileImage(savedImage);

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
          setProfileImage(data.fotodeperfil);
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
  }, []);

  return (
    <main>
      <section className="user-profile">
        <div  className="profile-header">
          <h1 style={{fontSize:'46px',}}>Bienvenid@, {username}!</h1>
          <div style={{ display: 'flex', justifyContent: 'center',}}>
  <img
    style={{}}
    src={profileImage}
    alt="Imagen de perfil"
    className="profile-image"
  />
</div>
        </div>
        <div className="profile-content">
          <h2>Aquí tienes una lista de todas las series que estás viendo:</h2>
          <ul className="user-list" id="user-list">
            {/* Agrega aquí los items de la lista si los tienes */}
          </ul>
          <h2>Último capítulo visto de BECK: Mongolian Chop Squad:</h2>
          <p>{ultimoBeck}</p>
          <h2 style={{ marginTop: '20px' }}>Último capítulo visto de Monster:</h2>
          <p>{ultimoMonster}</p>
        </div>
      </section>
    </main>
  );
};
