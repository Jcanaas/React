import React, { useState } from 'react';
import { validarFormulario, enviarRegistro } from './js/signinfunctions.jsx';

export const SignIn = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [errores, setErrores] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Simular validación del formulario
    const formData = { usuario: username, correo: email, contrasena: password, confirmarContrasena: confirmPassword };
    const hasError = validarFormulario(formData, setErrores);
    if (hasError) {
      setLoading(false);
      return;
    }

    try {
      // Simular envío de datos
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simular 2 segundos de carga
      setMessage('Registro exitoso.');
    } catch (error) {
      setMessage('Registro exitoso.'); // Mostrar éxito incluso si falla
    } finally {
      setLoading(false);

      // Esperar 2 segundos y redirigir al login
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 2000);
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
        <h1 className="text-4xl pt-16">Registro</h1>
        <div className="bg-white rounded-lg shadow-xl p-10 mt-5">
          <form id="formulario-signin" className="space-y-3" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
              <label htmlFor="username" className="font-regular font-medium">
                Nombre de usuario:
              </label>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="Nombre de usuario"
                className="border border-gray-300 px-3 py-2 rounded-lg"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              {errores.usuario && <div className="text-red-500 text-sm">{errores.usuario}</div>}
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="font-regular font-medium">
                Email:
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email, ej: usuario@empresa.com"
                className="border border-gray-300 px-3 py-2 rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errores.correo && <div className="text-red-500 text-sm">{errores.correo}</div>}
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
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errores.contrasena && <div className="text-red-500 text-sm">{errores.contrasena}</div>}
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="confirm-password" className="font-regular font-medium">
                Confirmar Contraseña:
              </label>
              <input
                id="confirm-password"
                type="password"
                name="confirmPassword"
                placeholder="Confirmar Contraseña"
                className="border border-gray-300 px-3 py-2 rounded-lg"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {errores.confirmarContrasena && (
                <div className="text-red-500 text-sm">{errores.confirmarContrasena}</div>
              )}
            </div>

            <div id="botones" className="flex gap-5">
              <button
                type="submit"
                className={`flex-1 bg-pink-600 text-white flex justify-center gap-2 items-center p-3 ${
                  loading ? 'opacity-50' : ''
                }`}
                disabled={loading}
              >
                {loading ? 'Cargando...' : 'Registrarse'}
              </button>

              <button
                className="flex-1 bg-gray-800 text-white flex justify-center gap-2 items-center p-3"
                type="reset"
                onClick={() => {
                  setUsername('');
                  setEmail('');
                  setPassword('');
                  setConfirmPassword('');
                  setErrores({});
                  setMessage('');
                }}
              >
                Reset
              </button>
            </div>
          </form>

          {message && (
            <div
              id="mensaje"
              className="mt-4 text-center p-3 rounded-lg bg-green-500 text-white"
              // style="margnin-top: 2px;"
            >
              {message}
            </div>
          )}

          {loading && (
            <div id="spinner" className="flex justify-center mt-10">
              <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};