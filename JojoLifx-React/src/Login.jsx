import React, { useState } from 'react';
import { enviarLogin, mostrarAlertaExito, mostrarAlertaError } from './js/login.js';

export const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario
    setLoading(true); // Muestra el spinner mientras se procesa el inicio de sesión

    try {
      const data = await enviarLogin(usuario, password); // Llama a la función de login
      if (data.success) {
        mostrarAlertaExito(data.message);
        localStorage.setItem('usuario', usuario);
        localStorage.setItem('password', password);

        // Redirigir después de un tiempo (opcional)
        setTimeout(() => {
          window.location.href = '/user';
        }, 2000);
      } else {
        mostrarAlertaError(data.message);
      }
    } catch (error) {
      mostrarAlertaError('Hubo un error al iniciar sesión. Por favor, inténtalo nuevamente.');
    } finally {
      setLoading(false); // Oculta el spinner
    }
  };

  return (
    <div className="min-h-screen bg-slate-300">
      <section className="waves">
        <div className="air air1"></div>
        <div className="air air2"></div>
        <div className="air air3"></div>
        <div className="air air4"></div>
      </section>

      <div className="max-w-3xl mx-auto p-10 relative z-10 login-container">
        <h1 className="text-4xl pt-16">Iniciar Sesión</h1>
        <div className="bg-white rounded-lg shadow-xl p-10 mt-5">
          <form id="formulario" className="space-y-3" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
              <label htmlFor="usuario" className="font-regular font-medium">
                Usuario:
              </label>
              <input
                id="usuario"
                type="text"
                name="usuario"
                placeholder="Nombre de usuario"
                className="border border-gray-300 px-3 py-2 rounded-lg"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)} // Actualiza el estado
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="password" className="font-regular font-medium">
                Contraseña:
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Contraseña"
                className="border border-gray-300 px-3 py-2 rounded-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Actualiza el estado
                required
              />
            </div>

            <div id="botones" className="flex gap-5">
              <button
                type="submit"
                className={`flex-1 bg-pink-600 text-white flex justify-center gap-2 items-center p-3 ${
                  loading ? 'opacity-50' : ''
                }`}
                disabled={loading} // Desactiva el botón mientras se procesa
              >
                {loading ? 'Cargando...' : 'Iniciar Sesión'}
              </button>

              <button
                className="flex-1 bg-gray-800 text-white flex justify-center gap-2 items-center p-3"
                type="reset"
                onClick={() => {
                  setUsuario('');
                  setPassword('');
                }}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};