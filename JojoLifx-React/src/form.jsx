import React, { useState } from "react";

const FormularioSatisfaccion = () => {
  const [nombre, setNombre] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [rating, setRating] = useState("3");
  const [mensaje, setMensaje] = useState("");
  const [mensajeClase, setMensajeClase] = useState(""); // Clase para el mensaje (verde o rojo)
  const [loading, setLoading] = useState(false); // Estado para mostrar el spinner

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica si los campos obligatorios están completos
    if (!nombre.trim() || !rating) {
      setMensaje("Por favor, completa todos los campos obligatorios.");
      setMensajeClase("bg-red-500 text-white"); // Mensaje de error: fondo rojo, texto blanco
      return;
    }

    setMensaje("Enviando...");
    setMensajeClase("bg-blue-500 text-white"); // Mensaje de envío: fondo azul, texto blanco
    setLoading(true); // Mostrar el spinner

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzsORwapCu088hn1FW4aFLSxJas6lJp0VPK6nwJbWMhsS2T_AoGdiAt9jKXqUGaa6jfaQ/exec";

    // Construir la URL de la solicitud JSONP
    const url = `${scriptURL}?callback=loadData&nombre=${encodeURIComponent(
      nombre
    )}&comentarios=${encodeURIComponent(
      comentarios
    )}&rating=${encodeURIComponent(rating)}`;

    // Crear el script para la solicitud JSONP
    const script = document.createElement("script");
    script.src = url;

    // Definir la función de callback para JSONP
    window.loadData = (data) => {
      console.log("Respuesta JSONP: ", data);

      if (data.mensaje) {
        // Si se recibe la respuesta con éxito
        setMensaje("¡Formulario enviado con éxito!");
        setMensajeClase("bg-green-500 text-white"); // Mensaje de éxito: fondo verde, texto blanco

        // Limpiar el formulario
        setNombre("");
        setComentarios("");
        setRating("3");

        // Redirigir a la página de agradecimiento después de 2 segundos
        setTimeout(() => {
          window.location.href = "thank_you.html";
        }, 2000);
      } else {
        // Si se recibe un error
        setMensaje("Hubo un error.");
        setMensajeClase("bg-red-500 text-white"); // Mensaje de error: fondo rojo, texto blanco
      }

      setLoading(false); // Ocultar el spinner
    };

    // Agregar el script al DOM
    document.body.appendChild(script);
  };

  return (
    <div className="min-h-screen bg-slate-300 overflow-y-auto">
      <section className="waves">
        <div className="air air1"></div>
        <div className="air air2"></div>
        <div className="air air3"></div>
        <div className="air air4"></div>
      </section>
      <div className="max-w-3xl mx-auto p-10 relative z-10 login-container">
        <h1 className="text-4xl pt-16">Formulario de Satisfacción</h1>
        <div className="bg-white rounded-lg shadow-xl p-10 mt-5">
          <form id="formulario" className="space-y-3" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
              <label htmlFor="nomCognoms" className="font-regular font-medium">
                Nombre y Apellidos:
              </label>
              <input
                id="nomCognoms"
                type="text"
                name="nomCognoms"
                placeholder="Nombre y Apellidos"
                className="border border-gray-300 px-3 py-2 rounded-lg"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="observacions" className="font-regular font-medium">
                Comentarios (máximo 200 caracteres):
              </label>
              <textarea
                id="observacions"
                name="observacions"
                rows="4"
                className="border border-gray-300 px-3 py-2 rounded-lg"
                maxLength="200"
                value={comentarios}
                onChange={(e) => setComentarios(e.target.value)}
              ></textarea>
            </div>

            <div className="rating">
              {[5, 4, 3, 2, 1].map((value) => (
                <React.Fragment key={value}>
                  <input
                    value={value}
                    name="rate"
                    id={`star${value}`}
                    type="radio"
                    checked={rating === String(value)}
                    onChange={() => setRating(String(value))}
                  />
                  <label title="text" htmlFor={`star${value}`}></label>
                </React.Fragment>
              ))}
            </div>

            <div id="botones" className="flex gap-5">
              <button
                type="submit"
                className="flex-1 bg-pink-600 text-white flex justify-center gap-2 items-center p-3"
                id="btnEnviar"
                disabled={loading} // Deshabilitar el botón mientras se envía
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>
              <button
                className="flex-1 bg-gray-800 text-white flex justify-center gap-2 items-center p-3"
                type="reset"
                onClick={() => {
                  setNombre("");
                  setComentarios("");
                  setRating("3");
                  setMensaje("");
                  setMensajeClase("");
                }}
              >
                Reset
              </button>
            </div>
          </form>
          {mensaje && (
            <div
              id="mensaje"
              className={`mt-5 text-center p-3 rounded-lg ${mensajeClase}`}
            >
              {mensaje}
            </div>
          )}
          {loading && (
            <div id="spinner" className="flex justify-center mt-5">
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
          <div className="mt-5 text-center">
            O si lo prefieres puedes dejar tu comentario en mi{" "}
            <a
              href="https://github.com/Jcanaas/JoJo-Flix/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue"
            >
              GitHub
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioSatisfaccion;
